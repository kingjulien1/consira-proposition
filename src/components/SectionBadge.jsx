"use client";

import {
  BadgeEuro,
  CheckCircle2,
  Compass,
  MessageCircle,
  Radar,
  ReceiptText,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion, useAnimationControls, useInView } from "motion/react";
import { useEffect, useRef } from "react";
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
};

const tones = {
  dark: {
    shell:
      "border-white/10 bg-white/[0.055] text-white/58 shadow-black/20",
    icon: "bg-[#7664BD]/18 text-[#d6cbff]",
  },
  light: {
    shell: "border-black/10 bg-white/75 text-black/55 shadow-black/[0.04]",
    icon: "bg-[#7664BD]/12 text-[#7664BD]",
  },
};

export function SectionBadge({
  children,
  icon = "sparkles",
  tone = "dark",
  leadingPill,
  iconPosition = "start",
  className = "",
}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const controls = useAnimationControls();
  const ready = useIntroReady();
  const inView = useInView(ref, { once: true, amount: 0.55 });
  const Icon = icons[icon] ?? Sparkles;
  const styles = tones[tone] ?? tones.dark;

  useEffect(() => {
    if (ready && inView && !hasAnimated.current) {
      hasAnimated.current = true;
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
      });
    }
  }, [controls, inView, ready]);

  return (
    <motion.p
      ref={ref}
      className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3 text-[0.78rem] font-medium tracking-[-0.015em] shadow-lg backdrop-blur ${styles.shell} ${className}`}
      initial={{ opacity: 0, x: -18 }}
      animate={controls}
    >
      {leadingPill ? (
        <span className="rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.01em] text-[#080709]">
          {leadingPill}
        </span>
      ) : null}
      {iconPosition === "start" ? (
        <span className={`flex h-5.5 w-5.5 items-center justify-center rounded-full ${styles.icon}`}>
          <Icon className="h-3.5 w-3.5" strokeWidth={2.15} />
        </span>
      ) : null}
      <span>{children}</span>
      {iconPosition === "end" ? (
        <span className={`ml-0.5 flex h-5.5 w-5.5 items-center justify-center rounded-full ${styles.icon}`}>
          <Icon className="h-3.5 w-3.5" strokeWidth={2.15} />
        </span>
      ) : null}
    </motion.p>
  );
}
