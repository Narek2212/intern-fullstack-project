# Day 14 — useEffect + fetch + loading/error
## Goal
Fetch data in React correctly and show loading/error states.

## Learn (30–60 min)
- Use `useEffect` for data fetching.
- Manage loading + error state.
- Avoid infinite re-render loops.

## Resources
```text
https://react.dev/reference/react/useEffect
https://react.dev/learn/synchronizing-with-effects
```

## Example
```jsx
useEffect(() => {
  let ignore = false;
  async function load(){ /* fetch */ }
  load();
  return () => { ignore = true; };
}, []);
```

## Tasks (60–120 min)
- Fetch a list of posts from a public API (same as Day 09).
- Show Loading, Error, Success states.
- Click an item to show details.

## Deliverables
- List + details view with states

## Self-check
- No infinite loop
- Loading appears
- Error handled

## Common mistakes
- Putting fetched data in dependency array incorrectly
- Forgetting to handle errors

## Stretch goals
- Add retry button for errors.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
