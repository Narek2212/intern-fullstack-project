# Day 17 — Params + details page
## Goal
Create a list page + details route using URL params.

## Learn (30–60 min)
- Use `useParams`.
- Build a details page.
- Handle ‘not found’ if id missing.

## Resources
```text
https://reactrouter.com/en/main/start/overview
https://reactrouter.com/en/main/hooks/use-params
```

## Example
```jsx
const { projectId } = useParams();
```

## Tasks (60–120 min)
- Create `projects/:projectId` route.
- List page links to details using `<Link to>`.
- On details page, handle invalid id gracefully.

## Deliverables
- List + details routing

## Self-check
- Click list item navigates
- Invalid id shows message

## Common mistakes
- Treating params as numbers without parsing
- Not handling missing data

## Stretch goals
- Add nested route: `projects/:projectId/settings`.

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
