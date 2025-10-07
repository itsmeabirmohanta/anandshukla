import { LumaSpin } from "@/components/ui/luma-spin";

/**
 * Demo component showcasing the LumaSpin loader
 *
 * This can be used as a reference for implementing the loader
 * in various parts of the application.
 */
export default function LumaSpinDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      {/* Default size */}
      <div className="flex flex-col items-center gap-2">
        <LumaSpin />
        <p className="text-sm text-muted-foreground">Default (65px)</p>
      </div>

      {/* Small size */}
      <div className="flex flex-col items-center gap-2">
        <LumaSpin size={40} />
        <p className="text-sm text-muted-foreground">Small (40px)</p>
      </div>

      {/* Large size */}
      <div className="flex flex-col items-center gap-2">
        <LumaSpin size={100} />
        <p className="text-sm text-muted-foreground">Large (100px)</p>
      </div>

      {/* With custom className */}
      <div className="flex flex-col items-center gap-2">
        <LumaSpin className="opacity-50" />
        <p className="text-sm text-muted-foreground">With opacity</p>
      </div>

      {/* In a loading state context */}
      <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8">
        <LumaSpin />
        <p className="text-sm text-muted-foreground">Loading content...</p>
      </div>
    </div>
  );
}
