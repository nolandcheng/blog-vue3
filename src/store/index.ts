/*
 * @Descripttion: pinia
 * @Author: Cheng
 * @Date: 2021-08-06 17:53:04
 * @LastEditors: Cheng
 * @LastEditTime: 2022-07-01 00:53:52
 */
import { defineStore } from "pinia"

export default defineStore({
  id: "myGlobalState",
  state: () => ({
    userName: "test",
  }),
})
