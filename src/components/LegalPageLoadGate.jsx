"use client";

import { useEffect, useState } from "react";
import { LegalPageLoader, LegalPageLoadingBackdrop } from "@/components/LegalPageLoader";

export function LegalPageLoadGate() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;
    let frameA;
    let frameB;

    const finish = () => {
      frameA = window.requestAnimationFrame(() => {
        frameB = window.requestAnimationFrame(() => {
          timeoutId = window.setTimeout(() => setVisible(false), 120);
        });
      });
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameA);
      window.cancelAnimationFrame(frameB);
    };
  }, []);

  return (
    <div
      aria-hidden={visible ? undefined : "true"}
      className={`legal-page-load-gate ${visible ? "is-visible" : "is-hidden"}`}
    >
      <LegalPageLoadingBackdrop />
      <LegalPageLoader />
    </div>
  );
}
