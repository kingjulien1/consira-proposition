import {
  Archive,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CircleHelp,
  ClipboardCheck,
  Clock,
  Euro,
  FileQuestion,
  FileText,
  HandCoins,
  Handshake,
  Landmark,
  Lightbulb,
  ListChecks,
  Lock,
  Mail,
  MessageCircleQuestion,
  Route,
  Scale,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { DarkHighlightCard } from "@/components/DarkHighlightCard";
import { LegalPageHero } from "@/components/LegalPageHero";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalSectionCards } from "@/components/LegalSectionCards";
import { LegalSupportSection } from "@/components/LegalSupportSection";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "FAQ | CONSIRA",
  description:
    "Häufige Fragen zur Forschungsprämie, Zusammenarbeit mit Consira, Unterlagen, Kosten, Datenschutz und ersten Einschätzung.",
};

const faqQuickTopics = [
  {
    icon: SearchCheck,
    label: "Erste Einordnung",
    title: "Ist mein Projekt relevant?",
    text: "Eine erste Einschätzung beginnt meist mit Projektziel, technischer Unsicherheit, Zeitraum und grober Kostenstruktur.",
  },
  {
    icon: ClipboardCheck,
    label: "Unterlagen",
    title: "Was wird benötigt?",
    text: "Hilfreich sind Projektbeschreibungen, Kostenlisten, Zeiträume, Rollen, technische Entscheidungen und vorhandene Dokumentation.",
  },
  {
    icon: Euro,
    label: "Prämienlogik",
    title: "Wie entsteht Potenzial?",
    text: "Potenzial entsteht dort, wo Entwicklung sauber sichtbar und Kosten nachvollziehbar einem begünstigten Vorhaben zuordenbar sind.",
  },
  {
    icon: MessageCircleQuestion,
    label: "Kontakt",
    title: "Wie starte ich?",
    text: "Ein kurzes Erstgespräch reicht oft, um zu klären, ob eine strukturierte Prüfung sinnvoll ist.",
  },
];

