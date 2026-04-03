import { companyLabels, sectorLabels, serviceLabels } from "@/lib/pricing/pricingConfig";
import { formatCOP } from "@/lib/utils/money";
import type { QuoteFormValues } from "@/lib/validation/quoteSchema";

const WHATSAPP_NUMBER = "573043195028";

type LeadContactData = {
  name: string;
  phone: string;
  email?: string;
  company?: string;
};

type BuildMessageInput = {
  values: QuoteFormValues;
  quote: { min: number; max: number };
  lead: LeadContactData;
};

export const buildWhatsAppMessage = ({ values, quote, lead }: BuildMessageInput) => {
  const lines = [
    `Hola, soy ${lead.name}.`,
    "Quiero cotizar un proyecto.",
    "",
    `Perfil: ${companyLabels[values.companyType]}`,
    `Servicio: ${serviceLabels[values.service]}`,
    `Alcance: ${values.deliverables.length} entregables y ${values.piecesCount} piezas`,
    `Presupuesto estimado: ${formatCOP(quote.min)} - ${formatCOP(quote.max)} COP`,
    `Perfil corporativo: ${companyLabels[values.companyType]}`,
    `Sector: ${sectorLabels[values.sector]}`,
    `Presupuesto aproximado: ${formatCOP(values.budgetValue)} COP`,
    lead.email ? `Mi correo: ${lead.email}` : "",
    `Mi WhatsApp: ${lead.phone}`,
    lead.company ? `Empresa: ${lead.company}` : "",
  ];

  return lines.filter(Boolean).join("\n");
};

export const buildQuoteWhatsappUrl = (values: QuoteFormValues, quote: { min: number; max: number }, lead: LeadContactData) => {
  const message = buildWhatsAppMessage({ values, quote, lead });
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
