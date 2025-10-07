# Copilot Instructions for Anand Replica Site

## Project Overview

Modern React 18 + TypeScript + Vite SPA with extensive security features, built using shadcn/ui components and Tailwind CSS. This is a single-page portfolio/profile site with strong emphasis on security, performance monitoring, and rate limiting.

## Architecture Patterns

### Security-First Approach

- **Global Security Wrapper**: All app content wrapped in `SecurityProvider` (`src/utils/securityConfig.tsx`) which handles bot detection, clickjacking prevention, and activity monitoring
- **Rate Limiting**: Client-side rate limiting via `useRateLimiter` hook uses dual storage (memory + localStorage) to prevent abuse
  - Example: `Invite.tsx` uses `RateLimitPresets.FORM_SUBMISSION` (5 req/min) before mailto actions
  - Presets in `src/utils/rateLimiter.ts`: FORM_SUBMISSION, API_CALL, VIDEO_LOAD, NAVIGATION
- **Input Sanitization**: All user inputs must pass through `sanitizeHTML()` from `src/utils/security.ts`
- **CSRF-like Tokens**: Use `generateFormToken()` and `validateFormToken()` for form submissions

### Component Organization

- **Page Components**: `src/pages/` contains route-level components (Index.tsx, NotFound.tsx)
- **Feature Components**: `src/components/` contains section components (Hero, About, Videos, etc.)
- **UI Components**: `src/components/ui/` contains shadcn/ui primitives - DO NOT modify manually, regenerate via `npx shadcn@latest add <component>`
- **Utilities**: Use `cn()` from `src/lib/utils.ts` for className merging (clsx + tailwind-merge)

### State & Data Flow

- **No Global State Library**: Uses React Query (`@tanstack/react-query`) for async state
- **Query Client**: Single `QueryClient` instance in `App.tsx`
- **Context Providers Order**:
  ```tsx
  QueryClientProvider → SecurityProvider → TooltipProvider → BrowserRouter
  ```

### Performance Patterns

- **Page Loading**: Use `usePageLoader` hook with skeleton screens (`PageSkeleton` from `skeleton-loader.tsx`)
- **Performance Monitoring**: `usePerformanceMonitoring` hook in AppContent tracks slow resources automatically
- **Code Splitting**: Manual chunks in `vite.config.ts` split react-vendor and ui-vendor bundles

## Developer Workflows

### Development Commands

```bash
npm run dev          # Vite dev server on localhost:8080 (not 5173!)
npm run build        # Production build with terser (drops console.log)
npm run build:dev    # Dev build with source maps
npm run lint         # ESLint check
npm run preview      # Preview production build
```

### Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

This updates `components.json` and installs to `src/components/ui/`. Never manually edit these files.

### Styling Conventions

- Use custom CSS variables from `src/index.css` for colors: `--primary`, `--accent`, `--dark-bg`, `--light-bg`
- Tailwind custom colors: `dark-bg`, `light-bg` for gradients
- Responsive: Mobile-first, use `sm:`, `md:`, `lg:` breakpoints
- Animations: Prefer `animate-fade-up`, `animate-fade-in` from tailwind config

## Design Consistency Rules

### Color System (MUST FOLLOW)

All colors use HSL format defined in `src/index.css`:

- **Primary**: `hsl(var(--primary))` - Dark text/backgrounds (0 0% 4%)
- **Accent**: `hsl(var(--accent))` - Golden/amber highlights (45 85% 53%)
- **Dark BG**: `hsl(var(--dark-bg))` - Section dark backgrounds (0 0% 4%)
- **Light BG**: `hsl(var(--light-bg))` - Section light backgrounds (0 0% 100%)
- **White Text**: Use `text-white` or `text-white/95` for content on dark backgrounds
- **Text Opacity**: Use `/90`, `/95` opacity modifiers for subtle text hierarchy

**Never hardcode colors** - always use CSS variables or Tailwind semantic classes.

### Typography Hierarchy

