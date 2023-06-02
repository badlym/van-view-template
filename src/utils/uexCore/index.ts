import { UexCoreEnum } from '@/enums/uexCore';
import { useCache } from '@/hooks/web/useCache';
import { getToken } from '@/utils/auth';
import BigNumber from 'bignumber.js';

const $utils = {
  uap: window.uap,

  /**
   * uap 本地缓存存储
   * @param {*} key
   * @param {*} val
   */
  setVal: function (key, val) {
    window.uap.locStorage.setVal(key, val);
  },

  getVal: function (key) {
    return window.uap.locStorage.getVal(key);
  },

  setSessionVal: function (key, val) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },

  getSessionVal: function (key): any {
    let val = window.sessionStorage.getItem(key);
    if (val) {
      val = JSON.parse(val);
    }
    return val;
  },

  /**
   * 退出微应用
   */
  exitMicroApp: function () {
    window.uap.locStorage.remove(); // 清除所有locStorage缓存
    const { wsCache } = useCache();
    wsCache.clear();
    window.uap.widget.finishWidget('');
  },

  /**
   * 数值保留位数
   * @param {*} n 输入的数值
   * @param {*} d 保留位数 不输入：原值返回；输入0：四舍五入取整；输入个数则保留相应位数，不够补0
   * @returns 返回值为字符串类型
   */
  tofixedNumber: function (n, d) {
    let val;
    if (n === '') {
      val = '--';
    } else if (n === '--') {
      val = '--';
    } else {
      const v1 = new BigNumber(n);
      const v2 = v1.abs();
      val = v2.toFixed(d);
    }

    return val;
  },

  /**
   *
   * @param {*} multiple
   * @returns
   */
  ecahrtPx: function (multiple) {
    const clientWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    const fontSize = clientWidth / 375;
    return multiple * fontSize;
  },
};

/**
 * 封装 uexCore 方法
 * @param {*} key uexCore方法的key值
 * @param {*} params 方法入参，已经做了转字符串，直接传对象参数即可
 * @param {*} callBack 回调
 */
function $myUexCore(key: string, params?: any, callBack?: any) {
  $utils.uap.ready(function () {
    window.uexCore[key](JSON.stringify(params), function (res) {
      if (typeof res === 'string') {
        res = JSON.parse(res);
      }
      callBack(res);
    });
  });
}

/**
 * uexWindow 方法
 * @param {*} key
 */
function $myUexWindow(key) {
  $utils.uap.ready(function () {
    return window.uexWindow[key];
  });
}
// 入参1页面名称随便起，2ACTTYPE，3项目ID，4户号，5用户类型01为高压02位低压非居

// 微应用注册监听

export { $utils, $myUexCore, $myUexWindow };
