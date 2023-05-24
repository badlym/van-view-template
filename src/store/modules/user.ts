import { TOKEN_KEY } from '@/enums/cacheEnum';
import { UserEnum } from '@/enums/user';
import { store } from '@/store';
import { SignUpInfo } from '@/store/modules/types/user';
import { getAuthCache, getWebStorageCache, setAuthCache, setWebStorageCache } from '@/utils/auth';
import { isProdMode } from '@/utils/env';
import { $myUexCore, $utils } from '@/utils/uexCore';
import { defineStore } from 'pinia';
import { Dialog } from 'vant';

// const globalSetting = useGlobSetting();
export interface UserState {
  token?: string;
  consNo?: string; //户号
  consNoEnc?: string; //户号加密
  provinceCode?: string; //省码
  appInfo?: Recordable;
  homePageDataList?: Recordable[];
  consName?: string; //户名
  signUpInfo?: SignUpInfo | Recordable;
  initData?: Recordable<{
    APP_VERSION: string;
    dataHost: string;
    host: string;
    target: string;
    districtName: string;
    devciceId: string;
    devciceIp: string;
    optSys: string;
    realName_dst: string;
    provinceName: string;
    OS: string;
    token: string;
    provinceId: string;
    cityId: string;
    deviceModel: string;
    appEnvironment: string;
    languageType: string;
    districtId: string;
    cityName: string;
    userId: string;
  }>;
  nowVersion?: string;
}

export const useUserStore = defineStore('app-user', {
  state: (): UserState => ({
    token: undefined, //默认值为undefined
    consNo: undefined,
    provinceCode: undefined,
    appInfo: {},
    homePageDataList: [],
    consName: undefined,
    signUpInfo: {},
    consNoEnc: undefined,
    initData: {},
    nowVersion: '',
  }),
  getters: {
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getConsNo(): string {
      return this.consNo || getWebStorageCache<string>(UserEnum.CONS_NO);
    },
    getConsNoEnc(): string {
      return this.consNoEnc || getWebStorageCache(UserEnum.CONS_NO_ENC);
    },
    getConsName(): string {
      return this.consName || getWebStorageCache<string>(UserEnum.CONS_NAME);
    },
    getProvinceCode(): string {
      return this.provinceCode || getWebStorageCache<string>(UserEnum.PROVINCE_CODE);
    },
    getAppInfo(): Recordable {
      return this.appInfo || getWebStorageCache(UserEnum.APP_INFO);
    },
    getHomePageDataList(): UserState['homePageDataList'] {
      return this.homePageDataList || getWebStorageCache(UserEnum.HOME_PAGE_DATA_LIST);
    },

    getSighUpInfo(): UserState['signUpInfo'] {
      return this.signUpInfo || getWebStorageCache(UserEnum.SIGN_UP_INFO);
    },
    getterInitData(): UserState['initData'] | undefined {
      return this.initData || getWebStorageCache(UserEnum.INIT_DATA);
    },
    getterNowVersion(): UserState['nowVersion'] {
      return this.nowVersion || getWebStorageCache(UserEnum.NOW_VERSION);
    },
  },
  actions: {
    setNowVersion(info: string | undefined) {
      this.nowVersion = info ? info : ''; // for null or undefined value
    },
    setInitData(initData: UserState['initData']) {
      this.initData = initData ? initData : undefined;
      setWebStorageCache(UserEnum.INIT_DATA, initData);
    },

    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
    setConsNo(info: string | undefined) {
      this.consNo = info ? info : ''; // for null or undefined value
      setWebStorageCache(UserEnum.CONS_NO, info);
    },
    setConsNoEnc(info: string | undefined) {
      this.consNoEnc = info ? info : ''; // for null or undefined value
      setWebStorageCache(UserEnum.CONS_NO_ENC, info);
    },
    setConsName(info: string | undefined) {
      this.consName = info ? info : ''; // for null or undefined value
      setWebStorageCache(UserEnum.CONS_NAME, info);
    },

    setProvinceCode(info: string | undefined) {
      this.provinceCode = info ? info : ''; // for null or undefined value
      setWebStorageCache(UserEnum.PROVINCE_CODE, info);
    },
    setAppInfo(info: UserState['appInfo']) {
      this.appInfo = info ? info : undefined;
      setWebStorageCache(UserEnum.APP_INFO, info); // for null or undefined value
    },
    setHomePageDataList(info: UserState['homePageDataList']) {
      this.homePageDataList = info ? info : [];
      setWebStorageCache(UserEnum.HOME_PAGE_DATA_LIST, info); // for null or undefined value
    },
    setAppToken() {
      if (isProdMode()) {
        $myUexCore('init', {}, (response) => {
          response.code = response.code.toString();
          if (response && response.code === '1') {
            $utils.setVal('initData', response);
            $utils.setVal('nowVersion', response.data.APP_VERSION);
            console.log(response.data.token, 'app的token');
            this.setToken(response.data.token);
            this.setAppInfo(response.data);
          } else if (response && response.code === '-200') {
            Dialog.alert({
              title: '提示',
              message: response.message,
            });
          } else {
            Dialog.alert({
              title: '提示',
              message: response.message,
            });
          }
        });
      } else {
        this.setToken('dev_token');
      }
    },
    setSignUpInfo(info: UserState['signUpInfo']) {
      this.signUpInfo = info ? info : undefined;
      setWebStorageCache(UserEnum.SIGN_UP_INFO, info); // for null or undefined value
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
