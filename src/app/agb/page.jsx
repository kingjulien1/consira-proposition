import {
  Archive,
  BadgeCheck,
  Ban,
  Building2,
  CircleCheck,
  ClipboardCheck,
  Clock,
  Euro,
  FileText,
  Gavel,
  Handshake,
  Landmark,
  Lock,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
  Signature,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";
import Iridescence from "@/components/Iridescence";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionBadge } from "@/components/SectionBadge";
import { TypewriterHeading } from "@/components/TypewriterHeading";

export const metadata = {
  title: "AGB | CONSIRA",
  description:
    "Allgemeine Geschäftsbedingungen der Consira GmbH für Beratung, Projektstrukturierung und Leistungen im Zusammenhang mit Forschungsprämien.",
};

const overviewCards = [
  {
    icon: Scale,
    label: "Geltung",
    value: "Ein klarer Rahmen",
    text: "Diese Bedingungen regeln die Zusammenarbeit zwischen Auftraggeber:in und Consira GmbH, soweit im Einzelfall nichts Abweichendes vereinbart wird.",
  },
  {
    icon: Handshake,
    label: "Zusammenarbeit",
    value: "Strukturiert und transparent",
    text: "Leistungsumfang, Termine, Zuständigkeiten und Kommunikation werden projektspezifisch abgestimmt und nachvollziehbar dokumentiert.",
  },
  {
    icon: ShieldCheck,
    label: "Vertraulichkeit",
    value: "Informationen bleiben geschützt",
    text: "Geschäfts-, Betriebs- und Projektdaten werden vertraulich behandelt und nur im vereinbarten Leistungszusammenhang verwendet.",
  },
  {
    icon: BadgeCheck,
    label: "Stand",
    value: "November 2025",
    text: "Maßgeblich ist die jeweils gültige Fassung zum Zeitpunkt des Vertragsabschlusses oder der schriftlich bestätigten Beauftragung.",
  },
];

