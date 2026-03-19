# CDR2SVG Landing Page

Static marketing site for CDR2SVG — a macOS app that converts CorelDRAW files to SVG.

## Tech Stack

- **Astro 5** (static output)
- **Tailwind CSS 3**

## Development

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # Generates dist/
npm run preview   # Preview production build locally
```

## Deploy

Designed for **Netlify** (or any static hosting). The `dist/` folder is the deploy target.

Netlify settings:
- Build command: `npm run build`
- Publish directory: `dist`

## Pages

| Route | Description |
|---|---|
| `/` | Landing — hero, features, pricing (PayPal), how to activate, FAQ |
| `/gracias` | Post-purchase confirmation |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Structure

```
src/
  layouts/Base.astro        — HTML shell, meta tags
  pages/                    — Astro pages (file-based routing)
  components/               — Hero, Features, Pricing, HowItWorks, FAQ, Navbar, Footer
public/                     — Static assets (favicon, images)
```

## Related

- **License API**: [cdr2svg-license-api](https://github.com/carlosvidal/cdr2svg-license-api) — backend for license validation and PayPal payments
