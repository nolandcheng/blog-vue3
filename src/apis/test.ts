/*
 * @Descripttion: 测试api
 * @Author: Cheng
 * @Date: 2021-09-10 10:44:27
 * @LastEditors: Cheng
 * @LastEditTime: 2021-11-19 16:55:46
 */
import http from "../utils/request"

export const test = () => {
  return http.request({
    url: "/test/test",
    method: "get",
  })
}
