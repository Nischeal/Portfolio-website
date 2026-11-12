# 🌑 Shadow Monarch — System UI Design Analysis

## Reference Screenshots

````carousel
![Status Window — Level, stats, HP/MP bars, stat grid](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-status-window.jpg)
<!-- slide -->
![Skills Window — Passive skill card with nested bordered containers](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-skills-window.jpg)
````

---

## 🔍 Pattern Breakdown

### 1. The Frame — Asymmetric Neon Corner Bars

This is the **signature element**. It's NOT a simple CSS border. It's:

- **Asymmetric glowing bars** at the top-left/top-right and bottom-left/bottom-right corners
- Purple/magenta neon (`~#A855F7` → `#D946EF`) with a heavy **bloom/glow effect** (box-shadow blur)
- The bars look like **circuit board traces** — angular, with small perpendicular stubs
- They don't wrap the entire panel — they accent the corners only
- The glow bleeds outward with a soft purple haze

**CSS approach**: Pseudo-elements (`::before`, `::after`) with gradient backgrounds, positioned at corners. Glow via `box-shadow` with large blur radius and purple color. Could also use SVG corner pieces for the circuit-trace detail.

---

### 2. The Panel Background

- **Base**: Very dark, near-black with a slight blue/purple tint (`~#0A0A14` or `#0D0D1A`)
- **Panel overlay**: Semi-transparent dark fill (`rgba(10, 10, 20, 0.85)`) so the background particles/texture bleed through slightly
- **Texture**: Subtle geometric/runic pattern visible behind the content — like a faint hexagonal grid or arcane circuit pattern at very low opacity (`~5-8%`)
- **No harsh edges**: The panel itself has a very thin (`1px`) muted border (`rgba(255,255,255,0.15)`)

---

### 3. Color Palette (Extracted)

| Role | Color | Hex (approx) | Usage |
|:---|:---|:---|:---|
| **Background** | Near-black blue | `#0A0A14` | Page/section background |
| **Panel fill** | Dark translucent | `rgba(13, 13, 26, 0.85)` | System window panels |
| **Panel border** | Muted white | `rgba(255, 255, 255, 0.15)` | Thin 1px borders on panels |
| **Frame glow** | Purple/magenta | `#A855F7` → `#D946EF` | Corner accent bars + glow |
| **Heading text** | Cyan/ice blue | `#38BDF8` → `#67E8F9` | "STATUS", "SKILLS" headings |
| **Heading glow** | Soft cyan | `rgba(56, 189, 248, 0.4)` | `text-shadow` on headings |
| **Body text** | Off-white | `#E2E8F0` | Descriptions, labels |
| **Stat values** | Neon green | `#22C55E` → `#4ADE80` | Numbers, bonus values (+55) |
| **HP bar** | Green gradient | `#22C55E` → `#16A34A` | Health/progress bars |
| **MP bar** | Blue gradient | `#3B82F6` → `#2563EB` | Mana/secondary bars |
| **Bold accent** | Bright white | `#FFFFFF` | "Health and Longevity", key terms |
| **Subtle label** | Dim gray | `#94A3B8` | "JOB:", "TITLE:", sub-labels |

---

### 4. Typography Patterns

| Element | Style | Notes |
|:---|:---|:---|
| **Window title** ("STATUS", "SKILLS") | Uppercase, wide letter-spacing (`0.2em`), medium weight | Cyan glow, centered, ~20-24px |
| **Category label** ("[Passive Skill]") | Uppercase or title-case, smaller, no glow | White, ~14-16px |
| **Stat names** ("STR", "AGI") | Uppercase, monospace font | Small, label-like, ~12-14px |
| **Stat values** ("239", "235") | Large, bold, monospace | Green, ~24-28px |
| **Bonus values** ("(+55)") | Smaller, green, monospace | Inline with stat values |
| **Body text** | Regular weight, clean sans-serif | Off-white, ~14-16px, normal line-height |
| **Bold keywords** | Bold weight, white | "Health and Longevity" style emphasis |

