<template>
  <section id="subscribe" class="section-padding bg-black-denim">
    <div class="container thinnest-content text-center text-white fst-italic">
	    <h1 class="mb-4">Thanks for subscribing!</h1>
	    <p>You should receive a welcome email shortly.</p>
	    <p>If you don't see it in your inbox, please check your spam or promotions folder and mark it as "Not Spam" so you don't miss future updates.</p>
	    <NuxtLink class="btn btn-white mt-4" to="/articles">Start reading now</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-footer'
})

// meta tags
let metaTitle = 'Thank You for Subscribing | Stefan Auvache Bradley'
let metaDescription = 'Thanks for joining the weekly newsletter. Check your inbox for your first email on Agile Personal Development and iterative approaches to life.'
let metaKeywords = 'Stefan Auvache Bradley, agile personal development, newsletter confirmation'
let metaCanonical = 'https://www.stefanauvache.com/thank-you'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'noindex, follow'})
</script>

<style lang="scss" scoped>
#subscribe {
  min-height: calc(100vh - 120px);

  h1 {
    margin-bottom: -1rem;
  }
}
</style>