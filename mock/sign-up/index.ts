import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const apiPrefix = '/osg-bc0005';
// console.log(apiPrefix, apiPrefix);
export default [
  // mock user login
  {
    url: `${apiPrefix}/member/c1/f08`,
    method: 'post',
    response: () => {
      return resultSuccess({
        code: '0',
        data: '请求成功',
      });
    },
  },
] as MockMethod[];
