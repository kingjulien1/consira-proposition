import {
  Activity,
  Archive,
  BadgeCheck,
  Building2,
  CircleCheck,
  Clock,
  Cookie,
  Database,
  Eye,
  FileText,
  Fingerprint,
  Globe2,
  KeyRound,
  Link2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Server,
  Settings2,
  ShieldCheck,
  Trash2,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import Iridescence from "@/components/Iridescence";
import { Footer } from "@/components/Footer";
import { LegalSupportSection } from "@/components/LegalSupportSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export const metadata = {
  title: "Datenschutz | CONSIRA",
  description:
    "Datenschutzerklärung der Consira GmbH: Informationen zu Verantwortlichen, Datenverarbeitung, Cookies, Kontakt, Rechten und technischen Schutzmaßnahmen.",
};

const privacyOverview = [
  {
    icon: ShieldCheck,
    label: "Grundsatz",
    value: "So wenig wie möglich",
    text: "Wir verarbeiten personenbezogene Daten zweckgebunden, sparsam und nur soweit es für Website, Kontakt oder Beratung erforderlich ist.",
  },
  {
    icon: UserCheck,
    label: "Rechte",
    value: "Auskunft und Kontrolle",
    text: "Betroffene Personen können Auskunft, Berichtigung, Löschung, Einschränkung, Übertragung und Widerspruch geltend machen.",
  },
  {
    icon: Lock,
    label: "Schutz",
    value: "Technisch abgesichert",
    text: "Zugriffe, Kommunikation und interne Abläufe werden mit angemessenen organisatorischen und technischen Maßnahmen geschützt.",
  },
  {
    icon: Clock,
    label: "Speicherung",
    value: "Nur solange nötig",
    text: "Daten bleiben nur so lange gespeichert, wie Zweck, gesetzliche Pflichten oder berechtigte Interessen dies erforderlich machen.",
  },
];

const quickFacts = [
  ["Verantwortliche Stelle", "Consira GmbH, Primoschgasse 3, 9020 Klagenfurt am Wörthersee"],
  ["Kontakt Datenschutz", "markus.schicho@consira.at"],
  ["Website", "https://www.consira.at"],
  ["Rechtsrahmen", "DSGVO, österreichisches Datenschutzgesetz und einschlägige Kommunikationsvorschriften"],
];

