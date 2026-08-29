"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

export function MobileSubtleParallax({
  children,
  className = "",
  distance = 22,
  mobileDistance,
  mobileQuery = "(max-width: 1023px)",
  stiffness = 135,
  damping = 32,
  mass = 0.38,
  mobileStiffness,
  mobileDamping,
  mobileMass,
  offset = ["start end", "end start"],
  accelerate = false,
  accelerationMid = 0.58,
  accelerationMidValue = 0.24,
  accelerationPeak = 0.78,
}) {
  const ref = useRef(null);
  const [mobileMatch, setMobileMatch] = useState(false);
  const effectiveDistance = mobileMatch ? mobileDistance ?? distance : 0;
  const effectiveStiffness = mobileMatch && mobileStiffness != null ? mobileStiffness : stiffness;
  const effectiveDamping = mobileMatch && mobileDamping != null ? mobileDamping : damping;
  const effectiveMass = mobileMatch && mobileMass != null ? mobileMass : mass;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  const inputRange = useMemo(
    () => (accelerate ? [0, accelerationMid, accelerationPeak, 1] : [0, 1]),
    [accelerate, accelerationMid, accelerationPeak]
  );
  const outputRange = useMemo(
    () =>
      accelerate
        ? [
            0,
            effectiveDistance * accelerationMidValue,
            effectiveDistance * 0.62,
            effectiveDistance,
          ]
        : [0, effectiveDistance],
    [accelerate, accelerationMidValue, effectiveDistance]
  );
  const rawY = useTransform(scrollYProgress, inputRange, outputRange);
  const y = useSpring(rawY, {
    stiffness: effectiveStiffness,
    damping: effectiveDamping,
    mass: effectiveMass,
    restDelta: 0.001,
    restSpeed: 0.001,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobileQuery);

    function updateMatch() {
      setMobileMatch(mediaQuery.matches);
    }

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [mobileQuery]);

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
