# Portfolio v1 — Master Plan
Status: in progress — next: Phase 6 (Monarch mode). Phase 5 (Footer) done 2026-11-16
Branch: one per phase (named in each phase heading), created from `master` after the previous phase is merged

Single source for everything left to build. Rebuilt on 2026-11-16 from the Gemini-era master plan (old Milestones 4–8 + `vision-roadmap.md`, removed in `77b593a`) and updated with decisions 001–021. **Implement from this file; no need to read git history.** If anything here conflicts with `docs/decisions.md`, the newer decision wins. Update this plan in the same commit.

How to run: `/my-planner resume portfolio-v1` → it finds the first phase with unchecked steps, creates that phase's branch, and runs one milestone per turn with a hard stop.

---

## Global rules (apply to every phase)

- **Page order (ADR 021):** Navbar → Hero → About `02 //` → Selected Works `03 //` → Capabilities `04 //` → Inquiry `05 //` → Footer. Navbar links: `About / Work / Craft / Inquiry` + `Get in Touch` pill.
- **Section shell:** `<section id="…" aria-labelledby="…-heading">` inside `px-6 max-w-6xl mx-auto w-full`, so sections line up with the hero. Counter = mono kicker like the hero's (`font-mono text-[11px] tracking-widest uppercase text-muted`, olive dot). One `h2` per section (hero owns the only `h1`).
- **Styling:** token utilities only (ADR 015); load `portfolio-design-system` at styling milestones. Hairlines, white cards with soft shadow, hover = lift (never rotate text, ADR 010).
- **Components:** server components by default; `"use client"` only on the interactive leaf (ADR 019). Content data lives in `src/data/*.ts`, types in `src/types/portfolio.ts`.
- **Motion:** everything animated respects reduced motion (`motion-safe:` or `usePrefersReducedMotion`, ADR 017).
- **Content:** real and user-confirmed only (ADR 002, 008). A milestone that needs copy asks for it first (multiple choice), gets approval, then builds in the same turn; anything not confirmed below is DRAFT until approved.
- **Milestones are working slices (ADR 023):** each ends in something finished-looking you can try, with accessibility built in; never "markup now, styling later".
- **Static export:** no API routes, Server Actions or middleware. External calls go from the browser.
- **Verify each milestone:** from `frontend/`: `npm run build`, `npm run lint`, `npx tsc --noEmit`, plus manual checks on desktop (≥1280px) and mobile (~375px), recorded in `docs/portfolio-v1/testing.md`.

## Reusable assets

| Asset | Path | Reused for |
|---|---|---|
| Token utilities + Monarch overrides | `src/app/globals.css` | All colour; Monarch phase flips `data-theme` |
| Fonts as `font-serif` / `font-sans` / `font-mono` / `font-signature` | `src/app/layout.tsx` | Headings / body / counters, tags, labels / signature |
| Kicker + metadata-label patterns | `src/components/sections/HeroSection.tsx` | Section counters, small labels |
| Hero container widths | `HeroSection.tsx` | Section shell |
| Season context (`season`, `toggleSeason`) | `src/context/SeasonContext.tsx` | Footer season toggle |
| `SeasonLabel` client leaf | `src/components/ui/SeasonLabel.tsx` | Footer season display |
| `usePrefersReducedMotion` | `src/hooks/usePrefersReducedMotion.ts` | Drawer, scroll reveal, terminal motion |
| Esc-to-close + focus-return pattern | `src/components/layout/Navbar.tsx` | Project drawer, terminal |
| `scroll-padding-top: 5rem` | `globals.css` | Anchor jumps already clear the navbar |
| Card style (white, hairline, soft shadow, lift) | `src/components/ui/HeroQuoteCard.tsx` | Project cards |

---

## Phase 1 — About (`#about`)  · branch `feat/about-section`
Source: old M4, decision 005.

