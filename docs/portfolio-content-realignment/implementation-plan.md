# Portfolio Content Realignment — Implementation Plan

This plan outlines the step-by-step phased execution to replace placeholder data with the user's authentic projects (**Clip Cuisine**, **Gym Management System**) and verified GitHub profile links.

---

## 📦 Inventory of Reusable Assets

| Category | Existing Asset Path | Reuse Strategy |
| :--- | :--- | :--- |
| **Section Component** | `src/components/sections/ArmorySection.tsx` | Update project manifest with verified metadata & GitHub repo URLs |
| **Section Component** | `src/components/sections/SkillMatrix.tsx` | Realign skill categories to Python, YOLO, PHP, Laravel, PostgreSQL, MySQL |
| **Layout Component** | `src/components/layout/Navbar.tsx` | Wire GitHub button directly to `https://github.com/Nischeal` |
| **Layout Component** | `src/components/layout/Footer.tsx` | Wire GitHub link to `https://github.com/Nischeal` and remove LinkedIn placeholder |
| **TypeScript Types** | `src/types/portfolio.ts` | Reuse `Project` and `SkillCategory` interfaces |

---

## 🎯 Phased Milestones

### Milestone 1: Armory Section Realignment (Authentic Projects)
- [x] **Step 1.1**: Update `FEATURED_PROJECTS` in `ArmorySection.tsx` with:
  - **Clip Cuisine**: Python, YOLO image detection, PostgreSQL (`https://github.com/Nischeal/Ingredient_finder`, no live demo).
  - **Gym Management System**: PHP, Laravel, MySQL (`https://github.com/Nischeal/Gym-Management-System`, no live demo).
  - **Slot 3**: Retain Class-EX Locked Quest for upcoming autonomous AI systems.
- [x] **Step 1.2**: Update Card rendering logic so projects without `liveUrl` cleanly show only `SOURCE ↗` without broken or empty anchors.
- [x] **Step 1.3**: Update `manual-testing-guide.md` with Armory verification checks.

### Milestone 2: Verified External Links & Navigation Clean-Up
- [ ] **Step 2.1**: Update `Navbar.tsx` to set GitHub link to `https://github.com/Nischeal`.
- [ ] **Step 2.2**: Update `Footer.tsx` to set GitHub link to `https://github.com/Nischeal` and remove unverified LinkedIn anchor.
- [ ] **Step 2.3**: Update `manual-testing-guide.md` with link verification checks.

### Milestone 3: Skill Matrix Realignment & End-to-End Build Verification
- [ ] **Step 3.1**: Update `SkillMatrix.tsx` categories to accurately showcase:
  - AI & Computer Vision (Python, YOLO, Image Processing, Object Detection)
  - Full-Stack & PHP (PHP, Laravel, REST APIs, Architecture)
  - Database Systems (PostgreSQL, MySQL, Schema Design)
  - Modern Frontend (Next.js 15, React 19, TypeScript, Tailwind CSS)
- [ ] **Step 3.2**: Execute local build check (`npm run build`) to ensure zero TypeScript and rendering regressions.
- [ ] **Step 3.3**: Final review and completion checkpoint.
