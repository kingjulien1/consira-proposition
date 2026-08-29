"use client";

import { ArrowRight, BotMessageSquare, CircleCheck, CircuitBoard, MessageSquareQuote, Stamp } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SpecularButton } from "@/components/SpecularButton";
import { updateSmoothGlowPosition } from "@/components/smoothGlowPointer";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

const roleCards = [
  {
    icon: CircuitBoard,
    label: "01",
    title: "Technik erfassen",
    text: "Wir holen aus Gesprächen, Skizzen und Unterlagen heraus, wo der tatsächliche technische Kern liegt und welche Unsicherheiten gelöst wurden.",
  },
  {
    icon: MessageSquareQuote,
    label: "02",
    title: "Sprache wechseln",
    text: "Aus interner Projektlogik entsteht eine klare, prüffähige Argumentation, die technische Entscheidungen für Finanzamt und Gutachter nachvollziehbar macht.",
  },
  {
    icon: Stamp,
    label: "03",
    title: "Einreichung vorbereiten",
    text: "Wir verdichten Kosten, Nachweise und Projektverlauf zu einer sauberen Struktur, damit aus Entwicklung ein belastbarer Prämienprozess wird.",
  },
];

function RoleCard({ icon: Icon, label, title, text, className = "" }) {
  return (
    <div
      className={`basic-context-card border-glow-card role-lux-card group/role relative min-h-[16.5rem] overflow-hidden rounded-[1.8rem] border border-white/55 bg-white p-4.5 shadow-[0_22px_75px_rgba(7,16,24,0.065)] transition duration-500 hover:-translate-y-2 hover:scale-[1.018] hover:border-2 hover:border-black/16 hover:p-[calc(1.125rem-1px)] hover:shadow-[0_34px_105px_rgba(7,16,24,0.12)] sm:min-h-[19rem] sm:rounded-[2rem] sm:p-6 sm:hover:p-[calc(1.5rem-1px)] ${className}`}
      onPointerMove={updateSmoothGlowPosition}
    >
      <div aria-hidden="true" className="border-glow-aura" />
      <div aria-hidden="true" className="role-lux-card__aura" />
      <div aria-hidden="true" className="role-lux-card__beam" />
      <div aria-hidden="true" className="role-lux-card__orb role-lux-card__orb--one" />
      <div aria-hidden="true" className="role-lux-card__orb role-lux-card__orb--two" />
      <div aria-hidden="true" className="role-lux-card__grid" />
      <Icon
        aria-hidden="true"
        className="card-context-ghost-icon role-card-context-ghost-icon text-[#071018]"
        strokeWidth={1.65}
      />

      <div className="relative z-10 mb-12 flex items-start sm:mb-16">
        <div className="role-lux-card__icon border-glow-card__icon flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-[0_16px_38px_rgba(7,16,24,0.18)] transition duration-500 sm:h-11 sm:w-11">
          <Icon className="h-[0.95rem] w-[0.95rem] text-white transition duration-500 group-hover/role:text-white sm:h-4 sm:w-4" strokeWidth={2.35} />
        </div>
      </div>

      <div className="relative z-10">
        <div className="role-step-badge-row">
          <div className="role-step-badge">
            <span>Schritt</span>
            <span className="role-step-badge__index">
              {label}
            </span>
          </div>
          <span className="role-step-badge__check-wrap" aria-hidden="true">
            <CircleCheck
              className="role-step-badge__check"
              strokeWidth={2.55}
            />
          </span>
        </div>
        <h3 className="max-w-sm text-[1.35rem] font-semibold tracking-[-0.06em] text-[#071018] text-balance transition duration-500 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3.5 line-clamp-3 max-w-sm text-[0.82rem] leading-5 text-black/50 transition duration-500 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-6">
          {text}
        </p>
      </div>
    </div>
  );
}

export function RoleSection() {
  const sectionRef = useRef(null);
  const roleCardDelayBase = useResponsiveDelay(0.24, 0.24, "(max-width: 1023px)");
  const roleCardDelayStep = useResponsiveDelay(0.22, 0.86, "(max-width: 1023px)");
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ctaRawY = useTransform(scrollYProgress, [0, 1], [-4, 22]);
  const ctaY = useSpring(ctaRawY, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
    restDelta: 0.001,
    restSpeed: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      id="rolle"
      className="relative z-20 min-h-screen bg-[#f7f5ef]"
    >
      <div className="relative z-10 flex min-h-screen flex-col overflow-visible bg-[#f7f5ef] px-6 pb-32 pt-10 text-[#071018] shadow-2xl shadow-black/35 ring-1 ring-black/5 sm:px-10 sm:pb-32 lg:overflow-hidden lg:px-14 lg:py-12">
        <BotMessageSquare
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 -top-6 z-0 h-36 w-36 rotate-[28deg] text-[#071018] opacity-[0.095] sm:hidden"
          strokeWidth={1.35}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center gap-12">
          <div className="mx-auto max-w-4xl pt-8 pb-4 text-center sm:pt-0 sm:pb-0">
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

          <div className="grid gap-7 sm:gap-8 lg:grid-cols-3 lg:gap-6">
            {roleCards.map((card, index) => (
              <ScrollReveal
                key={card.title}
                delay={roleCardDelayBase + index * roleCardDelayStep}
                mobileDelay={0.2 + index * 0.58}
                smartStaggerKey={undefined}
                duration={1.18}
                amount={0.42}
                mobileAmount={index > 0 ? 0.98 : 0.42}
                mobileMargin={index > 0 ? "0px 0px -14% 0px" : "0px"}
                distance={0}
                xDistance={-92}
                mobileXDistance={0}
                mobileDistance={index > 0 ? -270 : -34}
              >
                <RoleCard {...card} />
              </ScrollReveal>
            ))}
          </div>

          <motion.div style={{ y: ctaY }} className="mx-auto w-fit will-change-transform">
            <ScrollReveal delay={0.16} className="mt-8 flex flex-col items-center gap-3 text-center lg:mt-0">
              <SpecularButton href="#kontakt" variant="dark">
                Kostenloses Erstgespräch buchen
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </SpecularButton>
              <p className="max-w-lg text-xs leading-5 text-black/34">
                Weniger Übersetzungsverlust. Mehr Klarheit. Ein Prozess, der
                Ihre technische Arbeit sauber zur Prämie führt.
              </p>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
