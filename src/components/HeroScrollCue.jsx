"use client";

import { ChevronDown } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export function HeroScrollCue() {
  const { scrollY } = useScroll();
  const rawOpacity = useTransform(scrollY, [0, 90], [1, 0]);
  const rawY = useTransform(scrollY, [0, 90], [0, 14]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 180,
    damping: 28,
    mass: 0.35,
  });
  const y = useSpring(rawY, {
    stiffness: 180,
    damping: 28,
    mass: 0.35,
  });

  return (
    <motion.div
      className="relative z-10 mx-auto flex flex-col items-center gap-2 pb-1 text-white/28"
      style={{ opacity, y }}
    >
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.34em]">
        Scroll
      </p>
      <motion.div
        aria-hidden="true"
        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/16 bg-white/[0.035] backdrop-blur"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
      >
        <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.1} />
      </motion.div>
    </motion.div>
  );
}
