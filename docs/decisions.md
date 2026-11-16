# Decisions

Condensed log of design/architecture decisions (formerly `docs/adr/001–010`; full text in git history before the cleanup commit). Newest wins on conflict. Add new entries at the bottom: `## NNN — Title (YYYY-MM-DD)` + 2–5 bullets.

## 001 — Typewriter role rotator (2026-11-12)
- Zero-dependency `useTypewriter` hook + `<TypewriterRole />` in the hero. Roles/phrasing superseded by 008; styling by 007.

## 002 — Real projects & verified links only
- Showcase only user-confirmed projects:
  - **Clip Cuisine (Ingredient Finder)** — Python, YOLO, PostgreSQL — https://github.com/Nischeal/Ingredient_finder (not live)
  - **Gym Management System** — PHP, Laravel, MySQL; members, subscriptions, attendance, admin dashboard — https://github.com/Nischeal/Gym-Management-System (not live)
  - Third slot: upcoming AI/autonomous-systems project, shown as "coming soon".
- GitHub: https://github.com/Nischeal. LinkedIn hidden until the user provides it. No live-demo links for offline projects.
- Any unknown personal detail must be confirmed with the user before it goes on the site.

## 003 / 004 — Pivot to old-money minimalist editorial
- Dropped the neon Solo Leveling gaming HUD entirely; legacy components (`SystemWindow`, `RankBadge`, `StatBar`, Armory/SkillMatrix/ContactQuest sections) deleted — don't reintroduce.
- Look: warm linen, espresso text, olive accent, hairline borders, generous whitespace. Tokens in `design-system/tokens.md`.
- Fonts: Cormorant Garamond (headings), Inter (body), JetBrains Mono (counters/tags/meta).
- Seasonal canvas: autumn leaves / winter snow, auto by month, manual toggle.
- Solo Leveling survives only as the hidden **Monarch mode** easter egg (`M` key or footer watermark → `data-theme="monarch"`).
- Single-page flow: Navbar → Hero → About → Selected Works → Capabilities → Inquiry → Footer (see `roadmap.md`).

## 005 — Grounded About section (replaces "Philosophy")
- Plain, conversational About: full-stack dev in Kathmandu; enjoys computer vision (YOLO/Python), backends (Laravel, FastAPI), relational data (PostgreSQL/MySQL), modern web (Next.js/TS); clean code and solid schemas, built with tailoring-like care.
- No poetic/literary labels in nav or headings.

## 006 — Full-width editorial masthead hero
- No split box; typography-led full-width hero with buttons `Explore Selected Work ↓` and `Initiate Inquiry ↗`.
- Metadata strip: Kathmandu, Nepal · ● Available for Engineering · season · GitHub @Nischeal.

## 007 — Signature + headline lockup
- Navbar brand is a script signature "Nischal" (`Alex_Brush`), so the name isn't repeated.
- Typewriter is a large Cormorant italic line (38–48px), rotating text in olive with a thin blinking cursor.
- Generous whitespace above the metadata strip.

## 008 — Authentic developer identity (current hero copy)
- Prefix `Building` + roles: `Laravel & Livewire Systems`, `FastAPI & Python Backends`, `Full-Stack Web Applications`, `Scalable System Architectures`.
- Bio: "Full-Stack Developer and Backend Engineer specializing in Laravel, Livewire, and Python (FastAPI). Focused on clean system design, robust database architectures, and scalable web platforms. Rooted in Kathmandu, Nepal."
- Kicker: `● KATHMANDU, NEPAL — FULL-STACK & BACKEND ENGINEER`.

## 009 — Hero quote card
- Tactile paper card in the hero with the user's confirmed creed: *"I believe an engineer should have a life outside the terminal — nature, quiet walks, and seasonal stillness make you a sharper, more thoughtful builder."*
- Corner linen tab with a serif `“`. Reference: `design-system/ref-polaroid-quote.jpg`.