**Font mapping to our stack**:
- Window titles → `Cinzel` (serif, authoritative, great for "STATUS")
- Stat values & labels → `JetBrains Mono` (monospace, crisp numbers)
- Body text → `Inter` (clean sans-serif)

---

### 5. Rank Badge System

The Skill Matrix uses a 6-tier ranking system mirroring Solo Leveling's hunter ranks:

| Rank | Meaning | Color Treatment |
|:---|:---|:---|
| **S-Rank** | Master / Expert | Gold/amber glow (`#F59E0B`) — elite, rare |
| **A-Rank** | Advanced | Cyan glow (`#22D3EE`) — high proficiency |
| **B-Rank** | Proficient | Green (`#22C55E`) — solid competency |
| **C-Rank** | Intermediate | Blue (`#3B82F6`) — working knowledge |
| **D-Rank** | Beginner | Gray-blue (`#94A3B8`) — learning |
| **E-Rank** | Just started | Dim gray (`#64748B`) — early stage |

Each rank badge should be a compact monospace label (`JetBrains Mono`) with a matching color glow, similar to how stat values glow green in the STATUS window.

### 6. Layout Patterns

#### Nested Container Hierarchy
```
┌─ Outer Frame (neon corner bars, glow) ──────────────┐
│  ┌─ Panel (dark fill, thin border) ───────────────┐  │
│  │  HEADING (centered, cyan glow)                 │  │
│  │  ┌─ Section box (thinner border) ───────────┐  │  │
│  │  │  Content (stats grid / skill details)    │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  │  ┌─ Section box ───────────────────────────┐  │  │
│  │  │  More content                           │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

Key observations:
- **Nested boxes within boxes** — inner sections have their own bordered containers
- **Consistent padding** — generous internal spacing (~24-32px)
- **Grid layouts** — the stats (STR/VIT/AGI/INT/PER) use a 2-column grid with icons
- **Centered headings** with content left-aligned below

---

### 6. Glow & Effects

| Effect | Implementation |
|:---|:---|
| **Frame corner glow** | `box-shadow: 0 0 30px 10px rgba(168, 85, 247, 0.5)` on pseudo-elements |
| **Heading text glow** | `text-shadow: 0 0 20px rgba(56, 189, 248, 0.6), 0 0 40px rgba(56, 189, 248, 0.3)` |
| **Panel edge glow** | Very subtle `box-shadow: inset 0 0 60px rgba(168, 85, 247, 0.05)` |
| **Bar glow** | HP/MP bars have a soft glow matching their fill color |
| **Background particles** | Faint floating specks visible in the dark background (canvas layer) |

---

## 🎯 How This Maps to Portfolio Sections

| System UI Element | Portfolio Section | Translation |
|:---|:---|:---|
| STATUS window | **Hero Section** | "Hunter Profile" — your name, title, level (years of experience) |
| Stats grid (STR/AGI/INT) | **Skill Matrix** | S-Rank/A-Rank badges replace stat names; proficiency bars replace numbers |
| SKILLS window | **Project Cards** | Each project is a "skill card" with nested detail containers |
| HP/MP bars | **Skill proficiency** | Progress bars showing mastery level per technology |
| Frame corners | **Every section** | Reusable `<SystemWindow>` component wrapping major sections |
| "[Passive Skill]" label | **Project categories** | "[Full-Stack]", "[Frontend]", "[AI/ML]" tags |

---

## 🧩 Reusable Component Inventory (from these references)

From these two screenshots alone, I can identify **5 core components** to build:

1. **`<SystemWindow>`** — The outer frame with neon corner bars + glow. Wraps any content.
2. **`<SystemHeading>`** — Uppercase, letter-spaced, cyan-glowing heading.
3. **`<StatBar>`** — Horizontal progress bar with colored fill and glow (like HP/MP).
4. **`<StatGrid>`** — 2-column grid of icon + label + value + bonus.
5. **`<SystemCard>`** — Inner nested bordered container for content sections.

These 5 components, composed together, can build **every section** of the portfolio.

---

## 📢 Notification / Popup UI — "Level Up" Pattern

![Level Up notification — cyan glow border, compact layout, matrix code background](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-level-up-notification.jpg)

### What's Different from System Windows

This is a **completely separate component** from the full system panels. Key differences:

| Aspect | System Window (STATUS/SKILLS) | Notification (LEVEL UP) |
|:---|:---|:---|
| **Border style** | Purple corner accent bars (asymmetric) | Full continuous cyan border with chamfered/angled corners |
| **Glow color** | Purple/magenta bloom | Cyan/ice-blue bloom |
| **Background** | Dark translucent panel | Dark translucent + **matrix-style vertical code lines** |
| **Size** | Full section/card | Compact floating toast |
| **Purpose** | Static content display | Momentary notification/feedback |
| **Corner shape** | Rectangular | **Chamfered** — top-left and bottom-right corners are clipped at 45° angles |

### Design Tokens (Notification-specific)

| Role | Color | Hex (approx) |
|:---|:---|:---|
| **Border** | Bright cyan | `#22D3EE` → `#06B6D4` |
| **Border glow** | Cyan bloom | `0 0 25px rgba(34, 211, 238, 0.6), 0 0 50px rgba(34, 211, 238, 0.3)` |
| **Heading text** | Bright white, bold | `#FFFFFF` (large, impactful) |
| **Body text** | Off-white | `#E2E8F0` |
| **Background** | Dark with matrix lines | `rgba(10, 15, 25, 0.9)` + vertical animated code texture |
| **Icon badges** | Small bordered squares | Cyan border, dark fill, icon/number inside |

