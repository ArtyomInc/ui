import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'raw-loader',
          transform(code, id) {
            if (id.endsWith('.vue')) {
              return {
                code: `export default ${JSON.stringify(code)}`,
                map: null
              }
            }
          }
        }
      ]
    }
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
