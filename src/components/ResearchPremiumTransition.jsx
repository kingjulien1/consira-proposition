"use client";

import {
  Building2,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  CircleArrowDown,
  ClipboardCheck,
  Route,
} from "lucide-react";
import { ExpandablePremiumCard } from "@/components/ExpandablePremiumCard";
import Iridescence from "@/components/Iridescence";
import { PlainScrollReveal } from "@/components/PlainScrollReveal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionFadeBackground } from "@/components/SectionFadeBackground";
import { SideHeadingMotion } from "@/components/SideHeadingMotion";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TypewriterHeading } from "@/components/TypewriterHeading";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

const premiumFacts = [
  {
    icon: CalendarClock,
    title: "Auch rückwirkend relevant",
    text: "Vergangene Wirtschaftsjahre können unter den richtigen Voraussetzungen berücksichtigt werden, wenn Entwicklung nachvollziehbar dokumentiert und zeitlich sauber zugeordnet ist.",
  },
  {
    icon: CheckCircle2,
    title: "Nicht vom Erfolg abhängig",
    text: "Auch gescheiterte technische Vorhaben können prämienfähig sein, wenn der Weg, die Unsicherheit und die Erkenntnisse sauber begründet sind.",
  },
  {
    icon: Building2,
    title: "Für viele Unternehmensgrößen",
    text: "Vom kleinen Team bis zum Industriebetrieb zählt die technische Substanz der Entwicklung, nicht Außenwirkung, Branche oder Unternehmensgröße.",
  },
];

const audienceCards = [
  {
    icon: Route,
    title: "Technische Unsicherheit",
    text: "Wenn der Lösungsweg nicht von Beginn an klar war, Alternativen geprüft wurden oder technische Grenzen erst während der Umsetzung sichtbar wurden.",
  },
  {
    icon: ClipboardCheck,
    title: "Systematische Arbeit",
    text: "Wenn Ihr Team geplant vorgeht, Hypothesen testet, Ergebnisse dokumentiert und die Lösung nachvollziehbar Schritt für Schritt verbessert.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Praxis statt Labor",
    text: "Wenn Entwicklung im laufenden Betrieb entsteht: in Software, Produktion, Prozessen, Maschinen oder neuen Produkten mit technischem Kern.",
  },
];

const darkOverlayCardClass =
  "rounded-[1.5rem] border border-[#c9a76a]/20 bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.14),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.082),rgba(159,120,65,0.075)_50%,rgba(255,255,255,0.018))] p-5 transition lg:border-white/10 lg:bg-white/[0.04] hover:border-[#f0d49a]/28 hover:bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.2),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.095),rgba(159,120,65,0.105)_50%,rgba(255,255,255,0.022))]";

const lightOverlayCardClass =
  "rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm shadow-black/[0.035] transition hover:-translate-y-0.5 hover:border-black/16 hover:bg-white";

