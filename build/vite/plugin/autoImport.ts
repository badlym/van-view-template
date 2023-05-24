import AutoImport from 'unplugin-auto-import/vite';

export const createAutoImport = () => {
  return AutoImport({
    // 自动导入vue相关的Api
    // 目标文件
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue',
      'vue-router',
      '@vueuse/core',
      /* 自定义 */
      {
        'lodash/isUndefined': [['default', 'isUndefined']],
        /* 自定义模块 */
        api: [['default', 'api']],
        hooks: [['default', 'hooks']],
        store: [['default', 'store']],
      },
    ],
    // eslint报错解决
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    // dts: './types/auto-imports.d.ts',
    dts: false,
  });
};
