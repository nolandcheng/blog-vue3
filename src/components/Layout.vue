<!--
 * @Descripttion: 
 * @Author: Cheng
 * @Date: 2022-07-05 01:17:24
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-07 00:08:25
-->
<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { h, ref, Component } from "vue"
import { RouterLink } from "vue-router"
import { NIcon } from "naive-ui"
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
</script>
