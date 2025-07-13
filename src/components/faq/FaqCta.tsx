import { MessageCircle } from "lucide-react";

export function FaqCta({
  openContactModal,
}: {
  readonly openContactModal: () => void;
}) {
  return (
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
            onClick={openContactModal}
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
  );
}
