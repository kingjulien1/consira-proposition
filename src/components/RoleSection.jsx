"use client";

import { ArrowRight, FileCheck2, Languages, Split } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionBackgroundMotion } from "@/components/SectionBackgroundMotion";
import { SpecularButton } from "@/components/SpecularButton";
import { TypewriterHeading } from "@/components/TypewriterHeading";

const roleCards = [
  {
    icon: Split,
    label: "01",
    title: "Technik erfassen",
    text: "Wir holen aus Gesprächen und Unterlagen heraus, wo der tatsächliche F&E-Kern liegt.",
  },
  {
    icon: Languages,
    label: "02",
    title: "Sprache wechseln",
    text: "Aus interner Projektlogik wird eine Argumentation, die Finanzamt und Gutachter nachvollziehen können.",
  },
  {
    icon: FileCheck2,
    label: "03",
    title: "Einreichung vorbereiten",
    text: "Die Struktur reduziert Reibung und macht aus Entwicklung einen belastbaren Prämienprozess.",
  },
];

function RoleCard({ icon: Icon, label, title, text, className = "" }) {
  return (
    <div
      className={`border-glow-card role-lux-card group/role relative min-h-[17.5rem] overflow-hidden rounded-[2rem] border border-black/[0.075] bg-white p-5 shadow-[0_22px_75px_rgba(7,16,24,0.065)] transition duration-500 hover:-translate-y-2 hover:border-[#b68a43]/28 hover:shadow-[0_34px_105px_rgba(7,16,24,0.105),0_18px_70px_rgba(182,138,67,0.12)] sm:min-h-[19rem] sm:p-6 ${className}`}
    >
      <div aria-hidden="true" className="border-glow-aura" />
      <div aria-hidden="true" className="role-lux-card__aura" />
      <div aria-hidden="true" className="role-lux-card__beam" />
      <div aria-hidden="true" className="role-lux-card__orb role-lux-card__orb--one" />
      <div aria-hidden="true" className="role-lux-card__orb role-lux-card__orb--two" />
      <div aria-hidden="true" className="role-lux-card__grid" />

      <div className="relative z-10 mb-14 flex items-start justify-between sm:mb-16">
        <div className="role-lux-card__icon flex h-12 w-12 items-center justify-center rounded-full bg-[#071018] text-white shadow-[0_16px_38px_rgba(7,16,24,0.18)] transition duration-500 group-hover/role:scale-105 group-hover/role:bg-[#8f6933] group-hover/role:shadow-[0_18px_48px_rgba(143,105,51,0.22)]">
          <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={2.05} />
        </div>
        <span className="role-lux-card__index rounded-full border border-black/[0.07] bg-black/[0.025] px-3 py-1.5 text-xs font-medium tracking-[0.14em] text-black/32 transition duration-500 group-hover/role:border-[#b68a43]/24 group-hover/role:bg-[#f4ead6]/60 group-hover/role:text-[#7b5a2e]">
          {label}
        </span>
      </div>

      <div className="relative z-10">
        <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#9f7841]/46 transition duration-500 group-hover/role:text-[#8f6933]/72">
          Schritt {label}
        </p>
        <h3 className="max-w-sm text-2xl font-semibold tracking-[-0.06em] text-[#071018] text-balance transition duration-500 group-hover/role:text-[#4e3418]">
          {title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-6 text-black/50 transition duration-500 group-hover/role:text-black/58">
          {text}
        </p>
      </div>
    </div>
  );
}

export function RoleSection() {
  return (
    <section
      id="rolle"
      className="relative z-20 min-h-screen bg-[#f7f5ef]/82"
    >
      <div className="role-section-glass relative flex min-h-screen overflow-hidden bg-[#f7f5ef]/86 px-6 pb-24 pt-10 text-[#071018] shadow-2xl shadow-black/35 ring-1 ring-black/5 backdrop-blur-sm sm:px-10 lg:px-14 lg:py-12">
        <SectionBackgroundMotion theme="warm" secondaryGlow={false} />
        <div className="role-section-translucency-spots absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center gap-12">
          <div className="mx-auto max-w-4xl text-center">
            <div>
              <SectionBadge href="#rolle" icon="workflow" tone="light" className="mx-auto">
                Unsere Rolle
              </SectionBadge>
              <TypewriterHeading
                text="Wir übersetzen Entwicklung in prüfbare Argumente."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
              />
            </div>
            <ScrollReveal delay={0.36} distance={18}>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-black/56 sm:text-base">
                Ihre Teams denken in Prototypen, Tests und Lösungen. Gutachter
                brauchen klare Kriterien, Nachweise und Struktur. CONSIRA baut
                die Brücke zwischen beiden Welten.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {roleCards.map((card, index) => (
              <ScrollReveal
                key={card.title}
                delay={0.24 + index * 0.22}
                duration={1.18}
                distance={0}
                xDistance={-92}
              >
                <RoleCard {...card} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.16} className="mx-auto mt-8 flex flex-col items-center gap-3 text-center lg:mt-0">
            <SpecularButton href="#kontakt" variant="dark">
              Kostenloses Erstgespräch buchen
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </SpecularButton>
            <p className="max-w-lg text-xs leading-5 text-black/34">
              Weniger Übersetzungsverlust. Mehr Klarheit. Ein Prozess, der
              Ihre technische Arbeit sauber zur Prämie führt.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
