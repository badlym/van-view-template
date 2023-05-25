/**
 * Generate additional configuration files when used for packaging. The file can be configured with some global variables, so that it can be changed directly externally without repackaging
 */
import fs from 'fs-extra';
import colors from 'picocolors';

import pkg from '../../package.json';
import { GLOB_CONFIG_FILE_NAME, OUTPUT_DIR } from '../constant';
import { getConfigFileName } from '../getConfigFileName';

import { getEnvConfig, getRootPath } from '../utils';
import { cleanDist } from './cleanDist';

interface CreateConfigParams {
  configName: string;
  config: any;
  configFileName?: string;
}
const { writeFileSync } = fs;
function createConfig(params: CreateConfigParams) {
  const { configName, config, configFileName } = params;
  try {
    const windowConf = `window.${configName}`;
    // Ensure that the variable will not be modified
    let configStr = `${windowConf}=${JSON.stringify(config)};`;
    configStr += `
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {
        configurable: false,
        writable: false,
      });
    `.replace(/\s/g, '');
    fs.mkdirp(getRootPath(OUTPUT_DIR));
    writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr);
    console.log(colors.cyan(`✨ [${pkg.name}]`) + ` - 配置文件构建成功:`);
    console.log(colors.gray(OUTPUT_DIR + '/' + colors.green(configFileName)) + '\n');
  } catch (error) {
    console.log(colors.red('configuration file configuration file failed to package:\n' + error));
  }
}

export function runBuildConfig() {
  const config = getEnvConfig();
  const configFileName = getConfigFileName(config);
  createConfig({ config, configName: configFileName, configFileName: GLOB_CONFIG_FILE_NAME });
  cleanDist();
}
