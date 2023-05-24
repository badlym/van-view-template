import { BasicKeys } from '#/config';
import { CacheTypeEnum, TOKEN_KEY } from '@/enums/cacheEnum';
import { useCache } from '@/hooks/web/useCache';

const { wsCache } = useCache();

const sessionStorage = useCache(CacheTypeEnum.SESSION);

export const getAuthCache = <T>(key: BasicKeys) => sessionStorage.wsCache.get(key) as T;

export function setAuthCache(key: BasicKeys, value) {
  // return wsCache.set(key, value);
  return sessionStorage.wsCache.set(key, value);
}

export const setWebStorageCache = (key: string, value) => {
  return wsCache.set(key, value);
};
export const getWebStorageCache = <T>(key: string) => {
  return wsCache.get(key) as T;
};
export const setSessionWebStorageCache = (key: string, value) => {
  return sessionStorage.wsCache.set(key, value);
};
export const getSessionWebStorageCache = <T>(key: string) => {
  return sessionStorage.wsCache.get(key) as T;
};
export function getToken() {
  if (import.meta.env.DEV) {
    return 'dev_token';
  } else {
    return getAuthCache(TOKEN_KEY);
  }
}
