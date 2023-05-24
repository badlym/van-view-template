//引入路径模块
//引入文件模块
import fs from 'fs-extra';
import { parse } from 'node-html-parser';
import path from 'path';
import { OUTPUT_DIR } from '../constant';

export const cleanDist = () => {
  const pathName = path.resolve(process.cwd(), `${OUTPUT_DIR}/index.html`);

  try {
    const html = fs.readFileSync(pathName, 'utf-8');
    const root = parse(html);
    const elList = root.querySelectorAll('script');

    for (let i = 0; i < elList.length; i++) {
      // 1、移除 <script type=module> 元素
      const data = elList[i].getAttribute('type');
      if (data && data === 'module') {
        elList[i].remove();
      }

      // 2、移除其他 <script> 的 nomodule 属性
      const hasNoModule = elList[i].hasAttribute('nomodule');
      const hascrossorigin = elList[i].hasAttribute('crossorigin');
      if (hasNoModule) {
        if (hascrossorigin) {
          elList[i].removeAttribute('crossorigin');
        }
        elList[i].removeAttribute('nomodule');
      }

      // 3、移除 <script id=vite-legacy-entry> 元素的内容，并把 data-src 属性名改为 src
      const hasDataSrc = elList[i].hasAttribute('data-src');
      if (hasDataSrc) {
        const legacyEle = elList[i];
        const srcData = legacyEle.getAttribute('data-src');
        legacyEle.setAttribute('src', typeof srcData === 'string' ? srcData : '');
        legacyEle.removeAttribute('data-src');
        legacyEle.textContent = '';
      }
    }
    // 将新的组合的内容写入原有index.html
    fs.writeFileSync(pathName, root.toString());
    // console.log('222'+root.toString())
  } catch (err) {
    console.log('读取index.html文件失败' + JSON.stringify(err));
  }

  // fs.readFile(pathName, 'utf8', function (err, html) {
  //   if (err) {
  //     return console.log('读取index.html文件失败' + err.message);
  //   }
  //   const root = parse(html);
  //   const elList = root.querySelectorAll('script');
  //
  //   for (let i = 0; i < elList.length; i++) {
  //     // 1、移除 <script type=module> 元素
  //     const data = elList[i].getAttribute('type');
  //     if (data && data === 'module') {
  //       elList[i].remove();
  //     }
  //
  //     // 2、移除其他 <script> 的 nomodule 属性
  //     const hasNoModule = elList[i].hasAttribute('nomodule');
  //     const hascrossorigin = elList[i].hasAttribute('crossorigin');
  //     if (hasNoModule) {
  //       if (hascrossorigin) {
  //         elList[i].removeAttribute('crossorigin');
  //       }
  //       elList[i].removeAttribute('nomodule');
  //     }
  //
  //     // 3、移除 <script id=vite-legacy-entry> 元素的内容，并把 data-src 属性名改为 src
  //     const hasDataSrc = elList[i].hasAttribute('data-src');
  //     if (hasDataSrc) {
  //       const legacyEle = elList[i];
  //       const srcData = legacyEle.getAttribute('data-src');
  //       legacyEle.setAttribute('src', typeof srcData === 'string' ? srcData : '');
  //       legacyEle.removeAttribute('data-src');
  //       legacyEle.textContent = '';
  //     }
  //   }
  //   // 将新的组合的内容写入原有index.html
  //   fs.writeFileSync(pathName, root.toString());
  //   // console.log('222'+root.toString())
  // });
};
