"use client";

import { useCallback, useState } from "react";

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "168, 85, 247",
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
      className={`group/spotlight relative overflow-hidden ${className}`}
      onPointerMove={handlePointerMove}
      style={{
        "--spotlight-x": `${position.x}%`,
        "--spotlight-y": `${position.y}%`,
        "--spotlight-color": spotlightColor,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--spotlight-x) var(--spotlight-y), rgba(var(--spotlight-color), 0.13), transparent 44%)",
        }}
      />
      <div className="relative z-10 h-full min-h-[inherit]">{children}</div>
    </div>
  );
}
