# 🌿 Old-Money Minimalist & Seasonal Design System Specification

This document is the **design bible** for the Old-Money Minimalist portfolio, capturing every nuance derived from the David Whyte & Mosh Mohammed inspirations and our deep architectural grilling.

---

## 🎨 Color Palette & Tokens

### 1. Light Mode (Default / Primary)
```css
:root {
  /* === Canvas Backgrounds === */
  --bg-page:           #F9F6F0;    /* Warm Linen / Cashmere Cream */
  --bg-card:           #FFFFFF;    /* Pure Card White */
  --bg-subtle:         #F3EFE7;    /* Secondary warm container */

  /* === Hairline Borders === */
  --border-hairline:   #E7E2D8;    /* 1px soft luxury border */
  --border-muted:      #D6CFC3;    /* Secondary divider */

  /* === Typography === */
  --text-headline:     #1C1917;    /* Deep Espresso / Near-Black */
  --text-body:         #44403C;    /* Refined Charcoal */
  --text-muted:        #78716C;    /* Warm Stone / Taupe */
  --text-dim:          #A8A29E;    /* Light Taupe */

  /* === Signature Olive Green Accent === */
  --accent-olive:      #4A5D4E;    /* Primary Olive Green (Pills, active states) */
  --accent-olive-dark: #37463A;    /* Dark Olive for hover */
  --accent-olive-soft: rgba(74, 93, 78, 0.10); /* Soft olive pill background */

  /* === Seasonal Particles === */
  --particle-amber:    #C88A42;    /* Autumn leaf muted amber */
  --particle-olive:    #6E7F66;    /* Autumn leaf soft olive */
  --particle-snow:     rgba(255, 255, 255, 0.75); /* Winter crisp snow */
}
```

### 2. Secret Shadow Monarch Mode (Activated via 'M' or Footer Watermark)
```css
[data-theme="monarch"] {
  --bg-page:           #141312;    /* Deep Espresso Charcoal */
  --bg-card:           #1C1A18;    /* Dark Cashmere Card */
  --bg-subtle:         #23211E;

  --border-hairline:   #2C2925;    /* 1px dark hairline */
  --border-muted:      #3B3732;

  --text-headline:     #F5F2EB;    /* Warm Alabaster */
  --text-body:         #D6CFC4;    /* Light Sand */
  --text-muted:        #8C8479;
  --text-dim:          #59534B;

  --accent-olive:      #6A856F;
  --accent-olive-dark: #829D87;
  --accent-olive-soft: rgba(106, 133, 111, 0.20);

  /* Solo Leveling Easter Egg Micro-Glow */
  --shadow-aura:       rgba(56, 189, 248, 0.35); /* Subtle shadow monarch cyan aura */
}
```

---

## 🔤 Typography & Font Hierarchy

- **Identity Mark**: `Nischal Basnet` in medium-weight `Cormorant Garamond` (like an author's signature on a poetry book).
- **Display Headings**: `Cormorant Garamond` (Weights: 500, 600, 700). High-contrast luxury editorial serif with natural beauty and generous letter-spacing.
- **Body & Paragraphs**: `Inter` (Weights: 400, 500). Clean modern sans-serif with supreme legibility.
- **Micro-Details & Swiss Dials**: `JetBrains Mono` (Weights: 400, 500). Counters (`01 //`, `02 //`), tech tags, timestamps, coordinates.

---

## 🍂 Seasonal Canvas Parameters

- **Engine**: Zero-dependency HTML5 `<canvas>` fixed in background at 60 FPS.
- **Density**: Sparse & Meditative (15–22 delicate watercolor leaf silhouettes or snowflakes on desktop, 8–10 on mobile).
- **Physics**: Slow downward drift (0.6–1.2 px/frame), gentle trigonometric sine-wave horizontal flutter, slow 3D rotation, and gentle cursor breeze deflection on desktop.
- **Mode Switching**: Automatic detection based on calendar month (Sept–Nov: Autumn; Dec–Feb: Winter), with a discreet manual override in the footer.

---

## 📐 Layout & Component Standards

1. **Split Hero**:
   - Left: Typographic introduction, dynamic olive typewriter rotator ("Crafting [Full-Stack Web Systems | AI & Vision Pipelines | Scalable Backend Services | Interactive Web Experiences]"), 2-sentence bio, Primary Olive Pill (`Explore Work ↓`) + Hairline Ghost Button (`Initiate Inquiry ↗`).
   - Right: Framed artistic botanical watercolor card (like David Whyte's tree) with floating live availability pill (`● Available for Engineering`).
2. **The Three Pillars ("Philosophy & The Craft")**:
   - Triad cards with Swiss-dial counters (`01 //`, `02 //`, `03 //`), Cormorant titles, delicate line icons, and 2-sentence reflections.
3. **Selected Works with Slide-Out Drawers**:
   - Vertical editorial case cards with clean tags and hover lift.
   - Slide-out architectural drawer displaying Problem, Architectural Solution, Technical Challenges Overcome, Full Stack Ledger, and direct GitHub links.
4. **Minimalist Horizon Matrix**:
   - Horizontal technology spec ledger with Swiss-dial counters, mastery ratings, and olive tech tags.
5. **Inquiry & Footer**:
   - 4-field editorial inquiry form with quick-copy `nischealbasnet10@gmail.com`.
   - Footer displaying Kathmandu time, seasonal toggle, copyright, and secret Shadow Monarch watermark.
