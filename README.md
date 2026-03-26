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
- config.js: runtime API key source used by the chatbot
- config.example.js: empty template for API key setup
- manifest.json: PWA metadata and icons
- images/: app and menu assets

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

- Uses window.EATWISE_CONFIG.GEMINI_API_KEY from config.js
- If key is missing, chat input is disabled and marked offline
- Uses model: gemini-2.5-flash
- AI receives full menu + specials context in system prompt
- Supports order commands with protocol:
  - CMD:ORDER|<item_id> || <message>
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

### Production Note for AI Key

The current app reads GEMINI_API_KEY from config.js on the client, which exposes the key publicly in browser-delivered code.

For production use, move Gemini calls behind a backend endpoint (serverless function or API server), keep the key in server-side secrets, and have the frontend call your backend instead of Google Gemini directly.

## AI Setup (Optional)

1. Get an API key from Google AI Studio.
2. Set your key in config.js:

```javascript
window.EATWISE_CONFIG = {
  GEMINI_API_KEY: 'your-api-key-here'
};
```

3. Reload the app.

Note: config.example.js contains the same structure with an empty key.

## Configuration Points

- Menu catalog: edit menuData in script.js
- Theme tokens: edit CSS variables in :root and body.void-mode in style.css
- Specials logic: renderSpecials in script.js
- Payment log cadence: confirmPayBtn handler in script.js
- AI persona/prompt behavior: setupChat system prompt in script.js

## Known Limitations

- Payment is simulated only; no real payment gateway integration
- No backend, authentication, or order history
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
