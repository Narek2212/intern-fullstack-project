# Day 08 — DOM + events
## Goal
Connect JavaScript to the page: add/remove/toggle items.

## Learn (30–60 min)
- Query elements with `getElementById`/`querySelector`.
- Handle events (`submit`, `click`).
- Render an array into DOM.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
```

## Example
```js
button.addEventListener("click", () => {
  console.log("clicked");
});
```

## Tasks (60–120 min)
- Open `index.html` and implement TODOs in `app.js`.
- Render the list after every change.

## Deliverables
- Working To‑Do: add/toggle/remove

## Self-check
- Adding works
- Toggling works
- Removing works
- No console errors

## Common mistakes
- Forgetting `e.preventDefault()` on form submit.
- Updating data but forgetting to re-render.

## Stretch goals
- Add filters: All / Active / Done.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
