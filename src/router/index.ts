/*
 * @Descripttion: router
 * @Author: Cheng
 * @Date: 2021-08-06 17:48:21
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-08 01:58:55
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/components/Layout.vue"

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "index", component: () => import("@/pages/index.vue") },
  {
    path: "/home",
    redirect: "/blog",
    component: Layout,
    children: [
      { path: "/blog", name: "blog", component: () => import("@/pages/blog.vue") },
      { path: "/talk", name: "talk", component: () => import("@/pages/talk.vue") },
      { path: "/about", name: "about", component: () => import("@/pages/about.vue") },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
