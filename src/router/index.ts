/*
 * @Descripttion: router
 * @Author: Cheng
 * @Date: 2021-08-06 17:48:21
 * @LastEditors: Cheng
 * @LastEditTime: 2022-10-20 23:13:09
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/components/Layout.vue"

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "index", component: () => import("@/pages/index.vue") },
  {
    path: "/home",
    redirect: "/blogs",
    component: Layout,
    children: [
      { path: "/blogs", name: "blogs", component: () => import("@/pages/blogs.vue") },
      { path: "/talks", name: "talks", component: () => import("@/pages/talks.vue") },
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
