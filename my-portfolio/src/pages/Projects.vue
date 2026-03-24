<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PageContainer from '@/components/PageContainer.vue'
import { projects as rawProjects } from '../data/projects'
import { trackClick } from '@/lib/analytics'

type Project = (typeof rawProjects)[number]

const qInput = ref('')
const q = ref('')
let t: number | undefined
watch(qInput, (val) => {
  window.clearTimeout(t)
  t = window.setTimeout(() => { q.value = val }, 150)
})

const filter = ref<'all' | 'featured'>('featured')
const showAll = ref(false)
watch([q, filter], () => { showAll.value = false })

const isLuckiMedia = (p: Project) =>
  (p.company ?? '').toLowerCase().includes('lucki') ||
  p.title.toLowerCase().includes('luckimedia')

type IndexedProject = Project & { __blob: string }
const projects = rawProjects.map((p) => ({
  ...p,
  __blob: [p.title, p.description, p.company ?? '', ...(p.stack ?? []), ...(p.highlights ?? [])]
    .join(' ').toLowerCase(),
})) as IndexedProject[]

const filtered = computed(() => {
  const query = q.value.trim().toLowerCase()
  return projects.filter((p) => {
    if (filter.value === 'featured' && !p.featured) return false
    if (!query) return true
    return p.__blob.includes(query)
  })
})

const visible = computed(() => {
  const list = filtered.value
  if (filter.value === 'featured') return list
  if (showAll.value) return list
  return [...list.filter(p => p.featured), ...list.filter(p => !p.featured).slice(0, 8)]
})

const featuredCount = computed(() => projects.filter(p => p.featured).length)

/* Spotlight effect for cards */
function onCardMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--sp-x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--sp-y', `${e.clientY - rect.top}px`)
  el.style.setProperty('--sp-opacity', '1')
}
function onCardLeave(e: MouseEvent) {
  (e.currentTarget as HTMLElement).style.setProperty('--sp-opacity', '0')
}

/* Company color coding */
function companyAccent(p: Project) {
  if ((p.company ?? '').includes('Siemens')) return 'siemens'
  if (isLuckiMedia(p)) return 'lucki'
  if ((p.company ?? '').toLowerCase().includes('personal')) return 'personal'
  return 'default'
}
const accentMap: Record<string, string> = {
  siemens:  'border-indigo-400/30 text-indigo-200/80 bg-indigo-500/8',
  lucki:    'border-sky-400/30 text-sky-200/80 bg-sky-500/8',
  personal: 'border-purple-400/30 text-purple-200/80 bg-purple-500/8',
  default:  'border-white/10 text-gray-300/80 bg-white/5',
}
const accentTop: Record<string, string> = {
  siemens:  'from-indigo-500/50 to-purple-500/30',
  lucki:    'from-sky-500/50 to-indigo-500/30',
  personal: 'from-purple-500/50 to-pink-500/30',
  default:  'from-white/10 to-transparent',
}

function trackProjectClick(action: string, projectTitle: string, destination: string) {
  trackClick(`${action}:${projectTitle}`, 'projects', destination)
}
</script>

