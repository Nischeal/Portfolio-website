# ADR 005: Grounded "About Me" Section over Abstract Philosophy

- **Status**: Accepted
- **Date**: 2026-11-12
- **Deciders**: Nischal Basnet, Principal Architect Agent

---

## 1. Context & Problem Statement
During review of Milestone 4, the user raised an essential reality check:
> *"I want to know what is philosophy and craft for a developer? Since this is my portfolio and I am not in poetry, what does it mean?"*

The previous plan proposed an abstract 3-pillar "Philosophy & Craft" triad with concepts like *"The Atmosphere"* and poetic epigraphs. For a pragmatic software engineer building computer vision pipelines with YOLO, relational schemas in PostgreSQL/MySQL, and scalable web architectures in Next.js and Laravel, abstract literary metaphors felt artificial, pretentious, and disconnected from genuine engineering.

---

## 2. Decision
1. **Drop Abstract "Philosophy"**:
   - Eliminate poetic and literary terminology from the layout and navigation.
   - Replace Navbar link `Philosophy` with `About` (`#about`).
2. **Implement Grounded "About Me" Section (`<AboutSection />`)**:
   - Deliver a straightforward, conversational introduction to Nischal Basnet:
     - **Background & Roots**: Full-stack developer based in Kathmandu, Nepal.
     - **What I Enjoy Building**: Computer vision applications (YOLO, Python), robust backend platforms (PHP/Laravel, Python/FastAPI), relational data architecture (PostgreSQL, MySQL), and modern web interfaces (Next.js 15, TypeScript).
     - **How I Work**: Believer in clean code structure, solid database foundations, and building software with the same care and precision as fine tailoring.
3. **Design Treatment**:
   - Clean, readable editorial layout with generous whitespace.
   - Retain the warm linen background (`#F9F6F0`) and deep espresso typography (`#1C1917`), but keep the copy authentic, personal, and grounded.

---

## 3. Consequences
- **Positive**:
  - 100% authentic to the developer's voice — zero fluff or pretentious jargon.
  - Instantly communicates to recruiters and engineering leads who Nischal is, what he builds, and how he approaches technical problems.
  - Preserves the old-money visual elegance while keeping the content grounded in real engineering.
