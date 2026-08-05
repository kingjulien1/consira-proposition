"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.42,
  ...props
}) {
  const ref = useRef(null);
  const ready = useIntroReady();
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      animate={
        ready && inView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: 34,
              filter: "blur(8px)",
            }
      }
      transition={{ duration: 1.25, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
