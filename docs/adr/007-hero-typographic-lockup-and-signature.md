# ADR 007: Hero Typographic Lockup & Bespoke Signature Navigation

- **Status**: Accepted
- **Date**: 2026-11-12
- **Deciders**: Nischal Basnet, Principal Architect Agent

---

## 1. Context & Problem Statement
Visual review of the initial full-width hero revealed three aesthetic friction points:
1. **Redundancy of Name**: Both the top navbar and the main H1 displayed `Nischal Basnet` in identical serif typography, making the page feel repetitive.
2. **Typographic Disconnect in Typewriter**: The rotating roles were rendered in tiny 15px monospace text directly beneath the 80px serif headline, causing it to look like a small terminal line squeezed between large headings and paragraphs.
3. **Cluttered Kicker Line**: The kicker `01 // PORTFOLIO / FULL-STACK & SYSTEMS ARCHITECT` had too many slashes and uppercase characters, detracting from quiet luxury minimalism.

---

## 2. Decision
1. **Bespoke Signature in Top Navbar**:
   - Replace standard text with a fluid, aesthetic signature script `Nischal` using `Alex_Brush` via `next/font/google`.
   - Eliminates name repetition while conveying bespoke craftsmanship (like an authentic ink signature on a tailoring label).
2. **Large Editorial Headline Lockup**:
   - Upgrade the dynamic typewriter from tiny monospace to a **large Cormorant Garamond italic display line (38px–48px)**:
     ```text
     Nischal Basnet
     Architecting [AI Vision Pipelines | Scalable Web Systems | Robust Backend APIs]
     ```
   - Rotating text is highlighted in signature Olive Green (`#4A5D4E`) with a delicate blinking line, turning it into a grand, magazine-level composition.
3. **Clean Spaced Kicker**:
   - Refined to `● KATHMANDU, NEPAL — FULL-STACK & SYSTEMS ENGINEER` in `font-mono tracking-widest text-[11px] text-stone-500` with an olive dot.
4. **Increased Vertical Whitespace**:
   - Add generous margin (`mt-14 pt-8`) above the bottom metadata strip so the headline, bio, and buttons breathe naturally.

---

## 3. Consequences
- **Positive**:
  - The hero feels balanced, confident, and harmonious.
  - The signature script in the nav adds a unique personal touch without feeling corporate.
  - The typewriter text becomes an organic highlight of the headline rather than an awkward orphaned widget.
