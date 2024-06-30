import { createApp } from 'vue'

import App from './App.vue'

import '@/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

import registerGlobalComponents from './components/register'

const app = createApp(App)
registerGlobalComponents(app)

app.mount('#app')
