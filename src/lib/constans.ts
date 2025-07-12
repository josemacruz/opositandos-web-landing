export const SITE_CONFIG = {
  name: "opositandos",
  description: "La plataforma especializada para preparar tus oposiciones.",
  tagline: "Especialistas en Policía Local",
  url: "https://opositandos.es",
  contact: {
    email: "info@opositandos.es",
    phone: "+34 900 123 456",
    support: "soporte@opositandos.es",
    legal: "legal@opositandos.es",
  },
  social: {
    twitter: "@opositandos",
    linkedin: "opositandos",
  },
} as const;

export const COLORS = {
  primary: "#EB5757",
  primaryHover: "#d64545",
  secondary: "#2F80ED",
  success: "#27AE60",
  warning: "#F39C12",
  info: "#2F80ED",
} as const;

export const FEATURES = [
  {
    icon: "Clock",
    title: "Simulacros cronometrados",
    description:
      "Practica en condiciones reales de examen con cronómetro incluido",
    highlight: "Más de 5,000 preguntas actualizadas",
    color: COLORS.primary,
  },
  {
    icon: "Target",
    title: "Feedback inmediato",
    description:
      "Recibe correcciones y explicaciones al instante para aprender de tus errores",
    highlight: "Explicaciones detalladas del BOE",
    color: COLORS.secondary,
  },
  {
    icon: "BarChart3",
    title: "Estadísticas detalladas",
    description:
      "Analiza tu progreso y identifica áreas de mejora con métricas precisas",
    highlight: "Informes personalizados",
    color: COLORS.primary,
  },
  {
    icon: "Brain",
    title: "IA Adaptativa",
    description:
      "La plataforma se adapta a tu nivel y refuerza tus puntos débiles",
    highlight: "Algoritmo inteligente de aprendizaje",
    color: COLORS.secondary,
  },
] as const;

export const STATS = [
  { value: "+9,000", label: "Preguntas actualizadas", color: COLORS.primary },
  { value: "100%", label: "Temario oficial", color: COLORS.secondary },
  { value: "24/7", label: "Acceso completo", color: COLORS.primary },
] as const;

export const NAVIGATION_ITEMS = [
  { href: "/#features", label: "Características" },
  { href: "/#dashboard", label: "Plataforma" },
  { href: "/#content", label: "Contenido" },
  { href: "/precios", label: "Precios" },
  { href: "/soporte", label: "Soporte" },
  { href: "/faq", label: "FAQ" },
] as const;

export const FOOTER_LINKS = {
  legal: [
    { href: "/terminos", label: "Términos y Condiciones" },
    { href: "/privacidad", label: "Política de Privacidad" },
    { href: "/cookies", label: "Política de Cookies" },
  ],
  support: [
    { href: "/soporte", label: "Centro de Ayuda" },
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "/precios", label: "Información y Precios" },
  ],
} as const;

type FAQ = {
  id: number;
  category: string;
  question: string;
  answer: string;
  popular: boolean;
};

export const FAQS: FAQ[] = [
  {
    id: 1,
    category: "general",
    question: "¿Qué es Opositandos y cómo funciona?",
    answer:
      "Opositandos es una plataforma digital especializada en la preparación de oposiciones para Policía Local. Ofrecemos más de 5,000 preguntas actualizadas, simulacros cronometrados, estadísticas detalladas y contenido teórico completo.",
    popular: true,
  },
  {
    id: 2,
    category: "general",
    question: "¿Para qué tipo de oposiciones está diseñada la plataforma?",
    answer:
      "Nuestra plataforma está específicamente diseñada para oposiciones de Policía Local en España.",
    popular: true,
  },
  {
    id: 3,
    category: "general",
    question: "¿Necesito conocimientos previos para usar la plataforma?",
    answer: "No, está pensada para principiantes y avanzados.",
    popular: false,
  },
  {
    id: 4,
    category: "general",
    question: "¿Puedo usar Opositandos en mi móvil o tablet?",
    answer: "Sí, funciona perfectamente en móviles, tablets y ordenadores.",
    popular: true,
  },
  {
    id: 5,
    category: "account",
    question: "¿Cómo creo una cuenta en Opositandos?",
    answer: "Puedes crear tu cuenta gratis en nuestra página principal.",
    popular: true,
  },
  {
    id: 6,
    category: "account",
    question: "¿Puedo cambiar mi email o contraseña?",
    answer: "Sí, desde la sección Mi Perfil puedes modificar tus datos.",
    popular: false,
  },
  {
    id: 7,
    category: "account",
    question: "¿Qué hago si olvido mi contraseña?",
    answer:
      "En la página de inicio de sesión haz clic en '¿Olvidaste tu contraseña?'.",
    popular: true,
  },
  {
    id: 8,
    category: "platform",
    question: "¿Cómo funcionan los simulacros cronometrados?",
    answer:
      "Los simulacros replican las condiciones reales del examen oficial.",
    popular: true,
  },
  {
    id: 9,
    category: "platform",
    question: "¿Puedo revisar mis respuestas después del simulacro?",
    answer: "Sí, puedes revisar todas las preguntas y explicaciones.",
    popular: true,
  },
  {
    id: 10,
    category: "platform",
    question: "¿Qué información muestran las estadísticas?",
    answer: "Incluyen tu progreso general, áreas fuertes y débiles.",
    popular: false,
  },
  {
    id: 11,
    category: "payment",
    question: "¿Qué métodos de pago aceptan?",
    answer: "Tarjetas, PayPal, Bizum y transferencia bancaria.",
    popular: true,
  },
  {
    id: 12,
    category: "payment",
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer: "Sí, puedes cancelar en cualquier momento.",
    popular: true,
  },
  {
    id: 13,
    category: "content",
    question: "¿Con qué frecuencia actualizan el contenido?",
    answer: "Nuestro equipo revisa cambios normativos semanalmente.",
    popular: true,
  },
  {
    id: 14,
    category: "content",
    question: "¿Las preguntas están basadas en exámenes reales?",
    answer: "Sí, muchas preguntas provienen de exámenes oficiales.",
    popular: true,
  },
];
