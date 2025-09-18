import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import tailwindcss from "@tailwindcss/vite";
// Import from the new package

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), tailwindcss()],
});
