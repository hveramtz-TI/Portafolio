import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Divide las dependencias en diferentes chunks
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
      treeshake: true, // Habilita el tree-shaking
    },
    minify: 'esbuild', // Usa esbuild para minificar
  },
})