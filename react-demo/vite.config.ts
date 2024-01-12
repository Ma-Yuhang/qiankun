import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qiankun('react-demo', {
      useDevMode: true
    })
  ],
  base: '/react-demo',
  server: {
    port: 3001,
    origin: 'http://127.0.0.1:3001'
  }
})
