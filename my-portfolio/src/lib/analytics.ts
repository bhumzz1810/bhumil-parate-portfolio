import type { Router } from 'vue-router'

type AnalyticsParams = Record<string, string | number | boolean | undefined>

type GtagCommand = 'js' | 'config' | 'event'

type Gtag = (command: GtagCommand, target: string | Date, params?: AnalyticsParams) => void

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: Gtag
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

function analyticsEnabled() {
  return Boolean(measurementId)
}

function ensureScriptLoaded() {
  if (!measurementId || typeof window === 'undefined') return
  if (document.querySelector(`script[data-ga-id="${measurementId}"]`)) return

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  script.dataset.gaId = measurementId
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
    anonymize_ip: true,
  })
}

export function trackPageView(path: string, title?: string) {
  if (!measurementId || !window.gtag) return

  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: path,
    page_title: title ?? document.title,
  })
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!measurementId || !window.gtag) return
  window.gtag('event', eventName, params)
}

export function trackClick(label: string, location: string, destination?: string) {
  trackEvent('portfolio_click', {
    event_category: 'engagement',
    event_label: label,
    link_location: location,
    destination,
  })
}

export function setupAnalytics(router: Router) {
  if (!analyticsEnabled()) return

  ensureScriptLoaded()

  router.isReady().then(() => {
    trackPageView(router.currentRoute.value.fullPath, document.title)
  })

  router.afterEach((to) => {
    trackPageView(to.fullPath, document.title)
  })
}

export function isAnalyticsEnabled() {
  return analyticsEnabled()
}
