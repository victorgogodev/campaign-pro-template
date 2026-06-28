# Campaign Pro Template — Agent & Developer Reference

> Last updated: Jun 28 2026 — Project scaffold complete. React + Vite + Tailwind verified. All 8 components built and rendering. Nav hover fix applied. Currently on `feature/component-structure` branch.

> **Current Focus:** Complete `feature/component-structure` — commit, PR, merge. Next: `feature/mpesa-integration` — wire real Daraja STK Push API into `Donate.jsx`.

---

## Do Not — Hard Rules

- **Never push directly to `main`.** Always `feature/*` branch with a PR.
- **Never use heredoc (`<< 'EOF'`) to write JSX files containing anchor tags.** The chat interface strips `<a` opening tags during copy/paste and heredoc workflows. Always write JSX files via `bash_tool` and present as a download, or edit directly in VS Code.
- **Never duplicate colour values across components.** All colours live in `src/constants/theme.js`. Import `C` and reference tokens — never hardcode hex values in components.
- **Never commit secrets to git history.** `.env` is gitignored. Rotate all keys before production: `DARAJA_CONSUMER_KEY`, `DARAJA_CONSUMER_SECRET`, `AFRICA_TALKING_API_KEY`.
- **Never call the real Daraja STK Push in development.** Use sandbox credentials only. `DARAJA_ENVIRONMENT=sandbox` must be set in `.env` until production switch.
- **Never edit migration files manually** (when backend is introduced).
- **Never delete feature branches until project completion.**

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Branch Strategy](#branch-strategy)
- [Component Structure](#component-structure)
- [Theme System](#theme-system)
- [Productized Services](#productized-services)
- [Integrations Roadmap](#integrations-roadmap)
- [Git Commit Convention](#git-commit-convention)
- [Phase Log](#phase-log)

---

## Project Overview

A reusable, client-ready campaign website template targeting Kenya 2027 general election candidates. Built to be sold as a productized service — swap candidate name, colours, ward list, and content to deploy for each new client.

**Target clients:** MCA, MP, Senator, Governor candidates, civic NGOs, media houses.

**Live demo candidate:** Hon. Jane Wanjiku, Westlands MP 2027.

---

## Tech Stack

| Layer             | Technology                                        |
| ----------------- | ------------------------------------------------- |
| Frontend          | React + Vite                                      |
| Styling           | Tailwind CSS + inline styles (custom tokens)      |
| Backend (planned) | Node.js + Express                                 |
| Payments          | M-Pesa Daraja API (STK Push)                      |
| SMS               | Africa's Talking                                  |
| Maps              | Leaflet.js + Kenya GeoJSON (Results Live product) |
| Real-time         | Socket.io (Results Live product)                  |
| Deployment        | Vercel (frontend) + Railway (backend)             |

---

## Branch Strategy

- `main` is protected — no direct pushes ever
- All work on `feature/*` branches
- PR required to merge into `main`
- Feature branches retained post-merge until project completion
- Branch naming: `feature/description-of-work`

---

## Component Structure

```
src/
  components/
    Nav.jsx             ✅ Complete — sticky nav, mobile menu, hover states, brand → #home
    Hero.jsx            ✅ Complete — headline, CTAs, stats, grid texture, decorative circles
    Issues.jsx          ✅ Complete — 4-card grid, gold left accent, icon + desc
    About.jsx           ✅ Complete — photo placeholder, badge, bio, credentials grid
    VolunteerForm.jsx   ✅ Complete — validated form, ward select, success state
    Donate.jsx          ✅ Complete — quick amounts, M-Pesa flow (simulated), success state
    Events.jsx          ✅ Complete — date blocks, location + time meta
    Footer.jsx          ✅ Complete — brand → #home, quick links with hover, contact
  constants/
    theme.js            ✅ Complete — all colour tokens (C.green, C.gold, etc.)
  App.jsx               ✅ Complete — imports and renders all components in order
```

---

## Theme System

All colours defined in `src/constants/theme.js` as `C`:

| Token          | Hex       | Usage                                              |
| -------------- | --------- | -------------------------------------------------- |
| `C.green`      | `#0B3D2E` | Primary — nav, hero, about, footer backgrounds     |
| `C.greenDark`  | `#082B20` | Hover states, deeper green accents                 |
| `C.greenLight` | `#EBF3ED` | Icon backgrounds, success state backgrounds        |
| `C.gold`       | `#C8A951` | Accent — eyebrows, CTAs, stat values, card borders |
| `C.goldLight`  | `#FBF5E0` | Donate section background                          |
| `C.bg`         | `#FAFAF8` | Page background, Issues + Events sections          |
| `C.white`      | `#FFFFFF` | Cards, form backgrounds                            |
| `C.text`       | `#1C1C1C` | Body text                                          |
| `C.muted`      | `#6B7280` | Secondary text, descriptions                       |
| `C.border`     | `#E5E7EB` | Card borders, input borders                        |

---

## Productized Services

### Campaign Pro — Candidate Website

This repo. Tiers:

| Tier     | Price (KSh) | Includes                                                 |
| -------- | ----------- | -------------------------------------------------------- |
| Basic    | 45,000      | Static site, contact form, social links                  |
| Standard | 95,000      | + Real M-Pesa donations, volunteer form, admin panel     |
| Premium  | 200,000+    | + CMS, analytics, WhatsApp integration, 12-month hosting |

**To deploy for a new client:** Update candidate name/details, adjust `theme.js` colours, update ward list in `VolunteerForm.jsx`, update issues data in `Issues.jsx`, update events in `Events.jsx`.

### Results Live — Election Night Dashboard

Separate product. Stack: React + Recharts + Socket.io + Leaflet.js + Kenya GeoJSON.
Target: media houses, NGOs. Pricing: KSh 150K–400K + KSh 20K/month hosting retainer.

### Campaign Ops — Campaign Management SaaS

Separate product. Stack: React + Node/Express + Africa's Talking + WhatsApp Business API.
Target: MP+ campaigns. Pricing: KSh 80K setup + KSh 30K–60K/month retainer.

---

## Integrations Roadmap

| Integration                | Status            | Phase                              |
| -------------------------- | ----------------- | ---------------------------------- |
| M-Pesa Daraja STK Push     | 🔴 Simulated only | Next — `feature/mpesa-integration` |
| Africa's Talking SMS       | 🔴 Not started    | After Daraja                       |
| WhatsApp Business API      | 🔴 Not started    | Campaign Ops phase                 |
| Leaflet.js + Kenya GeoJSON | 🔴 Not started    | Results Live product               |
| Socket.io real-time        | 🔴 Not started    | Results Live product               |
| Admin dashboard            | 🔴 Not started    | Standard tier unlock               |
| Volunteer data backend     | 🔴 Not started    | Node/Express phase                 |

---

## Git Commit Convention

```
feat(scope):      new feature
fix(scope):       bug fix
chore(scope):     dependencies, config, tooling
docs(scope):      documentation only
refactor(scope):  restructure, no behaviour change
```

**Scopes:** `nav`, `hero`, `issues`, `about`, `volunteer`, `donate`, `events`, `footer`, `theme`, `scaffold`, `mpesa`, `sms`, `backend`, `admin`, `deployment`, `docs`

---

## Phase Log

### Phase 1 — Project Scaffold ✅

- GitHub repo created: `victorgogodev/campaign-pro-template`
- React + Vite + Tailwind installed and verified
- Branch: `feature/project-scaffold` → PR #1 → merged to `main`
- Commit: `chore(scaffold): add React + Vite + Tailwind`

### Phase 2 — Component Structure (current)

- Branch: `feature/component-structure`
- All 8 components built and rendering
- Theme constants file established
- Nav hover bug fixed, brand links to `#home` in nav and footer
- Known issue: JSX files with anchor tags must be delivered via file download, not heredoc — chat interface strips `<a` opening tags
- Next: commit, PR, merge → start `feature/mpesa-integration`
