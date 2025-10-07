import { useEffect, useState } from "react";

const STORAGE_KEY = "hasVisitedBefore";

/**
 * Custom hook to detect if this is the user's first visit to the site
 * Uses localStorage to persist the visit state
 *
 * @returns boolean | null - true if first visit, false if returning visitor, null while checking
 */
export const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem(STORAGE_KEY);

    if (!hasVisited) {
      setIsFirstVisit(true);
      // Mark as visited
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      setIsFirstVisit(false);
    }
  }, []);

  return isFirstVisit;
};
