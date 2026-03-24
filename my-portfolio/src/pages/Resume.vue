<script setup lang="ts">
import { trackClick } from '@/lib/analytics'

const skills = [
  { title: 'Programming Languages', dot: 'bg-indigo-400',  items: 'Java (Core Java, Java 17), SQL, JavaScript (ES6+), TypeScript' },
  { title: 'Frontend Technologies',  dot: 'bg-sky-400',    items: 'React.js, TypeScript, HTML5, CSS3, Responsive UI Design' },
  { title: 'Backend Technologies',   dot: 'bg-purple-400', items: 'Spring Boot, Spring MVC, Spring Cloud, Hibernate, JPA, RESTful APIs' },
  { title: 'Microservices & Architecture', dot: 'bg-indigo-400', items: 'Microservices Architecture, Distributed Systems, API Design, Service Discovery, Event-Driven Architecture (Kafka)' },
  { title: 'Databases',              dot: 'bg-sky-400',    items: 'PostgreSQL, MySQL, MongoDB, SQL Query Optimization, Data Modeling' },
  { title: 'Cloud & DevOps',         dot: 'bg-purple-400', items: 'Microsoft Azure (App Services, Azure SQL, Blob Storage), Docker, Kubernetes, CI/CD Pipelines, GitHub Actions, Jenkins' },
  { title: 'Security & Testing',     dot: 'bg-indigo-400', items: 'Spring Security, OAuth2, JWT, JUnit, Mockito, Selenium, API Testing (Postman)' },
  { title: 'Tools & Collaboration',  dot: 'bg-sky-400',    items: 'Git, GitHub, JIRA, Agile/Scrum, Azure Monitor, Logging & Monitoring (CloudWatch), Stripe API, PayPal API, Shopify API, Amazon API' },
]

const siemensBullets = [
  'Developed backend microservices for a smart energy and IoT monitoring platform using Java 17, Spring Boot, Spring Cloud, enabling real-time data ingestion and improving grid reliability by 35% through faster fault detection.',
  'Built and optimized RESTful services using Hibernate, JPA, PostgreSQL, SQL, and collaborated with frontend teams using React.js, TypeScript, reducing data latency and improving dashboard responsiveness by 28%.',
  'Strengthened application security by implementing Spring Security with OAuth2 and JWT, ensuring secure API access across distributed systems and reducing unauthorized access incidents by 40% in production environments.',
  'Deployed and managed scalable applications on AWS (EC2, S3, RDS, Lambda) using Docker and Kubernetes, improving system availability and reducing downtime by 30% across microservices-based architecture.',
  'Processed and monitored real-time data streams using Apache Kafka and AWS CloudWatch, enabling early anomaly detection and improving predictive maintenance efficiency by 25% across energy and industrial systems.',
]

const luckiBullets = [
  'Developed scalable RESTful microservices using Java, Spring Boot, Spring Cloud following MVC architecture, improving API response times by 40% and enhancing maintainability across distributed backend systems.',
  'Strengthened API security by implementing Spring Security, OAuth2, JWT with role-based access control and validation layers, reducing unauthorized access incidents by 30% across enterprise-grade application environments.',
  'Optimized database performance using Hibernate, JPA, MySQL, MongoDB, improving query efficiency and indexing strategies, resulting in 35% faster data retrieval and improved transactional consistency.',
  'Engineered payment processing workflows by integrating third-party REST APIs for Stripe, PayPal, Shopify, and Amazon services, reducing transaction failures by 25% across scalable e-commerce platforms.',
  'Deployed and managed microservices on Microsoft Azure (App Services, Azure SQL, Blob Storage) using Docker and CI/CD pipelines, reducing release cycles by 40% and improving production stability.',
  'Improved system performance by analyzing production issues using Spring Boot Actuator, Azure Monitor, optimizing APIs and database queries, reducing recurring defects by 28% and increasing application uptime.',
  'Built scalable marketplace features using React.js, TypeScript integrated with Spring Boot APIs, improving user experience and increasing platform adoption by 20% in multi-tenant distributed systems.',
]

const education = [
  { degree: 'Graduate Certificate in Web Design & Development', school: 'Conestoga College, Canada', year: 'Aug 2025' },
  { degree: 'BTech in Information Technology', school: 'GTU, India', year: 'Jul 2021' },
]

function trackResumeClick(label: string, destination: string) {
  trackClick(label, 'resume', destination)
}
</script>