- **Hero Headings**: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`
- **Section Headings**: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- **Subsection Headings**: `text-xl sm:text-2xl md:text-3xl lg:text-4xl`
- **Body Text**: `text-sm sm:text-base md:text-lg`
- **Small Text**: `text-xs sm:text-sm`
- **Font Weight**: Use `font-light` for taglines, `font-semibold`/`font-bold` for headings
- **Line Height**: Use `leading-relaxed` or `leading-tight` for headings
- **Font Family**: Poppins primary, Inter fallback (defined in tailwind.config.ts)

### Spacing & Layout

- **Section Padding**: `py-12 sm:py-16 md:py-20 lg:py-24`
- **Container**: Always wrap in `container mx-auto px-4 sm:px-6 lg:px-8`
- **Max Width**: Use `max-w-7xl mx-auto` for content areas
- **Grid Gaps**: `gap-5 sm:gap-6`, `gap-8 sm:gap-10 lg:gap-14`
- **Component Spacing**: `space-y-4 sm:space-y-5 md:space-y-6`

### Section Background Pattern

Alternate dark/light backgrounds for visual rhythm:

```tsx
// Dark section
<section className="bg-dark-bg py-12 sm:py-16 md:py-20 lg:py-24">

// Light section with gradient
<section className="bg-gradient-to-br from-light-bg via-white to-light-bg py-12 sm:py-16 md:py-20 lg:py-24">
```

### Animation Standards

- **Entrance Animations**: Add `animate-fade-up` to main content containers
- **Hover Effects**: Use `hover:scale-105` for buttons, `hover:grayscale-0` for images
- **Transitions**: Use `transition-all duration-300` or `transition-all hover:scale-105`
- **Shadow Effects**: `shadow-2xl` for hero elements, `shadow-lg` for cards

### Component Patterns

#### Section Header Pattern

```tsx
<div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
    Section Title
  </h2>
  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
    Description text
  </p>
</div>
```

#### Button Consistency

- Primary CTA: `bg-accent text-accent-foreground hover:bg-accent/90`
- Size variants: `size="lg"` with `px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6`
- Always include `transition-all hover:scale-105` for interactive feel
- Mobile full width: `w-full sm:w-auto` for better mobile UX

#### Image Treatment

- Logos: `grayscale hover:grayscale-0 transition-all duration-300`
- Portraits: `shadow-2xl` with `overflow-hidden rounded-sm`
- Responsive sizing: `h-16 sm:h-20 md:h-24 w-auto object-contain`

#### Card/Content Borders

- Use `border-l-4 border-accent pl-4 sm:pl-5 md:pl-6` for accent borders
- Decorative dividers: `w-full h-px bg-accent/30`

### Gradient Overlay Pattern

For hero/banner sections with background images:

```tsx
// Main gradient - left dark to right transparent
<div className="absolute inset-0" style={{
  background: `linear-gradient(to right,
    rgba(0,0,0,0.8) 0%,
    rgba(0,0,0,0.5) 45%,
    transparent 100%)`
}}></div>

// Mobile bottom gradient for readability
<div className="absolute inset-0 md:hidden" style={{
  background: `linear-gradient(to top,
    rgba(0,0,0,0.8) 0%,
    transparent 60%)`
}}></div>
```

### Responsive Breakpoints

- **xs**: 475px (custom)
- **sm**: 640px (tablet)
- **md**: 768px (small desktop)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1400px (extra large)

Always design mobile-first and scale up progressively.

### Accessibility Requirements

- All interactive elements need `touch-manipulation` (handled in index.css)
- Minimum touch target: 44x44px on mobile
- Text contrast: White text on dark-bg, dark text on light-bg
- Smooth scroll enabled globally: `scroll-behavior: smooth`
- Icon buttons must have descriptive aria-labels

### Icon Usage

- Use Lucide React icons: `import { IconName } from "lucide-react"`
- Icon sizing: `w-4 h-4` (small), `w-5 h-5` (medium), `w-6 h-6` (large)
- Icon colors match text color of parent unless explicitly styled

### Toast/Notification Pattern

Always use the toast hook for user feedback:

```tsx
import { toast } from "@/hooks/use-toast";

