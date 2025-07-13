import { Search, BookOpen, User, Settings, CreditCard } from "lucide-react";
import { FAQ } from "./Faq.types";

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

export const CATEGORIES = [
  { id: "all", name: "Todas", icon: Search, count: 14 },
  { id: "general", name: "General", icon: BookOpen, count: 4 },
  { id: "account", name: "Cuenta", icon: User, count: 3 },
  { id: "platform", name: "Plataforma", icon: Settings, count: 3 },
  { id: "payment", name: "Pagos", icon: CreditCard, count: 2 },
  { id: "content", name: "Contenido", icon: BookOpen, count: 2 },
];
