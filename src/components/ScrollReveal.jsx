"use client";

import { motion, useAnimationControls, useInView } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.42,
  distance = 34,
  xDistance = 0,
  disableBlur = false,
  ...props
}) {
  const ref = useRef(null);
  const hasRevealed = useRef(false);
  const controls = useAnimationControls();
  const ready = useIntroReady();
  const inView = useInView(ref, { once: true, amount });
  const hiddenState = useMemo(
    () => ({
      opacity: 0,
      x: xDistance,
      y: distance,
      ...(disableBlur ? {} : { filter: "blur(8px)" }),
    }),
    [disableBlur, distance, xDistance]
  );
  const visibleState = useMemo(
    () => ({
      opacity: 1,
      x: 0,
      y: 0,
      ...(disableBlur ? {} : { filter: "blur(0px)" }),
    }),
    [disableBlur]
  );

  useEffect(() => {
    if (ready && inView && !hasRevealed.current) {
      hasRevealed.current = true;
      controls.start({
        ...visibleState,
        transition: { duration: 1.25, delay, ease: [0.16, 1, 0.3, 1] },
      });
    }
  }, [controls, delay, inView, ready, visibleState]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hiddenState}
      animate={controls}
      {...props}
    >
      {children}
    </motion.div>
  );
}
