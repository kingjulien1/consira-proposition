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

      <section className="relative z-10 flex min-h-[100svh] flex-col overflow-hidden bg-[#f7f5ef]/88 px-5 py-4 backdrop-blur-sm sm:px-8 sm:py-5 lg:px-10">
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

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center justify-center pb-6 pt-6 text-center sm:pb-8 sm:pt-8 lg:pb-6 lg:pt-6">
          <div className="flex max-w-5xl flex-col items-center">
            <div className="not-found-orbit mb-5 flex h-32 w-32 items-center justify-center sm:mb-6 sm:h-40 sm:w-40 lg:mb-7 lg:h-48 lg:w-48">
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
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                  transform="translate(20 20) scale(5)"
                >
                  <g className="not-found-plug not-found-plug--upper">
                    <path
                      className="not-found-icon-path not-found-icon-path--left"
                      d="m19 5 3-3"
                    />
                    <path
                      className="not-found-icon-path not-found-icon-path--slash"
                      d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
                    />
                  </g>
                  <g className="not-found-plug not-found-plug--lower">
                    <path
                      className="not-found-icon-path not-found-icon-path--left"
                      d="m2 22 3-3"
                    />
                    <path
                      className="not-found-icon-path not-found-icon-path--right"
                      d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
                    />
                    <path
                      className="not-found-icon-path not-found-icon-path--right"
                      d="M7.5 13.5 10 11"
                    />
                    <path
                      className="not-found-icon-path not-found-icon-path--right"
                      d="M10.5 16.5 13 14"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <SectionBadge
              href="/"
              icon="sparkles"
              tone="light"
              leadingPill="404"
              iconPosition="end"
              className="mx-auto mb-5"
            >
              Seite Nicht Gefunden
            </SectionBadge>

            <TypewriterHeading
              as="h1"
              text="Diese Seite ist nicht hier."
              className="max-w-5xl text-5xl font-semibold tracking-[-0.075em] text-balance sm:text-7xl lg:text-[6.5rem] lg:leading-[0.9]"
              charDelay={0.045}
            />

            <ScrollReveal delay={0.48} distance={18}>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-black/52 sm:text-base sm:leading-7">
                Der Link führt ins Leere. Zurück zur Startseite finden Sie die
                relevanten Inhalte zur Forschungsprämie und zum Erstgespräch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.68} distance={14}>
              <div className="mt-7 flex flex-col items-center justify-center">
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
