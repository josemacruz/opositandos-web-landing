"use client";

import { useEffect, useState } from "react";
import { FEATURES } from "./Features.constants";
import { FeaturesCard } from "./FeaturesCard";
import { LITERALS } from "./Features.literals";

export default function Features() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="features"
      className="py-20 relative bg-white overflow-hidden scroll-mt-32"
    >
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FFF5F5] to-transparent pointer-events-none"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 mt-4">
            {LITERALS.title.normal}
            <span className="text-[#EB5757]">{LITERALS.title.highlighted}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {LITERALS.description}
          </p>
        </div>

        <div className="mb-8 sm:hidden">
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
            {FEATURES.map((item, idx) => (
              <div
                key={item.title}
                className="mb-10 snap-start flex-shrink-0 w-[80%]"
              >
                <FeaturesCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  highlight={item.highlight}
                  color={item.color}
                  delay={idx * 100}
                  animate={animate}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((item, idx) => (
            <FeaturesCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              highlight={item.highlight}
              color={item.color}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
