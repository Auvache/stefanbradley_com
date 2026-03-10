<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>Ned Johnson has been helping kids with school since the early 90s. He is a professional tutor who has spent more than 40,000 one-on-one hours helping students overcome their fear of standardized testing, college applications, and learning in general.</p>

	      <p>One piece of advice he gives is to focus on what comes more naturally to you than to other people. “But isn’t that wrong?” asked one of his students. “Isn’t it cheating to just do what’s easy?”</p>

	      <p>Ned responded: “Look, you’re 5’8’’ and 180 pounds. You can bench press 380 pounds. That’s why you’re a running back. But you would be a horrible marathoner.”</p>

	      <p>You are much more likely to find success in a career that comes naturally to you. If you want to pursue something that you are terrible at or not naturally gifted in, it will be much more difficult to come out on top.</p>

	      <p>While it is easy to put effort into something you love (even if you aren’t great at it) and there is something to be said about trying new things, your success in a career situation is more about what you are naturally gifted at than what you love to do.</p>

	      <p>If you are choosing a career or looking to switch what you are doing, find something that you like well enough to do, that presents ample opportunities for employment, and that aligns with your natural strengths. When you find something that matches these three criteria, you’ve found a career worth pursuing.</p>

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