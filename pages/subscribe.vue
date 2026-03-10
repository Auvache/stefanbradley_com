<template>
  <section id="subscribe" class="section-padding bg-black-denim">
	  <div class="container thin-content text-center fade-in">
		  <div>
			  <div class="text-white text-balanced" style="margin-bottom: -2.5rem;">
				  <h1 class="my-2 huge">One Email, One Idea, Every Week</h1>
				  <p class="h2 fw-lighter mb-3">How can we set goals and make plans if we don't know what we want? How can we know what we want if we've never had it?</p>
				  <p class="h2 fw-lighter">Join <span class="fst-italic">Food for Thought</span>—a weekly email about the iterative approach to building a fulfilling life.</p>
			  </div>
			  <div>
				  <div class="subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center text-white" style="min-height: 200px;">
					  <component is="script" data-variant="light" async data-uid="0396ab84d5" src="https://stefan-bradley.ck.page/0396ab84d5/index.js"></component>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-footer'
})

// meta tags
let metaTitle = 'Subscribe to Food for Thought | Stefan Auvache Bradley'
let metaDescription = 'Join the weekly newsletter by Stefan Auvache Bradley on Agile Personal Development. One idea every week about iterating toward a life you actually want—no hype, no fluff.'
let metaKeywords = 'Stefan Auvache Bradley newsletter, agile personal development newsletter, Food for Thought newsletter, weekly insights, iterative self improvement'
let metaCanonical = 'https://www.stefanauvachebradley.com/subscribe'
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

<style lang="scss" scoped>
#subscribe {
  min-height: calc(100vh - 120px);

  h1 {
    margin-bottom: -1rem;
  }
}
</style>