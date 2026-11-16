"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Project, ShippedProject } from "@/types/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Duration of the turn. The face that sets the card's height switches halfway, while the card is edge-on. */
export const FLIP_MS = 520;

interface DossierCardProps {
  project: Project;
  number: string;
  /** True only for the top card of the deck: it gets the case-study button. */
  interactive?: boolean;
  /** Showing the back (the case study). */
  flipped?: boolean;
  onFlip?: (flipped: boolean) => void;
}

const paper = "rounded-[3px] border bg-card shadow-[0_18px_44px_rgba(28,25,23,0.08)]";
const ghostButton =
  "inline-flex items-center gap-2 rounded-full border border-border-muted bg-card px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-headline hover:border-headline hover:-translate-y-0.5 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive cursor-pointer";

/** Linen corner tab with the file number (decorative). */
function NumberTab({ number }: { number: string }) {
  return (
    <div
      aria-hidden="true"
      className="absolute -top-3.5 -left-3.5 z-10 h-10 w-12 rounded-[2px] bg-subtle border border-border-muted shadow-[0_4px_12px_rgba(28,25,23,0.1)] -rotate-6 flex items-center justify-center font-mono text-xs text-olive-dark"
    >
      {number}
    </div>
  );
}

function LedgerRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-4 gap-y-1.5 py-4 border-t border-hairline last:border-b">
      <dt className="font-mono text-[11px] uppercase tracking-widest text-muted pt-1">{label}</dt>
      <dd className="text-body leading-relaxed">{children}</dd>
    </div>
  );
}

/**
 * Archival "project file" card, styled like the hero quote card: white paper, linen tab, hairline ledger.
 * Shipped projects can turn over (ADR 027): the back is the case study. Both faces sit flat at rest (ADR 010).
 */
export function DossierCard({ project, number, interactive = false, flipped = false, onFlip }: DossierCardProps) {
  const inProgress = project.status === "in-progress";
  const reducedMotion = usePrefersReducedMotion();

  // Which face is in the layout (sets the card's height). Lags the turn by half its duration.
  const [layoutBack, setLayoutBack] = useState(flipped);
  const backRef = useRef<HTMLDivElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    const id = window.setTimeout(() => setLayoutBack(flipped), reducedMotion ? 0 : FLIP_MS / 2);
    // Move focus with the turn (not on first render)
    if (mounted.current && interactive) {
      if (flipped) backRef.current?.focus({ preventScroll: true });
      else if (backRef.current?.contains(document.activeElement)) openRef.current?.focus({ preventScroll: true });
    }
    mounted.current = true;
    return () => window.clearTimeout(id);
  }, [flipped, reducedMotion, interactive]);

  const face = "[backface-visibility:hidden] [-webkit-backface-visibility:hidden]";
  // The face not in the layout is lifted out of the flow so it doesn't stretch the card
  const placement = (inLayout: boolean) => (inLayout ? "relative h-full" : "absolute inset-x-0 top-0");

  return (
    <div className="relative h-full [perspective:1800px]">
      <div
        className="relative h-full [transform-style:preserve-3d]"
        style={{
          transform: flipped ? "rotateY(180deg)" : "none",
          transition: reducedMotion ? "none" : `transform ${FLIP_MS}ms cubic-bezier(0.45, 0, 0.2, 1)`,
        }}
      >
        {/* Front */}
        <div className={`${placement(!layoutBack)} ${face}`} inert={flipped}>
          <NumberTab number={number} />
          <div
            className={`h-full flex flex-col p-6 sm:p-9 ${paper} ${
              inProgress ? "border-dashed border-border-muted" : "border-hairline"
            }`}
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {inProgress ? project.label : "Project file"}
            </p>
            <h3 className="mt-3 font-serif text-3xl sm:text-[2.6rem] font-semibold tracking-tight text-headline leading-[1.05]">
              {project.title}
            </h3>
            <p className="mt-4 text-body text-lg leading-relaxed">{project.summary}</p>

            <dl className="mt-auto pt-8">
              {project.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[6.5rem_1fr] sm:grid-cols-[8rem_1fr] gap-x-4 py-2.5 border-t border-hairline last:border-b"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-muted pt-0.5">{fact.label}</dt>
                  <dd className="text-headline">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {interactive && project.status === "shipped" && (
              <button
                ref={openRef}
                type="button"
                onClick={() => onFlip?.(true)}
                onPointerDown={(e) => e.stopPropagation()} // pressing the button mustn't start a card drag
                aria-expanded={flipped}
                className={`group/cta mt-7 self-start ${ghostButton}`}
              >
                Read case study
                <span aria-hidden="true" className="motion-safe:transition-transform group-hover/cta:translate-x-0.5">
                  →
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Back: the case study */}
        {project.status === "shipped" && (
          <div
            className={`${placement(layoutBack)} ${face} [transform:rotateY(180deg)]`}
            inert={!flipped}
          >
            <NumberTab number={number} />
            <CaseStudy project={project} number={number} backRef={backRef} onClose={() => onFlip?.(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

function CaseStudy({
  project,
  number,
  backRef,
  onClose,
}: {
  project: ShippedProject;
  number: string;
  backRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
}) {
  return (
    <div
      ref={backRef}
      tabIndex={-1}
      role="group"
      aria-label={`Case study: ${project.title}`}
      className={`h-full flex flex-col p-6 sm:p-9 border-hairline outline-none ${paper}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{`${number} // Case study`}</p>
        <button
          type="button"
          onClick={onClose}
          onPointerDown={(e) => e.stopPropagation()}
          className="-mt-2 -mr-1 px-1 py-2 font-mono text-xs uppercase tracking-widest text-headline hover:text-olive-dark transition-colors rounded-[2px] focus-visible:outline-2 focus-visible:outline-olive cursor-pointer"
        >
          [ Close ]
        </button>
      </div>
      <h3 className="mt-1 font-serif text-3xl sm:text-[2.6rem] font-semibold tracking-tight text-headline leading-[1.05]">
        {project.title}
      </h3>

      <dl className="mt-7">
        <LedgerRow label="Problem">{project.problem}</LedgerRow>
        <LedgerRow label="Solution">{project.solution}</LedgerRow>
        <LedgerRow label="Challenges">
          <ul className="space-y-2.5">
            {project.challenges.map((challenge) => (
              <li key={challenge} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-olive" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </LedgerRow>
        <LedgerRow label="Stack">
          <span className="font-mono text-sm text-headline tracking-wide">{project.stack.join(" · ")}</span>
        </LedgerRow>
      </dl>

      <a
        href={project.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        onPointerDown={(e) => e.stopPropagation()}
        className={`mt-7 self-start ${ghostButton}`}
      >
        Source ↗<span className="sr-only"> (GitHub, opens in a new tab)</span>
      </a>
    </div>
  );
}
