// 默认参数
let defaultsProp = {
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
  unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，建议使用vw
  minPixelValue: 1, // 默认值1，小于或等于`1px`不转换为视窗单位
};
function toFixed(number, precision) {
  var multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
}
//
function createPxReplace(viewportSize, minPixelValue, unitPrecision, viewportUnit) {
  return function ($0, $1) {
    if (!$1) return;
    var pixels = parseFloat($1);
    if (pixels <= minPixelValue) return;
    return toFixed((pixels / viewportSize) * 100, unitPrecision) + viewportUnit;
  };
}
// const templateReg = /<template>([\s\S]+)<\/template>/gi;
// const templateReg = /(<template>([\s\S]+)<\/template>)/gi;
// const templateReg = /(<scrip([\s\S]+)<\/script>)/gi;
// const pxGlobalReg = /(\d+)px/gi;
/**
 * //将scipt里边的px也用来转化 比方说vue里边的style对象写法
 *   const textStyle = ref({
 *     width: '100px',
 *   });
 * @type {RegExp}
 */
const templateReg = /((?:<scrip|<template>)([\s\S]+)(?:<\/script>|<\/template>))/gi;
const pxGlobalReg = /(?<=[^\-\d])(\d+)px/gi; //修改正则表达式排除-px这种情况
// 生成插件的工厂方法
const pluginGenerator = (customOptions = defaultsProp) => {
  // 返回插件
  return {
    // 插件名称
    name: 'style-postcss-px-to-viewport',

    // transform 钩子
    async transform(code, id) {
      let _source = '';
      if (/(.vue|.tsx|.jsx)$/.test(id)) {
        let _source = '';
        if (templateReg.test(code)) {
          _source = code.match(templateReg)[0];
        }
        if (pxGlobalReg.test(_source)) {
          let $_source = _source.replace(
            pxGlobalReg,
            createPxReplace(
              customOptions.viewportWidth,
              customOptions.minPixelValue,
              customOptions.unitPrecision,
              customOptions.viewportUnit,
            ),
          );

          code = code.replace(_source, $_source);
        }
      }
      return { code };
    },
  };
};

export default pluginGenerator;
