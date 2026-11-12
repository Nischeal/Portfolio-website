# ADR 003: Architectural Pivot to Old-Money Minimalist & Seasonal Aesthetic

- **Status**: Accepted
- **Date**: 2026-11-12
- **Deciders**: Nischal Basnet, Principal Architect Agent

---

## 1. Context & Problem Statement
The initial dark cyberpunk / Solo Leveling gaming HUD direction felt too overwhelming and gamified for a personal engineering portfolio. The user requested a complete aesthetic pivot toward **minimalist old-money elegance**, drawing inspiration from high-end editorial portfolios (David Whyte & Mosh Mohammed references).

Key visual desires to communicate implicitly without verbose text:
1. **Old-Money Elegance & Tailoring**: Warm linen/cream background, deep espresso typography, generous whitespace, 1px hairline dividers, tailored visual card with diffuse shadow.
2. **Personal Accent**: **Olive Green** (`#4F6D4F` / `#3B533B`) as the signature brand color (representing nature, refinement, and timeless style).
3. **Autumn & Winter Seasonality**: A subtle, zero-dependency HTML5 canvas particle layer with a discreet navbar toggle `[🍂 Autumn]` / `[❄️ Winter]` (drifting amber/olive leaves vs. gentle soft snowflakes).
4. **Subtle Solo Leveling Accents**: Micro-accents (Swiss-dial counters like `01 // ARCHIVE`), an optional "Monarch / Shadow Mode" dark toggle, and a secret interactive easter egg (clicking the status card or key shortcut casts a subtle shadow aura).
5. **AI & Coding Depth**: Featured project cards for **Clip Cuisine** (Python, YOLO, PostgreSQL) and **Gym Management System** (PHP, Laravel, MySQL), with clean architectural highlights and direct GitHub links.

---

## 2. Decision
1. **Color System**:
   - Primary Background: Warm Linen / Cream (`#F9F6F0`).
   - Cards & Elevated Panels: Pure Off-White (`#FFFFFF`) with ultra-soft diffuse shadow (`rgba(28, 25, 23, 0.04)`).
   - Primary Text: Deep Espresso (`#1C1917`).
   - Muted Text / Subtitles: Warm Stone / Taupe (`#78716C`).
   - Accent: Refined Olive Green (`#4F6D4F` / `#3A523A`).
   - Dark / Monarch Mode: Deep Espresso Charcoal (`#141312`) with cashmere text (`#F5F2EB`) and subtle shadow aura accents.
2. **Typography Stack**:
   - Headings: `Cormorant Garamond` (High-contrast luxury editorial serif via `next/font/google`).
   - Body & UI: `Inter` (Crisp, modern readability).
   - Micro-Details & Counters: `JetBrains Mono` (Swiss-dial technical precision).
3. **Hero Layout**:
   - Split Editorial Layout:
     - Left: Name, `Cormorant Garamond` headline, olive typewriter rotator ("Crafting [Full-Stack Systems | AI & Vision Pipelines | Scalable Architectures]"), concise bio, olive pill button ("Get in touch").
     - Right: Framed tailored card with soft diffuse shadow, editorial visual, and live status pill ("● Available for Engineering").
4. **Seasonal Canvas Engine**:
   - Zero-dependency canvas layer mounted beneath content.
   - Discreet toggle in Navbar: `[🍂 Autumn]` (calm drifting leaves) / `[❄️ Winter]` (gentle soft snow).

---

## 3. Consequences
- **Positive**:
  - Timeless, sophisticated aesthetic that appeals immediately to high-tier engineering recruiters, clients, and design leaders.
  - Personal passions (fashion, tailoring, autumn/winter, AI, Solo Leveling) are expressed through visual nuance rather than text heavy walls.
  - Retains 100% of the Next.js 15 App Router, React 19, and TypeScript strict setup.
- **Trade-offs**:
  - Re-styling all components from dark neon HUD to warm cream editorial.
