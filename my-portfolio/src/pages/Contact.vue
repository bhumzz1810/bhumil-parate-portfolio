<template>
  <section class="min-h-screen relative overflow-hidden isolate">
    <!-- Background (match Home/Resume) -->
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-b from-[#070A13] via-[#0B1022] to-[#070A13]" />

      <div
        class="pointer-events-none absolute -top-52 left-1/2 h-[560px] w-[560px] sm:h-[640px] sm:w-[640px]
               -translate-x-1/2 rounded-full blur-3xl opacity-25
               bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500"
      />

      <div
        class="pointer-events-none absolute top-28 right-[-140px] h-[420px] w-[420px]
               rounded-full blur-3xl opacity-20
               bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500"
      />
    </div>

    <div class="px-4 xs:px-5 sm:px-6 py-12 sm:py-16">
      <div class="max-w-5xl mx-auto">
        <!-- Header -->
        <header class="mb-8 sm:mb-10">
          <p
            class="inline-flex items-center gap-2 text-xs text-gray-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur"
          >
            <span class="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
            Open to Full-Time • Canada (Open Work Permit)
          </p>

          <h1 class="mt-4 text-3xl sm:text-4xl font-bold text-white">Contact</h1>

          <p class="mt-2 text-gray-300/80 max-w-2xl leading-relaxed">
            I’m open to full-time opportunities as a Full Stack Developer. Reach out to discuss roles, projects, or
            collaborations.
          </p>
        </header>

        <!-- Cards -->
        <div class="grid gap-5 sm:gap-6 md:grid-cols-2">
          <!-- Email -->
          <div class="card">
            <div class="flex items-center gap-3">
              <span class="ic" aria-hidden="true" v-html="icons.mail"></span>
              <div>
                <p class="label">Email</p>
                <a
                  href="mailto:bhumilparate944@gmail.com"
                  class="value-link"
                >
                  bhumilparate944@gmail.com
                </a>
              </div>
            </div>

            <p class="hint">Best for interview scheduling & detailed conversations.</p>
          </div>

          <!-- Phone -->
          <div class="card">
            <div class="flex items-center gap-3">
              <span class="ic" aria-hidden="true" v-html="icons.phone"></span>
              <div>
                <p class="label">Phone</p>
                <a href="tel:+13828853109" class="value-link">
                  +1 (382) 885-3109
                </a>
              </div>
            </div>

            <p class="hint">Quick call/voicemail. Weekdays preferred.</p>
          </div>

          <!-- LinkedIn -->
          <div class="card">
            <div class="flex items-center gap-3">
              <span class="ic" aria-hidden="true" v-html="icons.linkedin"></span>
              <div>
                <p class="label">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/bhumilparate/"
                  target="_blank"
                  rel="noopener"
                  class="value-link"
                >
                  linkedin.com/in/bhumilparate
                </a>
              </div>
            </div>

            <p class="hint">Connect + message for opportunities.</p>
          </div>

          <!-- GitHub -->
          <div class="card">
            <div class="flex items-center gap-3">
              <span class="ic" aria-hidden="true" v-html="icons.github"></span>
              <div>
                <p class="label">GitHub</p>
                <a
                  href="https://github.com/bhumzz1810"
                  target="_blank"
                  rel="noopener"
                  class="value-link"
                >
                  github.com/bhumzz1810
                </a>
              </div>
            </div>

            <p class="hint">Code samples, projects, and commits.</p>
          </div>
        </div>

        <!-- CTA strip -->
        <div class="mt-8 sm:mt-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6">
          <h2 class="text-white font-semibold text-lg">Prefer email?</h2>
          <p class="mt-1 text-gray-300/80">
            Share the job description and your timeline — I’ll reply with availability and relevant project links.
          </p>

          <div class="mt-4 flex flex-col xs:flex-row gap-3">
            <a
              href="mailto:bhumilparate944@gmail.com?subject=Full%20Stack%20Developer%20Opportunity&body=Hi%20Bhumil%2C%0A%0AWe%20would%20like%20to%20discuss%20a%20role.%0A%0AJob%20link%3A%20%0ATimeline%3A%20%0A%0AThanks%2C"
              class="w-full xs:w-auto text-center bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium transition
                     shadow-[0_8px_30px_rgba(99,102,241,0.25)]
                     focus:outline-none focus:ring-2 focus:ring-indigo-300/70"
            >
              Email Me
            </a>

            <a
              href="/projects"
              class="w-full xs:w-auto text-center bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-lg text-gray-100 transition backdrop-blur
                     focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const icons = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/>
  </svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/>
  </svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h4v16H4z"/><path d="M6 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
    <path d="M10 10v10h4v-6a2 2 0 1 1 4 0v6h2V13a5 5 0 0 0-9-3z"/>
  </svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.1c0-.9.3-1.5.8-2-2.7-.3-5.5-1.3-5.5-6A4.6 4.6 0 0 1 6.5 5.7a4.3 4.3 0 0 1 .1-3.1s1-.3 3.3 1.2a11.4 11.4 0 0 1 6.2 0C18.4 2.3 19.4 2.6 19.4 2.6a4.3 4.3 0 0 1 .1 3.1A4.6 4.6 0 0 1 20.7 11c0 4.7-2.8 5.7-5.5 6 .5.5.8 1.1.8 2V22"/>
  </svg>`,
}
</script>

<style scoped>
.card {
  border-radius: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
}

.ic {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  color: rgba(199, 210, 254, 0.95);
}

.ic :deep(svg) {
  width: 20px;
  height: 20px;
}

.label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 0.2rem;
}

.value-link {
  color: rgba(199, 210, 254, 0.95);
  text-decoration: none;
  font-size: 1.05rem;
  line-height: 1.35;
}

.value-link:hover {
  text-decoration: underline;
}

.hint {
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
}
</style>