### Key CSS Details

- **Chamfered corners**: Achievable via `clip-path: polygon(...)` — clipping the top-left and bottom-right corners at ~12-16px 45° angles
- **Matrix code background**: A CSS `background-image` with a repeating vertical pattern of tiny monospace characters at ~3-5% opacity, or a subtle CSS animation scrolling downward
- **Entrance animation**: Should slide in or materialize with a cyan flash — Framer Motion `animate` with scale + opacity + glow pulse

### Portfolio Usage

| Trigger | Notification Message |
|:---|:---|
| **Page load** | "SYSTEM ONLINE — Welcome, Hunter." |
| **Contact form sent** | "QUEST ACCEPTED — Inquiry submitted successfully." |
| **Terminal command** | "NEW SKILL UNLOCKED — Try `help` for commands." |
| **Scroll past projects** | "ACHIEVEMENT — Armory inspected." |
| **Theme switch** | "MODE SHIFT — Shadow Monarch activated." |

### Component: `<SystemNotification>`

This becomes our **6th core component**:

6. **`<SystemNotification>`** — Compact floating toast with chamfered corners, cyan glow border, matrix-code background texture, and auto-dismiss animation.

---

## 🏷️ Quest Accepted / Level Up Banner

![Quest Accepted — stacked banners with level progression and floating side panels](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-quest-accepted.jpg)

### Design Observations

- **Two-tier layout**: "LEVEL UP" banner at top, "QUEST ACCEPTED" detail panel below — they're **separate floating panels** at different positions
- **LEVEL UP banner**: Shield icon + text in a compact chamfered container with heavy cyan glow, functions as a **header badge**
- **QUEST ACCEPTED panel**: Larger, shows progression data (Level 21 → 22, EXP Gained, Ability Points Unlocked) — centered text, monospace numbers
- **Side data panels**: Smaller transparent panels floating to the left with additional text/data — shows the system can render **multiple panels simultaneously**
- **Floating particles**: Small cyan/blue crystalline fragments around the character — reinforces the canvas particle layer

### Portfolio Mapping

