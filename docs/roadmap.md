# Roadmap

Single-page portfolio. Sections are built in `frontend/src/components/sections/` and composed in `src/app/page.tsx`. Check each off when it's merged and verified (`npm run build` + `npm run lint` + manual check on desktop and mobile).

## Done
- [x] Foundation: old-money tokens, fonts, static export, GitHub Pages CI
- [x] Navbar: signature brand, links `Work / About / Craft / Inquiry`, `Get in Touch` pill, mobile drawer
- [x] Seasonal canvas (autumn leaves / winter snow, cursor breeze)
- [x] Hero: masthead, typewriter, metadata strip, quote card (decisions 006–010)

## Next
Full specs and milestones: [portfolio-v1/plan.md](portfolio-v1/plan.md). Run with `/my-planner resume portfolio-v1`.
- [x] Phase 1 — **About** (`#about`)
- [x] Phase 2 — **Selected Works** (`#work`): swipeable dossier deck, case study on the card's back (ADR 026, 027)
- [ ] Phase 3 — **Capabilities** (`#craft`)
- [ ] Phase 4 — **Inquiry** (`#inquiry`) via Web3Forms + copy email
- [ ] Phase 5 — **Footer**
- [ ] Phase 6 — **Monarch mode**
- [ ] Phase 7 — **Polish, SEO & launch**

## Later
- [ ] Phase 8 — Scroll reveal
- [ ] Phase 9 — Ctrl+K command terminal
- [ ] Phase 10 — FastAPI backend
