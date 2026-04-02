import { routes } from "@/lib/constants/routes";

export const ctaCopy = {
  primary: "Calcular inversión de mi proyecto",
  secondary: "Ver proyectos",
  onboardingFinal: "Solicitar cotización personalizada",
} as const;

export const ctaLinks = {
  primary: routes.quote,
  secondary: routes.portfolio,
  onboardingFinal: routes.contact,
} as const;
