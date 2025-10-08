# Dr. Anand Shukla - Portfolio Website

[![CI](https://github.com/itsmeabirmohanta/Dr.-Anand-Shukla/workflows/CI/badge.svg)](https://github.com/itsmeabirmohanta/Dr.-Anand-Shukla/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, security-hardened single-page portfolio application built with React 18, TypeScript, and Vite. Features enterprise-grade security implementations, client-side rate limiting, performance monitoring, and a responsive design system built with shadcn/ui components and Tailwind CSS.

## ✨ Key Features

### Security & Protection

- 🛡️ **Comprehensive Security Layer**: Bot detection, clickjacking prevention, activity monitoring via `SecurityProvider`
- 🚦 **Client-Side Rate Limiting**: Dual storage (memory + localStorage) with preset limits for forms, API calls, video loads, and navigation
- 🔒 **Input Sanitization**: XSS protection with `sanitizeHTML()` on all user inputs
- 🎫 **CSRF-like Token System**: Form token generation and validation for secure submissions
- 📊 **Performance Monitoring**: Automatic slow resource tracking and reporting

### Design & UX

- 🎨 **Modern UI**: shadcn/ui components with custom HSL color system and Tailwind CSS
- 📱 **Mobile-First Responsive**: Progressive breakpoints from `xs` (475px) to `2xl` (1400px)
- ✨ **Smooth Animations**: Custom fade-up, fade-in animations with Tailwind
- 🎭 **Interactive Elements**: Hover effects, transitions, and optimized image handling
- 🌓 **Accessible Design**: WCAG-compliant with 44x44px touch targets and proper contrast ratios

### Performance & Architecture

- ⚡ **Optimized Bundle Splitting**: Manual chunks for react-vendor and ui-vendor
- � **React Query Integration**: TanStack Query for async state management
- 📦 **Production Optimizations**: Console log stripping, terser minification
- 🎯 **TypeScript Strict Mode**: Type safety across all components and utilities
- 🔄 **Smooth Scroll**: Global scroll behavior with section-based navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/itsmeabirmohanta/anand-replica-site.git
   cd anand-replica-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:8080` to view the application.

## 📦 Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🛠️ Tech Stack

### Core

- **Framework:** React 18.3.1 with React Router DOM 6.30.1
- **Language:** TypeScript (strict mode)
- **Build Tool:** Vite with SWC plugin
- **Package Manager:** npm/Bun compatible

### Styling & UI

- **CSS Framework:** Tailwind CSS 3.x with custom config
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Typography Plugin:** @tailwindcss/typography
- **Animations:** tailwindcss-animate
- **Utilities:** clsx, tailwind-merge, class-variance-authority

### State & Data

- **Async State:** TanStack Query 5.83.0
- **Forms:** React Hook Form 7.61.1 + Zod 3.25.76
- **Date Handling:** date-fns 3.6.0

### Components & Features

- **Icons:** Lucide React 0.462.0
- **Carousel:** Embla Carousel 8.6.0 with auto-scroll
- **Dialogs/Modals:** Vaul 0.9.9 (drawer)
- **Notifications:** Sonner 1.7.4
- **Command Palette:** cmdk 1.1.1
- **Theme:** next-themes 0.3.0

### Development

- **Linting:** ESLint 9.32.0 with React hooks & refresh plugins
- **Build Optimization:** Terser (console.log stripping in production)
- **Dev Server Port:** 8080 (not 5173)

## 📁 Project Structure

```
anand-replica-site/
├── public/                      # Static assets (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── assets/                  # Images (hero banners, portraits, logos)
│   ├── components/              # Feature components
│   │   ├── ui/                 # shadcn/ui components (DO NOT EDIT MANUALLY)
│   │   ├── About.tsx           # About section
│   │   ├── FeaturedOn.tsx      # Logo carousel with Embla
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero banner section
│   │   ├── Invite.tsx          # Invitation form with rate limiting
│   │   ├── Message.tsx         # Message section
│   │   └── Videos.tsx          # Video gallery with thumbnails
│   ├── examples/               # Example implementations
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile detection
│   │   ├── use-toast.ts        # Toast notifications
│   │   ├── useFirstVisit.tsx   # First visit tracking
│   │   ├── usePageLoader.tsx   # Page loading states
│   │   ├── usePerformanceMonitoring.tsx  # Performance tracking
│   │   ├── useRateLimiter.tsx  # Rate limiting logic
│   │   └── useSessionTimeout.tsx  # Session management
│   ├── lib/
│   │   └── utils.ts            # cn() utility for className merging
│   ├── pages/                  # Route-level components
│   │   ├── Index.tsx           # Home page (main entry)
│   │   ├── NotFound.tsx        # 404 page
│   │   ├── About.tsx           # About page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Privacy.tsx         # Privacy policy
│   │   └── Terms.tsx           # Terms of service
│   ├── utils/                  # Core utilities
│   │   ├── rateLimiter.ts      # Rate limiter with presets
│   │   ├── security.ts         # Security functions (sanitize, validate)
│   │   └── securityConfig.tsx  # SecurityProvider component
│   ├── App.tsx                 # Provider setup and routing
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles & CSS variables
├── .github/
│   └── workflows/              # CI/CD workflows
│       └── ci.yml              # Lint + build validation
├── docs/                       # Comprehensive documentation
│   ├── ARCHITECTURE.md         # System architecture
│   ├── SECURITY_FEATURES.md    # Security implementation details
│   ├── DEPLOYMENT.md           # Deployment guide
│   ├── CHANGELOG.md            # Version history
│   └── ...
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind configuration
├── vite.config.ts              # Vite build & dev server config
└── tsconfig.json               # TypeScript configuration
```

## 🔒 Security Architecture

### Global Security Layer (`SecurityProvider`)

Wraps entire application in `src/utils/securityConfig.tsx`:

- **Bot Detection**: Automated traffic prevention
- **Clickjacking Protection**: X-Frame-Options enforcement
- **Activity Monitoring**: User interaction tracking
- **Security Headers**: CSP, X-Content-Type-Options, Referrer-Policy

### Client-Side Rate Limiting

Implemented via `useRateLimiter` hook with dual storage (memory + localStorage):

**Rate Limit Presets** (from `src/utils/rateLimiter.ts`):

- `FORM_SUBMISSION`: 5 requests/minute (used in Invite.tsx)
- `API_CALL`: 10 requests/minute
- `VIDEO_LOAD`: 20 requests/minute
- `NAVIGATION`: 30 requests/minute

**Usage Pattern**:

```tsx
const { checkLimit } = useRateLimiter({
  maxRequests: RateLimitPresets.FORM_SUBMISSION.maxRequests,
  timeWindowMs: RateLimitPresets.FORM_SUBMISSION.timeWindowMs,
  storageKey: "invite-form",
});

if (!checkLimit()) {
  toast({ title: "Rate limit exceeded" });
  return;
}
```

### Input Validation & Sanitization

From `src/utils/security.ts`:

- `sanitizeHTML(input)`: XSS prevention via DOMParser
- `isValidEmail(email)`: RFC-compliant email validation
- `isValidPhone(phone)`: International phone format validation
- `isValidURL(url)`: URL structure validation

### CSRF-like Protection

- `generateFormToken()`: Creates timestamped tokens with crypto randomness
- `validateFormToken(token, maxAgeMs)`: Validates token freshness and structure

### Production Build Security

- Console logs stripped via Terser in production mode
- Source maps only in development builds
- Minification with dead code elimination

For complete details, see [SECURITY_FEATURES.md](docs/SECURITY_FEATURES.md) and [SECURITY.md](SECURITY.md).

## 🎨 UI Component System

### shadcn/ui Integration

Built on [shadcn/ui](https://ui.shadcn.com/) with Radix UI primitives:

**Installation**:

```bash
npx shadcn@latest add <component-name>
```

**⚠️ Important**: Components in `src/components/ui/` are auto-generated. **DO NOT manually edit** - regenerate via CLI instead.

### Custom Components

- **PageSkeleton**: Loading states with skeleton screens
- **OptimizedImage**: Image optimization wrapper
- **VideoThumbnailPlayer**: Custom video player with thumbnails
- **LumaSpin**: Animated loading spinner

### Design System

**Color Variables** (from `src/index.css`):

```css
--primary: 0 0% 4%         /* Dark text/backgrounds */
--accent: 45 85% 53%       /* Golden/amber highlights */
--dark-bg: 0 0% 4%         /* Section dark backgrounds */
--light-bg: 0 0% 100%      /* Section light backgrounds */
```

**Typography Scale**:

- Hero: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`
- Section: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- Body: `text-sm sm:text-base md:text-lg`

**Spacing Pattern**:

- Section padding: `py-12 sm:py-16 md:py-20 lg:py-24`
- Container: `container mx-auto px-4 sm:px-6 lg:px-8`

### Accessibility Features

- WCAG AA compliant color contrast
- 44x44px minimum touch targets on mobile
- Keyboard navigation support
- Screen reader optimized
- Semantic HTML structure

## 📝 Available Scripts

| Command             | Description                                         |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Start development server on `http://localhost:8080` |
| `npm run build`     | Production build (console.log stripped, minified)   |
| `npm run build:dev` | Development build with source maps                  |
| `npm run lint`      | Run ESLint checks                                   |
| `npm run preview`   | Preview production build locally                    |

### Build Modes

- **Production** (`npm run build`):
  - Terser minification with console.log removal
  - No source maps (security)
  - Manual code splitting (react-vendor, ui-vendor)
- **Development** (`npm run build:dev`):
  - Source maps enabled for debugging
  - No minification
  - Faster builds

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](docs/CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Documentation

### Core Documentation

- **[Architecture Overview](docs/ARCHITECTURE.md)** - System design and component architecture
- **[Security Features](docs/SECURITY_FEATURES.md)** - In-depth security implementation details
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Production deployment instructions
- **[Responsive Improvements](docs/RESPONSIVE_IMPROVEMENTS.md)** - Mobile-first design patterns

### Development Guides

- **[Copilot Instructions](.github/copilot-instructions.md)** - AI-assisted development guidelines
- **[Contributing Guide](docs/CONTRIBUTING.md)** - How to contribute to the project
- **[Changelog](docs/CHANGELOG.md)** - Version history and updates
- **[Complete Features](docs/COMPLETE.md)** - Full feature list

### Policies

- **[Code of Conduct](docs/CODE_OF_CONDUCT.md)** - Community guidelines
- **[Security Policy](SECURITY.md)** - Vulnerability reporting

## 🚀 Performance Optimizations

### Code Splitting

- **React Vendor Chunk**: React, React-DOM, React Router DOM
- **UI Vendor Chunk**: Radix UI, class-variance-authority, clsx, tailwind-merge
- Automatic chunk splitting for better caching

### Loading States

- `usePageLoader` hook with customizable delays
- Skeleton screens for smooth loading transitions
- Progressive image loading

### Monitoring

- `usePerformanceMonitoring` hook tracks:
  - Slow resource loads (>500ms)
  - Long tasks (>50ms)
  - Navigation timing
  - Resource timing

### Build Optimizations

- Terser minification in production
- Dead code elimination
- Tree shaking enabled
- CSS purging via Tailwind

## � Development Workflow

### Provider Chain Order (CRITICAL)

From `src/App.tsx`:

```tsx
QueryClientProvider → SecurityProvider → TooltipProvider → BrowserRouter
```

This order ensures security checks run before routing and tooltips work correctly.

### Adding New Routes

⚠️ **Add routes ABOVE the catch-all `path="*"` route** in `App.tsx` (see comment).

### Common Pitfalls

1. ❌ **Don't modify `src/components/ui/*` manually** - use `npx shadcn@latest add <component>`
2. ❌ **Rate limiter needs unique `storageKey`** - prevents localStorage collisions
3. ❌ **Import paths must use `@/` alias** - configured in vite.config.ts
4. ❌ **Dev server is port 8080, not 5173** - check vite.config.ts
5. ❌ **SecurityProvider must wrap QueryClientProvider** - order matters for error boundaries
6. ❌ **Never hardcode colors** - use CSS variables from index.css only

### Adding shadcn/ui Components

```bash
# Install a new component
npx shadcn@latest add button

# Updates components.json and installs to src/components/ui/
```

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please open an issue:

**[GitHub Issues](https://github.com/itsmeabirmohanta/Dr.-Anand-Shukla/issues)**

Before submitting:

- Check existing issues to avoid duplicates
- Include browser/OS information
- Provide steps to reproduce
- Include screenshots if UI-related

## 👨‍💻 Author

**Abir Mohanta**

- GitHub: [@itsmeabirmohanta](https://github.com/itsmeabirmohanta)
- Project: [Dr. Anand Shukla Portfolio](https://github.com/itsmeabirmohanta/Dr.-Anand-Shukla)

## 🙏 Acknowledgments

- **UI Framework**: [shadcn/ui](https://ui.shadcn.com/) - Radix UI primitives
- **Icons**: [Lucide](https://lucide.dev/) - Beautiful open-source icons
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) - Lightweight carousel library
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Abir Mohanta | Powered by React 18 + TypeScript + Vite
