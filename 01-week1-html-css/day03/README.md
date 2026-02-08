# Day 03 — Specificity + debugging
## Goal
Understand cascade/specificity and fix a CSS conflict the right way.

## Learn (30–60 min)
- Specificity decides which CSS rule wins.
- Use DevTools ‘Computed’ to see the winning rule.
- Avoid `!important` unless you truly must.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade
https://developer.chrome.com/docs/devtools/
```

## Example
```css
p { color: red; }
.card p { color: blue; }
#hero p { color: green; }
```

## Tasks (60–120 min)
- Solve `exercises/03-specificity-debug/` TODO and fill `answers.md`.

## Deliverables
- Updated `styles.css` and `answers.md`

## Self-check
- You can explain why a rule wins.
- No `!important` used.

## Common mistakes
- Trying to ‘fight’ specificity with deep selectors.
- Using `!important` immediately.

## Stretch goals
- Create a second scenario and explain it.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
