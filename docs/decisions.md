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

## 032 — Design-taste skill drives the design from Phase 5; footer-dark (2026-11-16)
- From Phase 5 each phase follows the `/design-taste-frontend` recipes and runs its checkers (copy-lint, consistency at 1440/390, perf) every milestone. The theme stays: no new colours, fonts or kit; skill "deals" are shown as options for the user to pick; ADR 031's waivers stay.
- Footer = the skill's `footer-dark`, on our tokens inverted (espresso `bg-headline`, linen text; olive only as decoration). The Inquiry form is the page's close, so no extra call-to-action row.
- Rows: signature + lede with *Sections* / *Elsewhere* columns (matching the nav; GitHub, Email; no Privacy/Terms pages); legal row with © year, live Kathmandu clock (not announced), Autumn/Winter switch (`aria-pressed`); the signature set wide as the type moment and Phase 6's Monarch doorway (`data-monarch-doorway`).
- The wide signature uses a solid `color-mix` of two tokens (alpha showed seams where script strokes overlap) and `leading-[1.2]` (tighter leading spilled 27px below the page).

## 033 — Monarch mode built (2026-11-16)
- `M` (not in fields, no modifier keys) or a click/tap on the footer's wide signature toggles `data-theme="monarch"`; remembered in `localStorage` and applied by an inline head script before first paint (no light flash; `suppressHydrationWarning` on `<html>`).
- A polite status pill "Shadow Mode // Press M to return" (not a button; phones use the signature). Cyan stays Monarch-only: a faint aura on the hero quote card and the pill, and rising shadow motes replacing leaves/snow on the canvas.
- The footer stays a dark band in Monarch (footer-only token re-scope, hairline on top). Text on olive buttons uses the dark page colour in Monarch (~4.6:1; white was ~4.0:1, ADR 022). Body colour fade is off under reduced motion.

## 034 — Monarch becomes Shadow Monarch violet, with a flowing aura (2026-11-16)
- Supersedes the cyan/warm-dark parts of 033 at the user's request ("purple and all"). Monarch tokens: ground `#0B0912`, cards `#16121F`, hairlines `#2A2340`, text `#ECE7F7`, muted `#9D93B8`, accent `#7C4DED` (buttons, white text ~5.1:1), light `#B79CFF` (purple text and glow, ~8:1).
- **Exception to the design-taste skill's no-violet rule**, chosen by the user, and scoped strictly to `[data-theme="monarch"]`; the light theme never uses violet (ADR 015/032 unchanged).
- Flowing aura (subtle): the page's one lit border is a purple light travelling round the hero quote card (conic gradient on an animated `@property` angle, 6s) with a breathing glow behind it; the canvas draws rising purple shadow-smoke wisps instead of dots; the dark footer gets a still purple corner glow. All still under reduced motion.

## 035 — Monarch made dramatic, one aura in every season, four extras (2026-11-16)
- The user asked for a dramatic aura and one look regardless of season: in Monarch the canvas always draws the same denser purple smoke (28 wisps desktop / 16 phone, opacity 0.14–0.28), whatever Autumn/Winter is set to; leaves/snow keep their old counts outside Monarch.
- Stronger lit border (2px, brighter light, 4s loop), bigger breathing glow behind the quote card, stronger pill glow and footer corner glow.
- Extras (user-picked ideas 1–4, Monarch only): a one-time "arise" ripple when Monarch is switched on (not on a restored reload); the footer doorway signature glows and breathes purple; a slow purple shimmer across the hero name; a soft purple aura following the mouse (fine pointers only, behind content).
- Skill rules knowingly bent at the user's request (Monarch only): violet, a glow at the cursor, a moving text effect. All rest under reduced motion (ripple and cursor aura hidden).

