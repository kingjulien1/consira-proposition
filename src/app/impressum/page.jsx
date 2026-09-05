import {
  BadgeCheck,
  Building2,
  CircleCheck,
  FileText,
  Gavel,
  Landmark,
  ListChecks,
  Lock,
  Mail,
  MapPin,
  Phone,
  Route,
  Scale,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { DarkHighlightCard } from "@/components/DarkHighlightCard";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalPageHero } from "@/components/LegalPageHero";
import { LegalSupportSection } from "@/components/LegalSupportSection";
import { ScrollReveal } from "@/components/ScrollReveal";

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
  {
    icon: Building2,
    eyebrow: "Unternehmen",
    title: "Auftritt der Consira GmbH",
    text: "Die Website stellt Leistungen, Themen und Kontaktwege der Consira GmbH dar. Sie dient dazu, Unternehmen einen ersten Überblick über strukturierte Entwicklungs- und Prämienthemen zu geben und eine sachliche Kontaktaufnahme vorzubereiten.",
  },
  {
    icon: Mail,
    eyebrow: "Kommunikation",
    title: "Kontaktwege und Erreichbarkeit",
    text: "Für Anfragen stehen E-Mail und Telefon zur Verfügung. Eine Antwort erfolgt abhängig von Inhalt, Umfang und Verfügbarkeit. Vertrauliche Projektunterlagen sollten erst nach kurzer Abstimmung übermittelt werden.",
  },
  {
    icon: Lock,
    eyebrow: "Vertraulichkeit",
    title: "Umgang mit Projektinformationen",
    text: "Informationen zu Projekten, Kosten, technischen Abläufen oder Unternehmensprozessen können sensibel sein. Der Umgang damit richtet sich nach konkreter Abstimmung, Datenschutzinformationen und vereinbarten Vertraulichkeitsgrundlagen.",
  },
  {
    icon: ListChecks,
    eyebrow: "Struktur",
    title: "Abgrenzung von Information und Auftrag",
    text: "Allgemeine Inhalte auf dieser Website begründen noch kein Beratungsverhältnis. Ein Auftrag entsteht erst durch konkrete Abstimmung, Angebot, Bestätigung oder eine andere eindeutige Vereinbarung zwischen den Beteiligten.",
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
    <LegalPageLayout shellClassName="impressum-page-shell">
        <div className="impressum-hero-content">
          <LegalPageHero
            badgeHref="/impressum"
            badgeIcon="scale"
            badgePill="Impressum"
            badgeText="Rechtliche Angaben"
            mobileTitle="Klare Angaben. Ohne Umwege."
            desktopTitle="Klare Angaben. Ohne Umwege."
            mobileDescription="Rechtliche Angaben zur Consira GmbH, Kontaktmöglichkeiten, Unternehmensdaten und Hinweise zur Nutzung dieser Website."
            desktopDescription="Hier finden Sie die rechtlichen Angaben zur Consira GmbH, Kontaktmöglichkeiten, Unternehmensdaten und Hinweise zur Nutzung dieser Website. Die Darstellung ist bewusst reduziert, aber vollständig lesbar und strukturiert."
            metaItems={[
              { icon: FileText, label: "§25 Mediengesetz" },
              { icon: Building2, label: "Consira GmbH" },
              { href: "#impressum-eckdaten", icon: Landmark, label: "Eckdaten lesen" },
            ]}
            legalLinks={[
              { href: "/agb", icon: Scale, label: "AGB" },
              { href: "/datenschutz", icon: Lock, label: "Datenschutz" },
              { href: "/faq", icon: Route, label: "FAQ zur Einordnung" },
            ]}
          />

          <DarkHighlightCard
            className="mt-16 lg:mt-24"
            topLink={{
              href: "#impressum-eckdaten",
              icon: Landmark,
              label: "Formale Angaben direkt einordnen",
            }}
            title="Unternehmensangaben sauber gebündelt."
            shortNote="Die wichtigsten Angaben stehen gesammelt bereit — für Kontakt, formale Prüfung und rechtliche Orientierung."
            body="Das Impressum ordnet die Pflichtangaben zur Consira GmbH, nennt die verantwortlichen Kontaktwege und grenzt allgemeine Website-Informationen vom konkreten Beratungsauftrag ab. So bleibt nachvollziehbar, wer hinter dem Angebot steht, wie Rückfragen adressiert werden und wo ergänzende rechtliche Informationen zu finden sind."
            items={[
              {
                icon: Building2,
                label: "Unternehmen eindeutig benannt",
                mobileLabel: "Unternehmen eindeutig benannt",
                tabletLabel: "Unternehmen eindeutig nachvollziehbar",
              },
              {
                icon: Mail,
                label: "Kontaktwege schnell auffindbar",
                mobileLabel: "Kontaktwege schnell finden",
                tabletLabel: "Kontaktwege schnell auffindbar",
              },
              {
                icon: Scale,
                label: "rechtlicher Rahmen klar",
                mobileLabel: "rechtlicher Rahmen klar",
                tabletLabel: "rechtlicher Rahmen klar eingeordnet",
              },
            ]}
            footerNote={{
              icon: CircleCheck,
              label: "Formale Angaben, kompakt lesbar.",
            }}
          />

          <div className="impressum-content-band impressum-content-band--facts mt-10 grid auto-rows-fr gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {companyFacts.map(({ icon: Icon, label, value, detail, href }, index) => {
              const content = (
                <div className="impressum-fact-card group relative isolate flex h-full min-h-[10.5rem] flex-col overflow-hidden rounded-[1.35rem] border border-black/8 bg-white/54 p-4 shadow-[0_18px_60px_rgba(8,7,9,0.04)] backdrop-blur-xl transition duration-500 hover:-translate-y-0.5 hover:bg-white/70 sm:p-5">
                  <Icon
                    aria-hidden="true"
                    className="impressum-fact-oversize-icon absolute -right-6 -top-6 h-24 w-24 rotate-[-14deg] text-[#41528f]/7 transition duration-500 group-hover:rotate-[-4deg] group-hover:text-[#41528f]/11"
                    strokeWidth={1.3}
                  />
                  <span className="impressum-fact-icon mb-8 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.13)] transition duration-500 group-hover:scale-105">
                    <Icon
                      className="h-3.5 w-3.5"
                      strokeWidth={1.9}
                    />
                  </span>
                  <div className="mt-auto">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-black/28">
                      {label}
                    </p>
                    <p className="mt-2.5 text-base font-semibold tracking-[-0.04em] text-black sm:text-lg">
                      {value}
                    </p>
                    <p className="impressum-fact-detail mt-1.5 text-xs leading-5 text-black/45">
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

          <div id="impressum-eckdaten" className="impressum-content-band impressum-content-band--registry mt-14 grid gap-6 sm:mt-20 lg:mt-28 lg:grid-cols-[0.78fr_1.22fr]">
            <ScrollReveal delay={0.2} distance={26}>
              <div className="impressum-registry-card relative isolate h-full overflow-hidden rounded-[1.75rem] bg-black p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.2)] sm:p-7 lg:p-8">
                <Landmark
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-40 w-40 rotate-[-16deg] text-white/8"
                  strokeWidth={1.2}
                />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/34">
                  Unternehmensdaten
                </p>
                <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-4xl">
                  Rechtliche Eckdaten auf einen Blick.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/48">
                  Die wichtigsten Register- und Unternehmensangaben kompakt
                  zusammengefasst. Für schriftliche Anfragen verwenden Sie bitte
                  bevorzugt die angeführte E-Mail-Adresse.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.28} distance={22} disableBlur className="h-full">
              <dl className="impressum-registry-rail relative isolate grid h-full content-center gap-2.5 overflow-hidden rounded-[1.75rem] border border-black/8 bg-white/34 p-3.5 shadow-[0_20px_70px_rgba(8,7,9,0.04)] backdrop-blur-xl sm:grid-cols-2 sm:p-4 lg:p-5">
                {registryFacts.map(([label, value], index) => (
                  <div
                    key={label}
                    className="impressum-registry-row group/row rounded-[1rem] bg-white/[0.24] px-3.5 py-3 transition duration-300 hover:bg-white/[0.4] sm:px-4"
                    style={{ "--registry-row-index": index }}
                  >
                    <dt className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-black/32 transition duration-300 group-hover/row:text-[#41528f]/72">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#41528f]/28 transition duration-300 group-hover/row:bg-[#41528f]/52" aria-hidden="true" />
                      {label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold leading-snug tracking-[-0.025em] text-black/72 transition duration-300 group-hover/row:text-black">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          <div className="impressum-content-band impressum-content-band--legal mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3">
            {legalSections.map(({ icon: Icon, eyebrow, title, text }, index) => (
              <ScrollReveal
                key={title}
                delay={0.18 + index * 0.08}
                distance={24}
                disableBlur
                className={index < 2 ? "lg:col-span-1" : ""}
              >
                <article className="impressum-legal-card group relative isolate h-full min-h-[14.5rem] overflow-hidden rounded-[1.45rem] border border-black/8 bg-white/46 p-5 shadow-[0_18px_70px_rgba(8,7,9,0.038)] backdrop-blur-xl transition duration-500 hover:-translate-y-0.5 hover:bg-white/66 sm:p-6">
                  <Icon
                    aria-hidden="true"
                    className="absolute -right-6 -top-6 h-28 w-28 rotate-[-14deg] text-[#41528f]/8 transition duration-500 group-hover:rotate-[-4deg] group-hover:text-[#41528f]/12"
                    strokeWidth={1.3}
                  />
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#41528f]/70">
                    {eyebrow}
                  </p>
                  <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.055em] text-black sm:text-[1.7rem]">
                    {title}
                  </h2>
                  <p className="mt-4 line-clamp-5 text-sm leading-6 text-black/50">
                    {text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <section className="mx-auto mt-14 grid max-w-6xl gap-4 lg:mt-20 lg:grid-cols-[1fr_1fr]">
            <ScrollReveal delay={0.12} distance={22}>
              <div className="relative isolate h-full overflow-hidden rounded-[1.6rem] border border-black/8 bg-white/46 p-5 shadow-[0_20px_70px_rgba(8,7,9,0.04)] backdrop-blur-xl sm:p-6 lg:p-7">
                <Scale
                  aria-hidden="true"
                  className="absolute -right-8 -top-9 h-36 w-36 rotate-[-14deg] text-[#41528f]/7"
                  strokeWidth={1.2}
                />
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#41528f]/70">
                  Nutzung der Website
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[0.95] tracking-[-0.065em] text-black sm:text-4xl">
                  Information zuerst. Auftrag erst nach Abstimmung.
                </h2>
                <p className="mt-4 text-sm leading-7 text-black/48">
                  Die Inhalte dieser Website dienen der ersten Orientierung.
                  Ein konkretes Beratungsverhältnis entsteht erst, wenn Umfang,
                  Ziel, Unterlagen, Honorierung und Zuständigkeiten tatsächlich
                  abgestimmt wurden. Für Details gelten die AGB und individuelle
                  Vereinbarungen.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18} distance={22}>
              <div className="grid h-full gap-2.5 rounded-[1.6rem] border border-black/8 bg-white/34 p-3.5 shadow-[0_20px_70px_rgba(8,7,9,0.035)] backdrop-blur-xl sm:p-4">
                {[
                  ["Formale Angaben", "Firmenbuch, Sitz, Geschäftsführung und Mitgliedschaft sind direkt auffindbar."],
                  ["Kontakt", "Telefon und E-Mail sind für Erstgespräch, Rückfragen und formale Anliegen angegeben."],
                  ["Einordnung", "Website-Inhalte bleiben allgemeine Information, bis ein konkreter Auftrag vereinbart wird."],
                  ["Verweise", "AGB und Datenschutz ergänzen die Angaben zu Nutzung, Kommunikation und Datenverarbeitung."],
                ].map(([label, text], index) => (
                  <div
                    key={label}
                    className="grid gap-2 rounded-[1.05rem] bg-white/[0.28] px-4 py-3 text-sm leading-6 text-black/56 sm:grid-cols-[auto_1fr]"
                  >
                    <span className="font-semibold tabular-nums text-[#41528f]/72">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>
                      <span className="font-semibold text-black/72">{label}:</span>{" "}
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          <LegalSupportSection
            title="Formale Rückfrage klären."
            text="Wenn eine Angabe im Impressum für Ihre Prüfung, Dokumentation oder Kontaktaufnahme relevant ist, nutzen Sie den direkten Kontakt. Für Vertragsrahmen und Datenschutz stehen die ergänzenden rechtlichen Seiten bereit."
            ctaText="Rückfrage senden"
          />
        </div>
    </LegalPageLayout>
  );
}
