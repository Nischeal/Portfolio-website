# Phase 1: Layout & Sections — Manual Verification Guide

This guide details manual testing procedures for Phase 1 components.

---

## 🧪 Verification Walkthrough

### 1. Launch Local Preview
```bash
cd /var/www/nischal-portfolio/Portfolio-website/frontend
npm run dev
```
Open `http://localhost:3000` in your browser.

---

### 2. Header & Navigation (`<Navbar />`)
- **Desktop**: Sticky top bar with `NISCHAL // SYS.ARCHITECT` branding and live pulsing cyan dot. Links for `PROFILE`, `ARMORY`, `SKILLS`, and `QUEST // CONTACT` navigate smoothly to anchor targets.
- **Mobile View (<768px)**: Click `[MENU]` button to expand the dark HUD drawer. Clicking any anchor automatically closes the drawer.

---

### 3. Hunter Profile Hero (`<HeroSection />`)
- Translucent `<SystemWindow />` with cyan corner brackets.
- Glowing `SYSTEM ACTIVE` pulse badge.
- Dynamic `<TypewriterRole />` rotating smoothly through:
  - *Full-Stack Web Systems*
  - *Scalable Python & FastAPI APIs*
  - *Next.js & React Architectures*
  - *High-Performance Cloud Databases*
- Quick action CTA buttons for initiating contact and exploring the project armory.

---

### 4. Armory Project Showcase (`<ArmorySection />`)
- Displays two completed production projects with architecture highlights and tech tags:
  1. **HRM & Enterprise Workforce Engine**
  2. **The Shadow Academic (Portfolio & Systems Hub)**
- Features a **"CLASS-EX // LOCKED QUEST"** slot reserved for upcoming autonomous systems work.

---

### 5. Hunter Skill Matrix (`<SkillMatrix />`)
- Categorized status cards for Full-Stack, Backend, Databases, and DevOps.
- Displays Hunter Rank Badges (`S-RANK`, `A-RANK`) and animated `<StatBar />` mastery indexes.

---

### 6. Contact Quest Form (`<ContactQuest />`)
- Styled as a system transmission terminal.
- Submitting the form enters a clean success state (*"QUEST TRANSMISSION RECEIVED"*), ready to connect to our future FastAPI backend.
