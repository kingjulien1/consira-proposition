"use client";

import { Handshake, PackageOpen, Settings2, UsersRound } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

const costCards = [
  {
    icon: UsersRound,
    title: "Personalkosten",
    text: "Arbeitszeit von Mitarbeitenden, die direkt an Entwicklung, Tests und technischer Problemlösung beteiligt sind.",
  },
  {
    icon: Handshake,
    title: "Externe Entwicklung",
    text: "Auftragsforschung und spezialisierte Entwicklungsleistungen im EU/EWR-Raum.",
  },
  {
    icon: PackageOpen,
    title: "Material & Prototypen",
    text: "Bauteile, Versuchsmaterial, Testaufbauten und iterative Prototypen während der Entwicklung.",
  },
  {
    icon: Settings2,
    title: "F&E-Investitionen",
    text: "Maschinen, Messgeräte, Labor-Equipment oder technische Infrastruktur mit Entwicklungsbezug.",
  },
];

export function CostIconCards({ cardClassName = "" }) {
  const cardDelayBase = useResponsiveDelay(0.48, 0.48, "(max-width: 1023px)");
  const cardDelayStep = useResponsiveDelay(0, 0.24, "(max-width: 1023px)");

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {costCards.map(({ icon: Icon, title, text }, index) => (
        <ScrollReveal
          key={title}
          delay={cardDelayBase + index * cardDelayStep}
          distance={0}
          xDistance={0}
          mobileXDistance={74}
          mobileXDistanceQuery="(max-width: 1023px)"
        >
          <SpotlightCard borderGlow className={`min-h-52 p-5 lg:min-h-[10.75rem] lg:p-4 ${cardClassName}`}>
            <Icon
              aria-hidden="true"
              className="card-context-ghost-icon text-white"
              strokeWidth={1.65}
            />
            <div className="relative z-10 border-glow-card__icon mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#080709] lg:mb-6 lg:h-8 lg:w-8">
              <Icon className="h-4 w-4 lg:h-3.5 lg:w-3.5" strokeWidth={2.1} />
            </div>
            <h3 className="relative z-10 text-xl font-semibold tracking-[-0.04em] lg:text-lg">
              {title}
            </h3>
            <p className="relative z-10 mt-3 text-sm leading-6 text-white/48 lg:mt-2 lg:text-[0.82rem] lg:leading-5">{text}</p>
          </SpotlightCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
