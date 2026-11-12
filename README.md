# Nischal Basnet — Full-Stack & Systems Portfolio

> A high-performance personal engineering portfolio fusing modern web technologies with clean editorial design and precision system UI aesthetics.

---

## 🏛️ Monorepo Architecture

```text
Portfolio-website/
├── frontend/          # Next.js 15+ (App Router), React 19, TypeScript (Strict), Tailwind CSS
├── backend/           # Future Python 3.12+ FastAPI Microservice (PostgreSQL & Redis)
├── docs/              # Central Project Documentation Hub
│   ├── architecture/  # System design specs, vision & roadmap
│   ├── design-system/ # Design tokens, typography, visual reference analysis
│   └── phase-*/       # Milestone implementation plans, decision logs & testing guides
├── CNAME              # Production DNS pointer (nischal.info.np)
└── README.md
```

---

## 🛠️ Development Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Local development server runs at `http://localhost:3000`.

### Documentation
All phase planning, architectural decisions, and testing checklists are maintained under [`docs/`](./docs/).
