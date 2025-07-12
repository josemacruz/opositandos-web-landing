"use client";

import { Clock, Target, BarChart3, Brain } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "../Card";

export default function Features() {
  const items = [
    {
      icon: Clock,
      title: "Simulacros cronometrados",
      desc: "Realiza simulacros en condiciones idénticas a las del examen oficial, con cronómetro y puntuación inmediata.",
      highlight: "Más de 9,000 preguntas actualizadas",
      color: "#EB5757",
    },
    {
      icon: Target,
      title: "Feedback inmediato",
      desc: "Obtén correcciones detalladas y explicaciones al momento, para aprender de cada error y reforzar tus conocimientos.",
      highlight: "Explicaciones basadas en el BOE",
      color: "#2F80ED",
    },
    {
      icon: BarChart3,
      title: "Estadísticas detalladas",
      desc: "Visualiza informes personalizados sobre tu rendimiento, detecta áreas de mejora y monitoriza tu progreso diario.",
      highlight: "Informes precisos y completos",
      color: "#EB5757",
    },
    {
      icon: Brain,
      title: "IA Adaptativa",
      desc: "Nuestra inteligencia artificial genera exámenes personalizados basados en tus criterios de temario y número de preguntas.",
      highlight: "Aprendizaje adaptado a tus objetivos",
      color: "#2F80ED",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="features"
      className="py-20 relative bg-white overflow-hidden scroll-mt-32"
    >
      {/* Fondo degradado lateral */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FFF5F5] to-transparent pointer-events-none"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 mt-4">
            Potencia tu estudio con{" "}
            <span className="text-[#EB5757]">opositandos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas diseñadas para llevar tu preparación al siguiente
            nivel.
          </p>
        </div>

        {/* Slider en móvil */}
        <div className="sm:hidden">
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
            {items.map((item, idx) => (
              <div
                key={item.title}
                className="snap-start flex-shrink-0 w-[80%]"
              >
                <Card
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  highlight={item.highlight}
                  color={item.color}
                  delay={idx * 100}
                  animate={animate}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid en tablets y escritorio */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              highlight={item.highlight}
              color={item.color}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
