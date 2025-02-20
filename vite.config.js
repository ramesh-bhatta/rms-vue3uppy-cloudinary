import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: "src/index.js",
      name: "Vue3UppyCloudinary",
      fileName: (format) => `rms-vue3uppy-cloudinary.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue', '@uppy/core', '@uppy/dashboard', '@uppy/xhr-upload'
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@uppy/core': 'Uppy',
          '@uppy/dashboard': 'Dashboard',
          '@uppy/xhr-upload': 'XHRUpload',
        },
        exports: 'named',
      },
    },
  }
})
