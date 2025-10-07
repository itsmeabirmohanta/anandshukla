import { useEffect } from "react";

/**
 * Session timeout configuration
 */
export const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
export const WARNING_TIMEOUT = 5 * 60 * 1000; // 5 minutes before timeout

/**
 * Hook for session timeout management
 * Monitors user activity and triggers callbacks on timeout
 */
export const useSessionTimeout = (
  onTimeout?: () => void,
  onWarning?: () => void
) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let warningId: NodeJS.Timeout;
    let lastActivity = Date.now();

    const resetTimer = () => {
      lastActivity = Date.now();
      clearTimeout(timeoutId);
      clearTimeout(warningId);

      // Set warning timeout
      warningId = setTimeout(() => {
        if (onWarning) onWarning();
      }, SESSION_TIMEOUT - WARNING_TIMEOUT);

      // Set session timeout
      timeoutId = setTimeout(() => {
        if (onTimeout) onTimeout();
      }, SESSION_TIMEOUT);
    };

    // Activity events to monitor
    const events = ["mousedown", "keydown", "scroll", "touchstart", "click"];

    const handleActivity = () => {
      const now = Date.now();
      // Only reset if more than 1 second since last activity (avoid too many resets)
      if (now - lastActivity > 1000) {
        resetTimer();
      }
    };

    events.forEach((event) => {
      document.addEventListener(event, handleActivity);
    });

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(warningId);
      events.forEach((event) => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [onTimeout, onWarning]);
};