<template>
  <PageContainer>

    <!-- ============================================
         HEADER
         ============================================ -->
    <section class="relative overflow-hidden isolate pb-8">
      <div class="absolute inset-0 -z-10" aria-hidden="true">
        <div class="absolute inset-0 bg-gradient-to-b from-[#070A13] via-[#0B1022] to-transparent" />
        <div class="pointer-events-none absolute -top-24 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full blur-3xl
                    opacity-20 bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500" />
      </div>

      <div class="rounded-2xl p-5 sm:p-7 bg-white/4 border border-white/8 backdrop-blur relative overflow-hidden">
        <!-- Top accent -->
        <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500/50 via-sky-400/50 to-purple-500/50" aria-hidden="true" />

        <div class="grid gap-6 md:grid-cols-[1fr,400px] md:items-end">
          <div>
            <p class="inline-flex items-center gap-2 text-xs text-gray-300/80 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span class="w-2 h-2 rounded-full bg-indigo-400" aria-hidden="true"></span>
              Projects
            </p>
            <h1 class="mt-4 text-3xl sm:text-4xl font-bold text-white">Projects</h1>
            <p class="mt-2 text-gray-400 max-w-2xl">
              Production systems, microservices, cloud deployments, and real-world integrations.
            </p>
            <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span class="chip">Total: {{ projects.length }}</span>
              <span class="chip chip--accent">Featured: {{ featuredCount }}</span>
            </div>
          </div>

          <div class="space-y-2">
            <div class="flex gap-2">
              <label class="sr-only" for="projectSearch">Search projects</label>
              <input
                id="projectSearch"
                v-model="qInput"
                type="text"
                placeholder="Search: Spring Boot, Kafka, AWS…"
                class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white
                       placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-500/30
                       transition-all duration-200"
              />
              <div class="relative shrink-0">
                <select
                  v-model="filter"
                  class="appearance-none rounded-xl bg-white/5 border border-white/10 px-3 pr-9 py-2.5 text-sm text-white
                         outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer"
                  aria-label="Filter projects"
                >
                  <option value="all">All</option>
                  <option value="featured">Featured</option>
                </select>
                <svg class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </div>
            <p class="text-xs text-gray-500">
              Showing <span class="text-gray-300 font-medium">{{ visible.length }}</span> projects
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         PROJECT GRID
         ============================================ -->
    <section class="pb-10 sm:pb-14">
      <div class="grid gap-5 sm:gap-6 md:grid-cols-2">
        <article
          v-for="project in visible"
          :key="project.id"
          class="project-card spotlight-card group rounded-2xl p-6 sm:p-7
                 bg-white/4 border border-white/8
                 hover:border-white/15 hover:-translate-y-1
                 transition-all duration-200 relative overflow-hidden"
          :class="{ 'glow-featured': project.featured }"
          @mousemove="onCardMove"
          @mouseleave="onCardLeave"
        >
          <!-- Top color accent line (visible on hover) -->
          <div
            class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            :class="accentTop[companyAccent(project)]"
            aria-hidden="true"
          />

          <!-- Badges row -->
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span
              v-if="project.featured"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-200
                     bg-indigo-500/12 border border-indigo-400/25 px-2.5 py-1 rounded-full"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true"></span>
              Featured
            </span>
            <span
              v-if="project.company"
              class="text-xs px-2.5 py-1 rounded-full border"
              :class="accentMap[companyAccent(project)]"
            >
              {{ project.company }}
            </span>
          </div>

          <!-- Title -->
          <h2 class="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-100 transition-colors duration-200">
            {{ project.title }}
          </h2>

          <!-- Description -->
          <p class="mt-2.5 text-gray-400 leading-relaxed text-sm">{{ project.description }}</p>

          <!-- Stack pills -->
          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="inline-flex items-center text-xs px-2.5 py-1 rounded-full
                     text-gray-300/85 bg-white/5 border border-white/8
                     hover:bg-indigo-500/10 hover:border-indigo-500/25 hover:text-indigo-200
                     transition-all duration-150 cursor-default"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Highlights -->
          <ul class="mt-4 space-y-1.5">
            <li
              v-for="point in project.highlights"
              :key="point"
              class="flex items-start gap-2 text-sm text-gray-400/85"
            >
              <span class="mt-2 w-1 h-1 rounded-full bg-indigo-400/50 flex-shrink-0" aria-hidden="true"></span>
              {{ point }}
            </li>
          </ul>

          <!-- Action buttons -->
          <div class="mt-6 flex flex-wrap gap-2.5">
            <a
              v-if="project.live"
              :href="project.live"
              target="_blank"
              rel="noopener"
              class="btn-project btn-project--primary"
              @click="trackProjectClick('view_app', project.title, project.live)"
            >
              View App
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              class="btn-project btn-project--ghost"
              @click="trackProjectClick('view_github', project.title, project.github)"
            >
              GitHub
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <div
        v-if="filtered.length === 0"
        class="mt-10 rounded-2xl bg-white/4 border border-white/8 p-8 text-center text-gray-400"
      >
        <p class="text-lg font-medium text-white">No projects found</p>
        <p class="mt-1 text-sm">Try "Spring Boot", "Kafka", "AWS", or "React".</p>
      </div>
    </section>

    <!-- Show all button -->
    <div v-if="filtered.length > visible.length" class="mt-2 mb-10 flex justify-center">
      <button
        @click="showAll = true"
        @click.once="trackClick('projects_show_all', 'projects', 'show_all')"
        class="rounded-xl px-6 py-2.5 text-sm text-gray-200 bg-white/5 border border-white/10
               hover:bg-white/8 hover:border-white/16 transition-all duration-200
               focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
      >
        Show all {{ filtered.length }} projects
      </button>
    </div>

  </PageContainer>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.35rem 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: rgba(255, 255, 255, 0.6);
}
.chip--accent {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.25);
  color: rgba(199, 210, 254, 0.85);
}

.btn-project {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 0.65rem;
  padding: 0.5rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 180ms ease;
}
.btn-project--primary {
  color: rgba(199, 210, 254, 0.95);
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
}
.btn-project--primary:hover {
  background: rgba(99, 102, 241, 0.22);
  border-color: rgba(99, 102, 241, 0.45);
  transform: translateY(-1px);
}
.btn-project--ghost {
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
}
.btn-project--ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
  color: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

select { color-scheme: dark; }
select option { background: #0b1022; color: rgba(255, 255, 255, 0.92); }
</style>
