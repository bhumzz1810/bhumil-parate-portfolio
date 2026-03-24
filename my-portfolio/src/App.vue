<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FirstLoadSplash from '@/components/FirstLoadSplash.vue'
import { RouterView, useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

const router = useRouter()

const showSplash = ref(false)
const routeLoading = ref(false)
const scrollProgress = ref(0)

onMounted(() => {
  const key = 'bp_seen_splash_v1'
  if (!sessionStorage.getItem(key)) {
    showSplash.value = true
    sessionStorage.setItem(key, '1')
  }

  const onScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

router.beforeEach(() => { routeLoading.value = true })
router.afterEach(() => { setTimeout(() => (routeLoading.value = false), 180) })
</script>

<template>
  <FirstLoadSplash
    v-if="showSplash"
    :minVisibleMs="1600"
    :durationMs="1400"
    title="Bhumil Parate"
    subtitle="Loading portfolio…"
    @done="showSplash = false"
  />

  <!-- Scroll progress bar -->
  <div
    class="scroll-progress"
    :style="{ width: scrollProgress + '%' }"
    aria-hidden="true"
  />

  <!-- Route loading bar -->
  <div
    v-if="routeLoading"
    class="fixed inset-x-0 top-0 z-[9998] h-[2px] bg-indigo-400/60 animate-pulse"
  />

  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>
