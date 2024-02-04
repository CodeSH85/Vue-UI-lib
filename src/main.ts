import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'

import { createPinia } from 'pinia'
const pinia = createPinia()

import './assets/style.scss'
import '@mdi/font/css/materialdesignicons.css'

import registerGlobalComponents from './components/UI/register'

const app = createApp(App)
registerGlobalComponents(app)

app.use(router)
.use(pinia)
.mount('#app')
