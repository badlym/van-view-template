import { getSessionWebStorageCache, setSessionWebStorageCache } from '@/utils/auth';
import type { Router } from 'vue-router';

export const setupRouterGuard = (router: Router) => {
  console.log('');
  createPermissionGuard(router);
  createRouterGuard(router);
};
const createPermissionGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const title = to?.meta?.title;
    if (title) {
      document.title = title as string;
    }
    next();
    // const hasToken = userStore.getToken;
    // if (hasToken) {
    //   console.log('有token');
    //   next();
    // } else {
    //   console.log('没有token');
    //   if (WHITE_NAME_LIST.indexOf(to.path) !== -1) {
    //     // in the free login whitelist, go directly
    //     next();
    //   } else {
    //     console.log('没有token 请求token');
    //     userStore.setAppToken();
    //     next();
    //   }
    // }
    return true;
  });
};
const createRouterGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    // let routerArr = JSON.parse($utils.getVal("routerArr"));
    let routerArr = getSessionWebStorageCache<string[]>('routerArr');

    if (!routerArr && typeof routerArr !== 'undefined' && routerArr !== 0) {
      //判断为null 没有存值
      routerArr = [];
    }

    // 存储上一页
    if (routerArr[routerArr.length - 1] !== from.name) {
      // let currentRouteName = $utils.getVal("currentRouteName");
      const currentRouteName = getSessionWebStorageCache('currentRouteName') || '';

      const currentRoutePath = getSessionWebStorageCache('currentRoutePath') || '';

      if (currentRouteName !== from.name || currentRoutePath !== from.path) {
        routerArr.push(<string>from.name);
        // $utils.setVal("routerArr", routerArr)
        setSessionWebStorageCache('routerArr', routerArr);
      }
    }

    next();
    return true;
  });
};