const privacySections = [
  {
    icon: Building2,
    number: "01",
    title: "Verantwortliche Stelle",
    summary:
      "Für diese Website und die damit verbundenen Datenverarbeitungen ist die Consira GmbH verantwortlich.",
    points: [
      "Verantwortlich ist die Consira GmbH, Primoschgasse 3, 9020 Klagenfurt am Wörthersee, Österreich.",
      "Für datenschutzbezogene Anliegen erreichen Sie uns unter markus.schicho@consira.at oder telefonisch unter +43 (0) 650 4255624.",
      "Diese Datenschutzerklärung beschreibt, welche personenbezogenen Daten beim Besuch der Website, bei Kontaktaufnahme und im Rahmen vorvertraglicher Kommunikation verarbeitet werden können.",
      "Soweit im Rahmen eines konkreten Beratungsauftrags weitere Verarbeitungen entstehen, können ergänzende Informationen, Vereinbarungen oder Auftragsunterlagen maßgeblich sein.",
    ],
  },
  {
    icon: Eye,
    number: "02",
    title: "Websitebesuch und Serverdaten",
    summary:
      "Beim Aufruf der Website entstehen technische Zugriffsdaten, die für Betrieb, Sicherheit und Fehleranalyse erforderlich sein können.",
    points: [
      "Beim Besuch der Website können IP-Adresse, Datum und Uhrzeit des Zugriffs, abgerufene Seiten, übertragene Datenmenge, Browsertyp, Betriebssystem, Referrer-URL und technische Statusmeldungen verarbeitet werden.",
      "Diese Daten dienen der stabilen Bereitstellung der Website, der Abwehr von Angriffen, der Diagnose technischer Probleme und der Sicherstellung einer angemessenen Performance.",
      "Eine Zusammenführung dieser technischen Daten mit anderen Datenquellen erfolgt nicht, sofern kein konkreter Sicherheits- oder Missbrauchsfall vorliegt.",
      "Rechtsgrundlage ist überwiegend das berechtigte Interesse an einem sicheren, funktionsfähigen und nachvollziehbar betriebenen Webangebot.",
    ],
  },
  {
    icon: Mail,
    number: "03",
    title: "Kontaktaufnahme",
    summary:
      "Wenn Sie uns kontaktieren, verarbeiten wir die Informationen, die für Beantwortung und weitere Abstimmung notwendig sind.",
    points: [
      "Bei Kontakt per E-Mail, Telefon oder über verlinkte Kommunikationswege können Name, Unternehmen, Kontaktdaten, Inhalt der Anfrage und technische Metadaten verarbeitet werden.",
      "Die Verarbeitung erfolgt zur Bearbeitung der Anfrage, zur Vorbereitung eines möglichen Beratungsverhältnisses und zur Dokumentation der Kommunikation.",
      "Angaben zu Projekten, Entwicklungsvorhaben oder Kostenstrukturen sollten nur übermittelt werden, wenn sie für die konkrete Anfrage erforderlich sind.",
      "Je nach Inhalt stützt sich die Verarbeitung auf vorvertragliche Maßnahmen, Vertragserfüllung, Einwilligung oder berechtigte Interessen an sachgerechter Kommunikation.",
    ],
  },
  {
    icon: Database,
    number: "04",
    title: "Beratung, Projektprüfung und Prämienpotenzial",
    summary:
      "Im Rahmen einer Anfrage können projektbezogene Informationen verarbeitet werden, um eine erste Einordnung vorzunehmen.",
    points: [
      "Für eine Einschätzung zum Prämienpotenzial können Angaben zu Unternehmen, Ansprechpartner:innen, Projekten, Entwicklungszielen, technischen Unsicherheiten, Kostenarten und Zeiträumen erforderlich sein.",
      "Diese Informationen werden zweckgebunden zur Prüfung, Strukturierung und Vorbereitung weiterer Beratungsschritte verwendet.",
      "Sensible oder vertrauliche Projektunterlagen sollten erst übermittelt werden, wenn der Umfang der Zusammenarbeit und die geeigneten Kommunikationswege abgestimmt wurden.",
      "Eine Weitergabe an Dritte erfolgt nur, wenn sie erforderlich, rechtlich zulässig oder ausdrücklich vereinbart ist.",
    ],
  },
  {
    icon: Cookie,
    number: "05",
    title: "Cookies und lokale Speichertechnologien",
    summary:
      "Cookies können technisch notwendig sein oder eingesetzt werden, um Funktionen nutzerfreundlich bereitzustellen.",
    points: [
      "Technisch notwendige Cookies oder vergleichbare Speichertechnologien können verwendet werden, um Grundfunktionen der Website bereitzustellen.",
      "Nicht zwingend erforderliche Cookies, Analysefunktionen oder Marketingtechnologien werden nur eingesetzt, wenn dafür eine geeignete Rechtsgrundlage besteht.",
      "Sie können Browsereinstellungen nutzen, um Cookies zu löschen, zu blockieren oder individuell zu steuern. Dies kann einzelne Funktionen der Website einschränken.",
      "Falls ein Cookie-Banner oder Consent-Tool eingesetzt wird, werden dort getroffene Einstellungen entsprechend berücksichtigt und können je nach Implementierung gespeichert werden.",
    ],
  },
  {
    icon: Activity,
    number: "06",
    title: "Analyse, Reichweitenmessung und Optimierung",
    summary:
      "Mögliche Analysefunktionen dienen der Verbesserung von Struktur, Performance und Verständlichkeit der Website.",
    points: [
      "Sofern Analysewerkzeuge eingesetzt werden, können technische Nutzungsdaten, Seitenaufrufe, Interaktionen, Geräteinformationen und grobe Herkunftsinformationen verarbeitet werden.",
      "Ziel ist es, die Website verständlicher, schneller und nutzerfreundlicher zu gestalten.",
      "Wenn Analysefunktionen nicht technisch erforderlich sind, erfolgt deren Nutzung grundsätzlich nur auf Basis einer Einwilligung oder einer vergleichbaren rechtlichen Grundlage.",
      "Auswertungen erfolgen, soweit möglich, aggregiert oder pseudonymisiert, damit keine unnötige Personenbeziehbarkeit entsteht.",
    ],
  },
  {
    icon: Globe2,
    number: "07",
    title: "Eingebettete Inhalte und externe Dienste",
    summary:
      "Externe Inhalte können Daten an Drittanbieter übertragen, sobald sie geladen oder aktiv genutzt werden.",
    points: [
      "Diese Website kann Links oder eingebettete Inhalte wie Karten, Videos, Schriftarten, Social-Media-Elemente oder externe Informationsquellen enthalten.",
      "Beim Laden solcher Inhalte können Anbieter technische Daten wie IP-Adresse, Browserinformationen, Zeitpunkt des Zugriffs und Interaktionsdaten erhalten.",
      "Externe Dienste handeln grundsätzlich nach ihren eigenen Datenschutzinformationen. Wir wählen Dienste sorgfältig aus und binden sie nur ein, soweit dies funktional oder gestalterisch erforderlich ist.",
      "Bei bloßen Links findet eine Datenübertragung an die Zielseite regelmäßig erst statt, wenn Sie den Link aktiv aufrufen.",
    ],
  },
  {
    icon: Server,
    number: "08",
    title: "Hosting, Infrastruktur und technische Dienstleister",
    summary:
      "Für den Betrieb der Website können Hosting- und Infrastrukturpartner eingesetzt werden.",
    points: [
      "Website, Domains, E-Mail-Kommunikation oder technische Infrastruktur können über spezialisierte Dienstleister bereitgestellt werden.",
      "Diese Dienstleister verarbeiten Daten nur im erforderlichen Umfang, etwa zur Auslieferung der Website, Speicherung technischer Logs, Absicherung der Systeme oder Bereitstellung von Kommunikationsdiensten.",
      "Soweit Dienstleister als Auftragsverarbeiter tätig werden, werden geeignete vertragliche Vereinbarungen getroffen.",
      "Eine Verarbeitung außerhalb der Europäischen Union beziehungsweise des EWR erfolgt nur, wenn die datenschutzrechtlichen Voraussetzungen erfüllt sind.",
    ],
  },
  {
    icon: KeyRound,
    number: "09",
    title: "Rechtsgrundlagen der Verarbeitung",
    summary:
      "Die Verarbeitung erfolgt je nach Kontext auf Basis von Vertrag, berechtigtem Interesse, gesetzlicher Pflicht oder Einwilligung.",
    points: [
      "Art. 6 Abs. 1 lit. b DSGVO kann einschlägig sein, wenn Daten zur Durchführung vorvertraglicher Maßnahmen oder eines Vertrags erforderlich sind.",
      "Art. 6 Abs. 1 lit. f DSGVO kann Verarbeitung auf Basis berechtigter Interessen tragen, etwa für Websitebetrieb, Sicherheit, Dokumentation oder sachgerechte Kommunikation.",
      "Art. 6 Abs. 1 lit. c DSGVO kann relevant sein, wenn gesetzliche Aufbewahrungs-, Nachweis- oder Auskunftspflichten bestehen.",
      "Art. 6 Abs. 1 lit. a DSGVO kann Grundlage sein, wenn Sie eine Einwilligung erteilen, beispielsweise für nicht notwendige Cookies oder bestimmte externe Dienste.",
    ],
  },
  {
    icon: Archive,
    number: "10",
    title: "Speicherdauer und Löschung",
    summary:
      "Daten werden nicht länger aufbewahrt, als es für Zweck, Nachweis oder gesetzliche Vorgaben notwendig ist.",
    points: [
      "Kontaktanfragen werden so lange gespeichert, wie dies für Bearbeitung, Anschlussfragen oder Dokumentation erforderlich ist.",
      "Vertrags- und Rechnungsdaten können aufgrund gesetzlicher Aufbewahrungspflichten über längere Zeiträume gespeichert werden.",
      "Technische Logdaten werden grundsätzlich nur für begrenzte Zeiträume gespeichert, sofern keine Sicherheitsprüfung oder rechtliche Klärung längere Aufbewahrung erfordert.",
      "Daten werden gelöscht oder anonymisiert, sobald der Zweck entfällt und keine gesetzlichen oder berechtigten Aufbewahrungsgründe entgegenstehen.",
    ],
  },
  {
    icon: Fingerprint,
    number: "11",
    title: "Betroffenenrechte",
    summary:
      "Sie können Ihre Datenschutzrechte jederzeit im gesetzlichen Umfang geltend machen.",
    points: [
      "Sie haben das Recht auf Auskunft über verarbeitete personenbezogene Daten und auf Information über Zwecke, Kategorien, Empfänger:innen und Speicherdauer.",
      "Sie können Berichtigung unrichtiger Daten, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit verlangen, soweit die gesetzlichen Voraussetzungen erfüllt sind.",
      "Sie können einer Verarbeitung widersprechen, wenn diese auf berechtigten Interessen beruht und Gründe aus Ihrer besonderen Situation dagegen sprechen.",
      "Erteilte Einwilligungen können grundsätzlich jederzeit mit Wirkung für die Zukunft widerrufen werden.",
      "Wenn Sie der Ansicht sind, dass eine Verarbeitung gegen Datenschutzrecht verstößt, können Sie sich an die österreichische Datenschutzbehörde wenden.",
    ],
  },
  {
    icon: Settings2,
    number: "12",
    title: "Sicherheit und organisatorische Maßnahmen",
    summary:
      "Datenschutz ist nicht nur eine Erklärung, sondern Teil der technischen und organisatorischen Arbeitsweise.",
    points: [
      "Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Daten gegen unbefugten Zugriff, Verlust, Veränderung und missbräuchliche Verwendung zu schützen.",
      "Dazu zählen unter anderem Zugriffsbeschränkungen, sorgfältige Auswahl von Dienstleistern, sichere Kommunikationswege, Vertraulichkeitspflichten und regelmäßige Überprüfung notwendiger Datenbestände.",
      "Da internetbasierte Kommunikation nie vollständig risikofrei ist, sollten besonders vertrauliche Unterlagen erst nach Abstimmung geeigneter Übermittlungswege versendet werden.",
      "Diese Datenschutzerklärung kann angepasst werden, wenn sich technische, rechtliche oder organisatorische Rahmenbedingungen ändern.",
    ],
  },
];

