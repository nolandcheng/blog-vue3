<!--
 * @Descripttion: 
 * @Author: Cheng
 * @Date: 2021-08-05 17:10:09
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-08 01:29:17
-->
<template>
  <n-config-provider :theme-overrides="themeOverrides" class="h-screen">
    <n-loading-bar-provider>
      <router-view></router-view>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from "naive-ui"
import { useRouter } from "vue-router"

const router = useRouter()

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#f03752",
    primaryColorHover: "#f03752", // 海棠红
  },
  LoadingBar: {
    colorLoading: "#f03752",
  },
}
</script>
