<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits<{ (e: 'done'): void }>()

/* ── Timing constants ──────────────────────────── */
const T_WINDOW   = 120   // terminal window fades in
const T_PROMPT   = 380   // ssh prompt appears
const T_CONNECT  = 680   // "Connecting..." line
const T_STEP_0   = 980   // step 1 appears
const T_STEP_1   = 1200  // step 2 appears
const T_STEP_2   = 1420  // step 3 appears
const T_STEP_3   = 1640  // step 4 appears
const T_PROGRESS = 1720  // progress bar starts filling
const T_WELCOME  = 2200  // "Connection established." shows
const T_EXIT     = 2700  // portal expand starts
const T_DONE     = 3200  // emit done

/* ── State ─────────────────────────────────────── */
const windowVisible  = ref(false)
const promptVisible  = ref(false)
const connectVisible = ref(false)
const visibleSteps   = ref(0)
const progressFill   = ref(0)
const welcomeVisible = ref(false)
const isExiting      = ref(false)
const isDone         = ref(false)

const steps = [
  { text: 'Verifying credentials' },
  { text: 'Loading Java 17 runtime' },
  { text: 'Starting Spring Boot context' },
  { text: 'Deploying portfolio to AWS' },
]

onMounted(() => {
  const at = (ms: number, fn: () => void) => setTimeout(fn, ms)

  at(T_WINDOW,   () => { windowVisible.value  = true  })
  at(T_PROMPT,   () => { promptVisible.value  = true  })
  at(T_CONNECT,  () => { connectVisible.value = true  })
  at(T_STEP_0,   () => { visibleSteps.value   = 1     })
  at(T_STEP_1,   () => { visibleSteps.value   = 2     })
  at(T_STEP_2,   () => { visibleSteps.value   = 3     })
  at(T_STEP_3,   () => { visibleSteps.value   = 4     })
  at(T_PROGRESS, () => {
    progressFill.value = 0
    requestAnimationFrame(() => {
      setTimeout(() => { progressFill.value = 100 }, 16)
    })
  })
  at(T_WELCOME, () => { welcomeVisible.value = true  })
  at(T_EXIT,    () => { isExiting.value      = true  })
  at(T_DONE,    () => { isDone.value         = true; emit('done') })
})
</script>

<template>
  <div
    class="loader-root"
    :class="{ 'loader-done': isDone }"
    aria-label="Loading portfolio"
    role="status"
  >
    <!-- Dark bg -->
    <div class="loader-bg" />
    <!-- Subtle dot grid -->
    <div class="loader-dots" aria-hidden="true" />

    <!-- ── Terminal window ──────────────────────── -->
    <div
      class="terminal"
      :class="{
        'terminal--visible': windowVisible,
        'terminal--exit':    isExiting,
      }"
    >
      <!-- Chrome bar -->
      <div class="chrome" aria-hidden="true">
        <span class="dot dot-red"    />
        <span class="dot dot-yellow" />
        <span class="dot dot-green"  />
        <span class="chrome-title">deploy@bhumilparate.dev</span>
      </div>

      <!-- Terminal body -->
      <div class="t-body" role="log" aria-live="polite">

        <!-- SSH prompt -->
        <div class="t-line" :class="{ 't-line--visible': promptVisible }">
          <span class="t-prompt">~</span>
          <span class="t-cmd"> $ ssh deploy@bhumilparate.dev</span>
          <span class="t-cursor" :class="{ 'hidden': connectVisible }" aria-hidden="true">▋</span>
        </div>

        <!-- Connecting -->
        <div class="t-line t-line--muted" :class="{ 't-line--visible': connectVisible }">
          Connected to <span class="t-hl">bhumilparate.dev</span> &mdash;
          <span class="t-hl">Spring Boot v3.2</span> &mdash; Java 17
        </div>

        <!-- Divider -->
        <div class="t-divider" :class="{ 't-line--visible': connectVisible }" aria-hidden="true" />

        <!-- Steps -->
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="t-step"
          :class="{ 't-step--visible': visibleSteps > i }"
        >
          <span class="t-arrow" aria-hidden="true">&rsaquo;</span>
          <span class="t-step-text">{{ step.text }}</span>
          <span class="t-check" :class="{ 't-check--on': visibleSteps > i }" aria-hidden="true">
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>

        <!-- Progress bar -->
        <div class="t-progress-wrap" :class="{ 't-progress-wrap--visible': visibleSteps >= 4 }">
          <div class="t-progress-track" aria-hidden="true">
            <div
              class="t-progress-fill"
              :style="{ width: progressFill + '%' }"
              :class="{ 't-progress-fill--active': visibleSteps >= 4 }"
            />
          </div>
          <span class="t-pct">{{ progressFill < 100 ? Math.round(progressFill * 0.92) : 100 }}%</span>
        </div>

        <!-- Welcome message -->
        <div class="t-welcome" :class="{ 't-welcome--visible': welcomeVisible }">
          <span class="t-welcome-icon" aria-hidden="true">✦</span>
          Connection established &mdash;
          <span class="t-hl">Welcome, Bhumil Parate.</span>
        </div>

      </div><!-- /t-body -->
    </div><!-- /terminal -->
  </div>
</template>

