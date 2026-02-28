# Day 18 — Shared state with Context + useReducer
## Goal
Share state across pages without prop drilling (theme or favorites).

## Learn (30–60 min)
- When to use Context.
- Use reducer for predictable updates.
- Keep local state local.

## Resources
```text
https://react.dev/reference/react/useContext
https://react.dev/reference/react/useReducer
```

## Example
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

## Tasks (60–120 min)
- Implement `ThemeContext` or `FavoritesContext` using `useReducer`.
- Use it in at least 2 components on different pages.
- Add one action that updates state.

## Deliverables
- Context provider + usage

## Self-check
- State updates reflected everywhere
- Reducer is readable

## Common mistakes
- Putting all app state into Context
- Mutating state inside reducer

## Stretch goals
- Persist context state to localStorage.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
