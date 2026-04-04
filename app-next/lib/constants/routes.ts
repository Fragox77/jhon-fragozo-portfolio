export const routes = {
  home: "/",
  about: "/sobre-mi",
  services: "/servicios",
  portfolio: "/portafolio",
  quote: "/cotizador",
  contact: "/contacto",
  dashboard: "/dashboard",
  heroComparison: "/hero-comparativa",
  privacy: "/politica-de-privacidad",
  terms: "/terminos",
} as const;

export type RouteValue = (typeof routes)[keyof typeof routes];
