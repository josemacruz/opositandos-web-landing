"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Shield, CheckCircle } from "lucide-react";

type PlanKey = "basic" | "complete" | "premium";

const PLAN_INFO: Record<
  PlanKey,
  { label: string; subtitle: string; includes: string[]; color: string }
> = {
  basic: {
    label: "Plan Básico",
    subtitle: "Acceso esencial",
    color: "#2F80ED",
    includes: [
      "Acceso a +20,000 preguntas",
      "Simulacros cronometrados",
      "Estadísticas básicas",
    ],
  },
  complete: {
    label: "Plan Completo",
    subtitle: "Todas las funciones",
    color: "#9B51E0",
    includes: [
      "Todo lo del Plan Básico",
      "Feedback inmediato",
      "Informes detallados",
      "Descargas de temarios",
    ],
  },
  premium: {
    label: "Plan Premium",
    subtitle: "Soporte personalizado",
    color: "#27AE60",
    includes: [
      "Todo lo del Plan Completo",
      "Tutorías 1:1",
      "Sesiones en directo",
      "Acceso anticipado a novedades",
    ],
  },
};

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: Readonly<PricingModalProps>) {
  const [selected, setSelected] = useState<PlanKey | null>(null);

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
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-[#EB5757] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-[#EB5757]" />
          </div>

          <DialogTitle asChild>
            <h3 className="text-2xl font-bold text-black mb-2">
              Planes Personalizados
            </h3>
          </DialogTitle>

          <p className="text-gray-600">
            Selecciona tu plan y descubre lo que incluye.
          </p>

          <div className="grid grid-cols-1 gap-3 text-left">
            {(["basic", "complete", "premium"] as PlanKey[]).map((key) => {
              const plan = PLAN_INFO[key];
              const active = selected === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`
                    flex items-center justify-between p-4 rounded-xl border
                    ${
                      active
                        ? `border-[${plan.color}] bg-[${plan.color}] bg-opacity-10`
                        : "border-gray-200 hover:border-gray-300"
                    }
                    transition
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className={`w-5 h-5 ${
                        active ? plan.color : "text-gray-300"
                      }`}
                    />
                    <div>
                      <div
                        className={`font-semibold ${
                          active ? plan.color : "text-gray-800"
                        }`}
                      >
                        {plan.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {plan.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="bg-gray-50 rounded-xl p-4 text-left">
              <h4 className="font-semibold text-black mb-2">¿Qué incluye?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {PLAN_INFO[selected].includes.map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-3">
            <Button
              className="w-full bg-[#EB5757] hover:bg-[#d64545] text-white py-3"
              onClick={onClose}
            >
              {selected
                ? "Contactar por " + PLAN_INFO[selected].label
                : "Contactar para Precios"}
            </Button>
            <p className="text-xs text-gray-500">
              Te contactaremos en menos de 24 horas con información
              personalizada
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
            <div className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
              15 días de garantía
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
              Pago seguro
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
