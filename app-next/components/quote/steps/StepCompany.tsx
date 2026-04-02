"use client";

import { useFormContext } from "react-hook-form";
import { companyLabels, type CompanyType } from "@/lib/pricing/pricingConfig";
import type { QuoteFormValues } from "@/lib/validation/quoteSchema";

export function StepCompany() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<QuoteFormValues>();

  const selected = watch("companyType");

  return (
    <section aria-labelledby="step-company-title" className="space-y-4">
      <h2 id="step-company-title" className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        1. Tipo de empresa
      </h2>
      <p className="text-sm text-slate-600">Define el tamaño y madurez de la organización.</p>
      <div className="grid gap-3 sm:grid-cols-3" role="radiogroup" aria-label="Tipo de empresa">
        {(Object.keys(companyLabels) as CompanyType[]).map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected === option}
            onClick={() => setValue("companyType", option, { shouldValidate: true })}
            className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
              selected === option
                ? "border-blue-600 bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            }`}
          >
            {companyLabels[option]}
          </button>
        ))}
      </div>
      {errors.companyType && <p className="text-sm text-red-600">{errors.companyType.message}</p>}
    </section>
  );
}
