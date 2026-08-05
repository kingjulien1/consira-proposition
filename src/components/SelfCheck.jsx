"use client";

import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FlaskConical,
  Layers3,
  MapPin,
  Puzzle,
  Sparkles,
  TimerReset,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

const signals = [
  {
    id: "austria",
    icon: MapPin,
    title: "Österreich-Bezug",
    text: "Das Unternehmen ist in Österreich steuerpflichtig.",
  },
  {
    id: "new",
    icon: Sparkles,
    title: "Neuer Lösungsweg",
    text: "Ihr Team entwickelt mehr als Routine, Wartung oder Standardanpassung.",
  },
  {
    id: "uncertainty",
    icon: Puzzle,
    title: "Unsicherheit gelöst",
    text: "Es gab keinen klaren Standardweg und mehrere mögliche Ansätze.",
  },
  {
    id: "iterations",
    icon: FlaskConical,
    title: "Tests & Iteration",
    text: "Es wurde getestet, verworfen, verbessert oder prototypisch aufgebaut.",
  },
  {
    id: "costs",
    icon: Layers3,
    title: "Kosten entstanden",
    text: "Personen, Material, externe Leistungen oder Anlagen wurden eingesetzt.",
  },
  {
    id: "past",
    icon: TimerReset,
    title: "Rückwirkend möglich",
    text: "Das Projekt lief auch in vergangenen Wirtschaftsjahren.",
  },
];

export function SelfCheck() {
  const [selected, setSelected] = useState(["new", "uncertainty"]);
  const score = selected.length;
  const progress = Math.round((score / signals.length) * 100);

  const result = useMemo(() => {
    if (score >= 5) {
      return {
        label: "Starke Grundlage",
        title: "Ihr Projekt wirkt klar prüfenswert.",
        text: "Die Kombination aus technischer Unsicherheit, Entwicklungsarbeit und Kostenbasis ist ein gutes Signal für eine konkrete Prüfung.",
      };
    }
    if (score >= 3) {
      return {
        label: "Gutes Signal",
        title: "Hier könnte Prämienpotenzial liegen.",
        text: "Ein kurzer Abgleich reicht meist, um zu erkennen, ob sich Strukturierung und Einreichung lohnen.",
      };
    }
    return {
      label: "Noch offen",
      title: "Aktuell ist das Signal noch dünn.",
      text: "Das ist nicht negativ. Oft werden relevante Entwicklungstätigkeiten intern anders benannt.",
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
    <div className="grid w-full gap-5 lg:grid-cols-[1.12fr_0.88fr]">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/75 p-4 shadow-2xl shadow-black/[0.04] sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.85),transparent_45%)]" />

        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full border border-black/10 bg-[#f7f5ef] px-3 py-1 text-xs font-medium text-black/48">
              Prämienradar
            </span>
            <span className="text-xs font-medium text-black/38">
              {score}/{signals.length} Signale
            </span>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {signals.map(({ id, icon: Icon, title, text }) => {
              const active = selected.includes(id);

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggle(id)}
                  className={`group min-h-30 rounded-[1.15rem] border p-3.5 text-left transition duration-300 ${
                    active
                      ? "border-black/18 bg-[#080709] text-white shadow-xl shadow-black/10"
                      : "border-black/10 bg-[#f7f5ef] text-[#080709] hover:border-black/18 hover:bg-white"
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                        active
                          ? "bg-white text-[#080709]"
                          : "bg-white text-black/45 group-hover:bg-[#080709] group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2.1} />
                    </div>
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border transition ${
                        active
                          ? "border-white bg-white text-[#080709]"
                          : "border-black/15 text-transparent"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={2.6} />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold tracking-[-0.035em]">
                    {title}
                  </h3>
                  <p
                    className={`mt-1.5 text-xs leading-5 ${
                      active ? "text-white/55" : "text-black/50"
                    }`}
                  >
                    {text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-5 text-[#080709] shadow-2xl shadow-black/[0.04] sm:p-6">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-black/[0.045] blur-3xl" />

        <div className="relative flex min-h-[23rem] flex-col justify-between">
          <div>
            <div className="mb-7 flex items-center justify-between">
              <ClipboardCheck className="h-5 w-5 text-black/42" />
              <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/45">
                {result.label}
              </span>
            </div>

            <div className="relative mx-auto mb-7 flex h-36 w-36 items-center justify-center rounded-full border border-black/10 bg-white shadow-inner shadow-black/[0.04] sm:h-40 sm:w-40">
              <div className="absolute inset-4 rounded-full border border-black/[0.06]" />
              <div className="absolute inset-9 rounded-full border border-black/[0.06]" />
              <motion.div
                className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#080709_var(--radar),rgba(8,7,9,0.08)_0)]"
                animate={{ "--radar": `${progress}%` }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-[0.55rem] rounded-full bg-white" />
              <div className="relative text-center">
                <p className="text-4xl font-semibold tracking-[-0.08em] sm:text-5xl">
                  {progress}
                </p>
                <p className="-mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/38">
                  Radar
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-balance sm:text-3xl">
              {result.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-black/55">
              {result.text}
            </p>
          </div>

          <a
            href="#kontakt"
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#080709] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-black"
          >
            Projekt kurz abgleichen
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </div>
  );
}
