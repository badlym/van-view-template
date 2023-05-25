import { MockMethod } from 'vite-plugin-mock';

const apiPrefix = '/emss-iea-newpower-front';
export default [
  {
    url: `${apiPrefix}/member/c10/f06`,
    method: 'post',
    /**
     * timeout 是 vite-plugin-mock 中 MockMethod 的一个可选参数，用于模拟接口请求的超时时间。如果在指定时间内模拟请求没有完成，将会返回一个超时的响应。比如，以下代码将模拟一个延迟 3 秒钟的请求：
     */
    timeout: 1000,
    response: () => {
      return {
        code: '1',
        // data: {
        //   yesOrNo: '1',
        //   powerValue: '1000',
        // },
        message: '请求成功',
      };
    },
  },

  {
    url: `${apiPrefix}/member/c10/f07`,
    method: 'post',
    /**
     * timeout 是 vite-plugin-mock 中 MockMethod 的一个可选参数，用于模拟接口请求的超时时间。如果在指定时间内模拟请求没有完成，将会返回一个超时的响应。比如，以下代码将模拟一个延迟 3 秒钟的请求：
     */
    timeout: 2000,
    response: () => {
      return {
        code: '1',
        data: {
          showTag: '1',
          awardCount: '1000',
          taskName: '参与e起节电',
        },
        message: '请求成功',
      };
    },
  },
] as MockMethod[];
