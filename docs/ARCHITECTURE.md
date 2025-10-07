# Security Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                                 │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    index.html                                │   │
│  │  - Security Meta Tags (X-Frame-Options, etc.)               │   │
│  └────────────────────┬────────────────────────────────────────┘   │
│                       │                                              │
│  ┌────────────────────▼────────────────────────────────────────┐   │
│  │                   App.tsx                                    │   │
│  │  ┌──────────────────────────────────────────────────────┐  │   │
│  │  │         SecurityProvider (Global)                     │  │   │
│  │  │  - Bot Detection                                      │  │   │
│  │  │  - Clickjacking Prevention                            │  │   │
│  │  │  - Activity Monitoring                                │  │   │
│  │  │  - Meta Tag Injection                                 │  │   │
│  │  └──────────────────────────────────────────────────────┘  │   │
│  │  ┌──────────────────────────────────────────────────────┐  │   │
│  │  │      usePerformanceMonitoring                         │  │   │
│  │  │  - Slow Resource Detection                            │  │   │
│  │  │  - Performance Logging                                │  │   │
│  │  └──────────────────────────────────────────────────────┘  │   │
│  └────────────────────┬────────────────────────────────────────┘   │
│                       │                                              │
│  ┌────────────────────▼────────────────────────────────────────┐   │
│  │                 Index.tsx (Main Page)                       │   │
│  │  ┌──────────────────────────────────────────────────────┐  │   │
│  │  │           usePageLoader                               │  │   │
│  │  │  - Skeletal Loading State                             │  │   │
│  │  │  - Minimum Load Time                                  │  │   │
│  │  └──────────────────────────────────────────────────────┘  │   │
│  │                                                              │   │
│  │  [if isLoading]                                              │   │
│  │  ┌──────────────────────────────────────────────────────┐  │   │
│  │  │         PageSkeleton                                  │  │   │
│  │  │  - HeroSkeleton                                       │  │   │
│  │  │  - HeaderSkeleton                                     │  │   │
│  │  │  - AboutSkeleton                                      │  │   │
│  │  │  - VideosSkeleton                                     │  │   │
│  │  │  - MessageSkeleton                                    │  │   │
│  │  └──────────────────────────────────────────────────────┘  │   │
│  │                                                              │   │
│  │  [else]                                                      │   │
│  │  ┌──────────────────────────────────────────────────────┐  │   │
│  │  │          Actual Components                            │  │   │
│  │  │  - Header                                             │  │   │
│  │  │  - Hero                                               │  │   │
│  │  │  - FeaturedOn                                         │  │   │
│  │  │  - About                                              │  │   │
│  │  │  - Videos                                             │  │   │
│  │  │  - Message                                            │  │   │
│  │  │  ┌────────────────────────────────────────────────┐  │  │   │
│  │  │  │  Invite.tsx                                     │  │  │   │
│  │  │  │  ┌──────────────────────────────────────────┐  │  │  │   │
│  │  │  │  │   useRateLimiter                          │  │  │  │   │
│  │  │  │  │   - Checks localStorage                   │  │  │  │   │
│  │  │  │  │   - Limits: 5 req/min                     │  │  │  │   │
│  │  │  │  │   - Shows Toast on limit                  │  │  │  │   │
│  │  │  │  └──────────────────────────────────────────┘  │  │  │   │
│  │  │  └────────────────────────────────────────────────┘  │  │   │
│  │  │  - Footer                                             │  │   │
│  │  └──────────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    UTILITY LAYERS                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │               rateLimiter.ts                                  │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Class: RateLimiter                                     │  │  │
│  │  │  - checkLimit()                                         │  │  │
│  │  │  - getRemainingRequests()                               │  │  │
│  │  │  - clearLimit()                                         │  │  │
│  │  │                                                          │  │  │
│  │  │  Storage: localStorage + Memory Map                     │  │  │
│  │  │  Data: { timestamp, count }                             │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Presets:                                               │  │  │
│  │  │  - FORM_SUBMISSION: 5/min                               │  │  │
│  │  │  - API_CALL: 30/min                                     │  │  │
│  │  │  - VIDEO_LOAD: 10/min                                   │  │  │
│  │  │  - NAVIGATION: 50/10sec                                 │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │               security.ts                                     │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Input Validation                                       │  │  │
│  │  │  - sanitizeHTML()                                       │  │  │
│  │  │  - validateInput()                                      │  │  │
│  │  │  - isValidEmail()                                       │  │  │
│  │  │  - isValidPhone()                                       │  │  │
│  │  │  - isValidURL()                                         │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Security Checks                                        │  │  │
│  │  │  - detectBotBehavior()                                  │  │  │
│  │  │  - preventClickjacking()                                │  │  │
│  │  │  - generateFormToken()                                  │  │  │
│  │  │  - validateFormToken()                                  │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Storage                                                │  │  │
│  │  │  - secureStorage.setItem() (Base64 encoded)            │  │  │
│  │  │  - secureStorage.getItem()                              │  │  │
│  │  │  - secureStorage.removeItem()                           │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  │  ┌────────────────────────────────────────────────────────┐  │  │
│  │  │  Utilities                                              │  │  │
│  │  │  - debounce() - Delays execution                        │  │  │
│  │  │  - throttle() - Limits frequency                        │  │  │
│  │  └────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                     DATA FLOW                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  User Action (e.g., Button Click)                                   │
│           │                                                           │
│           ▼                                                           │
│  ┌──────────────────────┐                                           │
│  │  useRateLimiter Hook  │                                           │
│  └──────────┬────────────┘                                           │
│             │                                                         │
│             ▼                                                         │
│  ┌──────────────────────┐                                           │
│  │  checkLimit()         │                                           │
│  └──────────┬────────────┘                                           │
│             │                                                         │
│             ▼                                                         │
│  ┌──────────────────────┐                                           │
│  │  RateLimiter.check   │                                           │
│  │  1. Get from memory   │                                           │
│  │  2. Fallback to LS    │                                           │
│  │  3. Check count       │                                           │
│  │  4. Update record     │                                           │
│  └──────────┬────────────┘                                           │
│             │                                                         │
│        ┌────┴────┐                                                   │
│        │         │                                                   │
│    Allowed   Blocked                                                 │
│        │         │                                                   │
│        ▼         ▼                                                   │
│   Execute    Show Toast                                              │
│   Action     "Rate Limited"                                          │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                LOADING SEQUENCE                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Page Load Start                                                     │
│       │                                                               │
│       ▼                                                               │
│  SecurityProvider Init                                               │
│  - Bot Detection                                                     │
│  - Clickjacking Check                                                │
│  - Meta Tags Injection                                               │
│       │                                                               │
│       ▼                                                               │
│  usePageLoader Start                                                 │
│  - isLoading = true                                                  │
│  - Start Timer                                                       │
│       │                                                               │
│       ▼                                                               │
│  Show PageSkeleton                                                   │
│  - Animated placeholders                                             │
│  - Maintain layout                                                   │
│       │                                                               │
│       ▼                                                               │
│  Components Load                                                     │
│  - Images load                                                       │
│  - Fonts load                                                        │
│  - Scripts execute                                                   │
│       │                                                               │
│       ▼                                                               │
│  Check Conditions:                                                   │
│  - Min time reached? (1000ms)                                        │
│  - Resources loaded?                                                 │
│       │                                                               │
│       ▼                                                               │
│  isLoading = false                                                   │
│       │                                                               │
│       ▼                                                               │
│  Show Actual Content                                                 │
│  - Smooth fade-in                                                    │
│  - Full interactivity                                                │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                SECURITY LAYERS                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  Layer 1: HTML Headers                                               │
│  ├── X-Frame-Options: DENY                                          │
│  ├── X-Content-Type-Options: nosniff                                │
│  ├── X-XSS-Protection: 1; mode=block                                │
│  └── Referrer-Policy: strict-origin-when-cross-origin               │
│                                                                       │
│  Layer 2: Application Security (SecurityProvider)                   │
│  ├── Bot Detection (user agent, features)                           │
│  ├── Clickjacking Prevention (iframe check)                         │
│  ├── Activity Monitoring (navigation patterns)                      │
│  └── Performance Monitoring (slow resources)                        │
│                                                                       │
│  Layer 3: Input Validation (security.ts)                            │
│  ├── HTML Sanitization (XSS prevention)                             │
│  ├── SQL Injection Detection                                        │
│  ├── Format Validation (email, phone, URL)                          │
│  └── Length Enforcement                                             │
│                                                                       │
│  Layer 4: Rate Limiting (rateLimiter.ts)                            │
│  ├── Form Submissions (5/min)                                       │
│  ├── API Calls (30/min)                                             │
│  ├── Video Loads (10/min)                                           │
│  └── Navigation (50/10sec)                                          │
│                                                                       │
│  Layer 5: Session Management (useSessionTimeout)                    │
│  ├── 30-minute inactivity timeout                                   │
│  ├── 5-minute warning                                               │
│  └── Activity-based reset                                           │
│                                                                       │
│  Layer 6: Build Security (vite.config.ts)                           │
│  ├── Console removal in production                                  │
│  ├── Debugger removal                                               │
│  ├── Code minification                                              │
│  └── Source map separation                                          │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Key Security Principles Applied

1. **Defense in Depth**: Multiple layers of security
2. **Least Privilege**: Minimal permissions and access
3. **Fail Securely**: Errors don't expose vulnerabilities
4. **Input Validation**: Never trust user input
5. **Output Encoding**: Sanitize before display
6. **Rate Limiting**: Prevent abuse and spam
7. **Monitoring**: Track suspicious activity
8. **Secure Defaults**: Safe configurations out of the box

## Component Interaction Flow

```
User → Component → Hook → Utility → Storage/API
                          ↓
                    Validation
                          ↓
                    Rate Limit Check
                          ↓
                    Security Check
                          ↓
                    Execute Action
```

## File Dependencies

```
App.tsx
├── SecurityProvider (securityConfig.tsx)
│   └── security.ts (utilities)
├── usePerformanceMonitoring.tsx
└── Index.tsx
    ├── usePageLoader.tsx
    ├── PageSkeleton (skeleton-loader.tsx)
    └── Invite.tsx
        └── useRateLimiter.tsx
            └── rateLimiter.ts
```
