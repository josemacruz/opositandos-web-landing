"use client";

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
  Expand,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageLightbox } from "../ImageLightbox";

type TabKey =
  | "dashboard"
  | "simulacros"
  | "estadisticas"
  | "practica"
  | "temarios"
  | "perfil";

const tabsData: Record<
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

export default function Dashboard() {
  const [tab, setTab] = useState<TabKey>("dashboard");
  const currentTab = tabsData[tab];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageClick = () => {
    if (isMobile) {
      setLightboxOpen(true);
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            {"Impulsa tu preparación con "}
            <span className="bg-[#EB5757]/20 px-2 py-1">opositandos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre herramientas inteligentes y simulacros realistas pensados
            para optimizar tu tiempo de estudio y mejorar tus resultados en las
            oposiciones.
          </p>
        </div>

        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-2">
              {Object.entries(tabsData).map(([key, tabData]) => {
                const IconComponent = tabData.icon;
                const isActive = tab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setTab(key as TabKey)}
                    className={`group relative flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: `#${tabData.color}` }
                        : undefined
                    }
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={
                        isActive
                          ? { backgroundColor: "rgba(255,255,255,0.2)" }
                          : { backgroundColor: `#${tabData.color}1A` } // 1A is ~10% opacity
                      }
                    >
                      <IconComponent
                        className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-white" : `text-[#${tabData.color}]`}`}
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {tabData.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden grid grid-cols-3 gap-2">
              {Object.entries(tabsData).map(([key, tabData]) => {
                const IconComponent = tabData.icon;
                const isActive = tab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setTab(key as TabKey)}
                    className={`group flex flex-col items-center space-y-2 px-2 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? `bg-[#${tabData.color}] text-white shadow-md`
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: `#${tabData.color}` }
                        : undefined
                    }
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={
                        isActive
                          ? { backgroundColor: "rgba(255,255,255,0.2)" }
                          : { backgroundColor: `#${tabData.color}1A` }
                      }
                    >
                      <IconComponent
                        className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-white" : `text-[#${tabData.color}]`}`}
                      />
                    </div>
                    <span className="text-xs font-medium leading-tight text-center">
                      {tabData.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Description */}

        {/* Main Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Image Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
            {/* Browser Header */}
            <div className="bg-gray-100 px-6 py-4 border-b flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded-md px-4 py-2 ml-6 max-w-md">
                <div className="text-sm text-gray-600 flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  opositandos.com/{tab}
                </div>
              </div>
              <div className="ml-auto flex items-center space-x-2 text-sm text-gray-500">
                <div className="hidden md:block">Plataforma Segura</div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Image Container */}
            <div className="p-4 lg:p-6 bg-gray-50">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg relative group">
                {/* Mobile Expand Indicator */}
                {isMobile && (
                  <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Expand className="w-4 h-4 text-white" />
                  </div>
                )}

                {/* Mobile Tap Hint */}
                {isMobile && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs">Toca para ampliar</p>
                  </div>
                )}

                <div
                  className={`transition-all duration-500 ease-in-out ${isMobile ? "cursor-pointer" : ""}`}
                  onClick={handleImageClick}
                >
                  <Image
                    src={currentTab.image || "/placeholder.svg"}
                    alt={currentTab.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* MÓVIL: carrusel horizontal */}
            {/* CALL OUTS ADAPTADO */}
            <div>
              {/* MÓVIL: slider con snap */}
              <div className="sm:hidden ">
                <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
                  {currentTab.callouts.map((callout, idx) => {
                    const Icon = callout.icon;
                    return (
                      <div
                        key={idx}
                        className="snap-start min-w-[80%] bg-white p-6 rounded-2xl flex-shrink-0
                       transform transition-transform duration-300 hover:scale-105"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex justify-center mb-4">
                          <div
                            className="w-16 h-16 bg-[#EB5757] bg-opacity-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${callout.color}1A` }}
                          >
                            <Icon
                              className={`w-8 h-8`}
                              // Use Tailwind text color if possible, fallback to default
                            />
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-black mb-2 text-center">
                          {callout.title}
                        </h4>
                        <p className="text-gray-600 text-sm text-center">
                          {callout.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tablet+ */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
                {currentTab.callouts.map((callout, idx) => {
                  const Icon = callout.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className="text-center mb-4">
                        <div
                          className="w-14 h-14 bg-[#EB5757] bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${callout.color}1A` }}
                        >
                          <Icon className={`w-7 h-7`} />
                        </div>
                        <h4 className="font-semibold text-black text-base mb-2 group-hover:text-[#EB5757] transition-colors">
                          {callout.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {callout.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              {Object.entries(tabsData).map(([key, tabData]) => (
                <button
                  key={key}
                  onClick={() => setTab(key as TabKey)}
                  className={`transition-all duration-300 flex items-center justify-center`}
                  style={
                    tab === key
                      ? {
                          width: 32,
                          height: 8,
                          backgroundColor: `#${tabData.color}`,
                          borderRadius: 9999,
                          border: "2px solid #fff",
                          boxShadow: "0 0 0 2px #e5e7eb",
                        }
                      : {
                          width: 8,
                          height: 8,
                          backgroundColor: "#d1d5db",
                          borderRadius: 9999,
                        }
                  }
                  aria-label={tabData.shortTitle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Image Lightbox */}
      <ImageLightbox
        src={currentTab.image || "/placeholder.svg"}
        alt={currentTab.title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