**Spec.** Conversational two-column editorial block (label column + text column on `lg`, stacked on mobile), counter `02 // ABOUT`, generous whitespace, hairline dividers between three themes:
1. **Background & roots:** full-stack developer based in Kathmandu, Nepal.
2. **What I enjoy building:** computer vision (YOLO, Python), backend platforms (Laravel, FastAPI), relational data (PostgreSQL, MySQL), modern web (Next.js, TypeScript).
3. **How I work:** clean code, solid database schemas, built with the care of fine tailoring.

Must not repeat the hero bio word for word. No poetic labels (decision 005).

- [x] **M0 Content gate:** heading + three paragraphs as DRAFT from the points above; ask whether to add personal details (study, how you started, goals); record approved copy here.

  **Copy (approved 2026-11-16).** Sources: decision 005, Clip Cuisine from decision 002, and study details confirmed by the user (BCA, final year, Pascal National College). Text 2 is backend-first, at the user's request. Implement exactly this.

  | Slot | Copy |
  |---|---|
  | Counter | `02 // ABOUT` |
  | Heading (h2) | About me |
  | Label 1 | Background |
  | Text 1 | I'm a full-stack developer based in Kathmandu, Nepal, in my final year of a BCA at Pascal National College. I work across the whole stack, from the database schema to the screen a person actually touches. |
  | Label 2 | What I build |
  | Text 2 | Most of what I build is backend: platforms in Laravel and FastAPI, with data modelled in PostgreSQL and MySQL. Alongside that I explore computer vision, building with YOLO models in Python, like the ingredient detection behind Clip Cuisine, and I use Next.js with TypeScript when a project needs a modern web interface. |
  | Label 3 | How I work |
  | Text 3 | I care about the parts nobody sees: clean, readable code and database schemas that still make sense a year later. I try to build software the way a good tailor makes a suit: measured carefully, fitted properly, made to last. |
- [x] **M1 Markup:** `AboutSection.tsx` (server), compose in `page.tsx` after the hero; reorder navbar links to `About / Work / Craft / Inquiry`. Copy lives in `src/data/about.ts`; blocks are a `<dl>` (label = `dt`, text = `dd`).
- [x] **M2 Styling + responsive.** `lg`: 4/8 columns (counter + heading left; hairline-divided label/text rows right). Mobile: stacked. Page-level hero centring moved to a wrapper around `HeroSection` in `page.tsx`.
- [x] **M3 Accessibility:** heading order, `aria-labelledby`, contrast of muted text, navbar jump lands on the heading. Labels moved to `text-muted`; decorative counter `aria-hidden`; site-wide contrast floor fixed (ADR 022: `--text-muted` → `#736C67`, `text-dim` decoration only, hero labels moved to muted).
- [x] Close-out: tick roadmap "About". Done 2026-11-16.

## Phase 2 — Selected Works (`#work`)  · branch `feat/works-section`
Source: old M5 + old decision 4, decision 002, ADR 021.

**Spec (ADR 026).** A swipeable deck of text-only archival dossiers (title, summary, fact ledger), counter `03 // SELECTED WORKS`:

| Card | Stack | Link | Status |
|---|---|---|---|
| **Clip Cuisine (Ingredient Finder)**: computer vision | Python, Flask, YOLO, PostgreSQL | `SOURCE ↗` https://github.com/Nischeal/Ingredient_finder | not live: no demo link |
| **Gym Management System**: members, subscriptions, attendance, admin dashboard | PHP, Laravel, MySQL | `SOURCE ↗` https://github.com/Nischeal/Gym-Management-System | not live: no demo link |
| **College project (8th semester)** | TBD | none | Sealed "In progress" dossier in the deck; generic until you name it; no case study |

Clicking "Read case study →" on the top (real) card opens a **slide-out drawer** from the right containing: Problem, Solution (architecture), Challenges overcome, Stack ledger, `SOURCE ↗`. It closes on `[Close]`, a backdrop click or Esc.

