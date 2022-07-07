<!--
 * @Descripttion: 导航栏
 * @Author: Cheng
 * @Date: 2022-07-05 01:17:24
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-08 01:38:49
-->
<template>
  <n-menu
    v-if="route.name !== 'index'"
    v-model:value="activeKey"
    mode="horizontal"
    :options="menuOptions"
  />
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { h, ref, Component, onBeforeMount, onMounted } from "vue"
import { useRoute, useRouter, RouterLink } from "vue-router"
import { NIcon, useLoadingBar } from "naive-ui"
import type { MenuOption } from "naive-ui"
import { LogoGithub as BookIcon } from "@vicons/ionicons5"

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const activeKey = ref<string | null>(null)
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "blog",
            params: {},
          },
        },
        { default: () => "编码" }
      ),
    key: "blog",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "talk",
            params: {},
          },
        },
        { default: () => "杂谈" }
      ),
    key: "talk",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "about",
            params: {},
          },
        },
        { default: () => "关于" }
      ),
    key: "about",
  },
  {
    label: () =>
      h("a", {
        href: "https://github.com/nolandcheng",
        target: "_blank",
      }),
    key: "GitHub",
    icon: renderIcon(BookIcon),
  },
]
const route = useRoute()
const router = useRouter()
const loadingBar = useLoadingBar()

router.beforeEach((to, form, next) => {
  loadingBar.start()
  next()
})

router.afterEach((to, form) => {
  loadingBar.finish()
})

onBeforeMount(() => {
  loadingBar.start()
})

onMounted(() => {
  setTimeout(() => {
    loadingBar.finish()
  })
})
</script>
