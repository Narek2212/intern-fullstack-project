# Day 09 — Fetch + render list
## Goal
Fetch data from an API and render it with loading/error states.

## Learn (30–60 min)
- Use `fetch` + `await` to load JSON.
- Show loading state while waiting.
- Show a friendly error state.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
```

## Example
```js
const res = await fetch("https://example.com/api");
const data = await res.json();
```

## Tasks (60–120 min)
- In `app.js`, implement `load()` to fetch posts from a public JSON placeholder API (search: “JSONPlaceholder posts”).
- Render list items as buttons; clicking shows details.

## Deliverables
- Working list + details view

## Self-check
- Loading text appears
- Error handled (try offline)
- Details renders

## Common mistakes
- Forgetting `await res.json()`.
- Not checking `res.ok`.

## Stretch goals
- Add a simple search filter (client-side).

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
