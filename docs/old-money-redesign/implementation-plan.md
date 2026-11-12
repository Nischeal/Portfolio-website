# Old-Money Minimalist Redesign — Implementation Plan

This plan guides the complete transformation of the portfolio into a warm minimalist, old-money editorial aesthetic with subtle seasonal particle layers (Autumn/Winter), tailored visual elegance, and authentic projects (**Clip Cuisine**, **Gym Management System**).

---

## 📦 Inventory of Reusable Assets & Tools

| Category | Existing Asset Path | Reuse Strategy |
| :--- | :--- | :--- |
| **Typewriter Hook** | `src/hooks/useTypewriter.ts` | Reused for editorial role rotator with olive cursor |
| **Typography Engine** | `next/font/google` | Update `layout.tsx` to load `Cormorant_Garamond`, `Inter`, and `JetBrains_Mono` |
| **Styles & Tokens** | `src/app/globals.css` | Replace cyberpunk neon with Warm Linen, Olive Green, and Hairline borders |
| **Project Data** | `src/types/portfolio.ts` | Maintain verified schema for Clip Cuisine & Gym Management System |

---

## 🎯 Phased Milestones Breakdown

### Milestone 1: Design Tokens & Typography Re-Architecture
- [x] **Step 1.1: Font Setup in `layout.tsx`**
  - Replace `Cinzel` with `Cormorant_Garamond` (subsets: latin, weights: 500, 600, 700).
  - Retain `Inter` for body copy and `JetBrains_Mono` for micro-counters.
- [x] **Step 1.2: Design Tokens in `globals.css`**
  - Implement Warm Linen (`#F9F6F0`), Card White (`#FFFFFF`), Deep Espresso (`#1C1917`), and Olive Green (`#4A5D4E`).
  - Configure Tailwind theme extension for old-money tokens (`bg-page`, `text-headline`, `accent-olive`, etc.).
- [x] **Step 1.3: Build Verification & Testing Guide**
  - Verify `npm run build` succeeds locally with zero layout shifts.

### Milestone 2: Minimalist Navigation & Ambient Seasonal Canvas
- [ ] **Step 2.1: Seasonal Canvas Component (`<SeasonalCanvas />`)**
  - Zero-dependency HTML5 canvas rendering delicate, slow-drifting Autumn leaves or Winter snow.
- [ ] **Step 2.2: Minimalist Navbar (`<Navbar />`)**
  - Clean editorial header with brand, navigation links, and a discreet `[🍂 Autumn / ❄️ Winter]` season switch.
- [ ] **Step 2.3: Milestone 2 Manual Verification**
  - Document verification in `manual-testing-guide.md`.

### Milestone 3: Editorial Split Hero Section
- [ ] **Step 3.1: Hero Section Layout (`<HeroSection />`)**
  - Left column: Cormorant Garamond display title, dynamic typewriter rotator in olive green ("Crafting [Full-Stack Systems | AI & Vision Pipelines | Scalable Architectures]"), concise bio, olive pill button ("Get in touch").
  - Right column: Elegant tailored portrait card with diffuse luxury shadow and live status pill ("● Available for Engineering").
- [ ] **Step 3.2: Interactive Easter Egg**
  - Subtle interactive click/hover effect on the status card revealing a faint shadow-monarch aura.
- [ ] **Step 3.3: Milestone 3 Manual Verification**
  - Document verification in `manual-testing-guide.md`.

### Milestone 4: Selected Work Section (Editorial Case Cards)
- [ ] **Step 4.1: Selected Work Layout (`<ProjectsSection />`)**
  - Generous vertical case cards for **Clip Cuisine** and **Gym Management System**.
  - Highlighting architecture details, olive tech badges, and direct `SOURCE ↗` GitHub links.
- [ ] **Step 4.2: Milestone 4 Manual Verification**
  - Verify card responsiveness and link targets in `manual-testing-guide.md`.

### Milestone 5: Technical Craft, Contact Inquiry & Editorial Footer
- [ ] **Step 5.1: Technical Craft Section (`<CraftSection />`)**
  - Clean minimalist overview of engineering proficiencies (AI/Vision, Backend Architecture, Databases, Modern Web).
- [ ] **Step 5.2: Contact & Inquiry (`<ContactSection />`)**
  - Minimalist editorial inquiry conduit and direct email transmission.
- [ ] **Step 5.3: Editorial Footer (`<Footer />`)**
  - Quiet luxury footer with time zone (`Kathmandu // GMT+5:45`), seasonal status, copyright, and GitHub profile.
- [ ] **Step 5.4: End-to-End Build & Final Sign-Off**
  - Run full production build (`npm run build`) and update `manual-testing-guide.md`.
