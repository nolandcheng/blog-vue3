<!--
 * @Descripttion: 
 * @Author: Cheng
 * @Date: 2021-08-05 17:10:09
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-06 01:15:53
-->
<template>
  <n-config-provider :theme-overrides="themeOverrides" class="h-screen"
    ><router-view></router-view
  ></n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from "naive-ui"

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: "#f03752", // 海棠红
  },
}
</script>
