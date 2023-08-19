import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import router from './router/index.js'
import feather from 'feather-icons'

createApp(App)
  .use(router)
  .use(feather)
  .mount('#app')
