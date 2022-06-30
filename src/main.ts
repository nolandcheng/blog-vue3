/*
 * @Descripttion: main.ts
 * @Author: Cheng
 * @Date: 2021-08-05 17:10:09
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-01 00:57:07
 */
import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import router from "./router/index"
import { createPinia } from "pinia"

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount("#app")
