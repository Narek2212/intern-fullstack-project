# Day 02 — Box model + spacing
## Goal
Make a clean card layout using consistent spacing and the box model.

## Learn (30–60 min)
- Box model: content/padding/border/margin.
- `box-sizing: border-box` makes sizing predictable.
- Use DevTools to inspect padding/margins.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
https://developer.chrome.com/docs/devtools/css/
```

## Example
```css
* { box-sizing: border-box; }
.container { max-width: 900px; margin: 0 auto; padding: 16px; }
.card { padding: 16px; margin-bottom: 16px; border: 1px solid #ddd; }
```

## Tasks (60–120 min)
- Style `exercises/02-box-model/styles.css` to look neat.
- Write margin vs padding notes in `answers.md`.

## Deliverables
- Updated `styles.css`
- `answers.md`

## Self-check
- Spacing is consistent.
- Cards are centered and readable.
- No inline styles.

## Common mistakes
- Random spacing values everywhere.
- Forgetting body default margin reset.

## Stretch goals
- Switch spacing to `rem` units.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
