"use client";

import { useRef, useState, type CSSProperties, type ReactNode, type KeyboardEvent, type PointerEvent, type WheelEvent } from "react";
import type { Project } from "@/types/portfolio";
import { DossierCard, FLIP_MS } from "@/components/ui/DossierCard";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const SWIPE_DISTANCE = 110; // px dragged that sends the card away
const SWIPE_VELOCITY = 0.5; // px/ms flick speed that sends the card away
const FLY_MS = 380; // how long the top card takes to leave / arrive
const STACK_OFFSET = 14; // px each card below sits lower
const STACK_SCALE = 0.045; // how much smaller each card below is
const MAX_LEAN = 4; // deg the top card leans while dragged (only while moving; at rest it's flat, ADR 010)

type Motion =
  | { kind: "rest" } // settled; changes spring into place
  | { kind: "drag"; dx: number } // following the pointer 1:1
  | { kind: "leave"; dir: 1 | -1 } // top card flying off to tuck under the deck
  | { kind: "enter" }; // previous card placed off-screen left, about to slide back on top

interface ProjectDeckProps {
  projects: Project[];
  /** Section counter + heading, rendered at the top of the left column. */
  heading: ReactNode;
}

/**
 * A stack of project dossiers. The top card follows your finger or mouse while dragged (with a slight lean).
 * Released far or fast enough, it flies off and tucks to the back; otherwise it springs back. ← brings back
 * the previous card. Also works with buttons, arrow keys and horizontal trackpad swipes. No animation library.
 */
