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
      className={`role-gold-card group/role relative min-h-[17.5rem] overflow-hidden rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_24px_70px_rgba(7,16,24,0.07)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:rotate-[0.2deg] hover:border-[#c9a76a]/45 hover:shadow-[0_34px_95px_rgba(159,120,65,0.18),0_0_0_6px_rgba(240,212,154,0.075)] sm:min-h-[19rem] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-1.25rem] opacity-0 transition-opacity duration-500 group-hover/role:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 22% 2%, rgba(240, 212, 154, 0.2), transparent 38%), radial-gradient(circle at 92% 4%, rgba(201, 167, 106, 0.18), transparent 36%), linear-gradient(135deg, rgba(255, 247, 222, 0.15), rgba(240, 212, 154, 0.07) 48%, rgba(159, 120, 65, 0.1))",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-12 -left-1/2 w-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,247,222,0.68),rgba(240,212,154,0.22),transparent)] blur-sm transition-transform duration-[950ms] ease-out group-hover/role:translate-x-[410%]"
      />
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#071018]/[0.035] blur-2xl transition duration-500 group-hover/role:bg-[#f0d49a]/25" />

      <div className="mb-12 flex items-start justify-between sm:mb-16">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071018] text-white shadow-lg shadow-black/10 transition duration-500 group-hover/role:scale-110 group-hover/role:rotate-6 group-hover/role:bg-[#9f7841] group-hover/role:shadow-[0_16px_38px_rgba(159,120,65,0.3)]">
          <Icon className="h-4.5 w-4.5" strokeWidth={2.1} />
        </div>
        <div className="relative">
          <span className="absolute -inset-1.5 rounded-full bg-[#f0d49a]/35 blur-md opacity-0 transition duration-500 group-hover/role:opacity-100" />
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.045] text-sm font-semibold tracking-[-0.05em] text-black/38 transition duration-500 group-hover/role:border-[#c9a76a]/35 group-hover/role:bg-[#f0d49a]/22 group-hover/role:text-[#7a5526]">
            {label}
          </span>
        </div>
      </div>

      <div className="relative">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-black/35 transition duration-500 group-hover/role:text-[#9f7841]/70">
          Schritt {label}
        </p>
        <h3 className="text-2xl font-semibold tracking-[-0.055em] text-balance transition duration-500 group-hover/role:text-[#6f4b1f]">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-black/52">{text}</p>
      </div>
    </div>
  );
}

export function RoleSection() {
  return (
    <section
      id="rolle"
      className="relative z-20 min-h-screen bg-[#f7f5ef]"
    >
      <div className="relative flex min-h-screen overflow-hidden bg-[#f7f5ef] px-6 pb-24 pt-10 text-[#071018] shadow-2xl shadow-black/35 ring-1 ring-black/5 sm:px-10 lg:px-14 lg:py-12">
        <SectionBackgroundMotion theme="warm" secondaryGlow={false} />
        <div className="dot-grid-background absolute inset-0" aria-hidden="true" />
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
