<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

/**
 * ✅ TS-safe props:
 * - every optional prop has a default (withDefaults)
 * - anything bound to :src / :style is ALWAYS a string
 */
const props = withDefaults(
  defineProps<{
    /** Control visibility from parent */
    show?: boolean

    /** How long to keep splash on screen (ms) */
    durationMs?: number

    /** Extra delay before fade-out (ms) */
    minVisibleMs?: number

    /** Optional logo/image (can be omitted safely) */
    logoSrc?: string

    /** Optional text */
    title?: string
    subtitle?: string
  }>(),
  {
    show: true,
    durationMs: 1300, // overall feel (animation pacing)
    minVisibleMs: 1100, // ✅ makes it slower (stays visible)
    logoSrc: '', // ✅ always a string
    title: 'Loading',
    subtitle: 'Preparing experience…',
  }
)

const emit = defineEmits<{
  (e: 'done'): void
}>()

const isVisible = ref(false)
const isLeaving = ref(false)

const safeLogoSrc = computed(() => props.logoSrc ?? '') // ✅ always string
const safeTitle = computed(() => props.title ?? 'Loading')
const safeSubtitle = computed(() => props.subtitle ?? 'Preparing experience…')

// A simple progress animation (CSS handles it), but we keep timing consistent
onMounted(() => {
  // show immediately
  isVisible.value = props.show

  // keep it visible for at least minVisibleMs, then fade out
  const min = Math.max(300, props.minVisibleMs)
  const fadeMs = 520

  window.setTimeout(() => {
    isLeaving.value = true
  }, min)

  window.setTimeout(() => {
    isVisible.value = false
    emit('done')
  }, min + fadeMs)
})
</script>

<template>
  <transition name="splash">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[99999] grid place-items-center overflow-hidden"
      aria-label="Loading screen"
      role="status"
    >
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#050712] via-[#070A13] to-[#050712]" />

      <!-- Glow blobs -->
      <div
        class="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30
               bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500"
      />
      <div
        class="pointer-events-none absolute bottom-[-160px] right-[-160px] h-[420px] w-[420px] rounded-full blur-3xl opacity-20
               bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500"
      />

      <!-- Card -->
      <div
        class="relative mx-4 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur
               shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
        :class="{ 'splash-leave': isLeaving }"
      >
        <div class="flex items-center gap-4">
          <!-- Logo (optional) -->
          <div
            class="h-12 w-12 shrink-0 rounded-2xl border border-white/10 bg-white/5 grid place-items-center overflow-hidden"
          >
            <img
              v-if="safeLogoSrc"
              :src="safeLogoSrc"
              alt="Logo"
              class="h-10 w-10 object-contain"
            />
            <!-- Fallback icon -->
            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 text-indigo-200"
              aria-hidden="true"
            >
              <path d="M12 2l7 4v6c0 6-3 10-7 12-4-2-7-6-7-12V6l7-4z" />
              <path d="M9 12l2 2 4-5" />
            </svg>
          </div>

          <div class="min-w-0">
            <p class="text-white font-semibold text-lg leading-tight">
              {{ safeTitle }}
              <span class="dots" aria-hidden="true"></span>
            </p>
            <p class="mt-1 text-sm text-gray-300/80">
              {{ safeSubtitle }}
            </p>
          </div>
        </div>

        <!-- Progress bar -->
        <div class="mt-6">
          <div class="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div class="h-full w-full progress-bar"></div>
          </div>

          <div class="mt-3 flex items-center justify-between text-xs text-gray-300/70">
            <span>Optimizing assets</span>
            <span class="pulse">Please wait</span>
          </div>
        </div>
      </div>

      <!-- subtle grain -->
      <div class="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay grain" />
    </div>
  </transition>
</template>

<style scoped>
/* Transition in/out */
.splash-enter-active,
.splash-leave-active {
  transition: opacity 520ms ease;
}
.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}

/* Make exit feel premium */
.splash-leave {
  transition: transform 520ms ease, opacity 520ms ease;
  transform: translateY(6px) scale(0.99);
  opacity: 0.95;
}

/* Animated progress */
.progress-bar {
  background: linear-gradient(
    90deg,
    rgba(99, 102, 241, 0.25),
    rgba(56, 189, 248, 0.35),
    rgba(168, 85, 247, 0.30)
  );
  transform: translateX(-100%);
  animation: progress 1250ms ease-in-out forwards;
}

/* Dots after Loading */
.dots::after {
  content: '...';
  animation: dots 900ms steps(4, end) infinite;
}

.pulse {
  animation: pulse 900ms ease-in-out infinite;
}

/* Grain overlay */
.grain {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  85% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes dots {
  0% {
    content: '';
  }
  25% {
    content: '.';
  }
  50% {
    content: '..';
  }
  75% {
    content: '...';
  }
  100% {
    content: '';
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.65;
  }
  50% {
    opacity: 1;
  }
}
</style>
