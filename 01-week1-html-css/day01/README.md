# Day 01 — Semantic HTML
## Goal
Refactor a messy page into semantic HTML with correct headings and an accessible form.

## Learn (30–60 min)
- Semantic tags improve accessibility, SEO, and readability.
- Heading structure (`h1` then `h2`...) matters.
- Forms should use `label` + `for` + proper input types.

## Resources
```text
https://developer.mozilla.org/en-US/docs/Glossary/Semantics
https://developer.mozilla.org/en-US/docs/Web/HTML/Element
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
```

## Example
```html
<header>
  <nav aria-label="Main">
    <ul>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </nav>
</header>
<main>
  <section id="projects">
    <h2>Projects</h2>
  </section>
</main>
```

## Tasks (60–120 min)
- Complete `exercises/01-semantic-html/index.html` refactor.
- Write explanation in `answers.md`.

## Deliverables
- Updated `index.html`
- `answers.md`

## Self-check
- One `h1` only.
- Uses `header/nav/main/section/footer`.
- Form labels connected.
- No console errors.

## Common mistakes
- Using `<div>` for everything.
- Skipping labels (placeholder is not a label).
- Multiple `h1` headings.

## Stretch goals
- Add `required` attributes and correct input types (`type=email`).

---

## PR notes
- Include screenshots (mobile + desktop) when there is UI.
- Write 3–6 sentences: what you learned + what was hard.
