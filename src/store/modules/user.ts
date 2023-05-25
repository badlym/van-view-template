import { TOKEN_KEY } from '@/enums/cacheEnum';
import { store } from '@/store';
import { SignUpInfo } from '@/store/modules/types/user';
import { getAuthCache, getWebStorageCache, setAuthCache, setWebStorageCache } from '@/utils/auth';
import { isProdMode } from '@/utils/env';
import { $myUexCore, $utils } from '@/utils/uexCore';
import { defineStore } from 'pinia';
import { Dialog } from 'vant';

// const globalSetting = useGlobSetting();
export interface UserState {
  token?: string|undefined;

}

export const useUserStore = defineStore('app-user', {
  state: (): UserState => ({
    token: '', //默认值为undefined

  }),
  getters: {
    getToken(): string|undefined {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },

  },
  actions: {


    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
}}
);

export function useUserStoreWithOut() {
  return useUserStore(store);
}
