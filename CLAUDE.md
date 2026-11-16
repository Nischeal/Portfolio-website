# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All app code lives in `frontend/`; run commands from there.

```bash
cd frontend
npm run dev      # http://localhost:3000
npm run build    # static export to frontend/out (same as CI)
npm run lint     # eslint
npx tsc --noEmit # type check (no script defined)
```

No test runner is configured yet. Verification = `npm run build` + `npm run lint` + a manual check on desktop and mobile widths.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`: `npm ci && npm run build` in `frontend/` (Node 20), then uploads `frontend/out` to GitHub Pages. Custom domain via `frontend/public/CNAME` (www.nischalbasnet10.com.np), so no `basePath`.

Because `next.config.ts` sets `output: "export"`, anything requiring a server breaks the build: no API routes, Server Actions, middleware, ISR, dynamic routes without `generateStaticParams`, or `next/image` optimization (`images.unoptimized: true`).

## Next.js version warning

This is Next.js 16 / React 19 / Tailwind v4 (via `@tailwindcss/turbopack`, no `tailwind.config`). APIs may differ from training data — read `frontend/node_modules/next/dist/docs/` before using unfamiliar APIs. `next dev` regenerates the block in `frontend/AGENTS.md`; commit it rather than fighting it.

## Architecture

- `src/app/layout.tsx` — loads fonts via `next/font/google` as CSS variables (`--font-cormorant`, `--font-inter`, `--font-mono`, `--font-signature`), wraps everything in `SeasonProvider`, renders the fixed `SeasonalCanvas` behind content (`z-10` content layer) and the `Navbar`.
- `src/context/SeasonContext.tsx` — client context; season (`autumn` | `winter`) auto-detected from calendar month (Dec–Feb = winter), toggleable. The canvas particle engine reads it.
- `src/app/page.tsx` — single-page editorial journey; sections are added under `src/components/sections/` and composed here. Currently only the Hero exists; planned sections are in `docs/roadmap.md`.
- `src/components/{layout,sections,ui,canvas}`, `src/hooks/`. Import alias `@/` → `src/`.
- Styling: design tokens are CSS variables in `src/app/globals.css` (`--bg-page`, `--text-headline`, `--accent-olive`, …), used as `bg-[var(--bg-page)]`. `[data-theme="monarch"]` overrides them for the hidden dark "Shadow Monarch" easter-egg mode. Use tokens, not raw hex.
- `backend/` is empty (planned FastAPI service, only if needed).

## Design direction

**Old-money minimalist editorial**: warm linen background, espresso text, olive accent, hairline borders, Cormorant Garamond + Inter + JetBrains Mono. The project pivoted away from a neon Solo Leveling gaming HUD; those components were deliberately deleted — don't reintroduce them. Solo Leveling survives only as the hidden Monarch mode (`data-theme="monarch"`).

## Docs (written for the user + Claude — keep them short)

- `docs/roadmap.md` — section status and what's next. Update checkboxes when a section lands.
- `docs/decisions.md` — numbered decision log, newest wins. Add a 2–5 bullet entry for any non-trivial design/content decision.
- `docs/design-system/tokens.md` + reference images — keep in sync with `globals.css`.
- `docs/sections/<name>.md` — one working doc per section, created and maintained by the `/section` skill (ADR 012). Marked `Status: shipped` when done, not deleted.
- Don't create other per-feature plan/changelog/testing-guide folders; office workflow skills (`task-planner`, `daily`, `openproject`) don't apply to this repo.
- Commits use conventional format with scopes, e.g. `feat(hero): …`, `fix(hero): …`, `docs: …`, `ci: …`.
- Portfolio content must be real (ADR 002, 008): only user-confirmed projects, links, roles and copy. Ask before adding any personal detail; don't invent projects, metrics, quotes, or placeholder URLs (LinkedIn stays hidden until provided).
