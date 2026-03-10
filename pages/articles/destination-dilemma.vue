<template>
	<section class="section-padding">
		<div class="container thin-content">
			<div>
				<h1 class="text-sm-center mb-4">The Destination Dilemma</h1>
				<h2>How to make decisions and build a fulfilling life when you don't know what you want.</h2>
				<p>How can you plan for what you haven't experienced? Most people lock into goals—career paths, relationships, lifestyles—without testing whether those goals will actually bring fulfillment. They achieve success but wonder why it feels hollow.</p>
				<p>The Destination Dilemma is the gap between achievement and satisfaction. You can't know what you truly want until you've lived it, yet you're expected to commit to major life decisions based on imagination alone. The solution isn't more planning—it's iteration. Test your assumptions, gather real data about what brings you satisfaction, and adjust your direction based on experience rather than guesswork.</p>
				<p class="pb-4">These articles explore how to navigate uncertainty, align your life with your values, and build fulfillment through experimentation. Whether you're unsure what career fits you, unsatisfied despite achieving your goals, or overly certain about plans you haven't tested, you'll find frameworks for making better decisions when the destination isn't clear.</p>
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
	"destination dilemma",
];

const featuredArticles = ref([
	'monk-week-solitude-intentional-living',
	'an-equation-for-a-successful-blog-and-life'
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
let metaTitle = 'The Destination Dilemma: Making Decisions When You Don\'t Know What You Want | Stefan Auvache Bradley'
let metaDescription = 'How can you plan for what you haven\'t experienced? Learn how to make better decisions under uncertainty and build a fulfilling life without knowing exactly where you\'re going.'
let metaKeywords = 'destination dilemma, decision making uncertainty, finding fulfillment, what do i want in life, career uncertainty, achievement vs fulfillment, intentional living, life direction'
let metaCanonical = 'https://www.stefanauvachebradley.com/articles/destination-dilemma'
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