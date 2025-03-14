/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/payara",
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "src/assets/less/style.less";',
      },
    },
  },
  test: {
    globals: true,    
    setupFiles: 'src/setupTests.js',
    environment: 'happy-dom',
    exclude: [
      'src/stories/*',
      'node_modules'
    ],
  },
})
