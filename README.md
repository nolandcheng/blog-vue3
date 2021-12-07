# blog-vue3-basic

此仓库是由 vue3 + ts + vite2 + element-plus 搭建的基础博客项目，这里更多的是展示一些基础的配置，如果想查看完整的博客项目，点击前往[完整项目](https://github.com/cqdcyonghao/blog-vue3/tree/master)

## 1. 项目初始化

依赖管理工具我使用的是`yarn`

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

1.  根据错误提示，安装依赖`yarn add @vitejs/plugin-vue`
2.  在项目根目录添加文件 vite.config.ts（也可以先以 js 后缀添加，后续安装 TypeScript 支持后再修改为 ts 后缀）

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

### 2.1 添加 TypeScript 支持

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

是因为目前的 ts 还无法识别`.vue`文件，因此我们还需要添加一点配置，在根目录添加文件`shim.d.ts`

```ts
declare module "*.vue" {
  import { Component } from "vue"
  const component: Component
  export default component
}
```

项目添加 TypeScript 支持的工作就完成了，以后新建的 js 文件都用 ts 代替即可。

### 2.2 添加 router 和 vuex

安装方式注意：因为要支持 vue3，所以需要指定 4.x 版本。

```shell
yarn add vue-router@4.0.10
yarn add vuex@4.0.2
```

随后在项目中新增 router 和 store 文件夹，在其中的`index.ts`添加相关配置

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

vue3 的语法很明显与 vue2 不太一样，而 vuex 和 router 都遵循了这样的写法，这种写法也将贯穿整个项目开发流程。

最后再在`main.ts`中引入二者，即完成了配置。

### 2.3 添加 element 的 ui 库

安装 element 的 vue3.x 支持版本 element-plus

```shell
yarn add element-plus
```

全局引入的方式这里就不过多赘述。

不过即使是按需引入，element 官方也建议我们**引入全部 css 文件**，以避免额外的插件安装。

在 src 新建在`plugins/element-plus.ts`文件写上一些基础的配置

```ts
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

在页面中直接使用`element-plus`的组件即可

在这里我曾遇到一个诡异的 BUG，只要 import xxx element-plus，就报错没有定义 default，耗费了好几个小时，最后发现只需要删除 node_modules，重新安装即可。

### 2.4 封装 axios 请求

安装 axios

```shell
yarn add axios
```

新建 axios 文件`src/utils/request.ts`，并在该文件中进行 axios 的地址和拦截器等基本配置，这里我尝试使用 class 进行封装：

```ts
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

class service {
  private readonly baseURL: string

  constructor() {
    this.baseURL = "http://localhost:3000"
  }

  // 请求参数基本配置
  getConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {},
    }
    return config
  }

  // 设置拦截器
  interceptors(instance: AxiosInstance, url: string | number | undefined) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      // 请求头携带token
      return config
    })
    // 响应拦截
    instance.interceptors.response.use((res: any) => {
      // 处理
      return res.data
    })
  }

  // 设置发起请求
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

const http = new service()
export default http
```

随后在 apis 文件夹中统一封装接口方法：

```ts
import http from "../utils/request"

export const test = () => {
  return http.request({
    url: "/test/test",
    method: "get",
  })
}
```

随后在 vue 文件中直接引入该方法并使用即可。

## 3. HelloWord

在开发一个组件的过程中，data、computed、methods 这类选项将会随着业务逻辑的更迭而变得愈发的庞大和复杂，同一个逻辑关注点可能分散在不同的选项中，这会使得后续的维护变得困难，因此我们需要通过组合式 API 将同一逻辑点的东西放在一起复用以此来尽量规避这种情况。

Setup 选项是组合式 API 的基础，是存放组合式 API 的地方，它的调用在其他选项的解析之前，因此 Setup 中不可使用`this`。

简单尝试：

```vue
<template>
  <h1>{{ newMsg }}</h1>
  <el-button>测试element-plus</el-button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, toRefs, computed } from "vue"

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    const { msg } = toRefs(props)
    const newMsg = computed(() => msg.value + " + vite")

    const name = ref<string>("Word")
    name.value = "girl"

    const book = reactive<Book>({ title: "Vue 3 Guide" })

    const initVue = () => {
      console.log("Hello " + name.value + " by " + book.title)
    }

    onMounted(initVue)

    return {
      newMsg,
    }
  },
})
</script>
```

这里使用了一些 vue3 常用的选项：

1. 使用 ref、reactive 结合 ts 声明具有响应式的变量。
2. 使用 toRefs 创建对 props 的属性的响应式引用
3. 使用生命周期和独立的计算属性

如此便形成了一个完整的逻辑关注点，许多由这种逻辑关注点支撑的组件搭配起来便构成了我们一个又一个的页面了。

---

如果对你有帮助的话，欢迎给 star👏
