# Polish pass — Plan
Status: done (2026-11-16)
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

## Settled (2026-11-16)
| Item | Decision |
|---|---|
| Inquiry links | Hidden behind one flag (`INQUIRY_LIVE` in `src/data/site.ts`), off until Phase 4 builds `#inquiry` |
| Skip link | "Skip to content" |
| Phone hero | Quote card moves after the meta strip on phones (< lg); desktop unchanged |
| Grid | About moves from 4/8 to 5/7 to share Works' line; hero keeps 7/5 |
| Logo font | Keep the signature (Alex Brush) |
| "robust" | "Focused on clean system design, well-modelled relational databases, and scalable web platforms." (hero bio + meta description) |
| Hero button | "Get in touch ↓" (scrolls to `#inquiry` once live) |
| Section name | **Stack** everywhere: nav "Stack", heading "Stack", counter `04 // STACK`, anchor `#stack` |
| Meta labels | `SEASON` / `GITHUB` |
| Lint WARNs | About: "…to the screen a person touches" (drop "actually"); kicker em dash → `·`. Quote + tailor line stay (your voice; remaining WARN explained) |
| Headline | Keep the name as h1 (deliberate; kicker + typewriter carry the role) |
| Entrance | Staggered fade-up once on load: kicker, name, role, bio, buttons, quote card; 12px rise, ~80ms apart, ~600ms each; none under reduced motion |

## Milestones
### M1 — Quick fixes: dead links + keyboard (#1, #2)
- [x] Choose: **hide all three** Inquiry links until Phase 4 (chosen 2026-11-16); the hero keeps only "Explore Selected Work"
- [x] Hide them in the navbar (desktop + mobile drawer) and hero; nothing points to a missing id (`INQUIRY_LIVE` flag)
- [x] "Skip to content" link (visible on focus, first Tab stop, lands on `<main id="main">`)
- [x] Verify the deck's focus ring by hand: it really was missing (`outline-none` + `focus-visible:outline-2` leaves the style at none in Tailwind v4); fixed with `focus-visible:outline-solid`
- [x] Verify (build, lint, tsc; click every in-page link; Tab from the top); `testing.md` section
### M2 — Mechanical sweep: readable text + tap sizes (#3, #4)
- [x] Floor for readable mono labels: 12px (`text-xs`). 14 lines raised from 9–11px: hero kicker + 4 meta labels, quote-card footer (9px), About labels, card ledger labels, "Project file", case-study header, deck index numbers, "In progress", "or drag the card". The three `aria-hidden` section counters stay 11px
- [x] 44px tap targets (`min-h-11` / `h-11 w-11`): navbar logo, `[ Menu ]`, deck ← →, "Read case study", `SOURCE ↗`, `[ Close ]`, "Next file"
- [ ] Nothing wraps or breaks at 375px; contrast stays per ADR 022; verify; `testing.md` section
### M3 — Layout: shared grid, phone hero, fonts (#5, #6, #7)
- [x] Design gate: About + Works share 5/7 (About moved from 4/8; both right columns now start at x=884 on a 1920px window); Works deck top raised to the heading line (`lg:pt-3.5`, tab sits above); hero keeps 7/5 and its centred columns. Phone hero: quote card after the meta strip (`display: contents` + `order`)
- [x] Signature font kept (Alex Brush)
- [x] Build the approved options; verify; `testing.md` section. Also fixed: the typewriter line was clipped on phones (`whitespace-nowrap`); below `sm` "Building" sits on its own line with two lines reserved
### M4 — Copy + hero entrance (#8, #9, #10)
- [x] Content gate: settled (see table above); recorded in ADR 031
- [x] Design gate: staggered fade-up (`--animate-enter`, delays as inline styles because the `animation` shorthand resets `animation-delay`)
- [x] Build, verify, `testing.md`, ADR 031. Skill re-run: copy-lint 0 FAIL / 1 WARN (3 virtue words: the quote + tailor line, kept as your voice); consistency gone: links, focus-visible, skip-link, nav-labels, button-styles, col-edge, copy-buttons, hero-screen. Left on purpose: split-pair (hero 7/5), copy-headline (name as h1), collide (false positive: hidden card back)

## Open questions
- None yet; each milestone opens with its own gate.
