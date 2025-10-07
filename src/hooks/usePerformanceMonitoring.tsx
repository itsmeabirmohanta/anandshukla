import { useEffect } from "react";

/**
 * Performance monitoring to detect potential DDoS or slow resources
 */
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        // Log slow resources (potential for optimization)
        if (entry.duration > 3000) {
          console.warn(`Slow resource detected: ${entry.name}`);
        }
      });
    });

    observer.observe({ entryTypes: ["resource", "navigation"] });

    return () => observer.disconnect();
  }, []);
};
