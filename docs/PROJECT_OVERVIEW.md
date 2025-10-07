# Project Overview

## 📋 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Components](#components)
- [Security](#security)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Introduction

Anand Replica Site is a modern, production-ready web application showcasing best practices in React development. Built with TypeScript, Vite, and Tailwind CSS, it demonstrates professional-grade architecture, comprehensive security features, and optimal performance.

## Features

### Core Features

- ✅ Modern React 18 with TypeScript
- ✅ Fast development with Vite
- ✅ Responsive design with Tailwind CSS
- ✅ Component library with Radix UI
- ✅ Client-side routing with React Router
- ✅ Form handling with React Hook Form
- ✅ State management with TanStack Query
- ✅ Type-safe schemas with Zod

### Security Features

- 🔒 XSS Protection
- 🔒 CSRF Token Management
- 🔒 Content Security Policy
- 🔒 Rate Limiting
- 🔒 Session Timeout
- 🔒 Bot Detection
- 🔒 Clickjacking Prevention

### Performance Features

- ⚡ Code splitting
- ⚡ Lazy loading
- ⚡ Image optimization
- ⚡ Performance monitoring
- ⚡ Resource timing tracking

### UI/UX Features

- 🎨 Modern, clean design
- 🎨 Smooth animations
- 🎨 Interactive carousels
- 🎨 Responsive layouts
- 🎨 Accessible components

## Tech Stack

### Frontend

- **Framework:** React 18.3
- **Language:** TypeScript 5.8
- **Build Tool:** Vite 5.4
- **Styling:** Tailwind CSS 3.4
- **UI Library:** Radix UI
- **Icons:** Lucide React
- **Routing:** React Router DOM 6.30

### Development Tools

- **Linting:** ESLint 9
- **Type Checking:** TypeScript
- **Version Control:** Git
- **CI/CD:** GitHub Actions

### Additional Libraries

- **Forms:** React Hook Form + Zod
- **Queries:** TanStack Query
- **Carousel:** Embla Carousel
- **Date Handling:** date-fns
- **Toast Notifications:** Sonner
- **Themes:** next-themes

## Project Structure

```
anand-replica-site/
├── .github/                    # GitHub configuration
│   ├── workflows/             # CI/CD workflows
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── .vscode/                   # VS Code configuration
│   ├── extensions.json        # Recommended extensions
│   └── settings.json          # Workspace settings
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/                       # Source code
│   ├── assets/               # Images and media
│   │   ├── logos/            # Logo images
│   │   └── *.png             # Component images
│   ├── components/           # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── About.tsx
│   │   ├── FeaturedOn.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Invite.tsx
│   │   ├── Message.tsx
│   │   └── Videos.tsx
│   ├── hooks/                # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   ├── usePageLoader.tsx
│   │   ├── usePerformanceMonitoring.tsx
│   │   ├── useRateLimiter.tsx
│   │   └── useSessionTimeout.tsx
│   ├── lib/                  # Utility functions
│   │   └── utils.ts
│   ├── pages/                # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── utils/                # Helper utilities
│   │   ├── rateLimiter.ts
│   │   ├── security.ts
│   │   └── securityConfig.tsx
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── .editorconfig             # Editor configuration
├── .gitignore                # Git ignore rules
├── CHANGELOG.md              # Version history
├── CODE_OF_CONDUCT.md        # Code of conduct
├── CONTRIBUTING.md           # Contribution guidelines
├── DEPLOYMENT.md             # Deployment guide
├── LICENSE                   # MIT License
├── README.md                 # Project readme
├── SECURITY.md               # Security policy
├── components.json           # shadcn/ui config
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsmeabirmohanta/anand-replica-site.git
   cd anand-replica-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open browser:
   ```
   http://localhost:5173
   ```

## Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Building
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

### Adding Components

1. Create component file in `src/components/`
2. Import and use in parent component
3. Add types for props
4. Follow existing naming conventions

### Custom Hooks

All custom hooks are in `src/hooks/`:

- `use-mobile.tsx` - Detect mobile viewports
- `usePageLoader.tsx` - Page loading states
- `usePerformanceMonitoring.tsx` - Performance tracking
- `useRateLimiter.tsx` - Request rate limiting
- `useSessionTimeout.tsx` - Session management

## Components

### Main Components

1. **Header** - Navigation bar with responsive menu
2. **Hero** - Main banner with carousel
3. **About** - About section with portrait
4. **FeaturedOn** - Logo carousel
5. **Message** - Message section with image
6. **Invite** - Call-to-action section
7. **Videos** - Video showcase section
8. **Footer** - Site footer with links

### UI Components

Located in `src/components/ui/`, includes:

- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Carousels, Accordions
- Toasts, Alerts
- And 40+ more components

## Security

### Implemented Measures

1. **XSS Protection**

   - Input sanitization
   - Output encoding
   - Content Security Policy

2. **CSRF Protection**

   - Token generation
   - Token validation
   - Secure cookies

3. **Rate Limiting**

   - Request throttling
   - IP-based limits
   - Configurable thresholds

4. **Session Management**

   - Timeout warnings
   - Auto-logout
   - Secure storage

5. **Bot Detection**
   - Behavioral analysis
   - Browser fingerprinting

For more details, see [SECURITY.md](SECURITY.md)

## Performance

### Optimization Techniques

- Code splitting with React.lazy()
- Image optimization and lazy loading
- Bundle size optimization
- Resource preloading
- Performance monitoring hooks

### Performance Metrics

Monitor with:

```typescript
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
```

## Accessibility

- WCAG 2.1 compliant
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Focus management
- Semantic HTML

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions for:

- Vercel
- Netlify
- GitHub Pages
- Docker
- Traditional hosting

Quick deploy to Vercel:

```bash
npm install -g vercel
vercel
```

## Contributing

We welcome contributions! Please see:

- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Code of conduct

### Quick Contribution Steps

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## Support

- 📫 Open an [Issue](https://github.com/itsmeabirmohanta/anand-replica-site/issues)
- 💬 Start a [Discussion](https://github.com/itsmeabirmohanta/anand-replica-site/discussions)
- 📧 Contact: [GitHub Profile](https://github.com/itsmeabirmohanta)

## Acknowledgments

- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by [Abir Mohanta](https://github.com/itsmeabirmohanta)**
