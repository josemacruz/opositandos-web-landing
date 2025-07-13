"use client";

import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LITERALS } from "./Cta.literals";

interface CtaProps {
  readonly onContact: () => void;
  readonly onPricing: () => void;
}

export default function Cta({ onContact, onPricing }: CtaProps) {
  return (
    <section className="py-20 relative bg-gradient-to-r from-[#EB5757] via-[#e45656] to-[#d64545] text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-white/10 border border-white/20 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
            <Award className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white">
            {LITERALS.badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight relative">
          <span className="inline-block">
            <span className="text-[#FFF5F5]">{LITERALS.title.highlighted}</span>
            {LITERALS.title.normal}
            <span
              className="absolute left-0 -bottom-1 w-0.5/6 lg:w-full h-1 bg-white/30 rounded origin-left scale-x-100 transition-all duration-1000 ease-out"
              aria-hidden="true"
            />
          </span>
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
          {LITERALS.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-[#EB5757] hover:bg-gray-100 px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            onClick={onContact}
          >
            {LITERALS.buttonStart}{" "}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border border-white text-white hover:bg-white hover:text-[#EB5757] px-8 py-4 text-lg font-semibold rounded-lg bg-transparent transition-all duration-300"
            onClick={onPricing}
          >
            {LITERALS.buttonDiscover}
          </Button>
        </div>
      </div>
    </section>
  );
}
