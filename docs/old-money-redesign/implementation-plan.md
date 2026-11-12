# Master Implementation Plan: Old-Money Minimalist Portfolio

This document outlines the phased milestone roadmap for **The Shadow Academic** portfolio, merging old-money editorial luxury (David Whyte & Mosh Mohammed inspirations) with seasonal HTML5 canvas ambience, authentic production projects (**Clip Cuisine**, **Gym Management System**), and a secret Shadow Monarch easter egg.

---

## 📦 Inventory of Reusable Assets & Tools

| Asset / Component | Location | Role in Architecture |
| :--- | :--- | :--- |
| **Typewriter Hook** | `src/hooks/useTypewriter.ts` | Zero-dependency hook for editorial headline role cycling |
| **Typewriter Component** | `src/components/ui/TypewriterRole.tsx` | Olive green typewriter role rotator |
| **Typography Engine** | `next/font/google` in `layout.tsx` | `Cormorant_Garamond` (Display), `Inter` (Body), `JetBrains_Mono` (Dials) |
| **Design Tokens** | `src/app/globals.css` | Warm Linen (`#F9F6F0`), Olive Green (`#4A5D4E`), Hairline (`#E7E2D8`) |
| **Project Interfaces** | `src/types/portfolio.ts` | Strictly typed interfaces for Clip Cuisine, Gym System, and Drawers |

---

## 🎯 Phased Milestones Roadmap

### Milestone 1: Clean Foundation, Tokens & Typography (Completed & Verified)
- [x] **Step 1.1**: Purge previous cyberpunk / gaming HUD components and styles.
- [x] **Step 1.2**: Configure `globals.css` with Warm Linen, Card White, Deep Espresso, and Olive Green tokens.
- [x] **Step 1.3**: Configure `layout.tsx` with `Cormorant_Garamond`, `Inter`, and `JetBrains_Mono`.
- [x] **Step 1.4**: Verify local production build (`npm run build`).

---

### Milestone 2: Minimalist Navigation & Ambient Seasonal Canvas Engine
- [x] **Step 2.1: Seasonal Canvas Component (`<SeasonalCanvas />`)**
  - Zero-dependency HTML5 canvas layer detecting calendar month (Autumn drifting amber/olive leaves vs. Winter snow).
  - Sparse & Meditative density (15–22 delicate watercolor leaf silhouettes drifting at 0.6–1.2 px/frame).
  - Subtle mouse breeze deflection on desktop.
- [x] **Step 2.2: Minimalist Sticky Header (`<Navbar />`)**
  - Brand identity: Pure poetic typographic `Nischal Basnet` in medium-weight `Cormorant Garamond`.
  - Links: `Work`, `Philosophy`, `Craft`, `Inquiry`.
  - Action button: Olive pill `Get in Touch`.
  - Mobile drawer: Minimalist text toggle `[ Menu ]` / `[ Close ]` opening an airy warm linen drawer.
- [x] **Step 2.3: Milestone 2 Manual Verification**
  - Verify seasonal rendering and responsive header navigation.

---

