<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { TechIconMap, type TechName } from '../icons/tech-icons'

/* =========================
   SEO
   ========================= */
const SITE_URL = 'https://bhumil-parate-portfolio.vercel.app'
const OG_IMAGE = `${SITE_URL}/og/home.png`
const CANONICAL = `${SITE_URL}/`

const PERSON_NAME = 'Bhumil Parate'
const TITLE = `${PERSON_NAME} — Full Stack Developer (Laravel, PHP, Vue, React)`
const DESCRIPTION =
  'Backend-focused full stack developer building Laravel APIs, integrations, and payment workflows with modern UI exposure in Vue/React.'

useHead({
  title: TITLE,
  meta: [
    { name: 'description', content: DESCRIPTION },
    { name: 'robots', content: 'index,follow' },

    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESCRIPTION },
    { property: 'og:url', content: CANONICAL },
    { property: 'og:image', content: OG_IMAGE },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: TITLE },
    { name: 'twitter:description', content: DESCRIPTION },
    { name: 'twitter:image', content: OG_IMAGE },
  ],
  link: [{ rel: 'canonical', href: CANONICAL }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: PERSON_NAME,
        url: SITE_URL,
        jobTitle: 'Full Stack Developer',
        sameAs: [
          'https://www.linkedin.com/in/bhumilparate/',
          'https://github.com/bhumzz1810',
        ],
      }),
    },
  ],
})

/* =========================
   Skills icons (cards)
   ========================= */
const icons = {
  backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 7h16M7 7v10M17 7v10"/><path d="M6 17h12"/><path d="M9 10h.01M12 10h.01M15 10h.01"/>
  </svg>`,
  api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 6h8M8 10h8M8 14h5"/><path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
  </svg>`,
  db: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/>
    <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>
  </svg>`,
  frontend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/>
  </svg>`,
  cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A5 5 0 0 0 7.1 8.6 3.5 3.5 0 0 0 7 18z"/>
  </svg>`,
  security: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"/><path d="M9 12l2 2 4-5"/>
  </svg>`,
}

/* =========================
   Tech stack categories
   ========================= */
const techCategories = computed(() => [
  {
    key: 'languages',
    title: 'Languages',
    items: ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python (Basic)', 'Java (Basic)'],
  },
  {
    key: 'backend',
    title: 'Backend & Runtime',
    items: ['Laravel', 'Node.js', 'Express.js', 'jQuery'],
  },
  {
    key: 'frontend',
    title: 'UI & State',
    items: ['Vue', 'React', 'Redux'],
  },
  {
    key: 'css',
    title: 'CSS / UI Frameworks',
    items: ['Tailwind', 'Bootstrap', 'Sass'],
  },
  {
    key: 'db',
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'],
  },
  {
    key: 'devops',
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Nginx', 'GitHub Actions'],
  },
  {
    key: 'vcs',
    title: 'Version Control',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    key: 'hosting',
    title: 'Hosting / Deployment',
    items: ['Vercel', 'Netlify', 'Render', 'Heroku', 'cPanel Admin', 'Hostinger'],
  },
])

const iconForTech = (name: string) => TechIconMap[name as TechName] ?? null

/* =========================
   Copy blocks
   ========================= */
const strengths = computed(() => ({
  headline: 'API-first backend systems with secure integrations',
  text:
    'Payments (Stripe/PayPal), third-party APIs (Shopify/Amazon), database design, performance tuning, and deployments (AWS/Docker/Nginx).',
}))
</script>