- [x] **M0 Content gate:** for both real projects, a 1–2 line card summary + Problem / Solution / Challenges as DRAFT for you to edit (from the repos/README if readable, otherwise questions). Third card wording.

  **Facts confirmed by the user (2026-11-16):**
  - **Clip Cuisine:** photo → list of detected ingredients (no recipe suggestions). Flask backend + web UI. Pretrained YOLO used as-is (no custom training). PostgreSQL stores user accounts + detection history. Real challenges: look-alike ingredients/lighting/clutter; model speed on modest hardware.
  - **Gym Management System:** admin dashboard + member portal (members log in). Staff mark attendance manually. Plans with durations/prices, expiry tracking, recorded payments (no online payment). Real challenge: schema for members/plans/subscriptions/renewals. Front-end tech (Blade/Livewire) not stated, so the ledger stays PHP/Laravel/MySQL.

  **Copy (approved 2026-11-16). Implement exactly this:**

  | Slot | Copy |
  |---|---|
  | Counter / heading (h2) | `03 // SELECTED WORKS` / Selected Works |
  | **Clip Cuisine** card summary | Snap a photo of your ingredients and get back a list of what's in it, detected by a YOLO computer-vision model. |
  | Problem | Listing ingredients by hand from what's in front of you is tedious. Clip Cuisine turns a single photo into that list. |
  | Solution | A Flask web app serves a pretrained YOLO model. You upload a photo in the browser, the backend runs detection and returns the ingredients it found. PostgreSQL keeps user accounts and each user's detection history. |
  | Challenges | • Look-alike ingredients: similar-looking items, uneven lighting and cluttered backgrounds make detection less reliable. • Running the model: keeping detection fast enough on modest hardware. |
  | Stack | Python · Flask · YOLO · PostgreSQL |
  | **Gym Management System** card summary | A Laravel platform for running a gym: members, membership plans, payments and attendance, with a portal for members. |
  | Problem | Running a gym on paper or spreadsheets makes it hard to see who has paid, whose membership is about to expire and who has been coming in. |
  | Solution | Staff manage members, plans, payments and attendance from an admin dashboard, recording check-ins as members arrive. Plans have durations and prices, and the system tracks expiry so renewals don't slip through. Members log in to their own portal. |
  | Challenges | • Designing the MySQL schema for members, plans, subscriptions and renewals so each member's history stays intact across renewals. |
  | Stack | PHP · Laravel · MySQL |
  | **College project** card | Label: In progress · Title: Final-year project · Text: My BCA final-year project is underway. Details soon. (Not clickable, no link.) |
  | Drawer labels | Problem · Solution · Challenges · Stack · `SOURCE ↗` · `[ Close ]` |
