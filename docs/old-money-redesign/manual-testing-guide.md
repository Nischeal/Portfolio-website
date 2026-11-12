# Old-Money Minimalist Redesign — Manual Testing Guide

This guide details verification procedures for each milestone of the Old-Money Minimalist portfolio redesign.

---

## 🧪 Milestone 1 Verification: Design Tokens & Typography

### 1. Build & Typography Check
Run from project root:
```bash
cd frontend && npm run build
```
**Expected Outcome**:
- `Cormorant_Garamond`, `Inter`, and `JetBrains_Mono` compile and self-host via `next/font/google`.
- Page background defaults to warm linen/cream (`#F9F6F0`).
- Text uses deep espresso (`#1C1917`) instead of pure black.
- Primary accent uses refined olive green (`#4A5D4E`).

---

## 🧪 Milestone 2 Verification: Navigation & Seasonal Canvas

### 1. Visual & Particle Verification
Run `npm run dev` in `frontend/` and open `http://localhost:3000`:
- **Seasonal Canvas**: Subtle, slow-drifting leaves in autumn mode, soft gentle snowflakes in winter mode.
- **Season Toggle**: Clicking `[🍂 Autumn]` / `[❄️ Winter]` smoothly swaps particle physics without freezing.
- **Navigation**: Clean editorial links and olive pill action button.

---

## 🧪 Milestone 3 Verification: Editorial Split Hero

### 1. Hero Verification
- Split layout adapts cleanly on mobile (<768px: stacked; >=768px: 2 columns).
- Left: Cormorant Garamond display title + olive typewriter role rotator + bio + olive pill CTA.
- Right: Tailored visual card with soft luxury shadow and live availability status pill.
- Easter Egg: Clicking/hovering on the card displays a subtle shadow aura.

---

## 🧪 Milestone 4 Verification: Selected Work Cards

### 1. Project Cards
- **Clip Cuisine**: Shows Python, YOLO, PostgreSQL, Computer Vision tags; links to `https://github.com/Nischeal/Ingredient_finder`.
- **Gym Management System**: Shows PHP, Laravel, MySQL tags; links to `https://github.com/Nischeal/Gym-Management-System`.
- Zero broken links, zero placeholder live URLs.

---

## 🧪 Milestone 5 Verification: Craft, Contact & Footer

### 1. End-to-End Verification
- Full page scroll from Hero → Selected Work → Technical Craft → Contact → Footer.
- GitHub link points directly to `https://github.com/Nischeal`.
- Local time zone indicator (`Kathmandu // GMT+5:45`).
- `npm run build` succeeds with zero errors.
