import {
  BadgeEuro,
  Building2,
  CalendarClock,
  CheckCircle2,
  Cpu,
  Factory,
  Settings2,
  Wrench,
} from "lucide-react";
import { BranchLoopOverlay } from "@/components/BranchLoopOverlay";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionFadeBackground } from "@/components/SectionFadeBackground";
import { SideHeadingMotion } from "@/components/SideHeadingMotion";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TypewriterHeading } from "@/components/TypewriterHeading";

const premiumFacts = [
  {
    icon: CalendarClock,
    title: "Auch rückwirkend relevant",
    text: "Vergangene Wirtschaftsjahre können unter den richtigen Voraussetzungen berücksichtigt werden.",
  },
  {
    icon: CheckCircle2,
    title: "Nicht vom Erfolg abhängig",
    text: "Auch ein gescheitertes technisches Vorhaben kann prämienfähig sein, wenn die Entwicklung sauber begründet ist.",
  },
  {
    icon: Building2,
    title: "Für viele Unternehmensgrößen",
    text: "Vom spezialisierten Team bis zum Industriebetrieb zählt vor allem die Qualität der Entwicklungsarbeit.",
  },
];

const audienceCards = [
  {
    icon: Cpu,
    title: "Technische Unsicherheit",
    text: "Wenn der Lösungsweg nicht offensichtlich ist.",
  },
  {
    icon: Wrench,
    title: "Systematische Arbeit",
    text: "Wenn getestet, verbessert und nachvollziehbar entwickelt wird.",
  },
  {
    icon: Factory,
    title: "Praxis statt Labor",
    text: "Wenn Entwicklung im Tagesgeschäft passiert.",
  },
];

const darkOverlayCardClass =
  "rounded-[1.5rem] border border-[#c9a76a]/20 bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.14),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.082),rgba(159,120,65,0.075)_50%,rgba(255,255,255,0.018))] p-5 transition lg:border-white/10 lg:bg-white/[0.04] hover:border-[#f0d49a]/28 hover:bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.2),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.095),rgba(159,120,65,0.105)_50%,rgba(255,255,255,0.022))]";

const lightOverlayCardClass =
  "rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm shadow-black/[0.035] transition hover:-translate-y-0.5 hover:border-black/16 hover:bg-white";

function ResearchPremiumSection() {
  return (
    <section
      id="forschungspraemie"
      className="relative z-10 min-h-screen p-4 sm:p-5 lg:p-7"
    >
      <div className="relative flex min-h-[calc(100vh-2rem)] overflow-hidden rounded-[1.65rem] px-6 pb-24 pt-10 text-white sm:min-h-[calc(100vh-2.5rem)] sm:rounded-[2rem] sm:px-10 lg:min-h-[calc(100vh-3.5rem)] lg:rounded-[2.5rem] lg:px-14 lg:py-12">
        <SectionFadeBackground start={0.14} end={0.46} />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SideHeadingMotion className="max-w-2xl">
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
                  delay={0.08 + index * 0.08}
                >
                  <SpotlightCard className={darkOverlayCardClass}>
                    <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                      <Icon className="h-4 w-4" strokeWidth={2.1} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/48">
                      {text}
                    </p>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.32} className="relative z-20 min-h-80">
              <SpotlightCard className="flex h-full min-h-80 flex-col justify-between rounded-[1.5rem] border border-white/80 bg-[#f7f5ef] p-6 text-[#080709] shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition hover:border-white hover:bg-[#f7f5ef]">
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                    <BadgeEuro className="h-4 w-4" strokeWidth={2.1} />
                  </div>
                  <span className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-medium text-black/52">
                    steuerfrei
                  </span>
                </div>

                <div>
                  <p className="text-8xl font-semibold tracking-[-0.1em] text-black">
                    14<span className="text-black/32">%</span>
                  </p>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">
                    Gutschrift auf F&E-Kosten
                  </h3>
                  <p className="mt-3 max-w-64 text-sm leading-6 text-black/52">
                    Jährlich geltend machbar, wenn Kosten und Entwicklungsarbeit
                    sauber zugeordnet sind.
                  </p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section id="fuer-wen" className="relative z-20 min-h-screen bg-[#f7f5ef]">
      <div className="relative flex min-h-screen flex-col overflow-visible bg-[#f7f5ef] px-6 text-[#080709] sm:px-10 lg:px-14">
        <BranchLoopOverlay />

        <div className="relative flex flex-1 items-center pb-24 pt-10 lg:py-12">
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <SideHeadingMotion className="max-w-2xl">
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
                    delay={0.08 + index * 0.08}
                    className="h-full"
                  >
                    <SpotlightCard className={`flex h-full min-h-56 flex-col ${lightOverlayCardClass}`}>
                      <div className="mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#080709] text-white">
                        <Icon className="h-4 w-4" strokeWidth={2.1} />
                      </div>
                      <div className="mt-auto">
                        <h3 className="text-lg font-semibold tracking-[-0.035em]">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-black/50">
                          {text}
                        </p>
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <ScrollReveal
                  delay={0.32}
                  className="overflow-hidden rounded-[2rem] bg-black p-6 text-white"
                >
                  <div className="mb-16 flex items-center justify-between text-xs text-white/45">
                    <span className="uppercase tracking-[0.18em]">Signal</span>
                    <Settings2 className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <p className="max-w-xl text-3xl font-semibold tracking-[-0.055em] text-balance sm:text-4xl">
                    Wenn Ihr Team etwas entwickelt, das vorher so nicht
                    verfügbar war, lohnt sich der Blick genauer.
                  </p>
                </ScrollReveal>

                <ScrollReveal
                  delay={0.4}
                  className="rounded-[2rem] border border-black/10 bg-white p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                    Gut zu wissen
                  </p>
                  <p className="mt-8 text-4xl font-semibold tracking-[-0.06em]">
                    Größe ist zweitrangig.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-black/52">
                    Ein kleines Team kann genauso relevant sein wie ein
                    Industriebetrieb. CONSIRA bewertet nicht die
                    Außendarstellung Ihrer Innovation, sondern die technische
                    Substanz dahinter.
                  </p>
                </ScrollReveal>
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
