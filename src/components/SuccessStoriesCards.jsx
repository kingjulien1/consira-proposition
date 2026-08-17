"use client";

import { Building2, Cpu, Factory } from "lucide-react";
import { CountUpNumber } from "@/components/CountUpNumber";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

const stories = [
  {
    icon: Building2,
    value: 20000,
    valueClassName: "text-[2.25rem] sm:text-[2.7rem] lg:text-[3.25rem]",
    title: "Indoor- & Outdoor-Lokalisierung",
    text: "Ein kleines GIS-Team machte präzise Lokalisierung für Museen und historische Orte prämienfähig.",
  },
  {
    icon: Cpu,
    value: 180000,
    valueClassName: "text-[2.1rem] sm:text-[2.55rem] lg:text-[3.05rem]",
    title: "KI im Recruiting",
    text: "Ein junges Unternehmen strukturierte seine KI-Entwicklung trotz langer Rückfragen erfolgreich.",
  },
  {
    icon: Factory,
    value: 1500000,
    valueClassName: "text-[1.9rem] sm:text-[2.28rem] lg:text-[2.62rem]",
    title: "Hightech im Anlagenbau",
    text: "Mechanik, Robotik und KI wurden über mehrere Jahre als F&E-Projekte sauber identifiziert.",
  },
];

export function SuccessStoriesCards({ cardClassName = "" }) {
  const cardDelayStep = useResponsiveDelay(0.16, 0.28, "(max-width: 1023px)");

  return (
    <>
      {stories.map(({ icon: Icon, value, valueClassName, title, text }, index) => (
        <ScrollReveal
          key={title}
          delay={0.18 + index * cardDelayStep}
          duration={1.02}
          distance={-56}
          disableBlur
        >
          <div className={`border-glow-card success-gold-card group/story relative overflow-hidden p-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 sm:p-3 lg:h-[13.25rem] lg:rounded-[1.65rem] ${cardClassName}`}>
            <div aria-hidden="true" className="border-glow-aura" />
            <div className="grid h-full items-stretch gap-3 lg:grid-cols-[0.78fr_1.22fr] lg:gap-4">
              <div className="success-value-card relative flex min-h-[7.35rem] flex-col justify-between overflow-hidden rounded-[1rem] border-0 bg-[#6d7cff]/15 p-3.5 text-[#eef2ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_48px_rgba(109,124,255,0.08)] transition duration-500 group-hover/story:-translate-y-0.5 group-hover/story:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_22px_64px_rgba(109,124,255,0.14),0_0_34px_rgba(168,85,247,0.1)] sm:min-h-[8rem] sm:border sm:border-[#8ea7ff]/24 sm:p-4 sm:group-hover/story:border-[#eef2ff]/38 lg:h-full lg:min-h-0">
                <span
                  aria-hidden="true"
                  className="success-value-card__wash pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/story:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="success-value-card__sweep pointer-events-none absolute -inset-y-8 left-[-48%] w-[42%] opacity-0 blur-sm"
                />
                <span
                  aria-hidden="true"
                  className="success-value-card__glow pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full blur-2xl transition duration-500"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span aria-hidden="true" />
                  <div className="success-value-card__icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/18 bg-white/18 text-white/78 transition duration-500 lg:h-8 lg:w-8">
                    <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={2.1} />
                  </div>
                </div>
                <div className="relative mt-4 flex flex-col lg:mt-auto">
                  <p className={`${valueClassName} euro-value-shine w-full whitespace-nowrap text-left font-semibold leading-[0.82] tracking-[-0.08em] tabular-nums text-[#f8faff]`}>
                    <CountUpNumber value={value} />
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <p className="text-2xl font-semibold leading-none tracking-[-0.075em] text-[#eef2ff]/70 sm:text-3xl">
                      €
                    </p>
                    <p className="pb-0.5 text-right text-[0.62rem] font-semibold uppercase leading-none tracking-[0.18em] text-[#eef2ff]/66 sm:pb-1">
                      zurückgeholt
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[7.35rem] flex-col justify-center px-1 pb-1 pt-1 sm:px-2 lg:h-full lg:min-h-0 lg:p-1.5">
                <p className="mb-2.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#c8b894]/45">
                  Case {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold tracking-[-0.05em] text-white sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-6 text-white/45 lg:text-[0.82rem] lg:leading-5">
                  {text}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </>
  );
}
