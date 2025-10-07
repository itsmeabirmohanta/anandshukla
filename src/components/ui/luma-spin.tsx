import React from "react";
import { cn } from "@/lib/utils";

interface LumaSpinProps {
  className?: string;
  size?: number;
}

/**
 * LumaSpin - An animated loading spinner component
 *
 * Features two rotating spans that create a smooth loading animation.
 * Supports dark mode with automatic color switching.
 *
 * @param className - Optional additional CSS classes
 * @param size - Optional size in pixels (default: 65px)
 */
export const LumaSpin = ({ className, size = 65 }: LumaSpinProps) => {
  return (
    <div
      className={cn("relative aspect-square", className)}
      style={{ width: `${size}px` }}
    >
      <span className="absolute rounded-[50px] animate-luma-spin shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100" />
      <span
        className="absolute rounded-[50px] animate-luma-spin shadow-[inset_0_0_0_3px] shadow-gray-800 dark:shadow-gray-100"
        style={{ animationDelay: "-1.25s" }}
      />
    </div>
  );
};

// Export as default for convenience
export default LumaSpin;

// Legacy export name for compatibility with the original component
export const Component = LumaSpin;