## 036 — Monarch aura as flow-field smoke; name glow (2026-11-16)
- The round smoke wisps read as "a ball flowing". Replaced by flow-field smoke: 460 fine particles (220 on phones) ride a slowly swirling, upward-biased current, drawn as short additive purple strokes on a canvas that only partly fades each frame, so trails build into curling smoke threads. The mouse pushes the smoke aside. Reduced motion: one pre-settled still.
- Same smoke in every season (season only matters outside Monarch). Leaves/snow are untouched.
- The hero name gets a steady purple glow (`drop-shadow`) under the shimmer; the arise ripple is slower and brighter (1.4s).
- Checked on the production build. The user's dev server kept serving an old `globals.css` (no ripple/shimmer rules), which is why those looked missing; restart `npm run dev` after CSS changes if that happens again.

## 037 — Monarch aura = the skill's `aurora-curtains` shader; cursor aura removed (2026-11-16)
- Why the aura looked bad: a 2D canvas can only fake smoke with dots or strokes (read as "balls", then as streaks). A proper volumetric glow needs a GPU shader. Supersedes the canvas smoke of 035/036.
- The design-taste skill's effect runtime (`fx.js` v1.0.0) and its `aurora-curtains` WebGL shader are vendored **unchanged** in `public/fx/` (plain files, lint-ignored) and loaded with `import(/* webpackIgnore: true */ …)` only when Monarch turns on, so the light site downloads nothing extra (perf: 0 WebGL contexts at load). The runtime handles reduced motion (one still), hidden tabs (paused) and no-WebGL (CSS fallback).
- Tuned for readability on our palette: curtains hung as high as they go (`height 0.3`), `intensity 1.35`, calm zone over the text column, 3 bands, slow sway, a few stars. Canvas draws nothing in Monarch.
- The cursor aura (idea 4 of 035) is removed at the user's request. Ripple, name glow + shimmer, doorway glow and the card's lit border stay.

