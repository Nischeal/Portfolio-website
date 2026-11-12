# Decisions & Rules Log - Old-Money Minimalist Redesign

This document tracks all frozen architectural decisions, design rules, and plan revisions for the Old-Money Minimalist portfolio.

---

## 🎯 Global Rules & Constraints

1. **Quiet Luxury Over Hype**:
   - Zero aggressive animations, zero thick borders, zero intrusive gaming HUDs on initial load.
   - Restraint, whitespace, hairline borders (`#E7E2D8`), and tactile diffuse shadows.
2. **Authenticity & Grounded Voice**:
   - No pseudo-poetic fluff or pretentious literature jargon.
   - Never speculate or assume user skills, job titles, or experience. Confirm directly with the user.
3. **Implicit Visual Storytelling**:
   - Tailoring & Fashion: Editorial proportions, Swiss-dial counters (`01 //`), Cormorant Garamond display serif, pill buttons.
   - Seasonality: Automatic calendar-based falling leaves / snow canvas layer.
   - Solo Leveling: Pure secret easter egg triggered by pressing `M` or clicking the footer watermark.
   - AI & Code: Real projects (**Clip Cuisine**, **Gym Management System**) with architectural drawers and direct GitHub links (`https://github.com/Nischeal`).
4. **Strict Phased Discipline (`task-planner`)**:
   - Execute strictly one milestone per turn. No code modification for a future milestone before current milestone verification and user approval.

---

## 📋 Architectural Decisions Log

### Decision 1: Single-Page Editorial Flow
- **Structure**: Sticky Navbar → Full-Width Editorial Hero → Grounded About Section → Selected Works (with Architectural Drawers) → Horizon Matrix (Capabilities) → Contact Inquiry → Footer (with Kathmandu Time & Monarch Secret).
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

### Decision 5: Grounded "About Me" Section over Abstract Philosophy
- **Rationale**: User clarified they are an engineer, not a poet. Replaced abstract 3-pillar philosophy with a genuine, conversational About Me narrative focusing on background, what they build (AI vision, full-stack, databases), and their engineering standards.
- **Date**: 2026-11-12

### Decision 6: Full-Width Editorial Masthead Hero Layout
- **Rationale**: Removed the right-hand decorative botanical card. Shifted to a full-width typographic layout centered on Cormorant Garamond headline, olive typewriter role rotator, and a functional live status strip.
- **Date**: 2026-11-12

### Decision 7: Hero Typographic Lockup & Bespoke Signature Navigation
- **Rationale**: Replaced repetitive navbar name with fluid signature script (`Alex_Brush`). Upgraded typewriter from tiny monospace to a large Cormorant Garamond italic display line (`Building [...]`). Cleaned up top kicker and increased vertical whitespace.
- **Date**: 2026-11-12

### Decision 8: Authentic Developer Identity & Verified Stack Alignment
- **Rationale**: Replaced speculative typewriter roles with Nischal's exact confirmed competencies: Laravel & Livewire Systems, FastAPI & Python Backends, Full-Stack Web Applications, and Scalable System Architectures. Updated bio to directly highlight Laravel, Livewire, FastAPI, and system design.
- **Date**: 2026-11-12
