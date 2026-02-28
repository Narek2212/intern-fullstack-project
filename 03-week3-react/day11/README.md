# Day 11 — Create React app (Vite) + components
## Goal
Create a React app and build 3 small components with props.

## Learn (30–60 min)
- Create React app with Vite.
- Understand JSX and components.
- Pass props to components.

## Resources
```text
https://react.dev/learn
https://vitejs.dev/guide/
```

## Example
```bash
npm create vite@latest react-sandbox -- --template react
cd react-sandbox
npm install
npm run dev
```

## Tasks (60–120 min)
- Create Vite app `react-sandbox` (or similar).
- Create components: `Greeting`, `Avatar`, `Card` (in `src/components`).
- Render them in `App.jsx` with different props.
- Write notes in `03-week3-react/day11/notes.md`: what is a component? what is a prop?

## Deliverables
- Running app + components
- `notes.md`

## Self-check
- `npm run dev` works
- Props show different output
- No console errors

## Common mistakes
- Forgetting to export component
- Using `class` instead of `className`

## Stretch goals
- Add a reusable `Button` component with `onClick` prop.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
