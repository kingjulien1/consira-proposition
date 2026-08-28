"use client";

import { BadgeEuro } from "lucide-react";
import { CountUpNumber } from "@/components/CountUpNumber";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export function ExpandablePremiumCard({
  revealDelay = 0.32,
  revealDistance = 34,
  revealXDistance = 0,
  smartStaggerKey,
}) {
  const revealDuration = 1.25;

  return (
    <ScrollReveal
      delay={revealDelay}
      smartStaggerKey={smartStaggerKey}
      duration={revealDuration}
      distance={revealDistance}
      xDistance={revealXDistance}
      className="relative z-30 mt-20 mb-44 sm:my-0 lg:h-full"
    >
      <div className="card-bounce-shell h-full">
        <SpotlightCard
          borderGlow
          spotlightColor="109, 124, 255"
          spotlightOpacity={0.18}
          spotlightSize="52%"
          className="border-glow-no-intro premium-always-glow premium-light-glow cost-translation-card flex min-h-[17.25rem] flex-col justify-between rounded-[1.45rem] border border-[#6d7cff]/22 bg-[#f7f5ef] p-5 text-[#080709] shadow-[0_22px_70px_rgba(0,0,0,0.18),0_18px_62px_rgba(109,124,255,0.09)] hover:border-[#6d7cff]/36 hover:bg-[#f7f5ef] sm:min-h-[19rem] sm:rounded-[1.75rem] sm:p-6 lg:h-full lg:min-h-0 lg:rounded-[2rem]"
        >
          <BadgeEuro
            aria-hidden="true"
            className="card-context-ghost-icon premium-card-ghost-icon text-black"
            strokeWidth={1.65}
          />
          <div className="relative z-10 flex h-full flex-col justify-between gap-8">
            <div className="flex items-start justify-between gap-5">
              <p className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-black/34">
                Prämienrate
              </p>
              <p className="max-w-[11.5rem] text-right text-[0.75rem] font-medium leading-5 tracking-[-0.01em] text-black/42 sm:max-w-none sm:text-[0.78rem]">
                jährlich geltend machbar ·{" "}
                <span className="font-semibold text-black">steuerfrei</span>
              </p>
            </div>

            <div className="mt-auto">
              <p className="premium-percent-shine text-[5.45rem] font-semibold leading-[0.82] tracking-[-0.105em] text-black sm:text-[6.4rem] lg:text-[6.75rem]">
                <CountUpNumber
                  value={14}
                  delay={0}
                  duration={3.4}
                />
                <span className="ml-2.5 inline-block text-[0.68em] text-black/32 sm:ml-3">%</span>
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-[0.85fr_1.15fr] sm:items-end sm:gap-5 lg:grid-cols-1 lg:gap-2">
                <h3 className="max-w-52 text-[1.35rem] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[1.55rem]">
                  Gutschrift auf Entwicklungskosten
                </h3>
                <p className="max-w-sm text-[0.83rem] leading-5 text-black/52 sm:text-sm sm:leading-6 lg:max-w-64">
                  Relevant wird sie, wenn technische Arbeit sauber beschrieben,
                  begründet und den richtigen Kosten zugeordnet ist.
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </ScrollReveal>
  );
}
