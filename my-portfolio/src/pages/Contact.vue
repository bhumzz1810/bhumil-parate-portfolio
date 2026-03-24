<script setup lang="ts">
import { trackClick } from '@/lib/analytics'

function onCardMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--sp-x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--sp-y', `${e.clientY - rect.top}px`)
  el.style.setProperty('--sp-opacity', '1')
}
function onCardLeave(e: MouseEvent) {
  ;(e.currentTarget as HTMLElement).style.setProperty('--sp-opacity', '0')
}

const contacts = [
  {
    key: 'email',
    label: 'Email',
    value: 'bhumilparate944@gmail.com',
    href: 'mailto:bhumilparate944@gmail.com',
    hint: 'Best for interview scheduling & detailed conversations.',
    accent: 'indigo',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
    </svg>`,
    external: false,
  },
  {
    key: 'phone',
    label: 'Phone',
    value: '+1 (382) 885-3109',
    href: 'tel:+13828853109',
    hint: 'Quick call or voicemail. Weekdays preferred.',
    accent: 'sky',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/>
    </svg>`,
    external: false,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhumilparate',
    href: 'https://www.linkedin.com/in/bhumilparate/',
    hint: 'Connect and message for opportunities.',
    accent: 'sky',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 1 1 4 0v4M11 10v7"/>
    </svg>`,
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'github.com/bhumzz1810',
    href: 'https://github.com/bhumzz1810',
    hint: 'Code samples, projects, and commit history.',
    accent: 'purple',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.1c0-.9.3-1.5.8-2-2.7-.3-5.5-1.3-5.5-6A4.6 4.6 0 0 1 6.5 5.7a4.3 4.3 0 0 1 .1-3.1s1-.3 3.3 1.2a11.4 11.4 0 0 1 6.2 0C18.4 2.3 19.4 2.6 19.4 2.6a4.3 4.3 0 0 1 .1 3.1A4.6 4.6 0 0 1 20.7 11c0 4.7-2.8 5.7-5.5 6 .5.5.8 1.1.8 2V22"/>
    </svg>`,
    external: true,
  },
]

const accentIcon: Record<string, string> = {
  indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
  sky:    'bg-sky-500/10 border-sky-500/20 text-sky-300',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
}
const accentBar: Record<string, string> = {
  indigo: 'from-indigo-500/50 to-purple-500/30',
  sky:    'from-sky-500/50 to-indigo-500/30',
  purple: 'from-purple-500/50 to-pink-500/30',
}
const accentLink: Record<string, string> = {
  indigo: 'text-indigo-200/90 hover:text-indigo-100',
  sky:    'text-sky-200/90 hover:text-sky-100',
  purple: 'text-purple-200/90 hover:text-purple-100',
}

function trackContactClick(label: string, destination: string) {
  trackClick(label, 'contact', destination)
}
</script>

<template>
  <section class="min-h-screen relative overflow-hidden isolate">
    <!-- Static gradient background — no blur animations -->
    <div class="absolute inset-0 -z-10 hero-gradient" aria-hidden="true" />
    <div class="absolute inset-0 dot-grid opacity-25 -z-10" aria-hidden="true" />
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070A13] to-transparent -z-10" aria-hidden="true" />

    <div class="px-4 xs:px-5 sm:px-6 py-12 sm:py-16">
      <div class="max-w-5xl mx-auto">

        <!-- Header -->
        <header class="mb-10 sm:mb-12">
          <p class="fade-up fade-delay-1 inline-flex items-center gap-2 text-xs text-gray-200/90
                    bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
            <span class="w-2 h-2 rounded-full bg-emerald-400" style="box-shadow:0 0 6px rgba(52,211,153,0.7)" aria-hidden="true"></span>
            Open to Full-Time &bull; Canada (Open Work Permit)
          </p>

          <h1 class="fade-up fade-delay-2 mt-5 text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Let's work<br>
            <span class="gradient-text">together.</span>
          </h1>

          <p class="fade-up fade-delay-3 mt-4 text-gray-400 max-w-xl leading-relaxed">
            Open to full-time roles as a Full Stack Developer in Canada.
            Reach out via email, phone, LinkedIn, or GitHub.
          </p>
        </header>

        <!-- Contact cards grid -->
        <div class="grid gap-4 sm:gap-5 md:grid-cols-2 mb-8">
          <a
            v-for="item in contacts"
            :key="item.key"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener' : undefined"
            class="spotlight-card group rounded-2xl p-5 sm:p-6
                   bg-white/[0.04] border border-white/8
                   hover:border-white/14 hover:-translate-y-1
                   transition-all duration-200 relative overflow-hidden block no-underline"
            @mousemove="onCardMove"
            @mouseleave="onCardLeave"
            @click="trackContactClick(`contact_${item.key}`, item.href)"
          >
            <!-- Top accent bar on hover -->
            <div
              :class="`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accentBar[item.accent]}
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300`"
              aria-hidden="true"
            />

            <div class="flex items-start gap-4">
              <!-- Icon -->
              <span
                :class="`w-11 h-11 flex-shrink-0 grid place-items-center rounded-xl border
                         transition-colors duration-200 ${accentIcon[item.accent]}`"
                v-html="item.icon"
                aria-hidden="true"
              ></span>

              <!-- Content -->
              <div class="min-w-0 flex-1">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{{ item.label }}</p>
                <p :class="`font-semibold text-base sm:text-lg truncate transition-colors duration-200 ${accentLink[item.accent]}`">
                  {{ item.value }}
                </p>
                <p class="mt-1.5 text-sm text-gray-500 leading-snug">{{ item.hint }}</p>
              </div>

              <!-- Arrow -->
              <svg
                class="w-4 h-4 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-1"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10"/>
              </svg>
            </div>
          </a>
        </div>

        <!-- CTA strip -->
        <div class="fade-up fade-delay-4 rounded-2xl relative overflow-hidden p-6 sm:p-8
                    bg-white/[0.04] border border-white/8">
          <!-- Accent top line -->
          <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500/50 via-sky-400/50 to-purple-500/50" aria-hidden="true" />

          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 class="text-xl font-bold text-white">Ready to connect?</h2>
              <p class="mt-1.5 text-gray-400 text-sm leading-relaxed max-w-md">
                Share the job description and your timeline — I'll reply promptly with availability
                and relevant project links.
              </p>
            </div>

            <div class="flex flex-col xs:flex-row gap-3 shrink-0">
              <a
                href="mailto:bhumilparate944@gmail.com?subject=Full%20Stack%20Developer%20Opportunity&body=Hi%20Bhumil%2C%0A%0AWe%20would%20like%20to%20discuss%20a%20role.%0A%0AJob%20link%3A%20%0ATimeline%3A%20%0A%0AThanks%2C"
                class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
                       text-white bg-indigo-500 hover:bg-indigo-400
                       shadow-[0_0_20px_rgba(99,102,241,0.30)] hover:shadow-[0_0_32px_rgba(99,102,241,0.45)]
                       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300/70"
                @click="trackContactClick('contact_email_cta', 'mailto:bhumilparate944@gmail.com')"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                </svg>
                Email Me
              </a>

              <a
                href="/projects"
                class="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium
                       text-gray-200 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/18
                       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                @click="trackContactClick('contact_view_projects', '/projects')"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
