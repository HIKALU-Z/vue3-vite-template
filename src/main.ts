import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()

//  import.meta.globEager -- test for vite.d.ts

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
