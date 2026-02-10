export type Project = {
  id: number
  title: string
  company?: string
  description: string
  stack: string[]
  highlights: string[]
  live?: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  // =========================
  // Featured (Top 5–6)
  // =========================
  {
    id: 1,
    title: "Wide Open Fishing",
    company: "Local Business — Dubai",
    featured: true,
    description:
      "End-to-end build of a production platform for a real fishing business — backend APIs, admin workflows, payments, and deployment.",
    stack: ["Laravel", "Vue", "MySQL", "Stripe"],
    highlights: [
      "Designed REST APIs for app/web consumption with clean request validation and error handling",
      "Implemented Stripe payment flows with secure server-side verification and transaction logging",
      "Delivered a full production release including environment setup, configuration, and stability fixes",
    ],
    live: "https://apkpure.com/wide-open-fishing/io.android.wideopen/amp",
  },

  {
    id: 2,
    title: "Freshly Meals",
    company: "Local Business — Dubai",
    featured: true,
    description:
      "API-driven healthy-meals ordering platform (Zomato-style experience but focused on curated meal plans) with a full admin panel for operations.",
    stack: ["Laravel", "Vue", "MySQL", "Stripe"],
    highlights: [
      "Built an admin panel to manage meals, categories, users, orders, and availability",
      "Developed scalable APIs used by the mobile app with pagination, filtering, and secure auth",
      "Handled order/payment lifecycle logic (create → pay → confirm → status updates)",
    ],
    live: "https://play.google.com/store/apps/details?id=com.zoconut.freshly&hl=en",
    github: "https://github.com/somin-parate/Freshly-Meals-Laravel",
  },

  {
    id: 3,
    title: "Fitciety",
    company: "Local Business — UK",
    featured: true,
    description:
      "Fitness platform backend + admin tooling with API-first architecture, content management, and payment-ready workflows for a UK-based business.",
    stack: ["Laravel", "Vue", "MySQL", "Stripe"],
    highlights: [
      "Implemented API-first backend patterns to keep frontend/mobile integrations consistent",
      "Built admin dashboards for content, users, and operational workflows",
      "Focused on maintainability: reusable services, validation, and clean controller structure",
    ],
    live: "http://fitciety.co.uk/",
    github: "https://github.com/somin-parate/Fitciety-Laravel",
  },

  {
    id: 4,
    title: "Shopify Marketplace Apps — Lucki Media",
    company: "Lucki Media (Company Projects)",
    featured: true,
    description:
      "Built and maintained public Shopify marketplace apps used by merchants to improve conversions, pricing workflows, and storefront UX.",
    stack: ["Laravel", "React", "MySQL", "Shopify APIs", "Webhooks"],
    highlights: [
      "Worked on merchant-facing configurations and production Shopify integrations",
      "Handled webhooks and API-driven sync workflows across Shopify stores",
      "Supported multiple apps: Diamond Link, Sticky Cart Drawer & Upsell, Request Quote & Hide Price",
    ],
    live: "https://apps.shopify.com/gemfind-diamond-link-1",
  },

  {
    id: 5,
    title: "DSArena — DSA Learning Platform",
    company: "Final Year Project",
    featured: true,
    description:
      "Full-stack learning platform for DSA practice with AI-assisted explanations and interactive flows for problems, attempts, and guidance.",
    stack: ["React", "Node.js", "MongoDB", "Express", "OpenAI API"],
    highlights: [
      "Built backend services for learning workflows, attempts, and user-based progress",
      "Integrated OpenAI API for guided explanations and structured responses",
      "Deployed a production-ready app with routing, state handling, and API integration",
    ],
    live: "https://dsa-learning-platform-five.vercel.app/#/",
    github: "https://github.com/bhumzz1810/DSA-Learning-Platform",
  },

  {
    id: 6,
    title: "MediQueue",
    company: "Personal Project — Canada",
    featured: true,
    description:
      "Web app concept to reduce hospital queue friction by enabling structured queue management and user flow tracking.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Designed backend models and endpoints for queue + patient flow use-cases",
      "Built responsive React UI with clean form and state handling",
      "Focused on reliability and scalability for real-world usage patterns",
    ],
    github: "https://github.com/bhumzz1810/medi-queue",
  },

  // =========================
  // Shopify Apps (Individual pages)
  // =========================
  {
    id: 7,
    title: "Diamond Link (Shopify App)",
    company: "Company Project",
    description:
      "Shopify app with complex product workflows for diamond linking and advanced filtering logic.",
    stack: ["Laravel", "React", "MySQL", "Shopify APIs"],
    highlights: [
      "Worked on API-driven logic for advanced product relationships and filtering behavior",
      "Implemented merchant settings + configuration flows for storefront behavior",
      "Supported production fixes and edge-cases for real store data patterns",
    ],
    live: "https://apps.shopify.com/gemfind-diamond-link-1",
  },

  {
    id: 8,
    title: "LM Sticky Cart Drawer & Upsell (Shopify App)",
    company: "Company Project",
    description:
      "Cart drawer + upsell system to improve cart UX and increase conversions via dynamic offers.",
    stack: ["Laravel", "React", "MySQL", "Shopify APIs"],
    highlights: [
      "Built features end-to-end from scratch to deployment",
      "Worked on storefront UI logic and merchant-driven configuration",
      "Handled production-ready integration with Shopify and theme behaviors",
    ],
    live: "https://apps.shopify.com/lm-add-to-cart-sticky?surface_intra_position=1&surface_type=partners&surface_version=simplified",
  },

  {
    id: 9,
    title: "LM Request Quote & Hide Price (Shopify App)",
    company: "Company Project",
    description:
      "Quote-based pricing workflows that hide prices and capture customer quote requests for merchants.",
    stack: ["Laravel", "React", "MySQL", "Shopify APIs"],
    highlights: [
      "Implemented quote request workflows with merchant-controlled rules",
      "Built admin flows for managing quote requests and storefront behavior",
      "Supported real-world merchant edge-cases in production environments",
    ],
    live: "https://apps.shopify.com/lm-request-a-quote?surface_intra_position=3&surface_type=partners&surface_version=simplified",
  },

  // =========================
  // Business / Websites
  // =========================
  {
    id: 10,
    title: "Lamorinda School Bus",
    company: "Local Business",
    description:
      "Business website with custom pages and content structure built in Laravel with a clean responsive layout.",
    stack: ["Laravel", "MySQL", "HTML", "CSS"],
    highlights: [
      "Developed responsive pages and reusable UI sections",
      "Implemented backend content/data handling needed for real site updates",
      "Delivered production-ready deployment and fixes",
    ],
    live: "https://lamorindaschoolbus.org/",
  },

  {
    id: 11,
    title: "NVS Pharmacy",
    company: "Local Business — UK",
    description:
      "Resolved critical payment and API issues in a production pharmacy system with PayPal integration.",
    stack: ["React", "PHP", "PayPal"],
    highlights: [
      "Debugged and fixed payment flow issues impacting successful transactions",
      "Resolved API-side issues affecting checkout and data consistency",
      "Worked safely in production with minimal disruption",
    ],
    live: "https://www.nvspharmacy.co.uk/",
  },

  {
    id: 12,
    title: "KauaiCoffee",
    company: "Local Business",
    description:
      "Worked on Shopify + React/Laravel related issues including UI polishing and API integration fixes.",
    stack: ["React", "Shopify", "Laravel"],
    highlights: [
      "Improved UI behavior and resolved layout issues for storefront experience",
      "Worked on API/integration fixes and edge-case handling",
      "Supported stability improvements for production storefront",
    ],
    live: "https://kauaicoffee.com/collections/all-kauai-coffee",
  },

  {
    id: 13,
    title: "Ergosumdeus (Case Study Website Work)",
    company: "Client / Case Study",
    description:
      "Improved UI and design experience for a client-facing project built with React and Laravel.",
    stack: ["React", "Laravel"],
    highlights: [
      "Enhanced UI components and layout alignment across devices",
      "Improved visual consistency with spacing, typography, and responsive behavior",
      "Supported iterative changes based on stakeholder feedback",
    ],
    live: "https://icubetechnolabs.com/casestudy/ergosumdeus/",
  },

  // =========================
  // Utilities / Tools
  // =========================
  {
    id: 14,
    title: "Amazon Utility",
    company: "Local Business",
    description:
      "Utility tool to fetch and normalize product data from Amazon via a third-party API integration for client-side usage.",
    stack: ["React", "Amazon API"],
    highlights: [
      "Built a UI to fetch/search product data and present structured output",
      "Handled API constraints like rate limits, failures, and partial responses",
      "Normalized payloads into consistent fields for downstream client usage",
    ],
  },

  // =========================
  // Full-stack MERN projects
  // =========================
  {
    id: 15,
    title: "EventConnect",
    company: "Final Year Project",
    description:
      "MERN-based event platform built from scratch to deployment with event listings, management flows, and role-based views.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    highlights: [
      "Built end-to-end CRUD flows for events and user interactions",
      "Implemented backend routing, validation, and clean API structure",
      "Deployed the full project and supported bug-fixing + refinements",
    ],
    live: "https://event-connect-one.vercel.app/",
    github: "https://github.com/VKaps02/EventConnect",
  },

  {
    id: 16,
    title: "SnapperBay (UI Enhancements + Animations)",
    company: "Personal Project",
    description:
      "Focused on UI improvements, layout polish, and animations to upgrade overall user experience.",
    stack: ["React"],
    highlights: [
      "Enhanced UI structure with responsive layout and better spacing/typography",
      "Added animations and micro-interactions for premium feel",
      "Improved usability across different screen sizes",
    ],
    live: "https://group5-snaperbay.vercel.app/",
    github: "https://github.com/R7-S/group5-snaperbay",
  },

  // =========================
  // Android
  // =========================
  {
    id: 17,
    title: "Android Studio Apps (Collection)",
    company: "Personal Project",
    description:
      "A collection of Android apps built in Java using Android Studio to practice core mobile development concepts.",
    stack: ["Android Studio", "Java"],
    highlights: [
      "Worked with activities, intents, UI layouts, and app navigation",
      "Built multiple small apps to strengthen fundamentals",
      "Maintained code in GitHub for documentation and iteration",
    ],
    github: "https://github.com/bhumzz1810/Android-Studio-Java-Projects",
  },
]
