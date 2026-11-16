"use client";

import { useEffect, useState } from "react";
import { RIPPLE_MS } from "@/hooks/useMonarch";

type Bar = { top: number; height: number; color: string; delay: number };
type Glitch = { id: number; into: boolean; bars: Bar[] };

// Violet and cyan: the two halves of the RGB split (cyan only ever appears inside Monarch moments, ADR 003)
const COLORS = ["rgba(124, 77, 237, 0.55)", "rgba(94, 214, 230, 0.45)", "rgba(183, 156, 255, 0.5)"];

/** A fresh random set of thin fringe bars for each switch (made in the event handler, not during render). */
function makeBars(into: boolean): Bar[] {
  const n = into ? 7 + Math.floor(Math.random() * 4) : 4 + Math.floor(Math.random() * 2);
  return Array.from({ length: n }, () => ({
    top: Math.random() * 96,
    height: 0.4 + Math.random() * 2.2, // thin, so the flicker stays flash-safe (WCAG 2.3.1)
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: Math.random() * 260,
  }));
}

/**
 * The visible layer of the Monarch switch (ADR 047): the purple ring riding the edge of the ripple
 * (useMonarch reveals the new theme in a growing circle), split into violet and cyan copies like a colour
 * glitch, plus thin fringe bars and faint scanlines early in the ripple. Lighter on the way back to light.
 * Its own view-transition layer, so the ripple's clip doesn't cut it. Hidden under reduced motion.
 */
export function MonarchGlitch() {
  const [glitch, setGlitch] = useState<Glitch | null>(null);

  useEffect(() => {
    const onGlitch = (e: Event) => {
      const { into } = (e as CustomEvent<{ into: boolean }>).detail;
      setGlitch({ id: Date.now(), into, bars: makeBars(into) });
    };
    window.addEventListener("monarch:glitch", onGlitch);
    return () => window.removeEventListener("monarch:glitch", onGlitch);
  }, []);

  useEffect(() => {
    if (!glitch) return;
    const id = window.setTimeout(() => setGlitch(null), RIPPLE_MS + 100);
    return () => window.clearTimeout(id);
  }, [glitch]);

  if (!glitch) return null;

  return (
    <div key={glitch.id} aria-hidden="true" className={`monarch-glitch${glitch.into ? "" : " monarch-glitch--out"}`}>
      {/* the ring and its RGB-split copies */}
      <div className="monarch-ring monarch-ring--cyan" />
      <div className="monarch-ring monarch-ring--violet" />
      <div className="monarch-ring" />
      {glitch.bars.map((b, i) => (
        <div
          key={i}
          className="monarch-glitch__bar"
          style={{ top: `${b.top}%`, height: `${b.height}%`, background: b.color, animationDelay: `${b.delay}ms` }}
        />
      ))}
      <div className="monarch-glitch__scan" />
    </div>
  );
}
