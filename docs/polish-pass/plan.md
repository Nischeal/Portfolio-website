# Polish pass — Plan
Status: planned (starts after Phase 3 is merged)
Branch: `fix/polish-pass` (from `master`)

## Goal
Fix what the two `/design-taste-frontend` reviews (2026-11-16) found and you picked: dead links, keyboard access, readable text and tap sizes, a shared grid, the phone hero, fonts, copy and a hero entrance. The About portrait stays in `docs/about-photo/plan.md`; the Capabilities edges/height are in Phase 3 M1. **Don't push `master` before M1 lands**, or the live site gets dead buttons.

## Findings
From two `/design-taste-frontend` reviews (2026-11-16): an eyes-on review, then the skill's own scripts on the production build (`copy-lint`, `consistency.mjs` at 1440/1024/820/768/390, `perf.mjs`; `check.mjs` crashed inside the skill and gave nothing). False positives (Works card back/stack "collide", marquee "row-lines", test-server "broken requests") and rules that clash with settled decisions (screen-snapped sections, no hairlines, pause buttons, always-colour logos) are left out.

| # | Finding | Where |
|---|---|---|
| 1 | Three links point to `#inquiry`, which doesn't exist until Phase 4: navbar "Inquiry", "Get in Touch", hero "Initiate Inquiry ↗" | `Navbar.tsx`, `HeroSection.tsx` |
| 2 | No "Skip to content" link; the checker sees no visible focus ring on the Works deck (verify by hand) | `layout.tsx`/`Navbar.tsx`, `ProjectDeck.tsx` |
| 3 | 43 text elements ≤ 11px; mono labels at 9–10px (hero meta strip, quote-card footer) | hero, quote card, ledgers, counters |
| 4 | Phone tap targets under 44px: logo 34px, `[ Menu ]` 30px, deck ← → 40px, "Read case study" 38px | `Navbar.tsx`, `ProjectDeck.tsx`, `DossierCard.tsx` |
| 5 | Phone hero is 1.5 screens (ends at 1278px on 844px); a quote-card line is cut by the fold | `HeroSection.tsx`, `HeroQuoteCard.tsx` |
| 6 | Sections don't share column lines (About text column x=555, Works 651, hero card 845 at 1440px); hero and Works split columns start 70px / 23px apart | `HeroSection`, `AboutSection`, `ProjectDeck` |
| 7 | Four font families (205 KB); Alex Brush is used only for the navbar signature | `layout.tsx` |
| 8 | Copy: "robust" (lint FAIL); 4 virtue words (quiet, thoughtful, actually, carefully; budget 2); 3 em dashes (budget 2); h1 is the name only, so the first screen's headline doesn't say what you do | hero bio, quote, About |
| 9 | "Initiate Inquiry ↗" is stiff, ↗ suggests external; navbar "Craft" vs heading "Capabilities"; "Seasonal ambience" / "Code archive" labels lean gimmicky | `HeroSection.tsx`, `Navbar.tsx` |
| 10 | No one-time entrance on load (only the typewriter moves) | `HeroSection.tsx` |

## Reusable assets
| Asset | Path | How it's reused |
|---|---|---|
| Navbar links + mobile drawer | `src/components/layout/Navbar.tsx` | Same link list; targets/labels/tap sizes only |
| Hero CTAs, meta strip, quote card | `HeroSection.tsx`, `HeroQuoteCard.tsx` | Same markup; sizes, copy, phone layout |
| Section grids | `AboutSection.tsx` (4/8), `ProjectDeck.tsx` (5/7), hero grid | One shared 12-col line set |
| Tokens / contrast floor | `globals.css`, ADR 015/022 | Bigger labels stay `text-muted`; no new colours |
| Reduced motion | `usePrefersReducedMotion`, `motion-safe:` | Hero entrance `motion-safe` only |
| Skill checkers | `~/.claude/skills/design-taste-frontend/scripts` | Re-run `copy-lint` + `consistency.mjs` after each milestone to confirm the finding is gone (read-only, output in the scratchpad) |

## Milestones
### M1 — Quick fixes: dead links + keyboard (#1, #2)
- [x] Choose: **hide all three** Inquiry links until Phase 4 (chosen 2026-11-16); the hero keeps only "Explore Selected Work"
- [ ] Hide them in the navbar (desktop + mobile drawer) and hero; nothing points to a missing id
- [ ] "Skip to content" link (visible on focus, first Tab stop, lands on `<main>`); copy is two words, shown as DRAFT
- [ ] Verify the deck's focus ring by hand; if it's really missing, make it visible
- [ ] Verify (build, lint, tsc; click every in-page link; Tab from the top); `testing.md` section
### M2 — Mechanical sweep: readable text + tap sizes (#3, #4)
- [ ] Floor for readable mono labels: 11px → proposed 12px (decorative counters may stay 11px); list every changed class
- [ ] 44px tap targets on phones for logo, `[ Menu ]`, deck arrows, card buttons (hit area, not necessarily visible size)
- [ ] Nothing wraps or breaks at 375px; contrast stays per ADR 022; verify; `testing.md` section
### M3 — Layout: shared grid, phone hero, fonts (#5, #6, #7)
- [ ] Design gate: options for one shared column grid (which lines About/Works/hero snap to) + top-aligned splits; options for the phone hero (e.g. quote card smaller / after the meta strip / hidden on phones)
- [ ] Decide the signature font (keep Alex Brush for the logo, or set the logo in Cormorant italic and drop a family)
- [ ] Build the approved options; verify at 1440/1024/768/390; `testing.md` section
### M4 — Copy + hero entrance (#8, #9, #10)
- [ ] Content gate: DRAFT replacements for "robust", the virtue words/em dashes, h1 or kicker wording that says what you do, "Initiate Inquiry ↗", Craft/Capabilities, "Seasonal ambience" / "Code archive" (multiple choice, your approval; approved About/hero copy changes are recorded in `docs/decisions.md`)
- [ ] Design gate: entrance options (e.g. name + lines fade up once, staggered ~80ms; or a single fade), `motion-safe`, runs once, no layout shift
- [ ] Build, verify (`copy-lint` clean or every kept WARN explained), `testing.md` section; close-out (decision entry)

## Open questions
- None yet; each milestone opens with its own gate.
