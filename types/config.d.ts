import { TOKEN_KEY } from '@/enums/cacheEnum';

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
  isAppToken?: string;
  isUseMock?: string;
}
export type CacheType = 'sessionStorage' | 'localStorage';
export interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
}
export type BasicKeys = keyof BasicStore; //keyof 操作符可以获取对象中的所有键类型组成的联合类型
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
  VITE_GLOB_IS_APP_TOKEN?: string;
  VITE_GLOB_USE_MOCK?: string;
}
