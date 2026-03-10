<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p>Stéphane Breitwieser always had an eye for artwork. He would become enthralled with various paintings and sculptures, and was even moved to tears by their beauty.</p>

        <p>So, he started taking them.</p>

        <p>For the most part, Breitwieser utilized only the clothes on his back, a Swiss army knife, and his girlfriend as a lookout during his heists. He stole flintlock pistols, marble statues, famous paintings, crossbows, silver serving trays, candlesticks, tobacco boxes, tapestries, and silver-plated, ostrich-egg chalices from museums all over Europe. He once stole a four-foot-tall, 150-pound statue of the Virgin Mary from a chapel in France by slowly heaving it down the aisle and out to his car.</p>

        <p>Breitwieser performed over 200 heists in his seven-year career, amassing a collection of stolen art worth close to $2 billion (with a “b”). He took 239 artworks from 179 different museums before finally being arrested. Had he not pressed his luck and been caught returning to the scene of one of his many crimes, he would likely be the wealthiest art thief in the world today.</p>

        <p>I neither condone nor encourage theft of any kind, but there is a lesson to be learned from Breitwieser - don’t let fear prevent you from taking action.</p>

        <p>It is easy for fear to disguise itself as overpreparation. The fear of failure can push you to mull over granular details even when they may not be all that relevant to the task at hand.</p>

        <p>In software engineering, this is called Premature Optimization.</p>

        <p>Don’t wait until things are perfect to take action. Even the most thorough planning cannot account for all of the details of a project.</p>

        <p>“The incompleteness and inconsistencies of our ideas become clear only during implementation” - Dr. Frederick Brooks, Jr.</p>

        <p>More often than not, overly detailed planning is a roadblock to progress. Premature Optimization causes us to spend time and resources on solving problems that might not matter or even exist in the long run.</p>

        <p>It is impossible to know all of the things that are wrong with your plan. Sometimes, you just need to act if you want to know if your plan is going to work.</p>

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