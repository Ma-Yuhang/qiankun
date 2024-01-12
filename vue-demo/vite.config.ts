import { defineConfig } from 'vite'
import path from 'path'
import qiankun from 'vite-plugin-qiankun'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('vue-demo', {
      useDevMode: true
    })
  ],
  base: '/vue-demo',
  server: {
    port: 3002,
    origin: 'http://localhost:3002'
  },
  resolve: {
    // 类型：Record<string, string> | Array<{ find: string | RegExp, replacement: string }> 将会被传递到 @rollup/plugin-alias 作为它的 entries。
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.json', '.vue'], // 类型： string[] 导入时想要省略的扩展名列表。
  },
})