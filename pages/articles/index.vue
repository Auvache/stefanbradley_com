<template>
	<section class="section-padding">
		<div class="container thin-content">
			<div>
				<h1 class="text-sm-center mb-4">Articles</h1>
				<p>I write about Agile Personal Development—applying software engineering principles to build a more intentional, fulfilling life.</p>

				<p>At 30, my life looks nothing like I planned at 18—and that's a good thing. I accidentally discovered that the same iterative thinking I used as a software engineer worked better for life decisions than rigid planning. Now I explore this approach publicly, testing what works and sharing what I learn.</p>

				<p>These articles cover five core areas: applying Agile principles to personal growth, learning through iteration and experimentation, navigating the Destination Dilemma when you don't know what you want, building systems that create space for what matters, and turning failure into fuel for improvement. Whether you're uncertain about your direction, unsatisfied despite achieving goals, or overly certain about untested plans, you'll find frameworks for building a more intentional life.</p>

				<p class="pb-4">Explore articles by topic, or browse recent posts below.</p>

				<hr>

				<h2 class="mb-3">Browse by Topic</h2>
				<ul class="list-unstyled pb-3">
					<li v-for="category in categories" :key="category.slug" class="mb-2">
						<p>
							<NuxtLink :to="`/articles/${category.slug}`">{{category.name}}</NuxtLink> {{category.description}}
						</p>
					</li>
				</ul>

				<h2 class="mb-3">Read the Latest Articles</h2>
				<div id="featuredArticles">
					<div class="article-card" v-for="article in sortedArticles.slice(0,4)" :key="article.slug" :id="article.slug">
						<NuxtLink :to="article.articlePath" class="text-decoration-none" >
							<img :src="`/img/articles/${article.imagePath}`" alt="">
							<h2 class="intro-heading">{{article.title}}</h2>
						</NuxtLink>
						<p>{{article.summary}}</p>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script setup>
import Articles from "assets/articlesList.json"

const categories = [
	{
		name: "Living the Agile Life",
		slug: "agile",
		description: "Apply software engineering principles to personal growth, productivity, and intentional living."
	},
	{
		name: "Iteration Over Planning",
		slug: "iteration",
		description: "Use experiments and short-term goals to find direction and make adjustments."
	},
	{
		name: "The Destination Dilemma",
		slug: "destination-dilemma",
		description: "How can you set worthwhile goals if you don't know what you want?"
	},
	{
		name: "Systems Over Chaos",
		slug: "systems",
		description: "Build sustainable productivity systems to create space for the things that matter most."
	},
	{
		name: "Learning From Failure",
		slug: "failure",
		description: "Turn setbacks into data and use failure for continuous improvement."
	}
];

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

// meta tags
let metaTitle = 'Stefan Auvache Bradley | Articles'
let metaDescription = 'Read articles with insights on business, technology, literature, philosophy, music, and life.'
let metaKeywords = 'Stefan, Stefan Auvache Bradley, Bradley, articles, agile living, agile, simple systems, intentional action, meaningful focus, Stefan Auvache Bradley articles'
let metaCanonical = 'https://www.stefanauvache.com/articles'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})

definePageMeta({
	layout: 'hub'
})
</script>