<template>
  <section class="min-h-screen relative overflow-hidden isolate">
    <!-- Static gradient background — no blur animations -->
    <div class="absolute inset-0 -z-10 hero-gradient" aria-hidden="true" />
    <div class="absolute inset-0 dot-grid opacity-25 -z-10" aria-hidden="true" />
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070A13] to-transparent -z-10" aria-hidden="true" />

    <div class="px-4 xs:px-5 sm:px-6 py-12 sm:py-16">
      <div class="max-w-5xl mx-auto space-y-12 sm:space-y-14">

        <!-- ── Header ────────────────────────────── -->
        <header class="space-y-5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="inline-flex items-center gap-2 text-xs text-gray-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <span class="w-2 h-2 rounded-full bg-indigo-400" aria-hidden="true"></span>
                Resume
              </p>
              <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold text-white">Resume</h1>
              <p class="text-gray-400 mt-2 max-w-2xl text-sm sm:text-base">
                Java &bull; Spring Boot &bull; Spring Cloud &bull; Microservices &bull; React.js &bull; AWS &bull; Azure &bull; Docker &bull; Kubernetes
              </p>
            </div>

            <div class="flex flex-col xs:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a href="/Bhumil_Resume.pdf" download
                class="w-full xs:w-auto text-center bg-white/5 hover:bg-white/8 border border-white/10
                       hover:border-white/18 px-5 py-2.5 rounded-lg text-gray-200 text-sm transition-all
                       focus:outline-none focus:ring-2 focus:ring-white/30"
                @click="trackResumeClick('resume_download_pdf', '/Bhumil_Resume.pdf')">
                Download PDF
              </a>
              <a href="/Bhumil_Resume.pdf" target="_blank" rel="noopener"
                class="w-full xs:w-auto text-center bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2.5
                       rounded-lg font-medium text-sm transition-all
                       shadow-[0_0_20px_rgba(99,102,241,0.30)] hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]
                       focus:outline-none focus:ring-2 focus:ring-indigo-300/70"
                @click="trackResumeClick('resume_open_pdf', '/Bhumil_Resume.pdf')">
                Open PDF
              </a>
            </div>
          </div>

          <!-- Summary card -->
          <div class="rounded-2xl p-6 bg-white/[0.04] border border-white/8 relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-indigo-500/50 via-sky-400/50 to-purple-500/50" aria-hidden="true" />
            <h2 class="text-base font-semibold text-white">Summary</h2>
            <p class="mt-2 text-gray-300/85 leading-relaxed text-sm sm:text-base">
              Experienced Full Stack Developer with around 3+ years of experience. Delivering scalable web
              applications using Java, Spring Boot, Spring Cloud, and React.js, with strong expertise in
              microservices architecture, REST APIs, and database optimization across SQL and NoSQL systems.
              Collaborating in agile teams to build secure, cloud-native solutions using Microsoft Azure,
              Docker, Kubernetes, and implementing robust authentication, testing, and CI/CD practices to
              ensure high-performance, reliable applications.
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="p in ['Java 17 • Spring Boot', 'Microservices Architecture', 'Apache Kafka', 'AWS • Azure • Kubernetes', 'Spring Security • OAuth2 • JWT', 'PostgreSQL • MySQL • MongoDB', 'React.js • TypeScript', 'Docker • CI/CD']"
                :key="p" class="pill">{{ p }}</span>
            </div>
          </div>
        </header>

        <!-- ── Skills ────────────────────────────── -->
        <section>
          <h2 class="section-title">Skills</h2>
          <p class="section-sub">Grouped for quick scanning by recruiters and ATS.</p>

          <div class="mt-6 grid gap-4 sm:gap-5 md:grid-cols-2">
            <div v-for="skill in skills" :key="skill.title" class="skill-card group">
              <div class="flex items-center gap-2 mb-2">
                <span :class="`w-1.5 h-1.5 rounded-full ${skill.dot}`" aria-hidden="true"></span>
                <h3 class="text-sm font-semibold text-white">{{ skill.title }}</h3>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">{{ skill.items }}</p>
            </div>
          </div>
        </section>

        <!-- ── Experience ─────────────────────────── -->
        <section>
          <h2 class="section-title">Experience</h2>
          <p class="section-sub">Impact-focused bullets, optimized for ATS and readability.</p>

          <div class="mt-6 space-y-0">

            <!-- Timeline line -->
            <div class="relative pl-6 sm:pl-8">
              <div class="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-indigo-500/60 via-sky-500/30 to-transparent rounded-full" aria-hidden="true" />

              <!-- Siemens -->
              <div class="relative mb-8">
                <div class="absolute -left-[23px] sm:-left-[27px] top-3 w-3 h-3 rounded-full
                            bg-indigo-500 ring-4 ring-[#070A13] ring-offset-0" aria-hidden="true" />

                <article class="exp-card border-indigo-500/15 hover:border-indigo-500/30">
                  <div class="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl
                              bg-gradient-to-r from-indigo-500/60 to-purple-500/30" aria-hidden="true" />

                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 class="text-lg sm:text-xl font-bold text-white">Full Stack Developer</h3>
                      <p class="mt-0.5 font-medium text-indigo-300/90 text-sm">Siemens &bull; Canada</p>
                    </div>
                    <span class="exp-date">Aug 2025 – Present</span>
                  </div>

                  <div class="flex flex-wrap gap-1.5 mb-4">
                    <span v-for="t in ['Java 17','Spring Boot','Spring Cloud','Hibernate','JPA','PostgreSQL','React.js','TypeScript','Spring Security','OAuth2','JWT','AWS','Docker','Kubernetes','Kafka','CloudWatch']"
                      :key="t" class="tech-tag tech-tag--indigo">{{ t }}</span>
                  </div>

                  <ul class="space-y-2.5">
                    <li v-for="b in siemensBullets" :key="b" class="exp-bullet">
                      <span class="bullet-dot bg-indigo-400/50" aria-hidden="true"></span>
                      {{ b }}
                    </li>
                  </ul>
                </article>
              </div>

              <!-- LuckiMedia -->
              <div class="relative">
                <div class="absolute -left-[23px] sm:-left-[27px] top-3 w-3 h-3 rounded-full
                            bg-sky-500 ring-4 ring-[#070A13]" aria-hidden="true" />

                <article class="exp-card border-sky-500/15 hover:border-sky-500/30">
                  <div class="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl
                              bg-gradient-to-r from-sky-500/60 to-indigo-500/30" aria-hidden="true" />

                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 class="text-lg sm:text-xl font-bold text-white">Backend Developer</h3>
                      <p class="mt-0.5 font-medium text-sky-300/90 text-sm">LuckiMedia &bull; India</p>
                    </div>
                    <span class="exp-date">Jan 2021 – Dec 2023</span>
                  </div>

                  <div class="flex flex-wrap gap-1.5 mb-4">
                    <span v-for="t in ['Java','Spring Boot','Spring Cloud','Spring Security','OAuth2','JWT','Hibernate','JPA','MySQL','MongoDB','React.js','TypeScript','Azure','Docker','CI/CD','Stripe','PayPal','Shopify','Amazon']"
                      :key="t" class="tech-tag tech-tag--sky">{{ t }}</span>
                  </div>

                  <ul class="space-y-2.5">
                    <li v-for="b in luckiBullets" :key="b" class="exp-bullet">
                      <span class="bullet-dot bg-sky-400/50" aria-hidden="true"></span>
                      {{ b }}
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Education ──────────────────────────── -->
        <section>
          <h2 class="section-title">Education</h2>

          <div class="mt-6 rounded-2xl bg-white/[0.04] border border-white/8 divide-y divide-white/6 overflow-hidden">
            <div v-for="(edu, i) in education" :key="i"
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-6 py-5
                     hover:bg-white/[0.025] transition-colors">
              <div>
                <p class="text-white font-semibold text-sm sm:text-base">{{ edu.degree }}</p>
                <p class="text-gray-400 text-sm mt-0.5">{{ edu.school }}</p>
              </div>
              <span class="text-gray-500 text-sm whitespace-nowrap">{{ edu.year }}</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
}
.section-sub {
  color: rgba(156, 163, 175, 0.9);
  font-size: 0.875rem;
  margin-top: 0.35rem;
}

.skill-card {
  border-radius: 0.875rem;
  padding: 1.1rem 1.25rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: border-color 200ms, background 200ms;
}
.skill-card:hover {
  border-color: rgba(255,255,255,0.13);
  background: rgba(255,255,255,0.055);
}

.exp-card {
  border-radius: 1rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid;
  position: relative;
  overflow: hidden;
  transition: border-color 250ms, background 250ms;
}
.exp-card:hover {
  background: rgba(255,255,255,0.055);
}

.exp-date {
  display: inline-flex;
  align-items: center;
  font-size: 0.78rem;
  color: rgba(156, 163, 175, 0.8);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  white-space: nowrap;
}

.tech-tag {
  display: inline-flex;
  align-items: center;
  font-size: 0.72rem;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  border: 1px solid;
  font-weight: 500;
}
.tech-tag--indigo {
  background: rgba(99,102,241,0.08);
  border-color: rgba(99,102,241,0.20);
  color: rgba(199,210,254,0.80);
}
.tech-tag--sky {
  background: rgba(56,189,248,0.08);
  border-color: rgba(56,189,248,0.20);
  color: rgba(186,230,253,0.80);
}

.exp-bullet {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: rgba(209,213,219,0.85);
  line-height: 1.6;
}
.bullet-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  flex-shrink: 0;
  margin-top: 0.45rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  padding: 0.35rem 0.65rem;
  border-radius: 9999px;
  color: rgba(255,255,255,0.75);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.09);
}
</style>