| System Element | Portfolio Use |
|:---|:---|
| "LEVEL UP" banner | Page-load welcome banner or section header badge |
| "QUEST ACCEPTED" panel | **Contact form success state** — "Quest Accepted — Your inquiry has been received" |
| Progression data (Level 21 → 22) | Could show "Projects Completed: 2 → 3" or similar |
| Side data panels | Floating contextual info on hover (project tech stack, skill details) |

---

## 📦 Inventory Grid

![Inventory Grid — 6×4 grid of bordered item cells with icons](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-inventory-grid.jpg)

### Design Observations

- Same **purple corner frame** as the Status/Skills windows
- **"INVENTORY"** heading centered at the top
- **Grid of cells**: Approximately 6 columns × 4 rows of equally-sized squares
- Each cell has:
  - A thin `1px` border (`rgba(255,255,255,0.2)`)
  - Dark fill background
  - An icon centered inside (items, potions, weapons)
  - Some icons have a **cyan/blue inner glow** distinguishing special items
- **Empty cells** are just dark bordered squares — gives a "slots to fill" feeling
- The overall grid has a subtle inner glow/sheen

### Portfolio Mapping — **This is the Armory (Projects) Section**

| System Element | Portfolio Use |
|:---|:---|
| Grid of items | Grid of **project cards** — each cell is a project |
| Item icons | Project thumbnails or tech-stack icons |
| Cyan-glowing items | **Featured/highlighted projects** |
| Empty cells | **"Locked Quest"** slots — "Coming Soon" with a lock icon |
| Hover on cell | Expand into a detail modal (the `<ProjectModal>` component) |

**CSS approach**: CSS Grid with `grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))` for responsive item cells. Each cell uses the `<SystemCard>` component variant.

---

## ⏳ Crafting Progress Bar

![Crafting — Progress bar loading state with purple frame](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-crafting-progress.jpg)

### Design Observations

- Same **purple corner frame** with heavy bloom
- "Crafting..." text centered, regular weight (not bold — feels like a system status message)
- **Progress bar**: Rounded, white/light border, partial fill inside, centered below text
- The bar fill appears to be a subtle gradient (slightly brighter at the leading edge)
- **Geometric hexagonal/circuit pattern** clearly visible in the background at low opacity
- Very minimal — just text + bar. No clutter.

### Portfolio Mapping

| System Element | Portfolio Use |
|:---|:---|
| "Crafting..." + progress bar | **Page loading state** — shown while Next.js hydrates or fetches data |
| Progress bar | **Skill proficiency bars** in the Skill Matrix (refined `<StatBar>`) |
| Progress bar animation | Entrance animation — bars fill from 0% to actual value on scroll-into-view |
| Minimal layout | Loading/skeleton state for any section |

### Key Insight for `<StatBar>`

The crafting progress bar refines our `<StatBar>` component: it should have a **rounded border** (not sharp), a subtle **leading-edge highlight**, and optionally show a text label above it.

---

## 📜 Quest Info Detail Panel

![Quest Info — Full detail panel with heading, goal, warning text](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-quest-info.jpg)

### Design Observations

- **Heading bar**: "QUEST INFO" with a circled exclamation `(!)` icon to the left, in a bordered header strip with cyan glow along the top edge
- **Quest name**: "[Urgent Quest: *Defeat the Enemies*]" — bracketed, italicized title
- **"GOAL" subheading**: Underlined, bold, centered — acts as a section divider
- **Body text**: Regular paragraph text, off-white, generous line-height
- **WARNING label**: "WARNING:" in white followed by body text, with **"penalty" highlighted in red** (`#EF4444`) — the only use of red in the system UI
- **Background**: Semi-transparent with a blue-tinted frost/ice texture
- The panel is taller/more vertical than the Status window — it's a **full detail view**

### Portfolio Mapping — **This is the Project Detail Modal**