toast({
  title: "Action Title",
  description: "Descriptive message",
  variant: "default", // or "destructive"
});
```

### Route Management

- Add routes ABOVE the catch-all `path="*"` route in `App.tsx` (see comment)
- 404 handling via `NotFound.tsx` component

## Security Requirements

### Before User Input

1. Validate using `isValidEmail()`, `isValidPhone()`, or `isValidURL()` from `security.ts`
2. Sanitize with `sanitizeHTML()` before rendering
3. Apply rate limiting via `useRateLimiter` hook

### Before External Actions

- Check `checkLimit()` returns true before mailto, window.open, or API calls
- Show toast notification on rate limit hit (built into hook)

### CSRF Protection

Generate token: `const token = generateFormToken()`
Validate later: `validateFormToken(token, maxAgeMs)`

## Build Configuration

### Vite Security Headers

Dev server injects: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`

### Production Build

- Console logs stripped via terser in production mode
- Source maps only in dev builds
- Security meta tags injected by SecurityProvider

## Common Pitfalls

1. **Don't modify `src/components/ui/*` directly** - regenerate with shadcn CLI
2. **Rate limiter requires unique storageKey** - prevents collisions in localStorage
3. **Import paths use `@/` alias** - configured in vite.config.ts and tsconfig.json
4. **Dev server port is 8080, not 5173** - check vite.config.ts
5. **SecurityProvider must wrap QueryClientProvider** - order matters for error boundaries
6. **Never hardcode colors** - use CSS variables or Tailwind semantic classes only
7. **Section backgrounds must alternate** - dark-bg → light-bg → dark-bg pattern
8. **Always include responsive breakpoints** - mobile-first from `sm:` to `2xl:`

## Consistency Checklist for New Features

Before committing any new component or update:

### Visual Consistency

- [ ] Uses color variables from `src/index.css` (no hardcoded hex/rgb)
- [ ] Follows section padding pattern: `py-12 sm:py-16 md:py-20 lg:py-24`
- [ ] Has proper responsive typography (3+ breakpoint scales)
- [ ] Wrapped in `container mx-auto px-4 sm:px-6 lg:px-8`
- [ ] Includes entrance animation (`animate-fade-up` or similar)
- [ ] Follows dark/light background alternation

### Code Consistency

- [ ] Uses `@/` import paths (not relative `../`)
- [ ] Implements rate limiting if user action involved
- [ ] Sanitizes any user input with `sanitizeHTML()`
- [ ] Uses `cn()` utility for className merging
- [ ] TypeScript types defined (no `any`)

### Component Consistency

- [ ] Section ID added for smooth scroll navigation (`id="section-name"`)
- [ ] Button uses `bg-accent` with `hover:scale-105` transition
- [ ] Images have proper alt text and responsive sizing
- [ ] Cards/containers have consistent shadow treatments
- [ ] Icons imported from `lucide-react` with proper sizing

### Accessibility Consistency

- [ ] Interactive elements have minimum 44x44px touch target
- [ ] Text contrast meets WCAG standards (white on dark, dark on light)
- [ ] Keyboard navigation works (focus states visible)
- [ ] Screen reader text for icon-only buttons

### Security Consistency

- [ ] Rate limiting applied to user actions (forms, clicks, API calls)
- [ ] External links/actions validated before execution
- [ ] Form tokens generated/validated if form submission exists
- [ ] Input validation before sanitization

## Testing Approach

No test framework configured. CI only runs lint + build validation (`.github/workflows/ci.yml`).

## Key Files Reference

- Security core: `src/utils/security.ts`, `src/utils/securityConfig.tsx`
- Rate limiting: `src/utils/rateLimiter.ts`, `src/hooks/useRateLimiter.tsx`
- Main entry: `src/main.tsx` → `src/App.tsx` → `src/pages/Index.tsx`
- Styling config: `tailwind.config.ts`, `src/index.css`
- Build config: `vite.config.ts`
