<template>
  <section class="min-h-screen relative overflow-hidden isolate">
    <!-- Background (match Home) -->
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-b from-[#070A13] via-[#0B1022] to-[#070A13]" />
      <div
        class="pointer-events-none absolute -top-52 left-1/2 h-[560px] w-[560px] sm:h-[640px] sm:w-[640px]
               -translate-x-1/2 rounded-full blur-3xl opacity-25
               bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-500"
      />
      <div
        class="pointer-events-none absolute top-28 right-[-140px] h-[420px] w-[420px]
               rounded-full blur-3xl opacity-20
               bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500"
      />
    </div>

    <div class="px-4 xs:px-5 sm:px-6 py-12 sm:py-16">
      <div class="max-w-5xl mx-auto space-y-12 sm:space-y-14">
        <!-- Header -->
        <header class="space-y-5">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                class="inline-flex items-center gap-2 text-xs text-gray-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur"
              >
                <span class="w-2 h-2 rounded-full bg-indigo-400" aria-hidden="true"></span>
                Resume
              </p>

              <h1 class="mt-4 text-3xl sm:text-4xl font-bold text-white">Resume</h1>
              <p class="text-gray-300/80 mt-2 max-w-2xl">
                Full Stack Developer • PHP • Laravel • REST APIs • Vue • React • AWS • Docker • CI/CD
              </p>
            </div>

            <div class="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/Bhumil_Resume_Full Stack_Developer.pdf"
                download
                class="w-full xs:w-auto text-center bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-lg text-gray-100 transition backdrop-blur
                       focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Download PDF
              </a>

              <a
                href="/Bhumil_Resume_Full Stack_Developer.pdf"
                target="_blank"
                rel="noopener"
                class="w-full xs:w-auto text-center bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium transition
                       shadow-[0_8px_30px_rgba(99,102,241,0.25)]
                       focus:outline-none focus:ring-2 focus:ring-indigo-300/70"
              >
                Open PDF
              </a>
            </div>
          </div>

          <!-- Summary card -->
          <section class="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div class="flex items-start justify-between gap-4">
              <div>
                <h2 class="text-lg font-semibold text-white">Summary</h2>
                <p class="mt-2 text-gray-200/80 leading-relaxed">
                  Full Stack Developer with 3+ years of experience designing and delivering scalable web applications using PHP,
                  Laravel, RESTful APIs, and MVC architecture, with strong backend expertise and modern frontend exposure.
                  Proven ability to integrate payment gateways, third-party APIs, and relational/NoSQL databases, while supporting
                  cloud deployments, CI/CD workflows, and performance optimization in agile environments.
                </p>
              </div>
            </div>

            <!-- Quick highlights -->
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="pill">API-first</span>
              <span class="pill">Payments (Stripe/PayPal)</span>
              <span class="pill">Shopify/Amazon</span>
              <span class="pill">MySQL/MongoDB</span>
              <span class="pill">AWS • Docker • Nginx</span>
              <span class="pill">CI/CD • Testing</span>
            </div>
          </section>
        </header>

        <!-- Skills -->
        <section>
          <div class="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 class="text-2xl font-semibold text-white">Skills</h2>
              <p class="text-gray-300/80 mt-2">Grouped for quick scanning by recruiters.</p>
            </div>
          </div>

          <div class="grid gap-5 sm:gap-6 md:grid-cols-2">
            <div class="card">
              <h3 class="card-title">Programming</h3>
              <p class="card-text">PHP, JavaScript (ES6+), SQL</p>
            </div>

            <div class="card">
              <h3 class="card-title">Backend & Architecture</h3>
              <p class="card-text">
                Laravel, Node.js, Express.js, RESTful API Development, Microservices Architecture, MVC Architecture,
                Middleware, API Versioning, Service-to-Service Communication
              </p>
            </div>

            <div class="card">
              <h3 class="card-title">API Standards & Integrations</h3>
              <p class="card-text">
                OpenAPI Specification, API Design & Documentation, Contract-First API Development, Stripe API, PayPal API,
                Shopify APIs, Amazon APIs
              </p>
            </div>

            <div class="card">
              <h3 class="card-title">Frontend</h3>
              <p class="card-text">Vue.js, React.js, Redux, HTML5, CSS3, Responsive UI Development</p>
            </div>

            <div class="card">
              <h3 class="card-title">Databases</h3>
              <p class="card-text">MySQL, MongoDB, PostgreSQL</p>
            </div>

            <div class="card">
              <h3 class="card-title">Testing & Security</h3>
              <p class="card-text">
                Unit/Integration/API Testing, Regression Testing, Mocking, Webhook Validation, JWT, OAuth 2.0, RBAC,
                OWASP-aligned secure design, HTTPS/TLS, IAM, Secrets Management, Secure Configuration
              </p>
            </div>

            <div class="card">
              <h3 class="card-title">Cloud & DevOps</h3>
              <p class="card-text">AWS (EC2, S3, RDS), Docker, Nginx, CI/CD Concepts</p>
            </div>

            <div class="card">
              <h3 class="card-title">Engineering Practices</h3>
              <p class="card-text">
                Git/GitHub, Agile collaboration, SOLID, Secure coding, Performance optimization
              </p>
            </div>
          </div>
        </section>

        <!-- Experience -->
        <section>
          <div class="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 class="text-2xl font-semibold text-white">Experience</h2>
              <p class="text-gray-300/80 mt-2">Impact-focused bullets, optimized for ATS + readability.</p>
            </div>
          </div>

          <div class="space-y-5 sm:space-y-6">
            <article class="card">
              <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 class="text-xl font-semibold text-white">Full Stack Developer — Siemens (Canada)</h3>
                <p class="text-gray-400 text-sm">Aug 2025 – Present</p>
              </div>

              <ul class="mt-4 list-disc list-inside text-gray-200/80 space-y-2">
                <li>
                  Built Laravel (PHP) REST APIs using MVC/OOP with secure auth (JWT/OAuth2/RBAC) and OWASP-aligned practices.
                </li>
                <li>
                  Designed API workflows + data models using MySQL for transactions and MongoDB for event logging/audit trails.
                </li>
                <li>
                  Integrated Stripe/PayPal + Shopify/Amazon APIs for reliable payments, webhooks, and production-grade sync.
                </li>
                <li>
                  Containerized services with Docker and deployed on AWS (EC2) behind Nginx; supported CI/CD delivery.
                </li>
                <li>
                  Implemented testing (unit/integration/API), mocking, and webhook validation; improved release confidence.
                </li>
              </ul>
            </article>

            <article class="card">
              <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 class="text-xl font-semibold text-white">Backend Developer — LuckiMedia (India)</h3>
                <p class="text-gray-400 text-sm">Jan 2021 – Dec 2023</p>
              </div>

              <ul class="mt-4 list-disc list-inside text-gray-200/80 space-y-2">
                <li>
                  Architected scalable RESTful services using MVC + OOP patterns to support high-traffic production workloads.
                </li>
                <li>
                  Built and maintained Express.js APIs (auth, validation, middleware pipelines, service-to-service communication).
                </li>
                <li>
                  Delivered production commerce solutions for public Shopify marketplace apps (merchant config, checkout UX, sales workflows).
                </li>
                <li>
                  Integrated payment/commerce flows (transactions, refunds, data sync) to improve reliability and interoperability.
                </li>
                <li>
                  Diagnosed production issues, optimized APIs/queries, and reduced recurring defects by ~25–30%.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Education -->
        <section>
          <div class="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 class="text-2xl font-semibold text-white">Education</h2>
              <p class="text-gray-300/80 mt-2">Quick snapshot.</p>
            </div>
          </div>

          <div class="card space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <p class="text-white font-semibold">Graduate Certificate in Web Design & Development</p>
                <p class="text-gray-200/80">Conestoga College, Canada</p>
              </div>
              <p class="text-gray-400 text-sm">Aug 2025</p>
            </div>

            <div class="h-px bg-white/10"></div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <p class="text-white font-semibold">BTech in Information Technology</p>
                <p class="text-gray-200/80">GTU, India</p>
              </div>
              <p class="text-gray-400 text-sm">Jul 2021</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Reusable card to match Home vibe */
.card {
  border-radius: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
}

.card-title {
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.65rem;
}

.card-text {
  color: rgba(255, 255, 255, 0.80);
  line-height: 1.65;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: 1;
  padding: 0.45rem 0.65rem;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
}
</style>
