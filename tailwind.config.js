/*
 * @Descripttion: tailwind.config.ts
 * @Author: Cheng
 * @Date: 2022-05-10 22:15:56
 * @LastEditors: Cheng
 * @LastEditTime: 2022-05-10 23:37:02
 */

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disable Preflight(tailwind base)
  },
}
