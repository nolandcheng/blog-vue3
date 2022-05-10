/*
 * @Descripttion: vite.config.ts
 * @Author: Cheng
 * @Date: 2021-08-05 17:28:29
 * @LastEditors: Cheng
 * @LastEditTime: 2022-05-10 23:07:53
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Markdown from "vite-plugin-md"
import alias from "@rollup/plugin-alias"
import { join } from "path"
import Components from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

function resolve(dir: string) {
  return join(__dirname, dir)
}

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    alias(),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  // server: {
  //   host: "0.0.0.0",
  //   port: 3000,
  //   open: true,
  //   cors: true,
  // },
  // build: {
  //   outDir: "dist",
  // },
})
