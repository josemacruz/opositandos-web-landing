import { CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constans";
import { PLANS, PROMO_CODE } from "./BlackFriday.constants";
import { LITERALS } from "./BlackFriday.literals";

function offerMailto(planLabel: string) {
  const subject = `Black Friday - ${planLabel}`;
  const body = `Hola, me interesa el ${planLabel} con el código ${PROMO_CODE}.`;
  return `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export function BlackFridayPlans() {
  return (
    <section id="planes" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            {LITERALS.plans.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {LITERALS.plans.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-8 transition-shadow ${
                plan.featured
                  ? "bg-[#0B0B0F] text-white shadow-2xl md:scale-105"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#EB5757] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {LITERALS.plans.featured}
                </span>
              )}

              <h3 className="text-xl font-bold">{plan.label}</h3>
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-white/60" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span
                  className="text-6xl font-extrabold tracking-tight"
                  style={{ color: plan.color }}
                >
                  -{plan.discount}%
                </span>
                <span
                  className={plan.featured ? "text-white/60" : "text-gray-500"}
                >
                  {LITERALS.plans.off}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: plan.color }}
                    />
                    <span
                      className={
                        plan.featured ? "text-white/80" : "text-gray-700"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={offerMailto(plan.label)}
                className={`inline-flex items-center justify-center w-full rounded-full px-6 py-3 font-semibold transition-colors ${
                  plan.featured
                    ? "bg-[#EB5757] hover:bg-[#d64545] text-white"
                    : "bg-gray-900 hover:bg-black text-white"
                }`}
              >
                {LITERALS.plans.button}
              </a>
            </article>
          ))}
        </div>

        <p className="text-xs text-gray-500 text-center mt-10 max-w-2xl mx-auto">
          {LITERALS.legal}
        </p>
      </div>
    </section>
  );
}
