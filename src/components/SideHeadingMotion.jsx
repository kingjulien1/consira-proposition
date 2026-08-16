"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function SideHeadingMotion({
  children,
  className = "",
  desktopYStart = -92,
  desktopYEnd = 0,
}) {
  const ref = useRef(null);
  const [enableMotion, setEnableMotion] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 82%", "start 38%"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [desktopYStart, desktopYEnd]);
  const y = useSpring(rawY, {
    stiffness: 190,
    damping: 32,
    mass: 0.42,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    function updateMotionPreference() {
      setEnableMotion(mediaQuery.matches);
    }

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <motion.div ref={ref} className={className} style={{ y: enableMotion ? y : 0 }}>
      {children}
    </motion.div>
  );
}
