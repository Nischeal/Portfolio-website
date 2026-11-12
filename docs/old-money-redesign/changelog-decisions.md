# Decisions & Rules Log - Old-Money Minimalist Redesign

This document tracks all frozen architectural decisions, design rules, and plan revisions for the Old-Money Minimalist portfolio.

---

## 🎯 Global Rules & Constraints

1. **Quiet Luxury Over Hype**:
   - Zero aggressive animations, zero thick borders, zero intrusive gaming HUDs on initial load.
   - Restraint, whitespace, hairline borders (`#E7E2D8`), and tactile diffuse shadows.
2. **Implicit Visual Storytelling**:
   - Tailoring & Fashion: Editorial proportions, Swiss-dial counters (`01 //`), Cormorant Garamond display serif, pill buttons.
   - Autumn & Winter Seasonality: Automatic calendar-based falling leaves / snow canvas layer.
   - Solo Leveling: Pure secret easter egg triggered by pressing `M` or clicking the footer watermark.
   - AI & Code: Real projects (**Clip Cuisine**, **Gym Management System**) with architectural drawers and direct GitHub links (`https://github.com/Nischeal`).
3. **Strict Phased Discipline (`task-planner`)**:
   - Execute strictly one milestone per turn. No code modification for a future milestone before current milestone verification and user approval.

---

## 📋 Architectural Decisions Log

### Decision 1: Single-Page Editorial Flow
- **Structure**: Sticky Navbar → Split Hero (with Botanical watercolor card) → Three Pillars ("Philosophy & Craft") → Selected Works (with Architectural Drawers) → Horizon Matrix (Capabilities) → Contact Inquiry → Footer (with Kathmandu Time & Monarch Secret).
- **Date**: 2026-11-12

### Decision 2: Automatic Seasonal Canvas with Footer Override
- **Mechanics**: Detects current calendar month (Autumn drifting leaves in Sept-Nov; Winter soft snow in Dec-Feb). Discreet override toggle in the footer.
- **Date**: 2026-11-12

### Decision 3: Pure Secret Shadow Monarch Easter Egg
- **Activation**: Triggered exclusively via keyboard shortcut `M` or clicking the discreet watermark in the footer. Transitions into deep charcoal espresso with faint cyan shadow aura.
- **Date**: 2026-11-12

### Decision 4: Slide-Out Architectural Drawers for Projects
- **Interaction**: Clicking a project case card opens a smooth right-side drawer containing problem/solution context, architectural diagrams/highlights, and verified GitHub repository links.
- **Date**: 2026-11-12
