"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/FormControls";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ accessKey }: { accessKey: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [consented, setConsented] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!accessKey) {
      setState("error");
      return;
    }

    setState("submitting");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "Nuevo mensaje de contacto — Minifolio");
    formData.append("from_name", "Minifolio Contacto");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success: boolean };
      setState(data.success ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-body-lg font-semibold text-brand-primary">¡Mensaje recibido!</p>
        <p className="mt-2 text-body text-brand-neutral">Te respondo en menos de 24 horas en días hábiles.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-small font-medium text-brand-neutral">
            Nombre *
          </label>
          <Input
            id="contact-name"
            name="name"
            required
            minLength={2}
            placeholder="Tu nombre"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-small font-medium text-brand-neutral">
            Correo *
          </label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="tu@empresa.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-company" className="text-small font-medium text-brand-neutral">
          Empresa (opcional)
        </label>
        <Input
          id="contact-company"
          name="company"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-small font-medium text-brand-neutral">
          Mensaje *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Cuéntame sobre tu proyecto, objetivo o pregunta..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 placeholder-slate-400 transition focus:border-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-500"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={consented}
          onChange={(e) => setConsented(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-[var(--secondary)]"
          required
        />
        <span className="text-small leading-relaxed text-brand-neutral">
          Autorizo el tratamiento de mis datos para recibir respuesta a este mensaje, conforme a la{" "}
          <Link href="/politica-de-privacidad" className="underline underline-offset-2 hover:text-[var(--secondary)]">
            Política de Privacidad
          </Link>
          . *
        </span>
      </label>

      {state === "error" && (
        <p className="text-small text-red-600">
          No se pudo enviar el mensaje. Escríbenos directamente a hola@jhonfragozo.com
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting" || !consented}
        className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 sm:w-auto"
      >
        {state === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
