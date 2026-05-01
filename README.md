# e-plantShopping Frontend

This Vite-powered React project implements the frontend for the Paradise Nursery shopping experience.
It includes:

- A hero landing page with background image, company messaging, and a “Get Started” button that jumps into the plant catalog.
- A product catalog page with three plant categories, six unique houseplants, and per-item “Add to Cart” actions that disable after selection.
- A cart page that displays each plant, unit prices, per-item totals, quantity controls, delete actions, and checkout/continue shopping controls.
- A Redux-powered cart slice so cart totals remain synced across pages, plus a shared header with navigation and an updating cart badge.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to browse the landing page, the plant catalog, and your shopping cart.
