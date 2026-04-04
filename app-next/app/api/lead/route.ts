import { NextResponse } from "next/server";
import { z } from "zod";

// Rate limiter en memoria: máx 5 envíos por IP cada 10 minutos
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count += 1;
  return false;
}

const leadPayloadSchema = z.object({
  profile: z.string().min(1),
  service: z.string().min(1),
  scope: z.string().min(1),
  timeline: z.string().min(1),
  sector: z.string().min(1),
  budget: z.object({
    target: z.number(),
    range: z.object({ min: z.number(), max: z.number() }),
  }),
  lead: z.object({
    name: z.string().min(1),
    phone: z.string(),
    email: z.string().email().optional(),
    company: z.string().optional(),
  }),
  createdAt: z.string(),
});

type LeadPayload = z.infer<typeof leadPayloadSchema>;

const log = (level: "info" | "warn" | "error", event: string, meta?: Record<string, unknown>) => {
  const entry = JSON.stringify({ ts: new Date().toISOString(), level, event, ...meta });
  if (level === "error") console.error(entry);
  else if (level === "warn") console.warn(entry);
  else console.log(entry);
};

const sendToGoogleSheets = async (payload: LeadPayload) => {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    log("warn", "crm_skipped", { reason: "missing_webhook" });
    return { status: "skipped" as const, reason: "missing_webhook" };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      log("error", "crm_failed", { status: response.status, lead: payload.lead.name });
      return { status: "failed" as const, reason: `http_${response.status}` };
    }

    log("info", "crm_sent", { lead: payload.lead.name, service: payload.service });
    return { status: "sent" as const };
  } catch (err) {
    log("error", "crm_exception", { message: err instanceof Error ? err.message : String(err) });
    return { status: "failed" as const, reason: "exception" };
  }
};

const sendConfirmationEmail = async (payload: LeadPayload) => {
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!resendKey || !from || !payload.lead.email) {
    log("warn", "email_skipped", { reason: "missing_email_config_or_recipient", hasEmail: !!payload.lead.email });
    return { status: "skipped" as const, reason: "missing_email_config_or_recipient" };
  }

  const summary = [
    `Perfil: ${payload.profile}`,
    `Servicio: ${payload.service}`,
    `Alcance: ${payload.scope}`,
    `Presupuesto estimado: ${payload.budget.range.min} - ${payload.budget.range.max} COP`,
    `Timeline: ${payload.timeline}`,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from,
        to: payload.lead.email,
        subject: "Recibimos tu solicitud de cotización",
        text: `Hola ${payload.lead.name},\n\nGracias por usar nuestro cotizador. Este es el resumen:\n\n${summary}\n\nTe contactaremos pronto para continuar el proceso.`,
      }),
    });

    if (!response.ok) {
      log("error", "email_failed", { status: response.status, to: payload.lead.email });
      return { status: "failed" as const, reason: `http_${response.status}` };
    }

    log("info", "email_sent", { to: payload.lead.email, lead: payload.lead.name });
    return { status: "sent" as const };
  } catch (err) {
    log("error", "email_exception", { message: err instanceof Error ? err.message : String(err) });
    return { status: "failed" as const, reason: "exception" };
  }
};

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const body: unknown = await request.json();
  const parsed = leadPayloadSchema.safeParse(body);

  if (!parsed.success) {
    log("warn", "lead_invalid_payload", { issues: parsed.error.issues.map((i) => i.message) });
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const payload: LeadPayload = parsed.data;
  log("info", "lead_received", { lead: payload.lead.name, service: payload.service, ip });

  const [crm, email] = await Promise.allSettled([
    sendToGoogleSheets(payload),
    sendConfirmationEmail(payload),
  ]);

  const crmResult = crm.status === "fulfilled" ? crm.value : { status: "failed", reason: "exception" };
  const emailResult = email.status === "fulfilled" ? email.value : { status: "failed", reason: "exception" };

  log("info", "lead_pipeline_done", { crm: crmResult.status, email: emailResult.status });

  return NextResponse.json({
    ok: true,
    mode: "pipeline",
    crm: crmResult,
    email: emailResult,
  });
}
