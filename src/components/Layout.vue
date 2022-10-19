<!--
 * @Descripttion: 导航栏
 * @Author: Cheng
 * @Date: 2022-07-05 01:17:24
 * @LastEditors: Cheng
 * @LastEditTime: 2022-10-19 22:09:35
-->
<template>
  <div class="flex justify-between items-center px-24 py-4">
    <n-avatar :size="50" :src="getImgUrl('../assets/avatar.png')" @click="backHome" />
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>

  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { h, ref, onBeforeMount, onMounted } from "vue"
import { useRouter, RouterLink, useRoute } from "vue-router"
import { NIcon, useLoadingBar } from "naive-ui"
import type { MenuOption } from "naive-ui"
import { LogoGithub as BookIcon } from "@vicons/ionicons5"

const router = useRouter()
const loadingBar = useLoadingBar()

const getImgUrl = (name: string) => {
  return new URL(name, import.meta.url).href
}

const activeKey = ref<any>(useRoute().name)
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

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function backHome() {
  router.push("/")
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
