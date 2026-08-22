"use client";

import {
  BadgeEuro,
  CheckCircle2,
  Compass,
  MessageCircle,
  Radar,
  ReceiptText,
  Sparkles,
  Unplug,
  Workflow,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";

const icons = {
  sparkles: Sparkles,
  euro: BadgeEuro,
  receipt: ReceiptText,
  compass: Compass,
  workflow: Workflow,
  check: CheckCircle2,
  radar: Radar,
  message: MessageCircle,
  unplug: Unplug,
};

const tones = {
  dark: {
    shell:
      "border-[#8ea7ff]/26 bg-[#8ea7ff]/[0.075] text-[#b9c8ff] shadow-black/20",
    overlay: "bg-[#6d7cff]/28",
    icon: "bg-[#8ea7ff]/16 text-[#b9c8ff]",
    hover:
      "hover:border-[#b9c8ff]/58 hover:shadow-[0_16px_46px_rgba(142,167,255,0.2),0_0_0_5px_rgba(109,124,255,0.1),0_0_34px_rgba(168,85,247,0.12)]",
    hoverOverlay: "bg-[#8ea7ff]/14",
    shine:
      "bg-[linear-gradient(110deg,transparent_18%,rgba(255,255,255,0.42)_46%,rgba(142,167,255,0.28)_54%,rgba(168,85,247,0.16)_62%,transparent_78%)]",
    pillHover: "group-hover/badge:bg-[#b9c8ff]",
  },
  light: {
    shell: "border-[#6d7cff]/22 bg-[#eef2ff]/72 text-[#41528f] shadow-black/[0.04]",
    overlay: "bg-[#8ea7ff]/28",
    icon: "bg-[#6d7cff]/12 text-[#41528f]",
    hover:
      "hover:border-[#6d7cff]/42 hover:shadow-[0_16px_46px_rgba(109,124,255,0.15),0_0_0_5px_rgba(142,167,255,0.12),0_0_30px_rgba(168,85,247,0.08)]",
    hoverOverlay: "bg-[#8ea7ff]/18",
    shine:
      "bg-[linear-gradient(110deg,transparent_18%,rgba(255,255,255,0.56)_46%,rgba(142,167,255,0.26)_54%,rgba(168,85,247,0.12)_62%,transparent_78%)]",
    pillHover: "group-hover/badge:bg-[#dbe5ff]",
  },
  neutral: {
    shell: "border-white/20 bg-white/[0.12] text-white/72 shadow-black/10",
    overlay: "bg-white/[0.08]",
    icon: "bg-white/14 text-white/78",
    hover:
      "hover:border-white/48 hover:shadow-[0_16px_46px_rgba(255,255,255,0.16),0_0_0_5px_rgba(255,255,255,0.08),0_0_30px_rgba(34,211,238,0.1)]",
    hoverOverlay: "bg-white/[0.16]",
    shine:
      "bg-[linear-gradient(110deg,transparent_18%,rgba(255,255,255,0.48)_46%,rgba(34,211,238,0.16)_54%,transparent_78%)]",
    pillHover: "group-hover/badge:bg-white",
  },
};

export function SectionBadge({
  children,
  href,
  icon = "sparkles",
  tone = "dark",
  leadingPill,
  iconPosition = "start",
  className = "",
  delay = 0.14,
}) {
  const ref = useRef(null);
  const ready = useIntroReady();
  const inView = useInView(ref, {
    once: true,
    amount: 0.42,
    margin: "0px 0px -6% 0px",
  });
  const Icon = icons[icon] ?? Sparkles;
  const styles = tones[tone] ?? tones.dark;
  const isCentered = className.includes("mx-auto");

  const Tag = href ? motion.a : motion.p;
  const hiddenState = isCentered
    ? { opacity: 0, y: 18 }
    : { opacity: 0, x: -22 };
  const visibleState = { opacity: 1, x: 0, y: 0 };

  return (
    <Tag
      ref={ref}
      href={href}
      className={`group/badge relative mb-4 inline-flex w-fit items-center gap-1.5 overflow-hidden rounded-full border py-1 pl-1 pr-2.5 text-[0.7rem] font-medium tracking-[-0.01em] shadow-lg backdrop-blur transition-[border-color,background-color,box-shadow,color] duration-300 sm:mb-5 sm:gap-2 sm:py-1.25 sm:pl-1.25 sm:pr-3 sm:text-[0.76rem] ${styles.shell} ${styles.hover} ${className}`}
      initial={hiddenState}
      animate={ready && inView ? visibleState : hiddenState}
      whileHover={{ y: -2, scale: 1.045 }}
      transition={{
        opacity: { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] },
        x: { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] },
        y: { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-100 ${styles.overlay}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 translate-x-[-120%] transition-transform duration-700 ease-out group-hover/badge:translate-x-[120%] ${styles.shine}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100 ${styles.hoverOverlay}`}
      />
      {leadingPill ? (
        <span className={`relative rounded-full bg-white px-2 py-0.75 text-[0.62rem] font-semibold tracking-[0.01em] text-[#080709] transition duration-300 sm:px-2.5 sm:py-1 sm:text-[0.67rem] ${styles.pillHover}`}>
          {leadingPill}
        </span>
      ) : null}
      {iconPosition === "start" ? (
        <span className={`relative flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover/badge:rotate-12 group-hover/badge:scale-110 sm:h-5.5 sm:w-5.5 ${styles.icon}`}>
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.15} />
        </span>
      ) : null}
      <span className="relative">{children}</span>
      {iconPosition === "end" ? (
        <span className={`relative ml-0.5 flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover/badge:rotate-12 group-hover/badge:scale-110 sm:h-5.5 sm:w-5.5 ${styles.icon}`}>
          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2.15} />
        </span>
      ) : null}
    </Tag>
  );
}
