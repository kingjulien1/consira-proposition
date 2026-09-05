import {
  Activity,
  Archive,
  Building2,
  CheckCircle2,
  Clock,
  Cookie,
  Database,
  Eye,
  FileText,
  Fingerprint,
  Globe2,
  KeyRound,
  Landmark,
  ListChecks,
  Mail,
  Route,
  Scale,
  Server,
  Settings2,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { DarkHighlightCard } from "@/components/DarkHighlightCard";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalSupportSection } from "@/components/LegalSupportSection";
import { LegalPageHero } from "@/components/LegalPageHero";
import { LegalSectionCards } from "@/components/LegalSectionCards";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "Datenschutz | CONSIRA",
  description:
    "Datenschutzerklärung der Consira GmbH: Informationen zu Verantwortlichen, Datenverarbeitung, Cookies, Kontakt, Rechten und technischen Schutzmaßnahmen.",
};

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

const privacyOverview = [
  {
    icon: ShieldCheck,
    label: "Grundsatz",
    value: "So wenig wie möglich",
    text: "Daten werden zweckgebunden, sparsam und nur soweit verarbeitet, wie Website, Kontakt oder Beratung es erfordern.",
  },
  {
    icon: UserCheck,
    label: "Rechte",
    value: "Auskunft und Kontrolle",
    text: "Betroffene Personen können Auskunft, Berichtigung, Löschung, Einschränkung, Übertragung und Widerspruch geltend machen.",
  },
  {
    icon: CheckCircle2,
    label: "Schutz",
    value: "Technisch abgesichert",
    text: "Zugriffe, Kommunikation und interne Abläufe werden mit angemessenen technischen und organisatorischen Maßnahmen geschützt.",
  },
  {
    icon: Clock,
    label: "Speicherung",
    value: "Nur solange nötig",
    text: "Daten bleiben nur so lange gespeichert, wie Zweck, gesetzliche Pflichten oder berechtigte Interessen dies notwendig machen.",
  },
];

