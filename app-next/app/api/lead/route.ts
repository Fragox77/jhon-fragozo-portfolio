import { NextResponse } from "next/server";

type LeadPayload = {
  profile: string;
  service: string;
  scope: string;
  timeline: string;
  sector: string;
  budget: {
    target: number;
    range: { min: number; max: number };
  };
  lead: {
    name: string;
    phone: string;
    email?: string;
    company?: string;
  };
  createdAt: string;
};

const sendToGoogleSheets = async (payload: LeadPayload) => {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) {
    return { status: "skipped" as const, reason: "missing_webhook" };
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return response.ok
    ? { status: "sent" as const }
    : { status: "failed" as const, reason: `http_${response.status}` };
};

const sendConfirmationEmail = async (payload: LeadPayload) => {
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!resendKey || !from || !payload.lead.email) {
    return { status: "skipped" as const, reason: "missing_email_config_or_recipient" };
  }

  const summary = [
    `Perfil: ${payload.profile}`,
    `Servicio: ${payload.service}`,
    `Alcance: ${payload.scope}`,
    `Presupuesto estimado: ${payload.budget.range.min} - ${payload.budget.range.max} COP`,
    `Timeline: ${payload.timeline}`,
  ].join("\n");

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

  return response.ok
    ? { status: "sent" as const }
    : { status: "failed" as const, reason: `http_${response.status}` };
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  const [crm, email] = await Promise.allSettled([
    sendToGoogleSheets(payload),
    sendConfirmationEmail(payload),
  ]);

  const crmResult = crm.status === "fulfilled" ? crm.value : { status: "failed", reason: "exception" };
  const emailResult = email.status === "fulfilled" ? email.value : { status: "failed", reason: "exception" };

  return NextResponse.json({
    ok: true,
    mode: "pipeline",
    crm: crmResult,
    email: emailResult,
  });
}