### Milestone 3: Split Hero with Botanical Motif
- [ ] **Step 3.1: Hero Section Layout (`<HeroSection />`)**
  - Left column: Cormorant Garamond display headline, dynamic olive typewriter rotator ("Crafting [Full-Stack Web Systems | AI & Vision Pipelines | Scalable Backend Services | Interactive Web Experiences]"), 2-sentence bio statement, Primary Olive Pill (`Explore Work ↓`) + Hairline Ghost Button (`Initiate Inquiry ↗`).
  - Right column: Framed artistic botanical watercolor motif card (inspired by David Whyte's tree) with floating live availability status pill (`● Available for Engineering`).
- [ ] **Step 3.2: Milestone 3 Manual Verification**
  - Verify split typography, responsiveness, and typewriter cycling.

---

### Milestone 4: The Three Pillars ("Philosophy & The Craft")
- [ ] **Step 4.1: Three Pillars Triad Layout (`<PhilosophySection />`)**
  - 3 clean editorial cards side-by-side with Swiss-dial counters (`01 //`, `02 //`, `03 //`), Cormorant titles, delicate line icons, and 2-sentence reflections:
    1. **01 // Architecture & Systems**: Scalable full-stack code, Python AI vision pipelines, distributed reliability.
    2. **02 // Proportion & Form**: Tailoring, high-contrast typography, quiet luxury aesthetics.
    3. **03 // The Atmosphere**: Late autumn warmth, crisp winter slate, and contemplative stillness.
- [ ] **Step 4.2: Milestone 4 Manual Verification**
  - Verify card grid layout and editorial micro-typography.

---

### Milestone 5: Selected Works with Slide-Out Architectural Drawers
- [ ] **Step 5.1: Selected Works Cards (`<ProjectsSection />`)**
  - Generous editorial case cards for:
    - **Clip Cuisine (Ingredient Finder)**: Python, YOLO, PostgreSQL, Computer Vision.
    - **Gym Management System**: PHP, Laravel, MySQL, Operations Platform.
    - **Class-EX Upcoming Systems**: Autonomous Agent & AI orchestrator.
- [ ] **Step 5.2: Slide-Out Architectural Drawer (`<ProjectDrawer />`)**
  - Smooth slide-out panel from right displaying Problem Statement, Architectural Solution, Technical Challenges Overcome, Full Stack Ledger, and direct `SOURCE ↗` GitHub links (`https://github.com/Nischeal/Ingredient_finder`, `https://github.com/Nischeal/Gym-Management-System`).
  - Closes cleanly via `[Close]`, backdrop click, or `Escape` key.
- [ ] **Step 5.3: Milestone 5 Manual Verification**
  - Test drawer open/close transitions, keyboard escape handling, and GitHub link targets.

---

### Milestone 6: Minimalist Horizon Matrix (Technical Capabilities)
- [ ] **Step 6.1: Horizon Matrix Component (`<CapabilitiesSection />`)**
  - Horizontal spec ledger with Swiss-dial counters (`01 //`, `02 //`), understated mastery ratings (clean percentage or rating dot indicator), and refined olive tech tags grouped by discipline (AI & Vision, Backend Architecture, Databases, Modern Frontend).
- [ ] **Step 6.2: Milestone 6 Manual Verification**
  - Verify responsive table/grid rendering.

---

### Milestone 7: Contact Inquiry Section & Editorial Footer (with Secret Monarch Mode)
- [ ] **Step 7.1: Minimalist Inquiry Form (`<ContactSection />`)**
  - Clean 4-field form (Name, Email, Opportunity Type, Message) with quick-copy `nischealbasnet10@gmail.com` button.
- [ ] **Step 7.2: Editorial Footer & Kathmandu Time Indicator (`<Footer />`)**
  - Time indicator (`Kathmandu // GMT+5:45`), seasonal toggle (`[🍂 Autumn / ❄️ Winter]`), copyright, and GitHub profile link (`https://github.com/Nischeal`).
- [ ] **Step 7.3: Secret Shadow Monarch Easter Egg**
  - Keyboard listener (pressing `M`) or clicking the discreet footer watermark switches `data-theme="monarch"`, transitioning the site into deep charcoal espresso with subtle cyan shadow aura accents on the hero card and a discreet pill `"Shadow Mode // Press 'M' to return"`.
- [ ] **Step 7.4: Milestone 7 Manual Verification**
  - Test easter egg trigger, seasonal footer toggle, and copy-to-clipboard functionality.

---

### Milestone 8: Final Polish, Accessibility & Production Sign-Off
- [ ] **Step 8.1: Full Production Build & Typecheck**
  - Execute `npm run build` and verify static page generation.
- [ ] **Step 8.2: Accessibility & Responsive Audit**
  - Ensure contrast ratios, keyboard navigation, and mobile viewports are flawless.
- [ ] **Step 8.3: Final Project Handover Summary**
  - Present final deliverables and documentation to user.
