# Portfolio v1 — Master Plan
Status: in progress — Phase 2 (Selected Works), M2 next (M1 deck approved provisionally 2026-11-16; may change if a better reference turns up)
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
- [x] **M2 Case study on the card's back (working slice, ADR 027):** a hairline ghost button "Read case study →" on the top shipped card turns the dossier over (real 3D turn, ~500ms; flat at rest on both sides, ADR 010; reduced motion = instant swap). The back is the case study: Problem / Solution / Challenges / Stack as ledger rows, `SOURCE ↗` (`rel="noopener noreferrer"`), and `[ Close ]` to turn it face-up. The card grows to fit the back (the height switches at the edge-on midpoint). Any next/prev (button, arrow key, swipe, index) turns the card face-up first, then moves on. Esc turns it face-up. A11y: the hidden face is `inert`; focus moves to the back on open and returns to the button on close; the change is announced. Replaces the slide-out drawer (built, rejected 2026-11-16). Close-out in the same turn as the "ok".

## Phase 3 — Capabilities (`#craft`)  · branch `feat/capabilities-section`
Source: old M6 (ratings dropped by ADR 021).

**Spec.** Horizontal spec ledger, counter `04 // CAPABILITIES`. One row per discipline with a mono row counter (`01 //` …), discipline name in serif, olive tech tags, and an optional one-line real context (e.g. "used in Gym Management System"). **No ratings, dots, percentages or bars.**

Candidate tags (from decisions 005/008; confirm at M0):
- **Backend:** Laravel, Livewire, PHP, FastAPI, Python
- **Databases:** PostgreSQL, MySQL
- **AI & Vision:** YOLO, Python, computer vision
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS

- [ ] **M1 Capabilities (single slice):** content first (confirm the tag list and context lines, multiple choice), then `src/data/capabilities.ts` + `CapabilitiesSection.tsx` (server), fully styled (hairline ledger rows on desktop; stacked rows with wrapping tags on mobile) and accessible (`<dl>`/`<ul>` semantics, tag contrast per ADR 022). Close-out in the same turn as the "ok".

## Phase 4 — Inquiry (`#inquiry`)  · branch `feat/inquiry-section`
Source: old M7.1, ADR 021.

**Spec.** Counter `05 // INQUIRY`. Two parts:
- **Form:** Name, Email, Opportunity type (select: DRAFT options at M0), Message. Submits from the browser to **Web3Forms** (`POST https://api.web3forms.com/submit`, JSON) with a hidden honeypot field. States: idle → sending → sent / error, announced via `aria-live`.
- **Direct:** `nischealbasnet10@gmail.com` (approved for publishing, ADR 021) with a copy-to-clipboard button (`Copied ✓` feedback) and a `mailto:` link.

The Web3Forms access key is public by design (it only routes mail to you); keep it in `src/data/site.ts` along with the email.

- [ ] **M1 Section + copy email (working slice):** content first (opportunity-type options, intro line, success/error copy; you create the Web3Forms key at web3forms.com, where you enter the email and the key arrives by mail). Then `InquirySection.tsx` (server shell), `InquiryForm.tsx` + `CopyEmailButton.tsx` (client leaves): the form is fully styled with real `<label>`s (hairline inputs, olive submit pill, form + direct columns on `lg`). The copy-email and `mailto:` work for real (clipboard API with fallback, `Copied ✓`). The form validates in the browser but doesn't send yet.
- [ ] **M2 Sending (working slice):** fetch submit to Web3Forms with honeypot; idle → sending → sent / error states announced via `aria-live`; friendly errors linked with `aria-describedby`; keyboard-only submit; **one real test submission reaches your inbox**. Close-out in the same turn as the "ok".

## Phase 5 — Footer  · branch `feat/footer`
Source: old M7.2, ADR 018 (legacy file deleted).

**Spec.** Hairline top border, mono small text, three groups:
- **Left:** `© 2026 Nischal Basnet` (year computed at build).
- **Middle:** live time `Kathmandu // 15:42 GMT+5:45` (client leaf, updates each minute, `Asia/Kathmandu` via `Intl.DateTimeFormat`); season toggle `[🍂 Autumn / ❄️ Winter]` using `toggleSeason`.
- **Right:** `GitHub ↗` https://github.com/Nischeal (LinkedIn hidden until provided); discreet Monarch watermark (wired in Phase 6).

- [ ] **M1 Footer (single slice):** markup, live Kathmandu clock, working season toggle (`<button aria-pressed>`), GitHub link, watermark placeholder for Phase 6; styled (stacks centred on mobile); accessible (the clock isn't announced every minute). Close-out in the same turn as the "ok".

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
