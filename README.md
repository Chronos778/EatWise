# EatWise RAW MARKET

A brutalist-style food ordering web app built with plain HTML, CSS, and JavaScript.

The current project is a single-page app with a searchable menu, category filters, daily specials, cart and checkout flow, simulated terminal payment UI, and Gemini-powered AI waiter support.

## Highlights

- Static app with zero build step and zero runtime dependencies
- 26 menu items across 8 categories
- Real-time search and category filtering
- Live cart with instant total calculation
- Daily specials banner with one-click add
- Payment Terminal v2 with virtual card UI and processing logs (simulated)
- AI waiter integration using Google Gemini 2.5 Flash
- Light mode and Void mode (dark) theme toggle
- Responsive layout with mobile cart panel behavior
- Intro scene animation with skip support

## Tech Stack

- HTML5
- CSS3 (custom properties, grid/flex, animations)
- Vanilla JavaScript (ES6+)
- Google Gemini API (optional feature)
- Web App Manifest for installable app metadata

## Project Structure

- index.html: app layout, sections, modal shells, script loading
- style.css: visual system, brutalist styling, responsive behavior, animations
- script.js: menu data, rendering, filters, cart logic, payment flow, chatbot logic
- manifest.json: PWA metadata and icons
- images/: app and menu assets
- backend/server.py: local Python API proxy for chatbot requests
- backend/.env.example: local backend environment template
- backend/requirements.txt: Python dependencies for the backend

## Current Feature Set

### Menu and Discovery

- Displays 26 dishes, each with price, category, calories, prep time, tags, and image
- Category filter buttons are generated dynamically from menu data
- Search matches against dish name, description, and tags
- Live item count updates with filtering

### Daily Specials

- Generates two specials per session:
  - one premium item (price >= 420)
  - one item from a different category
- Includes a fallback random selection if needed
- Special cards support direct add to cart

### Cart and Receipt Panel

- Add items from menu cards and specials
- Remove items individually from receipt list
- Live total and cart count updates
- Empty-state receipt message when no items are in cart

### Payment Terminal v2

- Opens only when cart has at least one item
- Form includes card number, expiry, and CVV inputs
- Card number and expiry are formatted while typing
- Visual payment method tabs: CARD, CRYPTO, APPLE
- On authorize, UI switches to terminal logs:
  - CONNECTING
  - PROCESSING <METHOD>
  - APPROVED
- After payment:
  - cart clears
  - search/filter reset
  - order ID regenerates
  - date refreshes
  - receipt panel animation runs

### AI Waiter (Gemini)

- Chat requests are sent to a backend endpoint (`/api/chat` in deployed environments, `http://127.0.0.1:8787/api/chat` when local)
- If backend is not running/reachable, chat returns a service-unavailable response
- Backend uses model: gemini-2.5-flash
- AI receives full menu + specials context in system prompt
- Supports order commands with protocol:
  - `CMD:ORDER|ITEM_ID || MESSAGE`
- When command is returned, item is auto-added to cart

### Theme and UX

- Default light palette + Void mode dark palette
- Floating dock actions for menu/cart/chat/theme
- Smooth scroll buttons and toast notifications
- Intro typography scene auto-dismisses and supports manual skip
- Mobile breakpoint at 900px with cart panel slide behavior

## Quick Start

1. Clone repository

```bash
git clone https://github.com/Chronos778/EatWise.git
cd EatWise
```

2. Run the app

- Simplest: open index.html in a browser
- Recommended for API calls: use a local server

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

3. Open in browser

- If serving locally: http://localhost:8000

## Deployment

This project is a static site, so deployment is straightforward.

Important for AI chat: static hosts (like GitHub Pages) cannot securely run Gemini requests directly from the browser. Keep keys in backend `.env` only.

### Option 1: GitHub Pages

1. Push your code to a GitHub repository.
2. In your repository, open Settings > Pages.
3. Under Build and deployment:
  - Source: Deploy from a branch
  - Branch: main (or your default branch)
  - Folder: / (root)
4. Save and wait for deployment.
5. Your site will be available at:
  - https://<your-username>.github.io/<your-repo>/

Note: If your repository name is not EatWise, update any hardcoded public URL references as needed.

### Option 2: Netlify (Fastest)

1. Sign in to Netlify.
2. Click Add new site > Import an existing project (or drag-and-drop the project folder).
3. Build command: leave empty.
4. Publish directory: leave empty (root).
5. Deploy.

### Option 3: Vercel

1. Import the GitHub repository in Vercel.
2. Framework preset: Other.
3. Build command: leave empty.
4. Output directory: leave empty.
5. Deploy.

### AI Runtime Note

The frontend no longer stores Gemini keys in client-side config files.

- Local runtime: chat calls `http://127.0.0.1:8787/api/chat`
- Non-local runtime: chat calls `/api/chat`

This keeps provider keys in backend environment variables instead of browser code.

If you deploy frontend only (no backend at `/api/chat`), the app still loads and chat shows service unavailable.

## Local Python Backend (No Deployment)

1. Create and activate a Python virtual environment.
1. Install dependencies:

```bash
pip install -r backend/requirements.txt
```

1. Create backend/.env from backend/.env.example and set GEMINI_API_KEY.
1. Keep ALLOWED_ORIGINS limited to your local dev hosts. Add `,null` only if you intentionally run from `file://`.
1. Run the backend:

```bash
python backend/server.py
```

1. Run your frontend locally (or open index.html directly).

Chat requests will be routed through the local backend endpoint.

## Configuration Points

- Menu catalog: edit menuData in script.js
- Theme tokens: edit CSS variables in :root and body.void-mode in style.css
- Specials logic: renderSpecials in script.js
- Payment log cadence: confirmPayBtn handler in script.js
- AI persona/prompt behavior: setupChat system prompt in script.js

## Known Limitations

- Payment is simulated only; no real payment gateway integration
- No deployed backend, authentication, or order history by default
- No localStorage/session persistence for cart
- AI features require internet and a valid Gemini API key
- Images are external; broken image URLs are hidden at runtime

## Browser Support

Designed for modern browsers with support for:

- CSS Grid/Flexbox
- CSS custom properties
- Fetch API
- ES6 JavaScript

## License

MIT License. See LICENSE for details.
