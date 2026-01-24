<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white antialiased flex flex-col">
    <Navbar />

    <main class="flex-1">
  <RouterView v-slot="{ Component, route }">
    <Transition name="page" mode="out-in" appear>
      <component :is="Component" :key="route.fullPath" />
    </Transition>
  </RouterView>
</main>



    <Footer />
  </div>
</template>
