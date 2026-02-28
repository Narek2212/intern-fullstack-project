# Day 15 — Custom hook + localStorage
## Goal
Persist a small piece of state using a custom hook.

## Learn (30–60 min)
- Extract reusable logic into a hook.
- Persist to localStorage safely.
- Handle initial load vs updates.

## Resources
```text
https://react.dev/reference/react
https://react.dev/learn/reusing-logic-with-custom-hooks
```

## Example
```jsx
function useLocalStorageState(key, initial){
  // load + save
}
```

## Tasks (60–120 min)
- Create `useLocalStorageState(key, initialValue)` hook.
- Use it to persist To‑Do or Favorites.
- Write 6–10 lines in notes explaining how your hook works.

## Deliverables
- Custom hook + usage
- notes updated

## Self-check
- Refresh preserves state
- No crashes when storage empty

## Common mistakes
- JSON parse crash (wrap in try/catch)
- Saving on every render instead of when state changes

## Stretch goals
- Store `{v:1,data:...}` to allow future migrations.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
