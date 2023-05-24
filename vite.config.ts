import { resolve } from 'path';
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import { OUTPUT_DIR } from './build/constant';
import { generateModifyVars } from './build/generate/generateModifyVars';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';

export function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default ({ mode, command }: ConfigEnv) => {
  const root = process.cwd();
  const env = loadEnv(mode, root, '');

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type 将读取到的loadEnv的boolean类型转换为boolean类型 'true' => true
  const viteEnv = wrapperEnv(env);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isBuild = command === 'build';
  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv;
  return defineConfig({
    base: VITE_PUBLIC_PATH,
    root, // 项目根目录
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: [
        {
          find: 'vue', // 解决动态模板发布后不显示问题
          replacement: 'vue/dist/vue.esm-bundler.js',
        },

        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: true, // 监听所有本地IP
      port: VITE_PORT,
    },
    build: {
      // target: 'esnext',
      // sourcemap: true,
      // target: ['ios11', 'Chrome 64'],
      chunkSizeWarningLimit: 2000,
      outDir: OUTPUT_DIR,
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'vue-types', '@vueuse/core', 'axios', 'qs'],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
      devSourcemap: true,
    },
  });
};
