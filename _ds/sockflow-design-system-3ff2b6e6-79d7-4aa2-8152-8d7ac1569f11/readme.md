# SockFlow Design System

## Overview

**SockFlow** is a B2B SaaS platform for intelligent inventory management of socks, hosiery, and fashion accessories. Targeted at retailers, boutiques, and e-commerce sellers across Latin America, SockFlow enables real-time stock control, bulk editing, smart alerts, and advanced reporting — all in one platform.

**Tagline:** *Control total de tu inventario de medias.*
**Language:** Spanish (Latin American market)

---

## Source Materials

| Asset | Location | Notes |
|---|---|---|
| Landing page | `uploads/landing.png` | Full-page screenshot of the marketing site |
| Product catalog | `uploads/CATALOGO.pdf` | ⚠ File not found in project at build time — re-attach if needed |

Key product copy observed from the landing page:
- "Control total de tu inventario de medias"
- "Gestiona, edita y controla tu stock en tiempo real. Menos desorden, más ventas."
- "Comenzar gratis" / "Ver demo →"
- Features: Inventario en tiempo real, Edición masiva, Reportes inteligentes, Multi-almacén

---

## Design System Structure

```
styles.css                   ← global entry point (@import chain)
tokens/
  colors.css                 ← full color palette + semantic aliases
  typography.css             ← font families, sizes, weights, leading
  spacing.css                ← 4px grid, layout variables
  shadows.css                ← elevation + glow system
  borders.css                ← radius + border tokens
  base.css                   ← global reset using design tokens
assets/
  logo/
    sockflow.svg             ← full horizontal logo (color)
    sockflow-icon.svg        ← icon mark only
    sockflow-white.svg       ← white variant for dark backgrounds
    sockflow-icon-white.svg  ← icon only, white
guidelines/                  ← @dsCard specimen files (Design System tab)
components/
  core/                      ← Button, Badge, Card, Input, StatCard, Tag
ui_kits/
  landing/                   ← Marketing site recreation
SKILL.md                     ← Agent skill definition
readme.md                    ← This file
```

---

## Content Fundamentals

### Voice & Tone
- **Language:** Spanish (Latin American — neutral, no regional slang)
- **Person:** Uses "tú" form (informal but professional): "gestiona", "controla", "empieza"
- **Vibe:** Confident, direct, modern. Benefits-first language. Never corporate-stiff.
- **Capitalization:** Sentence case for UI labels and headlines ("Comenzar gratis", not "COMENZAR GRATIS")
- **Emoji:** Not used in UI copy. Product is professional/business tool.
- **Numbers:** Always formatted with thousands separator: `12,458` not `12458`

### CTA Patterns
- Primary CTAs: Action verb + object → "Comenzar gratis", "Comenzar ahora", "Ver demo"
- Secondary CTAs: "Ver demo →" (with arrow for ghost/link CTAs)
- Empowerment framing: "Empieza hoy. Crece mañana."

### Microcopy Patterns
- Feature labels: short, noun-first — "Edición masiva", "Control de stock", "Alertas inteligentes"
- Stats: always show trend context — "+12.8% vs ayer", "+23.4%"
- Benefit headers: active verbs — "Ahorra tiempo y reduce errores", "Aumenta tus ventas"

---

## Visual Foundations

### Colors
- **Base background:** #F4F7FB — white with a cool blue tint; never stark white
- **Primary:** #2563EB — vibrant, elegant blue for interactive elements
- **Deep/CTA:** #1E3A8A — for dark sections, primary CTA buttons, and high-contrast moments
- **Sky/Accent:** #60A5FA — for hover states, glows, and decorative elements
- **Cyan glow:** #7DD3FC — luminous detail on hero imagery and stat highlights
- **Text:** #1E293B — blue-tinted dark, never pure black
- **Shadows:** Always blue-tinted (rgba(37,99,235,…)), never pure black/grey

### Typography
- **Display font:** Plus Jakarta Sans — geometric, modern, personality. ExtraBold (800) for headlines, Bold (700) for subheadings. Tracking tight (–0.02em) on large headings.
- **Body font:** DM Sans — clean, lightweight, highly legible. Regular (400) and Medium (500).
- **Hierarchy:** Big headings (48–72px), generous line-height (1.1 for display, 1.5 for body), lots of whitespace. Short copy blocks — never dense paragraphs.

⚠ **Font substitution:** Plus Jakarta Sans and DM Sans are served via Google Fonts. Provide `.woff2` self-hosted files for production to guarantee load performance and exact metrics.

### Spacing
- **4px base grid** — all spacing in multiples of 4px
- Sections padded with 96px (6rem) vertically
- Cards use 24–32px padding
- Component gaps: 8–16px for inline items

