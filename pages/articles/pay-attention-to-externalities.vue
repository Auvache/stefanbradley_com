<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>At the beginning of the 20th century, American settlers in the Great Plains plowed millions of acres of untamed prairie into productive farmland. When a severe drought hit in the 1930s, topsoil that had previously been held together by various prairie grasses turned to dust and was swept up by the wind into the sky. A massive dust storm blew across the plains. It devastated farms, displaced hundreds of thousands of people, and caused severe economic and environmental damage.</p>

	      <p>The farmers who caused the Dust Bowl weren’t malicious or callous. They hadn’t intended to cause a catastrophe. They were simply ignorant of the potential consequences of their actions.</p>

	      <p>In economics, this kind of secondary or unintentional consequence is called an externality. If you don’t take care of your front lawn, the value of all the homes on your street will drop. If you exercise hard during the day, you are likely to sleep better at night. If you plow the Midwest before a drought, you might create a dust cloud and cause a natural disaster.</p>

	      <p>What you do matters. It not only matters to you—it matters to everyone around you. When making decisions, think about the potential externalities of your actions. Some externalities are good, some are bad, and some will come back to bite you. You change the world for the people around you every day through the externalities caused by your actions. Think before you act. Pay attention to externalities.</p>

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