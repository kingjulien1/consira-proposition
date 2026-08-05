"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { useIntroReadyControls } from "@/components/IntroReadyProvider";

export function IntroLoader() {
  const { setReady } = useIntroReadyControls();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    setReady(false);
    html.classList.add("overflow-hidden");
    body.classList.add("overflow-hidden");

    const timeout = window.setTimeout(() => {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
      setReady(true);
    }, 2300);

    return () => {
      window.clearTimeout(timeout);
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    };
  }, [setReady]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.05, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: "none" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white">
        Consira
      </p>
    </motion.div>
  );
}
