<script setup lang="ts">
import { trackClick } from '@/lib/analytics'
</script>

<template>
  <footer class="relative border-t border-white/6 mt-24 overflow-hidden">
    <!-- Glow accent -->
    <div
      class="pointer-events-none absolute inset-x-0 -top-px h-px
             bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
      aria-hidden="true"
    />

    <div class="max-w-6xl mx-auto px-6 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <!-- Left -->
        <div class="flex items-center gap-3">
          <span
            class="w-6 h-6 rounded-md grid place-items-center text-xs font-bold
                   bg-gradient-to-br from-indigo-500/30 to-purple-600/30
                   border border-indigo-500/20 text-indigo-300"
          >BP</span>
          <span>© 2026 <span class="text-gray-400">Bhumil Parate</span></span>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/bhumilparate/"
            target="_blank"
            rel="noopener"
            class="text-gray-500 hover:text-indigo-300 transition-colors duration-200"
            @click="trackClick('footer_linkedin', 'footer', 'https://www.linkedin.com/in/bhumilparate/')"
          >LinkedIn</a>
          <a
            href="https://github.com/bhumzz1810"
            target="_blank"
            rel="noopener"
            class="text-gray-500 hover:text-indigo-300 transition-colors duration-200"
            @click="trackClick('footer_github', 'footer', 'https://github.com/bhumzz1810')"
          >GitHub</a>
          <a
            href="mailto:bhumilparate944@gmail.com"
            class="text-gray-500 hover:text-indigo-300 transition-colors duration-200"
            @click="trackClick('footer_email', 'footer', 'mailto:bhumilparate944@gmail.com')"
          >Email</a>
        </div>

        <!-- Right -->
        <span class="text-gray-600 text-xs">Built with Vue 3 &amp; Tailwind CSS</span>
      </div>
    </div>
  </footer>
</template>
