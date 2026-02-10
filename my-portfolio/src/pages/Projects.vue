<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PageContainer from '@/components/PageContainer.vue'
import { projects } from '../data/projects'

type Project = (typeof projects)[number]

const q = ref('')
const filter = ref<'all' | 'featured'>('featured') // ✅ default only featured
const showAll = ref(false)

const isLuckiMedia = (p: Project) =>
  (p.company ?? '').toLowerCase().includes('lucki media') ||
  p.title.toLowerCase().includes('lucki media')

// ✅ compute filtered first
const filtered = computed(() => {
  const query = q.value.trim().toLowerCase()

  return projects.filter((p: Project) => {
    const matchesFilter = filter.value === 'all' ? true : !!p.featured
    if (!query) return matchesFilter

    const haystack = [
      p.title,
      p.description,
      p.company ?? '',
      ...(p.stack ?? []),
      ...(p.highlights ?? []),
    ]
      .join(' ')
      .toLowerCase()

    return matchesFilter && haystack.includes(query)
  })
})

// ✅ now visible uses filtered safely
const visible = computed(() => {
  const list = filtered.value

  // If user selected "featured", never show others
  if (filter.value === 'featured') return list

  if (showAll.value) return list

  const featured = list.filter(p => p.featured)
  const others = list.filter(p => !p.featured).slice(0, 8)
  return [...featured, ...others]
})

// ✅ reset showAll whenever user changes search or filter
watch([q, filter], () => {
  showAll.value = false
})

const featuredCount = computed(() => projects.filter((p: Project) => p.featured).length)
</script>

<template>
  <PageContainer>
    <!-- Header (Home-like) -->
    <section class="relative overflow-hidden isolate">
      <div class="absolute inset-0 -z-10" aria-hidden="true">
        <div class="absolute inset-0 bg-gradient-to-b from-[#070A13] via-[#0B1022] to-transparent" />
        <div
          class="pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl
                 opacity-25 bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500"
        />
      </div>

      <div class="py-6 sm:py-10">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              class="inline-flex items-center gap-2 text-xs text-gray-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur"
            >
              <span class="w-2 h-2 rounded-full bg-indigo-400" aria-hidden="true"></span>
              Projects
            </p>

            <h1 class="mt-4 text-3xl sm:text-4xl font-bold text-white">Projects</h1>
            <p class="mt-2 text-gray-300/80 max-w-2xl">
              Real work focused on backend systems, integrations, and production-ready UI.
            </p>

            <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400/90">
              <span class="chip">Total: {{ projects.length }}</span>
              <span class="chip">Featured: {{ featuredCount }}</span>
            </div>
          </div>

          <!-- Search + Filter -->
          <div class="w-full sm:w-[380px]">
            <div class="flex gap-2">
              <label class="sr-only" for="projectSearch">Search projects</label>
              <input
                id="projectSearch"
                v-model="q"
                type="text"
                placeholder="Search: Laravel, Shopify, Stripe..."
                class="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400/70
                       outline-none focus:ring-2 focus:ring-indigo-300/60"
              />

              <!-- Dark select + chevron -->
              <div class="relative shrink-0">
                <select
                  v-model="filter"
                  class="appearance-none rounded-xl bg-white/5 border border-white/10 px-3 pr-9 py-2.5 text-sm text-white
                         outline-none focus:ring-2 focus:ring-indigo-300/60"
                  aria-label="Filter projects"
                >
                  <option value="all">All</option>
                  <option value="featured">Featured</option>
                </select>

                <svg
                  class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300/80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <p class="mt-2 text-xs text-gray-400/80">
             Showing <span class="text-gray-200">{{ visible.length }}</span>

            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid -->
    <section class="pb-10 sm:pb-14">
      <div class="grid gap-6 sm:gap-7 md:grid-cols-2">
        <article
          v-for="project in visible"
          :key="project.id"
          class="group rounded-2xl p-6 sm:p-7 bg-white/5 border border-white/10 backdrop-blur
                 shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                 transition duration-200 hover:-translate-y-1 hover:border-white/20"
        >
          <!-- Top badges -->
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span
              v-if="project.featured"
              class="inline-flex items-center gap-2 text-xs font-semibold text-indigo-200
                     bg-indigo-500/15 border border-indigo-400/20 px-2.5 py-1 rounded-full"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-300" aria-hidden="true"></span>
              Featured Project
            </span>

            <span
              v-if="isLuckiMedia(project)"
              class="text-xs uppercase tracking-wide bg-white/5 border border-white/10 text-gray-200/90 px-2.5 py-1 rounded-full"
            >
              Company Project — Lucki Media
            </span>

            <span
              v-else-if="project.company"
              class="text-xs uppercase tracking-wide bg-white/5 border border-white/10 text-gray-200/90 px-2.5 py-1 rounded-full"
            >
              {{ project.company }}
            </span>
          </div>

          <h2 class="text-xl sm:text-2xl font-semibold text-white">
            {{ project.title }}
          </h2>

          <p class="mt-3 text-gray-300/80 leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Stack -->
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="badge">
              {{ tech }}
            </span>
          </div>

          <!-- Highlights -->
          <ul class="mt-5 text-sm text-gray-300/80 list-disc list-inside space-y-1.5">
            <li v-for="point in project.highlights" :key="point">
              {{ point }}
            </li>
          </ul>

          <!-- Links (✅ includes your Lucki Media Shopify links) -->
          <div class="mt-6 flex flex-wrap gap-3">
            <a
              v-if="project.live"
              :href="project.live"
              target="_blank"
              rel="noopener"
              class="btn-link"
            >
              View App →
            </a>

            <template v-if="isLuckiMedia(project)">
              <a
                href="https://apps.shopify.com/gemfind-diamond-link-1"
                target="_blank"
                rel="noopener"
                class="btn-link"
              >
                Diamond Link →
              </a>

              <a
                href="https://apps.shopify.com/lm-add-to-cart-sticky"
                target="_blank"
                rel="noopener"
                class="btn-link"
              >
                LM Sticky Cart →
              </a>

              <a
                href="https://apps.shopify.com/lm-request-a-quote"
                target="_blank"
                rel="noopener"
                class="btn-link"
              >
                LM Request Quote →
              </a>
            </template>

            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener"
              class="btn-link"
            >
              GitHub →
            </a>
          </div>
        </article>
      </div>

      <!-- Empty state -->
      <div v-if="filtered.length === 0" class="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6 text-gray-300/80">
        No projects match your search. Try “Laravel”, “Stripe”, or “Shopify”.
      </div>
    </section>
    <div v-if="filtered.length > visible.length" class="mt-8 flex justify-center">
  <button
    @click="showAll = true"
    class="rounded-xl px-5 py-2.5 text-sm text-gray-100 bg-white/5 border border-white/10
           hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-300/60"
  >
    Show all projects ({{ filtered.length }})
  </button>
</div>
  </PageContainer>
</template>

<style scoped>
/* Small chips in header */
.chip {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.35rem 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
}

/* Stack badge (same vibe as Home) */
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: 1;
  padding: 0.45rem 0.65rem;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
}
.badge:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.16);
}

/* Link buttons (keep many links readable) */
.btn-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.55rem 0.9rem;
  font-size: 0.9rem;
  color: rgba(199, 210, 254, 0.95);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
  text-decoration: none;
}
.btn-link:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateY(-1px);
}

/* Dark select */
select {
  color-scheme: dark;
}
select option {
  background: #0b1022;
  color: rgba(255, 255, 255, 0.92);
}
select option:checked,
select option:hover {
  background: #111a33;
  color: rgba(255, 255, 255, 0.95);
}
</style>
