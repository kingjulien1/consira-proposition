"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function MobileSubtleParallax({
  children,
  className = "",
  distance = 22,
}) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, distance]);
  const y = useSpring(rawY, {
    stiffness: 150,
    damping: 34,
    mass: 0.34,
    restDelta: 0.001,
    restSpeed: 0.001,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function update() {
      setEnabled(mediaQuery.matches);
    }

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: enabled ? y : 0 }}
    >
      {children}
    </motion.div>
  );
}
