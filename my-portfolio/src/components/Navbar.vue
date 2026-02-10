<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => route.path === path

const linkBase =
  'relative pb-1 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 rounded'

const linkClass = (path: string) =>
  isActive(path)
    ? `${linkBase} text-white`
    : `${linkBase} text-gray-300 hover:text-white`
</script>

<template>
  <!-- ✅ isolate helps prevent backdrop-filter compositing issues with your hero glow -->
  <header
    class="sticky top-0 z-50 isolate border-b border-white/10
           bg-[#070A13]/90 supports-[backdrop-filter]:bg-[#070A13]/70
           backdrop-blur"
  >
    <nav
      class="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center"
      aria-label="Primary"
    >
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-white text-lg font-semibold tracking-wide hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 rounded"
      >
        Bhumil Parate
      </RouterLink>

      <!-- Nav Links -->
      <div class="flex gap-6">
        <RouterLink to="/" :class="linkClass('/')"
          :aria-current="isActive('/') ? 'page' : undefined"
        >
          Home
          <span
            v-if="isActive('/')"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>

        <RouterLink to="/projects" :class="linkClass('/projects')"
          :aria-current="isActive('/projects') ? 'page' : undefined"
        >
          Projects
          <span
            v-if="isActive('/projects')"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>

        <RouterLink to="/resume" :class="linkClass('/resume')"
          :aria-current="isActive('/resume') ? 'page' : undefined"
        >
          Resume
          <span
            v-if="isActive('/resume')"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>

        <RouterLink to="/contact" :class="linkClass('/contact')"
          :aria-current="isActive('/contact') ? 'page' : undefined"
        >
          Contact
          <span
            v-if="isActive('/contact')"
            class="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 rounded-full"
          />
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
