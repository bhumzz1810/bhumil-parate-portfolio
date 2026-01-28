<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="min-h-screen flex items-center">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
        Bhumil Parate
        <br />
        <span class="text-indigo-400">Full Stack Developer</span>
      </h1>

      <p class="text-lg text-gray-300 max-w-2xl mb-8">
        Hi, I’m Bhumil Parate — a Full Stack Developer with 3+ years of experience
        designing and delivering scalable web applications using PHP, Laravel,
        RESTful APIs, and MVC architecture, with strong backend expertise and modern
        frontend exposure.
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
          href="/Bhumil_Resume_Full Stack Developer.pdf"
          download
          class="border border-gray-700 hover:border-indigo-400 px-6 py-3 rounded-lg text-gray-300 hover:text-indigo-400 transition"
        >
          Download Resume
        </a>
      </div>

      <p class="text-sm text-gray-400">
        • Full Stack Developer at Siemens (Canada) <br />
        • Former Backend Developer at LuckiMedia (India) <br />
        • Graduate Certificate – Conestoga College (Canada) <br />
        • Open Work Permit | Available Full Time
      </p>
    </div>
  </section>
</template>
