"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFF5F5] to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-black">
              {"La mejor preparación para"}
              <span className="text-[#EB5757] relative inline-block">
                {"tu oposición"}
                <span
                  className={`absolute left-0 -bottom-2 w-full h-1 rounded transition-all duration-700 ease-out ${
                    visible
                      ? "bg-[#EB5757]/20 scale-x-100"
                      : "bg-[#EB5757]/20 scale-x-0"
                  } origin-left`}
                  aria-hidden="true"
                ></span>
              </span>
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl">
              Opositandos es una plataforma digital para opositores que combina
              preguntas actualizadas, simulacros reales y una potente IA que
              genera exámenes personalizados, ayudándote a estudiar de forma más
              eficaz y enfocada.
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-b border-gray-100 py-6">
              <Stats
                value="+9,000"
                label="Preguntas actualizadas"
                color="#EB5757"
                delay={200}
              />
              <Stats
                value="100%"
                label="Temario oficial"
                color="#2F80ED"
                delay={300}
              />
              <Stats
                value="24/7"
                label="Acceso completo"
                color="#EB5757"
                delay={400}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#EB5757] hover:bg-[#d64545] text-white px-8 py-4 text-base font-medium rounded-md transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" /> Empezar ahora
              </Button>
            </div>
          </div>
          <MobileMockups visible={visible} />
        </div>
      </div>
    </section>
  );
}

function Stats({
  value,
  label,
  color,
  delay,
}: {
  value: string;
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <div
      className={`text-center transition-all duration-700 ease-out transform`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

function MobileMockups({ visible }: { visible: boolean }) {
  return (
    <div
      className={`flex justify-center lg:justify-end relative transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex gap-6">
        <ImageCard src="/images/mobile-app.png" />
        <ImageCard src="/images/mobile-feedback.png" rotate="-rotate-2" />
      </div>
    </div>
  );
}

function ImageCard({ src, rotate }: { src: string; rotate?: string }) {
  return (
    <div
      className={`transform ${rotate || "rotate-2"} hover:rotate-1 transition-transform duration-300`}
    >
      <div className="bg-black rounded-[2rem] p-1.5 shadow-2xl">
        <div className="bg-white rounded-[1.5rem] overflow-hidden">
          <Image
            src={src}
            alt=""
            width={220}
            height={440}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
