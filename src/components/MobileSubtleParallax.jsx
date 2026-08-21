"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function MobileSubtleParallax({
  children,
  className = "",
  distance = 22,
  mobileDistance,
  mobileQuery = "(max-width: 639px)",
  stiffness = 135,
  damping = 32,
  mass = 0.38,
  mobileStiffness,
  mobileDamping,
  mobileMass,
}) {
  const ref = useRef(null);
  const [mobileMatch, setMobileMatch] = useState(false);
  const effectiveDistance = mobileMatch && mobileDistance != null ? mobileDistance : distance;
  const effectiveStiffness = mobileMatch && mobileStiffness != null ? mobileStiffness : stiffness;
  const effectiveDamping = mobileMatch && mobileDamping != null ? mobileDamping : damping;
  const effectiveMass = mobileMatch && mobileMass != null ? mobileMass : mass;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, effectiveDistance]);
  const y = useSpring(rawY, {
    stiffness: effectiveStiffness,
    damping: effectiveDamping,
    mass: effectiveMass,
    restDelta: 0.001,
    restSpeed: 0.001,
  });

  useEffect(() => {
    if (mobileDistance == null && mobileStiffness == null && mobileDamping == null && mobileMass == null) {
      return;
    }

    const mediaQuery = window.matchMedia(mobileQuery);

    function updateMatch() {
      setMobileMatch(mediaQuery.matches);
    }

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [mobileDamping, mobileDistance, mobileMass, mobileQuery, mobileStiffness]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}
