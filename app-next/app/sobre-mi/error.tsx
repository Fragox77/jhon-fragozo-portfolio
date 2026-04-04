"use client";

export default function SobreMiError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-body-lg font-semibold text-brand-primary">
        No se pudo cargar esta sección.
      </p>
      <p className="text-body text-brand-neutral">
        Recarga la página o vuelve al inicio.
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
