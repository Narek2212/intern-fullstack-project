# Day 20 — Testing basics (React Testing Library)
## Goal
Write user-focused tests for your UI.

## Learn (30–60 min)
- Test like a user: render, find elements, interact.
- Use `userEvent` for typing/clicking.
- Test states and edge cases.

## Resources
```text
https://testing-library.com/docs/react-testing-library/intro/
https://testing-library.com/docs/user-event/intro/
```

## Example
```bash
npm install -D @testing-library/react @testing-library/user-event
```

## Tasks (60–120 min)
- Add 5 tests for To‑Do or Contact form:
- 1) renders initial UI
- 2) adds item / shows validation
- 3) toggles state
- 4) removes item / submits form
- 5) shows error state for invalid input

## Deliverables
- 5 passing tests

## Self-check
- `npm test` (or `npm run test`) passes
- Tests use userEvent

## Common mistakes
- Testing implementation details instead of UI behavior
- Using overly brittle selectors

## Stretch goals
- Add one async test for fetch (mock fetch).

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
