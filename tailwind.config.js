/*
 * @Descripttion: tailwind.config.ts
 * @Author: Cheng
 * @Date: 2022-05-10 22:15:56
 * @LastEditors: Cheng
 * @LastEditTime: 2022-06-29 01:45:06
 */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
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
