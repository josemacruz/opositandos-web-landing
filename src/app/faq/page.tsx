"use client";

import { useState } from "react";
import {
  Search,
  BookOpen,
  User,
  Settings,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
import { ContactModal } from "@/components/modals/ContactModal";
import { FAQS } from "@/lib/constans";
import { Badge } from "@/components/ui/badge";
import { FAQItem } from "@/components/faq/FAQItem";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { id: "all", name: "Todas", icon: Search, count: 14 },
  { id: "general", name: "General", icon: BookOpen, count: 4 },
  { id: "account", name: "Cuenta", icon: User, count: 3 },
  { id: "platform", name: "Plataforma", icon: Settings, count: 3 },
  { id: "payment", name: "Pagos", icon: CreditCard, count: 2 },
  { id: "content", name: "Contenido", icon: BookOpen, count: 2 },
];

export default function FAQPage() {
  const contactModal = useContactModal();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filteredFAQs = FAQS.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div>
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-4 leading-tight">
            Resolvemos tus <span className="text-[#EB5757]">dudas</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Encuentra respuestas rápidas a las preguntas más frecuentes sobre
            Opositandos.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(({ id, name, icon: Icon, count }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center justify-between sm:justify-start sm:space-x-3 p-4 rounded-lg transition-all w-full ${
                selectedCategory === id
                  ? "bg-[#EB5757] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                <span className="text-sm sm:text-base">{name}</span>
              </div>
              <Badge
                className={`ml-auto sm:ml-0 ${
                  selectedCategory === id
                    ? "bg-white/20 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {count}
              </Badge>
            </button>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {filteredFAQs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              expanded={expandedFAQ === faq.id}
              onToggle={() =>
                setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
              }
            />
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Prueba seleccionando otra categoría o contacta con nuestro
                equipo.
              </p>
              <Button onClick={contactModal.openModal}>
                Contactar Soporte
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#EB5757] to-[#d64545] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
            Nuestro equipo de soporte está listo para ayudarte en todo lo que
            necesites.
          </p>

          <div className="flex justify-center">
            <button
              onClick={contactModal.openModal}
              className="
          inline-flex items-center
          border border-white
          text-white
          hover:bg-white hover:text-[#EB5757]
          font-semibold text-base sm:text-lg
          px-6 py-3
          rounded-full
          transition-all duration-300
        "
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contactar Soporte
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={contactModal.closeModal}
      />
    </div>
  );
}
