import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@vercel/speed-insights/react', '@vercel/analytics/react'],
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
      treeshake: true, // Habilita el tree-shaking
    },
    minify: 'esbuild', // Usa esbuild para minificar
  },
})