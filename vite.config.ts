import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // root: './index.html',
  root: __dirname,
  plugins: [
    vue(
      {
        reactivityTransform: true
      }
    ),
    eslintPlugin(
      {
        cache: false
      }
    ),
    vueJsx()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/settings/_variables.scss";'
        // additionalData: '@import "@/assets/style.scss";'
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ToyUI',
      fileName: (format) => `toyUI.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
