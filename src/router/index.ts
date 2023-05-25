import { constantRouterMap } from '@/router/constantRouter';
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
// 白名单应该包含基本静态路由
export const WHITE_NAME_LIST: string[] = [];

export const router = createRouter({
  routes: constantRouterMap as RouteRecordRaw[],
  history: createWebHashHistory(),
});
// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}
