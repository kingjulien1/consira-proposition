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
    <motion.a
      href="#forschungspraemie"
      aria-label="Zur Forschungsprämie Sektion scrollen"
      className="group/scroll relative z-10 mx-auto hidden flex-col items-center gap-1 pb-1 text-white/28 outline-none sm:flex"
      style={{ opacity, y }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0d49a]/0 blur-2xl transition duration-500 group-hover/scroll:bg-[#f0d49a]/20 group-focus-visible/scroll:bg-[#f0d49a]/20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-4 h-px w-14 scale-x-0 bg-gradient-to-r from-transparent via-[#f0d49a]/80 to-transparent transition duration-500 group-hover/scroll:scale-x-100 group-focus-visible/scroll:scale-x-100"
      />
      <p className="relative text-[0.65rem] font-medium uppercase tracking-[0.34em] transition duration-500 group-hover/scroll:-translate-y-0.5 group-hover/scroll:text-[#f0d49a]/85 group-hover/scroll:tracking-[0.44em] group-focus-visible/scroll:text-[#f0d49a]/85">
        Scroll
      </p>
      <motion.span
        className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/16 bg-white/[0.035] backdrop-blur transition duration-500 group-hover/scroll:border-[#f0d49a]/65 group-hover/scroll:bg-[#f0d49a]/12 group-hover/scroll:text-[#f0d49a] group-hover/scroll:shadow-[0_0_28px_rgba(240,212,154,0.28)] group-focus-visible/scroll:border-[#f0d49a]/65 group-focus-visible/scroll:text-[#f0d49a]"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 0.82,
          repeat: Infinity,
          ease: [0.34, 0, 0.2, 1],
        }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f0d49a]/0 via-[#f0d49a]/0 to-[#f0d49a]/0 transition duration-500 group-hover/scroll:from-[#f0d49a]/22 group-hover/scroll:via-white/5 group-hover/scroll:to-transparent"
        />
        <ChevronDown className="relative h-3.5 w-3.5 transition duration-500 group-hover/scroll:scale-125" strokeWidth={2.1} />
      </motion.span>
    </motion.a>
  );
}
