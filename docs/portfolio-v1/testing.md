# Portfolio v1 — Manual checks

Run `npm run dev` in `frontend/` and open http://localhost:3000. Check desktop (≥1280px) and mobile (~375px, DevTools device toolbar). One section per milestone is added here as it lands, grouped by phase.

## Phase 1 — M0 (About copy)
No UI yet. Check the approved copy table under Phase 1 in `plan.md`:
- [ ] Every fact is true and something you're happy to have public (BCA, final year, Pascal National College, Kathmandu).
- [ ] It doesn't repeat the hero bio word for word.
- [ ] Read it aloud: it sounds like you.

## Phase 1 — M1 (About markup)
Unstyled on purpose; styling is M2.
- [ ] Below the hero: `02 // ABOUT`, the heading "About me", then three label + paragraph pairs (Background, What I build, How I work) with the approved copy.
- [ ] Navbar (desktop and the ~375px menu) reads About / Work / Craft / Inquiry.
- [ ] Clicking **About** in the navbar scrolls to the section with its heading visible below the sticky bar.
- [ ] Hero looks unchanged.

## Phase 1 — M2 (About styling)
- [ ] **Desktop (≥1024px):** counter + large serif "About me" on the left third; three rows on the right, each with a small mono label beside the paragraph, separated by hairlines.
- [ ] **Tablet (~640–1023px):** heading on top, rows below, label still beside the text.
- [ ] **Mobile (~375px):** everything stacked, label above each paragraph, no horizontal scroll, comfortable line length.
- [ ] Hero still fills the first screen exactly as before (the centring moved to a wrapper).
- [ ] **Monarch preview:** add `data-theme="monarch"` to `<html>` in DevTools; About text and hairlines switch to dark.

## Phase 1 — M3 (About accessibility + contrast floor)
- [ ] About labels (Background, What I build, How I work) and the hero metadata labels (LOCATION, AVAILABILITY, …) are slightly darker and easy to read on linen. Nothing else visibly changed.
- [ ] Keyboard: Tab from the top; the navbar **About** link is reachable, and Enter scrolls so "About me" sits just below the sticky bar.
- [ ] Screen reader (optional; Orca on Linux, or the Chrome DevTools accessibility tree): headings read "Nischal Basnet" (h1) → "About me" (h2); the `02 // About` counter isn't announced; each label is read with its paragraph.
- [ ] DevTools → Lighthouse → Accessibility on the page shows no contrast failures in About or the hero strip.
