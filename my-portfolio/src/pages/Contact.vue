<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
</script>

<template>
  <PageContainer>
    <h1 class="text-4xl font-bold mb-6">Contact</h1>
<div class="w-16 h-1 bg-indigo-500 rounded-full mb-12"></div>


    <p class="text-gray-300 max-w-2xl mb-10">
      I’m open to full-time, internship, and junior developer opportunities.
      Feel free to reach out if you’d like to discuss a role or project.
    </p>

    <div class="space-y-6">
      <div>
        <p class="text-gray-400 text-sm mb-1">Email</p>
        <a href="mailto:your.email@example.com" class="text-indigo-400 hover:underline">
          your.email@example.com
        </a>
      </div>

      <div>
        <p class="text-gray-400 text-sm mb-1">GitHub</p>
        <a href="https://github.com/your-username" target="_blank" class="text-indigo-400 hover:underline">
          github.com/your-username
        </a>
      </div>
    </div>
  </PageContainer>
</template>
