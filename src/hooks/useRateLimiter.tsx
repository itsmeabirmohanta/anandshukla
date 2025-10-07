import { useState, useCallback } from "react";
import { rateLimiter } from "@/utils/rateLimiter";
import { toast } from "@/hooks/use-toast";

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  storageKey: string;
}

/**
 * Hook to implement rate limiting for actions
 */
export const useRateLimiter = (config: RateLimitConfig) => {
  const [isLimited, setIsLimited] = useState(false);

  const checkLimit = useCallback((): boolean => {
    const allowed = rateLimiter.checkLimit(config);
    
    if (!allowed) {
      setIsLimited(true);
      const remaining = rateLimiter.getRemainingRequests(config);
      const windowSeconds = Math.ceil(config.windowMs / 1000);
      
      toast({
        title: "Rate Limit Exceeded",
        description: `Too many requests. Please wait ${windowSeconds} seconds before trying again.`,
        variant: "destructive",
      });

      // Reset limited state after window expires
      setTimeout(() => {
        setIsLimited(false);
      }, config.windowMs);
    }

    return allowed;
  }, [config]);

  const getRemainingRequests = useCallback((): number => {
    return rateLimiter.getRemainingRequests(config);
  }, [config]);

  const clearLimit = useCallback(() => {
    rateLimiter.clearLimit(config.storageKey);
    setIsLimited(false);
  }, [config.storageKey]);

  return {
    checkLimit,
    getRemainingRequests,
    clearLimit,
    isLimited,
  };
};