### Backgrounds
- Light sections: #F4F7FB base with white cards floating above
- Dark sections: #1E3A8A deep blue or #1E293B near-black
- No patterned textures or repeating backgrounds
- No full-bleed photographs as section backgrounds (3D renders as imagery, not backgrounds)

### Imagery
- **3D rendered product shots** — socks on pedestals, floating with soft blue glow
- **3D dashboard UI mockups** — laptops and phones showing the software
- **Color vibe:** Cool, blue-tinted with lavender-purple undertones. Soft, studio lighting.
- **Never:** Warm-toned, lifestyle photography, gritty textures

### Cards
- **Shape:** Generous border-radius (18–24px = `--radius-xl` / `--radius-2xl`)
- **Background:** White (#fff) on light sections; rgba(255,255,255,0.08) on dark sections
- **Shadow:** Blue-tinted elevation (`--shadow-md` or `--shadow-lg`)
- **Border:** 1px solid `--color-border` (#DCE9F7) on light backgrounds

### Buttons
- **Primary CTA:** Dark navy pill (#1E3A8A) — the dominant CTA style on landing
- **Interactive primary:** Vibrant blue (#2563EB) — for in-app primary actions
- **Ghost/link:** Transparent with arrow icon ("Ver demo →")
- **Shape:** Always pill/full-radius (`border-radius: 9999px`)
- **Hover:** Lift effect — scale(1.02) + deeper shadow. No opacity fade.
- **Press:** scale(0.97) + shadow reduces

### Hover/Press States
- **Hover:** Slightly deeper color shade + enhanced shadow + subtle scale(1.02)
- **Press/Active:** scale(0.97), shadow reduces
- **Focus:** 3px blue ring (rgba(37,99,235,0.25)) — never outline:none without replacement
- Never use opacity-fade for hover; prefer color shift

### Animations & Easing
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out) for transitions
- **Duration:** Micro (150ms) for opacity/color; Standard (200ms) for transforms; Entrance (400ms) for section reveals
- **Scroll reveals:** Opacity fade-up (translateY 20px → 0) on entrance
- **No aggressive loops** — decorative animations are subtle and slow (>3s loop)
- **Floating elements:** Gentle bob animation (translateY ±6px, 3s ease-in-out infinite)

### Shadows
- Always blue-tinted — shadow color is `rgba(37,99,235,…)` or `rgba(30,58,138,…)`
- Hero/feature imagery: glow shadows (`--shadow-glow-*`) for the floating 3D renders
- Cards: `--shadow-md` default, `--shadow-lg` on hover
- Buttons: `--shadow-btn-primary` (0 4px 16px rgba(37,99,235,0.32))

### Borders & Radius
- Cards: 18–24px (`--radius-xl` / `--radius-2xl`)
- Inputs: 10px (`--radius-md`)
- Buttons: pill (`--radius-full`)
- Badges/Tags: pill or 6px (`--radius-sm`)
- Icons in containers: 8–10px (`--radius-md`)

### Layout
- **Container max:** 1200px centered
- **Grid:** Typically 2-column asymmetric (60/40 or 50/50) for hero sections
- **Nav:** Fixed top, white background, 68px height, gentle bottom border on scroll
- **Section rhythm:** Consistent 96px vertical padding between sections

### Corner Ornaments & Decorative Elements
- Floating 3D spheres/orbs in brand blue and cyan as atmospheric accents
- No hand-drawn illustrations, no doodles, no sketchy elements
- Geometric precision throughout — clean curves, no organic irregularity

---

## Iconography

- **No proprietary icon font detected** — icons in the landing appear to be inline SVG or a CDN icon library
- **Style:** Duotone-leaning, with colored square/rounded backgrounds (#2563EB or rgba(37,99,235,0.10)) behind line icons
- **Size:** 20–24px icons within 36–40px colored containers
- **Recommended library:** [Lucide Icons](https://lucide.dev) — stroke-based, clean, matches the stroke weight in the landing page
- **Usage in containers:** Icon sits centered in a `--radius-md` (10px) rounded square with primary-tinted background
- **No emoji used in UI**

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point — link this in any consumer |
| `tokens/` | All CSS custom properties |
| `assets/logo/` | Logo SVGs — color and white variants |
| `guidelines/` | Specimen cards visible in the Design System tab |
| `components/core/` | Reusable React primitives (Button, Badge, Card, Input, StatCard, Tag) |
| `ui_kits/landing/` | Full marketing landing page recreation |
| `SKILL.md` | Agent skill definition for use in Claude Code |
