"use client";

import { useState } from "react";
import { CountUpNumber } from "@/components/CountUpNumber";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ExpandablePremiumCard({
  revealDelay = 0.32,
  revealDistance = 34,
  revealXDistance = 0,
}) {
  const [entryComplete, setEntryComplete] = useState(false);
  const revealDuration = 1.25;

  return (
    <ScrollReveal
      delay={revealDelay}
      duration={revealDuration}
      distance={revealDistance}
      xDistance={revealXDistance}
      className="relative z-30 min-h-80"
      onRevealComplete={() => setEntryComplete(true)}
    >
      <div className="border-glow-card relative flex h-full min-h-80 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#f7f5ef] p-6 text-[#080709] shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition hover:border-white hover:bg-[#f7f5ef]">
        <div aria-hidden="true" className="border-glow-aura" />
        <div className="relative z-10 flex h-full min-h-[17rem] flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="relative inline-flex items-center overflow-hidden rounded-full border border-[#6d7cff]/18 bg-[#eef2ff]/72 px-2.5 py-1 text-[0.64rem] font-medium tracking-[-0.01em] text-[#41528f] shadow-sm shadow-black/[0.035] backdrop-blur">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#8ea7ff]/24"
              />
              <span className="relative">
                steuerfrei
              </span>
            </span>
            <span aria-hidden="true" />
          </div>

          <div>
            <p className="text-8xl font-semibold tracking-[-0.1em] text-black">
              <CountUpNumber
                value={14}
                delay={0.08}
                duration={3.4}
                enabled={entryComplete}
              />
              <span className="text-black/32">%</span>
            </p>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">
              Gutschrift auf F&E-Kosten
            </h3>
            <p className="mt-3 max-w-64 text-sm leading-6 text-black/52">
              Jährlich geltend machbar, wenn Kosten und Entwicklungsarbeit
              sauber zugeordnet sind.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