const faqSections = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Was ist die Forschungsprämie grundsätzlich?",
    summary:
      "Die Forschungsprämie ist ein steuerliches Instrument, das begünstigte Forschungs- und Entwicklungstätigkeiten finanziell unterstützen kann.",
    points: [
      "Relevant sind nicht nur klassische Forschungslabore, sondern auch technische Entwicklung, Prozessinnovation, Softwareentwicklung, Prototyping, Versuche und systematische Problemlösung.",
      "Entscheidend ist, ob ein Vorhaben über reine Routinearbeit hinausgeht und eine nachvollziehbare technische oder wissenschaftliche Unsicherheit bearbeitet.",
      "Die Prämie knüpft an qualifizierende Aufwendungen an. Deshalb müssen Inhalt, Zeitraum, beteiligte Personen und Kosten sauber zusammengeführt werden.",
      "Eine pauschale Antwort ist selten belastbar. Eine gute Einordnung braucht immer den konkreten Projektkontext.",
    ],
  },
  {
    icon: SearchCheck,
    number: "02",
    title: "Woran erkenne ich, ob ein Projekt geeignet sein könnte?",
    summary:
      "Ein Projekt kann interessant sein, wenn ein neues oder deutlich verbessertes Ergebnis angestrebt wurde und der Weg dorthin nicht von Anfang an klar war.",
    points: [
      "Typische Hinweise sind technische Unsicherheiten, mehrere Lösungsversuche, Prototypen, Tests, Iterationen, verworfene Ansätze oder nachvollziehbare Entwicklungsrisiken.",
      "Auch interne Entwicklungen können relevant sein, wenn sie systematisch, dokumentierbar und nicht bloß routinemäßige Anpassung sind.",
      "Nicht jeder Aufwand in einem innovativen Unternehmen ist automatisch begünstigt. Wichtig ist die konkrete Tätigkeit im Projekt.",
      "Wenn Teams im Rückblick erklären können, warum eine Lösung nicht trivial war, lohnt sich meist eine genauere Prüfung.",
    ],
  },
  {
    icon: Building2,
    number: "03",
    title: "Für welche Unternehmen ist eine Prüfung sinnvoll?",
    summary:
      "Eine Prüfung kann für Unternehmen sinnvoll sein, die regelmäßig technische, digitale oder produktbezogene Entwicklung betreiben.",
    points: [
      "Relevant können Produktionsbetriebe, Softwareunternehmen, Engineering-Teams, Industrieunternehmen, Technologieanbieter, spezialisierte Dienstleister oder wachstumsorientierte KMU sein.",
      "Die Unternehmensgröße ist nicht allein entscheidend. Auch kleinere Teams können relevante Entwicklungsarbeit leisten, wenn die Tätigkeiten gut abgrenzbar sind.",
      "Besonders sinnvoll ist eine Prüfung, wenn bereits Projektunterlagen, Kostenstellen, Zeiterfassungen oder interne technische Dokumentationen vorhanden sind.",
      "Auch wenn Dokumentation noch nicht perfekt ist, kann eine strukturierte Aufbereitung helfen, vorhandene Substanz sichtbar zu machen.",
    ],
  },
  {
    icon: Archive,
    number: "04",
    title: "Welche Unterlagen helfen bei der ersten Einschätzung?",
    summary:
      "Für eine erste Einschätzung reichen oft wenige gut gewählte Eckpunkte, bevor später detaillierte Unterlagen benötigt werden.",
    points: [
      "Hilfreich sind Projektname, Zeitraum, Zielsetzung, beteiligte Abteilungen, kurze technische Beschreibung, wichtigste Herausforderungen und grobe Kostenblöcke.",
      "Weitere relevante Unterlagen können Lastenhefte, Pflichtenhefte, Entwicklungsberichte, Tickets, Testprotokolle, Konstruktionsstände, Commit-Historien oder interne Präsentationen sein.",
      "Kostenunterlagen sollten zeigen, welche Personen, Fremdleistungen, Materialien oder sonstigen Aufwendungen mit dem Projekt zusammenhängen.",
      "Wichtig ist nicht Masse, sondern Nachvollziehbarkeit: Die Unterlagen sollen erklären, was entwickelt wurde und warum es anspruchsvoll war.",
    ],
  },
  {
    icon: HandCoins,
    number: "05",
    title: "Welche Kosten können grundsätzlich relevant sein?",
    summary:
      "Kosten müssen inhaltlich zum begünstigten Entwicklungsprojekt gehören und nachvollziehbar zugeordnet werden können.",
    points: [
      "Häufig relevant sind Personalaufwand, projektbezogene Fremdleistungen, Materialeinsatz, Versuchskosten, Prototypen, bestimmte Gemeinkostenanteile oder spezifische technische Aufwendungen.",
      "Die genaue Einordnung hängt vom Projekt, der Buchhaltung, vorhandenen Nachweisen und den jeweils geltenden Anforderungen ab.",
      "Nicht jede Ausgabe rund um ein Produkt oder eine Software ist automatisch relevant. Marketing, Routinebetrieb oder reine Verwaltung sind abzugrenzen.",
      "Consira unterstützt dabei, Kosten nicht nur rechnerisch, sondern fachlich passend zur Entwicklungslogik zu strukturieren.",
    ],
  },
  {
    icon: FileText,
    number: "06",
    title: "Wie wichtig ist die Projektbeschreibung?",
    summary:
      "Die Projektbeschreibung ist zentral, weil sie technische Substanz, Unsicherheit, Vorgehen und Ergebnis nachvollziehbar verbindet.",
    points: [
      "Eine gute Beschreibung macht sichtbar, welches Ziel verfolgt wurde, welche Unsicherheit bestand und welche Lösungswege geprüft wurden.",
      "Sie sollte verständlich genug sein, damit fachfremde Leser:innen die Entwicklungslogik nachvollziehen können, ohne technische Substanz zu verlieren.",
      "Entscheidend ist die Verbindung aus Inhalt, Zeitachse, beteiligten Ressourcen und dokumentierten Ergebnissen.",
      "Die Beschreibung sollte nicht werblich klingen, sondern sachlich erklären, warum das Projekt entwicklungsrelevant war.",
    ],
  },
  {
    icon: UserRoundCheck,
    number: "07",
    title: "Wer sollte intern eingebunden werden?",
    summary:
      "Gute Einreichungen entstehen meist an der Schnittstelle zwischen Technik, Finanzen und Geschäftsführung.",
    points: [
      "Technische Ansprechpartner:innen erklären Ziel, Unsicherheit, Lösungsweg, Tests und Ergebnisse.",
      "Finance, Controlling oder Buchhaltung liefern Kostenlogik, Konten, Zeiträume, Abgrenzungen und Nachweise.",
      "Geschäftsführung oder Projektleitung helfen bei Priorisierung, Freigaben und Gesamtzusammenhang.",
      "Je klarer Zuständigkeiten definiert sind, desto effizienter läuft die Aufbereitung.",
    ],
  },
  {
    icon: CalendarClock,
    number: "08",
    title: "Wann ist der richtige Zeitpunkt für eine Prüfung?",
    summary:
      "Eine Prüfung ist sowohl rückblickend als auch begleitend möglich, aber frühe Strukturierung erleichtert die spätere Nachvollziehbarkeit.",
    points: [
      "Rückwirkend kann oft geprüft werden, welche Projekte und Kosten in einem relevanten Zeitraum bereits vorhanden sind.",
      "Begleitend lassen sich Dokumentation, Rollen, Kostenlogik und technische Nachweise früh sauber aufsetzen.",
      "Je später die Aufbereitung beginnt, desto wichtiger werden Interviews, vorhandene Spuren und plausible Rekonstruktion.",
      "Ideal ist ein kurzer Check, sobald absehbar ist, dass Entwicklungskosten in nennenswerter Höhe entstehen.",
    ],
  },
  {
    icon: ShieldCheck,
    number: "09",
    title: "Wie werden vertrauliche Projektinformationen behandelt?",
    summary:
      "Projektinformationen enthalten oft technische, wirtschaftliche oder strategische Details und werden entsprechend vertraulich behandelt.",
    points: [
      "Informationen werden nur im Zusammenhang mit der angefragten Prüfung, Beratung oder Projektaufbereitung verwendet.",
      "Besonders sensible Unterlagen sollten erst übermittelt werden, wenn Umfang und geeigneter Kommunikationsweg abgestimmt sind.",
      "Vertraulichkeit, Nutzungsrechte und Datenverarbeitung werden zusätzlich über AGB, Datenschutzinformationen und konkrete Vereinbarungen geregelt.",
      "Bei Bedarf kann vor detaillierter Unterlagenprüfung zuerst eine abstrakte Projektskizze besprochen werden.",
    ],
  },
  {
    icon: Handshake,
    number: "10",
    title: "Wie läuft die Zusammenarbeit typischerweise ab?",
    summary:
      "Der Ablauf beginnt kompakt, wird dann strukturiert vertieft und endet mit einer nachvollziehbaren Einordnung oder Aufbereitung.",
    points: [
      "Zunächst werden Projektart, Zeitraum, Entwicklungsinhalt, mögliche Kosten und vorhandene Unterlagen grob eingeordnet.",
      "Danach folgt je nach Bedarf eine detailliertere Sichtung, fachliche Strukturierung, Kostenabgrenzung und Formulierung der relevanten Projektlogik.",
      "Offene Punkte werden gemeinsam geklärt, damit technische Aussagen und kaufmännische Daten zusammenpassen.",
      "Das Ergebnis soll intern verständlich und extern prüfbar bleiben.",
    ],
  },
  {
    icon: Scale,
    number: "11",
    title: "Ersetzt die FAQ eine rechtliche oder steuerliche Beratung?",
    summary:
      "Nein. Die FAQ bietet Orientierung, ersetzt aber keine individuelle Prüfung des konkreten Sachverhalts.",
    points: [
      "Die Antworten sind allgemeine Hinweise und können nicht alle Besonderheiten eines Unternehmens, Projekts oder Zeitraums abbilden.",
      "Verbindliche Einordnungen hängen von Unterlagen, konkreter Beauftragung, geltender Rechtslage und zuständigen Stellen ab.",
      "Für Details sind AGB, Datenschutzinformationen, Impressum und individuelle Vereinbarungen zusätzlich zu berücksichtigen.",
      "Bei Unsicherheit sollte der konkrete Fall direkt abgestimmt werden.",
    ],
  },
  {
    icon: Mail,
    number: "12",
    title: "Wie kann ich eine konkrete Frage stellen?",
    summary:
      "Für konkrete Rückfragen ist eine kurze E-Mail mit Projektkontext meist der schnellste Weg.",
    points: [
      "Senden Sie eine kurze Beschreibung des Vorhabens, den betroffenen Zeitraum, beteiligte Teams und grob die Kostenarten, um die es geht.",
      "Wenn bereits Unterlagen vorhanden sind, reicht zunächst eine Übersicht. Detaillierte Dokumente können nach Abstimmung nachgereicht werden.",
      "Nennen Sie nach Möglichkeit eine fachliche und eine kaufmännische Kontaktperson, damit Rückfragen zielgerichtet geklärt werden können.",
      "Für Datenschutzanfragen, formale Angaben oder AGB-Fragen stehen die jeweiligen rechtlichen Seiten zusätzlich bereit.",
    ],
  },
];

