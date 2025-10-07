/**
 * LumaSpin Integration Examples
 *
 * This file demonstrates practical integration patterns for the LumaSpin component
 * in various parts of your application.
 */

import { LumaSpin } from "@/components/ui/luma-spin";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// ============================================================================
// Example 1: Page-Level Loading State
// ============================================================================

export function PageWithLoading() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  setTimeout(() => setIsLoading(false), 2000);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-light-bg via-white to-light-bg">
        <div className="flex flex-col items-center gap-4 animate-fade-up">
          <LumaSpin size={80} />
          <p className="text-sm text-muted-foreground">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold">Your Content Here</h1>
    </div>
  );
}

// ============================================================================
// Example 2: Button with Loading State
// ============================================================================

export function SubmitButtonExample() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <Button
      onClick={handleSubmit}
      disabled={isSubmitting}
      className="bg-accent text-accent-foreground hover:bg-accent/90"
      size="lg"
    >
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <LumaSpin size={20} />
          Submitting...
        </span>
      ) : (
        "Submit Form"
      )}
    </Button>
  );
}

// ============================================================================
// Example 3: Inline Content Loading
// ============================================================================

export function InlineLoadingExample() {
  const [isLoadingData, setIsLoadingData] = useState(true);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>

      {isLoadingData ? (
        <div className="flex justify-center py-8">
          <LumaSpin />
        </div>
      ) : (
        <div className="space-y-4">
          {/* Your data content */}
          <p>Content loaded successfully!</p>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Example 4: Card Loading State
// ============================================================================

export function CardLoadingExample() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <LumaSpin size={60} />
          <p className="text-sm text-muted-foreground">Loading data...</p>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4">Card Content</h3>
          <p className="text-muted-foreground">Your content here</p>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Example 5: Video Loading State (for Videos.tsx)
// ============================================================================

export function VideoLoadingExample() {
  const [videosLoading, setVideosLoading] = useState(true);
  const videos = ["video1", "video2", "video3"];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured Videos
          </h2>
        </div>

        {videosLoading ? (
          <div className="flex justify-center py-12">
            <div className="flex flex-col items-center gap-4">
              <LumaSpin size={70} />
              <p className="text-sm text-white/70">Loading videos...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video} className="bg-white rounded-lg p-4">
                {video}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================================================
// Example 6: Skeleton Screen with LumaSpin (Enhanced PageSkeleton)
// ============================================================================

export function EnhancedPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-bg via-white to-light-bg">
      {/* Header skeleton */}
      <div className="h-16 bg-white/50 border-b animate-pulse" />

      {/* Main content with centered loader */}
      <div
        className="flex items-center justify-center"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="flex flex-col items-center gap-6 animate-fade-up">
          <LumaSpin size={80} />
          <div className="text-center space-y-2">
            <p className="text-lg font-medium text-foreground">
              Loading Experience
            </p>
            <p className="text-sm text-muted-foreground">
              Please wait a moment...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Example 7: Multiple States (Empty, Loading, Error, Success)
// ============================================================================

type DataState = "loading" | "empty" | "error" | "success";

export function MultiStateExample() {
  const [state, setState] = useState<DataState>("loading");
  const data = state === "success" ? ["Item 1", "Item 2", "Item 3"] : [];

  const renderContent = () => {
    switch (state) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <LumaSpin size={65} />
            <p className="text-sm text-muted-foreground">Fetching data...</p>
          </div>
        );

      case "empty":
        return (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No data available</p>
          </div>
        );

      case "error":
        return (
          <div className="text-center py-20">
            <p className="text-destructive">Failed to load data</p>
            <Button onClick={() => setState("loading")} className="mt-4">
              Try Again
            </Button>
          </div>
        );

      case "success":
        return (
          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {item}
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex gap-4 mb-8">
        <Button size="sm" onClick={() => setState("loading")}>
          Loading
        </Button>
        <Button size="sm" onClick={() => setState("empty")}>
          Empty
        </Button>
        <Button size="sm" onClick={() => setState("error")}>
          Error
        </Button>
        <Button size="sm" onClick={() => setState("success")}>
          Success
        </Button>
      </div>

      {renderContent()}
    </div>
  );
}

// ============================================================================
// Example 8: Small Inline Loader (for text or small spaces)
// ============================================================================

export function InlineSmallLoaderExample() {
  return (
    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
      <LumaSpin size={24} />
      <span className="text-sm text-muted-foreground">
        Processing your request...
      </span>
    </div>
  );
}
