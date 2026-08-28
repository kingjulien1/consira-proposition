"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";
import { resolveSmartStaggerDelay } from "@/components/smartStagger";
import { useResponsiveDelay } from "@/components/useResponsiveDelay";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  mobileDelay,
  mobileDelayQuery = "(max-width: 767px)",
  duration = 1.25,
  amount = 0.42,
  mobileAmount,
  mobileAmountQuery = "(max-width: 767px)",
  margin = "0px",
  mobileMargin,
  mobileMarginQuery = "(max-width: 767px)",
  distance = 34,
  mobileDistance,
  mobileDistanceQuery = "(max-width: 767px)",
  xDistance = 0,
  mobileXDistance,
  mobileXDistanceQuery = "(max-width: 767px)",
  disableBlur = false,
  onRevealStart,
  onRevealComplete,
  smartStaggerKey,
  style,
  onAnimationComplete,
  ...props
}) {
  const ref = useRef(null);
  const hasRevealed = useRef(false);
  const frameRef = useRef(null);
  const hydrationFrameRef = useRef(null);
  const revealStartTimeoutRef = useRef(null);
  const onRevealStartRef = useRef(onRevealStart);
  const [revealed, setRevealed] = useState(false);
  const [responsiveReady, setResponsiveReady] = useState(false);
  const [resolvedDelay, setResolvedDelay] = useState(delay);
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
  const effectiveDistance = useResponsiveDelay(
    mobileDistance ?? distance,
    distance,
    mobileDistanceQuery
  );
  const effectiveAmount = useResponsiveDelay(
    mobileAmount ?? amount,
    amount,
    mobileAmountQuery
  );
  const effectiveMargin = useResponsiveDelay(
    mobileMargin ?? margin,
    margin,
    mobileMarginQuery
  );
  const ready = useIntroReady();
  const inView = useInView(ref, {
    once: true,
    amount: effectiveAmount,
    margin: effectiveMargin,
  });
  const hiddenState = useMemo(
    () => ({
      opacity: 0,
      x: effectiveXDistance,
      y: effectiveDistance,
      ...(disableBlur ? {} : { filter: "blur(8px)" }),
    }),
    [disableBlur, effectiveDistance, effectiveXDistance]
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
    onRevealStartRef.current = onRevealStart;
  }, [onRevealStart]);

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
      const nextResolvedDelay = resolveSmartStaggerDelay(smartStaggerKey, effectiveDelay);
      setResolvedDelay(nextResolvedDelay);
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        setRevealed(true);
        revealStartTimeoutRef.current = window.setTimeout(() => {
          revealStartTimeoutRef.current = null;
          onRevealStartRef.current?.();
        }, nextResolvedDelay * 1000);
      });
    }
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (revealStartTimeoutRef.current) {
        window.clearTimeout(revealStartTimeoutRef.current);
        revealStartTimeoutRef.current = null;
      }
    };
  }, [effectiveDelay, inView, ready, responsiveReady, smartStaggerKey]);

  return (
    <motion.div
      ref={ref}
      className={className}
      data-revealed={revealed ? "true" : "false"}
      initial={hiddenState}
      animate={revealed ? visibleState : hiddenState}
      transition={{ duration, delay: resolvedDelay, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={(definition) => {
        onAnimationComplete?.(definition);
        if (revealed) {
          onRevealComplete?.();
        }
      }}
      style={{
        "--scroll-reveal-delay": `${resolvedDelay}s`,
        "--scroll-reveal-duration": `${duration}s`,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
