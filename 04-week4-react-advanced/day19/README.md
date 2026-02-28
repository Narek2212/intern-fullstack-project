# Day 19 — Forms + validation
## Goal
Build a form with validation messages and proper UX.

## Learn (30–60 min)
- Controlled inputs.
- Validate on submit.
- Show errors per field.

## Resources
```text
https://react.dev/learn/sharing-state-between-components
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
```

## Example
```jsx
if (!email.includes("@")) setError("email", "Invalid email");
```

## Tasks (60–120 min)
- Create a Contact form page with name/email/message.
- On submit: validate fields and show errors.
- Disable submit when there are errors (or when required fields empty).

## Deliverables
- Validated form

## Self-check
- Errors show clearly
- Submit works when valid

## Common mistakes
- Showing errors immediately while user types (too aggressive)
- Not clearing errors after fix

## Stretch goals
- Try React Hook Form and compare complexity (optional).

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
