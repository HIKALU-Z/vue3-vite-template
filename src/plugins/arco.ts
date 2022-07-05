import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(ArcoVue, {
      // 用于改变使用组件时的前缀名称
      componentPrefix: 'arco'
    })
  }
}
