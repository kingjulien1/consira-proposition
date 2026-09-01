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
  Route,
  Scale,
  ShieldCheck,
  Signature,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";
import Iridescence from "@/components/Iridescence";
import { Footer } from "@/components/Footer";
import { LegalSupportSection } from "@/components/LegalSupportSection";
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
      "Die AGB schaffen die vertragliche Basis für Beratungsleistungen und künftige Beauftragungen. So bleibt von Beginn an klar, welcher Rahmen gilt und wann individuelle Vereinbarungen Vorrang haben.",
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
      "Der konkrete Beratungsauftrag wird im Einzelfall definiert, damit Umfang und Erwartung klar bleiben. Entscheidend ist, dass Leistung, Zielbild und notwendige Projektgrenzen nachvollziehbar festgelegt werden.",
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
      "Die Qualität der Beratung hängt wesentlich von vollständigen Informationen und rechtzeitiger Mitwirkung ab. Je sauberer Unterlagen, Ansprechpartner:innen und Projektdaten bereitstehen, desto belastbarer wird das Ergebnis.",
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
      "Spezialisierte Leistungen können durch geeignete Dritte unterstützt werden, ohne die klare Verantwortung zu verwässern. Dadurch lassen sich Fachfragen gezielt ergänzen, während die Projektführung geordnet bleibt.",
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
      "Eine belastbare Beratung braucht fachliche Unabhängigkeit und faire Zusammenarbeit. Offene Kommunikation schützt beide Seiten und verhindert, dass Interessen oder Erwartungen zu spät kollidieren.",
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
      "Ergebnisse werden so aufbereitet, dass sie intern nachvollziehbar und extern prüfbar bleiben. Die Dokumentation soll nicht nur fertig wirken, sondern später auch inhaltlich begründbar sein.",
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
      "Berichte, Analysen, Strukturen und Vorlagen dürfen nur im vereinbarten Rahmen verwendet werden. So bleiben Zweck, Weitergabe und Bearbeitung der erstellten Unterlagen sauber abgegrenzt.",
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
      "Projektinformationen werden diskret behandelt, weil sie oft technische und wirtschaftliche Kernbereiche betreffen. Der Umgang mit sensiblen Daten wird deshalb auf den vereinbarten Zweck beschränkt.",
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
      "Honorare und Abrechnungsmodalitäten richten sich nach der jeweiligen Vereinbarung und dem Projektfortschritt. Damit bleiben Kosten, Fälligkeiten und ersatzfähige Aufwendungen transparent.",
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
      "Digitale Übermittlung ist zulässig und unterstützt eine schnelle, nachvollziehbare Abwicklung. Gleichzeitig bleibt wichtig, dass Kontaktwege, Zuständigkeiten und Freigaben intern funktionieren.",
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
      "Bekannte Unrichtigkeiten oder Mängel werden im gesetzlichen Rahmen korrigiert. Rückmeldungen sollen früh erfolgen, damit fachliche Korrekturen effizient und nachvollziehbar umgesetzt werden können.",
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
      "Die Haftung ist auf grobes Verschulden beschränkt, soweit gesetzlich zulässig. Die Regelungen ordnen Verantwortlichkeiten und Anspruchsfristen für den Fall, dass ein Schaden behauptet wird.",
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
      "Die Beratung unterstützt Struktur und Argumentation, ersetzt aber keine behördliche Entscheidung. Consira kann Potenziale und Lücken sichtbar machen, die finale Beurteilung bleibt jedoch bei zuständigen Stellen.",
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
      "Der Vertrag endet grundsätzlich mit Projektabschluss, kann bei wichtigen Gründen aber vorzeitig beendet werden. Bereits erbrachte Leistungen und nachwirkende Pflichten bleiben dabei geordnet berücksichtigt.",
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
      "Änderungen brauchen klare Form. Es gilt österreichisches Recht. Die Schlussbestimmungen sorgen dafür, dass Zuständigkeit, Schriftform und anwendbares Recht eindeutig bleiben.",
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

      <section className="agb-page-shell relative z-10 overflow-hidden bg-[#f7f5ef]/70 px-5 pb-18 pt-5 backdrop-blur-[1px] sm:px-8 lg:px-10 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,black_0%,black_18%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[linear-gradient(to_bottom,rgba(247,245,239,0.34)_0%,rgba(247,245,239,0.24)_28%,rgba(247,245,239,0.11)_58%,transparent_100%)]"
        />
        <div aria-hidden="true" className="agb-page-top-fuchsia-fade" />
        <div aria-hidden="true" className="agb-page-top-white-fade" />
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

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-[8.5rem] sm:pt-36 md:pt-32 lg:pt-[8.5rem] xl:pt-[9.5rem]">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <SectionBadge
              href="/agb"
              icon="scale"
              tone="neutral"
              leadingPill="Klarheit"
              iconPosition="end"
              entryDirection="down"
              className="agb-hero-badge mb-7 shadow-none lg:mb-8"
              delay={0.06}
            >
              Vertragsrahmen Für Beratung
            </SectionBadge>

            <TypewriterHeading
              as="h1"
              text="Allgemeine Geschäfts Bedingungen."
              className="max-w-4xl px-5 text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-balance sm:hidden"
              delay={0.32}
              charDelay={0.025}
            />

            <TypewriterHeading
              as="h1"
              text="Allgemeine Geschäftsbedingungen."
              className="hidden max-w-4xl font-semibold leading-[0.9] tracking-[-0.075em] text-balance sm:block sm:text-6xl lg:text-[5.8rem]"
              delay={0.32}
              charDelay={0.025}
            />

            <ScrollReveal delay={0.82} distance={18}>
              <p className="mx-auto mt-5 max-w-2xl px-5 text-sm leading-7 text-black/50 sm:hidden">
                Ein klarer Rahmen für Beratung, Projektstrukturierung und
                Leistungen rund um Forschungsprämie und Entwicklungskosten.
                Maßgeblich bleibt die konkrete Vereinbarung.
              </p>
              <p className="mx-auto mt-5 hidden max-w-3xl text-base leading-8 text-black/50 sm:block">
                Diese Bedingungen schaffen einen klaren, lesbaren Rahmen für
                Beratung, Projektstrukturierung und Leistungen rund um
                Forschungsprämie und Entwicklungskosten. Sie ordnen Auftrag,
                Mitwirkung, Vertraulichkeit, Honorar und Abschluss — maßgeblich
                bleibt immer die konkrete Vereinbarung im Einzelfall.
              </p>
            </ScrollReveal>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-2 lg:gap-3 xl:gap-4">
              <ScrollReveal delay={1.02} duration={0.9} xDistance={-22} distance={0} disableBlur>
                <span className="agb-meta-pill">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.9} />
                  Stand November 2025
                </span>
              </ScrollReveal>
              <ScrollReveal delay={1.14} duration={0.9} xDistance={-22} distance={0} disableBlur>
                <span className="agb-meta-pill">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.9} />
                  Für Beratungsaufträge
                </span>
              </ScrollReveal>
              <ScrollReveal delay={1.26} duration={0.9} xDistance={-22} distance={0} disableBlur>
                <a href="#agb-01" className="agb-meta-pill agb-meta-pill--link">
                  <FileText className="h-3.5 w-3.5" strokeWidth={1.9} />
                  15 Abschnitte lesen
                </a>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.34} distance={24} disableBlur className="md:hidden">
            <section className="agb-mobile-overview relative isolate mt-20 overflow-hidden rounded-[1.7rem] border border-white/45 bg-white/44 p-4 shadow-[0_22px_70px_rgba(8,7,9,0.055)]">
              <Scale
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-36 w-36 rotate-[-14deg] text-[#41528f]/9"
                strokeWidth={1.1}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#41528f]/64">
                      Überblick
                    </p>
                    <h2 className="mt-3 max-w-none text-2xl font-semibold leading-[0.94] tracking-[-0.065em] text-black">
                      Der Rahmen in vier Punkten.
                    </h2>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/7 bg-white/62 px-2.5 py-1 text-[0.66rem] font-semibold text-black/54 shadow-sm">
                    <Clock className="h-3 w-3 text-[#41528f]/68" strokeWidth={1.9} />
                    Nov. 2025
                  </span>
                </div>

                <p className="mt-3 max-w-none text-xs leading-5 text-black/45">
                  Kompakt gelesen: Geltung, Zusammenarbeit, Vertraulichkeit und
                  Stand werden klar eingeordnet, ohne die Seite mit kleinen
                  Einzelkarten zu überladen.
                </p>

                <div className="mt-5 grid gap-2.5">
                  {overviewCards.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="agb-mobile-overview-row flex items-center gap-3 rounded-[1.05rem] bg-white/46 px-3 py-2.5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-[#41528f]/54">
                          {label}
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold tracking-[-0.035em] text-black/82">
                          {value}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          <div className="mx-auto mt-16 hidden max-w-7xl auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-2 md:grid lg:mt-20 lg:grid-cols-4 lg:gap-8 xl:gap-12">
            {overviewCards.map(({ icon: Icon, label, value, text }) => (
              <ScrollReveal
                key={label}
                delay={0.32}
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

          <div className="agb-terms-band relative mx-[calc(50%-50vw)] mt-16 px-5 py-12 sm:px-8 lg:mt-24 lg:px-10 lg:py-16">
            <div className="relative z-10 mx-auto max-w-7xl">
              <div className="agb-document-intro relative isolate mb-9 overflow-hidden rounded-[1.9rem] bg-[#080709] px-5 py-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8 lg:mb-12 lg:px-10 lg:py-10">
                <Gavel
                  aria-hidden="true"
                  className="absolute -right-8 -top-9 h-40 w-40 rotate-[-14deg] text-white/7"
                  strokeWidth={1.15}
                />
                <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#b9c8ff]/70">
                      Dokument
                    </p>
                    <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-4xl lg:text-[2.7rem]">
                      Vereinbarungen kompakt geordnet.
                    </h2>
                    <p className="mt-4 hidden max-w-sm text-xs leading-5 text-white/36 lg:block">
                      Ein komprimierter Überblick, bevor die einzelnen
                      Vertragsabschnitte im Detail folgen.
                    </p>
                    <div className="agb-document-signal mt-6">
                      <CircleCheck className="h-4 w-4 shrink-0" strokeWidth={2} />
                      <span className="min-w-0 truncate">
                        Orientierung vor Detailtiefe — rechtlich sauber, aber schnell erfassbar.
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                      Maßgeblich bleibt der konkrete Auftrag. Diese AGB ergänzen
                      Angebot, Beauftragung und individuelle schriftliche
                      Vereinbarungen — damit Leistungsumfang, Mitwirkung,
                      Vertraulichkeit, Nutzungsrechte und Abrechnung von Beginn
                      an nachvollziehbar geregelt sind. Kurz genug für den
                      Überblick, klar genug für die Zusammenarbeit.
                    </p>
                    <div className="mt-6 grid gap-2 sm:grid-cols-3">
                      {[
                        [UserRoundCheck, "klare Zuständigkeiten"],
                        [ClipboardCheck, "saubere Dokumentation"],
                        [Route, "verlässlicher Rahmen"],
                      ].map(([PillIcon, label]) => (
                        <div
                          key={label}
                          className="agb-document-pill rounded-full px-3 py-2 text-xs font-semibold"
                        >
                          <PillIcon
                            className="mr-2 h-3.5 w-3.5 shrink-0 text-[#b9c8ff]/78"
                            strokeWidth={1.9}
                          />
                          <span className="min-w-0 truncate">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="agb-term-list mx-auto grid max-w-6xl gap-3.5 lg:gap-4">
              {termsSections.map(({ icon: Icon, number, title, summary, points }) => {
                const sectionHref = `#agb-${number}`;

                return (
                  <article
                    key={number}
                    id={`agb-${number}`}
                    className="agb-term-card group relative isolate overflow-hidden rounded-[1.35rem] border border-black/7 bg-white/58 p-4 shadow-[0_16px_54px_rgba(8,7,9,0.03)] backdrop-blur-xl transition duration-700 hover:-translate-y-0.5 hover:bg-white/70 sm:p-5 lg:p-6"
                  >
                    <Icon
                      aria-hidden="true"
                      className="absolute -right-12 -top-14 h-48 w-48 rotate-[-14deg] text-[#41528f]/5 transition duration-700 group-hover:rotate-[-6deg] group-hover:text-[#41528f]/8"
                      strokeWidth={1.25}
                    />
                    <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="pr-12 sm:pr-0">
                        <a
                          href={sectionHref}
                          className="inline-flex text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#41528f]/64 transition duration-300 hover:text-[#41528f] hover:no-underline"
                        >
                          Abschnitt {number}
                        </a>
                        <h2 className="mt-3 max-w-3xl text-xl font-semibold leading-tight tracking-[-0.055em] text-black sm:text-2xl lg:text-[1.55rem]">
                          <a
                            href={sectionHref}
                            className="transition duration-300 hover:text-[#41528f] hover:no-underline"
                          >
                            {title}
                          </a>
                        </h2>
                        <p className="mt-2 max-w-3xl text-sm leading-6 text-black/48">
                          {summary}
                        </p>
                      </div>
                      <a
                        href={sectionHref}
                        aria-label={`Direkt zu Abschnitt ${number}: ${title}`}
                        className="agb-term-card__icon-link flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-105 hover:bg-[#41528f] hover:no-underline"
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                      </a>
                    </div>

                    <div className="relative z-10 mt-5 grid gap-2">
                      {points.map((point, pointIndex) => (
                        <div
                          key={point}
                          className="agb-term-point grid gap-2.5 rounded-[0.95rem] bg-white/[0.28] px-3.5 py-2.5 text-[0.82rem] leading-6 text-black/58 sm:grid-cols-[auto_1fr]"
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
          </div>

          <ScrollReveal delay={0.16} distance={24}>
            <div className="agb-closing-card relative isolate mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.75rem] bg-black p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:mt-4 sm:p-8 lg:mt-5 lg:p-9">
              <Building2
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-40 w-40 rotate-[-12deg] text-white/7"
                strokeWidth={1.2}
              />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b9c8ff]/72">
                    Hinweis
                  </p>
                  <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-5xl">
                    Die konkrete Vereinbarung bleibt entscheidend.
                  </h2>
                  <div className="agb-document-signal mt-6">
                    <Signature className="h-4 w-4 shrink-0" strokeWidth={2} />
                    <span className="min-w-0 truncate">
                      Einzelauftrag vor Standardtext — sauber dokumentiert.
                    </span>
                  </div>
                </div>

                <div>
                  <p className="max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                    Diese AGB bilden den allgemeinen Rahmen. Konkrete Leistungen,
                    Honorare, Termine, Einreichschritte und Verantwortlichkeiten
                    ergeben sich zusätzlich aus Angebot, Auftragsbestätigung oder
                    schriftlicher Einzelvereinbarung. So bleibt klar, was
                    beauftragt wurde, welche Unterlagen benötigt werden und wie
                    Ergebnisse später nachvollziehbar bleiben. Stand: November
                    2025.
                  </p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-3">
                    {[
                      [ClipboardCheck, "Auftrag konkretisiert"],
                      [Euro, "Honorar nachvollziehbar"],
                      [Lock, "Vertraulichkeit geregelt"],
                    ].map(([PillIcon, label]) => (
                      <div
                        key={label}
                        className="agb-document-pill rounded-full px-3 py-2 text-xs font-semibold"
                      >
                        <PillIcon
                          className="mr-2 h-3.5 w-3.5 shrink-0 text-[#b9c8ff]/78"
                          strokeWidth={1.9}
                        />
                        <span className="min-w-0 truncate">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-[1rem] bg-white/[0.055] px-4 py-3 text-left ring-1 ring-white/8">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#b9c8ff]/62">
                        Praxis
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-white/42">
                        Der konkrete Projektkontext entscheidet, wie die
                        Bedingungen angewendet werden.
                      </p>
                    </div>
                    <div className="rounded-[1rem] bg-white/[0.055] px-4 py-3 text-left ring-1 ring-white/8">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#b9c8ff]/62">
                        Reihenfolge
                      </p>
                      <p className="mt-1.5 text-xs leading-5 text-white/42">
                        Angebot, Beauftragung und schriftliche Ergänzungen
                        bleiben gemeinsam zu lesen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <LegalSupportSection
            title="Rechtliches kurz klären."
            text="Wenn Sie wissen möchten, wie diese Bedingungen im konkreten Projekt angewendet werden, können Sie direkt nachfragen. Für schnelle Orientierung gibt es die FAQ, für formale Angaben das Impressum und für konkrete Rückfragen den direkten E-Mail-Kontakt."
            ctaText="Frage zu den AGB senden"
            variant="agb"
          />
        </div>
      </section>

      <Footer anchorPrefix="/" />
    </main>
  );
}
