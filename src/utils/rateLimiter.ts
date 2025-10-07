/**
 * Simple client-side rate limiter using localStorage and memory
 * Limits requests per time window
 */

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  storageKey: string;
}

interface RequestRecord {
  timestamp: number;
  count: number;
}

class RateLimiter {
  private memoryStore: Map<string, RequestRecord> = new Map();

  /**
   * Check if action is allowed under rate limit
   * @param config - Rate limit configuration
   * @returns true if allowed, false if rate limited
   */
  checkLimit(config: RateLimitConfig): boolean {
    const now = Date.now();
    const key = config.storageKey;

    // Try to get from memory first
    let record = this.memoryStore.get(key);

    // If not in memory, try localStorage
    if (!record) {
      try {
        const stored = localStorage.getItem(key);
        if (stored) {
          record = JSON.parse(stored);
        }
      } catch (e) {
        console.warn("Failed to read rate limit from storage:", e);
      }
    }

    // If no record or window expired, create new record
    if (!record || now - record.timestamp > config.windowMs) {
      record = { timestamp: now, count: 1 };
      this.updateRecord(key, record);
      return true;
    }

    // Check if limit exceeded
    if (record.count >= config.maxRequests) {
      return false;
    }

    // Increment count
    record.count++;
    this.updateRecord(key, record);
    return true;
  }

  /**
   * Update record in both memory and localStorage
   */
  private updateRecord(key: string, record: RequestRecord): void {
    this.memoryStore.set(key, record);
    try {
      localStorage.setItem(key, JSON.stringify(record));
    } catch (e) {
      console.warn("Failed to update rate limit in storage:", e);
    }
  }

  /**
   * Get remaining requests in current window
   */
  getRemainingRequests(config: RateLimitConfig): number {
    const now = Date.now();
    const key = config.storageKey;
    let record = this.memoryStore.get(key);

    if (!record) {
      try {
        const stored = localStorage.getItem(key);
        if (stored) {
          record = JSON.parse(stored);
        }
      } catch (e) {
        // Ignore errors
      }
    }

    if (!record || now - record.timestamp > config.windowMs) {
      return config.maxRequests;
    }

    return Math.max(0, config.maxRequests - record.count);
  }

  /**
   * Clear rate limit for a specific key
   */
  clearLimit(storageKey: string): void {
    this.memoryStore.delete(storageKey);
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {
      // Ignore errors
    }
  }

  /**
   * Clear all rate limits
   */
  clearAll(): void {
    this.memoryStore.clear();
    try {
      // Clear all rate limit keys (they should start with 'ratelimit_')
      const keys = Object.keys(localStorage);
      keys.forEach((key) => {
        if (key.startsWith("ratelimit_")) {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {
      // Ignore errors
    }
  }
}

// Singleton instance
export const rateLimiter = new RateLimiter();

// Preset configurations
export const RateLimitPresets = {
  FORM_SUBMISSION: {
    maxRequests: 5,
    windowMs: 60000, // 1 minute
    storageKey: "ratelimit_form_submission",
  },
  API_CALL: {
    maxRequests: 30,
    windowMs: 60000, // 1 minute
    storageKey: "ratelimit_api_call",
  },
  VIDEO_LOAD: {
    maxRequests: 10,
    windowMs: 60000, // 1 minute
    storageKey: "ratelimit_video_load",
  },
  NAVIGATION: {
    maxRequests: 50,
    windowMs: 10000, // 10 seconds
    storageKey: "ratelimit_navigation",
  },
} as const;
