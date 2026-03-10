<template>
	<section class="section-padding">
		<div class="container thin-content">
			<div>
				<h1 class="text-sm-center mb-4">Systems Over Chaos</h1>
				<h2>Build sustainable productivity systems that create space for what matters.</h2>
				<p>Productivity isn't about doing more—it's about creating the capacity to iterate. Efficient systems free up mental energy and time for experimentation, deep work, and intentional action. Without systems, you're constantly reactive, unable to focus on what truly moves your life forward.</p>
				<p>The right systems protect your attention, manage unplanned work, and help you work deeply on meaningful goals. They're not rigid rules but frameworks that adapt to your life while keeping you aligned with what matters. Strong systems enable iteration by giving you the space to test ideas, gather feedback, and adjust your approach.</p>
				<p>Whether you're looking to improve focus, design your environment for intentional living, or build sustainable routines that support experimentation, these articles provide practical frameworks. Learn how to measure what you can control, batch similar tasks, and create the conditions for doing truly great work.</p>
				<hr class="pb-4">
				<h2>Start Here</h2>
				<ArticleCardsList :slugs="featuredArticles" />
				<div>
					<div v-for="(articles, category) in articlesList">
						<h2 class="text-black">More Articles</h2>
						<ul :id="`${category.toLowerCase().replaceAll(' ','-')}-list`" class="list-unstyled">
							<li v-for="article in articles">
								<NuxtLink :to="'/articles/' + article.slug">{{article.title}}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script setup>
import {ref} from "vue";
import Articles from "assets/articlesList.json"

const categories = [
	"systems",
];

const featuredArticles = ref([
	'improve-focus-actionable-ways',
	'measure-what-is-in-your-control'
])

const articlesList = ref({})
categories.forEach(category => {
	articlesList.value[category] = []
})

categories.forEach(category => {
	for (let article in Articles) {
		if (Articles[article].categories.includes(category)) {
			articlesList.value[category].push(Articles[article])
		}
	}
})

// meta tags
let metaTitle = 'Productivity Systems for Intentional Living | Stefan Auvache Bradley'
let metaDescription = 'Build sustainable systems that create space for iteration and experimentation. Learn frameworks for focus, time management, and working deeply on what matters.'
let metaKeywords = 'productivity systems, intentional living, time management, deep work, sustainable productivity, focus systems, environment design, productivity frameworks'
let metaCanonical = 'https://www.stefanauvachebradley.com/articles/systems'
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

definePageMeta({
	layout: 'hub'
})
</script>