const termsSections = [
  {
    icon: FileText,
    number: "01",
    title: "Allgemeine Grundlagen und Geltungsbereich",
    summary:
      "Die AGB schaffen die vertragliche Basis für Beratungsleistungen und künftige Beauftragungen.",
    points: [
      "Für sämtliche Rechtsgeschäfte zwischen Auftraggeber:in und Auftragnehmer:in gelten diese Allgemeinen Geschäftsbedingungen, sofern keine abweichende Vereinbarung ausdrücklich schriftlich getroffen wurde.",
      "Maßgeblich ist jene Fassung, die im Zeitpunkt des Vertragsabschlusses beziehungsweise der bestätigten Beauftragung gültig ist.",
      "Die Bedingungen gelten auch für spätere Zusatz- oder Folgeaufträge, selbst wenn sie dort nicht erneut ausdrücklich erwähnt werden.",
      "Entgegenstehende Bedingungen des:der Auftraggeber:in werden nur Vertragsbestandteil, wenn sie ausdrücklich schriftlich anerkannt werden.",
      "Sollte eine einzelne Bestimmung unwirksam sein oder werden, bleibt der übrige Vertrag aufrecht. Die unwirksame Regelung ist durch eine wirtschaftlich möglichst nahekommende wirksame Regelung zu ersetzen.",
    ],
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Auftrag, Leistungsumfang und Projektziel",
    summary:
      "Der konkrete Beratungsauftrag wird im Einzelfall definiert, damit Umfang und Erwartung klar bleiben.",
    points: [
      "Der Umfang eines Beratungsauftrages ergibt sich aus Angebot, Auftragsbestätigung, Projektbeschreibung oder einer gesonderten schriftlichen Vereinbarung.",
      "Beratungsleistungen können insbesondere Analyse, Strukturierung, Dokumentationslogik, Prämienpotenzialprüfung, Projektaufbereitung, Begleitung von Einreichprozessen und fachliche Rückfragen umfassen.",
      "Consira schuldet eine sorgfältige, fachlich strukturierte Beratungsleistung, jedoch keinen bestimmten wirtschaftlichen oder behördlichen Erfolg, sofern ein solcher nicht ausdrücklich garantiert wurde.",
      "Änderungen des Leistungsumfangs, zusätzliche Auswertungen oder nachträgliche Erweiterungen gelten als Zusatzleistungen und können gesondert vereinbart werden.",
      "Projektziele werden so formuliert, dass fachliche Substanz, Verantwortlichkeiten und notwendige Mitwirkungspflichten nachvollziehbar bleiben.",
    ],
  },
  {
    icon: UserRoundCheck,
    number: "03",
    title: "Mitwirkung, Aufklärung und Vollständigkeit",
    summary:
      "Die Qualität der Beratung hängt wesentlich von vollständigen Informationen und rechtzeitiger Mitwirkung ab.",
    points: [
      "Der:die Auftraggeber:in schafft die organisatorischen Voraussetzungen, damit die Beratung möglichst störungsfrei, effizient und sachgerecht durchgeführt werden kann.",
      "Alle für die Leistungserbringung erforderlichen Unterlagen, Informationen, Projektbeschreibungen, Kostenaufstellungen, Ansprechpartner:innen und Hintergrunddaten sind zeitgerecht bereitzustellen.",
      "Relevante Vorgänge, Änderungen, Risiken oder neue Erkenntnisse sind auch dann mitzuteilen, wenn sie erst während der Beratung bekannt werden.",
      "Vorherige oder parallel laufende Beratungen, insbesondere in verwandten steuerlichen, technischen oder organisatorischen Bereichen, sind offenzulegen, soweit sie die Arbeit berühren können.",
      "Der:die Auftraggeber:in trägt Verantwortung dafür, dass intern notwendige Personen, Teams oder Vertretungen über die Zusammenarbeit informiert sind und Auskünfte geben können.",
    ],
  },
  {
    icon: Handshake,
    number: "04",
    title: "Einsatz Dritter und Stellvertretung",
    summary:
      "Spezialisierte Leistungen können durch geeignete Dritte unterstützt werden, ohne die klare Verantwortung zu verwässern.",
    points: [
      "Consira ist berechtigt, Aufgaben ganz oder teilweise durch qualifizierte Mitarbeiter:innen, freie Expert:innen oder spezialisierte Dritte erbringen zu lassen.",
      "Die Vergütung dieser Dritten erfolgt grundsätzlich durch Consira. Dadurch entsteht kein direktes Vertragsverhältnis zwischen dem:der Auftraggeber:in und dem beigezogenen Dritten.",
      "Dritte werden nur im erforderlichen Umfang eingebunden und sind entsprechend zur Vertraulichkeit zu verpflichten.",
      "Der:die Auftraggeber:in verpflichtet sich, während der Zusammenarbeit und für drei Jahre danach keine Geschäftsbeziehung zu Personen oder Gesellschaften einzugehen, deren sich Consira zur Leistungserbringung bedient, sofern diese gleiche oder ähnliche Beratungsleistungen betrifft.",
    ],
  },
  {
    icon: Landmark,
    number: "05",
    title: "Unabhängigkeit, Loyalität und Interessenschutz",
    summary:
      "Eine belastbare Beratung braucht fachliche Unabhängigkeit und faire Zusammenarbeit.",
    points: [
      "Die Vertragsparteien verpflichten sich zu gegenseitiger Loyalität, sachlicher Kommunikation und einem professionellen Umgang mit bereitgestellten Informationen.",
      "Beide Seiten treffen geeignete Vorkehrungen, um die Unabhängigkeit von Consira, beigezogenen Dritten und beteiligten Mitarbeiter:innen nicht zu gefährden.",
      "Angebote auf Anstellung, direkte Beauftragung oder eine Umgehung der vertraglichen Zusammenarbeit sind zu vermeiden, soweit dadurch berechtigte Interessen der anderen Vertragspartei beeinträchtigt werden.",
      "Sachliche Differenzen über Bewertung, Umfang oder Projektauslegung sind möglichst früh offenzulegen, damit sie im laufenden Prozess geklärt werden können.",
    ],
  },
  {
    icon: Archive,
    number: "06",
    title: "Berichterstattung, Dokumentation und Arbeitsergebnisse",
    summary:
      "Ergebnisse werden so aufbereitet, dass sie intern nachvollziehbar und extern prüfbar bleiben.",
    points: [
      "Consira berichtet dem Arbeitsfortschritt entsprechend über Tätigkeiten, Zwischenergebnisse und offene Punkte.",
      "Art und Umfang der Berichterstattung richten sich nach Auftrag, Projektphase und vereinbarter Arbeitsweise.",
      "Schlussberichte, Analysen oder strukturierte Unterlagen werden in angemessener Frist nach Abschluss der vereinbarten Leistung bereitgestellt; je nach Umfang kann dies mehrere Wochen beanspruchen.",
      "Consira erbringt Leistungen weisungsfrei, eigenverantwortlich und ist an keinen bestimmten Arbeitsort oder keine bestimmte Arbeitszeit gebunden, soweit der Auftrag nichts anderes erfordert.",
      "Arbeitsergebnisse dienen dem vereinbarten Zweck. Eine Verwendung außerhalb dieses Zwecks bedarf einer entsprechenden Freigabe oder gesonderten Vereinbarung.",
    ],
  },
  {
    icon: Lock,
    number: "07",
    title: "Geistiges Eigentum und Nutzungsrechte",
    summary:
      "Berichte, Analysen, Strukturen und Vorlagen dürfen nur im vereinbarten Rahmen verwendet werden.",
    points: [
      "Urheber- und sonstige Schutzrechte an von Consira oder beigezogenen Dritten erstellten Werken verbleiben bei der jeweiligen Rechteinhaberin beziehungsweise beim jeweiligen Rechteinhaber.",
      "Zu den geschützten Arbeitsergebnissen zählen insbesondere Angebote, Berichte, Analysen, Gutachten, Organisationspläne, Leistungsbeschreibungen, Berechnungen, Modelle, Vorlagen, Zeichnungen, Datenstrukturen und digitale Unterlagen.",
      "Der:die Auftraggeber:in darf Arbeitsergebnisse während und nach Ende des Vertrags ausschließlich für die vertraglich vorgesehenen Zwecke nutzen.",
      "Vervielfältigung, Weitergabe, Veröffentlichung oder Bearbeitung außerhalb des vereinbarten Nutzungszwecks ist nur mit ausdrücklicher Zustimmung zulässig.",
      "Bei unberechtigter Nutzung ist Consira zur vorzeitigen Vertragsbeendigung sowie zur Geltendmachung gesetzlicher Ansprüche, insbesondere Unterlassung und Schadenersatz, berechtigt.",
    ],
  },
  {
    icon: ShieldCheck,
    number: "08",
    title: "Vertraulichkeit und Datenschutz",
    summary:
      "Projektinformationen werden diskret behandelt, weil sie oft technische und wirtschaftliche Kernbereiche betreffen.",
    points: [
      "Consira verpflichtet sich zur Verschwiegenheit über sämtliche im Rahmen der Zusammenarbeit bekannt werdenden geschäftlichen Angelegenheiten.",
      "Dies umfasst insbesondere Geschäfts- und Betriebsgeheimnisse, Projektinformationen, technische Abläufe, Kostenstrukturen, personenbezogene Daten und Informationen über Kund:innen oder Partner:innen des:der Auftraggeber:in.",
      "Die Schweigepflicht besteht zeitlich unbegrenzt über das Ende des Vertragsverhältnisses hinaus, sofern keine gesetzliche Offenlegungspflicht besteht.",
      "Personenbezogene Daten dürfen im Rahmen des vereinbarten Zwecks verarbeitet werden. Der:die Auftraggeber:in stellt sicher, dass hierfür erforderliche Rechtsgrundlagen, Informationen oder Zustimmungen vorliegen.",
      "Elektronische Kommunikation kann genutzt werden, sofern sie dem Projekt angemessen ist. Besonders sensible Inhalte können nach Abstimmung über gesonderte Kanäle ausgetauscht werden.",
    ],
  },
  {
    icon: Euro,
    number: "09",
    title: "Honorar, Auslagen und Zahlungsbedingungen",
    summary:
      "Honorare und Abrechnungsmodalitäten richten sich nach der jeweiligen Vereinbarung und dem Projektfortschritt.",
    points: [
      "Das Honorar ergibt sich aus Angebot, Beauftragung oder gesonderter Vereinbarung. Es kann als Pauschale, laufendes Honorar, Stundenhonorar oder erfolgsbezogene Komponente ausgestaltet sein, soweit rechtlich zulässig vereinbart.",
      "Consira ist berechtigt, dem Arbeitsfortschritt entsprechende Zwischenabrechnungen zu legen und angemessene Akontozahlungen zu verlangen.",
      "Honorare werden mit Rechnungslegung fällig, sofern nichts anderes vereinbart ist. Rechnungen enthalten die gesetzlich erforderlichen Angaben.",
      "Barauslagen, Spesen, Reisekosten und sonstige projektbezogene Nebenkosten sind gegen Rechnungslegung zusätzlich zu ersetzen, wenn sie beauftragt oder sachlich erforderlich waren.",
      "Unterbleibt die Leistungserbringung aus Gründen, die in der Sphäre des:der Auftraggeber:in liegen, bleiben vereinbarte Vergütungsansprüche nach Maßgabe der AGB und gesetzlicher Regelungen bestehen.",
      "Bei Nichtzahlung fälliger Teilbeträge kann Consira weitere Leistungen bis zur Klärung oder Zahlung zurückhalten; weitergehende Ansprüche bleiben unberührt.",
    ],
  },
  {
    icon: Mail,
    number: "10",
    title: "Elektronische Rechnungslegung und Kommunikation",
    summary:
      "Digitale Übermittlung ist zulässig und unterstützt eine schnelle, nachvollziehbare Abwicklung.",
    points: [
      "Consira ist berechtigt, Rechnungen elektronisch zu übermitteln. Der:die Auftraggeber:in erklärt sich mit der elektronischen Zusendung einverstanden, sofern keine abweichende Vereinbarung besteht.",
      "Projektkommunikation kann per E-Mail, Videokonferenz, Telefon oder über gemeinsam vereinbarte digitale Arbeitsräume erfolgen.",
      "Der:die Auftraggeber:in sorgt dafür, dass genannte Kontaktpersonen empfangs- und entscheidungsfähig sind und relevante Informationen intern weitergeleitet werden.",
    ],
  },
  {
    icon: CircleCheck,
    number: "11",
    title: "Gewährleistung, Korrekturen und Qualitätssicherung",
    summary:
      "Bekannte Unrichtigkeiten oder Mängel werden im gesetzlichen Rahmen korrigiert.",
    points: [
      "Consira ist berechtigt und verpflichtet, bekannt werdende Unrichtigkeiten oder Mängel im Rahmen der gesetzlichen Gewährleistung zu beheben.",
      "Der:die Auftraggeber:in informiert Consira unverzüglich, wenn Unklarheiten, sachliche Fehler oder Widersprüche in Arbeitsergebnissen erkannt werden.",
      "Gewährleistungsansprüche erlöschen sechs Monate nach Erbringen der jeweiligen Leistung, soweit gesetzlich zulässig und keine abweichende zwingende Regelung besteht.",
      "Korrekturen setzen voraus, dass der gemeldete Punkt auf die vereinbarte Leistung zurückzuführen ist und nicht auf nachträgliche Änderungen, unvollständige Informationen oder externe Entscheidungen.",
    ],
  },
  {
    icon: Ban,
    number: "12",
    title: "Haftung und Schadenersatz",
    summary:
      "Die Haftung ist auf grobes Verschulden beschränkt, soweit gesetzlich zulässig.",
    points: [
      "Für Schäden – ausgenommen Personenschäden – haftet Consira nur bei Vorsatz oder grober Fahrlässigkeit, soweit zwingendes Recht keine weitergehende Haftung vorsieht.",
      "Diese Beschränkung gilt sinngemäß auch für Schäden, die auf beigezogene Dritte zurückgehen.",
      "Der:die Auftraggeber:in hat nachzuweisen, dass ein Schaden durch ein Verschulden von Consira verursacht wurde.",
      "Schadenersatzansprüche sind binnen sechs Monaten ab Kenntnis von Schaden und Schädiger, spätestens jedoch binnen drei Jahren ab dem anspruchsbegründenden Ereignis gerichtlich geltend zu machen.",
      "Entstehen im Zusammenhang mit beigezogenen Dritten Gewährleistungs- oder Haftungsansprüche, kann Consira diese Ansprüche an den:die Auftraggeber:in abtreten; der:die Auftraggeber:in hält sich in diesem Fall vorrangig an diese Dritten.",
    ],
  },
  {
    icon: BadgeCheck,
    number: "13",
    title: "Förder-, Prämien- und Behördenbezug",
    summary:
      "Die Beratung unterstützt Struktur und Argumentation, ersetzt aber keine behördliche Entscheidung.",
    points: [
      "Leistungen im Zusammenhang mit Forschungsprämien, Förderungen oder vergleichbaren Instrumenten erfolgen auf Basis der vom:von der Auftraggeber:in bereitgestellten Informationen und der vereinbarten Prüfungstiefe.",
      "Consira kann Potenziale, Dokumentationslücken, Strukturierungsbedarf und argumentative Ansätze aufzeigen; die finale Beurteilung durch Behörden, Gutachter:innen oder sonstige Stellen bleibt davon unberührt.",
      "Eine positive steuerliche, förderrechtliche oder behördliche Entscheidung wird nicht garantiert, sofern dies nicht ausdrücklich schriftlich zugesagt wurde.",
      "Der:die Auftraggeber:in bleibt für steuerliche Erklärungen, formale Einreichungen, Freigaben, interne Entscheidungen und die Richtigkeit der zugrunde liegenden Daten verantwortlich, soweit nichts anderes vereinbart ist.",
    ],
  },
  {
    icon: Clock,
    number: "14",
    title: "Dauer, Kündigung und wichtige Gründe",
    summary:
      "Der Vertrag endet grundsätzlich mit Projektabschluss, kann bei wichtigen Gründen aber vorzeitig beendet werden.",
    points: [
      "Ein Auftrag endet grundsätzlich mit Abschluss der vereinbarten Leistung und entsprechender Rechnungslegung.",
      "Aus wichtigem Grund kann der Vertrag von jeder Seite ohne Einhaltung einer Kündigungsfrist gelöst werden.",
      "Wichtige Gründe sind insbesondere erhebliche Vertragsverletzungen, Zahlungsverzug nach Eröffnung eines Insolvenzverfahrens oder begründete Bonitätsbedenken ohne angemessene Sicherstellung.",
      "Bereits erbrachte Leistungen, notwendige Abschlussarbeiten und bis dahin entstandene Aufwendungen bleiben abrechenbar.",
      "Nachwirkende Pflichten, insbesondere Vertraulichkeit, Schutz geistigen Eigentums, Abwerbe- und Umgehungsverbote sowie Zahlungsansprüche, bleiben von einer Vertragsbeendigung unberührt.",
    ],
  },
  {
    icon: Signature,
    number: "15",
    title: "Schlussbestimmungen, Schriftform und Gerichtsstand",
    summary:
      "Änderungen brauchen klare Form. Es gilt österreichisches Recht.",
    points: [
      "Die Vertragsparteien bestätigen, Angaben im Zusammenhang mit Vertragsschluss und Leistungserbringung gewissenhaft und wahrheitsgetreu zu machen.",
      "Änderungen des Vertrags oder dieser AGB bedürfen der Schriftform. Das gilt auch für ein Abgehen von diesem Schriftformerfordernis.",
      "Mündliche Nebenabreden bestehen nicht, sofern sie nicht schriftlich bestätigt wurden.",
      "Auf das Vertragsverhältnis ist materielles österreichisches Recht unter Ausschluss der Verweisungsnormen des internationalen Privatrechts und des UN-Kaufrechts anwendbar.",
      "Erfüllungsort ist der Ort der beruflichen Niederlassung von Consira. Für Streitigkeiten ist, soweit zulässig, das sachlich zuständige Gericht am Unternehmensort von Consira zuständig.",
    ],
  },
];

