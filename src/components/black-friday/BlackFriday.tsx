"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
import { ContactModal } from "@/components/modals/ContactModal";
import { BENEFITS, BF_FAQS } from "./BlackFriday.constants";
import { LITERALS } from "./BlackFriday.literals";
import { BlackFridayHero } from "./BlackFridayHero";
import { BlackFridayPlans } from "./BlackFridayPlans";

export default function BlackFriday() {
  const contactModal = useContactModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <BlackFridayHero />

      <BlackFridayPlans />

      {/* Beneficios */}
      <section className="py-16 bg-[#FFF5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-black mb-10">
            {LITERALS.benefits.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-[#EB5757]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EB5757]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#EB5757]" />
                </div>
                <h3 className="font-semibold text-black mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ de la oferta */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-black mb-8">
            {LITERALS.faq.title}
          </h2>
          <div className="space-y-3">
            {BF_FAQS.map((faq) => {
              const expanded = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(expanded ? null : faq.id)}
                    aria-expanded={expanded}
                    className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded && (
                    <p className="px-5 pb-4 text-gray-600 text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#EB5757] to-[#d64545] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            {LITERALS.cta.title}
          </h2>
          <p className="text-base sm:text-lg mb-8 opacity-90">
            {LITERALS.cta.subtitle}
          </p>
          <button
            type="button"
            onClick={contactModal.openModal}
            className="inline-flex items-center border border-white hover:bg-white hover:text-[#EB5757] font-semibold text-base sm:text-lg px-8 py-3 rounded-full transition-all duration-300"
          >
            {LITERALS.cta.button}
          </button>
        </div>
      </section>

      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={contactModal.closeModal}
      />
    </div>
  );
}
