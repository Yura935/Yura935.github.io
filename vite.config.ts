import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build into /docs so GitHub Pages can publish the production bundle
// (branch → /docs). User site is still served from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
