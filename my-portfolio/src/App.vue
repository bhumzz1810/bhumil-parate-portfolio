<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FirstLoadSplash from '@/components/FirstLoadSplash.vue'
import { RouterView, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const router = useRouter()

const showSplash = ref(false)
const routeLoading = ref(false)

onMounted(() => {
  const key = 'bp_seen_splash_v1'
  const seen = sessionStorage.getItem(key)

  if (!seen) {
    showSplash.value = true
    sessionStorage.setItem(key, '1')
  }
})

router.beforeEach(() => {
  routeLoading.value = true
})
router.afterEach(() => {
  setTimeout(() => (routeLoading.value = false), 180)
})
</script>

<template>
  <!-- First time only -->
  <FirstLoadSplash
    v-if="showSplash"
    :minVisibleMs="1600"
    :durationMs="1400"
    title="Bhumil Parate"
    subtitle="Loading portfolio…"
    @done="showSplash = false"
  />

  <!-- Route loading bar -->
  <div v-if="routeLoading" class="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-indigo-400"></div>

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
