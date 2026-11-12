# ADR 010: Hero Typographic Layout Stability & Text Rendering Sharpness

## Status
Accepted (Finalized via `/grill-with-docs`)

## Date
2026-11-12

## Context
During visual testing of Milestone 3 on live viewports (`http://localhost:3000`), two distinct visual defects were identified:

1. **Typewriter Dynamic Wrapping & Cumulative Layout Shift (CLS)**:
   - When longer roles (such as `"Scalable System Architectures"`) typed out character-by-character, the text exceeded container width at 48px font size, breaking to line 2 mid-animation.
   - This caused the bio paragraph, action buttons, and live metadata strip beneath it to jump up and down rhythmically.

2. **Rotated Text Rasterization Blurriness**:
   - In `HeroQuoteCard.tsx`, the card was styled with `rotate-1 sm:rotate-2` and `group-hover:rotate-0`.
   - Chromium and WebKit rendering engines disable subpixel antialiasing on transformed/rotated layers and apply bilinear interpolation to rasterized text textures, causing serif text to look blurry/fuzzy at rest.
   - On hover, snapping to `rotate-0` abruptly restored subpixel anti-aliasing, creating a noticeable blur-to-sharp flash.

---

## Finalized Architectural Decisions

### 1. Single-Line Typewriter Lockup (`whitespace-nowrap`)
- **Strategy**: Keep `"Building [Role]"` strictly on a single line across all viewports.
- **Implementation**:
  - Add `whitespace-nowrap` to prevent any mid-word or mid-sentence line wrapping.
  - Calibrate responsive font sizing from `text-2xl` on mobile to `sm:text-3xl`, `lg:text-[34px]`, and `xl:text-[38px]` on large desktop screens, guaranteeing that even the longest 38-character role fits within the column width without wrapping.
  - Set a fixed line height `min-h-[1.3em]` and `flex items-center` so vertical spacing remains completely static and free of any layout shift.

### 2. Crisp Precision Card (Zero Rotation on Text)
- **Strategy**: Remove card rotation entirely (`rotate-0`) so text is rendered natively on the physical pixel grid with 100% crisp subpixel anti-aliasing at all times (both idle and hover).
- **Implementation**:
  - Card frame: `rotate-0` with crisp hairline border (`#E7E2D8`), pure card white (`#FFFFFF`), and soft diffuse shadow.
  - Corner tactile tag: Retain `-rotate-6` on the quotation mark badge `“` (single glyph/badge retains analog personality without compromising paragraph legibility).
  - Hover interaction: Replace the rotation snap with a smooth, luxurious vertical levitation (`group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_54px_rgba(28,25,23,0.12)] transition-all duration-300 ease-out`).

---

## Consequences
- **Positive**: 100% elimination of Cumulative Layout Shift (CLS); bio paragraph and buttons remain perfectly stationary as roles cycle.
- **Positive**: 100% razor-sharp Cormorant Garamond typography at rest and on hover with zero rasterization blur.
- **Positive**: Aligns with the Old-Money aesthetic of structured precision, quiet craftsmanship, and timeless editorial stability.
