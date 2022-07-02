/*
 * @Descripttion: router
 * @Author: Cheng
 * @Date: 2021-08-06 17:48:21
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-02 21:57:00
 */
import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter({
  history: createWebHashHistory(), // hash模式
  routes: [{ path: "/", component: import("@/pages/index.vue") }],
})
