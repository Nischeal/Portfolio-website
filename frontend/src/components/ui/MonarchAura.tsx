"use client";

import { useMonarch } from "@/hooks/useMonarch";

/**
 * The Shadow Monarch aura (ADR 039): a breathing shadow vignette. The screen's edges sink into
 * violet-black darkness that slowly creeps in and out, under fine film grain; the centre stays clean.
 * Pure CSS (globals.css: .monarch-vignette, .monarch-grain), only while Monarch mode is on.
 * Reduced motion: the vignette holds still.
 */
export function MonarchAura() {
  const monarch = useMonarch();
  if (!monarch) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="monarch-vignette" />
      <div className="monarch-grain" />
    </div>
  );
}
