# Page Pulse — Frontend

A modern, single-page SaaS-style frontend for **Page Pulse**, a website audit tool.
This repository contains **frontend only** — no backend is included. All audit
results are currently served from mocked JSON so the UI can be built, reviewed,
and demoed independently of the backend.

## Tech Stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling
- **Axios** — HTTP client, pre-configured but not yet connected to a real API
- **Lucide React** — icon set
- Fully responsive, light theme, blue (`#2563EB`) accent

## Folder Structure

```
page-pulse/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AuditForm.jsx
│   │   ├── ResultCards.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── ErrorAlert.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── services/
│   │   └── auditService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── .env.example
```

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The app runs at `http://localhost:5173` by default.

## Package Dependencies

**Dependencies**
- `react` ^18.3.1
- `react-dom` ^18.3.1
- `axios` ^1.7.9
- `lucide-react` ^0.469.0

**Dev Dependencies**
- `vite` ^6.0.7
- `@vitejs/plugin-react` ^4.3.4
- `tailwindcss` ^3.4.17
- `postcss` ^8.5.1
- `autoprefixer` ^10.4.20

## How the Mock Data Works

All API calls are isolated inside `src/services/auditService.js`. Right now,
`runAudit(url)`:

1. Validates the URL client-side (`isValidUrl`).
2. Waits ~1.4s to simulate network latency (so the loading skeleton is visible).
3. Returns a mocked JSON response:

```json
{
  "httpStatus": 200,
  "responseTime": 321,
  "title": "Example Domain",
  "metaDescription": "This domain is for use in illustrative examples.",
  "h1Count": 1,
  "missingAltImages": 3,
  "wordCount": 824
}
```

**Demo error states** — type a URL containing the word `timeout` or `error`
(e.g. `https://timeout.com`, `https://error.com`) to preview the Timeout and
Server Error alerts. An incomplete/invalid URL (missing `http(s)://`) triggers
the Invalid URL alert.

## Connecting a Real Backend Later

An Axios instance (`auditApiClient`) is already configured in
`auditService.js` with a base URL read from `VITE_API_BASE_URL` (see
`.env.example`). To go live:

1. Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to your API.
2. In `auditService.js`, replace the mocked body of `runAudit()` with the
   commented-out `auditApiClient.post('/audit', { url })` implementation
   already provided at the bottom of the file.
3. No component changes are required — `Home.jsx` only ever calls
   `runAudit(url)` and handles the `loading / success / error` states.

## Design Notes

- Light theme, white background, `#2563EB` blue accent
- Rounded 2xl cards with soft, layered shadows
- Subtle hover lift + shadow-bloom on interactive cards
- Shimmer-style skeleton loading (respects `prefers-reduced-motion`)
- Footer always visible, links to https://digitalheroesco.com

---
Built for **Digital Heroes Training Task**.
