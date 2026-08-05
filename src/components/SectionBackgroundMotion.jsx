"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const themes = {
  dark: {
    glowA: "rgba(255,255,255,0.1)",
    glowB: "rgba(255,255,255,0.08)",
    line: "rgba(255,255,255,0.72)",
    veil: "rgba(3,3,4,0.72)",
  },
  warm: {
    glowA: "rgba(255,255,255,0.9)",
    glowB: "rgba(198,38,22,0.13)",
    line: "rgba(8,7,9,0.36)",
    veil: "rgba(247,245,239,0.86)",
  },
  slate: {
    glowA: "rgba(255,255,255,0.1)",
    glowB: "rgba(80,96,128,0.24)",
    line: "rgba(255,255,255,0.78)",
    veil: "rgba(5,5,6,0.7)",
  },
  blue: {
    glowA: "rgba(255,255,255,0.92)",
    glowB: "rgba(80,130,255,0.18)",
    line: "rgba(7,16,24,0.28)",
    veil: "rgba(244,248,255,0.84)",
  },
  ember: {
    glowA: "rgba(251,146,60,0.28)",
    glowB: "rgba(234,88,12,0.2)",
    line: "rgba(255,237,213,0.52)",
    veil: "rgba(21,16,13,0.74)",
  },
  cyan: {
    glowA: "rgba(34,211,238,0.2)",
    glowB: "rgba(59,130,246,0.22)",
    line: "rgba(103,232,249,0.58)",
    veil: "rgba(6,16,25,0.74)",
  },
};

export function SectionBackgroundMotion({
  theme = "dark",
  grid = false,
  secondaryGlow = true,
}) {
  const ref = useRef(null);
  const colors = themes[theme] ?? themes.dark;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [72, 0]);
  const y = useSpring(rawY, {
    stiffness: 42,
    damping: 24,
    mass: 0.9,
  });
  const baseBackground = secondaryGlow
    ? `radial-gradient(circle at 18% 14%, ${colors.glowA}, transparent 30%), radial-gradient(circle at 82% 74%, ${colors.glowB}, transparent 36%)`
    : `radial-gradient(circle at 18% 14%, ${colors.glowA}, transparent 30%)`;
  const animatedBackground = secondaryGlow
    ? `radial-gradient(circle at 22% 24%, ${colors.glowA}, transparent 32%), radial-gradient(circle at 78% 72%, ${colors.glowB}, transparent 38%)`
    : `radial-gradient(circle at 22% 24%, ${colors.glowA}, transparent 32%)`;

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <motion.div
        suppressHydrationWarning
        style={{ y }}
        className="absolute -inset-x-8 -inset-y-20 will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: baseBackground,
          }}
        />

        <motion.div
          initial={false}
          whileInView={{
            opacity: [0.12, 0.85, 0.58],
            scale: [0.78, 1.1, 1],
            x: ["-10%", "4%", "0%"],
          }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundImage: animatedBackground,
          }}
          className="absolute inset-0 will-change-transform"
        />

        {secondaryGlow ? (
          <motion.div
            initial={false}
            whileInView={{
              opacity: [0, 0.62, 0.24],
              x: ["-28%", "10%"],
              y: ["12%", "-8%"],
              scale: [0.78, 1.08],
            }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage: `radial-gradient(circle, ${colors.glowB}, transparent 64%)`,
            }}
            className="absolute left-[5%] top-[18%] h-[42rem] w-[42rem] rounded-full blur-3xl will-change-transform"
          />
        ) : null}

        <motion.div
          initial={false}
          whileInView={{ opacity: [0, 0.48, 0], x: ["-90%", "90%"] }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -inset-y-24 left-1/2 w-[34rem] -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/18 to-transparent blur-xl will-change-transform"
        />

        {grid ? (
          <motion.div
            initial={false}
            whileInView={{ opacity: [0, 0.1, 0.045], scale: [1.08, 1] }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
            }}
            className="absolute inset-0 opacity-[0.035] will-change-transform [background-size:64px_64px]"
          />
        ) : null}
      </motion.div>

      <motion.div
        initial={false}
        whileInView={{ opacity: [0.55, 0] }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          backgroundColor: colors.veil,
        }}
        className="absolute inset-0 opacity-0"
      />
    </div>
  );
}
