<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const linkClass = (path: string) =>
  route.path === path
    ? 'text-white'
    : 'text-gray-300 hover:text-white'
</script>

<template>
  <header class="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">

      <!-- Logo -->
      <RouterLink to="/" class="text-lg font-semibold tracking-wide">
        Bhumil Parate
      </RouterLink>

      <!-- Nav Links -->
      <div class="flex gap-6">
        <RouterLink
          to="/"
          class="relative pb-1"
          :class="linkClass('/')"
        >
          Home
          <span
            v-if="route.path === '/'"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>

        <RouterLink
          to="/projects"
          class="relative pb-1"
          :class="linkClass('/projects')"
        >
          Projects
          <span
            v-if="route.path === '/projects'"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>

        <RouterLink
          to="/resume"
          class="relative pb-1"
          :class="linkClass('/resume')"
        >
          Resume
          <span
            v-if="route.path === '/resume'"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>

        <RouterLink
          to="/contact"
          class="relative pb-1"
          :class="linkClass('/contact')"
        >
          Contact
          <span
            v-if="route.path === '/contact'"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
