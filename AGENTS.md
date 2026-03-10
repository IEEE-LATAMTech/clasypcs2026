# AGENTS.md — CLASYPCS Website

> This document is intended for both human developers and AI agents working on this codebase. It covers the project's purpose, architecture, component map, data conventions, and guidelines for making changes.

---

## 1. Project Overview

This is the official landing page for **IEEE CLASYPCS** (Congress of Latin American Students & Young Professionals of Computer Society), the biggest SYP event in IEEE Region 9.

- **Current edition:** CLASYPCS 2026
- **Event dates:** September 21–22, 2026 (check-in September 20th)
- **Location:** Four Points by Sheraton San José, Costa Rica
- **Theme:** *Unlocking Your Potential: Leveraging Innovation and Entrepreneurship in Computing Technologies*
- **Target audience:** ~100 CS Students and Young Professionals from Region 9
- **Production URL:** `clasypcs2025.ieee-latamtech.org` ← **CNAME must be updated** for 2026 deployment
- **Contact email:** `r9-syp@computer.org`

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| UI Components | shadcn-vue (Radix Vue-based) |
| Icons | lucide-vue-next |
| Email | EmailJS (`@emailjs/browser`) |
| Routing | Vue Router v4 |
| Build | Vite |
| Deploy | GitHub Pages (`npm run deploy` via `scripts/gh-pages-deploy.js`) |

**Build command:** `npm run build` (runs `vue-tsc && vite build`)  
**Dev server:** `npm run dev`  
**Deploy:** `npm run deploy` — builds, commits to `gh-pages` branch, force-pushes, returns to `main`

---

## 3. Project Structure

```
clasypcs-website/
├── index.html               # Entry point — meta tags, OG/Twitter cards, title
├── CNAME                    # GitHub Pages custom domain
├── public/
│   ├── BannerBecas.jpeg     # Hero section banner image
│   ├── Bodoque*.svg         # Illustrations used in HowItWorks section
│   ├── imagenesTeam/        # Team member photos (JPEG/JPG)
│   │   └── placeholder.jpg  # Fallback for members without a photo yet
│   ├── imagenesSpeakers/    # Speaker photos (PNG)
│   └── imaEven/             # Past event images (used in AboutUs/Sponsors)
├── src/
│   ├── App.vue              # Root layout — assembles all sections
│   ├── main.ts              # App entry point
│   ├── router/index.ts      # Vue Router config
│   ├── views/
│   │   └── AboutUs.vue      # Past edition image marquee (currently placeholder images)
│   ├── components/          # All page sections (see §4)
│   │   └── ui/              # shadcn-vue primitives (button, card, badge, etc.)
│   ├── icons/               # SVG icon components (LinkedIn, GitHub, X, Instagram)
│   └── assets/
│       └── favicon.png      # Logo shown in Navbar
├── tailwind.config.js
├── vite.config.ts           # Path alias: `@` → `src/`
└── scripts/
    └── gh-pages-deploy.js   # Automated GitHub Pages deployment
```

---

## 4. Component Map

Sections are rendered in this order in `App.vue` (all on the `/` route):

| Component | Section `id` | Purpose |
|---|---|---|
| `Navbar.vue` | — | Sticky top nav with logo, links, Previous Editions dropdown, theme toggle |
| `Hero.vue` | — | Full-width headline, event tagline, CTA button |
| `Benefits.vue` | `#benefits` | 4-card grid: International collaboration, Leadership, Branding, Networking |
| `DistinguisedGuest.vue` | `#guest` | Distinguished guest speaker cards |
| `Speakers.vue` | `#speakers` | Speaker cards with photo, name, bio |
| `Sponsors.vue` | `#sponsors` | Sponsor logo marquees + sponsorship inquiry form |
| `Features.vue` | `#features` | 6-card grid: event differentiators |
| `Community.vue` | `#community` | Community/social links block |
| `Services.vue` | `#services` | Location info: Hotel, Venue, Costa Rica Vibes cards |
| `HowItWorks.vue` | `#features` | Step-by-step journey (4 steps with illustrations) |
| `Pricing.vue` | `#pricing` | Registration pricing (6 tiers) + scholarship banner |
| `Contact.vue` | `#registration` | Full scholarship/registration application form |
| `Team.vue` | `#team` | Organizing committee member cards |
| `FAQ.vue` | `#faq` | Accordion FAQ |
| `Footer.vue` | `#footer` | Footer with links and copyright |

> **Note:** Both `Features.vue` and `HowItWorks.vue` use `id="features"`. This is a pre-existing collision — do not add anchor links to `#features` without clarifying which section is intended.

The `/aboutUs` route renders `AboutUs.vue` instead of the homepage sections, with just the Navbar and Footer surrounding it.

---

## 5. Navbar Navigation

```typescript
// src/components/Navbar.vue

// Main route links (homepage only):
// - #pricing        → Pricing
// - #services       → Location
// - #team           → Team
// - #faq            → FAQ
// - #registration   → Register

// "Previous Editions" dropdown (external links, open in new tab):
// - IEEE CLASYPCS 2025 — Montevideo, Uruguay → https://clasypcs2025.ieee-latamtech.org/

// On /aboutUs route: shows only "Back to Home" link
```

To add a new previous edition, append to the `previousEditions` array in `Navbar.vue`:
```typescript
{ href: "https://...", label: "IEEE CLASYPCS 2026", location: "San José, Costa Rica" }
```

---

## 6. Pricing Data

Defined as a `plans` array in `Pricing.vue`. Two groups: first 3 (students), last 3 (professionals).

