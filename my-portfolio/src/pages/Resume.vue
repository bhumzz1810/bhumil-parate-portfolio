<template>
  <section class="min-h-screen px-6 py-16">
    <div class="max-w-4xl mx-auto space-y-16">

      <div>
        <h1 class="text-4xl font-bold mb-6">Resume</h1>
        <p class="text-gray-400 text-sm">
          Full Stack Developer with 3+ years of experience designing and delivering scalable web applications
          using PHP, Laravel, RESTful APIs, and MVC architecture, with strong backend expertise and modern
          frontend exposure. Proven ability to integrate payment gateways, third-party APIs, and
          relational/NoSQL databases, while supporting cloud deployments, CI/CD workflows, and performance
          optimization in agile environments.
        </p>

        <a
          href="/Bhumil_Resume_Full Stack Developer.pdf"
          download
          class="inline-flex mt-6 border border-gray-700 hover:border-indigo-400 px-5 py-2.5 rounded-lg text-gray-300 hover:text-indigo-400 transition"
        >
          Download Resume (PDF)
        </a>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Technical Skills</h2>

        <div class="grid sm:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 class="font-medium text-white mb-2">Programming</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>PHP</li>
              <li>JavaScript (ES6+)</li>
              <li>SQL</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium text-white mb-2">Backend</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>Laravel</li>
              <li>RESTful API Development</li>
              <li>MVC Architecture, OOP</li>
              <li>Middleware, API Versioning</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium text-white mb-2">Frontend</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>Vue.js, React.js</li>
              <li>HTML5, CSS3</li>
              <li>Responsive UI Development</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium text-white mb-2">Databases</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>MySQL (schema design, query optimization)</li>
              <li>MongoDB (NoSQL data modeling)</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium text-white mb-2">Integrations</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>Stripe API</li>
              <li>PayPal API</li>
              <li>Shopify APIs</li>
              <li>Amazon APIs</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium text-white mb-2">Cloud & DevOps (Foundational)</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>AWS Fundamentals (EC2, S3, RDS)</li>
              <li>Docker (containerization basics)</li>
              <li>Nginx (reverse proxy)</li>
              <li>CI/CD concepts</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium text-white mb-2">Tools & Practices</h3>
            <ul class="list-disc list-inside space-y-1">
              <li>Git, GitHub, Postman</li>
              <li>Agile collaboration</li>
              <li>SOLID principles, secure coding</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Experience</h2>

        <div class="space-y-10">
          <div>
            <h3 class="text-xl font-semibold">
              Full Stack Developer — Siemens (Canada)
            </h3>
            <p class="text-gray-400 text-sm mb-3">Aug 2025 – Present</p>

            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Engineered Laravel (PHP) REST APIs using MVC architecture and OOP principles.</li>
              <li>Implemented secure API workflows and authentication layers; integrated frontend consumers using Vue/React.</li>
              <li>Modeled transactional schemas in MySQL and used MongoDB for event logs and payload storage.</li>
              <li>Integrated Stripe, PayPal, Shopify APIs, and Amazon APIs; validated webhook lifecycles and payment states.</li>
              <li>Deployed containerized Laravel apps using Docker with AWS fundamentals and Nginx routing; applied CI/CD concepts.</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold">
              Backend Developer — LuckiMedia (India)
            </h3>
            <p class="text-gray-400 text-sm mb-3">Jan 2021 – Dec 2023</p>

            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Architected scalable RESTful services using MVC patterns and object-oriented design.</li>
              <li>Built role-driven admin dashboards for operational control of users, content, and orders.</li>
              <li>Supported production commerce solutions, including public marketplace applications in partner ecosystems.</li>
              <li>Integrated payment and commerce services, orchestrating transaction lifecycles and data synchronization.</li>
              <li>Performed release support, debugging, defect resolution, and performance tuning for production stability.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Education</h2>

        <div class="space-y-4 text-gray-300">
          <p>
            <strong>Graduate Certificate — Web Design & Development</strong><br />
            Conestoga College, Canada
          </p>

          <p>
            <strong>BTech in Information Technology</strong><br />
            Gujarat Technological University (GTU), India
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
