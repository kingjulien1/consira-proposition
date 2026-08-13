"use client";

import { BadgeEuro } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ExpandablePremiumCard() {
  const ref = useRef(null);
  const [enableExpand, setEnableExpand] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 86%", "end 14%"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 5.4]);
  const rawRadius = useTransform(scrollYProgress, [0, 0.82], [24, 0]);
  const rawContentOpacity = useTransform(scrollYProgress, [0.04, 0.3], [1, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function update() {
      setEnableExpand(mediaQuery.matches);
    }

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <ScrollReveal delay={0.32} className="relative z-30 min-h-80">
      <motion.div
        ref={ref}
        className="relative flex h-full min-h-80 origin-center flex-col justify-between overflow-hidden border border-white/80 bg-[#f7f5ef] p-6 text-[#080709] shadow-[0_25px_80px_rgba(0,0,0,0.2)] transition hover:border-white hover:bg-[#f7f5ef] md:rounded-[1.5rem]"
        style={{
          scale: enableExpand ? rawScale : 1,
          borderRadius: enableExpand ? rawRadius : 24,
        }}
      >
        <motion.div
          className="relative z-10 flex h-full min-h-[17rem] flex-col justify-between"
          style={{ opacity: enableExpand ? rawContentOpacity : 1 }}
        >
          <div className="flex items-start justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              <BadgeEuro className="h-4 w-4" strokeWidth={2.1} />
            </div>
            <span className="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-xs font-medium text-black/52">
              steuerfrei
            </span>
          </div>

          <div>
            <p className="text-8xl font-semibold tracking-[-0.1em] text-black">
              14<span className="text-black/32">%</span>
            </p>
            <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em]">
              Gutschrift auf F&E-Kosten
            </h3>
            <p className="mt-3 max-w-64 text-sm leading-6 text-black/52">
              Jährlich geltend machbar, wenn Kosten und Entwicklungsarbeit
              sauber zugeordnet sind.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </ScrollReveal>
  );
}
