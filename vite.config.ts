import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
    // 配置选项
      cache: false // 禁用 eslint 缓存
    // fix: false
    }),
    vueJsx({
      // 配置选项
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src') // 别名
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      // 选项写法
      '/api': {
        target: 'https://localhost:8888/api', // 代理的目标地址
        // changeOrigin: true，代理服务会把 origin 修改为目标地址 http://jsonplaceholder.typicode.com
        changeOrigin: true

        // 路径重写
        // /api/xxx => http://jsonplaceholder.typicode.com/api/xxx
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
