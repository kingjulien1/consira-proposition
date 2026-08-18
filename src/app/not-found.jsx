import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import Iridescence from "@/components/Iridescence";
import { Footer } from "@/components/Footer";
import { IridescenceVeil } from "@/components/IridescenceVeil";
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
      <IridescenceVeil />

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
              <p className="mt-8 max-w-2xl text-sm leading-6 text-black/52 sm:text-base">
                Der Link führt ins Leere. Die Prämienlogik liegt trotzdem nur
                einen Klick entfernt.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.62} distance={14}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <SpecularButton href="/">
                  <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
                  Zur Startseite
                </SpecularButton>
                <Link
                  href="/#forschungspraemie"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white/55 px-5 text-sm font-semibold text-black/58 shadow-sm shadow-black/[0.035] backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-black/20 hover:bg-white hover:text-black"
                >
                  <Search className="h-4 w-4" strokeWidth={2.15} />
                  Forschungsprämie ansehen
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer anchorPrefix="/" />
    </main>
  );
}
