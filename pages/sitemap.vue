<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div class="d-flex flex-column">
        <h1>Sitemap</h1>
        <ul class="list-unstyled d-inline-block mb-5">
          <li><NuxtLink to="/">Homepage: Featured articles</NuxtLink></li>
          <li><NuxtLink to="/about">About Stefan Auvache Bradley</NuxtLink></li>
          <li><NuxtLink to="/articles">Articles</NuxtLink></li>
          <li><NuxtLink to="/articles/agile">Agile Article Hub</NuxtLink></li>
          <li><NuxtLink to="/articles/iteration">Iteration Over Planning Article Hub</NuxtLink></li>
          <li><NuxtLink to="/articles/destination-dilemma">The Destination Dilemma Article Hub</NuxtLink></li>
          <li><NuxtLink to="/articles/systems">Systems Over Chaos Article Hub</NuxtLink></li>
          <li><NuxtLink to="/articles/failure">Failure From Learning Article Hub</NuxtLink></li>
          <li><NuxtLink to="/subscribe">Subscribe to newsletter</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
	      <h2 class="t1">All Articles</h2>
	      <ul class="list-unstyled">
		      <li v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
			      <NuxtLink :to="article.articlePath">{{article.title}}</NuxtLink>
		      </li>
	      </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Articles from "assets/articlesList.json"
import sortByKey from "~/functions/sortByKey.js";

// featured articles
let sortedArticles = []
for (let i in Articles) {
	Articles[i].articlePath = '/articles/' + Articles[i].slug
	if (Articles[i].image) {
		Articles[i].imagePath = Articles[i].image
	}
	sortedArticles.push(Articles[i])
}

sortedArticles = sortByKey(Articles, "title", "atoz")
// meta tags
let metaTitle = 'Sitemap | Stefan Auvache Bradley'
let metaDescription = 'Browse all pages and articles on stefanauvachebradley.com—exploring Agile Personal Development and iterative approaches to life.'
let metaKeywords = 'Stefan Auvache Bradley sitemap, agile personal development articles'
let metaCanonical = 'https://www.stefanauvachebradley.com/sitemap'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>