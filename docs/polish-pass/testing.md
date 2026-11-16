# Polish pass — Testing

## M1 — Dead links + keyboard
`http://localhost:3000/`, desktop and phone (~375px).
- [ ] Navbar (desktop and the phone menu) shows About / Work / Stack only: no "Inquiry", no "Get in Touch" pill (until Phase 4 turns `INQUIRY_LIVE` on).
- [ ] Hero shows only "Explore Selected Work ↓".
- [ ] Every in-page link lands on a section; nothing points to `#inquiry`.
- [ ] Reload, press **Tab** once: an olive "Skip to content" pill appears top-left; Enter jumps past the navbar to the page content.
- [ ] Tab to the Works deck: a clear olive ring appears around the card.

## M2 — Readable text + tap sizes
Desktop and phone (~375px).
- [ ] Small mono labels (hero kicker, LOCATION/AVAILABILITY…, quote-card footer, About labels, card ledgers, "In progress", "or drag the card") read at 12px; nothing wraps awkwardly or overflows at 375px.
- [ ] On a phone, the logo, `[ Menu ]`, deck ← →, "Read case study", `SOURCE ↗`, `[ Close ]` and "Next file" are easy to tap (≥ 44px tall).

## M3 — Shared grid + phone hero
- [ ] Desktop: About's text rows and the Works deck start on the same vertical line; the Works card top lines up with the "03 // SELECTED WORKS" counter (its number tab sits just above).
- [ ] Phone (~375px): first screen shows kicker, name, "Building" + role on the next line (never cut off), bio and "Explore Selected Work"; then the LOCATION / AVAILABILITY strip; then the quote card. Desktop hero unchanged.
- [ ] The typewriter doesn't make the page jump as it types (two lines reserved on phones).

## M4 — Copy + hero entrance
- [ ] Reload: kicker, name + role, bio, button, meta strip and quote card rise and fade in one after another (about half a second in all); with reduced motion everything is simply there.
- [ ] Kicker reads `KATHMANDU, NEPAL · FULL-STACK & BACKEND ENGINEER`; bio says "well-modelled relational databases"; meta labels read LOCATION / AVAILABILITY / SEASON / GITHUB; the GitHub link is easy to tap on a phone.
- [ ] Navbar: About / Work / **Stack**; "Stack" jumps to the section headed "Stack" (`04 // STACK`).
- [ ] About "Background": "…to the screen a person touches."
