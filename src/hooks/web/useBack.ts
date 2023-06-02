/**
 * @description: 返回上一页 如果存在history堆栈则返回上一页 否则调用uap的退出方法
 */
import { router } from '@/router';
import { getSessionWebStorageCache, setSessionWebStorageCache } from '@/utils/auth';

//这个方法是为了兼容ios点击后退按钮，无法回退的bug，
export function backPre() {
  const currentRouteName = router.currentRoute.value.name;
  const currentRoutePath = router.currentRoute.value.path;
  setSessionWebStorageCache('currentRouteName', currentRouteName);
  setSessionWebStorageCache('currentRoutePath', currentRoutePath);
  const pre = backPrePage();
  router.push({ name: pre });
}
function backPrePage() {
  let routerArr = getSessionWebStorageCache<any>('routerArr');
  let pre = '';
  if (!routerArr && typeof routerArr !== 'undefined' && routerArr !== 0) {
    // 没有存值
    routerArr = [];
  } else {
    pre = routerArr.pop();
    if (typeof pre !== 'undefined') {
      // $utils.setVal("routerArr", routerArr)
      setSessionWebStorageCache('routerArr', routerArr);
    }
  }
  return pre;
}
