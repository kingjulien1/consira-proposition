"use client";

import { motion } from "motion/react";

export function IridescenceVeil() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] bg-[#080709]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 1.45,
        duration: 5.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
