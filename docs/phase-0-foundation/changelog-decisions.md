# Decisions & Rules Log - Phase 0: Foundation

This document tracks all key architectural and design decisions for **Phase 0: Foundation & Scaffolding** of the portfolio website.

---

## 🎯 Frozen Rules & Directives

1. **Portfolio-First Rule**: The primary identity is a professional, high-end technical portfolio demonstrating skills, interests, and engineering craft. Gamified/Solo Leveling elements serve strictly as subtle aesthetic motifs (clean HUD cards, refined micro-borders, minimal glows), never overwhelming readability or professional credibility.
2. **Strict Milestone-by-Milestone Workflow**: Execute only one milestone per session. Verify thoroughly with checks before advancing.
3. **Documentation Hub**: All architecture, implementation plans, decisions, and design references are centrally preserved under the root `docs/` folder in structured subdirectories.
4. **Technology Stack Lock (Frontend)**: Next.js 15+ (App Router), React 19, TypeScript (Strict Mode), Tailwind CSS v3/v4, Google Fonts (`Cinzel`, `JetBrains Mono`, `Inter`).

---

## 📋 Architectural Decisions

### Decision 1: Subtle Motif over Heavy Gaming UI
- **Context**: The portfolio must impress technical recruiters, peers, and collaborators while reflecting personal interests.
- **Decision**: Treat Solo Leveling inspiration as a precision design system (1px borders, subtle neon accents, glowing status indicators) layered on top of clean editorial typography and ample negative space.
- **Date**: 2026-11-12

### Decision 2: Monorepo Foundation with Frontend Isolation
- **Context**: The project will eventually incorporate a Python FastAPI backend, but Phase 0–3 focus entirely on delivering a high-performance frontend.
- **Decision**: Create root directories `frontend/`, `backend/` (placeholder with `.gitkeep`), and `docs/`. All frontend package scripts execute inside `frontend/`.
- **Date**: 2026-11-12

### Decision 3: Local Node & Package Management
- **Context**: Environment has Node.js v22.23.2 and npm 10.9.8.
- **Decision**: Use `npm` for dependency management with strict TypeScript checking enabled.
- **Date**: 2026-11-12
