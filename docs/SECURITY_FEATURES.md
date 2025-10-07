# Security & Performance Features

This document outlines the security features, rate limiting, and skeletal loading implementations added to the website.

## 🛡️ Security Features

### 1. **Clickjacking Prevention**
- Prevents the website from being embedded in iframes
- Protects against clickjacking attacks
- Location: `src/utils/security.ts` - `preventClickjacking()`

### 2. **Input Validation & Sanitization**
- SQL injection prevention
- XSS (Cross-Site Scripting) protection
- HTML sanitization
- Location: `src/utils/security.ts`
  - `sanitizeHTML()` - Removes dangerous HTML
  - `validateInput()` - Checks for attack patterns
  - `isValidEmail()`, `isValidPhone()`, `isValidURL()` - Input validators

### 3. **Bot Detection**
- Detects automated bots and crawlers
- Checks user agent patterns
- Validates browser features
- Location: `src/utils/security.ts` - `detectBotBehavior()`

### 4. **Secure Storage**
- Encrypted localStorage wrapper
- Base64 encoding for sensitive data
- Location: `src/utils/security.ts` - `secureStorage` object

### 5. **Content Security Policy (CSP)**
- Reference headers for server-side implementation
- Restricts resource loading
- Location: `src/utils/security.ts` - `CSP_HEADERS`

### 6. **Security Provider**
- Global security monitoring
- Activity tracking
- Meta tag injection for additional protection
- Location: `src/utils/securityConfig.tsx`

### 7. **Performance Monitoring**
- Detects slow resources
- Helps identify potential DDoS attacks
- Location: `src/hooks/usePerformanceMonitoring.tsx`

### 8. **Session Timeout**
- 30-minute inactivity timeout
- 5-minute warning before timeout
- Activity monitoring
- Location: `src/hooks/useSessionTimeout.tsx`

## ⏱️ Rate Limiting

### Features
- Client-side rate limiting using localStorage and memory
- Prevents abuse and spam
- Configurable time windows and request limits

### Presets
Located in `src/utils/rateLimiter.ts`:

1. **FORM_SUBMISSION**
   - 5 requests per minute
   - Applied to contact/invite forms

2. **API_CALL**
   - 30 requests per minute
   - For API endpoints

3. **VIDEO_LOAD**
   - 10 requests per minute
   - Prevents video spam loading

4. **NAVIGATION**
   - 50 requests per 10 seconds
   - Prevents rapid page navigation abuse

### Usage
```typescript
import { useRateLimiter } from "@/hooks/useRateLimiter";
import { RateLimitPresets } from "@/utils/rateLimiter";

const { checkLimit } = useRateLimiter(RateLimitPresets.FORM_SUBMISSION);

const handleSubmit = () => {
  if (!checkLimit()) {
    return; // Rate limit exceeded
  }
  // Process submission
};
```

## 💀 Skeletal Loading

### Features
- Smooth loading experience
- Prevents layout shift (CLS)
- Configurable minimum load time
- Component-based loading tracking

### Components
Located in `src/components/ui/skeleton-loader.tsx`:

1. **HeroSkeleton** - Hero section placeholder
2. **HeaderSkeleton** - Header placeholder
3. **AboutSkeleton** - About section placeholder
4. **VideosSkeleton** - Videos section placeholder
5. **MessageSkeleton** - Message section placeholder
6. **PageSkeleton** - Full page skeleton (combines all)

### Usage
```typescript
import { usePageLoader } from "@/hooks/usePageLoader";
import { PageSkeleton } from "@/components/ui/skeleton-loader";

const { isLoading } = usePageLoader({ 
  minLoadTime: 1000,
});

if (isLoading) {
  return <PageSkeleton />;
}
```

## 🔧 Utility Functions

### Debounce & Throttle
Located in `src/utils/security.ts`:

```typescript
import { debounce, throttle } from "@/utils/security";

// Debounce - waits until user stops typing
const debouncedSearch = debounce(searchFunction, 300);

// Throttle - limits to once per interval
const throttledScroll = throttle(scrollHandler, 100);
```

