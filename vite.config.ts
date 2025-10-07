import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Security headers for development server
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Security: Generate source maps for debugging but separate from main bundle
    sourcemap: mode === "development",
    // Enable minification for production
    minify: mode === "production" ? "terser" : false,
    // Terser options for better security
    terserOptions:
      mode === "production"
        ? {
            compress: {
              drop_console: true, // Remove console.log in production
              drop_debugger: true, // Remove debugger statements
            },
          }
        : undefined,
    // Rollup options for better chunking and security
    rollupOptions: {
      output: {
        // Manual chunks for better caching and security
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-slot",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
          ],
        },
      },
    },
  },
}));