export default function FAQPage() {
  return (
    <LegalPageLayout shellClassName="faq-page-shell">
      <LegalPageHero
        badgeHref="/faq"
        badgeIcon="sparkles"
        badgePill="FAQ"
        badgeText="Fragen Klar Eingeordnet"
        mobileTitle="Antworten ohne Umwege."
        desktopTitle="Antworten ohne Umwege."
        mobileDescription="Kompakte Antworten zu Forschungsprämie, Unterlagen, Ablauf, Kostenlogik und erster Einschätzung."
        desktopDescription="Diese FAQ bündelt die wichtigsten Fragen rund um Forschungsprämie, Projektprüfung, Unterlagen, Kostenlogik, Zusammenarbeit und rechtliche Einordnung. Sie soll schnell Orientierung geben, ohne die konkrete Prüfung im Einzelfall zu ersetzen."
        metaItems={[
          { icon: Clock, label: "Stand November 2025" },
          { icon: CircleHelp, label: "Für erste Orientierung" },
          { href: "#faq-01", icon: FileQuestion, label: "12 Antworten lesen" },
        ]}
        legalLinks={[
          { href: "/agb", icon: Scale, label: "AGB" },
          { href: "/datenschutz", icon: Lock, label: "Datenschutz" },
          { href: "/impressum", icon: Landmark, label: "Impressum" },
        ]}
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-2 lg:mt-18 lg:grid-cols-4">
        {faqQuickTopics.map(({ icon: Icon, label, title, text }, index) => (
          <ScrollReveal
            key={title}
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
                  {title}
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
              href: "#faq-01",
              icon: BookOpenCheck,
              label: "Fragen geordnet lesen",
            }}
            title="Schnelle Orientierung, bevor es ins Detail geht."
            shortNote="Die Antworten sind bewusst kompakt — für belastbare Entscheidungen zählt danach der konkrete Projektkontext."
            body="Viele Fragen zur Forschungsprämie lassen sich erst im Zusammenspiel aus Entwicklungsinhalt, Zeitraum, Kosten, Dokumentation und Verantwortlichkeiten sauber beantworten. Diese FAQ ordnet die typischen Themen vor, damit eine erste Einschätzung schneller und gezielter möglich wird."
            items={[
              {
                icon: SearchCheck,
                label: "Projekt zuerst verstehen",
                mobileLabel: "Projekt zuerst verstehen",
                tabletLabel: "Projekt zuerst sauber verstehen",
              },
              {
                icon: Archive,
                label: "Unterlagen gezielt sammeln",
                mobileLabel: "Unterlagen gezielt sammeln",
                tabletLabel: "Unterlagen gezielt vorbereiten",
              },
              {
                icon: Route,
                label: "nächsten Schritt klären",
                mobileLabel: "nächsten Schritt klären",
                tabletLabel: "nächsten Schritt direkt klären",
              },
            ]}
            footerNote={{
              icon: Sparkles,
              label: "Kurz lesen, dann konkreter entscheiden.",
            }}
          />

          <LegalSectionCards
            sections={faqSections}
            idPrefix="faq"
            label="FAQ"
          />
        </div>
      </div>

      <section className="mx-auto mt-12 grid max-w-6xl gap-4 lg:mt-18 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal delay={0.1} distance={20}>
          <div className="relative isolate h-full overflow-hidden rounded-[1.55rem] border border-black/8 bg-white/50 p-5 shadow-[0_20px_70px_rgba(8,7,9,0.04)] backdrop-blur-xl sm:p-6 lg:p-7">
            <ListChecks
              aria-hidden="true"
              className="absolute -right-8 -top-10 h-36 w-36 rotate-[-14deg] text-[#41528f]/7"
              strokeWidth={1.2}
            />
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#41528f]/70">
              Kurzcheck
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[0.95] tracking-[-0.065em] text-black sm:text-4xl">
              Drei Angaben reichen oft für den ersten Blick.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/48">
              Wer schnell wissen möchte, ob sich ein genauerer Blick lohnt,
              kann mit wenigen Eckdaten starten. Je klarer diese Angaben sind,
              desto schneller lässt sich das Gespräch vorbereiten.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.16} distance={20}>
          <div className="grid h-full gap-2.5 rounded-[1.55rem] border border-black/8 bg-white/36 p-3.5 shadow-[0_20px_70px_rgba(8,7,9,0.035)] backdrop-blur-xl sm:p-4">
            {[
              ["Projekt", "Was wurde entwickelt, verbessert oder technisch gelöst?"],
              ["Zeitraum", "Wann fand die Entwicklung statt und welche Phasen gab es?"],
              ["Kosten", "Welche Personen, Fremdleistungen oder Sachkosten sind zuordenbar?"],
            ].map(([label, text], index) => (
              <div
                key={label}
                className="grid gap-2 rounded-[1.05rem] bg-white/[0.3] px-4 py-3 text-sm leading-6 text-black/56 sm:grid-cols-[auto_1fr]"
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
        title="Frage direkt klären."
        text="Wenn eine Antwort hier noch zu allgemein bleibt, ist der direkte Kontext entscheidend: Projektart, Zeitraum, Unterlagenstand und Kostenstruktur. Schicken Sie die Eckpunkte kurz per E-Mail oder nutzen Sie die rechtlichen Seiten zur formalen Einordnung."
        ctaText="FAQ-Frage senden"
      />
    </LegalPageLayout>
  );
}
