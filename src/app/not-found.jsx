import { ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SpecularButton } from "@/components/SpecularButton";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export default function NotFound() {
  return (
    <main className="not-found-route relative isolate min-h-screen overflow-x-hidden bg-[#f7f5ef] text-[#080709]">
      <div className="not-found-static-bg fixed inset-0 z-0" aria-hidden="true" />

      <section className="not-found-page-shell relative z-10 flex min-h-[100svh] flex-col overflow-hidden px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
        <div
          aria-hidden="true"
          className="not-found-top-blur pointer-events-none absolute inset-x-0 top-0 h-48"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(to_bottom,rgba(247,245,239,0.86)_0%,rgba(247,245,239,0.76)_28%,rgba(247,245,239,0.48)_58%,rgba(247,245,239,0.18)_82%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[#8ea7ff]/18 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-[-10%] h-80 w-80 rounded-full bg-[#a855f7]/10 blur-3xl"
        />

        <header className="absolute inset-x-5 top-5 z-20 mx-auto flex w-auto max-w-7xl items-center justify-between text-xs sm:inset-x-8 lg:inset-x-10">
          <Link
            href="/"
            aria-label="Consira Home"
            className="consira-wordmark-link ml-5 inline-flex h-10 items-center font-semibold uppercase leading-none tracking-[0.28em] text-[#080709]/75 transition hover:text-[#080709] sm:ml-4 sm:h-8"
          >
            Consira
          </Link>

          <Link
            href="/#kontakt"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-black/10 bg-white/40 px-5 py-0 text-sm font-medium leading-none text-black/50 shadow-sm shadow-black/[0.03] backdrop-blur-xl transition hover:border-black/20 hover:bg-white hover:text-[#080709] sm:h-8 sm:gap-1.5 sm:px-4 sm:text-xs"
          >
            <Phone className="h-3.5 w-3.5 sm:h-3 sm:w-3" strokeWidth={2.25} />
            Kontakt
          </Link>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl items-center justify-center py-8 text-center">
          <div className="flex max-w-5xl flex-col items-center">
            <div className="not-found-orbit mb-9 flex h-56 w-56 -translate-y-5 items-center justify-center sm:mb-6 sm:h-44 sm:w-44 sm:translate-y-0 lg:mb-10 lg:h-52 lg:w-52 lg:-translate-y-4">
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
                  strokeWidth="2.15"
                  transform="translate(20 20) scale(5)"
                >
                  <g className="not-found-plug not-found-plug--upper">
                    <path d="m19 5 3-3" />
                    <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
                  </g>
                  <g className="not-found-plug not-found-plug--lower">
                    <path d="m2 22 3-3" />
                    <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
                    <path d="M7.5 13.5 10 11" />
                    <path d="M10.5 16.5 13 14" />
                  </g>
                </g>
              </svg>
            </div>

            <div className="flex justify-center">
              <SectionBadge
                href="/404"
                icon="unplug"
                tone="neutral"
                leadingPill="404"
                iconPosition="end"
                className="not-found-subtle-badge mb-8 border-black/8 bg-white/[0.16] text-black/42 shadow-none"
                delay={0.44}
              >
                Seite Nicht Gefunden
              </SectionBadge>
            </div>

            <TypewriterHeading
              as="h1"
              text="Diese Seite ist nicht hier."
              className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.075em] text-balance sm:text-7xl lg:text-[6.5rem] lg:leading-[0.9]"
              delay={0.3}
              charDelay={0.045}
            />

            <ScrollReveal delay={0.78} distance={18}>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-black/52 sm:text-base sm:leading-7">
                Der Link führt ins Leere. Möglicherweise wurde die Adresse
                geändert oder die Seite ist nicht mehr verfügbar.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.98} distance={14}>
              <div className="mt-5 flex flex-col items-center justify-center">
                <SpecularButton
                  href="/"
                  variant="dark"
                  className="not-found-primary-action"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
                  Zurück zur Startseite
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
