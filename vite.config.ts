import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel отдаёт сайт с корня; GitHub Pages — из /hr-landing/
const base = process.env.VERCEL ? '/' : '/hr-landing/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
