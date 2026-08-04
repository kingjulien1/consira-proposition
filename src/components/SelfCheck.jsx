"use client";

import { ArrowRight, Check, FlaskConical, MapPin, Puzzle, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const signals = [
  {
    id: "austria",
    icon: MapPin,
    title: "Österreich-Bezug",
    text: "Ihr Unternehmen ist in Österreich steuerpflichtig.",
  },
  {
    id: "new",
    icon: Sparkles,
    title: "Neuer Lösungsweg",
    text: "Sie entwickeln mehr als Routine, Wartung oder Standardanpassung.",
  },
  {
    id: "uncertainty",
    icon: Puzzle,
    title: "Technische Unsicherheit",
    text: "Es gab mehrere mögliche Wege statt einer offensichtlichen Lösung.",
  },
  {
    id: "tests",
    icon: FlaskConical,
    title: "Tests & Iteration",
    text: "Ihr Team hat ausprobiert, verworfen, verbessert und dokumentiert.",
  },
];

export function SelfCheck() {
  const [selected, setSelected] = useState(["austria", "new"]);
  const score = selected.length;

  const result = useMemo(() => {
    if (score >= 4) {
      return {
        label: "Starkes Signal",
        title: "Hier steckt sehr wahrscheinlich Prämienpotenzial.",
        text: "Der nächste sinnvolle Schritt ist ein kurzer Abgleich Ihrer konkreten Projekte, Kosten und Dokumentation.",
      };
    }
    if (score >= 2) {
      return {
        label: "Prüfenswert",
        title: "Es gibt erste Hinweise auf Potenzial.",
        text: "Ein 15–20 Minuten Check reicht meist, um zu erkennen, ob sich eine vertiefte Prüfung lohnt.",
      };
    }
    return {
      label: "Noch unklar",
      title: "Das Signal ist aktuell schwach.",
      text: "Das muss nichts heißen. Oft werden relevante Entwicklungstätigkeiten intern anders bezeichnet.",
    };
  }, [score]);

  function toggle(id) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.78fr]">
      <div className="grid gap-3 sm:grid-cols-2">
        {signals.map(({ id, icon: Icon, title, text }) => {
          const active = selected.includes(id);

          return (
            <button
              key={id}
              type="button"
              onClick={() => toggle(id)}
              className={`group min-h-48 rounded-[1.75rem] border p-5 text-left transition duration-300 ${
                active
                  ? "border-cyan-300/45 bg-cyan-300/[0.13] shadow-2xl shadow-cyan-500/10"
                  : "border-white/10 bg-white/[0.045] hover:border-white/20 hover:bg-white/[0.07]"
              }`}
            >
              <div className="mb-10 flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                    active
                      ? "bg-cyan-200 text-[#061019]"
                      : "bg-white/10 text-white/48 group-hover:bg-white group-hover:text-[#061019]"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.1} />
                </div>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border transition ${
                    active
                      ? "border-cyan-200 bg-cyan-200 text-[#061019]"
                      : "border-white/15 text-transparent"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.04em]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.2),transparent_34%),rgba(255,255,255,0.055)] p-6">
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative flex h-full min-h-96 flex-col justify-between">
          <div>
            <div className="mb-10 flex items-center justify-between">
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100/70">
                {result.label}
              </span>
              <span className="text-xs text-white/35">{score}/4 Signale</span>
            </div>

            <div className="relative mb-10 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-200 transition-all duration-500"
                style={{ width: `${(score / signals.length) * 100}%` }}
              />
            </div>

            <p className="text-4xl font-semibold tracking-[-0.06em] text-balance">
              {result.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/52">{result.text}</p>
          </div>

          <a
            href="#kontakt"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-cyan-100 px-6 py-3 text-sm font-semibold text-[#061019] transition hover:scale-[1.02] hover:bg-white"
          >
            Projekt kurz abgleichen
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </div>
  );
}
