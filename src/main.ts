/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-08-05 17:10:09
 * @LastEditors: Cheng
 * @LastEditTime: 2021-08-25 23:18:01
 */
import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import router from "./router/index"
import vuex from "./store/index"

import ElementPlus from "./plugins/element-plus"
const app = createApp(App)

app.use(router)
app.use(vuex)
app.use(ElementPlus)
app.mount("#app")
