"use client";

import { useSyncExternalStore } from "react";

// Monarch is an easter egg: never remembered, so every load starts in the old-money theme (ADR 049).
const VALUE = "monarch";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const isMonarch = () => document.documentElement.getAttribute("data-theme") === VALUE;

/** Length of the ripple: the new theme grows from the centre; the ring in MonarchGlitch rides its edge. */
export const RIPPLE_MS = 1100;
const RIPPLE_EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";

function apply(next: boolean) {
  const root = document.documentElement;
  if (next) root.setAttribute("data-theme", VALUE);
  else root.removeAttribute("data-theme");
}

let busy = false;

/**
 * Turn Monarch (the hidden dark mode) on or off for this page load only (ADR 047, 049). The new theme ripples
 * out from the centre of the screen (a View Transition clip), and MonarchGlitch (the `monarch:glitch`
 * event) adds the purple ring on the ripple's edge plus a short colour glitch: an RGB-split ring and
 * violet/cyan fringe bars. Smaller on the way back to light. No View Transitions: the glitch layer and an
 * instant switch. Reduced motion: an instant switch only.
 */
export function toggleMonarch() {
  if (busy) return;
  const next = !isMonarch();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    apply(next);
    return;
  }
  busy = true;
  window.dispatchEvent(new CustomEvent("monarch:glitch", { detail: { into: next } }));

  if (typeof document.startViewTransition !== "function") {
    apply(next);
    window.setTimeout(() => (busy = false), RIPPLE_MS);
    return;
  }

  const root = document.documentElement;
  root.classList.add("monarch-revealing"); // no body colour fade inside the ripple
  const transition = document.startViewTransition(() => apply(next));
  transition.ready
    .then(() => {
      root.animate(
        { clipPath: ["circle(0vmax at 50% 50%)", "circle(75vmax at 50% 50%)"] },
        { duration: RIPPLE_MS, easing: RIPPLE_EASE, pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {});
  transition.finished.finally(() => {
    root.classList.remove("monarch-revealing");
    busy = false;
  });
}

/** Whether Monarch mode is on. The attribute on <html> is the single source of truth. */
export function useMonarch() {
  return useSyncExternalStore(subscribe, isMonarch, () => false);
}
