"use client";

import { useEffect } from "react";
import { toggleMonarch, useMonarch } from "@/hooks/useMonarch";

/**
 * Monarch mode (ADR 003/004, 033, 047): `M` toggles it (not while typing, not with modifier keys);
 * a click/tap on the footer's wide signature does too. While on: a status pill. (The switch itself,
 * ripple + colour glitch, is useMonarch + MonarchGlitch.)
 */
export function MonarchMode() {
  const monarch = useMonarch();

  // Keyboard + doorway toggles
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== "KeyM" && e.key !== "m" && e.key !== "M") return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      const target = e.target;
      if (target instanceof Element && target.closest("input, textarea, select, [contenteditable='true']")) return;
      toggleMonarch();
    };
    const onClick = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest("[data-monarch-doorway]")) toggleMonarch();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <p
        role="status"
        aria-live="polite"
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 rounded-full border px-5 py-2.5 font-mono text-xs tracking-wider whitespace-nowrap transition-opacity duration-300 motion-reduce:transition-none ${
          monarch ? "opacity-100 border-border-muted bg-card text-headline monarch-aura" : "opacity-0 pointer-events-none border-transparent"
        }`}
      >
        {monarch ? "Shadow Mode // Press M to return" : ""}
      </p>
  );
}