export default function DatenschutzPage() {
  return (
    <LegalPageLayout shellClassName="privacy-page-shell">
          <LegalPageHero
            badgeHref="/datenschutz"
            badgeIcon="shield"
            badgePill="Datenschutz"
            badgeText="Daten Klar Behandelt"
            mobileTitle="Datenschutz ohne Umwege."
            desktopTitle="Datenschutz ohne Umwege."
            mobileDescription="Ein klarer Überblick darüber, welche Daten beim Besuch der Website, bei Kontaktaufnahme und im Rahmen erster Beratungsschritte verarbeitet werden können."
            desktopDescription="Diese Erklärung zeigt, welche Daten beim Besuch der Website, bei Kontaktaufnahme und im Rahmen erster Beratungsschritte verarbeitet werden können. Sie beschreibt Zwecke, Rechtsgrundlagen, Speicherdauer, externe Dienste und Ihre Rechte — bewusst verständlich formuliert und klar gegliedert."
            metaItems={[
              { icon: Clock, label: "Stand November 2025" },
              { icon: ShieldCheck, label: "DSGVO orientiert" },
              { href: "#datenschutz-01", icon: FileText, label: "12 Abschnitte lesen" },
            ]}
            legalLinks={[
              { href: "/agb", icon: Scale, label: "AGB" },
              { href: "/impressum", icon: Landmark, label: "Impressum" },
              { href: "/faq", icon: Route, label: "FAQ zur Einordnung" },
            ]}
          />

          <div className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4">
            {privacyOverview.map(({ icon: Icon, label, value, text }, index) => (
              <ScrollReveal
                key={label}
                delay={0.08 + index * 0.08}
                distance={18}
                disableBlur
                className="h-full"
              >
                <article className="agb-overview-card group relative isolate flex h-full min-h-[10.25rem] flex-col overflow-hidden rounded-[1.35rem] border border-black/7 bg-white/50 p-4 shadow-[0_18px_60px_rgba(8,7,9,0.035)] backdrop-blur-xl transition duration-700 hover:bg-white/68 sm:p-5">
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
                    <p className="mt-1.5 text-xs leading-5 text-black/42 sm:line-clamp-2">
                      {text}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="agb-terms-band relative mx-[calc(50%-50vw)] mt-20 px-5 pb-10 pt-14 sm:px-8 lg:mt-32 lg:px-10 lg:pb-14 lg:pt-20">
            <div className="relative z-10 mx-auto max-w-7xl">
              <DarkHighlightCard
                className="mb-7 lg:mb-14"
                topLink={{
                  href: "#datenschutz-11",
                  icon: Fingerprint,
                  label: "Rechte und Kontrolle gezielt finden",
                }}
                title="Datenschutz verständlich geordnet."
                shortNote="Erst verstehen, welche Daten entstehen — dann gezielt Rechte, Kontaktwege und Löschfristen einordnen."
                body="Datenschutz betrifft nicht nur Formulare. Auch technische Zugriffsdaten, E-Mail-Kommunikation, Projektinformationen, Cookies, Hosting und externe Dienste können relevant sein. Deshalb ist diese Seite nach konkreten Situationen aufgebaut: von Websitebesuch und Kontakt bis zu Speicherfristen, Betroffenenrechten und Sicherheitsmaßnahmen."
                items={[
                  {
                    icon: Server,
                    label: "technische Daten einordnen",
                    mobileLabel: "technische Daten einordnen",
                    tabletLabel: "technische Daten sauber einordnen",
                  },
                  {
                    icon: Mail,
                    label: "Kontaktwege nachvollziehen",
                    mobileLabel: "Kontaktwege nachvollziehen",
                    tabletLabel: "Kontaktwege transparent nachvollziehen",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Rechte gezielt ausüben",
                    mobileLabel: "Rechte gezielt ausüben",
                    tabletLabel: "Rechte gezielt und klar ausüben",
                  },
                ]}
                footerNote={{
                  icon: ListChecks,
                  label: "Von Zweck zu Rechtsgrundlage zu Kontrolle.",
                }}
              />

              <LegalSectionCards
                sections={privacySections}
                idPrefix="datenschutz"
                label="Datenschutz"
              />

              <DarkHighlightCard
                className="mt-7 lg:mt-14"
                label="Überblick"
                labelIcon={Fingerprint}
                title="Kontrolle beginnt mit verständlicher Information."
                shortNote="Die wichtigsten Eckdaten helfen dabei, den richtigen Kontaktweg zu wählen und Verarbeitungssituationen schneller einzuordnen."
                body="Die wichtigsten Datenschutzpunkte stehen bewusst kompakt zusammen. Verantwortliche Stelle ist die Consira GmbH in Klagenfurt am Wörthersee; für Datenschutzfragen ist markus.schicho@consira.at der direkte Kontakt. Der Rahmen orientiert sich an DSGVO, österreichischem Datenschutzgesetz und einschlägigen Kommunikationsvorschriften."
                items={[
                  {
                    icon: Building2,
                    label: "Verantwortliche Stelle klar",
                    mobileLabel: "Verantwortliche Stelle klar",
                    tabletLabel: "Verantwortliche Stelle eindeutig",
                  },
                  {
                    icon: Mail,
                    label: "Kontakt direkt erreichbar",
                    mobileLabel: "Kontakt direkt erreichbar",
                    tabletLabel: "Kontakt direkt nachvollziehbar",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Rechtsrahmen verständlich",
                    mobileLabel: "Rechtsrahmen verständlich",
                    tabletLabel: "Rechtsrahmen verständlich geordnet",
                  },
                ]}
                footerNote={{
                  icon: ListChecks,
                  label: "Website, Kontakt und Beratung sauber getrennt.",
                }}
              />
            </div>
          </div>

          <LegalSupportSection
            title="Datenschutzfragen direkt klären."
            text="Wenn Sie eine Verarbeitung einordnen möchten, Auskunft benötigen oder einen Punkt in der Datenschutzerklärung genauer verstehen wollen, finden Sie hier die schnellsten Wege: FAQ, direkter Kontakt und die formalen Unternehmensangaben."
            ctaText="Datenschutzfrage senden"
            variant="privacy"
            kickerPill="Datenschutz"
            kickerText="Orientierung zu Daten, Rechten und Kontaktwegen"
          />
    </LegalPageLayout>
  );
}
