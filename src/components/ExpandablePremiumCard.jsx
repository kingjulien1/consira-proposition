"use client";

import { BadgeEuro } from "lucide-react";
import { useState } from "react";
import { CountUpNumber } from "@/components/CountUpNumber";
import { MobileSubtleParallax } from "@/components/MobileSubtleParallax";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";

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
      className="relative z-30 my-16 min-h-80 sm:my-0"
      onRevealComplete={() => setEntryComplete(true)}
    >
      <MobileSubtleParallax distance={20} className="h-full">
        <div className="card-bounce-shell h-full">
          <SpotlightCard
            borderGlow
            spotlightColor="109, 124, 255"
            spotlightOpacity={0.18}
            spotlightSize="52%"
            className="border-glow-no-intro premium-always-glow cost-translation-card flex h-full min-h-80 flex-col justify-between rounded-[1.5rem] border border-[#6d7cff]/22 bg-[#f7f5ef] p-6 text-[#080709] shadow-[0_25px_80px_rgba(0,0,0,0.2),0_24px_80px_rgba(109,124,255,0.1)] hover:border-[#6d7cff]/36 hover:bg-[#f7f5ef]"
          >
            <BadgeEuro
              aria-hidden="true"
              className="card-context-ghost-icon text-black"
              strokeWidth={1.65}
            />
            <div className="relative z-10 flex h-full min-h-[17rem] flex-col justify-between pt-10">
              <div className="absolute bottom-0 right-0 text-right">
                <p className="whitespace-nowrap text-[0.68rem] font-medium leading-5 tracking-[-0.01em] text-black/36">
                  jährlich geltend machbar · steuerfrei
                </p>
              </div>

              <div>
                <p className="text-8xl font-semibold tracking-[-0.1em] text-black">
                  <CountUpNumber
                    value={14}
                    delay={0.02}
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
          </SpotlightCard>
        </div>
      </MobileSubtleParallax>
    </ScrollReveal>
  );
}
