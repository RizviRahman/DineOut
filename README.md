# DineOut

DineOut is a React + Vite application for restaurant management with role-based access. It features an interactive menu carousel, order management system, and an admin dashboard with revenue analytics. The app uses a themed glass-card UI design throughout.

This README explains the project features, structure, and setup instructions.

## Features

### Authentication & UI
- Interactive 3D rotating menu carousel on the login page
- Role-based access (Admin/Moderator)
- Glass-card themed UI components
- Responsive navbar with user context

### Admin Dashboard
- Monthly Revenue Chart with hover details
- Item Frequency Chart (click month to update)
- Item Management:
  - Add/Edit items with name, price, and image
  - Image upload with preview
  - Item list with thumbnails
- Moderator Management:
  - Add/Edit moderators
  - Role assignment (admin/moderator)

### Order Management
- Create Orders:
  - Customer information
  - Item selection with quantities
  - Real-time total calculation
- Order Tracking:
  - Order summary (total/pending/delivered)
  - Filterable order reports
  - Status updates (mark as delivered)
  - Order deletion

## Tech Stack
- Frontend:
  - React 19
  - Vite (dev server & build)
  - CSS3 with Glassmorphism design
  - SVG Charts (Revenue & Frequency)

## Project Structure
```
src/
├── main.jsx           # React bootstrap
├── App.jsx           # Root component with auth
├── index.css         # Global styles
├── assets/
│   ├── App.css      # Main app styles
│   └── Components/
│       ├── NavBar.jsx
│       ├── Login.jsx         # Login with 3D carousel
│       ├── Features.jsx      # Routes to Admin/Moderator views
│       ├── data.js          # Sample data (items, orders, revenue)
│       ├── admin-dashboard/  # Admin components
│       │   ├── AdminDashboard.jsx
│       │   ├── admin-dashboard.css
│       │   └── admin-components/
│       │       ├── AdminHeader.jsx
│       │       ├── RevenueChart.jsx
│       │       ├── ItemFrequencyChart.jsx
│       │       ├── ItemForm.jsx
│       │       └── ModeratorForm.jsx
│       └── order-manager/    # Order management
           ├── OrderManager.jsx
           └── order-components/
               ├── CreateOrder.jsx
               ├── Orders.jsx
               └── Reports.jsx
```

## Local Development
Prerequisites: Node.js (16+) and Git

1. Clone the repository:
```bash
git clone https://github.com/RizviRahman/DineOut.git
cd DineOut
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage Guide

### Authentication
- Open the app and see the 3D rotating menu carousel
- Enter username and select role (moderator/admin)
- Click Sign in to access your dashboard
- Use the Logout button in navbar to exit

### Admin Dashboard
- View monthly revenue in the bar chart
- Hover over bars to see exact amounts
- Click a month to update the item frequency chart
- Use the forms on the right to:
  - Add/edit menu items with images
  - Manage moderator accounts

### Order Management (Moderator)
- Create orders:
  1. Enter customer name
  2. Select items and quantities
  3. Click "Place Order"
- View orders:
  - See order summaries
  - Filter by status
  - Mark orders as delivered
  - Delete orders if needed

## Planned Features
- Backend API (Node.js + Express)
- MongoDB integration for data persistence
- JWT authentication
- Image upload to cloud storage
- Real-time order updates

## Development Notes
- State Management: Currently using React's useState; consider Redux/Context for scaling
- Data Persistence: Currently in-memory; planned backend integration
- Image Handling: Local preview with FileReader; plan to add cloud storage
- Authentication: Simple role-based demo; JWT implementation planned

## Troubleshooting
- Port conflicts: Check terminal for alternate port
- Runtime errors: Try disabling browser extensions
- Image upload issues: Check file size and type

---


