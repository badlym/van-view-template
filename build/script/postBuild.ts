// #!/usr/bin/env node

// @ts-ignore
import colors from 'picocolors';
import { Plugin } from 'vite';
import pkg from '../../package.json';
import { runBuildConfig } from './buildConf';

export const runBuild = async () => {
  try {
    const argvList = process.argv.splice(2);

    // Generate configuration file
    if (!argvList.includes('disabled-config')) {
      runBuildConfig();
    }

    console.log(`✨ ${colors.cyan(`[${pkg.name}]`)}` + ' - build successfully!');
  } catch (error) {
    console.log(colors.red('vite build error:\n' + error));
    process.exit(1);
  }
};
// runBuild();

export const runBuildPlugin = (): Plugin => {
  return {
    name: 'runBuildPlugin',
    apply: 'build',
    // 这个是在打包完成后执行的
    buildEnd() {},
    closeBundle() {
      runBuild();
    },
  };
};