- [x] **M1 Project deck (working slice, ADR 026):** `src/types/portfolio.ts` (`Project` = shipped | in-progress, each with a `facts` ledger; `AboutBlock` moved here); `src/data/projects.ts` (approved copy + approved ledgers); `WorksSection.tsx` (server) + `ProjectDeck.tsx` (client) + `DossierCard.tsx`. A stack of three text-only dossiers (linen number tab, title, summary, fact ledger). The top card follows the finger/mouse 1:1 with a slight lean while dragged; past 110px or a quick flick it flies off and tucks to the back, otherwise it springs back; the cards below rise as it's dragged. ← brings the previous card back from the left. Also → / ← buttons, arrow keys, horizontal trackpad swipe. Accessible: carousel/slide roles, only the top card exposed, live announcement; reduced motion = instant swaps. No images, no library. Split layout: sticky left column (heading, clickable project index, controls), deck on the right; phones stack heading → deck → index → controls. "Read case study →" on the top card comes in M2.
- [x] **M2 Case study on the card's back (working slice, ADR 027):** a hairline ghost button "Read case study →" on the top shipped card turns the dossier over (real 3D turn, ~500ms; flat at rest on both sides, ADR 010; reduced motion = instant swap). The back is the case study: Problem / Solution / Challenges / Stack as ledger rows, `SOURCE ↗` (`rel="noopener noreferrer"`), and `[ Close ]` to turn it face-up. The back keeps the front's size; the case study scrolls inside it with the header and `[ Close ]` pinned, and starts at the top on every opening (revised 2026-11-16: growing the card made it jump). The cards behind are hidden while the card turns. Any next/prev (button, arrow key, swipe, index) turns the card face-up first, then moves on. Esc turns it face-up. A11y: the hidden face is `inert`; focus moves to the back on open and returns to the button on close; the change is announced. Replaces the slide-out drawer (built, rejected 2026-11-16). Close-out in the same turn as the "ok".
  - [x] **M2 follow-up (approved idea 1, 2026-11-16):** "Next file →" text link on the back, next to `SOURCE ↗`, turns the card face-up and moves the deck on. (A "Turns the card over" hint beside the front button was tried and removed at the user's request.)

## Phase 3 — Capabilities (`#craft`)  · branch `feat/capabilities-section`
Source: old M6 (ratings dropped by ADR 021). Re-checked 2026-11-16 against ADR 022–027: added a design gate (show options, build only the approved one) and made the tag style a choice, since ADR 024 called pill tags cheap-looking and Works shows its stack as a quiet mono line.

**Spec.** A ledger of disciplines, counter `04 // CAPABILITIES`. One row per discipline: mono row counter (`01 //` …), discipline name in serif, its tools, and an optional one-line real context (e.g. "Used in Gym Management System"). **No ratings, dots, percentages or bars** (ADR 021). Server section with one small client leaf for the tool cross-highlight (ADR 028); no motion on its own.

Candidate content (decisions 005/008, Works M0; confirmed at the content gate):
- **Backend:** Laravel, Livewire, PHP, FastAPI, Python
- **Databases:** PostgreSQL, MySQL
- **AI & Vision:** YOLO, Python, computer vision
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS

### Implementation plan
**Files**
| File | Change |
|---|---|
| `src/types/portfolio.ts` | Add `Capability { name: string; tools: string[]; context?: string }` |
| `src/data/capabilities.ts` | `CAPABILITIES_HEADING` + `CAPABILITIES: Capability[]` (approved copy only, header comment like `about.ts`) |
| `src/components/sections/CapabilitiesSection.tsx` | Server component, `<section id="craft" aria-labelledby="craft-heading">` |
| `src/app/page.tsx` | Render after `WorksSection` |

**Reusable assets**
| Asset | Path | Reuse |
|---|---|---|
| Section shell + counter/heading | `AboutSection.tsx` | Same padding, `max-w-6xl`, olive dot + mono counter (`aria-hidden`), serif h2 sizes |
| Hairline ledger rows | `AboutSection.tsx` `<dl>` rows, `DossierCard` ledger | `border-hairline` + `divide-y`, mono `dt` labels in `text-muted` |
| Mono stack line | `DossierCard` back (`Stack` row) | `font-mono text-sm text-headline` joined with ` · ` (if that tag style is chosen) |
| Tokens + contrast floor | `globals.css`, ADR 015/022 | Readable text only in `text-headline` / `text-body` / `text-muted` |
| Navbar link | `Navbar.tsx` (`#craft`) | Already points here; nothing to change |

**Semantics & a11y**
- `h2` "Capabilities" (heading order h1 → h2 continues); row counters are decorative (`aria-hidden`).
- Ledger as `<dl>`: `dt` = discipline, `dd` = `<ul>` of tools (+ the context line as `<p>`), so screen readers hear "Backend, list, 5 items".
- Context lines that name a project link to nothing (Works has no per-project URL yet); plain text.
- No motion → reduced motion needs nothing; hover is colour only.
- Contrast: tools in `text-headline`, context in `text-muted` (≥ 4.8:1).

**Responsive**
- Desktop: 2 × 2 grid of blocks from `md` (768px) up.
- Phone (~375px): each row stacks (counter + name, then tools wrapping, then context); no horizontal scroll.

**Monarch**: token utilities only, so the dark theme works automatically; checked in testing.

**Settled (2026-11-16)**
- Layout: **2 × 2 blocks** on desktop (each block: hairline top border, mono counter, serif discipline name, tools, context). Phones: one column. Counter + heading above the grid.
- Tools: **mono dotted line** (`LARAVEL · LIVEWIRE · PHP`), as on the Works card back. No pills.
- Context lines: **yes, only where true** (from approved Works facts).
- Flask: **left out** (not added to any discipline).
- **Redesign 2 (2026-11-16, ADR 030): moving stack bands. Current.** The catalogue felt much worse and context lines aren't wanted. The section is now only **logos + names**: two endless bands drifting slowly in opposite directions under the heading. Band 1: Laravel, Livewire, PHP, FastAPI, Python, PostgreSQL, MySQL. Band 2: YOLO, Next.js, React, TypeScript, Tailwind CSS ("Computer vision" dropped: no logo). Logos in espresso; brand colour on hover; the band pauses on hover. Edges fade into the linen. **No visible pause control** (user's call). Reduced motion: one still, centred row per band. Screen readers get one plain list per band; the moving copies are hidden. Logos: Simple Icons v16.36.0 (CC0), paths copied into `src/data/stack.ts`, no dependency. Pure CSS, server component, no client JS.
- *Superseded:* **Redesign (2026-11-16, ADR 029): library card catalogue.** Replaces the 2 × 2 blocks (felt too simple and static). A cabinet drawn in hairlines (left, `lg` 5 cols) holds four drawers, one per discipline (label holder `01 // BACKEND` + round pull). Clicking a drawer slides it out toward a "reading desk" (right, 7 cols) where its index card sits: white paper, olive top rule, hairline dividers, punch hole (ruled lines were tried and dropped: they ran through the text); counter + serif name, tool buttons on a mono dotted line, context line. One drawer open at a time; **Backend open on arrival**. Phone: cabinet stacks, the card opens right under its drawer. Cross-highlight kept, adapted: hover/focus/tap a tool on the card and every *other* drawer holding it gets an olive mark on its label (Python on Backend marks AI & Vision). Drawers are buttons with `aria-expanded`/`aria-controls`; tools keep `aria-pressed` pinning + Esc; the card fades in (`motion-safe`). Copy unchanged.
- *Superseded:* **Revision (2026-11-16, ADR 028):** the first build felt too static. Added a **tool cross-highlight**: hovering or focusing a tool turns it olive wherever it appears and dims the blocks that don't use it (tool only; context lines don't react). Tools are buttons: tap/click/Enter pins the highlight (`aria-pressed`), again or Esc unpins; a polite live line announces e.g. "Python: Backend, AI & Vision". Hover is mouse-only so touch taps don't leave a stuck hover. Nothing moves on its own; scroll reveals stay in Phase 8.

