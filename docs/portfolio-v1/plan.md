# Portfolio v1 — Master Plan
Status: in progress — Phase 1 (About), M2 done
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
- **Content:** real and user-confirmed only (ADR 002, 008). Every phase starts with an M0 content gate; anything not confirmed below is DRAFT until approved.
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
- [ ] **M3 Accessibility:** heading order, `aria-labelledby`, contrast of muted text, navbar jump lands on the heading.
- [ ] Close-out: tick roadmap "About".

## Phase 2 — Selected Works (`#work`)  · branch `feat/works-section`
Source: old M5 + old decision 4, decision 002, ADR 021.

**Spec.** Three editorial case cards, counter `03 // SELECTED WORKS`:

| Card | Stack | Link | Status |
|---|---|---|---|
| **Clip Cuisine (Ingredient Finder)**: computer vision | Python, YOLO, PostgreSQL | `SOURCE ↗` https://github.com/Nischeal/Ingredient_finder | not live: no demo link |
| **Gym Management System**: members, subscriptions, attendance, admin dashboard | PHP, Laravel, MySQL | `SOURCE ↗` https://github.com/Nischeal/Gym-Management-System | not live: no demo link |
| **College project (8th semester)** | TBD | none | "In progress / coming soon" card, generic until you name it; not clickable |

Clicking a real card opens a **slide-out drawer** from the right containing: Problem, Solution (architecture), Challenges overcome, Stack ledger, `SOURCE ↗`. It closes on `[Close]`, a backdrop click or Esc.

- [ ] **M0 Content gate:** for both real projects, a 1–2 line card summary + Problem / Solution / Challenges as DRAFT for you to edit (from the repos/README if readable, otherwise questions). Third card wording.
- [ ] **M1 Data + markup:** `src/types/portfolio.ts` (`Project`: slug, title, summary, stack[], problem, solution, challenges[], sourceUrl?, status `"shipped" | "in-progress"`); `src/data/projects.ts`; `WorksSection.tsx` (server) + `ProjectCard.tsx`.
- [ ] **M2 Styling + responsive:** 3-up grid on `lg`, 1-up mobile; quote-card style with lift on hover.
- [ ] **M3 Drawer:** `ProjectDrawer.tsx` (client): `role="dialog"`, `aria-modal`, labelled by title; focus moves in on open, returns to the card on close; Tab is trapped; body scroll locked; Esc/backdrop/[Close]; slide is `motion-safe`.
- [ ] **M4 Accessibility:** cards are real `<button>`s, keyboard open, screen-reader pass, links have `rel="noopener noreferrer"`.
- [ ] Close-out: tick roadmap.

## Phase 3 — Capabilities (`#craft`)  · branch `feat/capabilities-section`
Source: old M6 (ratings dropped by ADR 021).

**Spec.** Horizontal spec ledger, counter `04 // CAPABILITIES`. One row per discipline with a mono row counter (`01 //` …), discipline name in serif, olive tech tags, and an optional one-line real context (e.g. "used in Gym Management System"). **No ratings, dots, percentages or bars.**

Candidate tags (from decisions 005/008; confirm at M0):
- **Backend:** Laravel, Livewire, PHP, FastAPI, Python
- **Databases:** PostgreSQL, MySQL
- **AI & Vision:** YOLO, Python, computer vision
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS

- [ ] **M0 Content gate:** confirm the list, add/remove tech, context lines.
- [ ] **M1 Data + markup:** `src/data/capabilities.ts`, `CapabilitiesSection.tsx` (server).
- [ ] **M2 Styling + responsive:** ledger rows with hairlines on desktop; stacked rows with wrapping tags on mobile.
- [ ] **M3 Accessibility:** list semantics (`<dl>` or `<ul>`), contrast of tags.
- [ ] Close-out: tick roadmap.

## Phase 4 — Inquiry (`#inquiry`)  · branch `feat/inquiry-section`
Source: old M7.1, ADR 021.

**Spec.** Counter `05 // INQUIRY`. Two parts:
- **Form:** Name, Email, Opportunity type (select: DRAFT options at M0), Message. Submits from the browser to **Web3Forms** (`POST https://api.web3forms.com/submit`, JSON) with a hidden honeypot field. States: idle → sending → sent / error, announced via `aria-live`.
- **Direct:** `nischealbasnet10@gmail.com` (approved for publishing, ADR 021) with a copy-to-clipboard button (`Copied ✓` feedback) and a `mailto:` link.

