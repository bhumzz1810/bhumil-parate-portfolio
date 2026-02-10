import { createApp } from 'vue'
import './style.css'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

createApp(App).use(createHead()).use(router).mount('#app')
