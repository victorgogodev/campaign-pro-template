# Campaign Pro Template

Kenya 2027 election campaign website template built with React, Tailwind CSS, and Node.js.

## Stack

- React + Vite
- Tailwind CSS
- Node.js + Express
- M-Pesa Daraja API
- Africa's Talking (SMS)

## Productized Services

| Product      | Description                                                    | Pricing                  |
| ------------ | -------------------------------------------------------------- | ------------------------ |
| Campaign Pro | Candidate website with M-Pesa donations + volunteer management | KSh 45K–200K             |
| Results Live | Real-time election night dashboard with Kenya constituency map | KSh 150K–400K            |
| Campaign Ops | Internal campaign management SaaS with SMS broadcasts          | KSh 80K setup + retainer |

## Project Structure

```
src/
  components/
    Nav.jsx
    Hero.jsx
    Issues.jsx
    About.jsx
    VolunteerForm.jsx
    Donate.jsx
    Events.jsx
    Footer.jsx
  constants/
    theme.js
  App.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

## Branch Strategy

- Never push directly to `main`
- Always use `feature/*` branches with PRs
- Feature branches are retained post-merge until project completion

## Commit Convention

```
feat(scope):      new feature
fix(scope):       bug fix
chore(scope):     dependencies, config, tooling
docs(scope):      documentation only
refactor(scope):  restructure, no behaviour change
```

## Built By

[Victor Gogo](https://github.com/victorgogodev) — Frontend Engineer, building for the African web.
