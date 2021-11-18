/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-08-05 17:28:29
 * @LastEditors: Cheng
 * @LastEditTime: 2021-11-19 01:14:43
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import alias from "@rollup/plugin-alias"
import { join } from "path"

function resolve(dir: string) {
  return join(__dirname, dir)
}

export default defineConfig({
  plugins: [vue(), alias()],
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
