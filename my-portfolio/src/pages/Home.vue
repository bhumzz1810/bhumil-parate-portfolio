<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import InfiniteMarquee from '@/components/InfiniteMarquee.vue'
import { trackClick } from '@/lib/analytics'

/* =========================
   SEO
   ========================= */
const SITE_URL = 'https://bhumil-parate-portfolio.vercel.app'
const OG_IMAGE = `${SITE_URL}/og/home.png`
const CANONICAL = `${SITE_URL}/`
const TITLE = 'Bhumil Parate — Full Stack Developer (Java, Spring Boot, Microservices, React)'
const DESCRIPTION =
  'Full Stack Developer with 3+ years building scalable microservices using Java 17, Spring Boot, Spring Cloud, and React.js with expertise in AWS, Azure, Docker, Kubernetes, and distributed systems.'

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
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Bhumil Parate',
      url: SITE_URL,
      jobTitle: 'Full Stack Developer',
      sameAs: [
        'https://www.linkedin.com/in/bhumilparate/',
        'https://github.com/bhumzz1810',
      ],
    }),
  }],
})

/* =========================
   Animated counters
   ========================= */
type Stat = { target: number; suffix: string; label: string; sub: string }
const statsData: Stat[] = [
  { target: 3,  suffix: '+',  label: 'Years Exp.',       sub: 'Production systems' },
  { target: 35, suffix: '%',  label: 'Grid Reliability', sub: 'Siemens IoT platform' },
  { target: 40, suffix: '%',  label: 'Faster APIs',      sub: 'Spring Boot microservices' },
  { target: 30, suffix: '%',  label: 'Less Downtime',    sub: 'AWS + Kubernetes' },
]
const counts = ref(statsData.map(() => 0))
const statsRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function animateCounters() {
  const duration = 1600
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    // easeOutExpo
    const ease = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    counts.value = statsData.map(s => Math.round(ease * s.target))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    entries => { if (entries[0]?.isIntersecting) { animateCounters(); observer?.disconnect() } },
    { threshold: 0.4 }
  )
  if (statsRef.value) observer.observe(statsRef.value)
})
onUnmounted(() => observer?.disconnect())

/* =========================
   Marquee rows
   ========================= */
const marqueeRow1 = [
  'Java 17', 'Spring Boot', 'Spring Cloud', 'Hibernate / JPA',
  'Apache Kafka', 'Kubernetes', 'Docker', 'REST APIs',
  'Microservices', 'AWS', 'Microsoft Azure', 'CI/CD Pipelines',
]
const marqueeRow2 = [
  'PostgreSQL', 'MySQL', 'MongoDB', 'React.js', 'TypeScript',
  'Spring Security', 'OAuth2 / JWT', 'JUnit / Mockito',
  'GitHub Actions', 'Jenkins', 'JIRA / Agile', 'CloudWatch',
]

/* =========================
   Spotlight skill cards
   ========================= */
const cards = [
  {
    key: 'backend',
    accent: 'indigo',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h.01M11 8h.01M15 8h.01"/></svg>`,
    title: 'Backend',
    sub: 'Spring Boot • Spring Cloud • MVC',
    bullets: ['Microservices architecture & REST API design', 'Hibernate, JPA & distributed data patterns', 'Service discovery & API gateway patterns'],
  },
  {
    key: 'distributed',
    accent: 'sky',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M9.3 17.5L7 13M14.7 17.5L17 13M9.5 17.5h5"/></svg>`,
    title: 'Distributed Systems',
    sub: 'Kafka • Event-Driven • Microservices',
    bullets: ['Apache Kafka real-time data streaming', 'Event-driven architecture & CQRS', 'Service mesh & distributed tracing'],
  },
  {
    key: 'databases',
    accent: 'purple',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5"/><path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"/></svg>`,
    title: 'Databases',
    sub: 'PostgreSQL • MySQL • MongoDB',
    bullets: ['SQL query optimization & indexing', 'NoSQL data modeling & aggregation', 'Transactional consistency & tuning'],
  },
  {
    key: 'frontend',
    accent: 'sky',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: 'Frontend',
    sub: 'React.js • TypeScript • HTML5 • CSS3',
    bullets: ['Responsive dashboards & component systems', 'API-integrated React.js applications', 'TypeScript-first development'],
  },
  {
    key: 'cloud',
    accent: 'indigo',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18h10a4 4 0 0 0 .49-7.97A5 5 0 0 0 7.1 8.61 3.5 3.5 0 0 0 7 18z"/></svg>`,
    title: 'Cloud & DevOps',
    sub: 'AWS • Azure • Docker • Kubernetes',
    bullets: ['AWS (EC2, S3, RDS, Lambda) deployments', 'Microsoft Azure App Services & Blob Storage', 'Docker containers & Kubernetes orchestration'],
  },
  {
    key: 'security',
    accent: 'purple',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z"/><path d="M9 12l2 2 4-5"/></svg>`,
    title: 'Security & Testing',
    sub: 'Spring Security • OAuth2 • JWT • JUnit',
    bullets: ['Spring Security with OAuth2 & JWT auth', 'JUnit, Mockito & Selenium test suites', 'API testing with Postman & CI pipelines'],
  },
]

