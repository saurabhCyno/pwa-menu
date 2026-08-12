# Spice Garden — Restaurant Menu PWA

A production-quality, mobile-first Restaurant Menu Progressive Web App built with Next.js App Router.

## Features

- Browse 22 menu items with images, descriptions, and prices
- Live search with 400ms debounce
- Filter by Veg / Non-Veg
- Sort by price or alphabetically
- Animated quantity controls on menu cards
- Off-canvas cart drawer with customer form
- WhatsApp order placement
- Order confirmation screen
- PWA installable with offline fallback
- Premium mobile-first UI (390–430px centered viewport)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Zustand
- @ducanh2912/next-pwa

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/           → Next.js app router (layout, page, manifest, offline)
components/    → Feature-based UI components
store/         → Zustand state management
hooks/         → Custom React hooks
lib/           → Utilities (cn, motion variants)
utils/         → Helpers (validation, WhatsApp URL, formatting)
types/         → TypeScript interfaces
constants/     → App constants
data/          → Menu data
public/        → Static assets and PWA icons
```

## WhatsApp Ordering

Orders are sent to **9876543210** via WhatsApp with customer details and cart summary.

## License

MIT
