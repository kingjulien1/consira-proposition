import {
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  Layers3,
  Phone,
  ReceiptText,
} from "lucide-react";

import Iridescence from "@/components/Iridescence";
import { CountUpNumber } from "@/components/CountUpNumber";
import { CostIconCards } from "@/components/CostIconCards";
import {
  HeroParallaxContent,
  HeroParallaxSection,
} from "@/components/HeroParallaxSection";
import { HeroScrollCue } from "@/components/HeroScrollCue";
import { IridescenceVeil } from "@/components/IridescenceVeil";
import { IntroLoader } from "@/components/IntroLoader";
import { ResearchPremiumTransition } from "@/components/ResearchPremiumTransition";
import { RoleSection } from "@/components/RoleSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionBackgroundMotion } from "@/components/SectionBackgroundMotion";
import { SelfCheck } from "@/components/SelfCheck";
import { SideHeadingMotion } from "@/components/SideHeadingMotion";
import { SpecularButton } from "@/components/SpecularButton";
import { TypewriterHeading } from "@/components/TypewriterHeading";

const darkOverlayCardClass =
  "rounded-[1.5rem] border border-[#c9a76a]/20 bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.14),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.082),rgba(159,120,65,0.075)_50%,rgba(255,255,255,0.018))] transition lg:border-white/10 lg:bg-white/[0.04] hover:border-[#f0d49a]/28 hover:bg-[radial-gradient(circle_at_18%_0%,rgba(240,212,154,0.2),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(159,120,65,0.18),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.095),rgba(159,120,65,0.105)_50%,rgba(255,255,255,0.022))]";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#080709] text-white">
      <div className="fixed inset-0 z-0">
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
        <div className="absolute inset-x-0 top-0 z-0 h-56 bg-gradient-to-b from-[#080709]/70 to-transparent" />

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
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SideHeadingMotion className="max-w-2xl">
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
              <ScrollReveal delay={0.5} distance={16}>
                <div className="mt-9 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
                      Grundprinzip
                    </span>
                    <ReceiptText className="h-4 w-4 text-white/45" />
                  </div>
                  <p className="text-2xl font-semibold tracking-[-0.045em] text-balance">
                    Entscheidend ist nicht nur die Rechnung, sondern der Bezug
                    zur konkreten F&E-Arbeit.
                  </p>
                </div>
              </ScrollReveal>
            </SideHeadingMotion>

            <div className="grid gap-4">
              <CostIconCards cardClassName={darkOverlayCardClass} />

              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <ScrollReveal delay={0.4} className="rounded-[1.5rem] border border-white/10 bg-white p-5 text-[#080709]">
                  <Layers3 className="mb-10 h-5 w-5 text-black/45" />
                  <h3 className="text-xl font-semibold tracking-[-0.04em]">
                    Gemeinkosten anteilig
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Miete, IT, Verwaltung und weitere Gemeinkosten können
                    relevant sein, wenn sie nachvollziehbar zugeordnet werden.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.48} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
                    CONSIRA-Struktur
                  </p>
                  <p className="mt-8 text-3xl font-semibold tracking-[-0.055em] text-balance sm:text-4xl">
                    Wir übersetzen einzelne Kostenpositionen in eine belastbare
                    F&E-Logik.
                  </p>
                </ScrollReveal>
              </div>
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
            <SideHeadingMotion className="max-w-2xl">
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

            <div className="grid gap-4">
              {[
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
              ].map(({ icon: Icon, value, valueClassName, title, text }, index) => (
                <ScrollReveal
                  key={title}
                  delay={0.18 + index * 0.16}
                  duration={1.02}
                  distance={-56}
                  disableBlur
                >
                  <div className={`border-glow-card success-gold-card group/story relative overflow-hidden p-2.5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 sm:p-3 lg:h-[13.25rem] lg:rounded-[1.65rem] ${darkOverlayCardClass}`}>
                    <div aria-hidden="true" className="border-glow-aura" />
                    <div className="grid h-full items-stretch gap-3 lg:grid-cols-[0.78fr_1.22fr] lg:gap-4">
                      <div className="success-value-card relative flex min-h-[7.35rem] flex-col justify-between overflow-hidden rounded-[1rem] border border-[#f0d49a]/18 bg-[#4d3a20] p-3.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_50px_rgba(159,120,65,0.18)] transition duration-500 group-hover/story:-translate-y-0.5 group-hover/story:border-[#f0d49a]/42 group-hover/story:shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_22px_72px_rgba(159,120,65,0.24),0_0_34px_rgba(240,212,154,0.1)] sm:min-h-[8rem] sm:p-4 lg:h-full lg:min-h-0">
                        <span
                          aria-hidden="true"
                          className="success-value-card__wash pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/story:opacity-100 bg-[#f0d49a]/10"
                        />
                        <span
                          aria-hidden="true"
                          className="success-value-card__sweep pointer-events-none absolute -inset-y-8 left-[-45%] hidden w-1/2 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,244,215,0.46),rgba(34,211,238,0.22),transparent)] blur-sm transition-transform duration-900 ease-out group-hover/story:translate-x-[330%]"
                        />
                        <span
                          aria-hidden="true"
                          className="success-value-card__glow pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full bg-[#22d3ee]/0 blur-2xl transition duration-500 group-hover/story:bg-[#22d3ee]/14"
                        />
                        <div className="relative flex items-start justify-between gap-4">
                          <span aria-hidden="true" />
                          <div className="success-value-card__icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/[0.1] text-[#f0d49a] transition duration-500 group-hover/story:rotate-12 group-hover/story:scale-110 group-hover/story:border-[#f0d49a]/36 group-hover/story:bg-[#f0d49a]/16 lg:h-8 lg:w-8">
                            <Icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={2.1} />
                          </div>
                        </div>
                        <div className="relative mt-4 flex flex-col lg:mt-auto">
                          <p className={`${valueClassName} euro-value-shine w-full whitespace-nowrap text-left font-semibold leading-[0.82] tracking-[-0.08em] tabular-nums text-[#fff4d7]`}>
                            <CountUpNumber value={value} />
                          </p>
                          <div className="mt-2 flex items-end justify-between gap-4">
                            <p className="text-2xl font-semibold leading-none tracking-[-0.075em] text-[#f0d49a]/72 sm:text-3xl">
                              €
                            </p>
                            <p className="pb-0.5 text-right text-[0.62rem] font-semibold uppercase leading-none tracking-[0.18em] text-[#fff4d7]/58 sm:pb-1">
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
              <ScrollReveal
                delay={0.34}
                distance={12}
                className="mt-8 flex flex-col items-center justify-center gap-2 rounded-full bg-white/[0.035] px-4 py-3 text-center text-xs font-medium tracking-[-0.01em] text-white/38 sm:mt-6 sm:flex-row sm:gap-3 sm:text-left lg:mt-3"
              >
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f0d49a]/42" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f0d49a]/24" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f0d49a]/14" />
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
            <div className="max-w-4xl">
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

            <SelfCheck />
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[1.65rem] bg-[#f7f5ef] sm:h-[2rem] lg:h-[2.5rem]"
        />
        <footer
          id="kontakt"
          className="relative overflow-hidden rounded-t-[1.65rem] bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_2.5rem,rgba(0,0,0,0.82)_12rem,rgba(0,0,0,0.8)_72%,rgba(0,0,0,0.62)_100%)] px-6 py-14 text-white sm:rounded-t-[2rem] sm:px-10 lg:rounded-t-[2.5rem] lg:px-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 hidden h-52 w-72 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.13),rgba(255,255,255,0.055)_34%,transparent_68%)] lg:block"
          />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div>
                  <SectionBadge href="#kontakt" icon="message" tone="dark" className="mb-4">
                    Kontakt
                  </SectionBadge>
                  <TypewriterHeading
                    text="Finden Sie heraus, ob in Ihren Projekten Geld liegt."
                    className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl"
                    charDelay={0.03}
                  />
                </div>
                <ScrollReveal delay={0.36} distance={18}>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
                    Wir prüfen in einem kurzen Gespräch, welche Entwicklungskosten
                    relevant sein könnten und welche nächsten Schritte sich
                    wirklich lohnen.
                  </p>
                </ScrollReveal>
              </div>
              <ScrollReveal delay={0.64} distance={0} xDistance={56}>
                <SpecularButton href="mailto:markus.schicho@consira.at">
                  <span className="sm:hidden">Erstgespräch anfragen</span>
                  <span className="hidden sm:inline">
                    Kostenloses Erstgespräch anfragen
                  </span>
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </SpecularButton>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.08} className="grid gap-10 py-10 md:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
              <div>
                <a href="#" aria-label="Consira Home" className="inline-block font-semibold uppercase tracking-[0.28em] text-white/75 transition hover:text-white">
                  Consira
                </a>
                <p className="mt-4 max-w-xs text-sm leading-6 text-white/42">
                  Innovationen finanzieren. Einfach. Schnell.
                </p>
              </div>

              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/28">
                  Navigation
                </p>
                <div className="grid gap-2 text-sm text-white/50">
                  <a href="#forschungspraemie" className="transition hover:text-white">
                    Forschungsprämie
                  </a>
                  <a href="#fuer-wen" className="transition hover:text-white">
                    Für wen?
                  </a>
                  <a href="#selfcheck" className="transition hover:text-white">
                    Selbstcheck
                  </a>
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/28">
                  Kontakt
                </p>
                <div className="grid gap-2 text-sm text-white/50">
                  <a href="tel:+436504255624" className="transition hover:text-white">
                    +43 (0) 650 4255624
                  </a>
                  <a
                    href="mailto:markus.schicho@consira.at"
                    className="transition hover:text-white"
                  >
                    markus.schicho@consira.at
                  </a>
                  <span>9020 Klagenfurt</span>
                </div>
              </div>

              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/28">
                  Rechtliches
                </p>
                <div className="grid gap-2 text-sm text-white/50">
                  <a href="#" className="transition hover:text-white">
                    Impressum
                  </a>
                  <a href="#" className="transition hover:text-white">
                    Datenschutz
                  </a>
                  <a href="#" className="transition hover:text-white">
                    AGB
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={0.1}
              className="flex justify-center pt-6"
            >
              <div className="flex items-center gap-2.5">
                {[
                  { label: "Facebook", mark: "f" },
                  { label: "LinkedIn", mark: "in" },
                  { label: "X", mark: "𝕏" },
                ].map(({ label, mark }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-[0.78rem] font-semibold tracking-[-0.04em] text-white/54 transition duration-300 hover:-translate-y-0.5 hover:border-[#c8b894]/35 hover:bg-[#c8b894] hover:text-black"
                  >
                    {mark}
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <a href="#" aria-label="Consira Home" className="font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white">
                Consira
              </a>
              <p>© 2026 CONSIRA. Alle Rechte vorbehalten.</p>
            </ScrollReveal>
          </div>
        </footer>
      </div>
    </main>
  );
}
