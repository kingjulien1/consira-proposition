"use client";

const staggerGroupStarts = new Map();

export function resolveSmartStaggerDelay(groupKey, targetDelay) {
  if (!groupKey) {
    return targetDelay;
  }

  const now = performance.now();
  const start = staggerGroupStarts.get(groupKey) ?? now;

  if (!staggerGroupStarts.has(groupKey)) {
    staggerGroupStarts.set(groupKey, start);
  }

  const elapsed = (now - start) / 1000;

  return Math.max(0, targetDelay - elapsed);
}
