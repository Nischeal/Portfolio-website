# 🌿 Old-Money & Tailored Editorial Design System

> Visual reference analysis based on the David Whyte & Mosh Mohammed inspirations.

---

## 🎨 Color Tokens

### 1. Light Mode (Primary / Default)
```css
:root {
  /* === Backgrounds === */
  --bg-page:           #F9F6F0;    /* Warm Linen / Cashmere Cream */
  --bg-card:           #FFFFFF;    /* Pure Card Panel */
  --bg-subtle:         #F3EFE7;    /* Secondary warm container */

  /* === Borders & Dividers === */
  --border-hairline:   #E7E2D8;    /* 1px soft luxury border */
  --border-muted:      #D6CFC3;    /* Slightly deeper divider */

  /* === Typography === */
  --text-headline:     #1C1917;    /* Deep Espresso / Near-Black */
  --text-body:         #44403C;    /* Refined Charcoal */
  --text-muted:        #78716C;    /* Warm Stone / Taupe */
  --text-dim:          #A8A29E;    /* Light Taupe */

  /* === Signature Accent: Olive Green === */
  --accent-olive:      #4A5D4E;    /* Primary Olive Green */
  --accent-olive-dark: #37463A;    /* Dark Olive for hover states */
  --accent-olive-soft: rgba(74, 93, 78, 0.12); /* Soft olive pill background */

  /* === Seasonal Particles === */
  --leaf-amber:        #C88A42;    /* Autumn leaf golden amber */
  --leaf-olive:        #6E7F66;    /* Autumn leaf muted olive */
  --snow-flake:        rgba(255, 255, 255, 0.7); /* Winter soft snow */
}
```

### 2. Monarch / Dark Mode (Secondary Toggle)
```css
[data-theme="monarch"] {
  --bg-page:           #141312;    /* Deep Espresso Charcoal */
  --bg-card:           #1C1A18;    /* Dark Cashmere Card */
  --bg-subtle:         #23211E;    /* Elevated Dark Container */

  --border-hairline:   #2C2925;    /* 1px dark hairline */
  --border-muted:      #3B3732;    /* Dark divider */

  --text-headline:     #F5F2EB;    /* Warm Alabaster */
  --text-body:         #D6CFC4;    /* Light Sand */
  --text-muted:        #8C8479;    /* Muted Taupe */
  --text-dim:          #59534B;

  --accent-olive:      #6A856F;    /* Lighter Olive for dark background */
  --accent-olive-dark: #829D87;
  --accent-olive-soft: rgba(106, 133, 111, 0.2);

  /* Solo Leveling Easter Egg Micro-Glow */
  --shadow-aura:       rgba(56, 189, 248, 0.25); /* Subtle shadow monarch cyan */
}
```

---

## 🔤 Typography

- **Headings & Titles**: `Cormorant Garamond` (Font weights 500, 600, 700). High-contrast editorial serif, generous letter-spacing on uppercase, natural beauty in title case.
- **Body & Paragraphs**: `Inter` (Font weights 400, 500). Clean modern sans-serif with excellent legibility.
- **Micro-Details & Counters**: `JetBrains Mono` (Font weights 400, 500). Swiss horology precision (`01 //`, `SYS.V1`, dates, tags).

---

## 📐 Component Patterns

1. **Editorial Pill Buttons**:
   - `rounded-full`, `px-6 py-2.5`, `bg-[var(--accent-olive)] text-white hover:bg-[var(--accent-olive-dark)]`.
2. **Status Pill**:
   - `rounded-full`, `px-3.5 py-1`, subtle olive tint background with a soft pulsing green dot: `● Available for Engineering`.
3. **Framed Editorial Card**:
   - `rounded-2xl`, `bg-white`, `border border-[var(--border-hairline)]`, subtle diffuse shadow: `shadow-[0_10px_35px_-10px_rgba(28,25,23,0.06)]`.
4. **Seasonal Canvas Layer**:
   - Fixed background canvas beneath page content, rendering delicate, slow-moving particles (autumn leaves / winter snow) at 60 FPS without layout impact.
