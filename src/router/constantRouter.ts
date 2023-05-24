export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    name: 'Index',
    path: '/',
    redirect: '/demo',
  },
  {
    name: 'Demo',
    path: '/demo',
    component: () => import('@/view/demo/index.vue'),
    meta: {
      title: '测试页面',
    },
  },
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'Demo',
    },
  },
];
