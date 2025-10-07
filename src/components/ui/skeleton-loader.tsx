import { Skeleton } from "./skeleton";

export const HeroSkeleton = () => (
  <div className="relative min-h-screen flex items-end md:items-center">
    <div className="absolute inset-0 bg-muted animate-pulse" />
    <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-0 md:pl-12 lg:pl-24">
      <div className="max-w-2xl space-y-6">
        <Skeleton className="h-16 w-3/4 bg-muted-foreground/20" />
        <Skeleton className="h-8 w-1/2 bg-muted-foreground/20" />
        <Skeleton className="h-12 w-32 bg-muted-foreground/20 rounded-md" />
      </div>
    </div>
  </div>
);

export const HeaderSkeleton = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-32" />
        <div className="flex gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-6 w-20 hidden md:block" />
          ))}
        </div>
      </div>
    </div>
  </header>
);

export const AboutSkeleton = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <Skeleton className="w-full md:w-1/3 h-96 rounded-lg" />
        <div className="w-full md:w-2/3 space-y-4">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  </section>
);

export const VideosSkeleton = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <Skeleton className="h-10 w-64 mx-auto mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="w-full aspect-video rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const MessageSkeleton = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <Skeleton className="w-full md:w-1/2 h-96 rounded-lg" />
      </div>
    </div>
  </section>
);

export const PageSkeleton = () => (
  <div className="min-h-screen">
    <HeaderSkeleton />
    <HeroSkeleton />
    <AboutSkeleton />
    <VideosSkeleton />
    <MessageSkeleton />
  </div>
);
