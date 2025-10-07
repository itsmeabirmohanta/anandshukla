/**
 * Security utilities for the website
 */

/**
 * Sanitize HTML to prevent XSS attacks
 * Removes potentially dangerous tags and attributes
 */
export const sanitizeHTML = (html: string): string => {
  const temp = document.createElement("div");
  temp.textContent = html;
  return temp.innerHTML;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic validation)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate URL format
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Content Security Policy Headers (for reference)
 * These should be implemented on the server side
 */
export const CSP_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "media-src 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; "),
};

/**
 * Detect potential bot behavior
 * Returns true if suspicious activity is detected
 */
export const detectBotBehavior = (): boolean => {
  // Check for common bot user agents
  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /headless/i,
  ];

  const userAgent = navigator.userAgent;
  if (botPatterns.some((pattern) => pattern.test(userAgent))) {
    return true;
  }

  // Check for missing features that real browsers have
  if (!navigator.languages || navigator.languages.length === 0) {
    return true;
  }

  // Check for webdriver (automated testing tools)
  if (navigator.webdriver) {
    return true;
  }

  return false;
};

/**
 * Generate a simple CSRF-like token for form submissions
 * This is a client-side token for basic protection
 */
export const generateFormToken = (): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2);
  return `${timestamp}-${random}`;
};

/**
 * Validate form token (basic time-based validation)
 * Token should be less than 1 hour old
 */
export const validateFormToken = (token: string): boolean => {
  try {
    const [timestampStr] = token.split("-");
    const timestamp = parseInt(timestampStr, 10);
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    return now - timestamp < oneHour;
  } catch {
    return false;
  }
};

/**
 * Prevent clickjacking by checking if site is in iframe
 */
export const preventClickjacking = (): void => {
  if (window.self !== window.top) {
    // Site is in an iframe
    console.warn("Clickjacking attempt detected");
    // Optionally break out of iframe or show warning
    try {
      window.top!.location.href = window.self.location.href;
    } catch {
      // If can't break out, hide content
      document.body.style.display = "none";
    }
  }
};

/**
 * Secure local storage wrapper with encryption
 * Note: This is basic obfuscation, not true encryption
 */
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      const encoded = btoa(encodeURIComponent(value));
      localStorage.setItem(key, encoded);
    } catch (e) {
      console.error("Failed to store item securely:", e);
    }
  },

  getItem: (key: string): string | null => {
    try {
      const encoded = localStorage.getItem(key);
      if (!encoded) return null;
      return decodeURIComponent(atob(encoded));
    } catch (e) {
      console.error("Failed to retrieve item securely:", e);
      return null;
    }
  },

  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },
};

/**
 * Input validation for common attack patterns
 */
export const validateInput = (
  input: string,
  maxLength: number = 1000
): { valid: boolean; error?: string } => {
  // Check length
  if (input.length > maxLength) {
    return { valid: false, error: `Input too long (max ${maxLength} characters)` };
  }

  // Check for SQL injection patterns
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
    /(--|;|\/\*|\*\/)/g,
  ];

  for (const pattern of sqlPatterns) {
    if (pattern.test(input)) {
      return { valid: false, error: "Invalid characters detected" };
    }
  }

  // Check for script tags
  if (/<script|javascript:/gi.test(input)) {
    return { valid: false, error: "Invalid content detected" };
  }

  return { valid: true };
};

/**
 * Debounce function to prevent rapid repeated calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function to limit call frequency
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
