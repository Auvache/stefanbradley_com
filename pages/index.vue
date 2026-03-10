<template>
	<h1 class="ada-hide">Agile Personal Development by Stefan Auvache Bradley</h1>
	<SubscribeBarHero />
	<section class="section-padding">
		<div class="container thin-content">
			<h2 class="ada-hide">Featured Articles</h2>
			<div id="featuredArticles">
				<div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
					<NuxtLink :to="article.articlePath" class="text-decoration-none" >
						<img :src="`/img/articles/${article.imagePath}`" :alt="article.title">
						<h2 class="intro-heading">{{article.title}}</h2>
					</NuxtLink>
					<p>{{article.summary}}</p>
				</div>
			</div>
			<div class="d-flex flex-column justify-content-center mt-5 text-center thinnest-content">
				<NuxtLink class="btn block mb-3" to="/subscribe">Subscribe for weekly updates</NuxtLink>
				<NuxtLink class="btn" to="/articles">Browse more articles</NuxtLink>
			</div>

		</div>
	</section>
	<About />
</template>

<script setup lang="ts">
import Articles from "assets/articlesList.json"
import sortByKey from "~/functions/sortByKey.js";

// featured articles
let sortedArticles = []
for (let i in Articles) {
	if (Articles[i].featured) {
		Articles[i].articlePath = '/articles/' + Articles[i].slug
		if (Articles[i].image) {
			Articles[i].imagePath = Articles[i].image
		}
		sortedArticles.push(Articles[i])
	}
}

// latest articles
// let sortedArticles = sortByKey(Articles, "datePublished", "ztoa")

// sortedArticles = sortedArticles.slice(0,5)
definePageMeta({
	layout: 'no-footer'
})

// meta tags
let metaTitle = 'Agile Personal Development | Stefan Auvache Bradley'
let metaDescription = 'Stop chasing goals you don\'t actually want. Learn iterative, experimental frameworks from software engineering to build a life that actually fits. Join thousands testing their way to clarity.'
let metaKeywords = 'Stefan Auvache Bradley, agile personal development, iterative goal setting, life experiments, software engineering life lessons, alternatives to goal setting, sprint planning for life, personal development framework, project management principles for life'
let metaCanonical = 'https://www.stefanauvachebradley.com'
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
h1 {
	margin-bottom: -1rem;
}
</style>