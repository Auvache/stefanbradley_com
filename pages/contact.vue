<template>
  <section class="section-padding bg-black-denim border-bottom border-white">
    <div class="container thinnest-content">
      <div class="text-white">
        <h1 class="text-center mb-4 mt-4">Contact</h1>
	      <div class="email">
		      <p class="text-center text-balanced">You can reach me at <a href="mailto:stefan@stefanauvachebradley.com">stefan@stefanauvachebradley.com</a>. I will do my best to respond promptly.</p>
	      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// meta tags
let metaTitle = 'Contact | Stefan Auvache Bradley'
let metaDescription = 'Get in touch with Stefan Auvache Bradley. Questions about Agile Personal Development, software engineering life lessons, or collaboration inquiries welcome.'
let metaKeywords = 'Stefan Auvache Bradley contact, agile personal development, contact Stefan Auvache Bradley'
let metaCanonical = 'https://www.stefanauvachebradley.com/contact'
useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  keywords: metaKeywords,
  canonical: metaCanonical,
  robots: 'index, follow',
  ogUrl: metaCanonical,
  ogType: 'website',
  ogImage: 'https://www.stefanauvachebradley.com/img/profile.jpg',
  twitterTitle: metaTitle,
  twitterDescription: metaDescription,
  twitterImage: 'https://www.stefanauvachebradley.com/img/profile.jpg',
})
</script>
