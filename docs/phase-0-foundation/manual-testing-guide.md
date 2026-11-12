# Phase 0: Foundation — Manual Verification Guide

This guide details verification procedures for each milestone within Phase 0.

---

## 🧪 Milestone 0.1 Verification: Monorepo Skeleton

### 1. Directory Structure Check
Run from project root:
```bash
ls -la
ls -la backend/
ls -la docs/
```

**Expected Outcome**:
- `frontend/` directory present.
- `backend/` directory present containing `.gitkeep`.
- `docs/` containing nested folders (`phase-0-foundation/`, `design-system/`, `architecture/`).
- Root `.gitignore` properly excluding `node_modules`, `.next`, `.env*.local`, etc.

---

## 🧪 Milestone 0.2 – 0.4 Verification: Next.js 15, Fonts & Design Tokens

### 1. Local Production Build Check
Run from project root:
```bash
cd frontend && npm run build
```

**Expected Outcome**:
- Next.js compiles with zero errors and zero TypeScript warnings.
- Fonts (`Cinzel`, `JetBrains Mono`, `Inter`) downloaded and self-hosted via `next/font/google`.
- Static page generation successfully prerenders `/` and `/_not-found`.

### 2. Local Development Server Preview
Run from `frontend/`:
```bash
npm run dev
```
Navigate in browser to `http://localhost:3000`.

**Visual Quality Check**:
- **Background**: Deep void near-black (`#0A0A14`).
- **Typography**: Clean serif header with `Cinzel`, technical monospace counters with `JetBrains Mono`, clean body copy with `Inter`.
- **System Frame**: 1px subtle white/10 border card with 4 glowing cyan corner brackets.
- **Tone**: Clean, balanced, professional portfolio vibe highlighting your areas of interest (Web Systems, Next.js & Python, AI & Interactive UI) without overwhelming visual noise.