function AGBTopMark() {
  return (
    <div className="agb-top-mark" aria-hidden="true">
      <Scale className="h-full w-full" strokeWidth={1.15} />
    </div>
  );
}

export default function AGBPage() {
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

      <section className="agb-page-shell relative z-10 overflow-hidden bg-[#f7f5ef]/84 px-5 pb-18 pt-5 backdrop-blur-[2px] sm:px-8 lg:px-10 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 backdrop-blur-[7px] [mask-image:linear-gradient(to_bottom,black_0%,black_24%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(to_bottom,rgba(247,245,239,0.9)_0%,rgba(247,245,239,0.76)_38%,rgba(247,245,239,0.34)_74%,transparent_100%)]"
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

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-18 sm:pt-24 lg:pt-28">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <SectionBadge
                href="/agb"
                icon="receipt"
                tone="neutral"
                leadingPill="AGB"
                iconPosition="end"
                className="not-found-subtle-badge mb-6 shadow-none"
                delay={0.16}
              >
                Vertragsrahmen
              </SectionBadge>

              <TypewriterHeading
                as="h1"
                text="Allgemeine Geschäftsbedingungen."
                className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-balance sm:text-6xl lg:text-[6.65rem]"
                charDelay={0.027}
              />
            </div>

            <div className="relative">
              <AGBTopMark />
              <ScrollReveal delay={0.25} distance={22}>
                <p className="max-w-2xl text-base leading-8 text-black/54 sm:text-lg lg:ml-auto">
                  Diese Bedingungen schaffen einen klaren Rahmen für
                  Beratungsleistungen, Projektstrukturierung und die Begleitung
                  von Themen rund um Forschungsprämie und Entwicklungskosten.
                  Die Darstellung ist ausführlich, aber bewusst klar gegliedert.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {overviewCards.map(({ icon: Icon, label, value, text }, index) => (
              <ScrollReveal
                key={label}
                delay={0.2 + index * 0.22}
                smartStaggerKey="agb-overview-cards"
                duration={1}
                xDistance={-58}
                distance={0}
                disableBlur
                className="h-full"
              >
                <article className="agb-overview-card group relative isolate flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-[1.6rem] border border-black/8 bg-white/56 p-5 shadow-[0_20px_70px_rgba(8,7,9,0.045)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/72 sm:p-6">
                  <span className="mb-8 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition duration-500 group-hover:scale-105 sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <div className="mt-auto">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#41528f]/62">
                      {label}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold tracking-[-0.045em] sm:text-xl">
                      {value}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-black/46 sm:line-clamp-1 lg:line-clamp-2">
                      {text}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <ScrollReveal delay={0.12} distance={24}>
                <aside className="agb-index-card relative isolate overflow-hidden rounded-[2rem] bg-[#080709] p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-8">
                  <Gavel
                    aria-hidden="true"
                    className="absolute -right-7 -top-7 h-36 w-36 rotate-[-14deg] text-white/7"
                    strokeWidth={1.2}
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/34">
                    Struktur
                  </p>
                  <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-5xl">
                    Regeln, die im Projektalltag lesbar bleiben.
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-white/48">
                    Die folgenden Punkte ordnen Zusammenarbeit, Mitwirkung,
                    Nutzungsrechte, Vertraulichkeit, Honorar und Abschluss der
                    Beratung. Für konkrete Aufträge gilt zusätzlich immer die
                    jeweilige Einzelvereinbarung.
                  </p>

                  <div className="mt-8 grid gap-2">
                    {termsSections.slice(0, 8).map(({ number, title }) => (
                      <a
                        key={number}
                        href={`#agb-${number}`}
                        className="group/idx flex items-center gap-3 rounded-full bg-white/[0.045] px-3 py-2 text-xs text-white/44 transition duration-300 hover:bg-white/[0.08] hover:text-white"
                      >
                        <span className="font-semibold text-[#b9c8ff]/72">
                          {number}
                        </span>
                        <span className="truncate">{title}</span>
                      </a>
                    ))}
                  </div>
                </aside>
              </ScrollReveal>
            </div>

            <div className="grid gap-4">
              {termsSections.map(({ icon: Icon, number, title, summary, points }, index) => (
                <ScrollReveal
                  key={number}
                  delay={0.1 + Math.min(index, 4) * 0.04}
                  duration={1}
                  distance={28}
                  disableBlur
                >
                  <article
                    id={`agb-${number}`}
                    className="agb-term-card group relative isolate overflow-hidden rounded-[1.75rem] border border-black/8 bg-white/54 p-5 shadow-[0_20px_80px_rgba(8,7,9,0.04)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/72 sm:p-7 lg:p-8"
                  >
                    <Icon
                      aria-hidden="true"
                      className="absolute -right-5 -top-6 h-32 w-32 rotate-[-14deg] text-[#41528f]/8 transition duration-500 group-hover:rotate-[-5deg] group-hover:text-[#41528f]/13"
                      strokeWidth={1.25}
                    />
                    <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="inline-flex rounded-full bg-[#eef2ff]/72 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#41528f]/76">
                          Abschnitt {number}
                        </p>
                        <h2 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.055em] text-black sm:text-3xl">
                          {title}
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-black/50">
                          {summary}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-[0_14px_34px_rgba(0,0,0,0.13)]">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                      </span>
                    </div>

                    <div className="relative z-10 mt-7 grid gap-3">
                      {points.map((point, pointIndex) => (
                        <div
                          key={point}
                          className="agb-term-point grid gap-3 rounded-[1.15rem] bg-white/[0.32] px-4 py-3.5 text-sm leading-7 text-black/58 sm:grid-cols-[auto_1fr] sm:px-5"
                        >
                          <span className="font-semibold tabular-nums text-[#41528f]/72">
                            {number}.{pointIndex + 1}
                          </span>
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.16} distance={24}>
            <div className="agb-closing-card relative isolate mt-8 overflow-hidden rounded-[2rem] bg-black p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-8 lg:mt-12 lg:p-10">
              <Building2
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-40 w-40 rotate-[-12deg] text-white/7"
                strokeWidth={1.2}
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9c8ff]/72">
                Hinweis
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-5xl">
                Die konkrete Vereinbarung bleibt entscheidend.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/48 sm:text-base sm:leading-8">
                Diese AGB bilden den allgemeinen Rahmen. Konkrete Leistungen,
                Honorare, Termine, Einreichschritte und Verantwortlichkeiten
                ergeben sich zusätzlich aus Angebot, Auftragsbestätigung oder
                schriftlicher Einzelvereinbarung. Stand: November 2025.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer anchorPrefix="/" />
    </main>
  );
}
