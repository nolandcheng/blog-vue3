/*
 * @Descripttion: 封装axios
 * @Author: Cheng
 * @Date: 2021-09-10 10:44:48
 * @LastEditors: Cheng
 * @LastEditTime: 2021-11-19 16:53:46
 */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

class service {
  private readonly baseURL: string

  constructor() {
    this.baseURL = "http://localhost:3000"
  }

  // 请求参数基本配置
  getConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        //
      },
    }
    return config
  }

  // 设置拦截器
  interceptors(instance: AxiosInstance, url: string | number | undefined) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        // 请求头携带token
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      (res: any) => {
        const { data } = res
        console.log("返回数据处理", res)
        return data
      },
      (error: any) => {
        console.log("error==>", error)
        return Promise.reject(error)
      }
    )
  }

  // 设置发起请求
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    options = Object.assign(this.getConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

const http = new service()
export default http
