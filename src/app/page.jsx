import {
  ArrowRight,
  Layers3,
  Phone,
} from "lucide-react";

import Iridescence from "@/components/Iridescence";
import { CostIconCards } from "@/components/CostIconCards";
import { GradualBlur } from "@/components/GradualBlur";
import {
  HeroParallaxContent,
  HeroParallaxSection,
} from "@/components/HeroParallaxSection";
import { Footer } from "@/components/Footer";
import { HeroScrollCue } from "@/components/HeroScrollCue";
import { IridescenceVeil } from "@/components/IridescenceVeil";
import { IntroLoader } from "@/components/IntroLoader";
import { ResearchPremiumTransition } from "@/components/ResearchPremiumTransition";
import { RoleSection } from "@/components/RoleSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionBackgroundMotion } from "@/components/SectionBackgroundMotion";
import { SideHeadingMotion } from "@/components/SideHeadingMotion";
import { SpecularButton } from "@/components/SpecularButton";
import { SpotlightCard } from "@/components/SpotlightCard";
import { SuccessStoriesCards } from "@/components/SuccessStoriesCards";
import { TypewriterHeading } from "@/components/TypewriterHeading";

const darkOverlayCardClass =
  "rounded-[1.5rem] border border-[#c9a76a]/20 bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.14),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.082),rgba(159,120,65,0.075)_50%,rgba(255,255,255,0.018))] transition lg:border-white/10 lg:bg-white/[0.04] hover:border-[#f0d49a]/28 hover:bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.2),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.095),rgba(159,120,65,0.105)_50%,rgba(255,255,255,0.022))]";

