export type Project = {
  id: number
  title: string
  description: string
  stack: string[]
  highlights: string[]
  github: string
  live?: string | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Rajwadi Tiffin Management System",
    description:
      "A real-world, subscription-based food ordering and delivery platform built for a local business.",
    stack: ["Laravel 12", "Vue 3", "MySQL", "Stripe"],
    highlights: [
      "Role-based authentication (Admin, Staff, Customer)",
      "Subscription & order lifecycle management",
      "Clean architecture with service layer"
    ],
    github: "https://github.com/your-username/rajwadi-tiffin",
    live: null
  },
  {
    id: 2,
    title: "Service Subscription Platform",
    description:
      "A SaaS-style platform for managing plans, users, and recurring services.",
    stack: ["Laravel", "Vue", "Sanctum"],
    highlights: [
      "API-first backend design",
      "Policy-based authorization",
      "Scalable database structure"
    ],
    github: "https://github.com/your-username/servicehub",
    live: null
  }
]
