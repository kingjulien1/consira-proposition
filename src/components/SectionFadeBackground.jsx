"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function SectionFadeBackground({
  color = "#000000",
  start = 0,
  end = 0.5,
  mode = "enter",
  reverse = false,
  from = 0,
  to = 1,
  className = "",
}) {
  const ref = useRef(null);
  const startOffset = `${Math.round((1 - start) * 100)}%`;
  const endOffset = `${Math.round((1 - end) * 100)}%`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:
      mode === "inside"
        ? ["start start", "center start"]
        : [`start ${startOffset}`, `start ${endOffset}`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], reverse ? [to, from] : [from, to]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 ${className}`}
      style={{ backgroundColor: color, opacity }}
    />
  );
}
