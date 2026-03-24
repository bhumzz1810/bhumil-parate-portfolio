<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'
import { trackClick } from '@/lib/analytics'

const route = useRoute()
const isActive = (path: string) => route.path === path
const scrolled = ref(false)

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

const linkBase =
  'relative pb-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 rounded'
const linkClass = (path: string) =>
  isActive(path)
    ? `${linkBase} text-white`
    : `${linkBase} text-gray-400 hover:text-white`

function trackNavClick(label: string, to: string) {
  trackClick(label, 'navbar', to)
}
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 isolate transition-all duration-300',
      scrolled
        ? 'border-b border-white/8 bg-[#070A13]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.04)]'
        : 'border-b border-transparent bg-[#070A13]/60 backdrop-blur-sm'
    ]"
  >
    <nav
      class="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center"
      aria-label="Primary"
    >
      <!-- Logo -->
        <RouterLink
          to="/"
          class="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 rounded"
          @click="trackNavClick('navbar_logo', '/')"
        >
        <span
          class="w-7 h-7 rounded-lg grid place-items-center text-xs font-bold
                 bg-gradient-to-br from-indigo-500 to-purple-600
                 text-white shadow-[0_0_14px_rgba(99,102,241,0.45)]
                 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-shadow"
        >BP</span>
        <span class="text-white text-base font-semibold tracking-wide group-hover:text-indigo-200 transition-colors">
          Bhumil Parate
        </span>
      </RouterLink>

      <!-- Nav Links -->
      <div class="flex items-center gap-1">
        <RouterLink
          v-for="(link, i) in [
            { to: '/', label: 'Home' },
            { to: '/projects', label: 'Projects' },
            { to: '/resume', label: 'Resume' },
            { to: '/contact', label: 'Contact' },
          ]"
          :key="i"
          :to="link.to"
          :class="linkClass(link.to)"
          :aria-current="isActive(link.to) ? 'page' : undefined"
          class="px-3 py-1.5 rounded-lg"
          @click="trackNavClick(`navbar_${link.label.toLowerCase()}`, link.to)"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.to)"
            class="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full
                   bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400"
          />
        </RouterLink>

        <!-- CTA button -->
        <a
          href="/contact"
          class="ml-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold
                 bg-indigo-500 hover:bg-indigo-400 text-white
                 shadow-[0_0_16px_rgba(99,102,241,0.30)] hover:shadow-[0_0_24px_rgba(99,102,241,0.45)]
                 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
          @click="trackNavClick('navbar_hire_me', '/contact')"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
          Hire Me
        </a>
      </div>
    </nav>
  </header>
</template>
