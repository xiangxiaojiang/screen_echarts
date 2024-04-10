import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //  vite 相关配置
  assetsInclude: ['**/*.hdr'], // 将 .hdr 文件包含在静态资源中
   server: {
    port: 80,
    host: true,
    open: true,
    proxy: {
      '/examples/data-gl/asset': {
        target: 'https://echarts.apache.org',
        changeOrigin: true,
        // 关闭安全证书
        secure: false,
        headers: {                  
          Referer: 'https://echarts.apache.org'
        },
        rewrite: (path) => path.replace(/^\/examples\/data-gl\/asset/, '/examples/data-gl/asset')
      }
    }
  },
})
