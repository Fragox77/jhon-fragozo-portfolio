import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Términos de Servicio",
  description:
    "Condiciones de contratación, alcance de los servicios de diseño, política de pagos y limitaciones de responsabilidad de Jhon Fragozo Brand Designer.",
  alternates: { canonical: "/terminos" },
};

const LAST_UPDATED = "3 de abril de 2026";
const OWNER_NAME = "Jhon Fragozo";
const OWNER_EMAIL = "hola@jhonfragozo.com";

export default function TerminosPage() {
  return (
    <main>
      <Section className="pb-16 pt-20 md:pt-24">
        <Card className="rounded-xl">
          <div className="space-y-4">
            <Badge>Legal</Badge>
            <h1 className="text-h2 font-heading font-bold text-brand-primary">
              Términos de Servicio
            </h1>
            <p className="text-sm text-brand-neutral">
              Última actualización: {LAST_UPDATED}
            </p>
          </div>
        </Card>
      </Section>

      <Section className="pb-20">
        <div className="mx-auto max-w-3xl space-y-10 text-brand-neutral">

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              1. Aceptación de los términos
            </h2>
            <p className="text-body leading-relaxed">
              Al solicitar una cotización, contratar un servicio o hacer uso de cualquier
              herramienta de este sitio web, el cliente declara haber leído, entendido y
              aceptado los presentes términos en su totalidad. Estos términos rigen la
              relación comercial entre el cliente y{" "}
              <strong>{OWNER_NAME}</strong>, Brand Designer independiente con actividad
              en Colombia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              2. Descripción de los servicios
            </h2>
            <p className="text-body leading-relaxed">
              {OWNER_NAME} ofrece servicios profesionales de diseño gráfico y branding
              estratégico, que incluyen pero no se limitan a:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-body">
              <li>Diseño de identidad de marca (logotipo, sistema visual, manual de marca)</li>
              <li>Branding estratégico (posicionamiento, naming, arquitectura de marca)</li>
              <li>Diseño de piezas de comunicación (presentaciones, materiales impresos, digitales)</li>
              <li>Diseño web y experiencias digitales</li>
            </ul>
            <p className="text-body leading-relaxed">
              El alcance exacto de cada proyecto se establece en la propuesta formal
              enviada al cliente antes del inicio del trabajo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              3. Cotizaciones y propuestas
            </h2>
            <p className="text-body leading-relaxed">
              Las estimaciones generadas por el cotizador de este sitio son
              <strong> aproximaciones orientativas</strong> basadas en parámetros
              generales. No constituyen una propuesta formal ni un contrato vinculante.
            </p>
            <p className="text-body leading-relaxed">
              La propuesta formal, con alcance detallado y valor definitivo, se envía
              tras una reunión o intercambio de información con el cliente. Los precios
              pueden variar en función de requerimientos específicos no contemplados
              en el cotizador.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              4. Proceso de contratación y pagos
            </h2>
            <p className="text-body leading-relaxed">
              Una vez acordada la propuesta formal:
            </p>
            <ul className="ml-5 list-disc space-y-1 text-body">
              <li>
                <strong>Anticipo:</strong> Se requiere un pago inicial del 50% del valor
                total para dar inicio al proyecto.
              </li>
              <li>
                <strong>Pago final:</strong> El 50% restante se cancela al entregar los
                archivos finales y antes de la transferencia de derechos.
              </li>
              <li>
                <strong>Proyectos grandes:</strong> Para proyectos de alto valor, se
                puede acordar un esquema de pagos por hitos.
              </li>
            </ul>
            <p className="text-body leading-relaxed">
              Los métodos de pago aceptados se informan en la propuesta formal. Los
              precios están expresados en pesos colombianos (COP) salvo indicación
              contraria.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              5. Revisiones y cambios de alcance
            </h2>
            <p className="text-body leading-relaxed">
              Cada propuesta incluye un número definido de rondas de revisión. Los
              cambios solicitados fuera del alcance original o que impliquen un rediseño
              sustancial serán cotizados como trabajo adicional antes de ejecutarse.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              6. Propiedad intelectual y derechos
            </h2>
            <p className="text-body leading-relaxed">
              Los trabajos entregados son de uso exclusivo del cliente una vez realizado
              el pago completo del proyecto. Hasta ese momento, los diseños son propiedad
              de {OWNER_NAME}.
            </p>
            <p className="text-body leading-relaxed">
              {OWNER_NAME} se reserva el derecho de incluir los trabajos realizados en
              su portafolio profesional, salvo acuerdo de confidencialidad explícito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              7. Plazos de entrega
            </h2>
            <p className="text-body leading-relaxed">
              Los plazos de entrega se establecen en la propuesta formal. Estos plazos
              están condicionados a la entrega oportuna de materiales, información e
              insumos por parte del cliente. Retrasos causados por el cliente pueden
              extender los tiempos de entrega sin que esto constituya incumplimiento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              8. Cancelaciones y reembolsos
            </h2>
            <p className="text-body leading-relaxed">
              Si el cliente cancela el proyecto antes de recibir los primeros entregables,
              el anticipo no es reembolsable, ya que cubre el tiempo de planificación y
              trabajo preliminar.
            </p>
            <p className="text-body leading-relaxed">
              Si la cancelación ocurre tras la entrega de avances, el cliente retiene
              el material desarrollado hasta ese punto y no se generan reembolsos
              adicionales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              9. Limitación de responsabilidad
            </h2>
            <p className="text-body leading-relaxed">
              {OWNER_NAME} no es responsable por resultados comerciales específicos
              derivados del uso de los diseños entregados. Las estimaciones del cotizador
              son orientativas y no garantizan resultados de conversión, ventas o
              posicionamiento.
            </p>
            <p className="text-body leading-relaxed">
              La responsabilidad máxima ante cualquier reclamación se limita al valor
              total pagado por el proyecto en cuestión.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              10. Ley aplicable
            </h2>
            <p className="text-body leading-relaxed">
              Estos términos se rigen por las leyes de la República de Colombia.
              Cualquier controversia será resuelta de buena fe entre las partes y, de
              no llegarse a un acuerdo, se someterá a los mecanismos de resolución de
              conflictos disponibles en la jurisdicción colombiana.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-heading font-semibold text-brand-primary">
              11. Contacto
            </h2>
            <p className="text-body leading-relaxed">
              Para consultas sobre estos términos, escríbenos a{" "}
              <a
                href={`mailto:${OWNER_EMAIL}`}
                className="text-[var(--secondary)] underline-offset-2 hover:underline"
              >
                {OWNER_EMAIL}
              </a>
              .
            </p>
          </section>

        </div>
      </Section>
    </main>
  );
}
