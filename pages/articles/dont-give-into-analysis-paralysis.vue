<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>There’s a moment when analyzing feedback stops being productive and starts being a stall tactic.</p>

	      <p>You know the feeling—you’ve gathered the data, asked the right questions, spotted a few patterns... and now you’re just circling. Maybe there’s more to uncover. Maybe a deeper insight is hiding in the numbers. Maybe it’s safer to wait one more week, run one more report, ask one more person.</p>

	      <p>Maybe. But probably not.</p>

	      <p>Analysis paralysis is what happens when the fear of making the wrong decision keeps you from making any decision at all. It’s easy to tell yourself that you are just being cautious, or thorough, or that you need to better understand the problem. But most of the time, you’ve already got enough information—you’re just afraid to take action.</p>

	      <p>The goal of analysis is clarity, not certainty. You’re not trying to predict the future with perfect accuracy. You’re trying to make a well-informed next move. And the truth is, you’ll learn more by doing something and watching the results than you ever will by sitting on a pile of theories.</p>

	      <p>Good feedback loops don’t end with insight—they end with action.</p>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import articlesList from "@/assets/articlesList";

const router = useRouter()
const { currentRoute } = router
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/articles/',''))
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.description}`
let metaKeywords = `Stefan, Stefan Auvache Bradley, Bradley, ${articleInfo.categories.join(', ')}, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/articles/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>