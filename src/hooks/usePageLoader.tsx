import { useState, useEffect } from "react";

interface UsePageLoaderOptions {
  minLoadTime?: number; // Minimum loading time in ms
  components?: string[]; // Names of components to wait for
}

/**
 * Hook to manage page loading state with skeletal loading
 */
export const usePageLoader = (options: UsePageLoaderOptions = {}) => {
  const { minLoadTime = 800, components = [] } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComponents, setLoadedComponents] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const startTime = Date.now();
    const allComponentsLoaded = components.length === 0;

    // Simulate component loading
    const checkLoadingComplete = () => {
      const elapsedTime = Date.now() - startTime;
      const minTimeReached = elapsedTime >= minLoadTime;
      const componentsReady =
        allComponentsLoaded || loadedComponents.size >= components.length;

      if (minTimeReached && componentsReady) {
        setIsLoading(false);
      }
    };

    // Check if loading should complete
    const timer = setTimeout(checkLoadingComplete, minLoadTime);

    // Wait for images and fonts to load
    if (document.readyState === "complete") {
      checkLoadingComplete();
    } else {
      window.addEventListener("load", checkLoadingComplete);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", checkLoadingComplete);
    };
  }, [minLoadTime, components.length, loadedComponents]);

  const markComponentLoaded = (componentName: string) => {
    setLoadedComponents((prev) => new Set(prev).add(componentName));
  };

  return {
    isLoading,
    markComponentLoaded,
    loadedComponents: Array.from(loadedComponents),
  };
};
