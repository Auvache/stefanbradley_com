<template>
	<section class="section-padding">
		<div class="container thin-content">
			<div>
				<h1 class="text-sm-center mb-4">Iteration Over Planning</h1>
				<h2>Test your way to clarity through small experiments and continuous adjustment.</h2>
				<p>You can't know what you truly want until you've experienced it. Rather than locking into rigid plans based on untested assumptions, iteration lets you discover what works through action and feedback.</p>
				<p>Small experiments compound into clarity. Test an idea for a week. Gather data about what actually brings satisfaction. Adjust your approach based on what you learn. This cycle of experimentation turns uncertainty into insight and helps you build a life aligned with what you discover matters most.</p>
				<p>Whether you're exploring career options, testing relationship dynamics, or figuring out how to spend your time, these articles show you how to move forward without needing all the answers first. Start small, learn fast, and iterate your way toward a more fulfilling life.</p>
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
	"iteration",
];

const featuredArticles = ref([
	'how-to-improve-anything-feedback-loop',
	'starting-successful-creative-projects'
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
let metaTitle = 'Iteration Over Planning: Test Your Way to Clarity | Stefan Auvache Bradley'
let metaDescription = 'Stop locking into rigid plans. Learn how to iterate your way toward a fulfilling life through small experiments, feedback loops, and continuous adjustment.'
let metaKeywords = 'iteration over planning, iterative self improvement, experimentation, feedback loops, test before committing, personal experiments, adaptive planning, continuous improvement'
let metaCanonical = 'https://www.stefanauvachebradley.com/articles/iteration'
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