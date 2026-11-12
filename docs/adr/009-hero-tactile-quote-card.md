# ADR 009: Hero Tactile Quote Card Artifact (Personalization Without Portrait)

## Status
Accepted (Finalized via `/grill-me` and `/grill-with-docs`)

## Date
2026-11-12

## Context
In ADR 008, we aligned on Nischal Basnet's authentic engineering identity (Laravel, Livewire, Python, FastAPI) and the explicit constraint: **Zero portrait / face photograph on the portfolio**.
However, in Milestone 3, the Hero section felt visually left-heavy on wider desktop screens and lacked an immediate, tangible sense of personal taste and human presence.

The user surfaced an inspiring tactile reference (`docs/design-system/ref-polaroid-quote.jpg`) featuring:
1. An analog Polaroid/archival mount with realistic drop shadow and gentle rotation.
2. A corner tab/note pinned to the frame.
3. Proportions evoking a physical physical artifact on an architect's or tailor's desk.

The user proposed:
> *"Here in this kind of design, how about we add a quote instead of picture in right side? /grill-me /grill-with-docs"*

## Finalized Architectural & Design Decisions

### 1. The Core Philosophy Quote
The user explicitly rejected generic tech maxims and chose the authentic worldview rooted in their lifestyle:
> *"I believe an engineer should have a life outside the terminal — nature, quiet walks, and seasonal stillness make you a sharper, more thoughtful builder."*
> *— Nischal Basnet*

### 2. Tactile Quotation Paper Tag
- Replaced the yellow sticky note with a refined corner paper tab in muted linen/cream with hairline border, embossed with an elegant serif quotation mark `“`.
- This clearly signals to the eye that this is a personal creed/quote while maintaining quiet luxury restraint.

### 3. Clean Card Proportions
- Classic Polaroid/archival photographic mat proportions: clean white paper card stock (`#FFFFFF`), generous internal margins, and a taller bottom margin.
- **Bottom margin**: Kept completely clean (no `me.jpeg` or filenames), preserving high-fashion editorial purity.
- Interior text: Cormorant Garamond serif italic in deep espresso (`#1C1917`), with small muted attribution `— Nischal Basnet`.

### 4. Organic Physics & Desk Interaction
- Rested directly on the clean linen canvas (`#F9F6F0`) with a soft, diffuse paper shadow (`shadow-[0_16px_40px_rgba(28,25,23,0.08)]`).
- Gentle resting tilt: `rotate-1.5 sm:rotate-2`.
- Hover transition: Levels smoothly to `hover:rotate-0 hover:shadow-[0_20px_48px_rgba(28,25,23,0.12)] transition-all duration-500 ease-out`.

### 5. Responsive Two-Column Grid
```
+-----------------------------------------------------------------------------------------+
| HERO TWO-COLUMN EDITORIAL DESK (max-w-6xl)                                               |
|                                                                                         |
|  LEFT COLUMN (~60% width)                    RIGHT COLUMN (~40% width)                  |
|  -------------------------                   -------------------------                  |
|  ● KATHMANDU, NEPAL — FULL-STACK ENGINEER    [ Clean Linen Canvas / Leaves drift by ]   |
|                                                                                         |
|  Nischal Basnet                                      [“] [TACTILE CARD]                 |
|  Building Laravel & Livewire Systems...               +-------------------------------+ |
|                                                       |                               | |
|  Full-Stack Developer and Backend Engineer            |  "I believe an engineer       | |
|  specializing in clean system design...               |   should have a life          | |
|                                                       |   outside the terminal —      | |
|  [ Explore Selected Work ↓ ] [ Initiate Inquiry ↗]    |   nature, quiet walks,        | |
|                                                       |   and seasonal stillness      | |
|                                                       |   make you a sharper, more    | |
|                                                       |   thoughtful builder."        | |
|                                                       |                               | |
|                                                       |   — Nischal Basnet            | |
|                                                       |                               | |
|                                                       |                               | |
|                                                       +-------------------------------+ |
|                                                                                         |
|  METADATA STRIP: LOCATION | AVAILABILITY | SEASONAL AMBIENCE | CODE ARCHIVE             |
+-----------------------------------------------------------------------------------------+
```

## Consequences
- **Positive**: Solves hero layout balance and human personalization with zero face pictures.
- **Positive**: Uniquely communicates that Nischal has depth, aesthetic restraint, and a thoughtful perspective beyond code syntax.
- **Positive**: Fully responsive — stacks naturally on mobile devices without any awkward clipping.
