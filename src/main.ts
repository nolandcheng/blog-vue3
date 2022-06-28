/*
 * @Descripttion: main.ts
 * @Author: Cheng
 * @Date: 2021-08-05 17:10:09
 * @LastEditors: Cheng
 * @LastEditTime: 2022-06-29 00:39:40
 */
import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import router from "./router/index"
import vuex from "./store/index"

const app = createApp(App)

app.use(router)
app.use(vuex)
app.mount("#app")
