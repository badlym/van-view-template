/**
 * 配置浏览器本地存储的方式，可直接存储对象数组。
 */

import { CacheTypeEnum } from '@/enums/cacheEnum';

import WebStorageCache from 'web-storage-cache';

export const useCache = (type = CacheTypeEnum.LOCAL) => {
  const wsCache: WebStorageCache = new WebStorageCache({
    storage: type,
  });

  return {
    wsCache,
  };
};
