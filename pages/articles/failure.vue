<template>
	<section class="section-padding">
		<div class="container thin-content">
			<div>
				<h1 class="text-sm-center mb-4">Learning From Failure</h1>
				<h2>Turn setbacks into data and use failure as fuel for continuous improvement.</h2>
				<p>Failure isn't the opposite of success—it's part of the process. Every experiment that doesn't work teaches you something valuable about what does. The difference between people who grow and people who stay stuck isn't whether they fail, but how they respond to failure.</p>
				<p>Learning from failure means treating setbacks as information rather than identity. Analyze what went wrong without letting it define you. Extract the lesson, adjust your approach, and try again with better insight. This mindset transforms failure from something to avoid into something that accelerates growth.</p>
				<p>These articles show you how to keep failures in scope, conduct honest post-mortems, seek candid feedback, and build resilience through obstacles. Whether you're struggling with a major setback or want to get better at learning from small mistakes, you'll find frameworks for turning failure into forward momentum.</p>
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
	"failure",
];

const featuredArticles = ref([
	'failure-is-an-option',
	'keep-your-failures-in-scope',
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
let metaTitle = 'Learning From Failure: Turn Setbacks into Growth | Stefan Auvache Bradley'
let metaDescription = 'Failure isn\'t defeat—it\'s data. Learn how to analyze setbacks, extract lessons, and use failure as fuel for continuous improvement and personal growth.'
let metaKeywords = 'learning from failure, failure as data, growth mindset, resilience, learning from mistakes, post mortem analysis, reframing failure, iteration and feedback'
let metaCanonical = 'https://www.stefanauvachebradley.com/articles/failure'
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