<template>
  <div
    class="fixed inset-0 z-[9999] grid place-items-center overflow-hidden"
    :class="leaving ? 'pointer-events-none' : ''"
    aria-label="Loading"
    role="status"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-[#070A13]" />
    <div class="absolute inset-0 bg-gradient-to-b from-[#070A13] via-[#0B1022] to-[#070A13]" />

    <!-- Blobs -->
    <div class="blob blob-a" aria-hidden="true"></div>
    <div class="blob blob-b" aria-hidden="true"></div>

    <!-- Noise -->
    <div class="noise" aria-hidden="true"></div>

    <!-- Content -->
    <div class="relative w-full max-w-md px-6">
      <div class="glass">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="mark" aria-hidden="true">
              <span>BP</span>
            </div>
            <div>
              <p class="name">Bhumil Parate</p>
              <p class="sub">Loading portfolio…</p>
            </div>
          </div>

          <div class="pulse-dot" aria-hidden="true"></div>
        </div>

        <!-- Progress -->
        <div class="mt-5">
          <div class="track">
            <div class="bar" :style="{ width: `${progress}%` }"></div>
          </div>
          <div class="mt-2 flex items-center justify-between text-xs text-white/55">
            <span>{{ hint }}</span>
            <span>{{ Math.min(99, Math.round(progress)) }}%</span>
          </div>
        </div>
      </div>

      <p class="mt-5 text-center text-xs text-white/45">
        Tip: Press <span class="kbd">Ctrl</span> + <span class="kbd">K</span> to search projects (coming soon)
      </p>
    </div>

    <!-- fade out -->
    <div class="fade" :class="leaving ? 'fade-out' : ''" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits<{ (e: 'done'): void }>()
const progress = ref(12)
const leaving = ref(false)
const hint = ref('Booting UI')

const hints = ['Booting UI', 'Loading components', 'Preparing routes', 'Almost there']

function tickTo(target: number, ms: number) {
  const start = progress.value
  const diff = target - start
  const startAt = performance.now()

  const step = (now: number) => {
    const t = Math.min(1, (now - startAt) / ms)
    // easeOutCubic
    const eased = 1 - Math.pow(1 - t, 3)
    progress.value = start + diff * eased
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(async () => {
  // animate hints
  let i = 0
  const hintTimer = window.setInterval(() => {
    i = (i + 1) % hints.length
    hint.value = hints[i]
  }, 2020)

  // quick “realistic” progress (don’t overfake)
  tickTo(55, 520)
  tickTo(82, 720)

  // wait for fonts (if supported) + minimum time so it looks premium
  const minDelay = new Promise((r) => setTimeout(r, 900))
  const fontsReady =
    (document as any).fonts?.ready?.catch?.(() => null) ?? Promise.resolve(null)

  await Promise.all([minDelay, fontsReady])

  tickTo(100, 380)
  window.clearInterval(hintTimer)

  // exit
  leaving.value = true
  setTimeout(() => emit('done'), 320)
})
</script>

<style scoped>
.blob {
  position: absolute;
  width: 620px;
  height: 620px;
  border-radius: 9999px;
  filter: blur(60px);
  opacity: 0.28;
  transform: translateZ(0);
  animation: float 6.5s ease-in-out infinite;
}
.blob-a {
  left: 50%;
  top: -220px;
  transform: translateX(-50%);
  background: radial-gradient(circle at 30% 30%, #6366f1, transparent 55%),
    radial-gradient(circle at 70% 60%, #a855f7, transparent 55%),
    radial-gradient(circle at 40% 80%, #0ea5e9, transparent 55%);
}
.blob-b {
  right: -220px;
  top: 120px;
  width: 520px;
  height: 520px;
  opacity: 0.22;
  background: radial-gradient(circle at 30% 30%, #0ea5e9, transparent 55%),
    radial-gradient(circle at 70% 60%, #6366f1, transparent 55%),
    radial-gradient(circle at 40% 80%, #a855f7, transparent 55%);
  animation-delay: 0.6s;
}

@keyframes float {
  0%, 100% { transform: translate3d(-50%, 0, 0) scale(1); }
  50% { transform: translate3d(-50%, 18px, 0) scale(1.02); }
}

.noise {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

.glass {
  border-radius: 18px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
}

.mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(199, 210, 254, 0.95);
  font-weight: 800;
  letter-spacing: 0.5px;
}

.name {
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
}
.sub {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.78rem;
  margin-top: 2px;
}

.pulse-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55);
  animation: pulse 1.2s infinite;
}
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.55); }
  70% { box-shadow: 0 0 0 12px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

.track {
  height: 10px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.10);
}
.bar {
  height: 100%;
  border-radius: 9999px;
  background: linear-gradient(90deg, #6366f1, #0ea5e9, #a855f7);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.22);
  transition: width 120ms linear;
}

.kbd {
  padding: 0.15rem 0.35rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.75);
}

.fade {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 260ms ease;
}
.fade-out {
  opacity: 1;
}
.fade.fade-out {
  background: rgba(7, 10, 19, 0.9);
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .blob, .pulse-dot { animation: none !important; }
  .bar { transition: none !important; }
}
</style>
