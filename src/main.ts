import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index.js'

import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

import registerGlobalComponents from './components/register'

const app = createApp(App)
registerGlobalComponents(app)

app.use(router)
.mount('#app')
