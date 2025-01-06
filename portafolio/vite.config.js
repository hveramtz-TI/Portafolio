import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress' }) // Habilita la compresión Brotli
  ],
  build: {
    rollupOptions: {
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