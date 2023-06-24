<div align="center"> <a href="https://github.com/kailong321200875/vue-element-plus-admin"> <img width="100" src="./public/logo.png"> </a> <br> <br>

[![license](https://img.shields.io/github/license/kailong321200875/vue-element-plus-admin.svg)](LICENSE)

<h1>van-view-template</h1>
</div>

## 介绍

van-view-template 是一个基于 vue3+vite+vant的移动端开源模板，专为快速搭建移动端页面而生。

## 特性

- **最新技术栈**：使用 Vue3/vite4 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **自定义数据** 内置 Mock 数据方案

## 预览

- [van-view-template](https://badlym.github.io/van-view-template/) - 完整版 github 站点

## 提示

本套基础架构曾经用于多个实际项目中（例如网上国网app），经过了充分的检验，但是随着业务的发展，可能会有一些小问题，如果你发现了问题，欢迎提出来，我会及时修复。
主要应用于hybrid app，跟原生交互主要是通过jsBridge，区别于uniapp的开发方式。

那么我想使用原生app的功能怎么办？要么使用uniapp公司的html5+调用原生的功能，只需要公司的安卓或者ios程序员在原生工程中引入相关插件。有时候确实需要引入相关的插件，比方说接口请求这一块，公司为了安全性，并没有咱们暴露后台的接口地址，那就只能让原生租这边给咱们封装一个调用相关接口请求的一个方法。然后自己封装实现一下。
因为时间紧张，我并没有造UI样式的轮子，主要应用的就是vant。更何况移动端的开发本来就是要还原设计稿，所以我觉得没必要造ui样式的轮子。

## 文档

文档正在加班加点写。。。

## 前序准备

- [node](http://nodejs.org/) 和 [git](https://git-scm.com/) - 项目开发环境
- [Vite4](https://vitejs.dev/) - 熟悉 vite 特性
- [Vue3](https://v3.vuejs.org/) - 熟悉 Vue 基础语法
- [TypeScript](https://www.typescriptlang.org/) - 熟悉 `TypeScript` 基本语法
- [Es6+](http://es6.ruanyifeng.com/) - 熟悉 es6 基本语法
- [Vue-Router-Next](https://next.router.vuejs.org/) - 熟悉 vue-router 基本使用
- [vant](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/home) - vant 基本使用
- [Mock.js](https://github.com/nuysoft/Mock) - mockjs 基本语法
- [Home | Windi CSS](https://cn.windicss.org/) -windicss 基本用法

## 安装和使用

- 获取代码

```bash
git clone https://github.com/badlym/van-view-template.git
```

- 安装依赖

```bash
cd van-view-template

pnpm install

```

- 运行

```bash
pnpm run dev
```

- 打包

```bash
pnpm run build:pro
```

## 更新日志

[更新日志](./CHANGELOG.md)

## 如何贡献

**Pull Request:**

1. Fork 代码
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交 `pull request`

## Git 贡献提交规范

- `feat` 新功能
- `fix` 修补 bug
- `docs` 文档
- `style` 格式、样式(不影响代码运行的变动)
- `refactor` 重构(即不是新增功能，也不是修改 BUG 的代码)
- `perf` 优化相关，比如提升性能、体验
- `test` 添加测试
- `build` 编译相关的修改，对项目构建或者依赖的改动
- `ci` 持续集成修改
- `chore` 构建过程或辅助工具的变动
- `revert` 回滚到上一个版本
- `workflow` 工作流改进
- `mod` 不确定分类的修改
- `wip` 开发中
- `types` 类型

## 浏览器支持

本地开发推荐使用 `Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE


| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                   not support                                                                                                                   |                                                                                            last 2 versions                                                                                            |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## 许可证

[MIT](./LICENSE)

[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
[//]: #
