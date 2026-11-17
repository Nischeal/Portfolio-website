import type { CSSProperties } from "react";
import { STACK } from "@/data/stack";
import type { StackItem } from "@/types/portfolio";

const HEADING = "Stack";

// Brand colours light up on hover. Next.js's brand is pure black, which would vanish in Monarch mode,
// so it keeps the text colour instead.
function brandStyle(item: StackItem): CSSProperties {
  return { "--brand": item.brand === "#000000" ? "var(--text-headline)" : item.brand } as CSSProperties;
}

// Each logo's path is written once, as a <symbol> in a hidden sprite; every marquee copy points at it with <use>.
// The marquee repeats each item ~7×, so inlining the paths made the homepage HTML ~430 KB (Phase 7 M2).
function iconId(item: StackItem): string {
  return `stack-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function IconSprite({ items }: { items: StackItem[] }) {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      {items.map((item) => (
        <symbol key={item.name} id={iconId(item)} viewBox="0 0 24 24">
          <path d={item.path} />
        </symbol>
      ))}
    </svg>
  );
}

function Item({ item }: { item: StackItem }) {
  return (
    <span
      style={brandStyle(item)}
      className="group/item flex shrink-0 items-center gap-4 px-8 sm:px-12 py-7 sm:py-9 text-headline"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-9 w-9 sm:h-11 sm:w-11 fill-current transition-colors duration-300 group-hover/item:text-(--brand)"
      >
        <use href={`#${iconId(item)}`} />
      </svg>
      <span className="font-mono text-sm sm:text-base uppercase tracking-widest whitespace-nowrap">{item.name}</span>
    </span>
  );
}

/**
 * One endless band. The moving track is two identical halves (each half repeats the items enough times to be
 * wider than the band), so translating it by -50% loops without a seam. Screen readers get one plain list instead;
 * reduced motion gets a single still, centred row.
 */
function Band({ items, reverse, label }: { items: StackItem[]; reverse?: boolean; label: string }) {
  const half = Array.from({ length: 3 }, () => items).flat(); // ≥ 15 items: wider than the widest band
  return (
    <div className="group/band relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:[mask-image:none]">
      <ul aria-label={label} className="sr-only">
        {items.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className={`flex w-max animate-marquee group-hover/band:[animation-play-state:paused] motion-reduce:hidden ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {half.map((item, i) => (
              <Item key={`${item.name}-${i}`} item={item} />
            ))}
          </div>
        ))}
      </div>

      {/* Reduced motion: one still row */}
      <div aria-hidden="true" className="hidden motion-reduce:flex flex-wrap justify-center">
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export function CapabilitiesSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="w-full pt-16 sm:pt-24 pb-28 sm:pb-40"
    >
      <IconSprite items={STACK} />
      <div className="px-6 max-w-6xl mx-auto space-y-5">
        <p aria-hidden="true" className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-olive" />
          <span>04 // Stack</span>
        </p>
        <h2
          id="stack-heading"
          className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-headline leading-[1.02]"
        >
          {HEADING}
        </h2>
      </div>

      {/* Two full-bleed bands drifting in opposite directions (ADR 030); pause on hover, still under reduced motion */}
      <div className="mt-14 sm:mt-20 w-full border-y border-hairline divide-y divide-hairline">
        <Band items={STACK.filter((s) => s.row === 1)} label="Backend and databases" />
        <Band items={STACK.filter((s) => s.row === 2)} label="AI, vision and frontend" reverse />
      </div>
    </section>
  );
}
