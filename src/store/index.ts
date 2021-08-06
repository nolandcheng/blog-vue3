/*
 * @Descripttion: store
 * @Author: Cheng
 * @Date: 2021-08-06 17:53:04
 * @LastEditors: Cheng
 * @LastEditTime: 2021-08-06 17:58:35
 */
import { createStore } from "vuex"

interface State {
  userName: string
}

export default createStore({
  state: {
    userName: "test",
  },
})
