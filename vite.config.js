import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// On GitHub Pages the site lives at /<repo-name>/. The deploy workflow passes
// that in as VITE_BASE; locally (npm run dev) it stays "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
