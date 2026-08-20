import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Iridescence from "@/components/Iridescence";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SpecularButton } from "@/components/SpecularButton";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#f7f5ef] text-[#080709]">
      <div className="site-iridescence-bg fixed z-0">
        <Iridescence
          color={[0.46, 0.34, 0.78]}
          mouseReact={false}
          amplitude={0.095}
          speed={0.58}
        />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col overflow-hidden bg-[#f7f5ef]/88 px-5 py-5 backdrop-blur-sm sm:px-8 lg:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#f7f5ef] via-[#f7f5ef]/84 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[#8ea7ff]/18 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-[-10%] h-80 w-80 rounded-full bg-[#a855f7]/10 blur-3xl"
        />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between text-xs">
          <Link
            href="/"
            aria-label="Consira Home"
            className="font-semibold uppercase tracking-[0.28em] text-[#080709]/75 transition hover:text-[#080709]"
          >
            Consira
          </Link>

          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/40 px-5 py-2.5 text-sm font-medium text-black/50 shadow-sm shadow-black/[0.03] backdrop-blur-xl transition hover:border-black/20 hover:bg-white hover:text-[#080709] sm:gap-1.5 sm:px-4 sm:py-2 sm:text-xs"
          >
            Kontakt
            <ArrowRight className="h-3.5 w-3.5 sm:h-3 sm:w-3" strokeWidth={2.25} />
          </Link>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center pb-16 pt-12 text-center lg:pb-10">
          <div className="flex max-w-5xl flex-col items-center">
            <div className="not-found-orbit mb-8 flex h-32 w-32 items-center justify-center sm:mb-10 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
              <svg
                viewBox="0 0 160 160"
                aria-hidden="true"
                className="h-full w-full overflow-visible"
              >
                <circle
                  className="not-found-icon-ring"
                  cx="80"
                  cy="80"
                  r="58"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  className="not-found-icon-path not-found-icon-path--left"
                  d="M61 57 L39 80 L61 103"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="not-found-icon-path not-found-icon-path--right"
                  d="M99 57 L121 80 L99 103"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="not-found-icon-path not-found-icon-path--slash"
                  d="M91 47 L69 113"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <SectionBadge
              href="/"
              icon="sparkles"
              tone="light"
              leadingPill="404"
              iconPosition="end"
              className="mx-auto mb-7"
            >
              Seite Nicht Gefunden
            </SectionBadge>

            <TypewriterHeading
              as="h1"
              text="Diese Seite ist nicht hier."
              className="max-w-5xl text-6xl font-semibold tracking-[-0.075em] text-balance sm:text-8xl lg:text-[8.25rem] lg:leading-[0.88]"
              charDelay={0.045}
            />

            <ScrollReveal delay={0.48} distance={18}>
              <p className="mt-8 max-w-3xl text-sm leading-6 text-black/52 sm:text-base sm:leading-7">
                Der Link führt ins Leere, aber der nächste sinnvolle Schritt ist
                klar: zurück zur Startseite, wo wir zeigen, wie Entwicklung,
                Kosten und Nachweise zu einer belastbaren Prämienargumentation
                zusammenfinden.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.58} distance={14}>
              <p className="mt-4 max-w-2xl text-xs leading-5 text-black/42 sm:text-sm sm:leading-6">
                Falls Sie über einen alten Link gekommen sind, wurde die Seite
                wahrscheinlich neu strukturiert. Die Inhalte zur Forschungsprämie
                und zum Erstgespräch sind weiterhin über die Startseite erreichbar.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.68} distance={14}>
              <div className="mt-9 flex flex-col items-center justify-center">
                <SpecularButton href="/">
                  <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
                  Zur Startseite
                </SpecularButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer anchorPrefix="/" />
    </main>
  );
}
