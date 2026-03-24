<script setup lang="ts">
defineProps<{
  items: string[]
  direction?: 'left' | 'right'
  speed?: number // seconds for one full loop
}>()
</script>

<template>
  <div class="marquee-root" role="presentation" aria-hidden="true">
    <div
      class="marquee-track"
      :class="direction === 'right' ? 'marquee-right' : 'marquee-left'"
      :style="{ animationDuration: `${speed ?? 30}s` }"
    >
      <!-- Items duplicated for seamless loop -->
      <template v-for="_ in 2" :key="_">
        <span v-for="item in items" :key="item + _" class="marquee-item">
          {{ item }}
        </span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.marquee-root {
  overflow: hidden;
  /* Edge fade mask */
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 0.75rem;
  will-change: transform;
}

/* Pause on hover */
.marquee-root:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes scroll-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes scroll-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

.marquee-left  { animation: scroll-left  linear infinite; }
.marquee-right { animation: scroll-right linear infinite; }

.marquee-item {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.09);
  transition: background 200ms, color 200ms, border-color 200ms;
}
.marquee-item:hover {
  background: rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.28);
  color: rgba(199, 210, 254, 0.95);
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none !important; }
}
</style>
