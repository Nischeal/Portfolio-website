# Project Specification: Full-Stack & AI Systems Portfolio ("The Shadow Academic")

## SYSTEM DIRECTIVE FOR AI CODING ASSISTANTS
You are acting as a Principal Full-Stack & AI Systems Architect. Read this document in its entirety before writing any code.
- **Strict Stack Lock:** Do NOT introduce unapproved frameworks or libraries (no Vue, Angular, Bootstrap, MongoDB, or raw JS without TypeScript).
- **No Placeholders:** Write complete, runnable, strictly typed code. Never leave `# TODO` or `// rest of code here` comments.
- **Architectural Role:** The user is the System Architect reviewing your work. You MUST follow the **Mandatory 5-Step Milestone Workflow** below for every phase.

---

## 1. Core Identity & Aesthetic Vision ("The Shadow Academic")
Merges two distinct worlds into one cohesive visual identity:
1. **Solo Leveling (System UI & Shadow Monarch):**
   - Crisp RPG "System" interface windows, glowing cyan/shadow-blue borders (`#38BDF8` / `#0284C7`), purple/cyan shadow aura accents (`#7C3AED` / `#06B6D4`), rank badges (`S-Rank`, `A-Rank`), and CLI terminal interactions.
2. **Old-Money Elegance & Autumn/Winter Warmth:**
   - Quiet luxury, editorial typography, rich warm tones (espresso `#1A1412`, deep burgundy `#4A1C24`, warm amber `#D97706`, antique gold `#C5A059`, crisp winter slate `#0F172A`), 1px borders, zero visual clutter, and a custom HTML5 Canvas particle engine (rising shadow aura in Monarch mode, drifting autumn embers in Academia mode, falling winter frost in Editorial mode).

### Typography Rules (Google Fonts via `next/font/google`)
- **Headings & Editorial Titles:** `'Cormorant Garamond'` or `'Cinzel'` (Serif, high-contrast, authoritative)
- **System UI, Terminal, & Stats:** `'JetBrains Mono'` (Monospace, crisp, technical)
- **Body Copy & Descriptions:** `'Inter'` or `'Plus Jakarta Sans'` (Clean sans-serif)

---

## 2. Optimal High-Paying Technology Stack
- **Frontend:** Next.js 15+ (App Router), React 19, TypeScript (strict mode), Tailwind CSS
- **Backend API:** Python 3.12+ with FastAPI, Pydantic v2, Async SQLAlchemy
- **Database & Cache:** PostgreSQL 17 (via Docker) + Redis 7 (rate limiting & caching)
- **Visuals & Audio:** Dependency-free HTML5 Canvas particle system + HTML5 Web Audio / custom persistent ambient player
- **Infrastructure & Testing:** Docker Compose, `pytest` + `httpx` (Backend), `vitest` / `playwright` (Frontend)

---

## 3. Repository & Monorepo Directory Architecture
Maintain this exact modular monorepo structure:
```text
portfolio/
├── frontend/                      # Next.js TypeScript Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx         # Master layout (Fonts, ThemeProvider, AuraCanvas, AudioPlayer)
│   │   │   ├── page.tsx           # Main landing page assembling all sections
│   │   │   └── globals.css        # Tailwind + CSS custom variables for Triple Theme Engine
│   │   ├── components/
│   │   │   ├── canvas/
│   │   │   │   └── AuraCanvas.tsx # 60 FPS HTML5 Canvas (Shadow Aura / Autumn Embers / Winter Frost)
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx     # Minimalist editorial nav + Theme Switcher + Terminal trigger
│   │   │   │   └── AudioPlayer.tsx# Persistent corner ambient lo-fi/weather player
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx       # Editorial serif headline + Solo Leveling "Hunter Profile" window
│   │   │   │   ├── Armory.tsx     # 2 Completed Projects + 1 Locked Quest (Project 03)
│   │   │   │   ├── ProjectModal.tsx # Deep-dive case study, Mermaid architecture, & live JSON viewer
│   │   │   │   ├── SkillMatrix.tsx# Interactive S-Rank / A-Rank system skill breakdown
│   │   │   │   └── ContactQuest.tsx # System Quest inquiry form backed by FastAPI
│   │   │   └── terminal/
│   │   │       └── CommandTerminal.tsx # Cmd+K / Ctrl+K interactive CLI modal
│   │   ├── lib/
│   │   │   └── api.ts             # Typed fetch wrapper for FastAPI endpoints
│   │   └── types/
│   │       └── api.ts             # Strict TypeScript interfaces matching Pydantic schemas
│   └── package.json
├── backend/                       # Python FastAPI Microservice
│   ├── app/
│   │   ├── main.py                # FastAPI entry point, CORS, lifespan events, exception handlers
│   │   ├── core/
│   │   │   ├── config.py          # Pydantic BaseSettings environment configuration
│   │   │   └── redis.py           # Redis client for caching & sliding-window rate limiting
│   │   ├── models/
│   │   │   └── db_models.py       # SQLAlchemy async models (Project, Skill, QuestInquiry)
│   │   ├── schemas/
│   │   │   └── envelopes.py       # Pydantic v2 request/response models + standard JSON envelope
│   │   ├── routers/
│   │   │   ├── system.py          # GET /api/v1/health, POST /api/v1/terminal/exec
│   │   │   ├── portfolio.py       # GET /api/v1/projects, GET /api/v1/skills
│   │   │   └── quests.py          # POST /api/v1/quests (Rate-limited recruiter inquiry)
│   │   ├── services/
│   │   │   └── terminal_service.py# Deterministic command parser (help, whoami, skills, quests, music)
│   │   └── seed/
│   │       └── initial_data.py    # Idempotent DB seeder for Projects 01–03 & Skills
│   ├── tests/
│   │   └── test_api.py            # Pytest async integration suite
│   └── requirements.txt
├── docs/
│   ├── IMPLEMENTATION_PLAN.md     # Step-by-step milestone execution plan
│   ├── ARCHITECTURE.md            # System architecture, DB schema, & Mermaid diagrams
│   ├── DECISIONS.md               # Architectural Decision Records (ADRs)
│   ├── MANUAL_TESTING.md          # Human QA checklist per milestone
│   └── CHANGELOG.md               # Running log of completed features and fixes
├── docker-compose.yml             # Orchestrates frontend, backend, postgres, and redis
└── CLAUDE.md                      # This master specification file