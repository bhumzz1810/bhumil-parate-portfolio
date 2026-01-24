<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue'
</script>

<template>
  <PageContainer>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
  <div>
    <h1 class="text-4xl font-bold mb-3">Resume</h1>
    <div class="w-16 h-1 bg-indigo-500 rounded-full"></div>
  </div>

  <a
    href="/Bhumil_Parate_Resume.pdf"
    download
    class="mt-6 sm:mt-0 inline-flex items-center gap-2
           border border-gray-700 hover:border-indigo-400
           px-5 py-2.5 rounded-lg text-gray-300 hover:text-indigo-400 transition"
  >
    Download Resume
  </a>
</div>


    <!-- Summary -->
    <p class="text-gray-300 max-w-3xl mb-12">
      Full-Stack Developer with 3+ years of professional experience building
and shipping production web applications using Laravel, Vue, and React.

      Experienced in API development, payment integrations, admin dashboards,
      and business-critical workflows for live products.
    </p>

    <!-- Experience -->
    <!-- Experience -->
<h2 class="text-2xl font-semibold mb-4">Professional Experience</h2>

<div class="mb-12">
  <h3 class="text-xl font-semibold">
    Software Engineer — iCube TechnoLabs
  </h3>
  <p class="text-gray-400 text-sm mb-3">
    Aug 2021 – Dec 2023
  </p>

  <ul class="list-disc list-inside text-gray-300 space-y-1">
    <li>
      Worked as a Full-Stack Developer on multiple client and product-based
      applications for real businesses across different regions
    </li>
    <li>
      Built and maintained RESTful APIs using Laravel and Node.js,
      consumed by web and mobile applications
    </li>
    <li>
      Developed admin panels and dashboards using Vue and React
      for managing users, content, orders, and subscriptions
    </li>
    <li>
      Integrated third-party services including Stripe, PayPal,
      Amazon APIs, and Shopify APIs
    </li>
    <li>
      Contributed to public Shopify Marketplace apps such as
      Diamond Link, LM Sticky Cart Drawer & Upsell,
      and LM Request Quote & Hide Price
    </li>
    <li>
      Supported deployment, debugging, and production issue resolution
      in production environments
    </li>
  </ul>

  <h4 class="text-lg font-semibold mt-6">
    Internship Trainee — iCube TechnoLabs
  </h4>
  <p class="text-gray-400 text-sm mb-3">
    Jan 2021 – Jul 2021
  </p>

  <ul class="list-disc list-inside text-gray-300 space-y-1">
    <li>
      Assisted in developing frontend and backend features using
      HTML, CSS, JavaScript, and PHP
    </li>
    <li>
      Worked with MySQL and NoSQL databases for data storage and validation
    </li>
    <li>
      Supported UI/UX improvements and feature enhancements
    </li>
    <li>
      Gained hands-on experience with real client projects and
      production codebases
    </li>
  </ul>
</div>


    <!-- Education -->
    <h2 class="text-2xl font-semibold mb-4">Education</h2>

    <ul class="text-gray-300 space-y-3">
      <li>
        <strong>Graduate Certificate — Web Design & Development</strong><br />
        Conestoga College, Canada
      </li>
      <li>
        <strong>Bachelor of Information Technology</strong><br />
        Gujarat Technological University, India (CGPA: 8.09)
      </li>
    </ul>
  </PageContainer>
</template>
