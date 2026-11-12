# ADR 006: Full-Width Editorial Masthead Hero Layout

- **Status**: Accepted
- **Date**: 2026-11-12
- **Deciders**: Nischal Basnet, Principal Architect Agent

---

## 1. Context & Problem Statement
The initial Milestone 3 implementation used a split 2-column layout with a decorative botanical watercolor tree card on the right. 

During visual review, the user identified that having an artificial decorative box or illustration on the right felt unnecessary, cluttered, and disconnected from who they are as a software engineer. The user requested exploring a cleaner, bolder direction without forced placeholder illustrations.

---

## 2. Decision
1. **Drop the Split-Box Layout**:
   - Completely eliminate the right-hand container/box card.
2. **Implement a Full-Width Editorial Masthead**:
   - Center the visual gravity around bold, authoritative typography (`Cormorant Garamond` display title, dynamic olive typewriter rotator, and clean bio).
   - Generous breathing space and whitespace.
   - Primary and secondary action buttons (`Explore Selected Work ↓`, `Initiate Inquiry ↗`).
3. **Refined Live Status Strip**:
   - A clean horizontal metadata strip beneath the bio displaying:
     - `📍 Kathmandu, Nepal`
     - `● Available for Engineering`
     - `🍂 Autumn / Winter Season`
     - `↗ GitHub: @Nischeal`

---

## 3. Consequences
- **Positive**:
  - Uncompromising quiet luxury: zero gimmicks, zero placeholder illustrations, 100% confidence.
  - Flawless responsiveness across all viewport sizes (no awkward box stacking on mobile).
  - Puts the developer's engineering identity, location, and real availability center stage.
