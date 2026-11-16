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
