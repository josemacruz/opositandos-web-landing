"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stats } from "./HeroStats";
import { MobileMockups } from "./HeroMobileMockups";
import { LITERALS } from "./Hero.literals";

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
              {LITERALS.title.normal}
              <span className="text-[#EB5757] relative inline-block">
                {LITERALS.title.highlighted}
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
              {LITERALS.description}
            </p>

            <div className="grid grid-cols-3 gap-8 border-t border-b border-gray-100 py-6">
              <Stats
                value={LITERALS.stats.updatedQuestions.value}
                label={LITERALS.stats.updatedQuestions.label}
                color="#EB5757"
                delay={200}
              />
              <Stats
                value={LITERALS.stats.officialSyllabus.value}
                label={LITERALS.stats.officialSyllabus.label}
                color="#2F80ED"
                delay={300}
              />
              <Stats
                value={LITERALS.stats.fullAccess.value}
                label={LITERALS.stats.fullAccess.label}
                color="#EB5757"
                delay={400}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#EB5757] hover:bg-[#d64545] text-white px-8 py-4 text-base font-medium rounded-md transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                {LITERALS.buttonText}
              </Button>
            </div>
          </div>
          <MobileMockups visible={visible} />
        </div>
      </div>
    </section>
  );
}
