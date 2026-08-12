"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useIntroReadyControls } from "@/components/IntroReadyProvider";

const INTRO_SESSION_KEY = "consira-intro-played";

export function IntroLoader() {
  const { setReady } = useIntroReadyControls();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    let frame;
    let timeout;
    const hasHash = window.location.hash.length > 0;
    let alreadyPlayed = true;

    try {
      alreadyPlayed = window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true";
    } catch {
      alreadyPlayed = true;
    }

    if (hasHash || alreadyPlayed) {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
      setReady(true);
      return undefined;
    }

    frame = window.requestAnimationFrame(() => {
      setReady(false);
      setShowLoader(true);
      html.classList.add("overflow-hidden");
      body.classList.add("overflow-hidden");

      timeout = window.setTimeout(() => {
        try {
          window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
        } catch {
          // Storage can be unavailable in some browser modes. Rendering must continue.
        }

        html.classList.remove("overflow-hidden");
        body.classList.remove("overflow-hidden");
        setReady(true);
        setShowLoader(false);
      }, 2300);
    });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      if (timeout) {
        window.clearTimeout(timeout);
      }
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    };
  }, [setReady]);

  if (!showLoader) return null;

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
