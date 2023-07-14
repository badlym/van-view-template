import { TOKEN_KEY } from '@/enums/cacheEnum';
import { store } from '@/store';
import { getAuthCache, setAuthCache } from '@/utils/auth';
import { defineStore } from 'pinia';

// const globalSetting = useGlobSetting();
export interface UserState {
  token?: string | undefined;
}

export const useUserStore = defineStore('app-user', {
  state: (): UserState => ({
    token: '', //默认值为undefined
  }),
  getters: {
    getToken(): string | undefined {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