function CostPrincipleCard({ className = "" }) {
  return (
    <div className={`card-bounce-shell ${className}`}>
      <div className="border-glow-card border-glow-no-intro signal-iridescence-card group/signal relative isolate overflow-hidden rounded-[1.35rem] border-2 border-[#ec4899]/20 bg-transparent p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_22px_70px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1.5 hover:border-[#ec4899]/34 sm:rounded-[1.6rem] sm:p-5 md:rounded-[1.85rem] md:p-6 lg:rounded-[2rem]">
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
        <div className="signal-card-black-overlay absolute inset-0 z-0" />
        <div className="signal-card-gradient-overlay absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.1),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(240,212,154,0.12),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.08),rgba(0,0,0,0.02)_55%,rgba(0,0,0,0.14))]" />

        <div className="relative z-10 mb-8">
          <span className="signal-card-quote-mark inline-flex font-serif text-4xl font-black leading-none text-white/78 transition duration-500 group-hover/signal:scale-105 group-hover/signal:rotate-[-5deg] group-hover/signal:text-white/88">
            “
          </span>
        </div>
        <p className="signal-card-copy relative z-10 text-2xl font-semibold leading-[1.08] tracking-[-0.045em] text-balance transition duration-500 group-hover/signal:text-white">
          Entscheidend ist nicht nur die Rechnung, sondern ob Kosten klar zu
          konkreter Entwicklung gehören.
        </p>
        <p className="relative z-10 mt-4 max-w-lg text-sm leading-6 text-white/54 transition duration-500 group-hover/signal:text-white/62">
          CONSIRA ordnet Stunden, Material und externe Leistungen so, dass der
          fachliche Zusammenhang nachvollziehbar bleibt.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#080709] text-white">
      <div className="site-iridescence-bg fixed z-0">
        <Iridescence
          color={[0.46, 0.34, 0.78]}
          mouseReact={false}
          amplitude={0.095}
          speed={0.58}
        />
      </div>
      <IntroLoader />

      <HeroParallaxSection className="relative isolate z-10 flex h-screen flex-col overflow-hidden px-5 py-5 sm:px-8 lg:px-10">
        <IridescenceVeil />
        <GradualBlur className="z-0" />
        <div className="absolute inset-x-0 top-0 z-0 h-56 bg-gradient-to-b from-[#080709]/48 to-transparent" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between text-xs">
          <a href="#" aria-label="Consira Home" className="font-semibold uppercase tracking-[0.28em] text-white/85">
            Consira
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 font-medium text-white/45 md:flex">
            <a href="#forschungspraemie" className="transition hover:text-white">
              Prämie
            </a>
            <a href="#fuer-wen" className="transition hover:text-white">
              Ablauf
            </a>
            <a href="#kontakt" className="transition hover:text-white">
              Kontakt
            </a>
          </nav>

          <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-white/45 transition hover:border-white hover:bg-white hover:text-[#080709] sm:gap-1.5 sm:px-4 sm:py-2 sm:text-xs">
            <Phone className="h-3.5 w-3.5 sm:h-3 sm:w-3" strokeWidth={2.25} />
            Gratis Erstgespräch
          </a>
        </header>

        <HeroParallaxContent className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center pb-16 pt-6 text-center will-change-transform lg:pb-10">
          <div className="flex max-w-5xl flex-col items-center">
            <div className="flex flex-col items-center">
              <SectionBadge
                icon="sparkles"
                tone="neutral"
                leadingPill="F&E"
                iconPosition="end"
                href="#"
                className="mx-auto mb-7 shadow-none backdrop-blur-2xl"
              >
                Prämienpotenzial Erkennen
              </SectionBadge>

              <TypewriterHeading
                as="h1"
                text="Entwicklung fördern lassen."
                className="max-w-5xl text-6xl font-semibold tracking-[-0.075em] text-balance sm:text-8xl lg:text-[8.75rem] lg:leading-[0.88]"
                charDelay={0.045}
                shiny={false}
              />
            </div>

            <ScrollReveal delay={0.42} distance={18}>
              <p className="mt-8 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">
                Viele Unternehmen finanzieren Innovationen vollständig selbst. CONSIRA identifiziert ungenutztes Prämienpotenzial und klärt in 15–20 Minuten, ob sich eine Einreichung für Sie lohnt.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.56} distance={14}>
              <SpecularButton href="#kontakt" className="mt-9">
                Prämienpotenzial prüfen
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </SpecularButton>
            </ScrollReveal>
          </div>
        </HeroParallaxContent>

        <HeroScrollCue />
      </HeroParallaxSection>

      <ResearchPremiumTransition />

      <section
        id="kosten"
        className="relative z-20 min-h-screen bg-black"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-black px-6 pb-24 pt-10 text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:px-10 lg:px-14 lg:py-12">
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative lg:flex lg:min-h-[calc(100vh-6rem)] lg:flex-col lg:justify-center">
              <SideHeadingMotion
                desktopYStart={-184}
                desktopYEnd={-76}
                className="max-w-2xl pt-8 sm:pt-0"
              >
                <div>
                  <SectionBadge href="#kosten" icon="receipt" tone="dark">
                    Was Kann Angesetzt Werden?
                  </SectionBadge>
                  <TypewriterHeading
                    text="Entwicklungskosten sichtbar machen."
                    className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                  />
                </div>
                <ScrollReveal delay={0.36} distance={18}>
                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
                    Prämienfähig sind nicht nur offensichtliche Projektkosten. Oft
                    liegt der Wert in Stunden, Tests, Material, externem Know-how
                    und anteiligen Infrastrukturkosten, die sauber einem
                    Entwicklungsvorhaben zugeordnet werden müssen.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.5} mobileDelay={2.65} distance={0} xDistance={-56} className="lg:hidden">
                  <CostPrincipleCard className="mt-9" />
                </ScrollReveal>
              </SideHeadingMotion>

              <ScrollReveal
                delay={0.74}
                duration={1.12}
                distance={0}
                xDistance={-96}
                className="absolute bottom-0 left-0 z-20 hidden w-full max-w-2xl lg:block"
              >
                <CostPrincipleCard />
              </ScrollReveal>
            </div>

            <div className="grid gap-4">
              <CostIconCards cardClassName={darkOverlayCardClass} />

              <ScrollReveal delay={0.44} mobileDelay={2.7} className="mt-6 sm:mt-0">
                <div className="card-bounce-shell h-full">
                  <SpotlightCard
                    borderGlow
                    spotlightColor="109, 124, 255"
                    spotlightOpacity={0.18}
                    spotlightSize="52%"
                    className="cost-translation-card min-h-[16.5rem] rounded-[1.35rem] border border-[#6d7cff]/22 bg-white p-4 text-[#080709] shadow-[0_24px_80px_rgba(109,124,255,0.12)] hover:border-[#6d7cff]/36 sm:min-h-[17.5rem] sm:rounded-[1.6rem] sm:p-5 md:rounded-[1.85rem] md:p-6 lg:min-h-[17.25rem] lg:rounded-[2rem]"
                  >
                    <div className="relative z-10 flex h-full flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <Layers3 className="mb-10 h-5 w-5 text-black/45" />
                        <h3 className="text-xl font-semibold tracking-[-0.04em]">
                          Kosten sauber übersetzen
                        </h3>
                      </div>
                      <p className="max-w-xl text-sm leading-6 text-black/55">
                        Einzelne Positionen, Gemeinkosten, IT, Verwaltung und
                        weitere Aufwände werden in eine belastbare Logik gebracht,
                        damit aus Belegen eine nachvollziehbare Argumentation
                        entsteht.
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <RoleSection />

      <section
        id="erfolge"
        className="relative z-20 min-h-screen bg-black"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-black px-6 pb-24 pt-10 text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:px-10 lg:px-14 lg:py-12">
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SideHeadingMotion className="max-w-2xl pt-8 sm:pt-0">
              <div>
                <SectionBadge href="#erfolge" icon="check" tone="dark">
                  Success Stories
                </SectionBadge>
                <TypewriterHeading
                  text="Prämienpotenzial zeigt sich in sehr unterschiedlichen Projekten."
                  className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                  charDelay={0.026}
                />
              </div>
              <ScrollReveal delay={0.34} distance={18}>
                <p className="mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
                  Über 14 Jahre Erfahrung, mehr als 60 Unternehmen und
                  Prämienvolumen im hohen siebenstelligen Bereich. Entscheidend
                  ist nicht die Branche, sondern die erkennbare Entwicklung.
                </p>
              </ScrollReveal>
            </SideHeadingMotion>

            <div className="grid gap-6 lg:gap-7">
              <SuccessStoriesCards cardClassName={darkOverlayCardClass} />
              <ScrollReveal
                delay={0.34}
                mobileDelay={2.75}
                distance={12}
                className="mt-8 flex flex-col items-center justify-center gap-2 rounded-full bg-white/[0.035] px-4 py-3 text-center text-xs font-medium tracking-[-0.01em] text-white/38 sm:mt-6 sm:flex-row sm:gap-3 sm:text-left lg:mt-3"
              >
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8ea7ff]/62" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8ea7ff]/38" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8ea7ff]/22" />
                </span>
                <span className="sm:hidden">Viele weitere Fälle folgen</span>
                <span className="hidden sm:inline">
                  Viele weitere Fälle mit vergleichbarer Prämienwirkung
                </span>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section
        id="selfcheck"
        className="relative z-20 min-h-screen bg-[#f7f5ef]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#f7f5ef] px-6 pb-24 pt-10 text-[#080709] shadow-2xl shadow-black/35 ring-1 ring-black/5 sm:px-10 lg:px-14 lg:py-12">
          <SectionBackgroundMotion theme="warm" secondaryGlow={false} />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center gap-10">
            <div className="max-w-4xl pt-8 sm:pt-0">
              <div>
                <SectionBadge href="#selfcheck" icon="radar" tone="light">
                  Selbstcheck
                </SectionBadge>
                <TypewriterHeading
                  text="Markieren Sie die Signale. Der Radar zeigt die Richtung."
                  className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                  charDelay={0.028}
                />
              </div>
              <ScrollReveal delay={0.36} distance={18}>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-black/56 sm:text-base">
                  Wählen Sie die Signale, die auf Ihr Projekt zutreffen. Der
                  Prämienradar bewertet die Richtung und gibt eine erste
                  Einschätzung, ob sich ein kurzer Abgleich lohnt.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
