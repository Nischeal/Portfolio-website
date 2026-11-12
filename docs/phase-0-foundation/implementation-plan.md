# Phase 0: Foundation & Scaffolding — Implementation Plan

This plan establishes the project skeleton, Next.js 15 App Router initialization, TypeScript strict setup, font integration, and deployment baseline.

---

## 📦 Inventory of Core Assets & Tools

| Asset / Tool | Description | Target Use |
| :--- | :--- | :--- |
| **Node.js v22 & npm v10** | System runtime environment | Dependency resolution & compilation |
| **Next.js 15+ (App Router)** | Modern full-stack React framework | Master layout, page routing, SSR/SSG |
| **Tailwind CSS** | Utility-first styling engine | Design tokens, responsive utilities |
| **Google Fonts** | `Cinzel`, `JetBrains Mono`, `Inter` | Zero-CLS typography via `next/font/google` |
| **Cloudflare Pages** | Edge hosting platform | Production deployment pipeline |

---

## 🎯 Milestones Breakdown

### Milestone 0.1: Monorepo Skeleton & Directory Scaffolding
- [x] **Step 0.1.1**: Create `frontend/`, `backend/` (with `.gitkeep`), and root `.gitignore`.
- [x] **Step 0.1.2**: Author root `README.md` documenting monorepo layout and development workflow.
- [x] **Step 0.1.3**: Author initial `docs/phase-0-foundation/manual-testing-guide.md`.

### Milestone 0.2: Next.js 15 + TypeScript Strict Initialization
- [x] **Step 0.2.1**: Initialize Next.js 15 with App Router, TypeScript (strict), and Tailwind CSS in `frontend/`.
- [x] **Step 0.2.2**: Clean up default boilerplate templates (retain clean canvas).
- [x] **Step 0.2.3**: Verify TypeScript typecheck (`npm run build` or `npx tsc --noEmit`).

### Milestone 0.3: Design Tokens & Typography Integration
- [x] **Step 0.3.1**: Configure `next/font/google` in `layout.tsx` for `Cinzel`, `JetBrains Mono`, and `Inter`.
- [x] **Step 0.3.2**: Configure CSS custom properties in `globals.css` matching `docs/design-system/`.
- [x] **Step 0.3.3**: Configure Tailwind theme extension to map CSS variables to utility classes (`bg-void`, `border-subtle`, `text-cyan`, etc.).

### Milestone 0.4: Baseline Page & Build Verification
- [x] **Step 0.4.1**: Build a clean baseline `page.tsx` verifying typography, colors, and subtle glow utilities.
- [x] **Step 0.4.2**: Execute local build and linting checks.
- [x] **Step 0.4.3**: Update `manual-testing-guide.md` and complete Milestone 0 review checkpoint.
