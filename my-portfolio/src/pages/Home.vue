<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
        Full-Stack Developer
        <br />
        <span class="text-indigo-400">Building production-ready Laravel & Vue applications
for real-world business workflows.</span>
      </h1>

      <p class="text-lg text-gray-300 max-w-2xl mb-8">
        I build production-ready web applications with clean architecture,
        scalable APIs, and modern frontend frameworks.
      </p>

      <div class="flex gap-4">
        <RouterLink
          to="/projects"
          class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          View Projects
        </RouterLink>

        <RouterLink
          to="/contact"
          class="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-lg text-gray-300"
        >
          Contact Me
        </RouterLink>
      </div>
    </div>
  </section>
</template>
