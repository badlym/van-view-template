//声明一个对象类型，key为string，value为T ,对象的初始值也有可能是null或者undefined
declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>;
//声明一个对象切不为null或者undefined
declare type RecordableObj<T = any> = Record<string, T>;
//声明一个只读对象类型，key为string，value为T
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};
declare type NonNullable<T> = T extends null | undefined ? never : T;
declare type Nullable<T> = T | null;
declare type NullUndefined<T> = T | null | undefined;
declare interface ViteEnv {
  VITE_PORT: number;
  VITE_GLOB_USE_MOCK: boolean;
  VITE_USE_PWA: boolean;
  VITE_PUBLIC_PATH: string;
  VITE_PROXY: [string, string][];
  VITE_GLOB_APP_TITLE: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_USE_CDN: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  VITE_LEGACY: boolean;
  VITE_USE_IMAGEMIN: boolean;
  VITE_GENERATE_UI: string;
  VITE_IS_APP_TOKEN: boolean;
  VITE_USE_VCONSOLE: boolean;
}

declare interface Window {
  uap?: any;
  WSGWBridge: any;
  uexCore?: any;
  uexScreenShot: any;
  uexWindow: any;
}
declare interface IResponse<T = any> {
  code: string | number;
  message: string;
  data: T extends any ? T : T & any;
}