export default function DatenschutzPage() {
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

      <section className="agb-page-shell privacy-page-shell relative z-10 overflow-hidden bg-[#f7f5ef]/70 px-5 pb-18 pt-5 backdrop-blur-[1px] sm:px-8 lg:px-10 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,black_0%,black_18%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[linear-gradient(to_bottom,rgba(247,245,239,0.34)_0%,rgba(247,245,239,0.24)_28%,rgba(247,245,239,0.11)_58%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-80 h-[34rem] w-[34rem] rounded-full bg-[#8ea7ff]/14 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-[34rem] h-[34rem] w-[34rem] rounded-full bg-[#a855f7]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-32 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#b0893f]/8 blur-3xl"
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

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-16 sm:pt-20 lg:pt-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <SectionBadge
              href="/datenschutz"
              icon="shield"
              tone="neutral"
              leadingPill="Datenschutz"
              iconPosition="end"
              entryDirection="down"
              className="privacy-hero-badge mb-5 shadow-none"
              delay={0.06}
            >
              Daten Klar Behandelt
            </SectionBadge>

            <TypewriterHeading
              as="h1"
              text="Datenschutz ohne Umwege."
              className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-balance sm:text-6xl lg:text-[5.8rem]"
              delay={0.32}
              charDelay={0.025}
            />

            <ScrollReveal delay={0.82} distance={18}>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
                Diese Erklärung zeigt, welche Daten beim Besuch der Website, bei
                Kontaktaufnahme und im Rahmen erster Beratungsschritte verarbeitet
                werden können. Sie beschreibt Zwecke, Rechtsgrundlagen,
                Speicherdauer, externe Dienste und Ihre Rechte — bewusst
                verständlich formuliert und klar gegliedert.
              </p>
            </ScrollReveal>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <ScrollReveal delay={1.02} duration={0.9} xDistance={-22} distance={0} disableBlur>
                <span className="agb-meta-pill">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.9} />
                  Stand November 2025
                </span>
              </ScrollReveal>
              <ScrollReveal delay={1.14} duration={0.9} xDistance={-22} distance={0} disableBlur>
                <span className="agb-meta-pill">
                  <Lock className="h-3.5 w-3.5" strokeWidth={1.9} />
                  DSGVO orientiert
                </span>
              </ScrollReveal>
              <ScrollReveal delay={1.26} duration={0.9} xDistance={-22} distance={0} disableBlur>
                <a href="#datenschutz-01" className="agb-meta-pill agb-meta-pill--link">
                  <FileText className="h-3.5 w-3.5" strokeWidth={1.9} />
                  12 Abschnitte lesen
                </a>
              </ScrollReveal>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl auto-rows-fr gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {privacyOverview.map(({ icon: Icon, label, value, text }, index) => (
              <ScrollReveal
                key={label}
                delay={1.58 + index * 0.22}
                smartStaggerKey="privacy-overview-cards"
                duration={1}
                xDistance={-58}
                distance={0}
                disableBlur
                className="h-full"
              >
                <article className="agb-overview-card group relative isolate flex h-full min-h-[9.75rem] flex-col overflow-hidden rounded-[1.35rem] border border-black/7 bg-white/50 p-4 shadow-[0_18px_60px_rgba(8,7,9,0.035)] backdrop-blur-xl transition duration-700 hover:bg-white/68 sm:p-5">
                  <Icon
                    aria-hidden="true"
                    className="agb-overview-card__ghost absolute -right-5 -top-6 h-24 w-24 rotate-[-15deg] text-[#080709]/7"
                    strokeWidth={1.2}
                  />
                  <span className="agb-overview-card__icon mb-7 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                  </span>
                  <div className="mt-auto">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#41528f]/58">
                      {label}
                    </p>
                    <h2 className="mt-2.5 text-base font-semibold tracking-[-0.04em] sm:text-lg">
                      {value}
                    </h2>
                    <p className="mt-1.5 text-xs leading-5 text-black/42 sm:line-clamp-1">
                      {text}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-6xl lg:mt-24">
            <ScrollReveal delay={0.12} distance={20}>
              <div className="privacy-control-card relative isolate mb-6 overflow-hidden rounded-[1.9rem] bg-[#080709] px-5 py-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8 lg:px-10 lg:py-10">
                <Fingerprint
                  aria-hidden="true"
                  className="absolute -right-8 -top-9 h-40 w-40 rotate-[-14deg] text-white/7"
                  strokeWidth={1.15}
                />
                <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#b9c8ff]/70">
                      Überblick
                    </p>
                    <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-5xl">
                      Kontrolle beginnt mit verständlicher Information.
                    </h2>
                  </div>
                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                      Datenschutz betrifft nicht nur Formulare. Auch technische
                      Zugriffsdaten, E-Mail-Kommunikation, Projektinformationen,
                      Cookies, Hosting und externe Dienste können relevant sein.
                      Deshalb ist diese Seite in konkrete Situationen gegliedert.
                    </p>
                    <dl className="mt-6 grid gap-2 sm:grid-cols-2">
                      {quickFacts.map(([label, value]) => (
                        <div key={label} className="privacy-fact-pill rounded-[1.05rem] px-4 py-3">
                          <dt className="truncate text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#b9c8ff]/62">
                            {label}
                          </dt>
                          <dd className="mt-1.5 line-clamp-2 text-xs leading-5 text-white/58">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="privacy-section-grid grid gap-4 lg:grid-cols-2">
              {privacySections.map(({ icon: Icon, number, title, summary, points }, index) => {
                const sectionHref = `#datenschutz-${number}`;

                return (
                  <article
                    key={number}
                    id={`datenschutz-${number}`}
                    className={`privacy-term-card agb-term-card group relative isolate overflow-hidden rounded-[1.45rem] border border-black/8 bg-white/56 p-5 shadow-[0_18px_70px_rgba(8,7,9,0.035)] backdrop-blur-xl transition duration-500 hover:-translate-y-0.5 hover:bg-white/72 sm:p-6 lg:p-7 ${
                      index === 0 || index === 10 ? "lg:col-span-2" : ""
                    }`}
                  >
                    <Icon
                      aria-hidden="true"
                      className="absolute -right-12 -top-14 h-48 w-48 rotate-[-14deg] text-[#41528f]/5 transition duration-500 group-hover:rotate-[-6deg] group-hover:text-[#41528f]/8"
                      strokeWidth={1.25}
                    />
                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <a
                          href={sectionHref}
                          className="inline-flex rounded-full bg-[#eef2ff]/70 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-[#41528f]/74 transition duration-300 hover:bg-[#eef2ff]/95 hover:text-[#41528f] hover:no-underline"
                        >
                          Datenschutz {number}
                        </a>
                        <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.055em] text-black sm:text-[1.7rem]">
                          <a
                            href={sectionHref}
                            className="transition duration-300 hover:text-[#41528f] hover:no-underline"
                          >
                            {title}
                          </a>
                        </h2>
                        <p className="mt-3 max-w-3xl text-sm leading-6 text-black/48">
                          {summary}
                        </p>
                      </div>
                      <a
                        href={sectionHref}
                        aria-label={`Direkt zu Datenschutz ${number}: ${title}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-105 hover:bg-[#41528f] hover:no-underline"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                      </a>
                    </div>

                    <div className="relative z-10 mt-5 grid gap-2.5">
                      {points.map((point, pointIndex) => (
                        <div
                          key={point}
                          className="privacy-term-point agb-term-point grid gap-3 rounded-[1rem] bg-white/[0.3] px-4 py-3 text-sm leading-6 text-black/58 sm:grid-cols-[auto_1fr] sm:px-4"
                        >
                          <span className="font-semibold tabular-nums text-[#41528f]/72">
                            {number}.{pointIndex + 1}
                          </span>
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={0.16} distance={24}>
            <div className="privacy-closing-card agb-closing-card relative isolate mx-auto mt-6 max-w-6xl overflow-hidden rounded-[1.75rem] bg-black p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-8 lg:mt-10 lg:p-9">
              <Trash2
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-40 w-40 rotate-[-12deg] text-white/7"
                strokeWidth={1.2}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9c8ff]/72">
                Ihre Kontrolle
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-5xl">
                Fragen, Auskunft oder Löschung können Sie direkt anfragen.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/48 sm:text-base sm:leading-8">
                Wenn Sie wissen möchten, welche Daten verarbeitet werden, wenn
                Angaben korrigiert oder gelöscht werden sollen oder wenn Sie
                einer Verarbeitung widersprechen möchten, kontaktieren Sie uns
                bitte unter markus.schicho@consira.at. Wir prüfen Ihr Anliegen
                sorgfältig und melden uns innerhalb der gesetzlichen Fristen.
              </p>
              <a
                href="mailto:markus.schicho@consira.at"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#eef2ff]"
              >
                <Mail className="h-4 w-4" strokeWidth={2} />
                Datenschutzanfrage senden
              </a>
            </div>
          </ScrollReveal>

          <LegalSupportSection
            title="Datenschutzfragen direkt klären."
            text="Wenn Sie eine Verarbeitung einordnen möchten, Auskunft benötigen oder einen Punkt in der Datenschutzerklärung genauer verstehen wollen, finden Sie hier die schnellsten Wege: FAQ, direkter Kontakt und die formalen Unternehmensangaben."
            ctaText="Datenschutzfrage senden"
          />
        </div>
      </section>

      <Footer anchorPrefix="/" />
    </main>
  );
}
