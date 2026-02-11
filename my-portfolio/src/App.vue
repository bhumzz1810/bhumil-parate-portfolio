<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FirstLoadSplash from '@/components/FirstLoadSplash.vue'

/* -----------------------
   First load splash (once per session)
------------------------ */
const showSplash = ref(false)

onMounted(() => {
  const key = 'bp_seen_splash_v1'
  const seen = sessionStorage.getItem(key)
  if (!seen) {
    showSplash.value = true
    sessionStorage.setItem(key, '1')
  }
})

/* -----------------------
   Route loading bar
------------------------ */
const router = useRouter()
const routeLoading = ref(false)

let stopTimer: number | undefined

router.beforeEach(() => {
  // If splash is showing, don't show route bar (looks cleaner)
  if (!showSplash.value) routeLoading.value = true
})

router.afterEach(() => {
  window.clearTimeout(stopTimer)
  // small delay so it doesn’t flicker on fast routes
  stopTimer = window.setTimeout(() => {
    routeLoading.value = false
  }, 180)
})
</script>

<template>
  <!-- Splash overlay (first visit only) -->
  <FirstLoadSplash v-if="showSplash" @done="showSplash = false" />

  <div class="min-h-screen flex flex-col">
    <Navbar />

    <!-- Top loading bar -->
    <div
      class="fixed inset-x-0 top-0 z-[9999] h-[3px] overflow-hidden"
      aria-hidden="true"
    >
      <div
        v-show="routeLoading"
        class="h-full w-full origin-left animate-loading-bar bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500"
      ></div>
    </div>

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

<style scoped>
/* simple sleek “loading” motion */
@keyframes loadingBar {
  0% {
    transform: scaleX(0.08);
    opacity: 0.9;
  }
  45% {
    transform: scaleX(0.65);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 0.95;
  }
}
.animate-loading-bar {
  animation: loadingBar 520ms ease-out infinite;
}

/* Your existing page transition can stay */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .animate-loading-bar {
    animation: none !important;
  }
  .page-enter-active,
  .page-leave-active {
    transition: none !important;
  }
}
</style>
