"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const HeroParallaxContext = createContext(null);

export function HeroParallaxSection({ children, className = "" }) {
  const ref = useRef(null);
  const [mobileParallax, setMobileParallax] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, mobileParallax ? 230 : 96]
  );
  const y = useSpring(rawY, {
    stiffness: mobileParallax ? 125 : 150,
    damping: mobileParallax ? 26 : 32,
    mass: mobileParallax ? 0.42 : 0.35,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    function updateMatch() {
      setMobileParallax(mediaQuery.matches);
    }

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

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