### Form Token Generation
Prevents CSRF-like attacks with time-based tokens:

```typescript
import { generateFormToken, validateFormToken } from "@/utils/security";

const token = generateFormToken();
const isValid = validateFormToken(token); // Must be < 1 hour old
```

## 📁 File Structure

```
src/
├── components/
│   └── ui/
│       └── skeleton-loader.tsx       # Skeletal loading components
├── hooks/
│   ├── usePageLoader.tsx             # Page loading state management
│   ├── useRateLimiter.tsx            # Rate limiting hook
│   ├── usePerformanceMonitoring.tsx  # Performance tracking
│   └── useSessionTimeout.tsx         # Session timeout management
├── utils/
│   ├── rateLimiter.ts                # Rate limiting logic
│   ├── security.ts                   # Security utilities
│   └── securityConfig.tsx            # Security provider component
└── pages/
    └── Index.tsx                     # Main page (implements features)
```

## 🚀 Implementation Status

### ✅ Implemented
- [x] Skeletal loading for all pages
- [x] Rate limiting for form submissions
- [x] Input validation and sanitization
- [x] Bot detection
- [x] Clickjacking prevention
- [x] Performance monitoring
- [x] Session timeout management
- [x] Secure storage wrapper
- [x] Security provider component

### 🔄 Recommended Server-Side Additions
- [ ] Implement CSP headers on server
- [ ] Add HTTPS enforcement
- [ ] Server-side rate limiting (e.g., express-rate-limit)
- [ ] Database query parameterization
- [ ] API authentication (JWT, OAuth)
- [ ] CORS configuration
- [ ] Helmet.js for additional headers

## 🛠️ Configuration

### Adjust Rate Limits
Edit `src/utils/rateLimiter.ts`:

```typescript
export const RateLimitPresets = {
  FORM_SUBMISSION: {
    maxRequests: 5,        // Change this
    windowMs: 60000,       // Change this (in milliseconds)
    storageKey: "ratelimit_form_submission",
  },
};
```

### Adjust Loading Time
Edit in your component:

```typescript
const { isLoading } = usePageLoader({ 
  minLoadTime: 1000, // Change this (in milliseconds)
});
```

### Adjust Session Timeout
Edit `src/hooks/useSessionTimeout.tsx`:

```typescript
export const SESSION_TIMEOUT = 30 * 60 * 1000; // Change this
export const WARNING_TIMEOUT = 5 * 60 * 1000;  // Change this
```

## 📊 Testing

### Test Rate Limiting
1. Try clicking the "Invite Anand" button multiple times rapidly
2. After 5 clicks in 1 minute, you should see a rate limit error

### Test Skeletal Loading
1. Clear cache and reload the page
2. You should see skeleton placeholders before content loads
3. Minimum load time ensures smooth transition

### Test Security Features
1. Check browser console for security warnings
2. Try opening the site in an iframe (should be blocked)
3. Test input validation with special characters

## 🔐 Best Practices

1. **Never trust client-side validation alone** - Always validate on the server
2. **Use HTTPS in production** - Ensures encrypted communication
3. **Keep dependencies updated** - Regular security patches
4. **Implement server-side rate limiting** - More robust than client-side
5. **Use environment variables** - Keep sensitive data secure
6. **Regular security audits** - Check for vulnerabilities
7. **Content Security Policy** - Implement strict CSP headers

## 📝 Notes

- Rate limiting uses localStorage, which can be cleared by users
- Bot detection is basic and can be bypassed by sophisticated bots
- For production, implement additional server-side security measures
- Skeletal loading improves perceived performance and user experience
- Session timeout helps prevent unauthorized access to idle sessions

## 🤝 Contributing

When adding new features:
1. Follow existing security patterns
2. Add rate limiting to forms and API calls
3. Implement skeletal loading for new pages
4. Document security considerations
5. Test for common vulnerabilities

## 📚 References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Rate Limiting Strategies](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/)
- [Web Security Best Practices](https://developer.mozilla.org/en-US/docs/Web/Security)