## 038 — Monarch aura = custom `shadow-smoke` shader (2026-11-16)
- The user disliked the aurora and preferred smoke. Supersedes the aura part of 037 (the runtime setup stays: `public/fx/fx.js` unchanged from the skill, loaded only in Monarch via `webpackIgnore`).
- `public/fx/shadow-smoke/effect.js`, written for this site in the runtime's effect format: domain-warped fbm noise scrolling upward (billowing, curling smoke with real volume), heavy at the bottom with a ragged ceiling, a dark violet body with lit violet rims and an ember line along the bottom edge, a calm zone over the text column. Runtime gives reduced-motion still, tab pause and a CSS fallback.
- Tuned for readability (user's pick "heavy at the bottom only"): `reach 0.42`, `density 0.85`, `glow 0.7`, `scale 1.1`, `calm 0.65` at (0.42, 0.5). The aurora file was removed.

## 039 — Monarch aura = breathing shadow vignette (CSS); shader runtime removed (2026-11-16)
- After four full-screen backgrounds were turned down (canvas balls, canvas threads, aurora shader, smoke shader), the user picked the calmest option: no moving shapes. Supersedes the aura parts of 035–038.
- `.monarch-vignette`: a dim violet light in the middle of the screen, violet-black darkness closing in from every edge with a violet rim where they meet; it slowly creeps in and out (scale + opacity, 7s). `.monarch-grain`: fine still film grain (percent-encoded SVG turbulence; the raw inline SVG made the CSS processor drop every rule after it). Pure CSS, no WebGL; still under reduced motion.
- `public/fx/` (the vendored runtime and the smoke effect) is deleted, with its eslint ignore. Kept from earlier rounds: palette (034), ripple, name glow + shimmer, doorway glow, card lit border, pill glow, dark footer.

## 040 — Monarch motes, reveal transition, clearer name shimmer (2026-11-17)
- Motes: 56 tiny violet specks (28 on phones, 0.7–2.1px, soft glow) rise from the bottom of the screen over the breathing vignette, swaying and twinkling, fading in at the bottom and out near the top; the mouse nudges them. The canvas now sits above the vignette. Reduced motion: one still scatter.
- Switching mode is a reveal: `toggleMonarch` uses the View Transitions API to grow the new theme in a circle from the centre (1.1s, `clip-path` on `::view-transition-new(root)`), and the arise ring is sized and timed to ride that circle's edge, so the colours change with the ring instead of before it. No support or reduced motion: an instant switch. The body colour fade is off during the reveal.
- Name shimmer was hard to see (a fast mid-cycle dash with ease-in-out, half-parked on "net"). Now a clear left-to-right sweep (~2.2s) with a brighter, wider band, then a rest; the cycle is 5s.

## 041 — Monarch awakening: glowing eyes before the reveal (2026-11-17)
- The user asked for glowing eyes like a reference wallpaper. The wallpaper itself is third-party artwork (watermarked), so it isn't used; the eyes are an original SVG drawing: narrow angled almond eyes with glowing lavender whites, violet irises half under the upper lid, a strong purple bloom, soft smoke curling off the outer corners.
- Sequence on switching Monarch on (2.4s): the screen goes near-black, the eyes open and flare (0.15–0.6s), then at 0.65s the View Transition reveal and the arise ring burst out from them and the eyes fade. `toggleMonarch` fires `monarch:awaken`, waits `AWAKEN_MS` (650), then reveals; presses during the awakening are ignored. The overlay has its own view-transition layer so the reveal doesn't clip it.
- Turning Monarch off: the reveal without the eyes. Reduced motion: an instant switch, no eyes.

## 042 — Intimidating eyes; one continuous awakening (2026-11-17)
- The almond eyes with irises read as cartoonish. Now two narrow slits of white-hot light (no iris, no pupil) with a white core and a heavy violet bloom, set apart like a real glare, igniting from a hairline. Smoke streams flow horizontally away from the outer corners: continuous strokes that fade from violet to nothing, stretching and rippling outward.
- The separate arise ring is removed: it played after the eyes had gone and read as a second effect. The awakening is now one moment: near-black → eyes ignite → the dark theme is revealed under the lifting darkness → eyes fade with their smoke (2.6s).

## 043 — Soft eyes of light, smoke curling up and out (2026-11-17)
- The slits still read as cartoonish (hard drawn edges). The eyes are now soft shapes of white light with no outline: the shape itself is blurred and bloomed, with a white-hot centre. Bug behind the earlier hard edges: the flare animation set a CSS `filter` on the same element as the SVG `filter="url(...)"`, which replaced it; the two now sit on separate elements.
- Smoke now follows the user's reference: violet wisps curling up and outward around the eyes like a brow of shadow, made organic by SVG turbulence + displacement, the noise animated so they churn; they fade with distance and drift away as the eyes fade.

## 044 — Eyes as burning streaks of light (2026-11-17)
- The soft almond still read as an almond. Following the user's anime reference (style only; the frame isn't used), each eye is now a burning streak: a small white-hot core at the inner eye and a flame trail streaming outward, wide at the eye and tapering to a ragged tail, its edges torn and flickering by animated SVG turbulence displacement; white → lavender → transparent along its length, violet bloom around it.
- It ignites by shooting outward from the eye (scaleX from the inner end). The curling smoke stays, fainter, so the streak leads. Colour stays Monarch violet (the reference is blue-white).

## 045 — Eyes as blown-out light, close and large (2026-11-17)
- Iterating toward the user's anime reference (style only): each eye is a tall white-hot core with noise-torn flame edges and a short trail flicking outward and up, merged with several blur layers into a blown-out light inside a heavy violet bloom (plus a wide violet halo). No outline, iris, pupil or smoke.
- Big and close: the pair spans ~70% of a desktop screen, eyes set well apart. The two eyes differ slightly (shape, trail, noise seed, flicker speed) and ignite 60ms apart, so they read as living light, not a mirrored stamp.
- Tried and dropped at the user's request: dark hair-like strands across the light.