**Copy (approved 2026-11-16; context lines dropped by ADR 030, tool names still apply).**
| Slot | Copy |
|---|---|
| Counter / heading (h2) | `04 // CAPABILITIES` / Capabilities |
| 01 Backend | Laravel · Livewire · PHP · FastAPI · Python — *Used in Gym Management System and Clip Cuisine.* |
| 02 Databases | PostgreSQL · MySQL — *MySQL in Gym Management System, PostgreSQL in Clip Cuisine.* |
| 03 AI & Vision | YOLO · Python · Computer vision — *Used in Clip Cuisine.* |
| 04 Frontend | Next.js · React · TypeScript · Tailwind CSS — *This portfolio is built with them.* |

- [x] **M1 Capabilities (single slice):**
  - [x] Content gate: confirm disciplines, tools and context lines (multiple choice); record the approved copy here
  - [x] Design gate: layout + tool style options, build only the approved one
  - [x] Types, data, `CapabilitiesSection`, compose in `page.tsx`
  - [x] Responsive + a11y as above (tool dots trail their item so a wrapped line never starts with one)
  - [x] Cross-highlight (ADR 028): client `CapabilityGrid.tsx`, tool buttons, pin, Esc, live announcement
  - [x] Card catalogue (ADR 029): client `CapabilityCatalogue.tsx` replaces `CapabilityGrid.tsx`; cabinet, drawers, index card, adapted highlight
  - [x] Stack bands (ADR 030): `src/data/stack.ts` (logo paths), `StackItem` type, `CapabilitiesSection` rewritten; catalogue + `capabilities.ts` removed
  - [x] Edges + height (taste review 2026-11-16): the bands start at x=313 while every other section starts at x=401 (unequal edges), and the section is ~485px tall vs ~850px for About/Works. Chosen: **true full-bleed** bands (edge to edge of the screen, fading at both screen edges; heading stays on the content column) and **bigger logos + more air** (~44px logos, larger names, taller bands) so the section is about one screen. Also fixes the edge fade, which sat on the moving track instead of the band
  - [x] Verify: `npm run build`, `npm run lint`, `npx tsc --noEmit`; browser check desktop + 375px
  - [x] `testing.md` section; close-out in the same turn as the "ok"

