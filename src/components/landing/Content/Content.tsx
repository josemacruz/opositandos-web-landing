"use client";

import { FileText } from "lucide-react";
import { CARDS } from "./Content.constants";
import { Card } from "@/components/ui/card";
import { LITERALS } from "./Content.literals";

export default function Content() {
  return (
    <section id="content" className="py-20 bg-gray-50 scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-4">
            {LITERALS.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {LITERALS.description}
          </p>
        </div>

        <div className="mb-8 sm:hidden ">
          <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className="mb-10 snap-start flex-shrink-0 w-[80%] sm:w-[60%] md:w-[45%]"
              >
                <Card className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${card.iconBg}`}
                  >
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <FileText className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Grid en tablets y escritorio */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <Card
              key={card.title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${card.iconBg}`}
              >
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <FileText className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
