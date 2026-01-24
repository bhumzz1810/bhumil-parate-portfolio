<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
</script>

<template>
  <PageContainer>
    <h1 class="text-4xl font-bold mb-6">Resume</h1>
<div class="w-16 h-1 bg-indigo-500 rounded-full mb-12"></div>


    <p class="text-gray-300 max-w-2xl mb-12 leading-relaxed">

      Full-stack developer with hands-on experience building
      production-ready web applications using Laravel and Vue.
      Strong focus on clean architecture, scalable APIs,
      and maintainable frontend systems.
    </p>

    <h2 class="text-2xl font-semibold mb-4">Skills</h2>

    <div class="grid sm:grid-cols-2 gap-6 text-gray-300 mb-16">
      <div>
        <h3 class="font-medium text-white mb-2">Backend</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Laravel 10–12</li>
          <li>REST APIs</li>
          <li>Authentication & Authorization</li>
          <li>MySQL / SQL</li>
          <li>Service-layer architecture</li>
        </ul>
      </div>

      <div>
        <h3 class="font-medium text-white mb-2">Frontend</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Vue 3 (Composition API)</li>
          <li>TypeScript</li>
          <li>Vue Router</li>
          <li>Tailwind CSS</li>
          <li>Responsive UI design</li>
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mb-6">Experience & Projects</h2>

    <div class="space-y-10">
      <div>
        <h3 class="text-xl font-semibold">
          Full-Stack Developer — Rajwadi Tiffin Management System
        </h3>
        <p class="text-gray-400 text-sm mb-3">
          Laravel • Vue • MySQL • Stripe
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-1">
          <li>Designed and implemented a subscription-based ordering system</li>
          <li>Built REST APIs with role-based authentication</li>
          <li>Implemented admin dashboards</li>
          <li>Focused on clean architecture</li>
        </ul>
      </div>
    </div>
  </PageContainer>
</template>
