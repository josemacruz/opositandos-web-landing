"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Mail } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`
          w-full max-w-md
          mx-0 sm:mx-auto
          p-0 overflow-hidden
          bg-white
          border-0

          h-screen sm:h-auto
          rounded-none sm:rounded-2xl
          flex flex-col
        `}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Contenido */}
        <div className="p-8 flex flex-col justify-between flex-1">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-[#EB5757]/10 rounded-2xl flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-[#EB5757]" />
            </div>

            <DialogTitle asChild>
              <h3 className="text-2xl font-bold text-black text-center">
                ¡Contáctanos!
              </h3>
            </DialogTitle>

            <p className="text-gray-600 text-center">
              Escríbenos y resolveremos tus dudas lo antes posible.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="mailto:soporte@opositandos.es"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                w-full
                px-4 py-3
                rounded-full
                bg-[#EB5757] text-white
                hover:bg-[#d64545]
                transition-all
                text-lg font-semibold
                shadow-md
              "
            >
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </a>

            <p className="text-xs text-gray-500 text-center mt-6">
              Responderemos en menos de 2 horas en horario laboral.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
