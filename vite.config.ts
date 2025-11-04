// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import svgr from "vite-plugin-svgr";

// export default defineConfig({
//   plugins: [tailwindcss()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), // Make sure React plugin is included
    tailwindcss(), // Tailwind plugin
    svgr(), // SVG as React component plugin
  ],
});
