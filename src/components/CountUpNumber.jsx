"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";

const formatter = new Intl.NumberFormat("de-AT");

export function CountUpNumber({
  value,
  delay = 1.45,
  duration = 1.7,
  className = "",
}) {
  const ref = useRef(null);
  const ready = useIntroReady();
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    formatter.format(Math.round(latest)),
  );

  useEffect(() => {
    if (!ready || !inView) return;

    const controls = animate(count, value, {
      delay,
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [count, delay, duration, inView, ready, value]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
