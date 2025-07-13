"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

import { useContactModal } from "@/hooks/useContactModal";
import { ContactModal } from "@/components/modals/ContactModal";
import { Button } from "@/components/ui/button";
import { CATEGORIES, FAQS } from "./Faq.constants";
import { FaqCta } from "./FaqCta";
import { FaqHero } from "./FaqHero";
import { FaqItem } from "./FaqItems";

export default function Faq() {
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
      <FaqHero />

      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center md:hidden">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                  flex items-center space-x-1 px-3 py-1.5 rounded-full text-sm font-medium transition
                  ${
                    active
                      ? "bg-[#EB5757] text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }
                `}
                >
                  <Icon
                    className={`w-4 h-4 ${active ? "text-white" : "text-gray-500"}`}
                  />
                  <span>{cat.name}</span>
                  <span
                    className={`
                  inline-block ml-1 text-xs font-semibold px-1 rounded-full
                  ${active ? "bg-white text-[#EB5757]" : "bg-gray-300 text-gray-700"}
                `}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = selectedCategory === cat.id;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                  cursor-pointer flex items-center space-x-2 p-2 rounded-2xl border transition
                  ${
                    active
                      ? "border-[#EB5757] bg-[#EB5757]/10 shadow-lg"
                      : "border-gray-200 hover:shadow-md"
                  }
                `}
                  aria-pressed={active}
                >
                  <div
                    className={`
                  w-12 h-12 flex items-center justify-center rounded-lg
                  ${active ? "bg-[#EB5757]" : "bg-gray-100"}
                `}
                  >
                    <Icon
                      className={`w-6 h-6 ${active ? "text-white" : "text-gray-600"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold text-lg ${active ? "text-[#EB5757]" : "text-gray-900"}`}
                    >
                      {cat.name}
                    </h4>
                  </div>
                  <span
                    className={`
                  inline-block text-sm font-semibold px-2 py-1 rounded-full
                  ${active ? "bg-[#EB5757] text-white" : "bg-gray-200 text-gray-700"}
                `}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {filteredFAQs.map((faq) => (
            <FaqItem
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
      <FaqCta openContactModal={contactModal.openModal} />
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={contactModal.closeModal}
      />
    </div>
  );
}
