<!--
 * @Descripttion: 首页
 * @Author: Cheng
 * @Date: 2022-07-02 21:56:47
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-08 01:39:44
-->
<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div>
      <n-avatar round :size="100" :src="getImgUrl('../assets/avatar.png')" />
    </div>
    <h2 class="my-2">Noland Cheng</h2>
    <div class="text-gray-400 text-center">
      <p>涓流虽寡，浸成江河；爝火虽微，卒能燎野。</p>
      <p>A little trouble can develop into a big disaster.</p>
    </div>
    <n-divider class="w-96" />
    <div class="w-56 flex items-center justify-between">
      <template v-for="(item, index) in menuList" :key="index">
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button text class="text-3xl" @click="goLink(item)">
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
import { useRouter } from "vue-router"
import {
  Book as blogIcon,
  DesktopOutline as systemIcon,
  LogoGithub as githubIcon,
  LogoTwitter as twitterIcon,
} from "@vicons/ionicons5"

const router = useRouter()

const getImgUrl = (name: string) => {
  return new URL(name, import.meta.url).href
}

const menuList: Array<any> = [
  { title: "我的博客", icon: blogIcon, path: "/blog" },
  { title: "React后台", icon: systemIcon, url: "#" },
  { title: "GitHub", icon: githubIcon, url: "https://github.com/nolandcheng" },
  { title: "twitter", icon: twitterIcon, url: "https://twitter.com/nolandcheng15" },
]

function goLink({ path, url }: { path: string; url: URL }) {
  if (path) {
    router.push(path)
  } else if (url) {
    window.open(url)
  }
}
</script>
