# DineOut

DineOut is a small React + Vite demo application that simulates a restaurant order management dashboard. It provides a themed UI to create orders, view order summaries, and manage orders (deliver/delete). A simple client-side login allows moderator/admin users to access the dashboard.

This README explains the project structure, features, and how to run the app locally.

## Features
- Create Order: enter customer name, pick items and quantities, place an order.
- Orders: view existing orders, mark as Delivered, delete orders.
- Order Summary: total / pending / delivered counters.
- Order Reports: table view with filter (All / Pending / Delivered).
- Client-side Dashboard: login form (moderator/admin) and logout — purely client-side for demo purposes.

## Tech stack
- React 19
- Vite (dev server & build)
- Plain CSS + small utility classes (project styles in `src/index.css` and `src/assets/App.css`)

## Project structure (important files)
- `index.html` — app entry
- `package.json` — manifest & scripts
- `src/`
	- `main.jsx` — React bootstrap
	- `App.jsx` — top-level layout & simple auth routing
	- `index.css` and `assets/App.css` — styles
	- `assets/Components/` — UI components (NavBar, Features, CreateOrder, Orders, Reports, etc.)
	- `assets/Components/data.js` — sample items and initial orders

## Local development
These steps assume you have Node.js (16+) and Git installed.

1. Clone the repository

```powershell
git clone https://github.com/RizviRahman/DineOut.git
cd DineOut
```

2. Install dependencies

```powershell
npm install
```

3. Start dev server

```powershell
npm run dev
```

Open the URL printed by Vite (e.g. `http://localhost:5173/`) in your browser.

4. Build for production

```powershell
npm run build
```

5. Preview the production build

```powershell
npm run preview
```

## Dashboard / Login
- The app now includes a simple client-side login form. It is intentionally minimal for demo purposes and does NOT authenticate against a backend.
- To use it:
	- Open the app, enter a username and choose role (moderator or admin), then click Sign in.
	- After signing in you'll land on the Dashboard (same theme), which contains the Create Order section and the Orders/Reports.
	- Use the Logout button in the NavBar to sign out.

## Notes & suggestions
- Data persistence: orders live in-memory and reset on refresh — consider adding localStorage or a backend API for persistence.
- Controlled state: for larger apps, lift item quantities to parent state or use a store.
- Tests & CI: consider adding unit tests and a GitHub Actions workflow for continuous checks.

## Troubleshooting
- If Vite reports port in use, it will try another port; check terminal output for the active URL.
- If you see runtime errors referring to `chrome-extension://...`, try disabling browser extensions to confirm whether the error originates from an extension.

---


