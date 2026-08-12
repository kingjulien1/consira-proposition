"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useIntroReady } from "@/components/IntroReadyProvider";

export function TypewriterHeading({
  as: Tag = "h2",
  text,
  className = "",
  cursorClassName = "",
  delay = 0,
  amount = 0.42,
  charDuration = 0.001,
  charDelay = 0.035,
  shiny = true,
}) {
  const ref = useRef(null);
  const ready = useIntroReady();
  const inView = useInView(ref, { once: true, amount });
  const words = text.split(" ");
  const shineDelay = delay + text.replaceAll(" ", "").length * charDelay + 0.9;

  return (
    <Tag ref={ref} className={`relative ${className}`} aria-label={text}>
      <span aria-hidden="true" className="relative">
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.split("").map((character, index) => {
              const currentIndex =
                words
                  .slice(0, wordIndex)
                  .reduce((total, currentWord) => total + currentWord.length, 0) +
                index;

              return (
                <motion.span
                  key={`${character}-${wordIndex}-${index}`}
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={ready && inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    delay: delay + currentIndex * charDelay,
                    duration: charDuration,
                  }}
                >
                  {character}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 ? (
              <span className="inline-block">&nbsp;</span>
            ) : null}
          </span>
        ))}
      </span>
      {shiny ? (
        <span
          aria-hidden="true"
          className="heading-shiny-overlay"
          data-text={text}
          style={{ "--heading-shiny-delay": `${shineDelay}s` }}
        />
      ) : null}
      <motion.span
        aria-hidden="true"
        className={`ml-1 inline-block h-[0.78em] w-[0.055em] translate-y-[0.08em] bg-current ${cursorClassName}`}
        initial={{ opacity: 0 }}
        animate={ready && inView ? { opacity: [0, 1, 0, 1, 0] } : { opacity: 0 }}
        transition={{
          delay: delay + text.replaceAll(" ", "").length * charDelay + 0.08,
          duration: 1.2,
          ease: "linear",
        }}
      />
    </Tag>
  );
}
