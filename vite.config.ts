import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from "path";

// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));


// https://vitejs.dev/config/
export default defineConfig({
  // css 相关的配置
  css: {
    preprocessorOptions: {
      // 这里是scss的配置，vite只是封装了一下，更多详细得去看scss文档
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  plugins: [react()],
})
