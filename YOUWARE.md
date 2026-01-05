# ARLO CONSTRUCTION Website - Developer Guide

This project is a modern, responsive construction company website built with React, TypeScript, Vite, and Tailwind CSS.

## Project Overview

- **Client**: ARLO CONSTRUCTION
- **Industry**: Construction (Residential, Commercial, Renovation)
- **Location**: Puntland (Garowe, Bosaso, Laascanood)
- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, React Router DOM, Lucide React, i18next, Framer Motion
- **Backend**: Hono + Drizzle ORM (Youbase)
- **Database**: SQLite (D1) via Youbase

## Key Features

- **Responsive Design**: Fully mobile-friendly layout with sticky navigation and stacked mobile views.
- **Multi-page Structure**: Home, Projects, History, Consultation, Contact, Dashboard.
- **Multilingual Support**: English and Somali (via `react-i18next`).
- **Project Gallery**: Showcase of completed and ongoing projects with modern cards, hover effects, and modal details.
- **Interactive Map**: Google Map integration showing head office location.
- **Cost Calculator**: Client-facing construction cost estimator with quote request functionality.
- **Madina Factory**: Dedicated section for brick manufacturing and ordering.
- **Admin Dashboard**: Private area for project, material, quote, and tracking management (Login required).
- **WhatsApp Integration**: Global floating contact button.

## Design System (Modern Industrial)

- **Colors**:
  - **Backgrounds**: Zinc 900 (`#18181B`) for dark sections, Zinc 50 (`#FAFAFA`) for light sections.
  - **Primary Text**: Zinc 900 (`#18181B`) or White.
  - **Accent**: Amber 500/600 (`#F59E0B` / `#D97706`) - used for buttons, highlights, and icons.
  - **Borders**: Zinc 200 (`#E4E4E7`) or Zinc 800 (`#27272A`).
- **Typography**:
  - **Headings**: Bold, large scale, tight tracking.
  - **Body**: Clean, readable, generous line height.
- **Components**:
  - **Cards**: Clean backgrounds, subtle borders, hover lift effects, soft shadows.
  - **Buttons**: Rounded corners, solid accent colors or outline styles.
  - **Animations**: `framer-motion` used for scroll-triggered fades, slides, and hover interactions.

## Development Commands

### Setup & Run
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

### Linting
```bash
# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Header.tsx     # Sticky navigation with Top Bar & Mobile Menu
│   ├── Footer.tsx     # Modern footer with social links & quick access
│   ├── HeroSection.tsx # Full-screen video hero with gradient overlay
│   ├── ServicesSection.tsx # Grid layout with hover-interactive cards
│   ├── FeaturedProjects.tsx # Masonry-style grid with modal details
│   ├── ProjectsPreview.tsx # (Legacy/Alternative) Preview component
│   ├── MapSection.tsx # Google Map & Contact Details
│   ├── CostCalculator.tsx # Construction Cost Estimator
│   ├── MadinaFactorySection.tsx # Factory Info & Order Form
│   ├── AboutSection.tsx
│   └── WhatsAppButton.tsx # Global floating button
├── components/dashboard/ # Dashboard specific components
├── pages/             # Page components
│   ├── HomePage.tsx   # Assembles all main sections
│   ├── ProjectsPage.tsx
│   ├── HistoryPage.tsx
│   ├── ConsultationPage.tsx
│   ├── ContactPage.tsx
│   └── DashboardPage.tsx # Admin Dashboard with Login & Management
├── locales/           # Translation files
│   ├── en/            # English translations
│   └── so/            # Somali translations
├── assets/            # Static assets (images moved to public/assets/images)
├── App.tsx            # Main app component with routing
├── i18n.ts            # i18n configuration
└── main.tsx           # Entry point
```

## Backend (Youbase)

The backend is located in `backend/` and deployed to Youbase.

### Structure
```
backend/
├── src/
│   ├── index.ts              # API Routes
│   └── __generated__/        # Drizzle Schema
├── package.json
└── wrangler.toml
```

### Database Schema
- **projects**: `id`, `name`, `location`, `category`, `status`, `progress`, `start_date`, `notes` (JSON), `materials` (JSON)
- **materials**: `id`, `name`, `unit`, `stock`, `status`
- **quotes**: `id`, `location`, `length`, `width`, `building_type`, `finish_type`, `estimated_cost`, `contact_info` (JSON), `status`, `created_at`

### API Routes
- `GET /api/public/projects`: Public access to projects
- `POST /api/projects`: Create project (Auth required)
- `PUT /api/projects/:id`: Update project (Auth required)
- `DELETE /api/projects/:id`: Delete project (Auth required)
- `GET /api/public/materials`: Public access to materials
- `POST /api/materials`: Create material (Auth required)
- `PUT /api/materials/:id`: Update material (Auth required)
- `DELETE /api/materials/:id`: Delete material (Auth required)
- `POST /api/quotes`: Submit new quote request (Public)
- `GET /api/quotes`: List all quotes (Auth required)
- `PUT /api/quotes/:id`: Update quote status (Auth required)

### Deployment
```bash
cd backend
npx edgespark deploy
```

## Admin Dashboard

- **Route**: `/dashboard`
- **Auth**: Uses Youbase Auth (Managed UI).
- **Features**:
  - **Project Management**: Add/Edit projects, update status (Ongoing, Completed, Delayed).
  - **Materials Management**: Track stock levels (Cement, Steel, Bricks).
  - **Quote Requests**: Review and manage client quote requests.
  - **Project Tracking**: Monitor progress and add notes.
- **Data Persistence**: Connected to Youbase D1 Database.

## SEO Configuration

- **Canonical URL**: `https://arloconstruction.com/`
- **Meta Tags**: Open Graph (Facebook/LinkedIn) and Twitter Cards configured in `index.html`.
- **Social Image**: Uses homepage hero background (`/assets/images/hero-bg.jpg`).

## Deployment

The project is built with Vite and outputs to `dist/`. It can be deployed to any static hosting service (Vercel, Netlify, Cloudflare Pages).
