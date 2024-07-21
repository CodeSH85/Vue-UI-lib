import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  // root: './index.html',
  root: __dirname,
  plugins: [
    vue(),
    vueJsx(),
    eslintPlugin(
      {
        cache: false
      }
    )
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped'
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
    ]
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
