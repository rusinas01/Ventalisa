# MB Ventalista — HVAC Landing Page

Premium, high-converting home page for the HVAC business **MB Ventalista**
(heating, cooling & ventilation). Built with Vite + React + TypeScript +
Tailwind CSS v4.

## Run locally

```bash
npm install      # first time only
npm run dev      # start dev server  → http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Design system

All tokens live in [`src/index.css`](src/index.css) under `@theme`:

| Token | Value | Use |
| --- | --- | --- |
| `--color-forest-600` | `#1b5e46` | Primary deep forest emerald |
| `--color-mint-500` | `#4ade80` | Vibrant high-contrast accent |
| `--color-sage-50` | `#f4f7f5` | Soft off-white section tint |
| `--color-ink-900` | `#111827` | Charcoal body text |
| `--font-sans` | Plus Jakarta Sans | Geometric sans-serif |

Reusable helpers: ambient `.glow` blobs, `.input` (inset-border form fields),
`Reveal` (scroll-in animation), `Button`, `Pill`, `Img` (graceful gradient
fallback), `SectionHeading`.

## Section map (`src/components/`)

1. `Navbar` — floating glass nav
2. `Hero` — headline + layered image + float stat cards
3. `TrustStrip` — animated brand marquee
4. `Highlights` — "Top-tier climate control" + `07+` counter + stats
5. `Services` — "How can we help you?" anchored block + chevron rows
6. `Process` — "First call to final result" connected-circle timeline
7. `Cases` — success-story image grid
8. `Pricing` — 3-column plan matrix (featured plan highlighted)
9. `Testimonials` — star-rated review cards
10. `CtaContact` — "Stay updated with us" + quote form
11. `Footer` — CTA band, link columns, newsletter

Content is centralized in [`src/lib/data.ts`](src/lib/data.ts) — edit copy,
services, plans, testimonials and image URLs there.