## Phase 4 — Inquiry (`#inquiry`)  · branch `feat/inquiry-section`
Source: old M7.1, ADR 021.

**Spec.** Counter `05 // INQUIRY`. Two parts:
- **Form:** Name, Email, Opportunity type (select: DRAFT options at M0), Message. Submits from the browser to **Web3Forms** (`POST https://api.web3forms.com/submit`, JSON) with a hidden honeypot field. States: idle → sending → sent / error, announced via `aria-live`.
- **Direct:** `nischealbasnet10@gmail.com` (approved for publishing, ADR 021) with a copy-to-clipboard button (`Copied ✓` feedback) and a `mailto:` link.

The Web3Forms access key is public by design (it only routes mail to you); keep it in `src/data/site.ts` along with the email.

**Copy + layout (approved 2026-11-16).** Implement exactly this.
| Slot | Copy |
|---|---|
| Counter / heading (h2) | `05 // INQUIRY` / Get in touch |
| Intro | Open to backend and full-stack roles, internships and freelance work. Send a note and I'll reply within a few days. |
| Opportunity type | Full-time or internship role · Freelance project · Collaboration · Just saying hello |
| Fields | Name · Email · Opportunity type · Message |
| Submit | Send message |
| Sent | Thanks, your message is on its way. I'll reply to the email you gave. |
| Error | That didn't send. Please try again, or email me directly at the address beside the form. |
| Direct | `DIRECT` label, the address, buttons "Copy email" (→ "Copied ✓" for 2s) and "Open mail ↗" (`mailto:`) |

Layout: 5/7 like About/Works. Left: counter, heading, intro, direct block. Right: the form on a white paper card. Phones: heading → intro → form → direct. Turning `INQUIRY_LIVE` on brings back the navbar "Inquiry" link, the "Get in Touch" pill and the hero's "Get in touch ↓". **Web3Forms key:** you create it later; until it's pasted into `src/data/site.ts` the form shows the error state, so don't push before then.

- [x] **M1 Section + copy email (working slice):** content first (opportunity-type options, intro line, success/error copy; you create the Web3Forms key at web3forms.com, where you enter the email and the key arrives by mail). Then `InquirySection.tsx` (server shell), `InquiryForm.tsx` + `CopyEmailButton.tsx` (client leaves): the form is fully styled with real `<label>`s (hairline inputs, olive submit pill, form + direct columns on `lg`). The copy-email and `mailto:` work for real (clipboard API with fallback, `Copied ✓`). The form validates in the browser but doesn't send yet.
- [x] **M2 Sending (working slice):** fetch submit to Web3Forms with honeypot; idle → sending → sent / error states announced via `aria-live`; friendly errors linked with `aria-describedby`; keyboard-only submit; **one real test submission reaches your inbox**. Close-out in the same turn as the "ok".
  - [x] Code: fetch to Web3Forms (JSON) with `botcheck` honeypot; idle → sending → sent / error in a polite `role="status"`; per-field errors linked with `aria-describedby` + `aria-invalid`, focus moves to the first; keyboard submit; no key = error state without a network call. Copy button falls back to the legacy copy after 1s if the clipboard promise stalls; email in lining numerals.
  - [x] Web3Forms key added (2026-11-16). Real test sent from localhost: Web3Forms answered success and the form showed the sent state.
  - [x] Test email confirmed by you; merged 2026-11-16.

