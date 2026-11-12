# ADR 004: Obsolete Theme Cleanup & Clean Slate Initialization

- **Status**: Accepted
- **Date**: 2026-11-12
- **Deciders**: Nischal Basnet, Principal Architect Agent

---

## 1. Context & Problem Statement
With the decision in ADR 003 to pivot completely from the neon/cyberpunk Solo Leveling gaming HUD to a warm, minimalist Old-Money editorial aesthetic (David Whyte & Mosh Mohammed inspirations), legacy components (`<SystemWindow />`, `<RankBadge />`, `<StatBar />`, and old gaming section layouts) became dead code and visual debt.

To maintain code hygiene, prevent styling collisions, and provide a truly clean fresh start, all obsolete gaming HUD files must be cleanly purged.

---

## 2. Decision
1. **Purge Obsolete Components**:
   - Delete `SystemWindow.tsx`, `RankBadge.tsx`, `StatBar.tsx`.
   - Remove obsolete gaming section files (`ArmorySection.tsx`, `SkillMatrix.tsx`, `ContactQuest.tsx`).
2. **Re-architect Core Layout & Styling**:
   - Replace `Cinzel` in `layout.tsx` with `Cormorant_Garamond` (Google Fonts).
   - Cleanly replace `globals.css` with the warm linen (`#F9F6F0`), deep espresso (`#1C1917`), and olive green (`#4A5D4E`) design tokens.
3. **Establish Clean Baseline Page**:
   - Initialize a pristine `page.tsx` embodying the quiet luxury editorial canvas.

---

## 3. Consequences
- **Positive**:
  - Zero dead code or legacy styling conflicts.
  - Crystal clear mental model and clean directory structure.
  - High build efficiency and lightweight bundle.
