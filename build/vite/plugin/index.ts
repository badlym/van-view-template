import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import path from 'path';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite';
import { PluginOption } from 'vite';
// import { viteVConsole } from 'vite-plugin-vconsole';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import VitePluginWindicss from 'vite-plugin-windicss';
import { viteZip } from 'vite-plugin-zip-file';
import { OUTPUT_DIR } from '../../constant';
import { runBuildPlugin } from '../../script/postBuild';
import { createAutoImport } from './autoImport';
import { configLegacy } from './createLegacy';
// import { configLegacy } from './createLegacy';
import { configHtmlPlugin } from './html';
import { configMockPlugin } from './mock';
// @ts-ignore
import stylePxToVw from './stylePxToVw';

dayjs.locale('zh-cn'); // 使用本地化语言
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_USE_MOCK } = viteEnv;
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    //这个必须放在第一个
    stylePxToVw(),
    // viteVConsole({
    //   entry: pathResolve('src/main.ts'), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
    //   localEnabled: false, // 本地是否启用
    //   enabled: VITE_USE_VCONSOLE ? true : false, // 是否启用
    //   config: {
    //     theme: 'dark',
    //   },
    // }),
    //TODO: 有问题 目前等待官方解决
    VitePluginWindicss(),
    configLegacy(),
    // have to
    vue(),
    //支持在setup语法糖当中使用options api
    DefineOptions(),
    //script setup 标签当中直接使用name
    vueSetupExtend(),
    // have to
    vueJsx(),

    Components({
      resolvers: [VantResolver()],
    }),

    VITE_GLOB_USE_MOCK && configMockPlugin({ isBuild }),
    configHtmlPlugin(viteEnv, isBuild),
    createAutoImport(),
    isBuild && runBuildPlugin(), //通过打包成vite插件的形式写入_app.config.js,这样为了兼容dist 打包
    viteZip({
      folderPath: path.resolve(process.cwd(), OUTPUT_DIR),
      outPath: path.resolve(process.cwd()),
      zipName: `${OUTPUT_DIR}.zip`,
      enabled: isBuild,
    }),
    // support name
    //vueSetupExtend(),
  ];

  return vitePlugins;
}
