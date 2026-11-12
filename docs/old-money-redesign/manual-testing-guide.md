# Old-Money Minimalist Redesign — Manual Testing Guide

This guide details verification procedures for each milestone of the Old-Money Minimalist portfolio redesign.

---

## 🧪 Milestone 1 Verification: Foundation, Tokens & Typography (Completed)
- [x] Run `npm run build` in `frontend/`.
- [x] Background defaults to Warm Linen (`#F9F6F0`).
- [x] Text uses Deep Espresso (`#1C1917`).
- [x] `Cormorant_Garamond`, `Inter`, and `JetBrains_Mono` loaded without layout shift.

---

## 🧪 Milestone 2 Verification: Minimalist Navigation & Seasonal Canvas
- [ ] **Ambient Canvas**:
  - Automatically loads drifting Autumn leaves (or soft Winter snow depending on current month).
  - Smooth 60 FPS animation with zero layout jitter.
- [ ] **Sticky Navbar**:
  - Brand title: `NISCHAL BASNET // ARCHITECT`.
  - Links: `Work`, `Philosophy`, `Craft`, `Inquiry`.
  - Olive pill button: `Get in Touch`.
  - Mobile drawer toggle operates cleanly on small viewports (<768px).

---

## 🧪 Milestone 3 Verification: Split Hero with Botanical Motif
- [x] **Left Column**:
  - Cormorant Garamond display headline ("Nischal Basnet").
  - Dynamic olive typewriter rotator cycling through:
    - *Full-Stack Web Systems*
    - *AI & Vision Pipelines*
    - *Scalable Backend Services*
    - *Interactive Web Experiences*
  - Concise engineering bio statement.
  - Olive pill CTA button ("Explore Work ↓") + Hairline Ghost Button ("Initiate Inquiry ↗").
- [x] **Right Column**:
  - Framed artistic botanical watercolor motif card.
  - Live availability pill (`● Available for Engineering`).

---

## 🧪 Milestone 4 Verification: The Three Pillars ("Philosophy & Craft")
- [ ] **Three-Card Editorial Triad**:
  - `01 // Architecture & Systems`
  - `02 // Proportion & Form`
  - `03 // The Atmosphere`
- [ ] Cards display clean micro-typography and hairline borders (`#E7E2D8`).

---

## 🧪 Milestone 5 Verification: Selected Works & Architectural Drawers
- [ ] **Project Cards**:
  - **Clip Cuisine (Ingredient Finder)**: Python, YOLO, PostgreSQL, Computer Vision tags.
  - **Gym Management System**: PHP, Laravel, MySQL tags.
  - **Class-EX Upcoming Systems**: Autonomous Agent & AI orchestrator.
- [ ] **Slide-Out Drawer**:
  - Clicking any card slides out the architectural detail panel from the right.
  - Features problem/solution, technical highlights, and direct GitHub links (`https://github.com/Nischeal/Ingredient_finder`, `https://github.com/Nischeal/Gym-Management-System`).
  - Closes cleanly via `[Close]`, backdrop click, or `Escape` key.

---

## 🧪 Milestone 6 Verification: Horizon Matrix (Capabilities)
- [ ] Horizontal spec ledger with Swiss-dial counters (`01 //`, `02 //`).
- [ ] Clean mastery indicators and technology tags grouped by discipline.

---

## 🧪 Milestone 7 Verification: Contact & Footer (with Monarch Secret)
- [ ] **Inquiry Form**: Name, Email, Opportunity Type, Message, plus quick-copy button for `nischealbasnet10@gmail.com`.
- [ ] **Footer**:
  - Time indicator: `Kathmandu // GMT+5:45`.
  - Seasonal toggle: `[🍂 Autumn / ❄️ Winter]`.
  - Copyright: `© 2026 // Nischal Basnet`.
  - GitHub profile: `https://github.com/Nischeal`.
- [ ] **Secret Monarch Easter Egg**:
  - Pressing `M` on keyboard or clicking the footer watermark transitions the entire site to deep espresso charcoal (`#141312`) with subtle cyan shadow aura.

---

## 🧪 Milestone 8 Verification: Production Build & Accessibility Audit
- [ ] `npm run build` generates 100% clean static output.
- [ ] Lighthouse performance, accessibility, and contrast check.
