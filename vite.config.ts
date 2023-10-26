import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
// 如果类型报错，需要安装 @types/node: pnpm i @types/node -D
import path from 'path';
import autoprefixer from 'autoprefixer';
import viteStylelint from 'vite-plugin-stylelint';

// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  // css 相关的配置
  css: {
    // 1. 预处理器
    preprocessorOptions: {
      // 这里是scss的配置，vite只是封装了一下，更多详细得去看scss文档
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    // 2. CSS Modules
    modules: {
      // 通过 generateScopedName 控制生成的类名
      // name表示当前文件名，local表示类名
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    // 3. PostCSS
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  plugins: [
    react({
      babel: {
        // 加入babel 插件
        // 一下插件包都需要提前安装
        // 通过这个配置也可以添加其他 babel 插件
        plugins: [
          // 适配 styled-component
          'babel-plugin-styled-components',
          // 适配 emotion
          '@emotion/babel-plugin'
        ]
      },
      // 对于 emotion，需要单独加上这个配置
      // 通过这个包来编译 emotion 中的特殊 jsx 语法
      jsxImportSource: '@emotion/react'
    }),
    viteStylelint({
      exclude: 'node_modules/'
    })
  ]
});
