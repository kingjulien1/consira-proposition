"use client";

import { motion, useMotionValue, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function SideHeadingMotion({ children, className = "" }) {
  const ref = useRef(null);
  const maxProgressRef = useRef(-1);
  const startYRef = useRef(-86);
  const [largeScreen, setLargeScreen] = useState(false);
  const targetY = useMotionValue(0);
  const y = useSpring(targetY, {
    stiffness: 260,
    damping: 34,
    mass: 0.45,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 82%", "start 38%"],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    function updateMatch() {
      setLargeScreen(mediaQuery.matches);
    }

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  useEffect(() => {
    function applyProgress(latest) {
      if (!largeScreen) {
        startYRef.current = 0;
        targetY.set(0);
        return;
      }

      if (maxProgressRef.current < 0) {
        startYRef.current = -86;
        targetY.set(startYRef.current);
      }

      if (latest <= maxProgressRef.current) return;

      maxProgressRef.current = latest;
      const progress = Math.min(Math.max(latest, 0), 1);
      targetY.set(startYRef.current + progress * Math.abs(startYRef.current));
    }

    applyProgress(scrollYProgress.get());
    const unsubscribe = scrollYProgress.on("change", applyProgress);

    return unsubscribe;
  }, [largeScreen, scrollYProgress, targetY]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
