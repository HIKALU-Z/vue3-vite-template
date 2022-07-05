import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 加载全局样式
import './styles/index.scss'
import elementPlus from './plugins/element-plus'
import arco from './plugins/arco'

const pinia = createPinia()

//  import.meta.globEager -- test for vite.d.ts

createApp(App)
  .use(router)
  .use(pinia)
  .use(elementPlus)
  .use(arco)
  .mount('#app')
