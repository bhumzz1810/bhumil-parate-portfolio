import { type Ref } from 'vue'

/**
 * Aceternity-style mouse-tracking spotlight effect for cards.
 * Attach onMove to @mousemove and onLeave to @mouseleave on the card element.
 */
export function useSpotlight(el: Ref<HTMLElement | null>) {
  const onMove = (e: MouseEvent) => {
    if (!el.value) return
    const rect = el.value.getBoundingClientRect()
    el.value.style.setProperty('--sp-x', `${e.clientX - rect.left}px`)
    el.value.style.setProperty('--sp-y', `${e.clientY - rect.top}px`)
    el.value.style.setProperty('--sp-opacity', '1')
  }

  const onLeave = () => {
    if (!el.value) return
    el.value.style.setProperty('--sp-opacity', '0')
  }

  return { onMove, onLeave }
}
