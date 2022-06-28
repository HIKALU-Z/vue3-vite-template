import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//  import.meta.globEager -- test for vite.d.ts

createApp(App).use(router).mount('#app')
