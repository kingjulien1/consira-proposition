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
  const cardDelayBase = useResponsiveDelay(0.08, 0.48, "(max-width: 1023px)");
  const cardDelayStep = useResponsiveDelay(0.08, 0.24, "(max-width: 1023px)");
  const cardXDistance = useResponsiveDelay(0, 74, "(max-width: 1023px)");

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {costCards.map(({ icon: Icon, title, text }, index) => (
        <ScrollReveal
          key={title}
          delay={cardDelayBase + index * cardDelayStep}
          distance={0}
          xDistance={cardXDistance}
        >
          <SpotlightCard borderGlow className={`min-h-52 p-5 ${cardClassName}`}>
            <div className="border-glow-card__icon mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#080709]">
              <Icon className="h-4 w-4" strokeWidth={2.1} />
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.04em]">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/48">{text}</p>
          </SpotlightCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
