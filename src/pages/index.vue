<!--
 * @Descripttion: 首页
 * @Author: Cheng
 * @Date: 2022-07-02 21:56:47
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-04 01:36:27
-->
<template>
  <div class="index">
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>
</template>

<script lang="ts" setup>
import { h, ref, Component } from "vue"
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
        "a",
        {
          href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "编码"
      ),
    key: "hear-the-wind-sing",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
          target: "_blank",
          rel: "noopenner noreferrer",
        },
        "杂谈"
      ),
    key: "hear-the-wind-sing2",
  },
  {
    label: () =>
      h("a", {
        href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
        target: "_blank",
        rel: "noopenner noreferrer",
      }),
    key: "hear-the-wind-sing3",
    icon: renderIcon(BookIcon),
  },
]
</script>
