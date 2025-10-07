/**
 * Security Configuration for the Application
 * Implements various security best practices
 */

import { useEffect } from "react";
import { detectBotBehavior } from "./security";

/**
 * Security Provider Component
 * Wraps the application with security features
 */
export const SecurityProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Detect and log bot behavior
    if (detectBotBehavior()) {
      console.warn("Potential bot detected");
    }

    // Disable right-click context menu (optional - can be removed if not desired)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click in development mode
      if (import.meta.env.DEV) return;
      
      // You can uncomment this to disable right-click in production
      // e.preventDefault();
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (optional - can be removed)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow in development mode
      if (import.meta.env.DEV) return;

      // You can uncomment this to disable dev tools shortcuts in production
      // if (
      //   e.key === "F12" ||
      //   (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
      //   (e.ctrlKey && e.key === "U")
      // ) {
      //   e.preventDefault();
      // }
    };

    // Monitor for suspicious activity
    const monitorActivity = () => {
      // Check for rapid page navigation (potential scraping)
      let navigationCount = 0;
      const resetInterval = 10000; // 10 seconds

      const navigationHandler = () => {
        navigationCount++;
        if (navigationCount > 20) {
          console.warn("Suspicious navigation activity detected");
        }
      };

      window.addEventListener("popstate", navigationHandler);

      const resetTimer = setInterval(() => {
        navigationCount = 0;
      }, resetInterval);

      return () => {
        window.removeEventListener("popstate", navigationHandler);
        clearInterval(resetTimer);
      };
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    const cleanupMonitor = monitorActivity();

    // Add security headers via meta tags (backup for server-side headers)
    const metaTags = [
      { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
      { httpEquiv: "X-Frame-Options", content: "DENY" },
      { httpEquiv: "X-XSS-Protection", content: "1; mode=block" },
      {
        httpEquiv: "Referrer-Policy",
        content: "strict-origin-when-cross-origin",
      },
    ];

    const addedMetas: HTMLMetaElement[] = [];
    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      if (tag.httpEquiv) meta.httpEquiv = tag.httpEquiv;
      meta.content = tag.content;
      document.head.appendChild(meta);
      addedMetas.push(meta);
    });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      cleanupMonitor();
      addedMetas.forEach((meta) => meta.remove());
    };
  }, []);

  return <>{children}</>;
};


