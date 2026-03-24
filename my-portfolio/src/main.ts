import { createApp } from 'vue'
import './style.css'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import Lenis from 'lenis'
import { setupAnalytics } from './lib/analytics'

// Lenis smooth scroll — butter-smooth scrolling globally
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

setupAnalytics(router)

createApp(App).use(createHead()).use(router).mount('#app')
