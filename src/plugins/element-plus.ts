/*
 * @Descripttion: element-plus
 * @Author: Cheng
 * @Date: 2021-08-25 17:14:36
 * @LastEditors: Cheng
 * @LastEditTime: 2022-05-10 23:16:59
 */
import { App } from "vue"
import "element-plus/dist/index.css"
import { ElButton, ElMessageBox } from "element-plus"

const components = [ElButton]
const plugins = [ElMessageBox]

const ElementPlus = {
  install: (app: App<Element>) => {
    components.forEach((component: any) => app.component(component.name, component))

    plugins.forEach((plugin) => {
      app.use(plugin)
    })

    // 全局配置
    app.config.globalProperties.$ELEMENT = { size: "small", zIndex: 3000 }
  },
}
export default ElementPlus