export function ProjectDeck({ projects, heading }: ProjectDeckProps) {
  const count = projects.length;
  const [order, setOrder] = useState(() => projects.map((_, i) => i)); // order[0] is the top card
  const [motion, setMotion] = useState<Motion>({ kind: "rest" });
  const [flipped, setFlipped] = useState<number | null>(null); // project whose card shows its back (ADR 027)
  const [turning, setTurning] = useState(false); // mid-turn: the cards behind are hidden so they don't show through
  const reducedMotion = usePrefersReducedMotion();
  const deckRef = useRef<HTMLDivElement>(null);

  const busy = useRef(false);
  const turnTimer = useRef<number | undefined>(undefined);
  const drag = useRef<{ x: number; t: number } | null>(null);
  const wheel = useRef({ sum: 0, lockedUntil: 0 });

  /** If focus is on the outgoing card's button, park it on the deck so it isn't lost to <body>. */
  const keepFocus = () => {
    const deck = deckRef.current;
    if (deck && deck !== document.activeElement && deck.contains(document.activeElement)) deck.focus();
  };

  const lock = () => {
    busy.current = true;
    window.setTimeout(() => (busy.current = false), FLY_MS);
  };

  /** Send the top card to the back of the deck. dir = the side it flies out to. */
  const sendAway = (dir: 1 | -1 = -1) => {
    if (busy.current) return;
    keepFocus();
    if (reducedMotion) {
      setOrder((o) => [...o.slice(1), o[0]]);
      setMotion({ kind: "rest" });
      return;
    }
    lock();
    setMotion({ kind: "leave", dir });
    window.setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setMotion({ kind: "rest" });
    }, FLY_MS);
  };

  /** Bring the bottom card back on top, sliding in from the left. */
  const bringBack = () => {
    if (busy.current) return;
    keepFocus();
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
    if (reducedMotion) return;
    lock();
    setMotion({ kind: "enter" });
    // Two frames: let the card render off-screen first, then let it transition in.
    requestAnimationFrame(() => requestAnimationFrame(() => setMotion({ kind: "rest" })));
  };

  /** Bring a specific project to the top (from the index list). The deck re-stacks with its spring. */
  const bringToTop = (index: number) => {
    if (busy.current || order[0] === index) return;
    setOrder((o) => {
      const at = o.indexOf(index);
      return [...o.slice(at), ...o.slice(0, at)];
    });
    setMotion({ kind: "rest" });
  };

  /** Turn the top card over (index) or face-up (null), hiding the cards behind while it turns. */
  const turn = (index: number | null) => {
    setFlipped(index);
    if (reducedMotion) return;
    setTurning(true);
    window.clearTimeout(turnTimer.current);
    turnTimer.current = window.setTimeout(() => setTurning(false), FLIP_MS);
  };

  /** Deck moves never carry a card face-down: turn it face-up first, then move (ADR 027). */
  const faceUpThen = (move: () => void) => {
    if (busy.current) return;
    if (flipped === null) return move();
    turn(null);
    setMotion({ kind: "rest" }); // a released drag springs back while the card turns face-up
    if (reducedMotion) return move();
    busy.current = true;
    window.setTimeout(() => {
      busy.current = false;
      move();
    }, FLIP_MS);
  };
  const next = (dir: 1 | -1 = -1) => faceUpThen(() => sendAway(dir));
  const prev = () => faceUpThen(bringBack);
  const jumpTo = (index: number) => {
    if (order[0] !== index) faceUpThen(() => bringToTop(index));
  };

  // Pointer (touch, pen, mouse) drag on the top card
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (busy.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, t: e.timeStamp };
    setMotion({ kind: "drag", dx: 0 });
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    setMotion({ kind: "drag", dx: e.clientX - drag.current.x });
  };
  const onPointerEnd = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    const velocity = Math.abs(dx) / Math.max(e.timeStamp - drag.current.t, 1);
    drag.current = null;
    if (Math.abs(dx) > SWIPE_DISTANCE || (Math.abs(dx) > 30 && velocity > SWIPE_VELOCITY)) {
      next(dx > 0 ? 1 : -1);
    } else {
      setMotion({ kind: "rest" }); // spring back
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next(-1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "Escape" && flipped !== null) {
      e.preventDefault();
      turn(null);
    }
  };

  // Horizontal trackpad swipe
  const onWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    const now = e.timeStamp;
    if (now < wheel.current.lockedUntil) return;
    wheel.current.sum += e.deltaX;
    if (Math.abs(wheel.current.sum) > 80) {
      if (wheel.current.sum > 0) next(-1);
      else prev();
      wheel.current = { sum: 0, lockedUntil: now + 600 };
    }
  };

  const dragProgress = motion.kind === "drag" ? Math.min(Math.abs(motion.dx) / SWIPE_DISTANCE, 1) : 0;

  const styleFor = (position: number): CSSProperties => {
    const settle = reducedMotion
      ? "none"
      : `transform 480ms cubic-bezier(0.34, 1.4, 0.64, 1), opacity ${FLY_MS}ms ease`;

    if (position === 0) {
      if (motion.kind === "drag") {
        const lean = Math.max(-MAX_LEAN, Math.min(MAX_LEAN, motion.dx / 40));
        return { transform: `translateX(${motion.dx}px) rotate(${lean}deg)`, transition: "none", zIndex: count + 1 };
      }
      if (motion.kind === "leave") {
        return {
          transform: `translateX(${motion.dir * 125}%) rotate(${motion.dir * 6}deg)`,
          opacity: 0,
          transition: `transform ${FLY_MS}ms cubic-bezier(0.4, 0, 1, 1), opacity ${FLY_MS}ms ease`,
          zIndex: count + 1,
        };
      }
      if (motion.kind === "enter") {
        return { transform: "translateX(-125%) rotate(-6deg)", opacity: 0, transition: "none", zIndex: count + 1 };
      }
    }

    // Cards underneath rise a little as the top card is dragged away
    const depth = position === 0 ? 0 : Math.max(position - dragProgress, 0);
    return {
      transform: `translateY(${depth * STACK_OFFSET}px) scale(${1 - depth * STACK_SCALE})`,
      transformOrigin: "50% 100%",
      opacity: position > 2 || (turning && position > 0) ? 0 : 1,
      transition: turning
        ? "opacity 160ms ease"
        : motion.kind === "drag"
          ? "transform 120ms linear"
          : settle,
      zIndex: count - position,
    };
  };

  const top = projects[order[0]];
  const topNumber = String(order[0] + 1).padStart(2, "0");

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 gap-y-10 items-start"
    >
      {/* Left: heading, project index, controls */}
      {/* On mobile this wrapper dissolves (display: contents) so the deck can sit between heading and index */}
      <div className="contents lg:flex lg:flex-col lg:col-span-5 lg:sticky lg:top-28">
        <div className="order-1 lg:order-none">{heading}</div>

        <ol className="lg:mt-10 border-t border-hairline order-3 lg:order-none">
          {projects.map((project, index) => {
            const active = order[0] === index;
            return (
              <li key={project.slug} className="border-b border-hairline">
                <button
                  type="button"
                  onClick={() => jumpTo(index)}
                  aria-current={active ? "true" : undefined}
                  className="group w-full flex items-baseline gap-5 py-4 text-left"
                >
                  <span className={`font-mono text-xs tracking-widest ${active ? "text-olive-dark" : "text-muted"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-serif text-2xl transition-colors ${
                      active ? "text-headline" : "text-muted group-hover:text-headline"
                    }`}
                  >
                    {project.title}
                  </span>
                  {project.status === "in-progress" && (
                    <span className="ml-auto font-mono text-xs uppercase tracking-widest text-muted">
                      {project.label}
                    </span>
                  )}
                  {active && <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 rounded-full bg-olive self-center" />}
                </button>
              </li>
            );
          })}
        </ol>

        {/* Controls */}
        <div className="lg:mt-8 flex items-center gap-5 font-mono text-xs text-muted order-4 lg:order-none">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="h-11 w-11 rounded-full border border-border-muted text-headline hover:border-headline bg-card/60 transition-colors"
          >
            ←
          </button>
          <span aria-hidden="true" className="tracking-widest">
            {topNumber} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => next(-1)}
            aria-label="Next project"
            className="h-11 w-11 rounded-full border border-border-muted text-headline hover:border-headline bg-card/60 transition-colors"
          >
            →
          </button>
          <span aria-hidden="true" className="ml-2 text-xs uppercase tracking-widest hidden sm:inline">
            or drag the card
          </span>
        </div>
      </div>

      {/* Right: the deck. Every card shares one grid cell, so the deck is as tall as the tallest card */}
      <div
        ref={deckRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onWheel={onWheel}
        aria-label="Project deck. Use the left and right arrow keys to move through the projects."
        className="order-2 lg:order-none lg:col-span-7 lg:pt-10 grid pb-8 outline-none focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive rounded-[3px]"
      >
        {projects.map((project, index) => {
          const position = order.indexOf(index);
          const isTop = position === 0;
          return (
            <div
              key={project.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}: ${project.title}`}
              aria-hidden={!isTop}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerEnd : undefined}
              onPointerCancel={isTop ? onPointerEnd : undefined}
              className={`[grid-area:1/1] select-none ${isTop ? "touch-pan-y cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
              style={styleFor(position)}
            >
              <DossierCard
                project={project}
                number={String(index + 1).padStart(2, "0")}
                interactive={isTop}
                flipped={flipped === index}
                onFlip={(open) => turn(open ? index : null)}
                onNext={() => next(-1)}
              />
            </div>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">{flipped === order[0]
          ? `Case study open: ${top.title}`
          : `Project ${order[0] + 1} of ${count}: ${top.title}`}</p>
    </div>
  );
}
