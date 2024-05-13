import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      interfaces: '/src/interfaces',
      utils: '/src/utils',
      assets: '/src/assets',
      services: '/src/services',
      styles: '/src/styles',
      store: '/src/store',
    },
  },
})
