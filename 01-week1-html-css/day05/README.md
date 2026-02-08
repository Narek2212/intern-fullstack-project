# Day 05 — CSS Grid + responsive cards
## Goal
Use CSS Grid for a responsive 1/2/3 column card grid.

## Learn (30–60 min)
- Grid = two‑dimensional layout (rows + columns).
- Use media queries mobile-first.
- Keep gap consistent.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
https://developer.chrome.com/docs/devtools/css/grid/
```

## Example
```css
.grid { display:grid; gap:16px; grid-template-columns:1fr; }
@media (min-width:600px){ .grid{ grid-template-columns:repeat(2,1fr);} }
@media (min-width:900px){ .grid{ grid-template-columns:repeat(3,1fr);} }
```

## Tasks (60–120 min)
- Add breakpoints in `exercises/05-grid-responsive/styles.css` to meet requirements.

## Deliverables
- Updated `styles.css`

## Self-check
- No horizontal scroll on mobile.
- Correct column counts at breakpoints.

## Common mistakes
- Using flexbox for a grid of cards (grid is simpler here).
- Forgetting `meta viewport` (already present).

## Stretch goals
- Try `auto-fit` + `minmax` responsive grid.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
