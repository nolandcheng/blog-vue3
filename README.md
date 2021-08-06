# blog-vue3

依赖管理工具我使用的是`yarn`

## 1. 项目初始化

按照官网的步骤，这里不过多赘述。
```shell
$ yarn create vite-app <project-name>
$ cd <project-name>
$ yarn
$ yarn dev
```
使用`yarn install`安装项目依赖后如果直接`yarn dev`项目会报错：

`Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.`

解决方式：
 1. 根据错误提示，安装依赖`yarn add @vitejs/plugin-vue`
 2. 在项目根目录添加文件vite.config.js
```js
// 最少配置
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
})
```
随后启动项目即可。

## 2. 项目配置

### 2.1 添加TypeScript支持
安装`typeScript`
```shell
yarn add typescript -D
```
初始化`tsconfig.json`
```shell
npx tsc --init
```
随后将项目各处的`main.js`的后缀改为`.ts`

但是`main.ts`会报错：
`Cannot find module './App.vue' or its corresponding type declarations.`

是因为目前的ts还无法识别`.vue`文件，因此我们还需要添加一点配置，在根目录添加文件`shim.d.ts`
```ts
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
```
项目添加TypeScript支持的工作就完成了，以后新建的js文件都用ts代替即可。

### 2.2 添加router和vuex
安装方式注意：因为要支持vue3，所以需要指定4.x版本。
```shell
yarn add vue-router@4.0.10
yarn add vuex@4.0.2
```
随后在项目中新增router和store文件夹，在其中的`index.ts`添加相关配置