| Plan | Price (USD) | `popular` |
|---|---|---|
| Student CS Member | $100 | YES (featured) |
| Student IEEE Member | $150 | NO |
| Student Non-Member | $250 | NO |
| Professional CS Member | $180 | NO |
| Professional IEEE Member | $230 | NO |
| Professional Non-Member | $330 | NO |

**Registration opens:** April 20th, 2026  
**Scholarships open:** April 20th, 2026

---

## 7. Team Data

Defined as a `teamList` array in `Team.vue`. Structure:

```typescript
interface TeamProps {
  imageUrl: string;       // path relative to /public/imagenesTeam/
  firstName: string;
  lastName: string;
  positions: string[];    // e.g. ["Event Chair"]
  socialNetworks: { name: string; url: string }[];  // name: "LinkedIn" | "Github" | "X" | "Instagram"
}
```

**2026 Committee:**

| Name | Role |
|---|---|
| Cristóbal Arroyo | Event Chair |
| Joseph Rojas | Program Coordinator |
| Ariana Garcia | Finance Coordinator |
| Esteban Arias | Logistics Coordinator |
| Paula Londoño | Marketing Coordinator |
| Pedro Yannoulas | Financial Committee |
| Cinthya Ramon | Financial Committee |
| Alejandra Ponce | Marketing Committee |
| Michel Adelino | Program Committee |
| Amanda Calderón | Marketing & Local Committee |
| Natasha Urdaneta | Program Committee |
| Waldir Ventura Filho | Advisor |

> Members without a dedicated photo use `/imagenesTeam/placeholder.jpg`. When a photo is available, add it to `public/imagenesTeam/` and update `imageUrl` in `Team.vue`.

---

## 8. Email Integration (EmailJS)

Both the scholarship form (`Contact.vue`) and the sponsorship inquiry form (`Sponsors.vue`) use EmailJS.

```typescript
// Hardcoded in Contact.vue
const EMAILJS_SERVICE_ID  = 'service_e9x87vp';
const EMAILJS_TEMPLATE_ID = 'template_m25v52h';
const EMAILJS_PUBLIC_KEY  = '7PgYcd9fDVBNItAkJ';
```

The Sponsors form uses its own constants (defined separately in `Sponsors.vue`). If EmailJS credentials need to change (e.g. for a new edition), update them in both files. Consider moving them to environment variables (`import.meta.env.VITE_*`) for better maintainability.

**Scholarship form sends to:** `r9-syp@computer.org`  
**Sponsorship form subject:** `New Sponsorship Inquiry CLASYPCS 2026 - <companyName>`

---

## 9. Routing

```typescript
// src/router/index.ts
// Only one named route:
{ path: '/aboutUs', name: 'AboutUs', component: AboutUs }
```

All other navigation is via anchor links (`#section-id`) on the homepage. The router uses `createWebHistory()`.

---

## 10. Theming & Styling

- Dark mode is forced on load: `mode.value = "dark"` in `Navbar.vue`
- Users can toggle with `ToggleTheme.vue` (uses `@vueuse/core` `useColorMode`)
- Tailwind CSS with custom primary color defined in `tailwind.config.js`
- shadcn-vue components live in `src/components/ui/`; do not edit them directly — they are design system primitives
- Section spacing convention: `py-10 sm:py-14` (reduced from the original `py-24 sm:py-32`)

---

## 11. Updating for a New Edition (Year-over-Year Checklist)

When updating the site for a new CLASYPCS edition, change the following:

### Content to update
- [ ] **`index.html`** — `<title>`, all `<meta>` OG/Twitter tags, keywords, author
- [ ] **`CNAME`** — update to the new edition's domain
- [ ] **`Navbar.vue`** — brand name (`CLASYPCS 20XX`), logo alt text; add the outgoing edition to `previousEditions` array
- [ ] **`Hero.vue`** — edition name, city/country, dates in headline
- [ ] **`Services.vue`** — hotel name, venue description, city card
- [ ] **`Pricing.vue`** — all 6 prices, registration open date, scholarship open date
- [ ] **`Team.vue`** — replace `teamList` with new committee; update section heading; add photos to `public/imagenesTeam/`
- [ ] **`FAQ.vue`** — date/location answer
- [ ] **`Contact.vue`** — form title, email subject, motivation letter label, docs note, registration open date
- [ ] **`Sponsors.vue`** — sponsorship inquiry email subject
- [ ] **`Footer.vue`** — copyright year/edition name

### Assets to update
- [ ] `public/BannerBecas.jpeg` — Hero banner image
- [ ] `public/imagenesTeam/` — New team member photos
- [ ] `public/imagenesSpeakers/` — New speaker photos
- [ ] `public/og-image-clasypcs.png` — Open Graph preview image
- [ ] `assets/favicon.png` — Logo/favicon

### Speakers & Distinguished Guests
- Speaker data is in `Speakers.vue` (`speakerList` array)
- Distinguished guest data is in `DistinguisedGuest.vue` *(note the typo in the filename — do not rename to avoid breaking imports)*

---

## 12. Known Issues & Notes

- `Features.vue` and `HowItWorks.vue` both use `id="features"` — pre-existing collision.
- The filename `DistinguisedGuest.vue` has a typo ("Distingised" instead of "Distinguished") — do not rename, as it's imported by `App.vue` by that exact name.
- `AboutUs.vue` (at `/aboutUs`) currently shows a marquee of placeholder event images. It is no longer linked from the Navbar (Previous Editions is now a dropdown). It can be repurposed or removed in a future iteration.
- EmailJS credentials are hardcoded. For a production setup, move to `.env` variables.
- The `package.json` name is still `clasypcs2025-webpage` — can be updated to `clasypcs2026-webpage` if desired.
