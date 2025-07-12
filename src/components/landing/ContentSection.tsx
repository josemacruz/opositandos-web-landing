"use client";

import { FileText, BookOpen, Zap } from "lucide-react";
import { Card } from "../ui/card";

export default function ContentSection() {
  const cards = [
    {
      icon: FileText,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "+5,000 Preguntas",
      description:
        "Explora nuestra base de datos actualizada y organizada por temas, perfecta para practicar y repasar.",
      items: [
        "Derecho Constitucional",
        "Derecho Administrativo",
        "Derecho Penal y Procesal",
        "Seguridad Vial",
      ],
    },
    {
      icon: BookOpen,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "Temario Completo",
      description:
        "Todo el contenido teórico necesario, estructurado de forma clara y accesible para un aprendizaje efectivo.",
      items: [
        "Contenido actualizado 2024",
        "Esquemas y resúmenes",
        "Casos prácticos",
        "Legislación vigente",
      ],
    },
    {
      icon: Zap,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Actualizaciones Constantes",
      description:
        "Mantente al día con las últimas novedades normativas y preguntas basadas en exámenes reales.",
      items: [
        "Nuevas leyes y reglamentos",
        "Jurisprudencia reciente",
        "Preguntas de exámenes reales",
        "Notificaciones automáticas",
      ],
    },
  ];

  return (
    <section id="content" className="py-20 bg-gray-50 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">
            Contenido especializado y actualizado
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Accede a un banco de recursos siempre al día, con temario oficial,
            preguntas reales y contenido perfectamente estructurado.
          </p>
        </div>

        {/* Slider en móvil */}
        <div className="sm:hidden">
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-[80%] sm:w-[60%] md:w-[45%]"
              >
                <Card className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${card.iconBg}`}
                  >
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <FileText className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Grid en tablets y escritorio */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${card.iconBg}`}
              >
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <FileText className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
