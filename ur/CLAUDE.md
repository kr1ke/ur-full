# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt.js 3 Vue application for "Юридическая помощь №1" (Legal Help #1), a Russian legal services company based in Ryazan. The site provides information about legal services, contact forms, testimonials, and office location.

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate

# Preview production build locally
npm run preview

# Prepare Nuxt (run after install)
npm run postinstall
```

## Linting and Code Quality

```bash
# ESLint is configured but no explicit lint command in package.json
# Use Nuxt's built-in ESLint integration or run manually:
npx eslint .
```

## Architecture and Structure

### Application Structure
- **Single Page Application**: All content rendered on `pages/index.vue`
- **Component-based**: Sectional components imported into main page
- **Static Generation Ready**: Configured for `npm run generate` for static hosting

### Key Components Layout (in order):
1. `HeroSection.vue` - Hero banner with main messaging
2. `ServicesSection.vue` - Legal services offered  
3. `AdvantagesSection.vue` - Company advantages
4. `ContactFormSection.vue` - Contact form
5. `TestimonialsSection.vue` - Client reviews
6. `MapSection.vue` - Office location map
7. `FooterSection.vue` - Footer with contact info

### Icon Components
Located in `components/icons/` - custom SVG icon components for social media, contact, and UI elements.

### Styling
- **Tailwind CSS 4.x** configured via `@tailwindcss/vite` plugin
- Main styles in `assets/css/main.css`
- Component-scoped styling patterns

### Configuration Files
- `nuxt.config.ts` - Main Nuxt configuration with SEO, meta tags, and modules
- `eslint.config.mjs` - ESLint configuration using Nuxt preset
- `tsconfig.json` - TypeScript configuration extending Nuxt defaults

## SEO and Analytics

The site has comprehensive SEO optimization:
- Structured data (JSON-LD) for legal services, organization, FAQ
- Yandex Metrika analytics (ID: 101465129) 
- Sitemap generation via `@nuxtjs/sitemap`
- Rich meta tags and Open Graph data
- Geo-location data for Ryazan, Russia

## Deployment

### Docker Deployment
- Multi-stage Dockerfile for static generation + Nginx serving
- Builds with `npm run generate` 
- Serves on port 5555 via Nginx
- Static files served from `/usr/share/nginx/html`

### Build Process
```bash
# For Docker deployment
docker build -t legal-help .
docker run -p 5555:5555 legal-help
```

## Contact Information (for context)
- Phone: +7 (964) 161-65-46  
- Email: info.legal.help@yandex.ru
- Address: пр. Первомайский, д. 59, Рязань 390000
- Website: https://urpomosh1.ru
- Social: VK (@uristryazan1), Telegram (@uristryazan1)