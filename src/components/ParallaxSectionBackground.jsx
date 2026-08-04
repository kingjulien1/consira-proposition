"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ParallaxSectionBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const slowY = useTransform(scrollYProgress, [0, 1], [-180, 140]);
  const fastY = useTransform(scrollYProgress, [0, 1], [220, -180]);
  const gridY = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.18, 1], [0.015, 0.08, 0.045]);
  const topVeilOpacity = useTransform(scrollYProgress, [0, 0.16, 0.34], [0, 0.78, 0]);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: slowY }}
        className="absolute -inset-x-24 -top-48 h-[42rem] will-change-transform bg-[radial-gradient(circle_at_76%_28%,rgba(255,255,255,0.13),transparent_31%),radial-gradient(circle_at_22%_70%,rgba(80,96,128,0.34),transparent_34%)]"
      />
      <motion.div
        style={{ y: fastY }}
        className="absolute bottom-[-20rem] left-1/2 h-[44rem] w-[64rem] -translate-x-1/2 rounded-full will-change-transform bg-[radial-gradient(circle,rgba(16,185,129,0.2),transparent_62%)] blur-2xl"
      />
      <motion.div
        style={{ y: gridY, opacity: gridOpacity }}
        className="absolute -inset-24 will-change-transform [background-image:linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <motion.div
        style={{ opacity: topVeilOpacity }}
        className="absolute inset-x-0 top-0 h-[24vh] bg-gradient-to-b from-[#030304] via-[#030304]/85 to-transparent"
      />
    </div>
  );
}
