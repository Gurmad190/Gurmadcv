# YOUWARE.md

This file provides guidance to YOUWARE Agent (youware.com) when working with code in this repository.

## Project Overview

- **Platform**: React + TypeScript Modern Web Application
- **Languages**: English & Somali (i18n support)
- **Backend**: Youbase (Hono + Drizzle ORM on Cloudflare Workers)
- **Database**: Youbase D1 (SQLite)
- **Auth**: Youbase Auth
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **SEO**: React Helmet Async

## Architecture & Directory Structure

```
src/
├── components/
│   ├── common/          # Shared components (Navbar, Footer, Layout, SEO, SocialShare)
│   ├── cv/              # CV specific components
│   │   ├── templates/   # CV Templates (Modern, Classic, Minimal)
│   │   ├── CVPreview.tsx # Template renderer
│   │   └── AIAssistant.tsx # AI Modal
├── hooks/
│   └── useAnalytics.ts  # Analytics tracking hook
├── i18n/
│   ├── locales/         # Translation files (en.ts, so.ts)
│   └── config.ts        # i18n configuration
├── lib/
│   └── youbase.ts       # Youbase client initialization
├── pages/
│   ├── auth/            # Authentication pages (Login)
│   ├── dashboard/       # Private user pages (Dashboard, CVBuilder, CoverLetterBuilder)
│   └── public/          # Public informational pages (Home, About, etc.)
├── store/
│   ├── useAuthStore.ts  # Authentication state (Synced with Youbase)
│   └── useCVStore.ts    # CV/Cover Letter data state (API calls)
├── types/
│   └── cv.ts            # Shared TypeScript interfaces for CV data
├── App.tsx              # Main router configuration (Wrapped with HelmetProvider)
└── main.tsx             # Entry point with i18n init

backend/
├── src/
│   └── index.ts         # Hono API (Routes for CVs, Cover Letters, AI, Analytics, and OG Images)
```

## Development Commands

- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Deploy Backend**: `cd backend && npx edgespark deploy`
- **Lint**: `npm run lint`

## Database Schema

### CVs Table
- `id`: Integer (PK)
- `user_id`: Text (Indexed)
- `title`: Text
- `type`: Text (general, job, scholarship)
- `content`: Text (JSON) - Includes `template` field ('modern', 'classic', 'minimal')
- `created_at`: Integer
- `updated_at`: Integer

### Cover Letters Table
- `id`: Integer (PK)
- `user_id`: Text (Indexed)
- `title`: Text
- `tone`: Text (formal, professional, friendly)
- `content`: Text (JSON)
- `created_at`: Integer
- `updated_at`: Integer

### Analytics Events Table
- `id`: Integer (PK)
- `type`: Text (e.g., 'page_view')
- `path`: Text
- `meta`: Text (JSON)
- `created_at`: Integer

## Key Features

### CV Builder
- **Templates**: Modern, Classic, Minimal.
- **Sections**: Personal Info (including Logo, WhatsApp), Experience, Education, Skills, Languages, Hobbies, Certificates, References.
- **PDF Export**: Client-side PDF generation using `html2pdf.js`.
- **AI Assistant**: Generate professional summaries and content using OpenAI. Integrated into Summary, Experience, and Education sections.

### SEO & Social
- **SEO Component**: `src/components/common/SEO.tsx` handles JSON-LD (WebApplication, Organization) and Meta tags.
- **Default OG Image**: `public/og-banner.jpg` (1200x630 JPEG) used as fallback.
- **Dynamic OG Images**: Backend endpoint `GET /api/public/og?title=...&type=...` generates SVG images on the fly.
- **Social Sharing**: `src/components/common/SocialShare.tsx` provides buttons for WhatsApp, Facebook, Twitter.

### Localization
- Translations are stored in `src/i18n/locales/`.
- Use `useTranslation` hook in components.

### Design System
- **Colors**: Blue (Primary), Green (Secondary/Success), Gray (Neutral).
- **Typography**: Clean, professional sans-serif (Inter/System default).
- **Icons**: Lucide React.
- **Logo**: `src/assets/gurmad-logo.png` used in Navbar, Footer, and Auth pages. Includes title and tagline in Navbar.
- **Social Media**: Integrated Facebook and TikTok links in Navbar, Footer, and Contact page.
- **Contact**: Updated contact details, added Floating WhatsApp button, and used WhatsApp brand icon in Contact page.
- **Homepage**: Updated with Trust Line, "How It Works" section, and improved CTA hierarchy.

### Analytics
- **Tracking**: Custom privacy-friendly analytics using `useAnalytics` hook.
- **Backend**: Stores events in `analytics_events` table via `POST /api/public/analytics`.