## Phase 5 — Footer  · branch `feat/footer`
Source: old M7.2, ADR 018 (legacy file deleted). **Re-checked 2026-11-16:** from this phase on the design-taste skill drives the design (recipes + checkers) without changing the theme or colours (ADR 032). The original three-group strip is replaced by the skill's **footer-dark** recipe, chosen by you; the clock, season toggle, GitHub link and Phase 6 doorway all stay.

**Spec (skill recipe `footer-dark`, adapted to our tokens).** `<footer class="closing">` after Inquiry (the form is the page's close, so no extra call-to-action row). One espresso band using existing tokens inverted (`bg-headline`, `text-page`; no new colours):
- **Row 1 (lg 12-col):** company block on 4 cols: the "Nischal" signature at ~48px + a one-line lede. Two link columns: *Sections* (About, Work, Stack, Inquiry: the nav's words, same order, each an `#id`) and *Elsewhere* (GitHub ↗, Email ↗ `mailto:`). LinkedIn stays hidden until provided.
- **Row 2 (legal row, hairline above):** `© 2026 Nischal Basnet` (year at build) · live clock `Kathmandu // 15:42 GMT+5:45` (client leaf, `Asia/Kathmandu` via `Intl.DateTimeFormat`, updates each minute, not announced) · season switch: two buttons `🍂 Autumn` / `❄️ Winter` with `aria-pressed`, using `setSeason`.
- **Row 3 (type moment):** the signature set wide across the content width in muted linen, decorative (`aria-hidden`); the Phase 6 Monarch doorway (watermark click) attaches here.
- **390px:** name ~30px, columns two-up, legal row stacked, signature scaled to fit (hand-set sizes per breakpoint, no transform).
- Skill rules kept: columns match the nav; no links to pages that don't exist (no Privacy/Terms); no coloured social icons; no effects in the footer; 44px tap targets.

**Copy (approved 2026-11-16).** Implement exactly this.
| Slot | Copy |
|---|---|
| Lede | Full-stack & backend engineer, Kathmandu. |
| Column heads | Sections · Elsewhere |
| Links | About · Work · Stack · Inquiry · GitHub ↗ · Email ↗ |
| Legal row | © 2026 Nischal Basnet · Kathmandu // HH:MM GMT+5:45 · 🍂 Autumn / ❄️ Winter |

- [x] **M1 Footer (single slice):**
  - [x] `SiteFooter.tsx` (server shell) + `KathmanduClock.tsx` + `SeasonSwitch.tsx` (client leaves); rendered in `layout.tsx` after the content
  - [x] Styled per the spec above; responsive at 1440/1024/768/390 (signature sized per breakpoint to 97–99% of the content width: 6.7 / 12.6 / 15.4 / 21 / 24rem)
  - [x] A11y: `<footer>` landmark, `<nav aria-label="Footer">` with two lists under visible heads, clock in `<time>` with no live region, switch buttons with `aria-pressed`, decorative signature hidden, contrast checked on the band
  - [x] Verify: build, lint, tsc; browser check desktop + 375px
  - [x] **Skill checks:** copy-lint 0 FAIL (1 known WARN); fixed section-gaps at the band edge (128px both sides). Waived per ADR 031/032: footer height (screen rule), split line (footer matches the 5/7 line at x=651), container lines, font families (signature kept), test-server broken requests
  - [x] Feedback fix (2026-11-16): switching to Winter left the leaves on screen as autumn-coloured circles. Particles now remember their season and are replaced on a switch; winter draws six-armed snowflake crystals (frost blue-grey `#97A7B3`, 6–11px, slow spin) instead of dots
  - [x] `testing.md` section; ADR 032; close-out in the same turn as the "ok"

## Phase 6 — Monarch mode (easter egg)  · branch `feat/monarch-mode`
Source: old M7.3 + old decision 3, ADR 003/004.

**Spec.** Pressing `M` (ignored while typing in inputs/textareas or with modifier keys) or clicking the footer watermark toggles `data-theme="monarch"` on `<html>`. Dark tokens already exist in `globals.css`. A small fixed pill reads `Shadow Mode // Press M to return`. A faint cyan aura (allowed **only** inside `[data-theme="monarch"]`) appears on the hero quote card. Body transitions colour over ~0.4s (already in `globals.css`).

- [ ] **M1 Monarch mode (single slice):** questions first (persist across reloads via localStorage, or reset each visit? canvas particles change in Monarch, e.g. rising shadow motes, or stay leaves/snow?). Then the client hook/provider setting `data-theme`, `M` key listener (ignored in inputs or with modifier keys), watermark click, the `Shadow Mode // Press M to return` pill (`aria-live`), cyan aura on the quote card, any canvas tweak, reduced-motion transitions; every section checked in dark. Close-out in the same turn as the "ok".

## Phase 7 — Polish, SEO & launch  · branch `feat/polish-seo`
Source: old M8, vision Phase 3, roadmap Polish.

- [ ] **M1 SEO:** `metadataBase: new URL("https://www.nischalbasnet10.com.np")`; OG/Twitter image as a static `public/og.png` (1200×630, designed in the site style); `app/sitemap.ts` + `app/robots.ts` (static); JSON-LD `Person` (name, url, sameAs GitHub).
- [ ] **M2 Audit:** contrast check of all token pairs in both themes; keyboard pass through the whole page; Lighthouse (target ≥95 for performance, accessibility, best practices and SEO) and fix findings.
- [ ] **M3 Launch check:** full build on `master` after merge, live site smoke test on desktop + phone, OG preview check (link pasted in a chat app).
- [ ] Close-out: tick roadmap "Polish", in the same turn as the M3 "ok".

---

## Later phases (after v1 launch)

### Phase 8 — Scroll reveal  · `feat/scroll-reveal`
Subtle fade + 8–12px rise as sections enter the viewport. One small client `Reveal` wrapper using IntersectionObserver; CSS transitions only (no Framer Motion); no effect under reduced motion; content is visible without JS (no-JS = no hidden content).

### Phase 9 — Command terminal (Ctrl+K)  · `feat/command-terminal`
Mono command palette modal (old vision Phase 2.3): `help`, `whoami`, `projects`, `skills`, `contact`, `season`, `monarch`. Static responses from `src/data/*`; dialog semantics like the drawer. **Open:** available always, or only in Monarch mode?

### Phase 10 — FastAPI backend  · `feat/backend`
`backend/` service (old vision Phase 4: FastAPI, Pydantic v2, PostgreSQL, rate limiting). Hosted outside GitHub Pages. **Open before starting:** hosting (Render / Fly.io / Railway / a VPS), whether it replaces Web3Forms for Inquiry, and what data it serves (projects/skills from DB vs. static files). Needs its own plan (`/my-planner backend`) when started.

---

## Not carried over (superseded)
Solo Leveling HUD, system windows, rank badges, stat bars, Armory/SkillMatrix/ContactQuest naming, Cinzel/Plus Jakarta fonts, Cloudflare Pages hosting and `nischal.info.np` (ADR 013), Framer Motion, ambient audio player, Mermaid diagrams/JSON viewer in project modals, Redis, Docker Compose for the frontend.

## Open questions (resolve in each phase's M0)
- About: personal details beyond decision 005?
- Works: Problem / Solution / Challenges copy for both projects; college project name once it exists.
- Inquiry: Web3Forms key; opportunity-type options.
- Monarch: persistence; canvas behaviour.
- Terminal: always on or Monarch-only.
- Backend: hosting and scope.
