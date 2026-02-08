# Day 04 — Flexbox navbar
## Goal
Use Flexbox to build a real header layout that doesn’t break on small screens.

## Learn (30–60 min)
- Flexbox = one‑dimensional layout (row OR column).
- Use `justify-content`, `align-items`, and `gap`.
- Use `flex-wrap` or switch to column on small screens.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
https://developer.mozilla.org/en-US/docs/Web/CSS/gap
https://developer.chrome.com/docs/devtools/css/flexbox/
```

## Example
```css
.header { display:flex; align-items:center; justify-content:space-between; gap:12px; }
.nav { display:flex; gap:10px; flex-wrap:wrap; }
```

## Tasks (60–120 min)
- Implement flex layout in `exercises/04-flexbox-navbar/styles.css`.
- Make it responsive (wrap or stack).

## Deliverables
- Updated `styles.css`

## Self-check
- Layout looks correct on ~390px and ~1200px widths.
- Nav links are clickable and have hover states.

## Common mistakes
- Using margins everywhere instead of `gap`.
- Not handling overflow on small screens.

## Stretch goals
- Add a breakpoint that stacks nav vertically.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
