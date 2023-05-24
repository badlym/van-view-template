/**
 * less global variable
 */

import { resolve } from 'path';

export function generateModifyVars() {
  return {
    // Used for global import to avoid the need to import each style file separately
    // reference:  Avoid repeated references
    // additionalData: '@import "./src/styles/var/index.less";',
    hack: `true; @import (reference) "${resolve('src/styles/var/index.less')}";`,
  };
}