/* Spotlight refs per card */
const cardRefs = ref<(HTMLElement | null)[]>(cards.map(() => null))

function setCardRef(el: unknown, i: number) {
  cardRefs.value[i] = (el as HTMLElement) ?? null
}
function onCardMove(e: MouseEvent, i: number) {
  const el = cardRefs.value[i]
  if (!el) return
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--sp-x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--sp-y', `${e.clientY - rect.top}px`)
  el.style.setProperty('--sp-opacity', '1')
}
function onCardLeave(i: number) {
  cardRefs.value[i]?.style.setProperty('--sp-opacity', '0')
}

/* Accent color maps */
const accentBg: Record<string, string> = {
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300 group-hover:bg-indigo-500/18',
  sky:    'bg-sky-500/10 border-sky-500/20 text-sky-300 group-hover:bg-sky-500/18',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-300 group-hover:bg-purple-500/18',
}
const accentBar: Record<string, string> = {
  indigo: 'from-indigo-500/60 to-purple-500/40',
  sky:    'from-sky-500/60 to-indigo-500/40',
  purple: 'from-purple-500/60 to-pink-500/40',
}

function trackHomeClick(label: string, destination: string) {
  trackClick(label, 'home', destination)
}
</script>

<template>
  <div class="min-h-screen">
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
      Skip to content
    </a>

    <main id="main">

      <!-- ================================================
           HERO
           ================================================ -->
      <section class="relative overflow-hidden isolate min-h-[92vh] flex items-center" aria-label="Introduction">

        <!-- Static hero gradient — no blur, no animation, no GPU cost -->
        <div class="absolute inset-0 hero-gradient -z-10" aria-hidden="true" />
        <!-- Dot grid overlay -->
        <div class="absolute inset-0 dot-grid opacity-35 -z-10" aria-hidden="true" />
        <!-- Fade to dark at bottom -->
        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070A13] to-transparent -z-10" aria-hidden="true" />

        <div class="relative z-10 w-full max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20">
          <div class="grid lg:grid-cols-12 gap-10 items-center">

            <!-- LEFT column -->
            <div class="lg:col-span-7 space-y-6">

              <!-- Status badge -->
              <p class="fade-up fade-delay-1 inline-flex items-center gap-2 text-xs sm:text-sm text-gray-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur w-fit">
                <span class="w-2 h-2 rounded-full bg-emerald-400" style="box-shadow: 0 0 6px rgba(52,211,153,0.7); animation: pulse 2s ease-in-out infinite;" aria-hidden="true"></span>
                Open to Full-Time &bull; Canada (Open Work Permit)
              </p>

              <!-- Name -->
              <div class="fade-up fade-delay-2">
                <h1 class="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
                  <span class="shimmer-text">Bhumil Parate</span>
                </h1>
                <p class="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold gradient-text leading-snug">
                  Full Stack Developer
                </p>
              </div>

              <!-- Description -->
              <p class="fade-up fade-delay-3 text-base sm:text-lg text-gray-300/80 max-w-lg leading-relaxed">
                Building scalable microservices with
                <span class="text-indigo-300 font-medium">Java 17 &amp; Spring Boot</span> —
                real-time pipelines via
                <span class="text-sky-300 font-medium">Apache Kafka</span>,
                cloud-native on
                <span class="text-purple-300 font-medium">AWS &amp; Azure</span>,
                secured with
                <span class="text-indigo-300 font-medium">Spring Security / OAuth2</span>.
              </p>

              <!-- CTA buttons -->
              <div class="fade-up fade-delay-4 flex flex-wrap gap-3">
                <RouterLink to="/projects"
                  class="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base font-semibold
                         text-white bg-indigo-500 hover:bg-indigo-400
                         shadow-[0_0_24px_rgba(99,102,241,0.35)] hover:shadow-[0_0_36px_rgba(99,102,241,0.5)]
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300/70"
                  @click="trackHomeClick('hero_view_projects', '/projects')"
                >
                  View Projects
                </RouterLink>

                <RouterLink to="/resume"
                  class="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base font-medium
                         text-gray-100 bg-white/6 hover:bg-white/10 border border-white/12 hover:border-white/20
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                  @click="trackHomeClick('hero_view_resume', '/resume')"
                >
                  View Resume
                </RouterLink>

                <a href="/Bhumil_Resume_Full Stack_Developer.pdf" download
                  class="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base
                         text-gray-300 hover:text-white bg-white/0 hover:bg-white/5 border border-white/10
                         transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                  @click="trackHomeClick('hero_download_resume', '/Bhumil_Resume_Full Stack_Developer.pdf')"
                >
                  <svg class="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download PDF
                </a>
              </div>

              <!-- Companies -->
              <div class="fade-up fade-delay-5 hidden lg:flex flex-col gap-1 pt-2 border-l-2 border-indigo-500/30 pl-4">
                <p class="text-xs text-gray-500 uppercase tracking-widest font-medium mb-1">Experience</p>
                <p class="text-sm text-gray-300/80">Full Stack Developer — <span class="text-white">Siemens</span>, Canada &nbsp;<span class="text-gray-500">(Aug 2025 – Present)</span></p>
                <p class="text-sm text-gray-300/80">Backend Developer — <span class="text-white">LuckiMedia</span>, India &nbsp;<span class="text-gray-500">(Jan 2021 – Dec 2023)</span></p>
              </div>
            </div>

            <!-- RIGHT column — stats + core strength -->
            <div class="lg:col-span-5 space-y-4">

              <!-- Core strength card -->
              <div class="fade-up fade-delay-3 rounded-2xl p-5 sm:p-6 bg-white/[0.06] border border-white/10
                          shadow-[0_20px_60px_rgba(0,0,0,0.35)] relative overflow-hidden">
                <!-- Top accent line -->
                <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500/60 via-sky-400/60 to-purple-500/60" />
                <p class="text-xs font-semibold text-indigo-300/70 uppercase tracking-wider">Core Strength</p>
                <p class="mt-2 text-white font-semibold text-base sm:text-lg leading-snug">
                  Microservices architecture with secure, cloud-native integrations
                </p>
                <p class="mt-2.5 text-gray-300/75 text-sm leading-relaxed">
                  Spring Boot microservices, real-time Kafka pipelines, Spring Security with OAuth2 &amp; JWT,
                  Docker &amp; Kubernetes on AWS / Azure with full CI/CD.
                </p>
              </div>

              <!-- Animated stats grid -->
              <div ref="statsRef" class="fade-up fade-delay-4 grid grid-cols-2 gap-3">
                <div
                  v-for="(stat, i) in statsData"
                  :key="stat.label"
                  class="rounded-xl p-4 bg-white/[0.05] border border-white/8 text-center relative overflow-hidden
                         hover:border-indigo-500/25 hover:bg-indigo-500/5 transition-all duration-300 group"
                >
                  <div class="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p class="text-2xl sm:text-3xl font-extrabold bg-gradient-to-br from-indigo-300 to-sky-300 bg-clip-text text-transparent tabular-nums">
                    {{ counts[i] }}{{ stat.suffix }}
                  </p>
                  <p class="mt-0.5 text-xs font-medium text-gray-300/80">{{ stat.label }}</p>
                  <p class="mt-0.5 text-xs text-gray-500">{{ stat.sub }}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <!-- ================================================
           TECH STACK MARQUEE
           ================================================ -->
      <section class="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 pb-10 sm:pb-14" aria-label="Tech stack">
        <div class="rounded-2xl bg-white/4 border border-white/8 p-5 sm:p-7 overflow-hidden">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <div>
              <h2 class="text-xl sm:text-2xl font-semibold text-white">Tech Stack</h2>
              <p class="mt-1 text-sm text-gray-400">Java-first, microservices-focused, cloud-native</p>
            </div>
            <span class="text-xs text-gray-500 tabular-nums">Backend-focused &bull; Full-stack capable</span>
          </div>

          <div class="space-y-3">
            <InfiniteMarquee :items="marqueeRow1" direction="left"  :speed="35" />
            <InfiniteMarquee :items="marqueeRow2" direction="right" :speed="28" />
          </div>
        </div>
      </section>


      <!-- ================================================
           SKILLS — Spotlight cards
           ================================================ -->
      <section class="max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 pb-24" aria-label="Skills">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white">Skills</h2>
            <p class="text-gray-400 mt-1.5">
              Java-focused backend with cloud-native expertise and modern frontend capabilities.
            </p>
          </div>
          <RouterLink
            to="/projects"
            class="text-indigo-300/80 hover:text-indigo-200 hover:underline text-sm transition-colors w-fit"
            @click="trackHomeClick('skills_see_projects', '/projects')"
          >
            See projects &rarr;
          </RouterLink>
        </div>

        <div class="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(card, i) in cards"
            :key="card.key"
            :ref="el => setCardRef(el, i)"
            class="spotlight-card rounded-2xl p-5 sm:p-6 border border-white/8 bg-white/4
                   hover:border-white/14 hover:-translate-y-1
                   transition-all duration-200 group cursor-default relative overflow-hidden"
            @mousemove="onCardMove($event, i)"
            @mouseleave="onCardLeave(i)"
          >
            <!-- Top color bar -->
            <div :class="`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accentBar[card.accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`" />

            <div class="flex items-center gap-3">
              <span
                :class="`w-10 h-10 grid place-items-center rounded-xl border transition-colors duration-200 ${accentBg[card.accent]}`"
                v-html="card.icon"
                aria-hidden="true"
              ></span>
              <div>
                <p class="text-white font-semibold text-sm sm:text-base">{{ card.title }}</p>
                <p class="text-gray-400 text-xs mt-0.5">{{ card.sub }}</p>
              </div>
            </div>

            <ul class="mt-4 text-gray-300/80 text-sm space-y-2">
              <li v-for="b in card.bullets" :key="b" class="flex items-start gap-2">
                <span class="mt-1.5 w-1 h-1 rounded-full bg-indigo-400/60 flex-shrink-0" aria-hidden="true"></span>
                {{ b }}
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<style scoped>
/* Pulsing green dot for status */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
