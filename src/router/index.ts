/*
 * @Descripttion: router
 * @Author: Cheng
 * @Date: 2021-08-06 17:48:21
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-04 23:40:37
 */
import { createRouter, createWebHashHistory } from "vue-router"

export default createRouter({
  history: createWebHashHistory(), // hash模式
  routes: [
    { path: "/", name: "index", component: () => import("@/pages/index.vue") },
    { path: "/blog", name: "blog", component: () => import("@/pages/blog.vue") },
    { path: "/talk", name: "talk", component: () => import("@/pages/talk.vue") },
    { path: "/about", name: "about", component: () => import("@/pages/about.vue") },
  ],
})
