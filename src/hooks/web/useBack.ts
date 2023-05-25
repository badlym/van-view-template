/**
 * @description: 返回上一页 如果存在history堆栈则返回上一页 否则调用uap的退出方法
 */
import { router } from '@/router';
import { $utils } from '@/utils/uexCore';

export const useBack = () => {
  const back = router.options.history.state.back;
  if (back) {
    // @ts-ignore
    router.push(back);
  } else {
    window.uap.widget.finishWidget('');
    // uap中的退出应用
  }
};
export function backPre() {
  const currentRouteName = router.currentRoute.value.name;
  const currentRoutePath = router.currentRoute.value.path;
  $utils.setSessionVal('currentRouteName', currentRouteName);
  $utils.setSessionVal('currentRoutePath', currentRoutePath);
  const pre = backPrePage();
  router.push({ name: pre });
}
function backPrePage() {
  let routerArr = $utils.getSessionVal('routerArr');
  let pre = '';
  if (!routerArr && typeof routerArr !== 'undefined' && routerArr !== 0) {
    // 没有存值
    routerArr = [];
  } else {
    pre = routerArr.pop();
    if (typeof pre !== 'undefined') {
      // $utils.setVal("routerArr", routerArr)
      $utils.setSessionVal('routerArr', routerArr);
    }
  }
  return pre;
}
