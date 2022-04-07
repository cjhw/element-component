import { defineConfig } from 'vite'
import * as Path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': Path.join(__dirname, 'src'),
    },
  },
})
