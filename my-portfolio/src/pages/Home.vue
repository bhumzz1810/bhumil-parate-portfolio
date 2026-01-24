<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
        Full-Stack Developer
        <br />
        <span class="text-indigo-400">
          Building production-grade Laravel, Vue, and React systems
        </span>
      </h1>

      <p class="text-lg text-gray-300 max-w-2xl mb-8">
        I have 2+ years of professional experience building and maintaining
        real-world applications involving APIs, payments, admin dashboards,
        and business-critical workflows for live products.
      </p>

      <div class="flex flex-wrap gap-4 mb-6">
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

  <a
    href="/Bhumil_Parate_Resume.pdf"
    download
    class="border border-gray-700 hover:border-indigo-400 px-6 py-3 rounded-lg text-gray-300 hover:text-indigo-400 transition"
  >
    Download Resume
  </a>
</div>


      <p class="text-sm text-gray-400">
        • Software Engineer at Lucki Media (India) <br />
        • Graduate Certificate – Conestoga College (Canada) <br />
        • Open Work Permit | Available Full Time
      </p>
    </div>
  </section>
</template>
