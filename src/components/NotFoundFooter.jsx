import { ArrowRight } from "lucide-react";
import Link from "next/link";

function hrefFor(prefix, hash) {
  return `${prefix}${hash}`;
}

export function NotFoundFooter({ anchorPrefix = "/" }) {
  return (
    <div className="relative z-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[1.65rem] bg-[#f7f5ef] sm:h-[2rem] lg:h-[2.5rem]"
      />
      <footer
        id="kontakt"
        className="relative overflow-hidden rounded-t-[1.65rem] bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.9)_5.5rem,rgba(0,0,0,0.78)_11.5rem,rgba(0,0,0,0.68)_18rem,rgba(0,0,0,0.62)_72%,rgba(0,0,0,0.46)_100%)] px-6 py-14 text-white sm:rounded-t-[2rem] sm:px-10 lg:rounded-t-[2.5rem] lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-52 w-72 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.13),rgba(255,255,255,0.055)_34%,transparent_68%)] lg:block"
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="pb-4 sm:pb-0">
              <div>
                <a
                  href={hrefFor(anchorPrefix, "#kontakt")}
                  className="group/badge relative mb-4 inline-flex w-fit items-center gap-1.5 overflow-hidden rounded-full border border-[#8ea7ff]/26 bg-[#8ea7ff]/[0.075] py-1 pl-1 pr-2.5 text-[0.7rem] font-medium tracking-[-0.01em] text-[#b9c8ff] shadow-lg shadow-black/20 backdrop-blur transition-[border-color,background-color,box-shadow,color] duration-300 hover:border-[#b9c8ff]/58 hover:shadow-[0_16px_46px_rgba(142,167,255,0.2),0_0_0_5px_rgba(109,124,255,0.1),0_0_34px_rgba(168,85,247,0.12)] sm:mb-5 sm:gap-2 sm:py-1.25 sm:pl-1.25 sm:pr-3 sm:text-[0.76rem]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#6d7cff]/28"
                  />
                  <span className="relative">Kontakt</span>
                </a>
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl">
                  Finden Sie heraus, ob in Ihren Projekten Geld liegt.
                </h2>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
                Wir prüfen in einem kurzen Gespräch, welche Entwicklungskosten
                relevant sein könnten und welche nächsten Schritte sich wirklich
                lohnen.
              </p>
            </div>

            <span className="specular-button-wrap">
              <a
                href="mailto:markus.schicho@consira.at"
                className="specular-button specular-button--light"
                data-auto-animate="true"
                data-follow-mouse="false"
              >
                <span className="specular-button__shine" aria-hidden="true" />
                <span className="specular-button__content">
                  <span className="sm:hidden">Erstgespräch anfragen</span>
                  <span className="hidden sm:inline">
                    Kostenloses Erstgespräch anfragen
                  </span>
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </a>
            </span>
          </div>

          <div className="grid gap-10 py-10 md:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
            <div>
              <Link
                href="/"
                aria-label="Consira Home"
                className="inline-block font-semibold uppercase tracking-[0.28em] text-white/75 transition hover:text-white"
              >
                Consira
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/42">
                Innovationen finanzieren. Einfach. Schnell.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-white/28">
                Navigation
              </p>
              <div className="grid gap-2 text-sm text-white/50">
                <a
                  href={hrefFor(anchorPrefix, "#forschungspraemie")}
                  className="transition hover:text-white"
                >
                  Forschungsprämie
                </a>
                <a
                  href={hrefFor(anchorPrefix, "#fuer-wen")}
                  className="transition hover:text-white"
                >
                  Für wen?
                </a>
                <a
                  href={hrefFor(anchorPrefix, "#selfcheck")}
                  className="transition hover:text-white"
                >
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
          </div>

          <div className="flex justify-center pt-6">
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
                  className="footer-social-link group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-[0.78rem] font-semibold tracking-[-0.04em] text-white/54 transition duration-300 hover:-translate-y-1 hover:border-[#8ea7ff]/50 hover:text-white"
                >
                  <span className="relative z-10">{mark}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              aria-label="Consira Home"
              className="font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
            >
              Consira
            </Link>
            <p>© 2026 CONSIRA. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
