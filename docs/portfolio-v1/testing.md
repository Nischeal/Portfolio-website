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

## Phase 2 — M0 (Works copy)
No UI yet. Check the approved copy table under Phase 2 in `plan.md`:
- [ ] Every claim about Clip Cuisine and the Gym Management System is accurate (pretrained YOLO, Flask, PostgreSQL for users + history; admin + member portal, manual check-ins, plans/expiry/payments).
- [ ] Nothing is overstated (no recipe suggestions, no custom-trained model, no online payments).
- [ ] The college card reveals only what you want public right now.

## Phase 2 — M1 (Works deck, ADR 026)
- [ ] Below About: a deck of three paper dossiers, the top one fully visible with the others peeking out below. Each dossier has a linen number tab, title, summary and fact ledger; no images. The college dossier has a dashed edge.
- [ ] **Drag (mouse or finger):** the top card follows you exactly and leans slightly; the cards underneath rise as you pull. Let go after a short drag and it springs back; drag far or flick and it flies off and tucks under the deck, with the next card on top. It never gets stuck halfway.
- [ ] **← button / Left arrow key** brings the previous card back from the left; **→ / Right arrow** sends the top card away. Counter `01 / 03` follows. A horizontal trackpad swipe also works.
- [ ] **Mobile (~375px):** a horizontal swipe moves the card, while vertical scrolling over the card still scrolls the page. No sideways page scroll while a card flies off.
- [ ] At rest the top card is flat and its text is sharp (the lean only happens while dragging).
- [ ] **Reduced motion:** cards swap instantly.
- [ ] Ledgers match the approved copy exactly.
- [ ] **Monarch preview:** dossiers readable in dark.
- [ ] **Screen reader / accessibility tree:** only the top dossier is exposed ("1 of 3: Clip Cuisine"); changes are announced; buttons are "Previous project" / "Next project".

## Phase 2 — M2 (Case study on the card's back, ADR 027)
`http://localhost:3000/#work`, desktop (~1440px) and phone (~375px).
- [ ] The top Clip Cuisine / Gym card shows a hairline ghost button **READ CASE STUDY →**; the final-year card has none.
- [ ] Pressing the button doesn't drag the card. Dragging elsewhere on the card still works.
- [ ] Click it: the card turns over (3D, about half a second). The card and deck keep the same size: nothing grows, stretches or jumps, and the cards behind disappear during the turn and come back after it. Back: `01 // CASE STUDY` + `[ Close ]` (pinned while you scroll the back), the title, then Problem / Solution / Challenges (olive bullets) / Stack as ledger rows, then `SOURCE ↗`. At rest both sides are flat with sharp text.
- [ ] Copy matches the approved M0 table exactly.
- [ ] `SOURCE ↗` opens the GitHub repo in a new tab.
- [ ] The case study scrolls inside the card (mouse wheel, trackpad, or finger on a phone) without scrolling the page; reopening starts at the top again.
- [ ] `[ Close ]` and **Esc** turn the card face-up; focus returns to the button.
- [ ] While the back is showing, **→ / ← buttons, arrow keys, a swipe or the project index** turn the card face-up first, then move on. A card never comes back around face-down.
- [ ] **Keyboard only:** Tab to the button, Enter turns the card and focus lands on the back; Tab reaches `[ Close ]` and `SOURCE ↗` but nothing on the hidden front.
- [ ] **Screen reader / accessibility tree:** the button reports expanded/collapsed; "Case study open: <title>" is announced; the hidden face isn't reachable.
- [ ] **Phone (~375px):** the back fits the width; long text wraps; the page scrolls normally over the card.
- [ ] **Reduced motion:** the card swaps sides instantly, without turning.
- [ ] **Monarch preview** (devtools: `data-theme="monarch"` on `<html>`): both sides are readable in dark.

## Phase 2 — M2 follow-up (Next file)
- [ ] Front of a shipped card: only the "READ CASE STUDY →" button, no hint text beside it.
- [ ] Back: **NEXT FILE →** sits on the right of `SOURCE ↗` (it wraps under on narrow phones). Click it: the card turns face-up, then the deck moves to the next project. Counter and index follow.
- [ ] From Gym, "Next file →" goes on to the final-year card (which has no case study), and the deck keeps looping.
- [ ] Keyboard: Enter on "Next file →" moves on, and focus stays on the deck (not lost to the page top).

## Phase 3 — M1 (Capabilities: moving logo bands, ADR 030)
`http://localhost:3000/#craft`, desktop (~1440px) and phone (~375px).
- [ ] Navbar **Craft** jumps to the section; the heading isn't hidden under the navbar.
- [ ] Under `04 // CAPABILITIES` / "Capabilities" (heading on the same left line as About and Works): two **full-width** bands between hairlines, running to both screen edges and fading out there. Logos ~44px with larger mono names. Top: Laravel, Livewire, PHP, FastAPI, Python, PostgreSQL, MySQL. Bottom: YOLO, Next.js, React, TypeScript, Tailwind CSS. Each is a logo + mono name; no context lines, no ratings.
- [ ] The top band drifts left, the bottom one right, slowly and smoothly, with **no gap or jump** where the loop restarts (watch for ~1 minute).
- [ ] The fade sits at the screen edges and stays put while the logos move (it doesn't slide away with them).
- [ ] Hover a logo: it shows its brand colour (Laravel red, PHP purple…) and that band pauses; move away and it continues.
- [ ] **Phone (~375px):** bands fit the width, no sideways page scroll, logos and names readable.
- [ ] **Reduced motion** (OS setting): bands stand still as one centred row each, wrapping on phones; no fade masks.
- [ ] **Screen reader:** after the heading, two lists ("Backend and databases", "AI, vision and frontend") with each tool once; the moving copies aren't read.
- [ ] **Monarch preview** (`data-theme="monarch"` on `<html>`): logos and names visible in dark; Next.js hover stays visible (not black).
