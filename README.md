# TECHNO MECH TOOLINGS (TMT) - Corporate B2B Website

High-precision solid carbide cutting tools and custom tooling corporate web platform built with React, Vite, Tailwind CSS, React Router v6, and Lucide Icons.

## 🚀 Key Features

- **Chromium E-Commerce Catalogue Architecture**:
  - Two-column catalogue layout with category sidebar navigation.
  - Interactive promotional hero slider with pause on hover and direct CTAs.
  - Live product search with real-time SKU and keyword filtering.
  - 7 required product categories with structured technical specifications table.
- **Global B2B Quote System**:
  - Accessible, keyboard-closable (`Esc`) quote modal with full form validation.
  - Pre-fills tool name and SKU when triggered from any product card or detail page.
- **Multi-Page Corporate Routing (9 Routes + Detail View)**:
  - `/`: Home (Catalogue top layout, hero slider, featured tools, about snapshot, capabilities, quality strip, client logos)
  - `/about`: Company overview, mission/vision, leadership and facility standards
  - `/products`: Full catalogue layout with active filters, sort dropdown, and search
  - `/products/:id`: Detailed tool spec sheet, technical attributes table, related tools
  - `/services`: Tool regrinding, PVD coating, custom tool design, application engineering
  - `/projects`: Real-world machining case studies (Automotive, Aerospace, Die & Mold, Oil & Gas)
  - `/facility`: 5-Axis CNC grinding cells, temperature-controlled metrology lab, 6-stage QC workflow
  - `/clients`: Industries served, client placeholders, and verified testimonials
  - `/careers`: Open machining & engineering positions with validated "Apply Now" modal
  - `/contact`: Technical inquiry form, plant & office address placeholders, operating hours, logistics map
- **Design System**:
  - Strictly follows corporate B2B industrial palette: Charcoal `#1E2227` / `#262B31`, Industrial Yellow `#F5B800` (hover `#E0A800`), Crisp hairline borders `#E5E7EB`, Page background `#FFFFFF`.
  - Dynamic SEO title updates on every route.
  - Placeholders clearly labeled throughout (`[Placeholder]`).

## 🛠️ Development & Build

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
