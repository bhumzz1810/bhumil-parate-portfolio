<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
import { projects } from '@/data/projects'
</script>

<template>
  <PageContainer>
    <h1 class="text-4xl font-bold mb-12">Projects</h1>

<div class="w-16 h-1 bg-indigo-500 rounded-full mb-12"></div>

    <div class="grid md:grid-cols-2 gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
       class="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 
       hover:border-gray-600 hover:-translate-y-1 
       transition-all duration-200"
      >
        <h2 class="text-2xl font-semibold mb-3">
          {{ project.title }}
        </h2>

        <p class="text-gray-300 mb-4">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="text-sm bg-gray-800 px-3 py-1 rounded-full"
          >
            {{ tech }}
          </span>
        </div>

        <ul class="text-sm text-gray-400 mb-6 list-disc list-inside space-y-1">
          <li v-for="point in project.highlights" :key="point">
            {{ point }}
          </li>
        </ul>

        <a
          :href="project.github"
          target="_blank"
          class="text-indigo-400 hover:underline"
        >
          GitHub →
        </a>
      </div>
    </div>
  </PageContainer>
</template>
