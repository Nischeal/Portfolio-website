# ADR 002: Real Projects Realignment & Verified Link Integrity

- **Status**: Accepted
- **Date**: 2026-11-12
- **Deciders**: Nischal Basnet, Principal Architect Agent

---

## 1. Context & Problem Statement
The initial template and scaffolding contained mock / placeholder projects ("HRM Engine", "The Shadow Academic") and unverified links (`https://github.com`, `https://linkedin.com`). The user explicitly instructed that only real, completed projects and verified personal links must be included on the portfolio. Any unknown details must be confirmed directly with the user before inclusion.

The user confirmed their completed projects:
1. **Clip Cuisine (Ingredient Finder)**: Python, YOLO (image/ingredient detection), PostgreSQL. Hosted on GitHub: `https://github.com/Nischeal/Ingredient_finder` (not live).
2. **Gym Management System**: PHP, Laravel, MySQL. Member registration, subscriptions, attendance, admin dashboard. Hosted on GitHub: `https://github.com/Nischeal/Gym-Management-System` (not live).
3. **Slot 3**: Retained as a futuristic `"CLASS-EX // LOCKED QUEST"` (upcoming AI & autonomous systems project).

External links:
- GitHub: `https://github.com/Nischeal`
- LinkedIn: Omitted / hidden until the user explicitly provides their profile link.
- Live demo links: Omitted for offline projects (only repository source links displayed).

---

## 2. Decision
1. Update `src/components/sections/ArmorySection.tsx` with verified data for Clip Cuisine and Gym Management System. Remove placeholder live URLs since these repositories are offline projects.
2. Update `Navbar.tsx` and `Footer.tsx` to route GitHub links exclusively to `https://github.com/Nischeal`.
3. Remove unverified LinkedIn link from `Footer.tsx`.
4. Update `SkillMatrix.tsx` so competencies reflect the user's authentic stack: Python & YOLO/AI, PHP & Laravel, PostgreSQL & MySQL, Next.js & TypeScript.

---

## 3. Consequences
- **Positive**:
  - 100% authentic portfolio reflecting the developer's actual GitHub repositories.
  - Zero broken links, zero placeholder external domains.
  - Accurate representation of AI/Computer Vision and Full-Stack abilities.
- **Negative / Constraints**:
  - Live demo buttons disabled for offline projects; direct focus shifts to GitHub source code examination.
