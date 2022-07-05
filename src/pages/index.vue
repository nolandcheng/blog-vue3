<!--
 * @Descripttion: 首页
 * @Author: Cheng
 * @Date: 2022-07-02 21:56:47
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-06 01:01:04
-->
<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div>
      <n-avatar round :size="100" :src="getImgUrl('../assets/avatar.png')" />
    </div>
    <n-divider class="w-96" />
    <div class="w-56 flex items-center justify-between">
      <template v-for="(item, index) in menuList" :key="index">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button text class="text-3xl">
              <n-icon>
                <component :is="item.icon" />
              </n-icon>
            </n-button>
          </template>
          {{ item.title }}
        </n-tooltip>
        <n-divider v-if="index !== menuList.length - 1" vertical />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from "vue"
import {
  Book as blogIcon,
  DesktopOutline as systemIcon,
  LogoGithub as githubIcon,
  LogoTwitter as twitterIcon,
} from "@vicons/ionicons5"

const getImgUrl = (name: string) => {
  return new URL(name, import.meta.url).href
}

const menuList: Array<any> = [
  { title: "我的博客", icon: blogIcon, url: "" },
  { title: "React后台", icon: systemIcon, url: "" },
  { title: "GitHub", icon: githubIcon, url: "https://github.com/nolandcheng" },
  { title: "twitter", icon: twitterIcon, url: "https://twitter.com/nolandcheng15" },
]
</script>
