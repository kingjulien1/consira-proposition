"use client";

import { Building2, Cpu, Factory } from "lucide-react";
import { useState } from "react";
import { CountUpNumber } from "@/components/CountUpNumber";
import Iridescence from "@/components/Iridescence";
import { ScrollReveal } from "@/components/ScrollReveal";
import { updateSmoothGlowPosition } from "@/components/smoothGlowPointer";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

const stories = [
  {
    icon: Building2,
    value: 20000,
    valueClassName: "text-[2.55rem] sm:text-[2.7rem] lg:text-[3.25rem]",
    valueToneClassName: "success-value-card--violet",
    title: "Indoor- & Outdoor-Lokalisierung",
    text: "Ein kleines GIS-Team machte präzise Lokalisierung für Museen und historische Orte prämienfähig. Entscheidend war, die technische Unsicherheit hinter Indoor-Tracking, Datenqualität und robusten Positionsmodellen sauber sichtbar zu machen.",
  },
  {
    icon: Cpu,
    value: 180000,
    valueClassName: "text-[2.38rem] sm:text-[2.55rem] lg:text-[3.05rem]",
    valueToneClassName: "success-value-card--sapphire",
    title: "KI im Recruiting",
    text: "Ein junges Unternehmen strukturierte seine KI-Entwicklung trotz langer Rückfragen erfolgreich. Aus Modelltests, Bewertungskriterien und iterativer Verbesserung entstand eine belastbare Argumentation für die Einreichung.",
  },
  {
    icon: Factory,
    value: 1500000,
    valueClassName: "text-[2.08rem] sm:text-[2.28rem] lg:text-[2.62rem]",
    valueToneClassName: "success-value-card--fuchsia",
    title: "Hightech im Anlagenbau",
    text: "Mechanik, Robotik und KI wurden über mehrere Jahre als F&E-Projekte sauber identifiziert. Laufende Entwicklungsarbeit, Prototypen und technische Versuche konnten dadurch strukturiert und wiederkehrend geltend gemacht werden.",
  },
];

export function SuccessStoriesCards({ cardClassName = "" }) {
  const cardDelayBase = useResponsiveDelay(0.18, 0.18, "(max-width: 1023px)");
  const cardDelayStep = useResponsiveDelay(0.4, 0.62, "(max-width: 1023px)");

  return (
    <>
      {stories.map((story, index) => (
        <SuccessStoryCard
          key={story.title}
          {...story}
          cardClassName={cardClassName}
          delay={cardDelayBase + index * cardDelayStep}
        />
      ))}
      <ScrollReveal
        delay={cardDelayBase + stories.length * cardDelayStep}
        smartStaggerKey="success-stories-cards"
        duration={0.94}
        amount={0.16}
        mobileAmount={0.12}
        distance={18}
        className="mt-7 sm:mt-5 lg:mt-2"
      >
        <div className="success-more-stories group/more relative isolate mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-3 text-center text-white sm:max-w-2xl">
          <span
            className="success-more-stories__stack flex shrink-0 items-center"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
          <span className="relative z-10 min-w-0">
            <span className="success-more-stories__title block text-base font-semibold leading-tight tracking-[-0.045em] text-white sm:text-lg">
              Da kommt noch deutlich mehr.
            </span>
            <span className="success-more-stories__text mt-1.5 block text-xs leading-5 text-white/50 sm:text-sm">
              Viele weitere Projekte zeigen: Wenn Entwicklung sauber sichtbar
              wird, entsteht oft spürbares Prämienpotenzial.
            </span>
          </span>
        </div>
      </ScrollReveal>
    </>
  );
}

