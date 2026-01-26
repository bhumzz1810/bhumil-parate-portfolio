export type Project = {
  id: number
  title: string
  description: string
  stack: string[]
  highlights: string[]
  live?: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wide Open Fishing",
    featured: true,
    description:
      "End-to-end development of a production mobile-first platform for a real fishing business, including backend APIs, payments, and deployment.",
    stack: ["Laravel", "Vue", "MySQL", "Stripe"],
    highlights: [
      "Designed and implemented REST APIs consumed by mobile and web clients",
      "Integrated Stripe payments for real customer transactions",
      "Handled deployment and production stability for a live business app",
    ],
    live: "https://apkpure.com/wide-open-fishing/io.android.wideopen/amp",
  },
  {
    id: 2,
    title: "Freshly Meals",
    description:
      "API-driven food ordering platform focused on healthy meal subscriptions, similar to Zomato but tailored for curated meal plans.",
    stack: ["Laravel", "Vue", "MySQL", "Stripe"],
    highlights: [
      "Built secure admin panel for managing meals, users, and orders",
      "Developed scalable APIs supporting mobile applications",
      "Handled subscription logic and payment workflows",
    ],
    live: "https://play.google.com/store/apps/details?id=com.zoconut.freshly&hl=en",
    github: "https://github.com/somin-parate/Freshly-Meals-Laravel",
  },
  {
    id: 3,
    title: "Fitciety",
    description:
      "Fitness and exercise platform backend with admin controls, API integrations, and payment support for a UK-based business.",
    stack: ["Laravel", "Vue", "MySQL", "Stripe"],
    highlights: [
      "Developed API-first backend architecture",
      "Built admin dashboards for content and user management",
      "Ensured data consistency across frontend and backend systems",
    ],
    live: "http://fitciety.co.uk/",
  },
  {
  id: 4,
  title: "Shopify Marketplace Apps — Lucki Media",
  description:
    "Built and maintained multiple public Shopify marketplace apps at Lucki Media, used by live merchants to improve cart behavior, pricing control, and conversions.",
  stack: ["Laravel", "React", "MySQL", "Shopify APIs"],
  highlights: [
    "Diamond Link — advanced diamond product linking and filtering",
    "LM Sticky Cart Drawer & Upsell — improves cart UX and increases conversions",
    "LM Request Quote & Hide Price — enables quote-based pricing workflows",
    "Worked with Shopify APIs, webhooks, and merchant store integrations in production",
  ],
  live: "https://apps.shopify.com/gemfind-diamond-link-1",
},



  {
    id: 5,
    title: "DSArena – DSA Learning Platform",
    description:
      "Final-year project focused on algorithm learning with AI-assisted explanations and interactive problem-solving.",
    stack: ["React", "Node.js", "MongoDB", "Express", "OpenAI API"],
    highlights: [
      "Designed backend services for learning workflows",
      "Integrated OpenAI API for intelligent assistance",
      "Built full-stack features from scratch to deployment",
    ],
    live: "https://dsa-learning-platform-five.vercel.app/#/",
    github: "https://github.com/bhumzz1810/DSA-Learning-Platform",
  },
]
