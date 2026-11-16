# Design Tokens

Source of truth for colors, type and canvas parameters. Implemented in `frontend/src/app/globals.css` — keep both in sync. Visual references: `ref-old-money-david-whyte.jpg`, `ref-old-money-mosh.jpg`, `ref-polaroid-quote.jpg` (this folder).

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
  --text-muted:        #736C67;    /* Warm Stone / Taupe — 4.8:1 on linen, smallest readable text (ADR 022) */
  --text-dim:          #A8A29E;    /* Light Taupe — decoration only, never readable text (ADR 022) */

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

- **Identity Mark**: script signature `Nischal` in `Alex Brush` (navbar).
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

## Layout

Section layout and status live in `../roadmap.md`; layout decisions in `../decisions.md`.

## Motion
- `--animate-marquee` (`animate-marquee`): 48s linear infinite `marquee` keyframes (translateX 0 → -50%), used by the Capabilities logo bands (ADR 030). Paused on hover; off under reduced motion.

## Monarch / Shadow Monarch (Phase 6, ADR 033–047)
Violet appears **only** inside `[data-theme="monarch"]` (user's exception to the skill's no-violet rule).
| Token | Monarch value |
|---|---|
| `--bg-page` / `--bg-card` / `--bg-subtle` | `#0B0912` / `#16121F` / `#1D1829` |
| `--border-hairline` / `--border-muted` | `#2A2340` / `#3A3156` |
| `--text-headline` / `--text-body` / `--text-muted` / `--text-dim` | `#ECE7F7` / `#CFC8E2` / `#9D93B8` / `#5A5070` |
| `--accent-olive` (buttons) / `--accent-olive-dark` (text, glow) | `#7C4DED` / `#B79CFF` |
- `.monarch-flow` (quote card): flowing lit border (`--aura-angle`, `aura-flow` 4s). `.monarch-glow` (its wrapper): breathing glow (`aura-breathe` 4.5s). `.monarch-aura` (pill): still glow.
- `footer.closing` in Monarch: `--text-headline: #07060B`, `--bg-page: #ECE7F7`, hairline on top, purple corner glow.
- Button hover in Monarch: `#6534D9` (the light purple would fail contrast with white text).
- Aura: `.monarch-vignette` (violet centre light `rgba(124,77,237,.16)`, edges to `#020105`, violet rim; breathes 7s) + `.monarch-grain` (still film grain, 7%); pure CSS (ADR 039). The seasonal canvas draws rising violet motes (`#9B78F2` / `#D9CBFF`, 0.7–2.1px) over it (ADR 040).
- Hero name: `.monarch-shimmer` (purple glow + a light sweep every 5s). Footer signature: `[data-monarch-doorway]` glows and breathes.
- Switch (ADR 047): the new theme ripples out from the centre (View Transition clip, 1.1s); `.monarch-ring` rides its edge with `--cyan` / `--violet` RGB-split copies, plus `.monarch-glitch__bar` fringe bars and `.monarch-glitch__scan` scanlines (thin, flash-safe). Back to light: same ripple, quieter glitch. Cyan only appears in this glitch.
