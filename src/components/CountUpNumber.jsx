"use client";

import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";

function formatNumber(value) {
  return String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function easeOutExpo(progress) {
  return progress === 1 ? 1 : 1 - 2 ** (-10 * progress);
}

export function CountUpNumber({
  value,
  delay = 0,
  duration = 2.8,
  className = "",
}) {
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const frameRef = useRef(null);
  const ready = useIntroReady();
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);
  const finalValue = formatNumber(value);
  const currentValue = formatNumber(displayValue);

  useEffect(() => {
    if (!ready || !inView) return;

    function startCount() {
      const start = performance.now();
      const durationMs = duration * 1000;

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = easeOutExpo(progress);

        setDisplayValue(Math.round(value * eased));

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(update);
        }
      }

      frameRef.current = window.requestAnimationFrame(update);
    }

    if (delay > 0) {
      timeoutRef.current = window.setTimeout(startCount, delay * 1000);
    } else {
      startCount();
    }

    return () => {
      window.clearTimeout(timeoutRef.current);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, [delay, duration, inView, ready, value]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <span className="invisible" aria-hidden="true">
        {finalValue}
      </span>
      <span className="absolute inset-0">{currentValue}</span>
    </span>
  );
}
