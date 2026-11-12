# Decisions & Rules Log - Phase 1: Layout & Sections

This document tracks frozen architectural decisions and design rules for **Phase 1: Shadow Monarch Layout & Sections**.

---

## 🎯 Frozen Rules & Directives

1. **Portfolio-First Balance**:
   - The primary identity is a crisp, modern full-stack developer portfolio.
   - Gaming/anime elements are strictly subtle design motifs: 1px micro-borders, glowing status indicators, translucent HUD cards, and cleanly labeled rank tiers.
2. **Component Modularity**:
   - Every major UI section must be built as an isolated component under `src/components/sections/`.
   - Reusable design system primitives reside under `src/components/ui/` (e.g. `<SystemWindow />`, `<RankBadge />`, `<StatBar />`).
3. **Responsive by Default**:
   - All layouts must adapt cleanly from 320px mobile up to 4K desktop screens without horizontal overflow or cramped text.
4. **Strict Typing**:
   - All section data (projects, skills, navigation links) must use typed TypeScript interfaces located in `src/types/`.