| System Element | Portfolio Use |
|:---|:---|
| "QUEST INFO" heading | "PROJECT DETAILS" heading with (i) icon |
| Quest name in brackets | Project name: "[Full-Stack: *Portfolio Website*]" |
| "GOAL" section | **"OVERVIEW"** — project description |
| Body text | Technical details, challenges, learnings |
| "WARNING" with red | Could mark **"STATUS: In Progress"** or deprecated tech |
| (!) icon | Info/status icons per project |

### New Color Token

| Role | Color | Hex |
|:---|:---|:---|
| **Danger/Warning text** | Red accent | `#EF4444` |

This is the **only red** in the entire system. Use it extremely sparingly — only for warnings, errors, or "locked" states.

---

## ❓ Notification Confirm Dialog

![Notification — Floating holographic panel with Yes/No buttons](/home/nischal/.gemini/antigravity/brain/6c942cc2-c8fb-4fe5-a895-791c80ae3c1f/ref-notification-confirm.jpg)

### Design Observations

- **"NOTIFICATION"** heading with a circled `(i)` icon — same pattern as "QUEST INFO"
- **Floating holographic panel** — shown at a 3D perspective angle (the system windows exist in 3D space relative to the character)
- **Body text** with a question/prompt
- **"Yes" / "No" buttons** at the bottom — the only instance of **actionable buttons** in the system UI
- Buttons appear to be simple text labels (not heavily styled boxes), separated horizontally
- Same chamfered corners and cyan glow border as the Level Up notification
- The panel appears **translucent** — you can see through it to the background

### Portfolio Mapping

| System Element | Portfolio Use |
|:---|:---|
| Confirm dialog | **Theme switch confirmation** — "Switch to Autumn Academia mode?" [Yes] / [No] |
| Confirm dialog | **Contact form confirmation** — "Submit this quest inquiry?" [Accept] / [Decline] |
| Confirm dialog | **Terminal dangerous commands** — "Execute `clear`?" [Yes] / [No] |
| Button style | Minimal ghost buttons — text with subtle border, glow on hover |

### New Component Pattern: `<SystemButton>`

Buttons in this UI are **not** traditional filled buttons. They're:
- Simple text labels ("Yes", "No")
- Possibly with a subtle border or underline
- Glow effect on hover/focus
- Ghost/outline style, not solid fills

This is important — it sets the button aesthetic for the entire portfolio. No chunky Material Design or Bootstrap-style buttons. **Minimal, text-forward, glow-on-interaction.**

---

## 📦 Complete Component Inventory (10 total)

From all 8 reference screenshots, these are the core reusable components we'll build:

| # | Component | Source Reference | Portfolio Use |
|:---|:---|:---|:---|
| 1 | **`<SystemWindow>`** | Status/Skills/Inventory frames | Outer frame with purple neon corner bars + glow, wraps major sections |
| 2 | **`<SystemHeading>`** | All panels | Uppercase, letter-spaced, cyan-glowing heading with optional icon |
| 3 | **`<StatBar>`** | Crafting progress, HP/MP bars | Rounded progress bar with gradient fill, leading-edge highlight, glow |
| 4 | **`<StatGrid>`** | Status window stats | 2-column grid of icon + label + value + bonus |
| 5 | **`<SystemCard>`** | Inner sections in all panels | Nested bordered container for content groups |
| 6 | **`<SystemNotification>`** | Level Up toast | Compact floating toast with chamfered corners and cyan glow |
| 7 | **`<SystemBanner>`** | Level Up / Quest Accepted header | Compact header badge with shield/icon + title text |
| 8 | **`<InventoryGrid>`** | Inventory grid | Responsive grid of bordered cells for projects/skills |
| 9 | **`<QuestDetail>`** | Quest Info panel | Full detail modal with sections, goals, warnings |
| 10 | **`<SystemButton>`** | Notification confirm | Minimal ghost button — text-forward, glow on hover |

> [!TIP]
> These 10 components, composed together, can build **every section and interaction** in the portfolio. Building them as a design system first (Phase 1, Milestone 1) means every subsequent feature is just composition.
