"use client";

import { Handshake, PackageOpen, Settings2, UsersRound } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

const costCards = [
  {
    icon: UsersRound,
    title: "Personalkosten",
    text: "Arbeitszeit von Mitarbeitenden, die direkt an Entwicklung, Tests und technischer Problemlösung beteiligt sind – inklusive Analyse, Versuchen und Abstimmung.",
  },
  {
    icon: Handshake,
    title: "Externe Entwicklung",
    text: "Auftragsforschung und spezialisierte Entwicklungsleistungen im EU/EWR-Raum, wenn externe Partner klar am technischen Fortschritt mitarbeiten.",
  },
  {
    icon: PackageOpen,
    title: "Material & Prototypen",
    text: "Bauteile, Versuchsmaterial, Testaufbauten und iterative Prototypen, die für Entwicklungsschritte, Validierung und technische Tests benötigt werden.",
  },
  {
    icon: Settings2,
    title: "F&E-Investitionen",
    text: "Maschinen, Messgeräte, Labor-Equipment oder technische Infrastruktur mit Entwicklungsbezug, soweit sie nachvollziehbar einem Projekt zugeordnet werden.",
  },
];

export function CostIconCards({ cardClassName = "" }) {
  const cardDelayBase = useResponsiveDelay(0.48, 0.48, "(max-width: 1023px)");
  const cardDelayStep = useResponsiveDelay(0.24, 0.24, "(max-width: 1023px)");

  return (
    <div className="grid gap-3.5 self-start sm:gap-4 md:grid-cols-2">
      {costCards.map(({ icon: Icon, title, text }, index) => (
        <ScrollReveal
          key={title}
          delay={cardDelayBase + index * cardDelayStep}
          smartStaggerKey="cost-icon-cards"
          distance={0}
          xDistance={0}
          mobileXDistance={74}
          mobileXDistanceQuery="(max-width: 1023px)"
        >
          <SpotlightCard borderGlow className={`min-h-36 !p-3.5 sm:min-h-48 sm:!p-5 md:min-h-52 lg:min-h-[9.35rem] lg:!p-3.5 ${cardClassName}`}>
            <Icon
              aria-hidden="true"
              className="card-context-ghost-icon text-white"
              strokeWidth={1.65}
            />
            <div className="relative z-10 border-glow-card__icon mb-5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#080709] sm:mb-10 sm:h-9 sm:w-9 lg:mb-5 lg:h-8 lg:w-8">
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-3.5 lg:w-3.5" strokeWidth={2.1} />
            </div>
            <h3 className="relative z-10 text-base font-semibold tracking-[-0.04em] sm:text-xl lg:text-lg">
              {title}
            </h3>
            <p className="relative z-10 mt-2 line-clamp-3 text-[0.76rem] leading-[1.18rem] text-white/48 sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-6 lg:mt-2 lg:line-clamp-3 lg:text-[0.8rem] lg:leading-5">{text}</p>
          </SpotlightCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
