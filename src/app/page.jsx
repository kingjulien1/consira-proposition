import {
  ArrowRight,
  ArrowUpRight,
  BadgeEuro,
  Building2,
  CalendarClock,
  CheckCircle2,
  Cpu,
  Factory,
  FileCheck2,
  Handshake,
  Languages,
  Layers3,
  Mail,
  MapPin,
  PackageOpen,
  Phone,
  ReceiptText,
  Settings2,
  Sparkles,
  Split,
  UsersRound,
  Wrench,
} from "lucide-react";

import Iridescence from "@/components/Iridescence";
import { CountUpNumber } from "@/components/CountUpNumber";
import { IridescenceVeil } from "@/components/IridescenceVeil";
import { IntroLoader } from "@/components/IntroLoader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBackgroundMotion } from "@/components/SectionBackgroundMotion";
import { SelfCheck } from "@/components/SelfCheck";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#080709] text-white">
      <IntroLoader />

      <section className="relative isolate z-10 flex h-screen flex-col overflow-hidden bg-[#080709] px-5 py-5 sm:px-8 lg:px-10">
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[0.502, 0.6, 0.8]}
            mouseReact={false}
            amplitude={0.1}
            speed={0.65}
          />
        </div>
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

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center pb-10 pt-6 text-center">
          <ScrollReveal className="flex max-w-5xl flex-col items-center">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] p-0.5 pr-3 text-xs text-white/50 shadow-2xl shadow-black/30 backdrop-blur">
              <span className="rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.04em] text-[#080709]">F&E</span>
              <span className="font-medium tracking-[-0.01em]">Entwicklungskosten zurückholen</span>
              <Sparkles className="h-3 w-3" strokeWidth={2} />
            </div>

            <TypewriterHeading
              as="h1"
              text="Entwicklung fördern lassen."
              className="max-w-5xl text-6xl font-semibold tracking-[-0.075em] text-balance sm:text-8xl lg:text-[8.75rem] lg:leading-[0.88]"
              charDelay={0.045}
            />

            <p className="mt-8 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">
              Viele Unternehmen finanzieren Innovationen vollständig selbst. CONSIRA identifiziert ungenutztes Prämienpotenzial und klärt in 15–20 Minuten, ob sich eine Einreichung für Sie lohnt.
            </p>

            <a href="#kontakt" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#080709] shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition hover:scale-[1.02] hover:bg-white/90">
              Prämienpotenzial prüfen
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </ScrollReveal>
        </div>

        <p className="relative z-10 mx-auto pb-1 text-[0.65rem] font-medium uppercase tracking-[0.34em] text-white/28">Scroll</p>
      </section>

      <section
        id="forschungspraemie"
        className="relative z-10 min-h-screen bg-[#030304]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#030304] px-6 py-10 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:px-10 lg:px-14 lg:py-12">
          <SectionBackgroundMotion theme="dark" grid />
          <div className="absolute right-0 top-0 h-[42vh] w-[46vw] bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.075),rgba(255,255,255,0.025)_36%,transparent_68%)]" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal className="max-w-2xl">
              <p className="mb-5 w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                Was ist die Forschungsprämie?
              </p>
              <TypewriterHeading
                text="Eine Gutschrift für echte Entwicklung."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
              />
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
                Österreich fördert Forschung und Entwicklung über eine
                steuerfreie Prämie. Entscheidend ist nicht, ob ein Projekt am
                Ende perfekt funktioniert, sondern ob technisches Neuland,
                Unsicherheit und systematische Entwicklungsarbeit vorliegen.
              </p>
            </ScrollReveal>

            <ScrollReveal
              delay={0.1}
              className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="grid gap-4">
                {[
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
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.028)_48%,rgba(255,255,255,0.012))] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-white/[0.055] blur-2xl transition group-hover:bg-white/[0.08]" />
                    <div className="relative">
                      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#080709]">
                        <Icon className="h-4 w-4" strokeWidth={2.1} />
                      </div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em]">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/48">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(247,247,247,0.96)_48%,rgba(238,238,238,0.92))] p-6 text-[#080709] shadow-2xl shadow-black/20 transition hover:-translate-y-0.5 hover:border-white hover:shadow-black/25">
                <div className="absolute -bottom-16 left-6 h-36 w-36 rounded-full bg-black/[0.035] blur-3xl" />

                <div className="relative flex h-full min-h-80 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080709] text-white">
                      <BadgeEuro className="h-4 w-4" strokeWidth={2.1} />
                    </div>
                    <span className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-medium text-black/52">
                      steuerfrei
                    </span>
                  </div>

                  <div>
                    <p className="text-8xl font-semibold tracking-[-0.1em] text-[#080709]">
                      14<span className="text-black/32">%</span>
                    </p>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">
                      Gutschrift auf F&E-Kosten
                    </h3>
                    <p className="mt-3 max-w-64 text-sm leading-6 text-black/52">
                      Jährlich geltend machbar, wenn Kosten und
                      Entwicklungsarbeit sauber zugeordnet sind.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="fuer-wen"
        className="relative z-20 min-h-screen bg-[#f7f5ef]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#f7f5ef] text-[#080709] shadow-2xl shadow-black/35 ring-1 ring-black/5">
          <SectionBackgroundMotion theme="warm" secondaryGlow={false} />
          <div className="absolute left-1/2 top-0 h-full w-px bg-black/[0.06] max-lg:hidden" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:px-14 lg:py-12">
            <ScrollReveal className="max-w-2xl">
              <p className="mb-5 w-fit rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-black/45">
                Für wen?
              </p>
              <TypewriterHeading
                text="Nicht die Branche. Die Tätigkeit zählt."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
              />
              <p className="mt-6 max-w-xl text-sm leading-7 text-black/58 sm:text-base">
                F&E steckt oft nicht im Labor, sondern dort, wo Teams technische
                Unsicherheiten lösen: in Software, Maschinen, Produktion,
                Prozessen oder neuen Produkten. Entscheidend ist, ob echte
                Entwicklung dokumentierbar ist.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  "Software",
                  "Produktion",
                  "Maschinenbau",
                  "Prozessentwicklung",
                  "Prototypen",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-3">
                {[
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
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm shadow-black/[0.03]"
                  >
                    <div className="mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#080709] text-white">
                      <Icon className="h-4 w-4" strokeWidth={2.1} />
                    </div>
                    <h3 className="text-lg font-semibold tracking-[-0.035em]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-black/50">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden rounded-[2rem] bg-[#080709] p-6 text-white">
                  <div className="mb-16 flex items-center justify-between text-xs text-white/45">
                    <span className="uppercase tracking-[0.18em]">Signal</span>
                    <Settings2 className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <p className="max-w-xl text-3xl font-semibold tracking-[-0.055em] text-balance sm:text-4xl">
                    Wenn Ihr Team etwas entwickelt, das vorher so nicht
                    verfügbar war, lohnt sich der Blick genauer.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-black/10 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                    Gut zu wissen
                  </p>
                  <p className="mt-8 text-4xl font-semibold tracking-[-0.06em]">
                    Größe ist zweitrangig.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-black/52">
                    Ein kleines Team kann genauso relevant sein wie ein
                    Industriebetrieb. CONSIRA bewertet nicht die Außendarstellung
                    Ihrer Innovation, sondern die technische Substanz dahinter.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="kosten"
        className="relative z-20 min-h-screen bg-[#050506]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#050506] px-6 py-10 text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:px-10 lg:px-14 lg:py-12">
          <SectionBackgroundMotion theme="slate" grid />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <ScrollReveal className="max-w-2xl">
              <p className="mb-5 w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                Was kann angesetzt werden?
              </p>
              <TypewriterHeading
                text="Entwicklungskosten sichtbar machen."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
              />
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
                Prämienfähig sind nicht nur offensichtliche Projektkosten. Oft
                liegt der Wert in Stunden, Tests, Material, externem Know-how
                und anteiligen Infrastrukturkosten, die sauber einem
                Entwicklungsvorhaben zugeordnet werden müssen.
              </p>

              <div className="mt-9 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
                    Grundprinzip
                  </span>
                  <ReceiptText className="h-4 w-4 text-white/45" />
                </div>
                <p className="text-2xl font-semibold tracking-[-0.045em] text-balance">
                  Entscheidend ist nicht nur die Rechnung, sondern der Bezug zur
                  konkreten F&E-Arbeit.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="grid gap-4">
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
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="group min-h-52 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#080709]">
                      <Icon className="h-4 w-4" strokeWidth={2.1} />
                    </div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/48">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-white p-5 text-[#080709]">
                  <Layers3 className="mb-10 h-5 w-5 text-black/45" />
                  <h3 className="text-xl font-semibold tracking-[-0.04em]">
                    Gemeinkosten anteilig
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Miete, IT, Verwaltung und weitere Gemeinkosten können
                    relevant sein, wenn sie nachvollziehbar zugeordnet werden.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/35">
                    CONSIRA-Struktur
                  </p>
                  <p className="mt-8 text-3xl font-semibold tracking-[-0.055em] text-balance sm:text-4xl">
                    Wir übersetzen einzelne Kostenpositionen in eine belastbare
                    F&E-Logik.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="rolle"
        className="relative z-20 min-h-screen bg-[#f7f5ef]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#f7f5ef] px-6 py-10 text-[#071018] shadow-2xl shadow-black/35 ring-1 ring-black/5 sm:px-10 lg:px-14 lg:py-12">
          <SectionBackgroundMotion theme="warm" secondaryGlow={false} />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center gap-12">
            <ScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="mx-auto mb-5 w-fit rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-black/45 shadow-sm shadow-black/[0.03]">
                Unsere Rolle
              </p>
              <TypewriterHeading
                text="Wir übersetzen Entwicklung in prüfbare Argumente."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
              />
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-black/56 sm:text-base">
                Ihre Teams denken in Prototypen, Tests und Lösungen. Gutachter
                brauchen klare Kriterien, Nachweise und Struktur. CONSIRA baut
                die Brücke zwischen beiden Welten.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="relative">
              <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-black/10 lg:block" />
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
                ].map(({ icon: Icon, label, title, text }) => (
                  <div
                    key={title}
                    className="relative rounded-[2rem] border border-black/10 bg-white/75 p-5 shadow-xl shadow-black/[0.04] backdrop-blur"
                  >
                    <div className="mb-14 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071018] text-white">
                        <Icon className="h-4 w-4" strokeWidth={2.1} />
                      </div>
                      <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-black/40">
                        {label}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-black/52">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16} className="mx-auto flex flex-col items-center gap-5 text-center">
              <p className="max-w-xl text-sm leading-6 text-black/45">
                Weniger Übersetzungsverlust. Mehr Klarheit. Ein Prozess, der
                Ihre technische Arbeit sauber zur Prämie führt.
              </p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-[#071018] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(7,16,24,0.18)] transition hover:scale-[1.02] hover:bg-black"
              >
                Kostenloses Erstgespräch buchen
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="erfolge"
        className="relative z-20 min-h-screen bg-[#050506]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#050506] px-6 py-10 text-white shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:px-10 lg:px-14 lg:py-12">
          <SectionBackgroundMotion theme="dark" grid />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <ScrollReveal className="max-w-2xl">
              <p className="mb-5 w-fit rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                Success Stories
              </p>
              <TypewriterHeading
                text="Prämienpotenzial zeigt sich in sehr unterschiedlichen Projekten."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                charDelay={0.026}
              />
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
                Über 14 Jahre Erfahrung, mehr als 60 Unternehmen und
                Prämienvolumen im hohen siebenstelligen Bereich. Entscheidend
                ist nicht die Branche, sondern die erkennbare Entwicklung.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="grid gap-4">
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
              ].map(({ icon: Icon, value, title, text }) => (
                <div
                  key={title}
                  className="group grid min-h-[13.75rem] gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.065] lg:grid-cols-[1.05fr_0.95fr]"
                >
                  <div className="relative flex min-h-[11.25rem] flex-col justify-between overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#7664BD] p-5 text-[#15110b] shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                    <div className="relative flex justify-end">
                      <Icon className="h-5 w-5 text-black/52" strokeWidth={2.1} />
                    </div>
                    <div className="relative">
                      <p className="font-semibold leading-[0.86] tracking-[-0.085em] tabular-nums text-[3rem] sm:text-[3.55rem] lg:text-[4.1rem]">
                        <CountUpNumber value={value} />
                      </p>
                      <p className="mt-1 text-5xl font-semibold leading-none tracking-[-0.08em] text-black/45">
                        €
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/42">
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
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="selfcheck"
        className="relative z-20 min-h-screen bg-[#f7f5ef]"
      >
        <div className="relative flex min-h-screen overflow-hidden bg-[#f7f5ef] px-6 py-10 text-[#080709] shadow-2xl shadow-black/35 ring-1 ring-black/5 sm:px-10 lg:px-14 lg:py-12">
          <SectionBackgroundMotion theme="warm" secondaryGlow={false} />
          <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center gap-10">
            <ScrollReveal className="max-w-4xl">
              <p className="mb-5 w-fit rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-black/45 shadow-sm shadow-black/[0.03]">
                Selbstcheck
              </p>
              <TypewriterHeading
                text="Markieren Sie die Signale. Der Radar zeigt die Richtung."
                className="text-5xl font-semibold tracking-[-0.065em] text-balance sm:text-6xl lg:text-7xl"
                charDelay={0.028}
              />
              <p className="mt-6 max-w-2xl text-sm leading-7 text-black/56 sm:text-base">
                Wählen Sie die Signale, die auf Ihr Projekt zutreffen. Der
                Prämienradar bewertet die Richtung und gibt eine erste
                Einschätzung, ob sich ein kurzer Abgleich lohnt.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <SelfCheck />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <footer
        id="kontakt"
        className="relative z-20 overflow-hidden rounded-t-[2rem] bg-[#030304] px-6 py-14 text-white sm:px-10 lg:px-14"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -right-24 -top-24 h-56 w-56 animate-pulse rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          <ScrollReveal className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-white/35">
                Kontakt
              </p>
              <TypewriterHeading
                text="Finden Sie heraus, ob in Ihren Projekten Geld liegt."
                className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl"
                charDelay={0.03}
              />
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
                Wir prüfen in einem kurzen Gespräch, welche Entwicklungskosten
                relevant sein könnten und welche nächsten Schritte sich wirklich
                lohnen.
              </p>
            </div>
            <a
              href="mailto:markus.schicho@consira.at"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#030304] transition hover:scale-[1.02] hover:bg-white/90"
            >
              Erstgespräch anfragen
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </a>
          </ScrollReveal>

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
    </main>
  );
}
