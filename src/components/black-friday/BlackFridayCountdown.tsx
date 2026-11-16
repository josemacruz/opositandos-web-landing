"use client";

import { useEffect, useState } from "react";
import { OFFER_END, OFFER_START } from "./BlackFriday.constants";
import { LITERALS } from "./BlackFriday.literals";

type Phase = "upcoming" | "active" | "ended";

function getState(now: number) {
  if (now < OFFER_START.getTime()) {
    return { phase: "upcoming" as Phase, diff: OFFER_START.getTime() - now };
  }
  if (now <= OFFER_END.getTime()) {
    return { phase: "active" as Phase, diff: OFFER_END.getTime() - now };
  }
  return { phase: "ended" as Phase, diff: 0 };
}

function split(diff: number) {
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export function BlackFridayCountdown() {
  // null hasta montar en cliente para evitar desajustes de hidratación
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { phase, diff } = getState(now ?? OFFER_START.getTime());

  if (now !== null && phase === "ended") {
    return (
      <p className="text-lg font-semibold text-white/80">
        {LITERALS.countdown.ended}
      </p>
    );
  }

  const parts = split(diff);
  const units = LITERALS.countdown.units;
  const items = [
    { value: parts.days, label: units.days },
    { value: parts.hours, label: units.hours },
    { value: parts.minutes, label: units.minutes },
    { value: parts.seconds, label: units.seconds },
  ];

  return (
    <div aria-live="polite">
      <p className="text-sm uppercase tracking-widest text-white/60 mb-3">
        {phase === "upcoming"
          ? LITERALS.countdown.startsIn
          : LITERALS.countdown.endsIn}
      </p>
      <div className="flex gap-2 sm:gap-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="w-16 sm:w-20 rounded-xl bg-white/5 border border-white/10 py-3 text-center"
          >
            <div className="text-2xl sm:text-3xl font-extrabold tabular-nums text-white">
              {now === null ? "--" : String(item.value).padStart(2, "0")}
            </div>
            <div className="text-[11px] sm:text-xs text-white/50 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
