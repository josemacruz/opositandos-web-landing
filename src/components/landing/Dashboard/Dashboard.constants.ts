import {
  Clock,
  BarChart3,
  Target,
  Settings,
  Timer,
  BookOpen,
  TrendingUp,
  Library,
  UserCircle,
  User,
  Home,
  Play,
} from "lucide-react";
import { TabKey } from "./Dashboard.type";

export const DASHBOARD_TABS: Record<
  TabKey,
  {
    title: string;
    shortTitle: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image: string;
    color: string;
    callouts: {
      position: string;
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
      color: string;
    }[];
  }
> = {
  dashboard: {
    title: "Dashboard Principal",
    shortTitle: "Dashboard",
    description: "Vista general de tu progreso y actividades",
    icon: Home,
    image: "/images/dashboard.png",
    color: "EB5757",
    callouts: [
      {
        position: "top-left",
        icon: Clock,
        title: "Resumen de Actividad",
        description: "Ve tu progreso diario",
        color: "EB5757",
      },
      {
        position: "top-right",
        icon: BarChart3,
        title: "Estadísticas Rápidas",
        description: "Métricas en tiempo real",
        color: "2F80ED",
      },
      {
        position: "bottom-left",
        icon: Target,
        title: "Objetivos Activos",
        description: "Metas de estudio",
        color: "EB5757",
      },
      {
        position: "bottom-right",
        icon: Settings,
        title: "Acceso Rápido",
        description: "Herramientas principales",
        color: "2F80ED",
      },
    ],
  },
  simulacros: {
    title: "Simulacros de Examen",
    shortTitle: "Simulacros",
    description: "Practica con exámenes cronometrados",
    icon: Timer,
    image: "/images/dashboard.png",
    color: "2F80ED",
    callouts: [
      {
        position: "top-left",
        icon: Clock,
        title: "Tiempo Límite",
        description: "Cronómetro en tiempo real",
        color: "EB5757",
      },
      {
        position: "top-right",
        icon: Target,
        title: "Preguntas Aleatorias",
        description: "Selección inteligente",
        color: "2F80ED",
      },
      {
        position: "bottom-left",
        icon: BarChart3,
        title: "Resultados Inmediatos",
        description: "Puntuación al finalizar",
        color: "EB5757",
      },
      {
        position: "bottom-right",
        icon: BookOpen,
        title: "Revisión Completa",
        description: "Análisis detallado",
        color: "2F80ED",
      },
    ],
  },
  estadisticas: {
    title: "Estadísticas y Progreso",
    shortTitle: "Estadísticas",
    description: "Análisis detallado de tu rendimiento",
    icon: TrendingUp,
    image: "/images/dashboard.png",
    color: "27AE60",
    callouts: [
      {
        position: "top-left",
        icon: BarChart3,
        title: "Gráficos Avanzados",
        description: "Visualización de datos",
        color: "2F80ED",
      },
      {
        position: "top-right",
        icon: Target,
        title: "Áreas de Mejora",
        description: "Puntos débiles identificados",
        color: "EB5757",
      },
      {
        position: "bottom-left",
        icon: Clock,
        title: "Tiempo de Estudio",
        description: "Horas invertidas",
        color: "2F80ED",
      },
      {
        position: "bottom-right",
        icon: Settings,
        title: "Comparativas",
        description: "Progreso vs objetivos",
        color: "EB5757",
      },
    ],
  },
  practica: {
    title: "Modo Práctica",
    shortTitle: "Práctica",
    description: "Estudia sin presión de tiempo",
    icon: Play,
    image: "/images/dashboard.png",
    color: "F39C12",
    callouts: [
      {
        position: "top-left",
        icon: BookOpen,
        title: "Sin Límite de Tiempo",
        description: "Estudia a tu ritmo",
        color: "2F80ED",
      },
      {
        position: "top-right",
        icon: Target,
        title: "Feedback Inmediato",
        description: "Explicaciones detalladas",
        color: "EB5757",
      },
      {
        position: "bottom-left",
        icon: Settings,
        title: "Filtros Personalizados",
        description: "Selecciona temas específicos",
        color: "2F80ED",
      },
      {
        position: "bottom-right",
        icon: BarChart3,
        title: "Progreso Continuo",
        description: "Seguimiento sin presión",
        color: "EB5757",
      },
    ],
  },
  temarios: {
    title: "Temarios y Contenido",
    shortTitle: "Temarios",
    description: "Accede a todo el material de estudio",
    icon: Library,
    image: "/images/dashboard.png",
    color: "9B59B6",
    callouts: [
      {
        position: "top-left",
        icon: BookOpen,
        title: "Biblioteca Completa",
        description: "Todos los temarios",
        color: "2F80ED",
      },
      {
        position: "top-right",
        icon: Settings,
        title: "Organización Inteligente",
        description: "Contenido estructurado",
        color: "EB5757",
      },
      {
        position: "bottom-left",
        icon: Target,
        title: "Marcadores",
        description: "Guarda tus favoritos",
        color: "2F80ED",
      },
      {
        position: "bottom-right",
        icon: Clock,
        title: "Actualizaciones",
        description: "Contenido siempre actual",
        color: "EB5757",
      },
    ],
  },
  perfil: {
    title: "Perfil de Usuario",
    shortTitle: "Perfil",
    description: "Gestiona tu cuenta y preferencias",
    icon: UserCircle,
    image: "/images/dashboard.png",
    color: "E74C3C",
    callouts: [
      {
        position: "top-left",
        icon: User,
        title: "Información Personal",
        description: "Datos de tu cuenta",
        color: "2F80ED",
      },
      {
        position: "top-right",
        icon: Settings,
        title: "Configuración",
        description: "Personaliza tu experiencia",
        color: "EB5757",
      },
      {
        position: "bottom-left",
        icon: Library,
        title: "Mis Simulacros",
        description: "Historial de exámenes",
        color: "2F80ED",
      },
      {
        position: "bottom-right",
        icon: Target,
        title: "Objetivos Personales",
        description: "Define tus metas",
        color: "EB5757",
      },
    ],
  },
};
