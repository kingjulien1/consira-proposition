"use client";

import { motion } from "motion/react";

export function IridescenceVeil() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 z-0 bg-[#080709]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.2,
        duration: 5.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
