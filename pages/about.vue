<template>
	<section class="section-padding bg-black-denim">
		<div class="container thin-content">
			<h1 class="text-white text-center">About Stefan Auvache Bradley</h1>
			<hr class="white">
			<div class="d-flex flex-column flex-sm-row align-items-center gap-4">
				<img src="@/assets/img/profile.jpg" alt="Stefan Auvache Bradley" style="width: 250px; border: 1px solid rgba(255,255,255,0.25)" class="rounded-circle">
				<div class="text-white">
					<p>Hello. My name is Stefan Auvache Bradley.</p>
					<p>I'm a software engineer with a Master's degree in Information Systems Management from Brigham Young University. I live in Vancouver, Washington with my family.</p>
					<p>I write about how to iteratively build a life you actually want instead of chasing goals that ultimately leave you feeling unfulfilled. Every week, I share one idea about building your life the way you build great software—through small experiments and thoughtful iteration.</p>
				</div>
			</div>
			<hr class="white">
			<div class="text-white">
				<h2 class="text-white">What Is Agile Personal Development?</h2>
				<p>In software engineering, teams use Agile methodology to build products through short cycles of planning, building, measuring, and iterating. Instead of spending months on a plan that may be wrong, they ship small increments, learn from real feedback, and adjust.</p>
				<p>I believe the same approach works for life. Most of us were taught to set big goals and follow rigid plans. But how do you plan for something you've never experienced? How do you set the right goals when you don't yet know what fulfillment looks like for you?</p>
				<p>Agile Personal Development is the practice of applying iterative, experimental frameworks from software engineering and project management to personal growth, career decisions, and intentional living. Plan a little, act, measure what happened, and iterate.</p>
			</div>
			<hr class="white">
			<ul class="list-unstyled text-white">
				<li><NuxtLink class="link" to="/subscribe">Subscribe to Food for Thought — the weekly newsletter</NuxtLink></li>
				<li><NuxtLink to="/articles">Read articles</NuxtLink></li>
				<li><NuxtLink to="/contact">Contact Stefan</NuxtLink></li>
			</ul>
		</div>
	</section>
</template>

<script setup>
// meta tags
let metaTitle = 'About Stefan Auvache Bradley | Software Engineer & Writer'
let metaDescription = 'Stefan Auvache Bradley is a software engineer and writer who applies Agile development and project management principles to personal growth and intentional living. Master\'s in Information Systems Management from BYU.'
let metaKeywords = 'Stefan Auvache Bradley, about Stefan Auvache Bradley, agile personal development, software engineer writer, BYU information systems, iterative personal growth'
let metaCanonical = 'https://www.stefanauvachebradley.com/about'
useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  keywords: metaKeywords,
  canonical: metaCanonical,
  robots: 'index, follow',
  ogUrl: metaCanonical,
  ogType: 'profile',
  ogImage: 'https://www.stefanauvachebradley.com/img/profile.jpg',
  twitterTitle: metaTitle,
  twitterDescription: metaDescription,
  twitterImage: 'https://www.stefanauvachebradley.com/img/profile.jpg',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
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
    })
  }]
})
</script>