## 010 — Hero stability & text sharpness
- Typewriter reserves its width so cycling roles cause zero layout shift.
- Card has no rotation (rotated text blurs); only the `“` tab keeps `-rotate-6`. Hover = lift (`-translate-y-1.5` + deeper shadow), not rotate.

## 011 — Docs cleanup (2026-11-16)
- Removed Gemini-era docs (old gaming spec, finished phase plans, glossary, feedback screenshots), the legacy static site at the repo root, and Next.js boilerplate.
- Docs are now for the user + Claude only: `CLAUDE.md`, `docs/decisions.md`, `docs/roadmap.md`, `docs/design-system/`.

## 012 — Milestone-gated section workflow (2026-11-16)
- Sections are shipped via the user-level `/section` skill: M0a content gate → M0b layout → M1 markup → M2 styling/responsive → M3 interactivity → M4 a11y, with a hard stop for user verification after each.
- One working doc per section in `docs/sections/<name>.md`; kept (marked shipped) after completion. Narrow exception to 011's "no per-feature docs".
- One commit per approved milestone; Claude never pushes (master deploys live).
- Missing copy is offered as labelled DRAFTs for the user to edit; nothing unapproved ships (002, 008).

## 013 — Canonical domain (2026-11-16)
- The site lives at `www.nischalbasnet10.com.np` (the value in `frontend/public/CNAME`). `nischal.info.np` was stale and is removed from code, README and CLAUDE.md.

## 014 — Visible winter snow (2026-11-16)
- Winter particles use a pale frost grey-blue (`#B8C2C9`, 40–70% opacity) instead of white, which vanished on the linen background.

## 015 — Colours only through tokens (2026-11-16)
- Components use the token utilities from `globals.css` (`bg-page`, `text-headline`, `border-hairline`, `bg-olive`, …): no raw hex, no `stone-*`/`slate-*`, so Monarch mode flips everything.
- Exception: shadow rgba values and canvas particle colours.
- Shades with no token are mapped to the nearest existing token instead of adding new ones.

