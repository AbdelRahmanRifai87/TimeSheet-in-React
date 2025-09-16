import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint' // Import from the new package


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
})