## 046 — Eyes rebuilt on the reference's anatomy; random flowing wisps (2026-11-17)
- Studying the user's anime reference (style only) gave the anatomy: a long flat band of light with a sharp, straight lower lid slanting down toward the nose (the glare), a ragged upper edge licking upward, a tall core, and a tight cool bloom that keeps the surroundings dark. Each eye is now three layers: a crisp band (sharp lid), a noise-torn flame layer on top, a small flicker at the outer end; weak halo, tight drop-shadow bloom.
- Random wisps (the user's idea): every awakening makes a fresh set of 4–7 tongues per eye (random root, length, lift, thickness, speed) that peel off the top edge and stream back and outward on staggered loops, through the same flame filter. Generated in the event handler, not during render.
- Eyes set wider apart (inner tips ~18% of the width apart); the right eye mirrors the left with its own noise, tilt and timing. Flame filters use a fixed large user-space region so rising wisps never leave it (they rendered raw and pixelated before).

## 047 — Switch = ripple + colour glitch; eyes removed; unused code swept (2026-11-17)
- The user dropped the eyes (and a Tenor GIF idea, after the copyright and tracking concerns were raised) for a glitch, then clarified: keep the ripple, glitch only the colour. The new theme ripples out from the centre (View Transition clip, 1.1s) with the purple ring on its edge, split into violet and cyan copies that jitter for half a second, plus thin violet/cyan fringe bars (each with a chromatic fringe) and faint scanlines, randomised per switch. Back to light: same ripple, quieter glitch. No page tearing.
- Flash safety: only thin bars flicker (small area), everything else is a single transition (WCAG 2.3.1). Reduced motion: instant switch, no glitch.
- Removed with it: `MonarchEyes`, the awakening delay/event, the eye/wisp/smoke CSS, the tear keyframes. A sweep found no other unused files, exports, CSS classes or keyframes; `tokens.md` updated to the current Monarch design.

## 048 — SEO metadata and a build-rendered share card (2026-11-17)
- Share card uses the "Masthead" layout (hero kicker, serif name, role, stack line, hairline, domain) in the light tokens; the user picked it from three options.
- It's rendered at build by a static route `app/og.png/route.tsx` (next/og) instead of a hand-made `public/og.png`, so it stays in code with the real fonts (OFL WOFF files in `frontend/assets/og/`). Not the `opengraph-image` convention: under static export that file has no extension and GitHub Pages would serve it as a download.
- JSON-LD `Person`: name, url, jobTitle, Kathmandu NP, GitHub only. No email (ADR 002/008: only what's already published, kept minimal).
- `SITE_URL` and `GITHUB_URL` live in `src/data/site.ts`; robots allows all; sitemap has the single homepage URL.

## 049 — Old-money always first; NB favicon; share card and head refined (2026-11-17)
- Monarch is an easter egg only: no longer remembered (supersedes the `localStorage` + head boot script part of ADR 033). Every load and reload starts in the old-money theme; Monarch lasts until reload. Entry cues unchanged (M key, footer "Nischal" click, pill once inside). Any old `theme` key left in a visitor's storage is no longer read.
- Favicon: the default Next.js "N" is replaced by an "NB" Cormorant monogram in espresso on linen with an olive ring (user's pick of three), rendered at build (`/icon.png` 192px; `/apple-icon.png` 180px full square, no ring). `theme-color` = linen `#F9F6F0`.
- Share card (skill review): the kicker no longer repeats the role (now "KATHMANDU, NEPAL"), mono text 22→26px so it reads at chat-preview size, the filler `PORTFOLIO` became `github.com/Nischeal`.
- Meta description shortened to one 139-char sentence (approved DRAFT); Google cut the old 224-char one.

## 050 — Monarch: the Works card gets the quote card's flowing edge (2026-11-17)
- User request: the hero quote card's Monarch colour motion also on the Selected Works card. The front card (both faces) gets `.monarch-flow` (purple light running round the edge, 4s loop) and the deck gets `.monarch-glow` (breathing glow behind, on the deck wrapper that never transforms).
- Only the card in front is lit; the stacked cards under it stay plain so the deck doesn't read as a pile of glowing frames.
- Same CSS, no new code paths: light theme unchanged, still under reduced motion. Replaces "one lit border on the page" (ADR 034) with two: the quote card and the Works card.
