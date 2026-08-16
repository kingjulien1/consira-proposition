"use client";

import { ArrowRight, FileCheck2, Languages, Split } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
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
      className={`border-glow-card role-lux-card group/role relative min-h-[17.5rem] overflow-hidden rounded-[2rem] border border-white/55 bg-white/58 p-5 shadow-[0_22px_75px_rgba(7,16,24,0.065)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:scale-[1.018] hover:border-2 hover:border-black/16 hover:p-[calc(1.25rem-1px)] hover:shadow-[0_34px_105px_rgba(7,16,24,0.12)] sm:min-h-[19rem] sm:p-6 sm:hover:p-[calc(1.5rem-1px)] ${className}`}
    >
      <div aria-hidden="true" className="border-glow-aura" />
      <div aria-hidden="true" className="role-lux-card__aura" />
      <div aria-hidden="true" className="role-lux-card__beam" />
      <div aria-hidden="true" className="role-lux-card__orb role-lux-card__orb--one" />
      <div aria-hidden="true" className="role-lux-card__orb role-lux-card__orb--two" />
      <div aria-hidden="true" className="role-lux-card__grid" />

      <div className="relative z-10 mb-14 flex items-start sm:mb-16">
        <div className="role-lux-card__icon border-glow-card__icon flex h-12 w-12 items-center justify-center rounded-full bg-black text-black shadow-[0_16px_38px_rgba(7,16,24,0.18)] transition duration-500">
          <Icon className="h-[1.05rem] w-[1.05rem] transition duration-500 group-hover/role:scale-125 group-hover/role:rotate-[-8deg]" strokeWidth={2.35} />
        </div>
      </div>

      <div className="relative z-10">
        <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-black/32 transition duration-500 group-hover/role:tracking-[0.24em] group-hover/role:text-black/46">
          Schritt {label}
        </p>
        <h3 className="max-w-sm text-2xl font-semibold tracking-[-0.06em] text-[#071018] text-balance transition duration-500 group-hover/role:scale-[1.045] group-hover/role:tracking-[-0.07em]">
          {title}
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-6 text-black/50 transition duration-500 group-hover/role:translate-y-1 group-hover/role:text-black/62">
          {text}
        </p>
      </div>
    </div>
  );
}

export function RoleSection() {
  const sectionRef = useRef(null);
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    let frame = 0;

    function updateOverlay() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (!section || !mediaQuery.matches) {
          setShowMobileOverlay(false);
          return;
        }

        const rect = section.getBoundingClientRect();
        setShowMobileOverlay(rect.top < window.innerHeight && rect.bottom > 0);
      });
    }

    updateOverlay();
    window.addEventListener("scroll", updateOverlay, { passive: true });
    window.addEventListener("resize", updateOverlay);
    mediaQuery.addEventListener("change", updateOverlay);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateOverlay);
      window.removeEventListener("resize", updateOverlay);
      mediaQuery.removeEventListener("change", updateOverlay);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rolle"
      className="relative z-20 min-h-screen bg-transparent"
    >
      {showMobileOverlay ? (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden lg:hidden" aria-hidden="true">
          <div className="role-section-translucency-spots h-full w-full" />
        </div>
      ) : null}
      <div className="role-section-glass relative z-10 flex min-h-screen flex-col overflow-visible px-6 pb-24 pt-10 text-[#071018] shadow-2xl shadow-black/35 ring-1 ring-black/5 backdrop-blur-[2px] sm:px-10 lg:overflow-hidden lg:px-14 lg:py-12">
        <div className="pointer-events-none hidden overflow-hidden lg:absolute lg:inset-0 lg:z-0 lg:block" aria-hidden="true">
          <div className="role-section-translucency-spots h-full w-full lg:sticky lg:-top-px lg:h-[calc(100vh+2px)]" />
        </div>
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