function ResearchPremiumSection() {
  const premiumCardDelayBase = useResponsiveDelay(0.62, 0.62, "(max-width: 1023px)");
  const premiumCardDelayStep = useResponsiveDelay(0.22, 0.22, "(max-width: 1023px)");
  const premiumCardXDistance = useResponsiveDelay(74, 74, "(max-width: 1023px)");
  const premiumMainCardDelay = premiumCardDelayBase + premiumCardDelayStep * premiumFacts.length;
  const premiumMainCardDistance = useResponsiveDelay(58, 0, "(max-width: 1023px)");
  const premiumMainCardXDistance = useResponsiveDelay(0, 74, "(max-width: 1023px)");

  return (
    <section
      id="forschungspraemie"
      className="relative z-10 min-h-screen p-0 sm:p-5 lg:p-7"
    >
      <div className="relative flex min-h-screen overflow-hidden rounded-t-[1.15rem] bg-black/18 px-6 pb-10 pt-10 text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-2xl sm:min-h-[calc(100vh-2.5rem)] sm:rounded-[2rem] sm:px-10 sm:pb-24 lg:min-h-[calc(100vh-3.5rem)] lg:rounded-[2.5rem] lg:px-14 lg:py-12">
        <SectionFadeBackground
          color="rgba(0, 0, 0, 0.68)"
          start={0.08}
          end={0.62}
          from={0.04}
          to={0.76}
        />
        <div
          className="research-premium-opacity-spots absolute inset-0"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-80 bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.5)_26%,rgba(0,0,0,0.28)_54%,rgba(0,0,0,0)_100%)] sm:hidden"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden bg-gradient-to-t from-black/72 via-black/28 to-transparent sm:block sm:h-52 lg:h-64"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SideHeadingMotion className="max-w-2xl pt-8 pb-4 sm:pt-0 sm:pb-0">
            <div>
              <SectionBadge href="#forschungspraemie" icon="euro" tone="dark">
                Was Ist Die Forschungsprämie?
              </SectionBadge>
              <TypewriterHeading
                text="Eine Gutschrift für echte Entwicklung."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
              />
            </div>
            <ScrollReveal delay={0.36} distance={18}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
                Österreich fördert Forschung und Entwicklung über eine
                steuerfreie Prämie. Entscheidend ist nicht, ob ein Projekt am
                Ende perfekt funktioniert, sondern ob technisches Neuland,
                Unsicherheit und systematische Entwicklungsarbeit vorliegen.
              </p>
            </ScrollReveal>
          </SideHeadingMotion>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4">
              {premiumFacts.map(({ icon: Icon, title, text }, index) => (
                <ScrollReveal
                  key={title}
                  delay={premiumCardDelayBase + index * premiumCardDelayStep}
                  smartStaggerKey="research-premium-cards"
                  distance={0}
                  xDistance={premiumCardXDistance}
                >
                  <SpotlightCard borderGlow className={`min-h-36 p-3.5 sm:min-h-0 sm:p-5 ${darkOverlayCardClass}`}>
                    <Icon
                      aria-hidden="true"
                      className="card-context-ghost-icon text-white"
                      strokeWidth={1.65}
                    />
                    <div className="relative z-10 border-glow-card__icon mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black sm:mb-5 sm:h-9 sm:w-9">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.1} />
                    </div>
                    <h3 className="relative z-10 text-base font-semibold tracking-[-0.03em] sm:text-lg">
                      {title}
                    </h3>
                    <p className="relative z-10 mt-2 line-clamp-3 text-[0.76rem] leading-[1.18rem] text-white/48 sm:line-clamp-none sm:text-sm sm:leading-6">
                      {text}
                    </p>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>

            <ExpandablePremiumCard
              revealDelay={premiumMainCardDelay}
              revealDistance={premiumMainCardDistance}
              revealXDistance={premiumMainCardXDistance}
              smartStaggerKey="research-premium-cards"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audienceCardDelayBase = useResponsiveDelay(0.48, 0.48, "(max-width: 1023px)");
  const audienceCardDelayStep = useResponsiveDelay(0.24, 0.24, "(max-width: 1023px)");
  const audienceSignalDelay = useResponsiveDelay(
    0.48 + 0.24 * audienceCards.length,
    0.48 + 0.24 * audienceCards.length,
    "(max-width: 1023px)"
  );

  return (
    <section id="fuer-wen" className="relative z-20 min-h-screen bg-[#f7f5ef]">
      <div className="relative flex min-h-screen overflow-visible bg-[#f7f5ef] px-6 pb-24 pt-10 text-[#080709] sm:px-10 lg:px-14 lg:py-12">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <SideHeadingMotion className="max-w-2xl pt-8 pb-4 sm:pt-0 sm:pb-0">
            <div>
              <SectionBadge href="#fuer-wen" icon="compass" tone="light">
                Für Wen?
              </SectionBadge>
              <TypewriterHeading
                text="Nicht die Branche. Die Tätigkeit zählt."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
              />
            </div>
            <ScrollReveal delay={0.36} distance={18}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-black/58 sm:text-base">
                F&E steckt oft nicht im Labor, sondern dort, wo Teams
                technische Unsicherheiten lösen: in Software, Maschinen,
                Produktion, Prozessen oder neuen Produkten. Entscheidend ist,
                ob echte Entwicklung dokumentierbar ist.
              </p>
            </ScrollReveal>
          </SideHeadingMotion>

          <div className="grid gap-4">
            <div className="grid items-stretch gap-4 md:grid-cols-3">
              {audienceCards.map(({ icon: Icon, title, text }, index) => (
                <ScrollReveal
                  key={title}
                  delay={audienceCardDelayBase + index * audienceCardDelayStep}
                  smartStaggerKey="audience-cards"
                  distance={0}
                  xDistance={-74}
                  mobileXDistance={86}
                  mobileXDistanceQuery="(max-width: 1023px)"
                  className="h-full"
                >
                  <SpotlightCard borderGlow className={`flex h-full min-h-40 w-full flex-col rounded-[1.45rem] p-3.5 sm:min-h-[16rem] sm:rounded-[1.75rem] sm:p-5 lg:min-h-[15.5rem] ${lightOverlayCardClass}`}>
                    <Icon
                      aria-hidden="true"
                      className="card-context-ghost-icon audience-card-context-ghost-icon text-black"
                      strokeWidth={1.65}
                    />
                    <div className="relative z-10 mb-6 flex items-start sm:mb-10 lg:mb-8">
                      <div className="border-glow-card__icon flex h-8 w-8 items-center justify-center rounded-full bg-[#080709] text-white shadow-lg shadow-black/[0.08] sm:h-9 sm:w-9">
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.1} />
                      </div>
                    </div>
                    <div className="relative z-10 mt-auto w-full max-w-none">
                      <h3 className="w-full text-base font-semibold tracking-[-0.055em] sm:text-xl lg:text-[1.2rem]">
                        {title}
                      </h3>
                      <p className="mt-2 line-clamp-3 w-full max-w-none text-[0.76rem] leading-[1.18rem] text-black/52 sm:line-clamp-none sm:text-sm sm:leading-6 lg:text-sm lg:leading-6">
                        {text}
                      </p>
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>

            <div className="grid gap-4">
              <div className="group/signalblock">
              <PlainScrollReveal
                delay={audienceSignalDelay}
                smartStaggerKey="audience-cards"
                distance={0}
                xDistance={0}
                mobileXDistance={-86}
                mobileXDistanceQuery="(max-width: 1023px)"
                className="mt-20 mb-0 sm:my-0 lg:mt-3 lg:h-full"
              >
                <div className="card-bounce-shell lg:h-full">
                  <div className="border-glow-card border-glow-no-intro signal-iridescence-card cost-translation-card group/signal relative isolate overflow-hidden rounded-[1.35rem] border-2 border-[#6d7cff]/22 bg-transparent p-4 pb-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_70px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1.5 hover:border-[#6d7cff]/36 group-hover/signalblock:-translate-y-1.5 group-hover/signalblock:border-[#6d7cff]/36 sm:rounded-[1.6rem] sm:p-5 sm:pb-7 md:rounded-[1.85rem] md:p-6 md:pb-8 lg:h-full lg:rounded-[2rem] lg:p-6 lg:pb-8">
                    <div aria-hidden="true" className="border-glow-aura" />
                    <div className="absolute inset-0.5 z-0 rounded-[1.15rem] bg-black sm:rounded-[1.4rem] md:rounded-[1.65rem] lg:rounded-[1.75rem]" />
                    <div className="absolute inset-0.5 z-0 overflow-hidden rounded-[1.15rem] sm:rounded-[1.4rem] md:rounded-[1.65rem] lg:rounded-[1.75rem]">
                      <Iridescence
                        color={[0.46, 0.34, 0.78]}
                        mouseReact={false}
                        amplitude={0.095}
                        speed={0.58}
                      />
                    </div>
                    <div className="signal-card-black-overlay signal-card-black-overlay--diagonal absolute inset-0 z-0" />
                    <div className="signal-card-gradient-overlay absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.1),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(240,212,154,0.12),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.08),rgba(0,0,0,0.02)_55%,rgba(0,0,0,0.14))]" />

                    <div className="relative z-10 mb-8">
                      <span className="signal-card-quote-mark inline-flex font-serif text-4xl font-black leading-none text-white/78 transition duration-500 group-hover/signal:scale-105 group-hover/signal:rotate-[-5deg] group-hover/signal:text-white/88">
                        “
                      </span>
                    </div>
                    <p className="signal-card-copy relative z-10 max-w-3xl text-2xl font-semibold leading-[1.08] tracking-[-0.045em] text-balance transition duration-500 group-hover/signal:text-white">
                      Wenn Ihr Team etwas entwickelt, das{" "}
                      <span className="rounded-[0.28em] bg-white/14 px-[0.16em] py-[0.02em] text-white shadow-[0_0_30px_rgba(255,255,255,0.12)] ring-1 ring-white/18 transition duration-500 group-hover/signal:bg-white/18 group-hover/signal:ring-white/26">
                        vorher so nicht verfügbar
                      </span>{" "}
                      war, lohnt sich der Blick genauer.
                    </p>
                    <p className="relative z-10 mt-4 max-w-2xl text-sm leading-6 text-white/54 transition duration-500 group-hover/signal:text-white/62">
                      Entscheidend ist die technische Substanz: Unsicherheit,
                      systematisches Vorgehen und nachvollziehbare Entwicklung
                      zählen mehr als Branche, Labor oder Unternehmensgröße.
                    </p>
                  </div>
                </div>
              </PlainScrollReveal>
              <PlainScrollReveal
                delay={audienceSignalDelay + 0.08}
                amount={0.18}
                duration={0.95}
                distance={-24}
                disableBlur
                className="mt-0 mb-16 flex justify-center lg:hidden"
              >
                <span className="inline-flex transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/signalblock:-translate-y-1.5">
                  <span className="signal-down-cue inline-flex">
                    <CircleArrowDown
                      aria-hidden="true"
                      className="h-6 w-6 text-black/84 transition duration-500 group-hover/signalblock:scale-110 group-hover/signalblock:rotate-[-7deg] group-hover/signalblock:text-[#6d7cff] group-hover/signalblock:drop-shadow-[0_0_18px_rgba(109,124,255,0.36)]"
                      strokeWidth={1.9}
                    />
                  </span>
                </span>
              </PlainScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResearchPremiumTransition() {
  return (
    <>
      <ResearchPremiumSection />
      <AudienceSection />
    </>
  );
}
