import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Política de Privacidad | Jhon Fragozo",
  description:
    "Conoce cómo Jhon Fragozo recopila, usa y protege tus datos personales al usar este sitio web y el cotizador de servicios.",
};

const LAST_UPDATED = "3 de abril de 2026";
const OWNER_NAME = "Jhon Fragozo";
const OWNER_EMAIL = "hola@jhonfragozo.com";
const SITE_URL = "https://comunicaciones2-star.github.io/minifolio/";

export default function PoliticaDePrivacidadPage() {
  return (
    <main>
      <Section className="pb-16 pt-20 md:pt-24">
        <Card className="rounded-xl">
          <div className="space-y-4">
            <Badge>Legal</Badge>
            <h1 className="text-h2 font-heading font-bold text-brand-primary">
              Política de Privacidad
            </h1>
            <p className="text-sm text-brand-neutral">
              Última actualización: {LAST_UPDATED}
            </p>
          </div>
        </Card>
      </Section>

      <Section className="pb-20">
        <div className="prose prose-slate mx-auto max-w-3xl dark:prose-invert">
          <div className="space-y-10 text-brand-neutral">

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                1. Responsable del tratamiento
              </h2>
              <p className="text-body leading-relaxed">
                El responsable del tratamiento de los datos personales recopilados a
                través de este sitio web es:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-body">
                <li>
                  <strong>Nombre:</strong> {OWNER_NAME}
                </li>
                <li>
                  <strong>Correo electrónico:</strong>{" "}
                  <a
                    href={`mailto:${OWNER_EMAIL}`}
                    className="text-[var(--secondary)] underline-offset-2 hover:underline"
                  >
                    {OWNER_EMAIL}
                  </a>
                </li>
                <li>
                  <strong>Sitio web:</strong>{" "}
                  <a
                    href={SITE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--secondary)] underline-offset-2 hover:underline"
                  >
                    {SITE_URL}
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                2. Datos que recopilamos
              </h2>
              <p className="text-body leading-relaxed">
                Cuando utilizas el cotizador de servicios o los formularios de contacto
                de este sitio, podemos recopilar los siguientes datos:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-body">
                <li>Nombre o razón social</li>
                <li>
                  Número de teléfono o correo electrónico (según lo que el usuario
                  proporcione)
                </li>
                <li>
                  Información sobre el proyecto o servicio de interés (tipo de
                  servicio, sector, presupuesto estimado)
                </li>
              </ul>
              <p className="text-body leading-relaxed">
                No recopilamos datos sensibles (datos de salud, origen étnico,
                creencias religiosas, etc.).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                3. Finalidad del tratamiento
              </h2>
              <p className="text-body leading-relaxed">
                Los datos recopilados se utilizan exclusivamente para:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-body">
                <li>
                  Preparar y enviar una cotización personalizada de servicios de diseño
                </li>
                <li>Hacer seguimiento a solicitudes de proyecto</li>
                <li>
                  Comunicarnos contigo por WhatsApp o correo electrónico en relación
                  con tu solicitud
                </li>
              </ul>
              <p className="text-body leading-relaxed">
                No usamos tus datos para enviar publicidad no solicitada ni los cedemos
                a terceros con fines comerciales.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                4. Almacenamiento de datos
              </h2>
              <p className="text-body leading-relaxed">
                Los datos ingresados en el cotizador se almacenan temporalmente en el
                navegador del usuario mediante <strong>localStorage</strong>, una
                tecnología estándar que guarda información localmente en tu dispositivo.
                Estos datos no son transferidos a servidores externos de forma
                automática, salvo cuando decides enviar la cotización.
              </p>
              <p className="text-body leading-relaxed">
                Cuando envías una cotización, la información es procesada por servicios
                de terceros de confianza:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-body">
                <li>
                  <strong>Resend</strong> — servicio de envío de correos de confirmación
                </li>
                <li>
                  <strong>Google Sheets</strong> — registro interno de solicitudes de
                  cotización
                </li>
              </ul>
              <p className="text-body leading-relaxed">
                Todos los servicios mencionados operan bajo sus propias políticas de
                privacidad y estándares de seguridad.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                5. Base legal para el tratamiento
              </h2>
              <p className="text-body leading-relaxed">
                El tratamiento de tus datos se realiza con base en:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-body">
                <li>
                  <strong>Tu consentimiento explícito</strong>, al completar y enviar
                  el formulario de cotización o de contacto.
                </li>
                <li>
                  <strong>Interés legítimo</strong>, para responder a tu solicitud de
                  información o cotización de servicios.
                </li>
              </ul>
              <p className="text-body leading-relaxed">
                De conformidad con la{" "}
                <strong>Ley 1581 de 2012</strong> de Colombia y su decreto
                reglamentario, el tratamiento de datos personales requiere tu
                autorización previa, expresa e informada.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                6. Tus derechos
              </h2>
              <p className="text-body leading-relaxed">
                En cumplimiento de la Ley 1581 de 2012, tienes derecho a:
              </p>
              <ul className="ml-5 list-disc space-y-1 text-body">
                <li>
                  <strong>Acceder</strong> a tus datos personales que hemos recopilado
                </li>
                <li>
                  <strong>Rectificar</strong> datos inexactos o incompletos
                </li>
                <li>
                  <strong>Suprimir</strong> tus datos cuando ya no sean necesarios para
                  la finalidad con la que fueron recopilados
                </li>
                <li>
                  <strong>Revocar</strong> la autorización otorgada para el tratamiento
                </li>
                <li>
                  <strong>Presentar quejas</strong> ante la Superintendencia de
                  Industria y Comercio (SIC) si consideras que tus derechos han sido
                  vulnerados
                </li>
              </ul>
              <p className="text-body leading-relaxed">
                Para ejercer cualquiera de estos derechos, escríbenos a{" "}
                <a
                  href={`mailto:${OWNER_EMAIL}`}
                  className="text-[var(--secondary)] underline-offset-2 hover:underline"
                >
                  {OWNER_EMAIL}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                7. Cookies y tecnologías de seguimiento
              </h2>
              <p className="text-body leading-relaxed">
                Este sitio web <strong>no utiliza cookies de rastreo</strong> ni
                herramientas de analítica de terceros (como Google Analytics). El único
                almacenamiento local utilizado es <em>localStorage</em> del navegador,
                con propósitos funcionales descritos en la sección 4.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                8. Seguridad de los datos
              </h2>
              <p className="text-body leading-relaxed">
                Implementamos medidas técnicas razonables para proteger tus datos
                contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún
                sistema de transmisión de datos por internet es completamente seguro,
                por lo que no podemos garantizar seguridad absoluta.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                9. Cambios a esta política
              </h2>
              <p className="text-body leading-relaxed">
                Podemos actualizar esta política periódicamente. Cuando lo hagamos,
                actualizaremos la fecha de "Última actualización" en la parte superior
                de esta página. Te recomendamos revisarla con regularidad.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-h3 font-heading font-semibold text-brand-primary">
                10. Contacto
              </h2>
              <p className="text-body leading-relaxed">
                Si tienes preguntas sobre esta política o sobre el tratamiento de tus
                datos, puedes contactarnos en:
              </p>
              <p className="text-body">
                <a
                  href={`mailto:${OWNER_EMAIL}`}
                  className="text-[var(--secondary)] underline-offset-2 hover:underline"
                >
                  {OWNER_EMAIL}
                </a>
              </p>
            </section>

          </div>
        </div>
      </Section>
    </main>
  );
}
