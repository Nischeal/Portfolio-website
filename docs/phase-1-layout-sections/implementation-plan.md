# Phase 1: Layout & Sections — Implementation Plan

This plan guides the phased assembly of the portfolio layout and core landing sections.

---

## 📦 Inventory of Reusable Primitives & Assets

| Component / Utility | Location | Purpose |
| :--- | :--- | :--- |
| `<TypewriterRole />` | `src/components/ui/TypewriterRole.tsx` | Hero rotating skill headline |
| `<SystemWindow />` | `src/components/ui/SystemWindow.tsx` | Translucent HUD container with 1px border and corner brackets |
| `<RankBadge />` | `src/components/ui/RankBadge.tsx` | S / A / B / C / D / E rank indicators |
| `<StatBar />` | `src/components/ui/StatBar.tsx` | Rounded proficiency / mastery progress bar with leading glow |
| Global Design Tokens | `src/app/globals.css` | `--bg-void`, `--cyan-primary`, `--frame-glow`, etc. |

---

## 🎯 Milestones Breakdown

### Milestone 1.1: Core UI Primitives & Navigation
- [x] **Step 1.1.1**: Build reusable `<SystemWindow />` primitive with responsive padding and customizable corner brackets.
- [x] **Step 1.1.2**: Build `<Navbar />` with subtle backdrop blur, editorial logo, section anchors, and mobile menu toggle.
- [x] **Step 1.1.3**: Update `manual-testing-guide.md` and verify navigation responsiveness.

### Milestone 1.2: Hunter Profile Hero Section
- [x] **Step 1.2.1**: Build `<HeroSection />` assembling the system HUD profile window, live status badge, dynamic `<TypewriterRole />`, brief bio, and quick-action links (GitHub, LinkedIn, Resume, Contact).
- [x] **Step 1.2.2**: Ensure full mobile responsiveness and verify clean typography rendering.

### Milestone 1.3: Armory (Projects) Section
- [x] **Step 1.3.1**: Define typed project interfaces in `src/types/portfolio.ts`.
- [x] **Step 1.3.2**: Build `<ArmorySection />` rendering 2 featured project cards + 1 locked quest card with tech stack badges, GitHub links, and live demo buttons.
- [x] **Step 1.3.3**: Verify card grid responsiveness.

### Milestone 1.4: Skill Matrix Section
- [x] **Step 1.4.1**: Build `<RankBadge />` component supporting tiers `S` through `E`.
- [x] **Step 1.4.2**: Build `<SkillMatrix />` breaking down competencies into Full-Stack, Languages, Cloud/DevOps, and Databases with rank tiers and `<StatBar />` bars.

### Milestone 1.5: Contact Quest Section & Footer
- [x] **Step 1.5.1**: Build `<ContactQuest />` styled as a system contract form (Name, Email, Quest Objective / Message).
- [x] **Step 1.5.2**: Build clean `<Footer />` with copyright, status indicators, and social links.
- [x] **Step 1.5.3**: Full end-to-end integration test on `src/app/page.tsx` and manual testing guide sign-off.