<template>
  <div class="min-h-screen">
    <!-- Skip link -->
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
             focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
    >
      Skip to content
    </a>

    <main id="main">
      <!-- HERO -->
      <section class="relative overflow-hidden isolate" aria-label="Introduction">
        <!-- Background (stable layers) -->
        <div class="absolute inset-0 z-0" aria-hidden="true">
          <div class="absolute inset-0 bg-gradient-to-b from-[#070A13] via-[#0B1022] to-[#070A13]" />

          <div
            class="pointer-events-none absolute -top-56 sm:-top-52 left-1/2 h-[520px] w-[520px] sm:h-[620px] sm:w-[620px]
                   -translate-x-1/2 rounded-full blur-3xl opacity-35
                   bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500"
          />
          <div
            class="pointer-events-none absolute top-16 sm:top-24 right-[-180px] sm:right-[-120px]
                   h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]
                   rounded-full blur-3xl opacity-25
                   bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500"
          />
        </div>

        <div class="relative z-10 max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 pt-16 sm:pt-20 pb-10 sm:pb-14">
          <div class="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start lg:items-center">
            <!-- Left -->
            <div class="lg:col-span-7">
              <p
                class="fade-up fade-delay-1 inline-flex items-center gap-2 text-xs sm:text-sm text-gray-200/90
                       bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur"
              >
                <span class="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
                Open to Full-Time • Canada (Open Work Permit)
              </p>

              <h1
                class="fade-up fade-delay-2 mt-5 sm:mt-6 text-3xl xs:text-4xl sm:text-5xl md:text-6xl
                       font-bold leading-tight text-white"
              >
                Bhumil Parate
                <span
                  class="block mt-2 bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300
                         bg-clip-text text-transparent"
                >
                  Full Stack Developer
                </span>
              </h1>

              <p
                class="fade-up fade-delay-3 mt-4 sm:mt-5 text-sm xs:text-base sm:text-lg
                       text-gray-200/80 max-w-xl leading-relaxed"
              >
                Backend-focused developer building Laravel APIs, integrations, and payment workflows —
                with modern UI exposure in Vue/React.
              </p>

              <!-- Buttons (NOT wide on desktop) -->
              <div class="fade-up fade-delay-4 mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
                <RouterLink
                  to="/projects"
                  class="inline-flex w-full sm:w-auto items-center justify-center
                         rounded-xl px-6 py-3 text-sm sm:text-base font-semibold
                         text-white bg-indigo-500 hover:bg-indigo-600
                         shadow-[0_10px_30px_rgba(99,102,241,0.28)]
                         focus:outline-none focus:ring-2 focus:ring-indigo-300/70"
                >
                  View Projects
                </RouterLink>

                <RouterLink
                  to="/resume"
                  class="inline-flex w-full sm:w-auto items-center justify-center
                         rounded-xl px-6 py-3 text-sm sm:text-base font-medium
                         text-gray-100 bg-white/5 hover:bg-white/10 border border-white/10
                         focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  View Resume
                </RouterLink>

                <a
                  href="/Bhumil_Resume_Full Stack_Developer.pdf"
                  download
                  class="inline-flex w-full sm:w-auto items-center justify-center
                         rounded-xl px-6 py-3 text-sm sm:text-base
                         text-gray-200/90 hover:text-white
                         bg-white/0 hover:bg-white/5 border border-white/10
                         transition focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Download PDF
                </a>
              </div>

              <div class="fade-up fade-delay-5 mt-8 sm:mt-10 text-sm text-gray-300/80 leading-relaxed hidden lg:block">
                • Full Stack Developer — Siemens, Canada (Aug 2025 – Present) <br />
                • Backend Developer — LuckiMedia, India (Jan 2021 – Dec 2023)
              </div>
            </div>

            <!-- Right -->
            <div class="lg:col-span-5">
              <div
                class="fade-up fade-delay-3 rounded-2xl p-5 sm:p-6 bg-white/5 border border-white/10 backdrop-blur
                       shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              >
                <p class="text-sm text-gray-300/80">Core Strength</p>
                <p class="mt-2 text-white font-semibold text-base sm:text-lg">
                  {{ strengths.headline }}
                </p>
                <p class="mt-3 text-gray-200/80 text-sm leading-relaxed">
                  {{ strengths.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TECH STACK -->
      <section class="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 pb-10 sm:pb-14" aria-label="Tech stack">
        <div class="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5 sm:p-6">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div>
              <h2 class="text-xl sm:text-2xl font-semibold text-white">Tech Stack</h2>
              <p class="mt-1 text-sm text-gray-300/80">
                Categorized and icon-based for fast scanning.
              </p>
            </div>
            <span class="text-xs text-gray-400/80 sm:text-right">Backend-focused • Full-stack</span>
          </div>

          <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              v-for="cat in techCategories"
              :key="cat.key"
              class="rounded-2xl bg-white/4 border border-white/10 p-4 sm:p-5"
            >
              <p class="text-sm font-semibold text-white">{{ cat.title }}</p>

              <div class="mt-3 flex flex-wrap gap-2">
                <span v-for="t in cat.items" :key="t" class="tech-pill" :title="t">
                  <span class="tech-logo tech-logo--mono text-gray-100 dark:text-gray-100 light:text-gray-900" aria-hidden="true">
                    <component :is="iconForTech(t)" v-if="iconForTech(t)" class="tech-svg" />
                    <span v-else class="fallback-dot"></span>
                  </span>
                  <span class="truncate max-w-[150px]">{{ t }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SKILLS -->
      <section class="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 pb-20 sm:pb-24" aria-label="Skills">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-7 sm:mb-8">
          <div>
            <h2 class="text-2xl sm:text-3xl font-semibold text-white">Skills</h2>
            <p class="text-gray-300/80 mt-2">
              Resume-aligned strengths — clean backend, reliable integrations, and modern UI exposure.
            </p>
          </div>

          <RouterLink
            to="/projects"
            class="text-indigo-300 hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300/60 rounded w-fit"
          >
            See projects →
          </RouterLink>
        </div>

        <div class="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="fade-up fade-delay-1 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur">
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                v-html="icons.backend"
                aria-hidden="true"
              ></span>
              <div>
                <p class="text-white font-semibold">Backend</p>
                <p class="text-gray-300/70 text-sm">Laravel • MVC • OOP</p>
              </div>
            </div>
            <ul class="mt-4 text-gray-200/85 text-sm space-y-2 list-disc list-inside">
              <li>RESTful API development</li>
              <li>Middleware & API versioning</li>
              <li>Scalable service patterns</li>
            </ul>
          </div>

          <div class="fade-up fade-delay-2 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur">
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                v-html="icons.api"
                aria-hidden="true"
              ></span>
              <div>
                <p class="text-white font-semibold">Integrations</p>
                <p class="text-gray-300/70 text-sm">Stripe • PayPal • Shopify • Amazon</p>
              </div>
            </div>
            <ul class="mt-4 text-gray-200/85 text-sm space-y-2 list-disc list-inside">
              <li>Webhook validation</li>
              <li>Payment state management</li>
              <li>Data synchronization</li>
            </ul>
          </div>

          <div class="fade-up fade-delay-3 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur">
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                v-html="icons.db"
                aria-hidden="true"
              ></span>
              <div>
                <p class="text-white font-semibold">Databases</p>
                <p class="text-gray-300/70 text-sm">MySQL • MongoDB</p>
              </div>
            </div>
            <ul class="mt-4 text-gray-200/85 text-sm space-y-2 list-disc list-inside">
              <li>Schema design & optimization</li>
              <li>NoSQL data modeling</li>
              <li>Performance tuning</li>
            </ul>
          </div>

          <div class="fade-up fade-delay-2 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur">
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                v-html="icons.frontend"
                aria-hidden="true"
              ></span>
              <div>
                <p class="text-white font-semibold">Frontend</p>
                <p class="text-gray-300/70 text-sm">Vue • React</p>
              </div>
            </div>
            <ul class="mt-4 text-gray-200/85 text-sm space-y-2 list-disc list-inside">
              <li>Admin dashboards</li>
              <li>Responsive UI development</li>
              <li>Component-based approach</li>
            </ul>
          </div>

          <div class="fade-up fade-delay-3 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur">
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                v-html="icons.cloud"
                aria-hidden="true"
              ></span>
              <div>
                <p class="text-white font-semibold">Cloud & DevOps</p>
                <p class="text-gray-300/70 text-sm">AWS • Docker • Nginx • CI/CD</p>
              </div>
            </div>
            <ul class="mt-4 text-gray-200/85 text-sm space-y-2 list-disc list-inside">
              <li>Containerized deployments</li>
              <li>AWS fundamentals</li>
              <li>Nginx routing concepts</li>
            </ul>
          </div>

          <div class="fade-up fade-delay-4 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur">
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 text-indigo-200"
                v-html="icons.security"
                aria-hidden="true"
              ></span>
              <div>
                <p class="text-white font-semibold">Security & Quality</p>
                <p class="text-gray-300/70 text-sm">Testing • Secure design</p>
              </div>
            </div>
            <ul class="mt-4 text-gray-200/85 text-sm space-y-2 list-disc list-inside">
              <li>Unit / integration / API testing</li>
              <li>Secure configuration basics</li>
              <li>Release support & debugging</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* -------------------------
   Tech pills
   ------------------------- */
.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  line-height: 1;
  padding: 0.5rem 0.65rem;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.86);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
  max-width: 100%;
}
.tech-pill:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.16);
}

.tech-logo {
  width: 18px;
  height: 18px;
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
}
.tech-svg {
  width: 18px;
  height: 18px;
}
.tech-svg :deep(svg) {
  width: 18px;
  height: 18px;
}

.fallback-dot {
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: rgba(199, 210, 254, 0.9);
}

/* Ultra-small devices: avoid chip overflow */
@media (max-width: 360px) {
  .tech-pill {
    font-size: 0.74rem;
    padding: 0.48rem 0.58rem;
  }
}
</style>