function SuccessStoryCard({
  icon: Icon,
  value,
  valueClassName,
  valueToneClassName,
  title,
  text,
  cardClassName,
  delay,
}) {
  const [countEnabled, setCountEnabled] = useState(false);

  return (
    <ScrollReveal
      delay={delay}
      smartStaggerKey="success-stories-cards"
      duration={1.02}
      distance={0}
      xDistance={-72}
      disableBlur
      onRevealStart={() => setCountEnabled(true)}
    >
      <div
        className={`${cardClassName} soft-outer-border border-glow-card border-glow-no-intro success-gold-card group/story relative overflow-hidden border-2 border-white/12 p-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 sm:p-3 lg:h-[13.25rem] lg:rounded-[1.65rem]`}
        onPointerMove={updateSmoothGlowPosition}
      >
        <div aria-hidden="true" className="border-glow-aura" />
        <div className="relative z-10 grid h-full items-stretch gap-3 lg:grid-cols-[0.78fr_1.22fr] lg:gap-4">
          <div className={`success-value-card ${valueToneClassName} relative flex min-h-[7.35rem] flex-col justify-between overflow-hidden border-0 bg-black/20 p-3.5 text-[#eef2ff] shadow-[0_18px_48px_rgba(109,124,255,0.08)] transition duration-500 group-hover/story:-translate-y-0.5 group-hover/story:shadow-[0_22px_64px_rgba(109,124,255,0.14),0_0_34px_rgba(168,85,247,0.1)] sm:min-h-[8rem] sm:p-4 lg:h-full lg:min-h-0`}>
            <div className="success-value-card__iridescence absolute inset-0 z-0" aria-hidden="true">
              <Iridescence
                color={[0.46, 0.34, 0.78]}
                mouseReact={false}
                amplitude={0.085}
                speed={0.48}
              />
            </div>
            <span
              aria-hidden="true"
              className="success-value-card__tint pointer-events-none absolute inset-0 z-0"
            />
            <span
              aria-hidden="true"
              className="success-value-card__veil pointer-events-none absolute inset-0 z-0"
            />
            <span
              aria-hidden="true"
              className="success-value-card__diagonal-veil pointer-events-none absolute inset-0 z-0"
            />
            <span
              aria-hidden="true"
              className="success-value-card__wash pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/story:opacity-100"
            />
            <span
              aria-hidden="true"
              className="success-value-card__sweep pointer-events-none absolute -inset-y-8 left-[-48%] z-0 w-[42%] opacity-0 blur-sm"
            />
            <span
              aria-hidden="true"
              className="success-value-card__glow pointer-events-none absolute right-4 top-4 z-0 h-24 w-24 rounded-full blur-2xl transition duration-500"
            />
            <Icon
              aria-hidden="true"
              className="card-context-ghost-icon success-value-card-ghost-icon text-white"
              strokeWidth={1.55}
            />
            <div className="relative mt-3 flex flex-1 flex-col justify-end lg:mt-auto">
              <p className={`${valueClassName} euro-value-shine w-full whitespace-nowrap text-left font-semibold leading-[0.82] tracking-[-0.08em] tabular-nums text-[#f8faff]`}>
                <CountUpNumber value={value} enabled={countEnabled} delay={0.18} />
              </p>
              <div className="mt-2 flex items-end justify-between gap-4 pr-1">
                <p className="success-value-card__currency text-2xl font-semibold leading-none tracking-[-0.075em] text-[#eef2ff]/70 sm:text-3xl">
                  €
                </p>
                <p className="success-value-card__label text-right text-[0.76rem] font-extrabold uppercase leading-none tracking-[0.16em] text-[#eef2ff]/72 sm:text-[0.8rem]">
                  zurückgeholt
                </p>
              </div>
            </div>
          </div>
          <div className="flex min-h-[7.35rem] flex-col justify-center px-1 pb-1 pt-1 sm:px-2 lg:h-full lg:min-h-0 lg:p-1.5">
            <h3 className="text-lg font-semibold tracking-[-0.05em] text-white sm:text-xl">
              {title}
            </h3>
            <p className="mt-2.5 line-clamp-3 max-w-md text-sm leading-6 text-white/45 sm:line-clamp-none lg:text-[0.82rem] lg:leading-5">
              {text}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
