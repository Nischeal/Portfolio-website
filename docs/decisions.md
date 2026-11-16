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