## 016 — Metadata follows decision 008 (2026-11-16)
- Site title "Nischal Basnet | Full-Stack & Backend Engineer"; description derived from the hero bio; drop "Systems Engineer" and "AI vision pipelines".
- Hero availability label stays "Open for Work" (supersedes 006's "Available for Engineering").

## 017 — Reduced motion & baseline accessibility (2026-11-16)
- `prefers-reduced-motion`: the canvas draws one static frame of leaves/snow; the typewriter shows the first role with no blinking cursor. The canvas also pauses while the tab is hidden.
- Typewriter is `aria-hidden`, with an `sr-only` line listing all roles for screen readers.
- Sticky-header offset (`scroll-padding-top`), mobile menu `aria-expanded` + Esc to close, DPR-sharp canvas: fixed now, not deferred to Polish.

## 018 — Remove legacy Footer (2026-11-16)
- Deleted the unrendered gaming-era `Footer.tsx` (neon colours, placeholder GitHub/LinkedIn URLs). `/section footer` builds a new one from scratch.

## 019 — CI gate & client boundaries (2026-11-16)
- CI runs `npm run lint` and `npx tsc --noEmit` before `npm run build`; any failure blocks the deploy.
- Keep `"use client"` at the leaves: sections are server components, and only interactive or browser-dependent bits (e.g. `SeasonLabel`) are client components.

## 020 — /my-planner replaces /section (2026-11-16)
- Supersedes 012. Work is planned and run with the user-level `/my-planner` skill (personal twin of the office `task-planner`), restricted to personal repos.
- Per task: `docs/<task>/plan.md` (milestones + reusable-asset inventory) and `docs/<task>/testing.md` (manual checks); decisions stay in this log.
- Branch per task (`feat/<task>`), commit per approved milestone; the user merges and pushes.
- Verify = this repo's checks (build, lint, tsc) plus tests once a runner exists; hard stop after every milestone.

## 021 — Portfolio v1 master plan & open content calls (2026-11-16)
- Remaining work lives in one master plan, `docs/portfolio-v1/plan.md` (rebuilt from the Gemini-era plan), one branch per phase; no more reading git history to plan.
- Page order Hero → About → Works → Capabilities → Inquiry → Footer; navbar reordered to About / Work / Craft / Inquiry.
- Inquiry: Web3Forms from the browser, plus the published address nischealbasnet10@gmail.com with copy + mailto.
- Capabilities: tags grouped by discipline, no ratings of any kind (overrides old M6 "mastery ratings").
- Third Works card is the 8th-semester college project, generic "in progress" until it has a name. Later phases: scroll reveal, Ctrl+K terminal, FastAPI backend.

## 022 — Text contrast floor (2026-11-16)
- `--text-muted` darkened `#78716C` → `#736C67` (4.45:1 → 4.8:1 on linen) so the smallest readable text passes WCAG AA.
- `text-dim` (2.3:1) is decoration only, never readable text; the hero metadata labels and the quote-card tag moved to `text-muted`.
- Monarch tokens already pass (muted 5.0:1); `--text-dim` there follows the same decoration-only rule.

## 023 — Milestones are working slices (2026-11-16)
- Every milestone ends in something usable and finished-looking: real content, styled, responsive, accessible. No layer-by-layer milestones (markup → styling → a11y); supersedes 012's layer template.
- Copy is asked first inside the milestone (multiple choice) and built in the same turn; there's no separate content stop or commit.
- Simple sections (Capabilities, Footer, Monarch) are one milestone. Works and Inquiry are two (cards → drawer; section + copy email → sending).
- Phase re-check stops only on drift; close-out happens in the same turn as the last milestone's "ok".

## 024 — Selected Works as large case-study panels (2026-11-16)
- Replaces the 3-up card grid, which felt generic, boxy and small, with cheap-looking pill tags. Each shipped project gets one large, soft, rounded panel with text and a visual, alternating sides on desktop.
- The visual is a fine-line "how it works" SVG sketch built only from confirmed facts. A real screenshot replaces it once one is available (`screenshot` field in `Project`).
- The stack is a quiet mono dotted line, not pill tags. The in-progress college project is a slim hairline closing line, not a panel.
- The full case study stays in the M2 slide-out drawer.

## 025 — Selected Works as a 3D coverflow of dossiers (2026-11-16)
- Supersedes 024; the large panels still didn't feel right. All three projects (two real, plus a sealed in-progress dossier) loop in a swipeable coverflow, built with CSS transforms and pointer events and no library.
- Cards are archival dossiers matching the hero quote card: a linen number tab, the "how it works" sketch (a screenshot later), and a mono stack line.
- Decision 010 holds for readable text: the centre card is always flat. Side cards are angled, dimmed and softly blurred on purpose, because they're previews, not text to read.
- Phone: one flat card with peeking neighbours. Reduced motion: no transition. The case study opens from the centre card's button (M2 drawer).

## 026 — Selected Works as a swipeable deck of text-only dossiers (2026-11-16)
- Supersedes 025. The 3D tilt felt off-brand and the cards didn't follow the finger. No images or sketches on the cards, now or later.
- A stack of paper dossiers: the top card follows the pointer 1:1 with a slight lean while dragged. A long drag or quick flick sends it to the back; a short one springs back. ← brings the previous card back.
- Cards show title, summary and a fact ledger built from confirmed facts (approved 2026-11-16). At rest every card is flat (decision 010).
- Built with no library; reduced motion swaps instantly.
- Addendum (same day): the deck sits in a split layout, with heading, a clickable project index and controls in a sticky left column and the deck on the right, so it reads as part of the editorial grid rather than a small centred widget. On phones: heading → deck → index → controls.
- Approved 2026-11-16 as provisional: the design stays unless a better reference turns up, in which case the concept is reopened.

## 027 — Case study on the back of the dossier, not a drawer (2026-11-16)
- The slide-out drawer was built and rejected: a side panel over the page felt wrong for the deck. The top dossier now turns over (real 3D turn) and its back is the case study.
- Both faces are flat at rest (decision 010 holds); the angle exists only mid-turn. Reduced motion swaps instantly.
- The card grows to fit the back instead of scrolling inside. Any deck navigation turns the card face-up first.
- Trigger is a hairline ghost button ("Read case study →"); the back closes with `[ Close ]`, the label approved in M0.
- Revised same day: the size jump at mid-turn felt wrong. The back now keeps the front's size and the case study scrolls inside it (header with `[ Close ]` pinned); the cards behind are hidden while the card turns.

## 028 — Capabilities: tool cross-highlight (2026-11-16)
- The plain 2 × 2 ledger felt too static. Tools now react: hover or focus one and it turns olive everywhere it appears, while blocks that don't use it dim.
- Highlight covers tools only (the user chose this over also lighting up projects in the context lines). Only Python repeats today, so most tools simply isolate their own block.
- Tools are toggle buttons: tap, click, Enter or Space pins the highlight; again or Esc unpins. Mouse-only hover so taps on phones don't stick. A polite live line announces where the tool is used.
- Only reacts to the visitor; no scroll animation here (Phase 8 stays site-wide).

## 029 — Capabilities as a library card catalogue (2026-11-16)
- Supersedes the 2 × 2 layout of Phase 3 (still too static after ADR 028). A hairline card-catalogue cabinet with four drawers; opening one slides it toward a reading desk where its index card shows the tools and context. One open at a time, Backend open on arrival.
- Drawn with tokens and CSS only (no images); index card = white paper, olive top rule, hairline dividers, punch hole. Phone: the card opens under its drawer.
- The ADR 028 cross-highlight stays, adapted: a tool on the open card marks every other drawer that also holds it.
- Same approved copy; no ratings. Motion only on interaction and `motion-safe`.

## 030 — Capabilities as moving logo bands (2026-11-16)
- Supersedes 028/029 (the catalogue felt much worse). Only logos and names of the stack, no "used in" context lines: two endless bands drifting in opposite directions.
- Logos from Simple Icons v16.36.0 (CC0), 12 paths copied into `src/data/stack.ts`; no dependency. Espresso by default; brand colour on hover only (exception to ADR 015, like shadows). "Computer vision" dropped (no logo); YOLO uses the Ultralytics YOLO mark.
- Pure CSS animation in a server component; pauses on hover; reduced motion shows a still row; screen readers get one plain list per band.
- No visible pause control, at the user's request. Trade-off: WCAG 2.2.2 (Pause, Stop, Hide) is only met for reduced-motion users and on hover; revisit in the Phase 7 audit.

## 031 — Polish pass from the design-taste reviews (2026-11-16)
- Inquiry links (navbar, "Get in Touch", hero button) sit behind `INQUIRY_LIVE` until `#inquiry` exists; "Skip to content" link added; readable labels ≥ 12px; phone tap targets ≥ 44px.
- About moves to 5/7 to share Works' column line; the hero keeps 7/5. On phones the quote card follows the meta strip and the typewriter wraps "Building" onto its own line.
- Copy (supersedes parts of 008/023-era copy): bio "robust database architectures" → "well-modelled relational databases"; hero button "Get in touch ↓"; section renamed **Stack** (nav, heading, `#stack`); meta labels SEASON / GITHUB; kicker dash → `·`; About drops "actually". The name stays the h1.
- Hero enters once on load: staggered 12px fade-up (0–400ms), `motion-safe` only.
- Skipped on purpose (skill rules that clash with this site): screen-snapped section heights, no hairlines, pause buttons, always-colour logos, hero split top-alignment.
