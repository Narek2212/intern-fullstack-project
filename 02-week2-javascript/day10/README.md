# Day 10 — localStorage persistence + polish
## Goal
Persist the To‑Do list so refresh doesn’t lose it. Add one UX improvement.

## Learn (30–60 min)
- Store JSON in localStorage.
- Load initial state on startup.
- Keep code organized: load/save/render.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
```

## Example
```js
localStorage.setItem("todos", JSON.stringify(todos));
const saved = JSON.parse(localStorage.getItem("todos") || "[]");
```

## Tasks (60–120 min)
- Update Day 08 To‑Do to save to localStorage after every change.
- On page load, read from localStorage and render existing tasks.
- Add a ‘Clear completed’ button.

## Deliverables
- Persistent To‑Do app

## Self-check
- Refresh keeps tasks
- Clear completed works
- No console errors

## Common mistakes
- Forgetting JSON.parse/stringify
- Crashing when storage key is missing (use fallback)

## Stretch goals
- Add edit-in-place for task title.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
