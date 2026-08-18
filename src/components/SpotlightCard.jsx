"use client";

import { useCallback, useState } from "react";

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "168, 85, 247",
  spotlightOpacity = 0.13,
  spotlightSize = "44%",
  borderGlow = false,
}) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handlePointerMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      className={`group/spotlight relative overflow-hidden ${borderGlow ? "border-glow-card" : ""} ${className} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      onPointerMove={handlePointerMove}
      style={{
        "--spotlight-x": `${position.x}%`,
        "--spotlight-y": `${position.y}%`,
        "--spotlight-color": spotlightColor,
        "--spotlight-opacity": spotlightOpacity,
        "--spotlight-size": spotlightSize,
      }}
    >
      {borderGlow ? <div aria-hidden="true" className="border-glow-aura" /> : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--spotlight-x) var(--spotlight-y), rgba(var(--spotlight-color), var(--spotlight-opacity)), transparent var(--spotlight-size))",
        }}
      />
      <div className="relative z-10 h-full min-h-[inherit]">{children}</div>
    </div>
  );
}
