export type PortfolioTag = "Branding" | "Identidad visual" | "Campaña" | "Web" | "Estrategia" | "Impreso";

export type PortfolioProject = {
  slug: string;
  name: string;
  summary: string;
  sector: string;
  year: string;
  tags: PortfolioTag[];
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
};

export type PortfolioContent = {
  badge: string;
  title: string;
  description: string;
  sectionTitle: string;
  sectionDescription: string;
  projects: PortfolioProject[];
};

export const portfolioContent: PortfolioContent = {
  badge: "Portafolio",
  title: "Casos de marca con enfoque estratégico",
  description:
    "Proyectos desarrollados para mejorar posicionamiento, consistencia visual y percepción de valor en el mercado.",
  sectionTitle: "Proyectos representativos",
  sectionDescription:
    "Cada caso combina diagnóstico estratégico, dirección visual y criterios de implementación orientados a resultados.",
  projects: [
    {
      slug: "firma-legal",
      name: "Rediseño de marca para firma legal",
      summary: "Reestructuración visual y verbal para transmitir solidez, claridad y especialización.",
      sector: "Legal / Finanzas",
      year: "2025",
      tags: ["Branding", "Identidad visual", "Impreso"],
      challenge:
        "La firma contaba con una identidad genérica que no diferenciaba su especialización en derecho corporativo. Sus materiales generaban desconfianza antes de la primera reunión y no comunicaban su trayectoria de 12 años.",
      solution:
        "Desarrollamos un sistema de identidad basado en dos ejes: autoridad y claridad. Tipografía serif moderna, paleta restringida en navy y oro, y un sistema de papelería ejecutiva que acompaña el proceso comercial de la firma.",
      results: [
        "Percepción de profesionalismo mejorada en entrevistas con clientes actuales",
        "Sistema de identidad aplicado en 6 puntos de contacto",
        "Manual de marca entregado con lineamientos de uso digital e impreso",
      ],
      deliverables: [
        "Logotipo principal y variantes",
        "Paleta de color y tipografía corporativa",
        "Papelería ejecutiva (tarjetas, carpeta, membrete)",
        "Plantillas para presentaciones",
        "Manual de marca (PDF)",
      ],
    },
    {
      slug: "retail-digital",
      name: "Campaña digital para retail",
      summary: "Sistema de piezas para pauta y conversión con enfoque en diferenciación competitiva.",
      sector: "Retail / Comercio",
      year: "2025",
      tags: ["Campaña", "Identidad visual"],
      challenge:
        "La marca competía en un mercado saturado sin una propuesta visual diferenciada. Sus piezas para redes sociales eran inconsistentes y no respondían a los estándares de cada plataforma, lo que reducía el rendimiento de la pauta.",
      solution:
        "Creamos un sistema modular de piezas adaptado a Instagram, Facebook y Google Display. Definimos una guía de tono visual y jerarquía de mensaje que permite al equipo interno producir nuevas piezas manteniendo coherencia.",
      results: [
        "Sistema de piezas implementado en campaña de lanzamiento de temporada",
        "Reducción del tiempo de producción de nuevas piezas en un 40%",
        "Consistencia visual en todos los canales de pauta",
      ],
      deliverables: [
        "Set de plantillas para redes sociales (Stories, Feed, Reels cover)",
        "Piezas para Google Display (5 formatos)",
        "Guía de tono visual y jerarquía de mensaje",
        "Archivos editables en Figma",
      ],
    },
    {
      slug: "startup-tech",
      name: "Sistema visual para startup tech",
      summary: "Arquitectura de marca escalable para producto digital, comunicación y crecimiento.",
      sector: "Tecnología",
      year: "2026",
      tags: ["Branding", "Identidad visual", "Web", "Estrategia"],
      challenge:
        "La startup había construido su producto sin una marca sólida. Al buscar inversión, los fundadores necesitaban comunicar visión y credibilidad de forma consistente en pitch decks, landing page y producto.",
      solution:
        "Desarrollamos la arquitectura de marca desde cero: naming de líneas de producto, sistema de identidad modular (logotipo, iconografía, ilustraciones) y lineamientos para UI que permitieran escalar sin perder coherencia.",
      results: [
        "Marca presentada en ronda de inversión seed",
        "Sistema de identidad aplicado en producto, web y materiales de inversión",
        "Documentación de marca lista para equipo de diseño interno",
      ],
      deliverables: [
        "Estrategia de posicionamiento y naming",
        "Sistema de identidad completo (logo, color, tipografía, iconografía)",
        "Lineamientos de UI para producto digital",
        "Plantilla de pitch deck",
        "Landing page de lanzamiento",
        "Manual de marca digital",
      ],
    },
    {
      slug: "pyme-corporativa",
      name: "Identidad y material corporativo para pyme",
      summary: "Desarrollo integral de identidad con lineamientos de implementación en entornos reales.",
      sector: "Servicios empresariales",
      year: "2025",
      tags: ["Branding", "Identidad visual", "Impreso"],
      challenge:
        "La empresa operaba con un logotipo de hace 8 años que no reflejaba su crecimiento ni su posicionamiento actual. La falta de lineamientos claros generaba inconsistencia en las piezas que producía cada área.",
      solution:
        "Diseñamos una identidad actualizada que mantiene el reconocimiento construido y lo eleva. Entregamos un manual de marca práctico, orientado al equipo interno, con ejemplos de uso correcto e incorrecto en los contextos más frecuentes.",
      results: [
        "Identidad renovada sin perder reconocimiento de marca",
        "Manual adoptado por el equipo de marketing interno",
        "Aplicación consistente en materiales físicos y digitales",
      ],
      deliverables: [
        "Logotipo renovado con variantes cromáticas",
        "Sistema tipográfico y de color",
        "Papelería corporativa completa",
        "Señalética y material de oficina",
        "Manual de marca con guía de uso práctico",
      ],
    },
  ],
};
