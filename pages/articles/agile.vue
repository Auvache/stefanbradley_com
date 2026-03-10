<template>
	<section class="section-padding">
		<div class="container thin-content">
			<div>
				<h1 class="text-sm-center mb-4">Living the Agile Life</h1>
				<h2>Apply software engineering principles to build a more intentional, fulfilling life.</h2>
				<p>Software developers use Agile thinking to build better products through iteration, feedback, and continuous improvement. These same principles can transform how you approach personal growth, productivity, and decision-making.</p>
				<p>In software engineering, teams work in short cycles—planning, building, measuring results, and adjusting based on what they learn. This iterative approach prevents wasted effort on the wrong solutions and keeps teams focused on what actually works. The same framework applies to life: instead of committing to rigid plans without testing them, you can iterate your way toward clarity.</p>
				<p class="pb-4">Whether you're working to overcome perfectionism, manage unplanned work, or simply want to think more systematically about your goals, these articles show you how engineering principles translate to everyday life. You don't need to be technical to benefit—these concepts work for anyone who wants to build a more deliberate, fulfilling life through experimentation rather than guesswork.</p>
				<hr>
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
	"agile",
];

const featuredArticles = ref([
		'engineering-skills-for-a-more-fulfilling-life',
		'ninety-ninety-rule-overcoming-unplanned-work'
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
let metaTitle = 'Agile Personal Development: Apply Software Principles to Life | Stefan Auvache Bradley'
let metaDescription = 'Learn how to apply Agile thinking from software engineering to personal growth, productivity, and intentional living. Discover frameworks, techniques, and practical applications for a more fulfilling life.'
let metaKeywords = 'agile personal development, agile thinking, software engineering principles, personal growth, iteration, intentional living, productivity systems, agile methodology life, self improvement frameworks, experimentation over planning'
let metaCanonical = 'https://www.stefanauvache.com/articles/agile'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})

definePageMeta({
	layout: 'hub'
})
</script>