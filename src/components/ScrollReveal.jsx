"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  mobileDelay,
  mobileDelayQuery = "(max-width: 767px)",
  duration = 1.25,
  amount = 0.42,
  distance = 34,
  xDistance = 0,
  mobileXDistance,
  mobileXDistanceQuery = "(max-width: 767px)",
  disableBlur = false,
  onRevealComplete,
  style,
  onAnimationComplete,
  ...props
}) {
  const ref = useRef(null);
  const hasRevealed = useRef(false);
  const frameRef = useRef(null);
  const hydrationFrameRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [responsiveReady, setResponsiveReady] = useState(false);
  const effectiveDelay = useResponsiveDelay(
    mobileDelay ?? delay,
    delay,
    mobileDelayQuery
  );
  const effectiveXDistance = useResponsiveDelay(
    mobileXDistance ?? xDistance,
    xDistance,
    mobileXDistanceQuery
  );
  const ready = useIntroReady();
  const inView = useInView(ref, { once: true, amount });
  const hiddenState = useMemo(
    () => ({
      opacity: 0,
      x: effectiveXDistance,
      y: distance,
      ...(disableBlur ? {} : { filter: "blur(8px)" }),
    }),
    [disableBlur, distance, effectiveXDistance]
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
    hydrationFrameRef.current = window.requestAnimationFrame(() => {
      hydrationFrameRef.current = null;
      setResponsiveReady(true);
    });

    return () => {
      if (hydrationFrameRef.current) {
        window.cancelAnimationFrame(hydrationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (
      ready &&
      responsiveReady &&
      inView &&
      !hasRevealed.current &&
      !frameRef.current
    ) {
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
  }, [inView, ready, responsiveReady]);

  return (
    <motion.div
      ref={ref}
      className={className}
      data-revealed={revealed ? "true" : "false"}
      initial={hiddenState}
      animate={revealed ? visibleState : hiddenState}
      transition={{ duration, delay: effectiveDelay, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={(definition) => {
        onAnimationComplete?.(definition);
        if (revealed) {
          onRevealComplete?.();
        }
      }}
      style={{
        "--scroll-reveal-delay": `${effectiveDelay}s`,
        "--scroll-reveal-duration": `${duration}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
