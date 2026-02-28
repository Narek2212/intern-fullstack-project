# Day 12 — State + events + controlled input
## Goal
Use `useState` to update the UI based on user interaction.

## Learn (30–60 min)
- State vs props.
- Event handlers in React.
- Controlled inputs (value from state).

## Resources
```text
https://react.dev/reference/react/useState
https://react.dev/learn/adding-interactivity
```

## Example
```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(c => c + 1)}>+</button>
```

## Tasks (60–120 min)
- Create `Counter` component (inc/dec/reset).
- Create `NameInput` component: input + live preview “Hello, {name}”.
- Write 3 bullets in notes: props vs state.

## Deliverables
- Counter + NameInput working
- notes updated

## Self-check
- Buttons update UI
- Input is controlled
- No direct mutation of state

## Common mistakes
- Mutating arrays/objects directly
- Forgetting to call setState

## Stretch goals
- Add min/max to counter and disable buttons at limits.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
