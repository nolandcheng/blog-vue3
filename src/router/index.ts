/*
 * @Descripttion: router
 * @Author: Cheng
 * @Date: 2021-08-06 17:48:21
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-07 00:29:27
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/components/Layout.vue"

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "index", component: () => import("@/pages/index.vue") },
  {
    path: "/layout",
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
})

export default router
