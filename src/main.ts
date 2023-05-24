import '@/plugins/vant/index.ts';
import '@/plugins/windiCss/index.ts';
import { router, setupRouter } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { setupStore } from '@/store';
import ResizeObserver from 'resize-observer-polyfill';
// import 'amfe-flexible';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.less';

window.ResizeObserver = window.ResizeObserver || ResizeObserver;

const bootstrap = () => {
  const app = createApp(App);
  // 导入状态管理 pina
  setupStore(app);
  // 路由
  setupRouter(app);
  // 路由守卫

  setupRouterGuard(router);
  app.mount('#app');
};
bootstrap();
