# replit.md

## Overview

This is a full-stack web application built with React and Express.js, featuring a modern audio/video production equipment showcase website with a space-themed design. The application uses a monorepo structure with both frontend and backend components, utilizing TypeScript throughout and modern web technologies. The website now features separate pages for better navigation and includes animated space backgrounds with moving stars.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: connect-pg-simple for PostgreSQL-based sessions
- **Development**: Hot reload with tsx and custom middleware

### Key Components

1. **Database Layer**
   - Drizzle ORM for type-safe database operations
   - PostgreSQL as the primary database
   - Migration system via drizzle-kit
   - Schema defined in `shared/schema.ts` with Zod validation

2. **Storage Interface**
   - Abstracted storage layer with IStorage interface
   - In-memory storage implementation for development
   - Ready for database integration via Drizzle ORM

3. **UI System**
   - Comprehensive component library built on Radix UI
   - Consistent design tokens via CSS variables
   - Dark/light mode support
   - Responsive design with mobile-first approach

4. **Type Safety**
   - End-to-end TypeScript implementation
   - Shared types between frontend and backend
   - Zod schemas for runtime validation

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **API Layer**: Express.js routes handle HTTP requests
3. **Business Logic**: Controllers interact with storage interface
4. **Data Persistence**: Storage implementation handles database operations
5. **Response**: JSON responses sent back to client
6. **State Management**: TanStack Query manages client-side caching and updates

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL driver

### UI and Styling
- Radix UI components for accessible primitives
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Lucide React for icons

### Database and Storage
- Neon Database serverless driver
- PostgreSQL session store
- Drizzle Kit for migrations

### Development Tools
- Vite for frontend bundling
- tsx for TypeScript execution
- esbuild for backend bundling
- Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- Frontend: Vite dev server with hot reload
- Backend: tsx with auto-restart on file changes
- Database: Neon Database with environment-based connection

### Production Build
- Frontend: Vite production build to `dist/public`
- Backend: esbuild bundle to `dist/index.js`
- Static files served via Express.js
- Single deployment artifact

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Node.js environment detection for development vs production
- Replit-specific configuration for cloud deployment

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
- July 05, 2025. Updated to separate pages architecture with space-themed design
  - Created individual pages: /about, /equipment, /contact
  - Added animated space background with moving stars
  - Updated navigation to use proper routing
  - Enhanced equipment section with real product images
  - Added comprehensive contact information and social media links
- July 05, 2025. Mobile optimization and navigation improvements
  - Made navigation fixed with transparent background
  - Fixed question mark display issues in Spanish titles
  - Optimized mobile text sizing and prevented word breaking
  - Restored galaxy animations on mobile with improved performance
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```