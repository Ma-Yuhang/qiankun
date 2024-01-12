import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    origin: 'http://localhost:3000'
  },
  resolve: {
    // 类型：Record<string, string> | Array<{ find: string | RegExp, replacement: string }> 将会被传递到 @rollup/plugin-alias 作为它的 entries。
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.json', '.vue'], // 类型： string[] 导入时想要省略的扩展名列表。
  },
});
