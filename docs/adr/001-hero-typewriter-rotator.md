# ADR 001: Dynamic Typewriter Role Rotator in Hero Section

- **Status**: Accepted
- **Date**: 2026-11-12
- **Deciders**: Nischal Basnet, Principal Architect Agent

---

## 1. Context & Problem Statement
In technical developer portfolios, static hero headlines can feel flat or fail to convey multiple areas of expertise (full-stack engineering, AI systems, backend microservices, interactive UI). The user requested a dynamic typewriter text animation matching the provided visual reference (`And I'm a Frontend Devel|`).

We need an implementation that:
1. Is lightweight, responsive, and avoids hydration mismatch in Next.js 15 App Router.
2. Cycles smoothly between key engineering titles.
3. Integrates with the established design system tokens without adding bloated third-party dependencies.

---

## 2. Decision
We will build a custom, zero-dependency client component (`<TypewriterRole />`) powered by an internal React hook (`useTypewriter`):
- **Location**: Hero Section, directly beneath the candidate name.
- **Prefix**: *"I build"* or *"Specializing in"* with dynamic role insertion.
- **Cycling Roles**:
  1. `Full-Stack Systems`
  2. `AI & Scalable Backends`
  3. `Interactive Web Applications`
  4. `High-Performance APIs`
- **Visual Styling**:
  - Typed text: `text-cyan-400 glow-cyan font-mono font-medium`
  - Cursor: Vertical pipe `|` or narrow block with infinite pulse/blink animation via Tailwind `animate-pulse` or custom CSS keyframes.

---

## 3. Technical Implementation Specification
- **Timing Configuration**:
  - Type speed: `75ms` per character.
  - Delete speed: `40ms` per character.
  - Pause duration on completed phrase: `1800ms`.
  - Pause duration before next phrase: `400ms`.
- **SSR & Hydration Safety**:
  - Pre-render the first phrase statically on the server so search engines and no-JS scrapers see complete semantic content without layout shifts.
  - Activate the typewriter tick loop only on client mount (`useEffect`).

---

## 4. Consequences
- **Positive**:
  - Zero added bundle weight (no external packages).
  - Perfect color and typography harmony with the Shadow Monarch design system.
  - SEO-friendly static fallback.
- **Trade-offs**:
  - Component must be tagged `'use client'` at the component leaf boundary to preserve Server Component efficiency across the rest of the Hero section.
