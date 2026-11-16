"use client";

import { useState } from "react";
import { Copy, Check, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROMO_CODE } from "./BlackFriday.constants";
import { LITERALS } from "./BlackFriday.literals";
import { BlackFridayCountdown } from "./BlackFridayCountdown";

export function BlackFridayHero() {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // el portapapeles puede no estar disponible; el código sigue visible
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0B0B0F] text-white py-20 lg:py-28">
      <div
        className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-[#EB5757]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#EB5757]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EB5757] text-white text-xs sm:text-sm font-bold uppercase tracking-widest mb-8">
          <Tag className="w-4 h-4" />
          {LITERALS.badge}
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          {LITERALS.title.normal}
          <span className="text-[#EB5757]">{LITERALS.title.highlighted}</span>
        </h1>

        <p className="text-base sm:text-lg text-white/70 max-w-2xl mb-10">
          {LITERALS.subtitle}
        </p>

        <div className="mb-10">
          <BlackFridayCountdown />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#EB5757] hover:bg-[#d64545] text-white px-10 py-4 h-auto text-base font-semibold rounded-full"
          >
            <a href="#planes">{LITERALS.buttonOffer}</a>
          </Button>

          <button
            type="button"
            onClick={copyCode}
            className="inline-flex items-center gap-3 rounded-full border border-dashed border-white/30 px-5 py-3 text-sm hover:border-white/60 transition-colors"
          >
            <span className="text-white/60">{LITERALS.promoLabel}</span>
            <span className="font-mono font-bold tracking-wider">
              {PROMO_CODE}
            </span>
            <span className="inline-flex items-center gap-1 text-[#EB5757] font-semibold">
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? LITERALS.copied : LITERALS.copy}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
