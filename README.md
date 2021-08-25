# blog-vue3

## 0.前言
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
随后将项目中的`main.js`的后缀改为`.ts`

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
```ts
// router
import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter({
  history: createWebHashHistory(), // hash模式
  routes: [],
})
```
```ts
// store
import { createStore } from "vuex"

interface State {
  userName: string
}

export default createStore({
  state: {
    userName: "test",
  },
})
```
所有的属性和方法都要在当前文件引入后再使用。

vue3的语法很明显与vue2不太一样，而vuex和router都遵循了这样的写法，这种写法也将贯穿项目全身。

最后再在`main.ts`中引入二者，即完成了配置。

### 2.3 添加element的ui库
安装element的vue3.x支持版本element-plus
```shell
yarn add element-plus
```

全局引入的方式这里就不过多赘述。

不过即使是按需引入，element官方也建议我们**引入全部css文件**，以避免额外的插件安装。

在src新建在`plugins/element-plus.ts`文件写上一些基础的配置
``` ts
import { App } from "vue"
import "element-plus/dist/index.css"
import { ElButton, ElMessageBox } from "element-plus"

const components = [ElButton]
const plugins = [ElMessageBox]

const ElementPlus = {
  install: (app: App<Element>) => {
    components.forEach((component: any) => app.component(component.name, component))

    plugins.forEach((plugin) => {
      app.use(plugin)
    })

    app.config.globalProperties.$ELEMENT = { size: "small", zIndex: 3000 }
  },
}
export default ElementPlus
```

最后在`main.ts`中引入即可
```ts
import ElementPlus from "./plugins/element-plus"
app.use(ElementPlus)
```

在这里我曾遇到一个诡异的BUG，只要import xxx element-plus，就报错没有定义default，耗费了好几个小时，最后删除node_modules，重新安装即可。