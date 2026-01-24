import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Projects from '@/pages/Projects.vue'
import Resume from '@/pages/Resume.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/resume', name: 'resume', component: Resume },
    { path: '/contact', name: 'contact', component: Contact },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // back/forward browser navigation
      return savedPosition
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
