import { createApp } from 'vue'
import App from './App.vue'
import style from './styles/style.scss'
import * as echarts from 'echarts'
// import VChart, { THEME_KEY } from 'vue-echarts'
import router from './router/index.js'
import feather from 'feather-icons'

// console.log(import.meta.env)

createApp(App)
  .use(style)
  .use(router)
  .use(echarts)
  .use(feather)
  .mount('#app')
