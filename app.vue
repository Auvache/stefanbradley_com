<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import '@/scss/_global.scss'

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "Stefan Auvache Bradley",
          "alternateName": "Stefan Auvache",
          "url": "https://www.stefanauvachebradley.com",
          "description": "Agile Personal Development — applying software engineering principles to build a more intentional, fulfilling life through iteration, experimentation, and feedback.",
          "author": {
            "@id": "https://www.stefanauvachebradley.com/#person"
          }
        },
        {
          "@type": "Person",
          "@id": "https://www.stefanauvachebradley.com/#person",
          "name": "Stefan Auvache Bradley",
          "alternateName": "Stefan Auvache",
          "url": "https://www.stefanauvachebradley.com",
          "image": "https://www.stefanauvachebradley.com/img/profile.jpg",
          "jobTitle": "Software Engineer",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Brigham Young University",
            "department": "Marriott School of Business"
          },
          "knowsAbout": [
            "Agile Development",
            "Software Engineering",
            "Project Management",
            "Personal Development",
            "Information Systems Management"
          ],
          "description": "Software engineer and writer exploring how iterative software engineering principles apply to personal growth, goal-setting, and intentional living."
        }
      ]
    })
  }]
})
</script>