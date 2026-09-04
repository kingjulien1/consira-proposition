"use client";

import {
  ArrowRight,
  CircleHelp,
  FileQuestion,
  Landmark,
  Mail,
  MessageCircleQuestion,
} from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SpecularButton } from "@/components/SpecularButton";

const supportLinks = [
  {
    icon: FileQuestion,
    label: "FAQ öffnen",
    href: "/faq",
  },
  {
    icon: Mail,
    label: "E-Mail senden",
    href: "mailto:markus.schicho@consira.at",
  },
  {
    icon: Landmark,
    label: "Impressum",
    href: "/impressum",
  },
];

export function LegalSupportSection({
  title = "Noch Fragen offen?",
  text = "Wenn Sie eine Passage genauer einordnen möchten, finden Sie hier die passenden nächsten Schritte: kompakte Antworten, direkter Kontakt und die formalen Unternehmensangaben.",
  ctaText = "Erstgespräch anfragen",
  ctaHref = "mailto:markus.schicho@consira.at",
  variant = "default",
}) {
  const isAgb = variant === "agb";

  return (
    <section
      id={isAgb ? "agb-hilfe" : "hilfe"}
      className={`legal-support-section mx-auto mt-24 max-w-6xl lg:mt-40 ${
        isAgb ? "legal-support-section--agb" : ""
      }`}
    >
      <ScrollReveal delay={0.12} distance={22}>
        <div className="legal-support-card relative isolate overflow-hidden rounded-[1.75rem] border border-black/8 bg-white/58 p-5 text-center shadow-[0_24px_90px_rgba(8,7,9,0.045)] sm:p-7 lg:px-10 lg:py-9">
          <span
            aria-hidden="true"
            className="legal-support-card-overlay pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
          />
          <div
            className={`legal-support-inner relative z-10 mx-auto ${
              isAgb ? "max-w-5xl" : "max-w-4xl"
            }`}
          >
            <Link
              href={isAgb ? "/agb#agb-hilfe" : "#hilfe"}
              aria-label="Zum Abschnitt Hilfe und Orientierung springen"
              className="legal-support-kicker relative z-20 inline-flex items-center gap-2 rounded-full border border-[#6d7cff]/20 bg-[#eef2ff]/72 px-1.5 py-1.5 pr-2 text-xs font-semibold text-[#41528f] hover:no-underline"
            >
              <span className="legal-support-kicker__pill rounded-full px-2.5 py-1 leading-none">
                Hilfe
              </span>
              <span className="legal-support-kicker__label">Orientierung</span>
              <span className="legal-support-kicker__icon inline-flex h-6 w-6 items-center justify-center rounded-full">
                <CircleHelp className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </Link>
            <h2
              className={`legal-support-title mx-auto mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-black text-balance sm:text-5xl ${
                isAgb ? "max-w-3xl" : "max-w-2xl"
              }`}
            >
              {title}
            </h2>
            <p
              className={`legal-support-text mx-auto mt-4 text-sm leading-7 text-black/50 sm:text-base sm:leading-8 ${
                isAgb ? "max-w-4xl" : "max-w-2xl"
              }`}
            >
              {text}
            </p>

            <div className="legal-support-links mt-6 flex flex-wrap items-center justify-center gap-2">
              {supportLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="agb-meta-pill agb-meta-pill--link"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                  {label}
                </Link>
              ))}
            </div>

            {isAgb ? (
              <>
                <SpecularButton
                  href={ctaHref}
                  variant="support"
                  className="legal-support-cta-wrap mt-6"
                >
                  <MessageCircleQuestion className="h-4 w-4" strokeWidth={2} />
                  {ctaText}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </SpecularButton>
                <p className="legal-support-note mx-auto text-xs leading-5 text-black/38">
                  Für rechtliche Details bleibt der konkrete Auftrag maßgeblich.
                  Wenn es um Projektumfang, Unterlagen oder eine erste
                  Einschätzung geht, ist ein kurzer direkter Kontakt meist der
                  schnellste Weg.
                </p>
              </>
            ) : (
              <>
                <p className="legal-support-note mx-auto mt-5 max-w-2xl text-xs leading-5 text-black/38">
                  Für rechtliche Details bleibt der konkrete Auftrag maßgeblich.
                  Wenn es um Projektumfang, Unterlagen oder eine erste
                  Einschätzung geht, ist ein kurzer direkter Kontakt meist der
                  schnellste Weg.
                </p>

                <SpecularButton
                  href={ctaHref}
                  variant="support"
                  className="legal-support-cta-wrap mt-6"
                >
                  <MessageCircleQuestion className="h-4 w-4" strokeWidth={2} />
                  {ctaText}
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </SpecularButton>
              </>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