The Web3Forms access key is public by design (it only routes mail to you); keep it in `src/data/site.ts` along with the email.

- [ ] **M0 Content gate:** you create the Web3Forms key (web3forms.com → enter email → key arrives by mail); opportunity-type options; intro line; success/error copy.
- [ ] **M1 Markup:** `InquirySection.tsx` (server shell) + `InquiryForm.tsx` / `CopyEmailButton.tsx` (client leaves), with real `<label>`s.
- [ ] **M2 Styling + responsive:** hairline inputs, olive submit pill, two columns (form + direct) on `lg`.
- [ ] **M3 Behaviour:** fetch submit, states, honeypot, clipboard API with fallback, HTML validation + friendly errors.
- [ ] **M4 Accessibility + real send test:** keyboard-only submit, error association (`aria-describedby`), one real test submission reaches your inbox.
- [ ] Close-out: tick roadmap.

## Phase 5 — Footer  · branch `feat/footer`
Source: old M7.2, ADR 018 (legacy file deleted).

**Spec.** Hairline top border, mono small text, three groups:
- **Left:** `© 2026 Nischal Basnet` (year computed at build).
- **Middle:** live time `Kathmandu // 15:42 GMT+5:45` (client leaf, updates each minute, `Asia/Kathmandu` via `Intl.DateTimeFormat`); season toggle `[🍂 Autumn / ❄️ Winter]` using `toggleSeason`.
- **Right:** `GitHub ↗` https://github.com/Nischeal (LinkedIn hidden until provided); discreet Monarch watermark (wired in Phase 6).

- [ ] **M1 Markup + clock + toggle** (no new content needed beyond the above).
- [ ] **M2 Styling + responsive** (stacks centred on mobile).
- [ ] **M3 Accessibility:** toggle is a `<button>` with `aria-pressed`; the clock is not announced every minute.
- [ ] Close-out: tick roadmap.

## Phase 6 — Monarch mode (easter egg)  · branch `feat/monarch-mode`
Source: old M7.3 + old decision 3, ADR 003/004.

**Spec.** Pressing `M` (ignored while typing in inputs/textareas or with modifier keys) or clicking the footer watermark toggles `data-theme="monarch"` on `<html>`. Dark tokens already exist in `globals.css`. A small fixed pill reads `Shadow Mode // Press M to return`. A faint cyan aura (allowed **only** inside `[data-theme="monarch"]`) appears on the hero quote card. Body transitions colour over ~0.4s (already in `globals.css`).

- [ ] **M0 Decisions:** should the mode persist across reloads (localStorage) or reset each visit? Should canvas particles change in Monarch (e.g. rising shadow motes, from the old vision), or stay leaves/snow?
- [ ] **M1 Toggle mechanics:** `MonarchProvider`/hook (client) setting the attribute; key listener; watermark hookup.
- [ ] **M2 Visuals:** pill, cyan aura, any canvas tweak; verify every section in dark.
- [ ] **M3 Accessibility:** pill announced via `aria-live`, contrast in dark tokens, reduced-motion transitions.
- [ ] Close-out: tick roadmap.

## Phase 7 — Polish, SEO & launch  · branch `feat/polish-seo`
Source: old M8, vision Phase 3, roadmap Polish.

- [ ] **M1 SEO:** `metadataBase: new URL("https://www.nischalbasnet10.com.np")`; OG/Twitter image as a static `public/og.png` (1200×630, designed in the site style); `app/sitemap.ts` + `app/robots.ts` (static); JSON-LD `Person` (name, url, sameAs GitHub).
- [ ] **M2 Audit:** contrast check of all token pairs in both themes; keyboard pass through the whole page; Lighthouse (target ≥95 for performance, accessibility, best practices and SEO) and fix findings.
- [ ] **M3 Launch check:** full build on `master` after merge, live site smoke test on desktop + phone, OG preview check (link pasted in a chat app).
- [ ] Close-out: tick roadmap "Polish".

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
