import { Clock, Gift, ShieldCheck, Zap } from "lucide-react";

/**
 * Ventana de la promoción (hora peninsular española, CET = UTC+1).
 * Black Friday 2026: viernes 27 de noviembre. Se extiende hasta Cyber Monday.
 */
export const OFFER_START = new Date("2026-11-23T00:00:00+01:00");
export const OFFER_END = new Date("2026-11-30T23:59:59+01:00");

export const PROMO_CODE = "BLACKFRIDAY26";

export type BlackFridayPlan = {
  id: "basic" | "complete" | "premium";
  label: string;
  subtitle: string;
  discount: number;
  color: string;
  featured: boolean;
  includes: string[];
};

export const PLANS: BlackFridayPlan[] = [
  {
    id: "basic",
    label: "Plan Básico",
    subtitle: "Acceso esencial",
    discount: 30,
    color: "#2F80ED",
    featured: false,
    includes: [
      "Acceso a +20.000 preguntas",
      "Simulacros cronometrados",
      "Estadísticas básicas",
    ],
  },
  {
    id: "complete",
    label: "Plan Completo",
    subtitle: "Todas las funciones",
    discount: 40,
    color: "#EB5757",
    featured: true,
    includes: [
      "Todo lo del Plan Básico",
      "Feedback inmediato",
      "Informes detallados",
      "Descargas de temarios",
    ],
  },
  {
    id: "premium",
    label: "Plan Premium",
    subtitle: "Soporte personalizado",
    discount: 50,
    color: "#27AE60",
    featured: false,
    includes: [
      "Todo lo del Plan Completo",
      "Tutorías 1:1",
      "Sesiones en directo",
      "Acceso anticipado a novedades",
    ],
  },
];

export const BENEFITS = [
  {
    icon: Zap,
    title: "Acceso inmediato",
    description: "Empieza a estudiar en cuanto actives tu plan.",
  },
  {
    icon: ShieldCheck,
    title: "15 días de garantía",
    description: "Si no te convence, te devolvemos el dinero.",
  },
  {
    icon: Gift,
    title: "Precio bloqueado",
    description: "Mantén el descuento mientras sigas suscrito.",
  },
  {
    icon: Clock,
    title: "Plazas limitadas",
    description: "La oferta termina el lunes 30 a las 23:59.",
  },
];

export const BF_FAQS = [
  {
    id: 1,
    question: "¿Cuándo empieza y termina la oferta?",
    answer:
      "Desde el lunes 23 de noviembre hasta el lunes 30 de noviembre de 2026 a las 23:59 (hora peninsular).",
  },
  {
    id: 2,
    question: "¿Cómo aplico el descuento?",
    answer: `Escríbenos indicando el plan que te interesa y el código ${PROMO_CODE}. Te enviaremos el enlace de pago con el descuento ya aplicado.`,
  },
  {
    id: 3,
    question: "¿El descuento se mantiene al renovar?",
    answer:
      "Sí. Mientras mantengas tu suscripción activa conservarás el precio de Black Friday.",
  },
  {
    id: 4,
    question: "¿Puedo aprovecharlo si ya soy alumno?",
    answer:
      "Sí, puedes usarlo para subir de plan. Contacta con soporte y te ayudaremos con el cambio.",
  },
];
