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

## Phase 4 — M1 + M2 (Inquiry)
`http://localhost:3000/#inquiry`, desktop (~1440px) and phone (~375px).
- [ ] Navbar shows About / Work / Stack / Inquiry + the "Get in Touch" pill; the hero shows "Get in touch ↓". All three land on the section.
- [ ] Desktop: left column `05 // INQUIRY`, "Get in touch", the intro, then DIRECT with the address, "Copy email" and "Open mail ↗"; right column the form on a white card. Phone: heading → intro → form → direct; no sideways scroll.
- [ ] Copy matches the approved table in `plan.md` exactly; the address reads "…basnet10@…" (not "1o").
- [ ] "Copy email" copies the address and shows "Copied ✓" for ~2s; "Open mail ↗" opens a new email to the address.
- [ ] Press **Send message** empty: each field shows its own message under it, the fields get a darker border, focus jumps to Name. Typing in a field clears its message.
- [ ] Bad email ("abc"): "That email doesn't look right."
- [ ] **Keyboard only:** Tab through Name → Email → Opportunity type → Message → Send message; Enter submits.
- [ ] **Without the key:** a valid submit shows "That didn't send. Please try again, or email me directly…" and makes no network request.
- [ ] **With the key (real test):** a valid submit shows "Sending…", then "Thanks, your message is on its way…", the form clears, and the email arrives in your inbox with subject "Portfolio inquiry: <type>".
- [ ] **Screen reader:** every field has a visible label; errors are read with their field; the sending/sent/error line is announced.

## Phase 5 — M1 (Footer, footer-dark, ADR 032)
`http://localhost:3000/`, scroll to the end; desktop (~1440px) and phone (~375px).
- [ ] After Inquiry: one espresso band with linen text, the same space above and inside its top edge; nothing linen shows below it.
- [ ] Row 1: "Nischal" signature + "Full-stack & backend engineer, Kathmandu."; columns **Sections** (About, Work, Stack, Inquiry → each jumps to its section) and **Elsewhere** (GitHub ↗ opens in a new tab, Email ↗ opens a new email).
- [ ] Press ❄️ Winter: every leaf turns into a six-armed snowflake straight away (frost blue-grey, slowly spinning), no coloured dots left; press 🍂 Autumn: the leaves come back.
- [ ] Row 2: "© 2026 Nischal Basnet", "Kathmandu // HH:MM GMT+5:45" showing Nepal time (changes on the minute), and the 🍂 Autumn / ❄️ Winter switch: the current season is filled in; pressing the other changes the leaves/snow and the hero's SEASON label.
- [ ] Row 3: "Nischal" set huge across the content width in a soft dark tone, no visible seams where strokes overlap; it doesn't spill or get cut at any width.
- [ ] Phone: name smaller, Sections/Elsewhere side by side, legal row stacked, signature fits the width; links and switch buttons easy to tap.
- [ ] Keyboard: Tab reaches every footer link and both switch buttons with a visible linen focus ring; screen reader hears "Footer" navigation with two headed lists, the switch as toggle buttons, and the clock isn't re-announced every minute.
- [ ] Reduced motion: nothing in the footer moves.

## Phase 6 — M1 (Monarch mode, ADR 033)
`http://localhost:3000/`, desktop and phone.
- [ ] Press **M** (not in a field): the page fades to a violet-black ground with pale lavender text and purple buttons; leaves/snow disappear; the screen gets a dim violet light in the middle with darkness closing in from every edge, slowly breathing in and out, under fine film grain; tiny violet motes rise from the bottom to the top, swaying and twinkling; a purple light flows round the hero quote card's edge with a slow breathing glow behind it; a pill at the bottom reads "Shadow Mode // Press M to return" with a faint purple glow. The footer stays a darker band with a purple glow in its top-right corner. Press M again: back to linen, leaves/snow return, pill disappears.
- [ ] **Switch into Monarch:** press M: the dark theme ripples out from the centre with a purple ring on its edge; for about half a second the ring splits into violet and cyan copies, thin violet/cyan fringe bars jitter across the page and faint scanlines appear, then it settles. No eyes, nothing tears. Press M during it: ignored.
- [ ] **Back to light:** press M again: the light theme ripples out the same way with a quieter, shorter glitch. Firefox (no View Transitions): the glitch layer with an instant switch.
- [ ] **Dramatic extras:** the hero name glows purple and every ~5s a bright light sweeps across it from left to right, then rests; nothing follows the mouse; the big footer "Nischal" glows purple and breathes. Reloading while dark doesn't replay the ripple.
- [ ] **One aura in every season:** in Monarch, switch the footer to ❄️ Winter and back to 🍂 Autumn: the vignette stays exactly the same (no leaves or snow appear).
- [ ] Type an "m" in the Inquiry Name field: nothing toggles. Cmd/Ctrl+M doesn't toggle either.
- [ ] Click/tap the big "Nischal" at the bottom of the footer: toggles Monarch both ways (this is the phone way in and out).
- [ ] Reload while dark: the page loads dark straight away (no light flash).
- [ ] Every section reads well in dark: hero, About, Works deck (front and case-study back), Stack logos (and brand colours on hover), Inquiry form fields and errors, footer (stays a dark band, a step darker than the page).
- [ ] Olive buttons in dark have dark text that's easy to read.
- [ ] Reduced motion: no colour fade; the vignette holds still; no ripple, shimmer or breathing.
- [ ] Screen reader: turning Monarch on announces the pill text once.
- [ ] All text stays readable while scrolling every section in Monarch (nothing busy sits behind it).
- [ ] No WebGL anywhere: the aura is plain CSS.
