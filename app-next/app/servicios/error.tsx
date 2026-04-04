"use client";

export default function ServiciosError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-body-lg font-semibold text-brand-primary">
        No se pudo cargar la página de servicios.
      </p>
      <p className="text-body text-brand-neutral">
        Intenta de nuevo o contáctanos directamente por WhatsApp.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Reintentar
      </button>
    </div>
  );
}