<style scoped>
/* ─────────────────────────────────────────────────
   Root & Background
───────────────────────────────────────────────── */
.loader-root {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.loader-done {
  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms ease;
}
.loader-bg {
  position: absolute;
  inset: 0;
  background: #050810;
}
.loader-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(99,102,241,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* ─────────────────────────────────────────────────
   Terminal window
───────────────────────────────────────────────── */
.terminal {
  position: relative;
  width: min(640px, calc(100vw - 2rem));
  border-radius: 12px;
  background: #0d1117;
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow:
    0 0  0 1px rgba(99,102,241,0.12),
    0 24px 80px rgba(0,0,0,0.65),
    0  0  60px rgba(99,102,241,0.08);
  overflow: hidden;

  /* Entry: hidden by default */
  opacity: 0;
  transform: translateY(18px) scale(0.97);
  transition: opacity 350ms ease, transform 350ms cubic-bezier(0.16,1,0.3,1);
}
.terminal--visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Exit: terminal expands to fill the entire viewport then fades */
.terminal--exit {
  opacity: 0;
  transform: scale(1.08);
  transition:
    opacity 400ms ease-in,
    transform 400ms cubic-bezier(0.4,0,1,1);
}

/* ─────────────────────────────────────────────────
   Chrome bar (macOS-style)
───────────────────────────────────────────────── */
.chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #161b22;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dot-red    { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green  { background: #28c840; }
.chrome-title {
  margin-left: 8px;
  font-size: 12px;
  font-family: ui-monospace, 'JetBrains Mono', 'Cascadia Code', 'Fira Code', monospace;
  color: rgba(255,255,255,0.35);
  flex: 1;
  text-align: center;
}

/* ─────────────────────────────────────────────────
   Terminal body
───────────────────────────────────────────────── */
.t-body {
  padding: 20px 24px 24px;
  font-family: ui-monospace, 'JetBrains Mono', 'Cascadia Code', 'Fira Code', monospace;
  font-size: clamp(12px, 1.8vw, 14px);
  line-height: 1.7;
  color: rgba(255,255,255,0.75);
  min-height: 280px;
}

/* ─────────────────────────────────────────────────
   Lines — shared entry animation
───────────────────────────────────────────────── */
.t-line {
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 250ms ease, transform 250ms ease;
}
.t-line--visible {
  opacity: 1;
  transform: translateX(0);
}
.t-line--muted {
  color: rgba(255,255,255,0.38);
  font-size: 0.85em;
  margin-top: 2px;
}

/* SSH prompt */
.t-prompt {
  color: rgba(99,102,241,0.8);
  font-weight: 600;
}
.t-cmd {
  color: rgba(255,255,255,0.85);
}
.t-cursor {
  display: inline-block;
  color: rgba(99,102,241,0.9);
  animation: blink 0.9s steps(2) infinite;
  margin-left: 1px;
}
.t-cursor.hidden { opacity: 0; }

/* Highlight */
.t-hl {
  color: rgba(165,180,252,0.9);
}

/* Divider */
.t-divider {
  height: 1px;
  background: rgba(255,255,255,0.07);
  margin: 10px 0;
  opacity: 0;
  transition: opacity 250ms ease 100ms;
}
.t-line--visible.t-divider, .t-divider.t-line--visible {
  opacity: 1;
}

/* ─────────────────────────────────────────────────
   Steps
───────────────────────────────────────────────── */
.t-step {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 3px 0;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 220ms ease, transform 220ms ease;
}
.t-step--visible {
  opacity: 1;
  transform: translateY(0);
}
.t-arrow {
  color: rgba(99,102,241,0.7);
  font-size: 1.1em;
  flex-shrink: 0;
}
.t-step-text {
  flex: 1;
  color: rgba(255,255,255,0.72);
}
.t-check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.15);
  display: grid;
  place-items: center;
  flex-shrink: 0;
  color: transparent;
  transition: background 300ms ease, border-color 300ms ease, color 300ms ease, transform 250ms cubic-bezier(0.34,1.56,0.64,1);
}
.t-check svg {
  width: 10px;
  height: 10px;
}
.t-check--on {
  background: rgba(16,185,129,0.18);
  border-color: rgba(16,185,129,0.50);
  color: rgb(52,211,153);
  transform: scale(1.1);
}

/* ─────────────────────────────────────────────────
   Progress bar
───────────────────────────────────────────────── */
.t-progress-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  opacity: 0;
  transition: opacity 300ms ease;
}
.t-progress-wrap--visible {
  opacity: 1;
}
.t-progress-track {
  flex: 1;
  height: 4px;
  border-radius: 9999px;
  background: rgba(255,255,255,0.08);
  overflow: hidden;
}
.t-progress-fill {
  height: 100%;
  border-radius: 9999px;
  width: 0%;
  background: linear-gradient(90deg, #6366f1, #38bdf8, #a855f7);
  transition: width 520ms cubic-bezier(0.4, 0, 0.2, 1);
}
.t-pct {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
  min-width: 28px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* ─────────────────────────────────────────────────
   Welcome message
───────────────────────────────────────────────── */
.t-welcome {
  margin-top: 14px;
  padding: 10px 14px;
  border-radius: 8px;
  background: rgba(16,185,129,0.07);
  border: 1px solid rgba(16,185,129,0.20);
  color: rgba(52,211,153,0.90);
  font-size: 0.88em;
  display: flex;
  align-items: center;
  gap: 8px;

  opacity: 0;
  transform: translateY(8px);
  transition: opacity 350ms ease, transform 350ms cubic-bezier(0.16,1,0.3,1);
}
.t-welcome--visible {
  opacity: 1;
  transform: translateY(0);
}
.t-welcome-icon {
  font-size: 1.1em;
  animation: spin-star 3s linear infinite;
  flex-shrink: 0;
}

/* ─────────────────────────────────────────────────
   Keyframes
───────────────────────────────────────────────── */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
@keyframes spin-star {
  to { transform: rotate(360deg); }
}

/* ─────────────────────────────────────────────────
   Reduced motion
───────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .terminal,
  .t-line,
  .t-step,
  .t-check,
  .t-welcome,
  .t-progress-fill {
    transition: none !important;
    animation: none !important;
  }
  .terminal { opacity: 1; transform: none; }
  .t-cursor { display: none; }
}
</style>
