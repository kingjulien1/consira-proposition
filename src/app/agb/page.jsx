import {
  Archive,
  BadgeCheck,
  Ban,
  CircleCheck,
  ClipboardCheck,
  Clock,
  Euro,
  FileText,
  Handshake,
  Landmark,
  ListChecks,
  Lock,
  Mail,
  Radar,
  Route,
  ShieldCheck,
  Signature,
  UserRoundCheck,
} from "lucide-react";
import { DarkHighlightCard } from "@/components/DarkHighlightCard";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { LegalSupportSection } from "@/components/LegalSupportSection";
import { LegalPageHero } from "@/components/LegalPageHero";
import { LegalSectionCards } from "@/components/LegalSectionCards";

export const metadata = {
  title: "AGB | CONSIRA",
  description:
    "Allgemeine Geschäftsbedingungen der Consira GmbH für Beratung, Projektstrukturierung und Leistungen im Zusammenhang mit Forschungsprämien.",
};

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

export default function AGBPage() {
  return (
    <LegalPageLayout>
          <LegalPageHero
            badgeHref="/agb"
            badgeIcon="scale"
            badgePill="AGB"
            badgeText="Vertragsrahmen Für Beratung"
            mobileTitle="Allgemeine Geschäfts Bedingungen."
            desktopTitle="Allgemeine Geschäftsbedingungen."
            mobileDescription="Ein klarer Rahmen für Beratung, Projektstrukturierung und Leistungen rund um Forschungsprämie und Entwicklungskosten. Maßgeblich bleibt die konkrete Vereinbarung."
            desktopDescription="Diese Bedingungen schaffen einen klaren, lesbaren Rahmen für Beratung, Projektstrukturierung und Leistungen rund um Forschungsprämie und Entwicklungskosten. Sie ordnen Auftrag, Mitwirkung, Vertraulichkeit, Honorar und Abschluss — maßgeblich bleibt immer die konkrete Vereinbarung im Einzelfall."
            metaItems={[
              { icon: Clock, label: "Stand November 2025" },
              { icon: ShieldCheck, label: "Für Beratungsaufträge" },
              { href: "#agb-01", icon: FileText, label: "15 Abschnitte lesen" },
            ]}
            legalLinks={[
              { href: "/datenschutz", icon: Lock, label: "Datenschutz" },
              { href: "/impressum", icon: Landmark, label: "Impressum" },
              { href: "/faq", icon: Route, label: "FAQ zur Einordnung" },
            ]}
          />

          <div className="agb-terms-band relative mx-[calc(50%-50vw)] mt-20 px-5 pb-10 pt-14 sm:px-8 lg:mt-32 lg:px-10 lg:pb-14 lg:pt-20">
            <div className="relative z-10 mx-auto max-w-7xl">
              <DarkHighlightCard
                className="mb-7 lg:mb-14"
                topLink={{
                  href: "#agb-hilfe",
                  icon: Radar,
                  label: "Hilfe & Orientierung am Seitenende",
                }}
                title="Vereinbarungen kompakt geordnet."
                shortNote="Ein komprimierter Überblick, bevor die einzelnen Vertragsabschnitte im Detail folgen."
                body="Maßgeblich bleibt der konkrete Auftrag. Diese AGB ergänzen Angebot, Beauftragung und individuelle schriftliche Vereinbarungen — damit Leistungsumfang, Mitwirkung, Vertraulichkeit, Nutzungsrechte und Abrechnung von Beginn an nachvollziehbar geregelt sind."
                items={[
                  {
                    icon: UserRoundCheck,
                    label: "Strukturiert und transparent",
                    mobileLabel: "Strukturiert und transparent arbeiten",
                    tabletLabel: "Strukturiert und transparent bleiben",
                  },
                  {
                    icon: ClipboardCheck,
                    label: "Informationen geschützt",
                    mobileLabel: "Informationen geschützt halten",
                    tabletLabel: "Informationen geschützt halten",
                  },
                  {
                    icon: Route,
                    label: "verlässlicher Rahmen",
                    mobileLabel: "verlässlicher Rahmen entsteht",
                    tabletLabel: "verlässlicher Rahmen sauber geordnet",
                  },
                ]}
                footerNote={{
                  icon: ListChecks,
                  label: "Geordnet lesen, schneller einordnen.",
                }}
              />

              <LegalSectionCards sections={termsSections} idPrefix="agb" />
            </div>
          </div>

          <div className="mt-8 lg:mt-10">
            <DarkHighlightCard
              className="mx-auto mt-0 max-w-7xl"
              topLink={{
                href: "mailto:markus.schicho@consira.at?subject=Frage%20zu%20den%20AGB",
                icon: Handshake,
                label: "Konkrete Einzelvereinbarung direkt abstimmen",
              }}
              title="Die konkrete Vereinbarung bleibt entscheidend."
              shortNote="Einzelauftrag vor Standardtext — damit Details nicht im allgemeinen Rahmen verloren gehen."
              body="Diese AGB bilden den allgemeinen Rahmen. Konkrete Leistungen, Honorare, Termine, Einreichschritte und Verantwortlichkeiten ergeben sich zusätzlich aus Angebot, Auftragsbestätigung oder schriftlicher Einzelvereinbarung. So bleibt klar, was beauftragt wurde, welche Unterlagen benötigt werden und wie Ergebnisse später nachvollziehbar bleiben."
              items={[
                {
                  icon: ClipboardCheck,
                  label: "Auftrag konkretisiert",
                  mobileLabel: "Auftrag konkretisiert festhalten",
                  tabletLabel: "Auftrag konkretisiert verbindlich festhalten",
                },
                {
                  icon: Euro,
                  label: "Honorar nachvollziehbar",
                  mobileLabel: "Honorar nachvollziehbar einordnen",
                  tabletLabel: "Honorar nachvollziehbar transparent abbilden",
                },
                {
                  icon: Lock,
                  label: "Vertraulichkeit geregelt",
                  mobileLabel: "Vertraulichkeit geregelt dokumentieren",
                  tabletLabel: "Vertraulichkeit eindeutig schriftlich geregelt",
                },
              ]}
              footerNote={{
                icon: Signature,
                label: "Einzelvereinbarung schlägt allgemeinen Rahmen.",
              }}
            />
          </div>

          <LegalSupportSection
            title="Rechtliches kurz klären."
            text="Wenn Sie wissen möchten, wie diese Bedingungen im konkreten Projekt angewendet werden, können Sie direkt nachfragen. Für schnelle Orientierung gibt es die FAQ, für formale Angaben das Impressum und für konkrete Rückfragen den direkten E-Mail-Kontakt."
            ctaText="Frage zu den AGB senden"
            variant="agb"
          />
    </LegalPageLayout>
  );
}
