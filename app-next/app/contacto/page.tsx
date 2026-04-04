import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { brand } from "@/lib/constants/brand";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp, correo o formulario y cuéntanos tu proyecto de branding.",
  alternates: { canonical: "/contacto" },
  openGraph: { url: "/contacto", title: "Contacto | Jhon Fragozo" },
};

export default function ContactoPage() {
  return (
    <main>
      <Section className="pt-20 md:pt-24 pb-20">
        <div className="space-y-5 mb-10">
          <Badge>Contacto</Badge>
          <h1 className="text-h2 font-heading font-bold text-brand-primary">
            Conversemos sobre tu próximo proyecto
          </h1>
          <p className="max-w-xl text-body text-brand-neutral">
            Cuéntame tu objetivo de negocio y te propongo una ruta de diseño clara, con alcance definido y orientación a resultados.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Formulario */}
          <ContactForm accessKey={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""} />

          {/* Info lateral */}
          <aside className="space-y-4">
            <Card className="p-5">
              <p className="text-small font-semibold uppercase tracking-wider text-slate-500">WhatsApp</p>
              <p className="mt-2 text-body-lg font-semibold text-brand-primary">+57 304 319 5028</p>
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-small font-semibold text-brand-neutral transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Escribir ahora
              </a>
            </Card>

            <Card className="p-5">
              <p className="text-small font-semibold uppercase tracking-wider text-slate-500">Correo</p>
              <p className="mt-2 text-body-lg font-semibold text-brand-primary">hola@jhonfragozo.com</p>
              <a
                href="mailto:hola@jhonfragozo.com"
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-small font-semibold text-brand-neutral transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Enviar correo
              </a>
            </Card>

            <Card className="p-5">
              <p className="text-small font-semibold uppercase tracking-wider text-slate-500">Tiempo de respuesta</p>
              <p className="mt-2 text-body text-brand-neutral">Respondo en menos de 24 horas en días hábiles.</p>
            </Card>
          </aside>
        </div>
      </Section>
    </main>
  );
}
