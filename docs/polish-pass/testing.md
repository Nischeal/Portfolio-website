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
