import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
const pinia = createPinia()
// import feather from 'feather-icons'

createApp(App)
  .use(router)
  .use(pinia)
  // .use(feather)
  .mount('#app')
