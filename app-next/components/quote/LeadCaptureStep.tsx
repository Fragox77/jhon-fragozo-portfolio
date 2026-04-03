import { Input } from "@/components/ui/FormControls";

export type LeadFormData = {
  name: string;
  phone: string;
  email: string;
  company: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormData, string>>;

type LeadCaptureStepProps = {
  lead: LeadFormData;
  errors: LeadFormErrors;
  onChange: (field: keyof LeadFormData, value: string) => void;
};

export function LeadCaptureStep({ lead, errors, onChange }: LeadCaptureStepProps) {
  return (
    <section className="space-y-5">
      <h2 className="text-xl font-semibold text-[var(--primary)]">6. Antes de mostrar el rango, déjanos tus datos</h2>
      <p className="text-sm text-[var(--neutral)]">
        Te compartimos la estimación final y dejamos listo tu resumen para continuar por WhatsApp.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="lead-name" className="text-sm font-medium text-[var(--neutral)]">
            Nombre completo *
          </label>
          <Input
            id="lead-name"
            value={lead.name}
            onChange={(event) => onChange("name", event.target.value)}
            placeholder="Ej: Laura Gómez"
          />
          {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="lead-phone" className="text-sm font-medium text-[var(--neutral)]">
            WhatsApp / Teléfono *
          </label>
          <Input
            id="lead-phone"
            value={lead.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            placeholder="Ej: 3001234567"
          />
          {errors.phone ? <p className="text-xs text-red-600">{errors.phone}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="lead-email" className="text-sm font-medium text-[var(--neutral)]">
            Correo (opcional)
          </label>
          <Input
            id="lead-email"
            type="email"
            value={lead.email}
            onChange={(event) => onChange("email", event.target.value)}
            placeholder="Ej: laura@empresa.com"
          />
          {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="lead-company" className="text-sm font-medium text-[var(--neutral)]">
            Empresa (opcional)
          </label>
          <Input
            id="lead-company"
            value={lead.company}
            onChange={(event) => onChange("company", event.target.value)}
            placeholder="Ej: Nova Labs"
          />
          {errors.company ? <p className="text-xs text-red-600">{errors.company}</p> : null}
        </div>
      </div>
    </section>
  );
}
