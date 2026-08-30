import {
  BadgeCheck,
  Building2,
  FileText,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import Iridescence from "@/components/Iridescence";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export const metadata = {
  title: "Impressum | CONSIRA",
  description:
    "Rechtliche Angaben, Kontaktinformationen und Verantwortlichkeiten der Consira GmbH.",
};

const companyFacts = [
  {
    icon: Building2,
    label: "Firma",
    value: "Consira GmbH",
    detail: "Investitionen in Entwicklung",
  },
  {
    icon: MapPin,
    label: "Anschrift",
    value: "Primoschgasse 3",
    detail: "9020 Klagenfurt am Wörthersee, Österreich",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+43 (0) 650 4255624",
    detail: "Direkter Kontakt für Erstgespräche",
    href: "tel:+436504255624",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "markus.schicho@consira.at",
    detail: "Kontakt für allgemeine Anfragen",
    href: "mailto:markus.schicho@consira.at",
  },
];

const registryFacts = [
  ["Geschäftsführung", "DI Markus Schicho"],
  ["Umsatzsteuer-ID", "ATU 69862605"],
  ["Firmenbuchnummer", "FN 438438 m"],
  ["Firmenbuchgericht", "Landesgericht Klagenfurt"],
  ["Firmensitz", "Klagenfurt am Wörthersee"],
  ["Mitgliedschaft", "Wirtschaftskammer Österreich"],
];

const legalSections = [
  {
    icon: FileText,
    eyebrow: "Mediengesetz",
    title: "Informationspflicht laut § 25 Mediengesetz",
    text: "Diese Seite stellt die gesetzlich relevanten Angaben zur Consira GmbH bereit. Ziel ist eine klare, nachvollziehbare und leicht zugängliche Darstellung der Unternehmensdaten, Verantwortlichkeiten und Kontaktmöglichkeiten.",
  },
  {
    icon: UserRound,
    eyebrow: "Verantwortung",
    title: "Verantwortlich für den Inhalt",
    text: "Für die redaktionellen Inhalte dieser Website ist die Consira GmbH verantwortlich. Die Inhalte dienen der allgemeinen Information über Forschungsprämie, Innovationsfinanzierung und strukturierte Projektaufbereitung.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Sorgfalt",
    title: "Haftung für Inhalte",
    text: "Die bereitgestellten Informationen werden mit größtmöglicher Sorgfalt erstellt. Dennoch können Aktualität, Vollständigkeit und Richtigkeit nicht dauerhaft garantiert werden. Rechtlich verbindliche Einschätzungen entstehen erst im konkreten Mandats- oder Beratungskontext.",
  },
  {
    icon: Scale,
    eyebrow: "Externe Verweise",
    title: "Haftung für Links",
    text: "Sofern diese Website auf externe Inhalte verweist, liegt deren Verantwortung bei den jeweiligen Betreiberinnen und Betreibern. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar; eine permanente Kontrolle externer Seiten erfolgt nicht.",
  },
  {
    icon: BadgeCheck,
    eyebrow: "Schutz",
    title: "Urheberrecht und Nutzung",
    text: "Texte, Gestaltung, Struktur und sonstige Inhalte dieser Website unterliegen dem Schutz des Urheberrechts. Jede Nutzung außerhalb gesetzlicher Grenzen bedarf einer vorherigen Zustimmung der Rechteinhaberin.",
  },
  {
    icon: Gavel,
    eyebrow: "Einordnung",
    title: "Keine pauschale Rechts- oder Steuerberatung",
    text: "Die Inhalte dieser Website ersetzen keine individuelle Prüfung. Ob und in welcher Form Ansprüche, Pflichten oder Dokumentationsanforderungen bestehen, hängt vom konkreten Sachverhalt, den Projektunterlagen und den jeweils anwendbaren Rahmenbedingungen ab.",
  },
];

function AnimatedScaleMark() {
  return (
    <div className="impressum-scale-mark" aria-hidden="true">
      <svg
        viewBox="0 0 160 160"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        <circle
          className="impressum-scale-mark__ring"
          cx="80"
          cy="80"
          r="58"
          strokeWidth="10"
        />

        <g transform="translate(-19.2 -19.2) scale(1.24)">
          <g
            className="impressum-scale-mark__still"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="7.5"
          >
            <path className="impressum-scale-mark__mast" d="M80 43v73" />
            <path className="impressum-scale-mark__base impressum-scale-mark__base--small" d="M65 116h30" />
            <path className="impressum-scale-mark__base impressum-scale-mark__base--wide" d="M56 130h48" />
            <circle className="impressum-scale-mark__joint" cx="80" cy="52" r="6.6" fill="currentColor" stroke="none" />
          </g>

          <g
            className="impressum-scale-mark__balance"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="7.5"
          >
            <path className="impressum-scale-mark__beam" d="M37 52h86" />

            <g className="impressum-scale-mark__left">
              <path className="impressum-scale-mark__hanger" d="M52 52v29" />
              <path className="impressum-scale-mark__pan" d="M33 91h38c-3 13.5-35 13.5-38 0Z" />
              <path className="impressum-scale-mark__pan-lip" d="M42 82h20" />
            </g>

            <g className="impressum-scale-mark__right">
              <path className="impressum-scale-mark__hanger" d="M108 52v29" />
              <path className="impressum-scale-mark__pan" d="M89 91h38c-3 13.5-35 13.5-38 0Z" />
              <path className="impressum-scale-mark__pan-lip" d="M98 82h20" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function ImpressumPage() {
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

      <section className="impressum-page-shell relative z-10 overflow-hidden bg-[#f7f5ef]/82 px-5 pb-20 pt-5 backdrop-blur-[2px] sm:px-8 lg:px-10 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-72 backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,black_0%,black_28%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[linear-gradient(to_bottom,rgba(247,245,239,0.88)_0%,rgba(247,245,239,0.72)_35%,rgba(247,245,239,0.34)_68%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-28 h-80 w-80 rounded-full bg-[#8ea7ff]/18 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-14%] top-[34rem] h-[28rem] w-[28rem] rounded-full bg-[#a855f7]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-24 right-[-16%] h-[34rem] w-[34rem] rounded-full bg-[#b0893f]/10 blur-3xl"
        />

        <header className="relative z-20 mx-auto flex h-10 w-full max-w-7xl items-center justify-between text-xs">
          <Link
            href="/"
            aria-label="Consira Home"
            className="consira-wordmark-link ml-5 inline-flex h-10 items-center font-semibold uppercase leading-none tracking-[0.28em] text-[#080709]/75 transition hover:text-[#080709] sm:ml-4 sm:h-8"
          >
            Consira
          </Link>

          <Link
            href="/#kontakt"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white/45 px-5 py-0 text-sm font-medium leading-none text-black/50 shadow-sm shadow-black/[0.03] backdrop-blur-xl transition hover:bg-white hover:text-[#080709] sm:h-8 sm:gap-1.5 sm:px-4 sm:text-xs"
          >
            <Phone className="h-3.5 w-3.5 sm:h-3 sm:w-3" strokeWidth={2.25} />
            Kontakt
          </Link>
        </header>

        <div className="impressum-hero-content relative z-10 mx-auto w-full max-w-7xl pt-24 sm:pt-28 lg:pt-32">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="impressum-hero-heading lg:pr-16">
              <SectionBadge
                href="/impressum"
                icon="receipt"
                tone="neutral"
                leadingPill="§ 25"
                iconPosition="end"
                className="not-found-subtle-badge mb-5 shadow-none sm:mb-6"
                delay={0.18}
              >
                Impressum
              </SectionBadge>
              <TypewriterHeading
                as="h1"
                text="Klare Angaben. Ohne Umwege."
                className="impressum-hero-title max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-balance sm:text-6xl lg:text-[6.25rem]"
                charDelay={0.028}
              />
            </div>

            <div className="relative flex flex-col items-center lg:items-center">
              <div className="impressum-scale-anchor pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-[calc(100%+1.25rem)] justify-center sm:-translate-y-[calc(100%+1.5rem)] lg:-translate-y-[calc(100%+1.75rem)]">
                <AnimatedScaleMark />
              </div>

              <ScrollReveal delay={0.26} distance={22}>
                <p className="max-w-2xl text-center text-base leading-8 text-black/54 sm:text-lg lg:text-left">
                  Hier finden Sie die rechtlichen Angaben zur Consira GmbH,
                  Kontaktmöglichkeiten, Unternehmensdaten und Hinweise zur Nutzung
                  dieser Website. Die Darstellung ist bewusst reduziert, aber
                  vollständig lesbar und strukturiert.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="impressum-content-band impressum-content-band--facts mt-14 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {companyFacts.map(({ icon: Icon, label, value, detail, href }, index) => {
              const content = (
                <div className="impressum-fact-card group relative isolate flex h-full min-h-[13rem] flex-col overflow-hidden rounded-[1.75rem] border border-black/8 bg-white/58 p-5 shadow-[0_20px_70px_rgba(8,7,9,0.055)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/72 sm:p-6">
                  <span className="impressum-fact-icon mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-[0_12px_34px_rgba(0,0,0,0.16)] transition duration-500 group-hover:scale-105 sm:h-10 sm:w-10">
                    <Icon
                      className="h-4 w-4 sm:h-[1.1rem] sm:w-[1.1rem]"
                      strokeWidth={1.9}
                    />
                  </span>
                  <div className="mt-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/28">
                      {label}
                    </p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.045em] text-black sm:text-xl">
                      {value}
                    </p>
                    <p className="impressum-fact-detail mt-2 text-sm leading-6 text-black/45">
                      {detail}
                    </p>
                  </div>
                </div>
              );

              return (
                <ScrollReveal
                  key={label}
                  delay={0.22 + index * 0.26}
                  smartStaggerKey="impressum-fact-cards"
                  duration={1.02}
                  distance={0}
                  xDistance={-72}
                  disableBlur
                  className="h-full"
                >
                  {href ? (
                    <a href={href} className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </ScrollReveal>
              );
            })}
          </div>

          <div className="impressum-content-band impressum-content-band--registry mt-16 grid gap-8 sm:mt-20 lg:mt-40 lg:grid-cols-[0.78fr_1.22fr]">
            <ScrollReveal delay={0.2} distance={26}>
              <div className="impressum-registry-card relative isolate h-full overflow-hidden rounded-[2rem] bg-black p-6 text-white shadow-[0_26px_90px_rgba(0,0,0,0.22)] sm:p-8 lg:p-10">
                <Landmark
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-40 w-40 rotate-[-16deg] text-white/8"
                  strokeWidth={1.2}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/34">
                  Unternehmensdaten
                </p>
                <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-5xl">
                  Rechtliche Eckdaten auf einen Blick.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/48">
                  Die wichtigsten Register- und Unternehmensangaben kompakt
                  zusammengefasst. Für schriftliche Anfragen verwenden Sie bitte
                  bevorzugt die angeführte E-Mail-Adresse.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.28} distance={22} disableBlur className="h-full">
              <dl className="impressum-registry-rail relative isolate grid h-full content-center gap-3 overflow-hidden rounded-[2rem] border border-black/8 bg-white/34 p-4 shadow-[0_22px_80px_rgba(8,7,9,0.045)] backdrop-blur-xl sm:grid-cols-2 sm:p-5 lg:p-6">
                {registryFacts.map(([label, value], index) => (
                  <div
                    key={label}
                    className="impressum-registry-row group/row rounded-[1.1rem] bg-white/[0.26] px-4 py-3.5 transition duration-300 hover:bg-white/[0.42] sm:px-4 sm:py-4"
                    style={{ "--registry-row-index": index }}
                  >
                    <dt className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-black/32 transition duration-300 group-hover/row:text-[#41528f]/72">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#41528f]/28 transition duration-300 group-hover/row:bg-[#41528f]/52" aria-hidden="true" />
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold leading-snug tracking-[-0.025em] text-black/72 transition duration-300 group-hover/row:text-black sm:text-base">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          <div className="impressum-content-band impressum-content-band--legal mt-14 grid gap-5 lg:mt-20 lg:grid-cols-3">
            {legalSections.map(({ icon: Icon, eyebrow, title, text }, index) => (
              <ScrollReveal
                key={title}
                delay={0.18 + index * 0.08}
                distance={24}
                disableBlur
                className={index < 2 ? "lg:col-span-1" : ""}
              >
                <article className="impressum-legal-card group relative isolate h-full min-h-[17rem] overflow-hidden rounded-[1.75rem] border border-black/8 bg-white/48 p-6 shadow-[0_20px_80px_rgba(8,7,9,0.045)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/68 sm:p-7">
                  <Icon
                    aria-hidden="true"
                    className="absolute -right-6 -top-6 h-28 w-28 rotate-[-14deg] text-[#41528f]/8 transition duration-500 group-hover:rotate-[-4deg] group-hover:text-[#41528f]/12"
                    strokeWidth={1.3}
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#41528f]/70">
                    {eyebrow}
                  </p>
                  <h2 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.055em] text-black sm:text-3xl">
                    {title}
                  </h2>
                  <p className="mt-5 line-clamp-5 text-sm leading-7 text-black/50">
                    {text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer anchorPrefix="/" />
    </main>
  );
}
