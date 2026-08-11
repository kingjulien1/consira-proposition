import {
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  FileCheck2,
  Handshake,
  Languages,
  Layers3,
  PackageOpen,
  Phone,
  ReceiptText,
  Settings2,
  Split,
  UsersRound,
} from "lucide-react";

import Iridescence from "@/components/Iridescence";
import { CountUpNumber } from "@/components/CountUpNumber";
import {
  HeroParallaxContent,
  HeroParallaxSection,
} from "@/components/HeroParallaxSection";
import { HeroScrollCue } from "@/components/HeroScrollCue";
import { IridescenceVeil } from "@/components/IridescenceVeil";
import { IntroLoader } from "@/components/IntroLoader";
import { ResearchPremiumTransition } from "@/components/ResearchPremiumTransition";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionBackgroundMotion } from "@/components/SectionBackgroundMotion";
import { SelfCheck } from "@/components/SelfCheck";
import { SideHeadingMotion } from "@/components/SideHeadingMotion";
import { SpecularButton } from "@/components/SpecularButton";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#080709] text-white">
      <div className="fixed inset-0 z-0">
        <Iridescence
          color={[0.502, 0.6, 0.8]}
          mouseReact={false}
          amplitude={0.1}
          speed={0.65}
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

          <nav className="hidden items-center gap-7 font-medium text-white/45 md:flex">
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

          <a href="#kontakt" className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 font-medium text-white/45 transition hover:border-white hover:bg-white hover:text-[#080709]">
            <Phone className="h-3 w-3" strokeWidth={2.25} />
            Gratis Erstgespräch
          </a>
        </header>

        <HeroParallaxContent className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center pb-16 pt-6 text-center will-change-transform lg:pb-10">
          <div className="flex max-w-5xl flex-col items-center">
            <ScrollReveal className="flex flex-col items-center">
              <SectionBadge
                icon="sparkles"
                tone="dark"
                leadingPill="F&E"
                iconPosition="end"
                className="mx-auto mb-7 border-white/15 bg-white/[0.035] shadow-none backdrop-blur-2xl"
              >
                Prämienpotenzial Erkennen
              </SectionBadge>

              <TypewriterHeading
                as="h1"
                text="Entwicklung fördern lassen."
                className="max-w-5xl text-6xl font-semibold tracking-[-0.075em] text-balance sm:text-8xl lg:text-[8.75rem] lg:leading-[0.88]"
                charDelay={0.045}
              />
            </ScrollReveal>

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
              <ScrollReveal>
                <SectionBadge icon="receipt" tone="dark">
                  Was Kann Angesetzt Werden?
                </SectionBadge>
                <TypewriterHeading
                  text="Entwicklungskosten sichtbar machen."
                  className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                />
              </ScrollReveal>
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
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    icon: UsersRound,
                    title: "Personalkosten",
                    text: "Arbeitszeit von Mitarbeitenden, die direkt an Entwicklung, Tests und technischer Problemlösung beteiligt sind.",
                  },
                  {
                    icon: Handshake,
                    title: "Externe Entwicklung",
                    text: "Auftragsforschung und spezialisierte Entwicklungsleistungen im EU/EWR-Raum.",
                  },
                  {
                    icon: PackageOpen,
                    title: "Material & Prototypen",
                    text: "Bauteile, Versuchsmaterial, Testaufbauten und iterative Prototypen während der Entwicklung.",
                  },
                  {
                    icon: Settings2,
                    title: "F&E-Investitionen",
                    text: "Maschinen, Messgeräte, Labor-Equipment oder technische Infrastruktur mit Entwicklungsbezug.",
                  },
                ].map(({ icon: Icon, title, text }, index) => (
                  <ScrollReveal
                    key={title}
                    delay={0.08 + index * 0.08}
                  >
                    <SpotlightCard className="min-h-52 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.07]">
                      <div className="mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#080709]">
                        <Icon className="h-4 w-4" strokeWidth={2.1} />
                      </div>
                      <h3 className="text-xl font-semibold tracking-[-0.04em]">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/48">
                        {text}
                      </p>
                    </SpotlightCard>
                  </ScrollReveal>
                ))}
              </div>

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

      <section
        id="rolle"
        className="relative z-20 min-h-screen bg-[#f7f5ef]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#f7f5ef] px-6 pb-24 pt-10 text-[#071018] shadow-2xl shadow-black/35 ring-1 ring-black/5 sm:px-10 lg:px-14 lg:py-12">
          <SectionBackgroundMotion theme="warm" secondaryGlow={false} />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center gap-12">
            <div className="mx-auto max-w-4xl text-center">
              <ScrollReveal>
                <SectionBadge icon="workflow" tone="light" className="mx-auto">
                  Unsere Rolle
                </SectionBadge>
                <TypewriterHeading
                  text="Wir übersetzen Entwicklung in prüfbare Argumente."
                  className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.36} distance={18}>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-black/56 sm:text-base">
                  Ihre Teams denken in Prototypen, Tests und Lösungen. Gutachter
                  brauchen klare Kriterien, Nachweise und Struktur. CONSIRA baut
                  die Brücke zwischen beiden Welten.
                </p>
              </ScrollReveal>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-black/12 to-transparent lg:block" />
              <div className="grid gap-4 lg:grid-cols-3">
                {[
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
                ].map(({ icon: Icon, label, title, text }, index) => (
                  <ScrollReveal
                    key={title}
                    delay={0.28 + index * 0.16}
                    distance={0}
                    xDistance={-46}
                  >
                    <SpotlightCard className="group min-h-[19rem] rounded-[2rem] border border-black/10 bg-white/80 p-5 shadow-[0_24px_70px_rgba(7,16,24,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-black/16 hover:bg-white">
                      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#071018]/[0.035] blur-2xl transition duration-300 group-hover:bg-[#071018]/[0.06]" />

                      <div className="mb-16 flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071018] text-white shadow-lg shadow-black/10">
                          <Icon className="h-4.5 w-4.5" strokeWidth={2.1} />
                        </div>
                        <div className="relative">
                          <span className="absolute -inset-1.5 rounded-full bg-[#071018]/[0.035] blur-md opacity-0 transition duration-300 group-hover:opacity-100" />
                          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.045] text-sm font-semibold tracking-[-0.05em] text-black/38 transition duration-300 group-hover:bg-black/[0.07] group-hover:text-black/52">
                            {label}
                          </span>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                          Schritt {label}
                        </p>
                        <h3 className="text-2xl font-semibold tracking-[-0.055em] text-balance">
                          {title}
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-black/52">
                          {text}
                        </p>
                      </div>
                    </SpotlightCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={0.16} className="mx-auto flex flex-col items-center gap-5 text-center">
              <p className="max-w-xl text-sm leading-6 text-black/45">
                Weniger Übersetzungsverlust. Mehr Klarheit. Ein Prozess, der
                Ihre technische Arbeit sauber zur Prämie führt.
              </p>
              <SpecularButton href="#kontakt" variant="dark">
                Kostenloses Erstgespräch buchen
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </SpecularButton>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="erfolge"
        className="relative z-20 min-h-screen bg-black"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-black px-6 pb-24 pt-10 text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:px-10 lg:px-14 lg:py-12">
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SideHeadingMotion className="max-w-2xl">
              <ScrollReveal>
                <SectionBadge icon="check" tone="dark">
                  Success Stories
                </SectionBadge>
                <TypewriterHeading
                  text="Prämienpotenzial zeigt sich in sehr unterschiedlichen Projekten."
                  className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                  charDelay={0.026}
                />
              </ScrollReveal>
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
                  title: "Indoor- & Outdoor-Lokalisierung",
                  text: "Ein kleines GIS-Team machte präzise Lokalisierung für Museen und historische Orte prämienfähig.",
                },
                {
                  icon: Cpu,
                  value: 180000,
                  title: "KI im Recruiting",
                  text: "Ein junges Unternehmen strukturierte seine KI-Entwicklung trotz langer Rückfragen erfolgreich.",
                },
                {
                  icon: Factory,
                  value: 1500000,
                  title: "Hightech im Anlagenbau",
                  text: "Mechanik, Robotik und KI wurden über mehrere Jahre als F&E-Projekte sauber identifiziert.",
                },
              ].map(({ icon: Icon, value, title, text }, index) => (
                <ScrollReveal
                  key={title}
                  delay={0.08 + index * 0.08}
                  disableBlur
                >
                  <div className="group grid min-h-[13.75rem] gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.065] lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="relative flex min-h-[11.25rem] flex-col justify-between overflow-hidden rounded-[1.25rem] border border-white/12 bg-[radial-gradient(circle_at_16%_8%,rgba(244,232,255,0.32),transparent_24%),radial-gradient(circle_at_92%_18%,rgba(87,222,255,0.24),transparent_26%),radial-gradient(circle_at_76%_96%,rgba(255,184,107,0.18),transparent_30%),linear-gradient(145deg,#12101f_0%,#31235c_48%,#0a2430_100%)] p-5 text-white shadow-[0_18px_56px_rgba(0,0,0,0.24)]">
                      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.18),transparent_40%,rgba(255,255,255,0.06)_70%,transparent)] opacity-65" />

                      <div className="relative flex justify-end">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-white/12 text-white/72">
                          <Icon className="h-4 w-4" strokeWidth={2.1} />
                        </div>
                      </div>
                      <div className="relative">
                        <p className="font-semibold leading-[0.86] tracking-[-0.085em] tabular-nums text-white text-[3rem] sm:text-[3.55rem] lg:text-[4.1rem]">
                          <CountUpNumber value={value} />
                        </p>
                        <p className="mt-1 text-5xl font-semibold leading-none tracking-[-0.08em] text-white/58">
                          €
                        </p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/48">
                          zurückgeholt
                        </p>
                      </div>
                    </div>
                    <div className="flex min-h-[11.25rem] flex-col justify-center">
                      <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/50">
                        {text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
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
              <ScrollReveal>
                <SectionBadge icon="radar" tone="light">
                  Selbstcheck
                </SectionBadge>
                <TypewriterHeading
                  text="Markieren Sie die Signale. Der Radar zeigt die Richtung."
                  className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                  charDelay={0.028}
                />
              </ScrollReveal>
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

      <div className="relative z-20 bg-[#f7f5ef]">
        <footer
          id="kontakt"
          className="relative overflow-hidden rounded-t-[3rem] bg-black px-6 py-14 text-white sm:px-10 lg:px-14"
        >
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <ScrollReveal>
                  <SectionBadge icon="message" tone="dark" className="mb-4">
                    Kontakt
                  </SectionBadge>
                  <TypewriterHeading
                    text="Finden Sie heraus, ob in Ihren Projekten Geld liegt."
                    className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl"
                    charDelay={0.03}
                  />
                </ScrollReveal>
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
                  Erstgespräch anfragen
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </SpecularButton>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.08} className="grid gap-10 py-10 md:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
              <div>
                <p className="font-semibold uppercase tracking-[0.28em] text-white/75">
                  Consira
                </p>
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

            <ScrollReveal delay={0.12} className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-semibold uppercase tracking-[0.28em] text-white/70">
                Consira
              </p>
              <p>© 2026 CONSIRA. Alle Rechte vorbehalten.</p>
            </ScrollReveal>
          </div>
        </footer>
      </div>
    </main>
  );
}
