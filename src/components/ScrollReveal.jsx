"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 1.25,
  amount = 0.42,
  distance = 34,
  xDistance = 0,
  disableBlur = false,
  ...props
}) {
  const ref = useRef(null);
  const hasRevealed = useRef(false);
  const frameRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
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
    if (ready && inView && !hasRevealed.current && !frameRef.current) {
      hasRevealed.current = true;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        setRevealed(true);
      });
    }
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, ready]);

  return (
    <motion.div
      ref={ref}
      className={className}
      data-revealed={revealed ? "true" : "false"}
      initial={hiddenState}
      animate={revealed ? visibleState : hiddenState}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
