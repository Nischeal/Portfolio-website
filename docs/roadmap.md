# Roadmap

Single-page portfolio. Sections are built in `frontend/src/components/sections/` and composed in `src/app/page.tsx`. Check each off when it's merged and verified (`npm run build` + `npm run lint` + manual check on desktop and mobile).

## Done
- [x] Foundation: old-money tokens, fonts, static export, GitHub Pages CI
- [x] Navbar: signature brand, links `Work / About / Craft / Inquiry`, `Get in Touch` pill, mobile drawer
- [x] Seasonal canvas (autumn leaves / winter snow, cursor breeze)
- [x] Hero: masthead, typewriter, metadata strip, quote card (decisions 006–010)

## Next
- [ ] **About** (`#about`) — copy per decision 005; `02 // ABOUT` style counter.
- [ ] **Selected Works** (`#work`) — cards for Clip Cuisine, Gym Management System, and a "coming soon" slot (decision 002). Each card opens a slide-out drawer (Problem, Solution, Challenges, Stack, `SOURCE ↗`); closes on `[Close]`, backdrop click, or `Esc`. Recreate a `Project` type in `src/types/` (it was deleted along with the gaming fields).
- [ ] **Capabilities** (`#craft`) — horizontal spec ledger with `01 //` counters and olive tech tags grouped by discipline (Backend, Databases, AI & Vision, Frontend). No gamified ratings.
- [ ] **Inquiry** (`#inquiry`) — form (Name, Email, Opportunity type, Message) + quick-copy email button. ⚠ Static export has no server: decide on mailto, a form service, or the future FastAPI backend.
- [ ] **Footer** — `Footer.tsx` exists but isn't rendered yet: Kathmandu time (GMT+5:45), season toggle, copyright, GitHub link, Monarch watermark.
- [ ] **Monarch mode** — `M` key / watermark toggles `data-theme="monarch"` on `<html>`; tokens already in `globals.css`; small pill "Shadow Mode // Press M to return".
- [ ] **Polish** — accessibility (contrast, keyboard nav, `prefers-reduced-motion` for canvas/typewriter), SEO/OG image, Lighthouse.

## Later
- [ ] `backend/` FastAPI service (e.g. for the inquiry form) — only if a static option isn't enough.
