# Day 13 — Lists + keys + conditional rendering
## Goal
Build a basic To‑Do in React with proper keys and empty state.

## Learn (30–60 min)
- Render arrays with `.map()`.
- Keys must be stable.
- Conditional rendering for empty states.

## Resources
```text
https://react.dev/learn/rendering-lists
https://react.dev/learn/conditional-rendering
```

## Example
```jsx
{items.length === 0 ? <p>No items</p> : items.map(i => <li key={i.id}>{i.title}</li>)}
```

## Tasks (60–120 min)
- Implement To‑Do: add/toggle/remove.
- Split into components: `TodoList`, `TodoItem`.
- Add empty state message.

## Deliverables
- Working To‑Do + components

## Self-check
- No key warnings
- All actions work
- Empty state shows

## Common mistakes
- Using array index as key
- Keeping too much state in child components

## Stretch goals
- Add filters: All/Active/Done.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
