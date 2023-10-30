import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
// ������ͱ�������Ҫ��װ @types/node: pnpm i @types/node -D
import path from 'path';
import autoprefixer from 'autoprefixer';
import viteStylelint from 'vite-plugin-stylelint';

// �� normalizePath ��� window �µ�·������
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  // css ��ص�����
  css: {
    // 1. Ԥ������
    preprocessorOptions: {
      // ������scss�����ã�viteֻ�Ƿ�װ��һ�£�������ϸ��ȥ��scss�ĵ�
      scss: {
        // additionalData �����ݻ���ÿ�� scss �ļ��Ŀ�ͷ�Զ�ע��
        additionalData: `@import '${variablePath}';`
      }
    },
    // 2. CSS Modules
    modules: {
      // ͨ�� generateScopedName �������ɵ�����
      // name��ʾ��ǰ�ļ�����local��ʾ����
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    },
    // 3. PostCSS
    postcss: {
      plugins: [
        autoprefixer({
          // ָ��Ŀ�������
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  plugins: [
    react({
      babel: {
        // ����babel ���
        // һ�²��������Ҫ��ǰ��װ
        // ͨ���������Ҳ������������ babel ���
        plugins: [
          // ���� styled-component
          'babel-plugin-styled-components',
          // ���� emotion
          '@emotion/babel-plugin'
        ]
      },
      // ���� emotion����Ҫ���������������
      // ͨ������������� emotion �е����� jsx �﷨
      jsxImportSource: '@emotion/react'
    }),
    viteStylelint({
      exclude: 'node_modules/'
    })
  ]
});
