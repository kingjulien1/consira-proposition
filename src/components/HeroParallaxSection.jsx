"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useRef } from "react";

const HeroParallaxContext = createContext(null);

export function HeroParallaxSection({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 96]);
  const y = useSpring(rawY, {
    stiffness: 150,
    damping: 32,
    mass: 0.35,
  });

  return (
    <HeroParallaxContext.Provider value={y}>
      <section ref={ref} className={className}>
        {children}
      </section>
    </HeroParallaxContext.Provider>
  );
}

export function HeroParallaxContent({ children, className = "" }) {
  const y = useContext(HeroParallaxContext);

  return (
    <motion.div className={className} style={y ? { y } : undefined}>
      {children}
    </motion.div>
  );
}
