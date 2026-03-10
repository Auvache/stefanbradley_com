<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>Victor Wooten, a five-time Grammy-winning bassist, once said that if you can play one note perfectly, you can play them all perfectly. In his book <em>The Music Lesson</em>, he doesn’t teach scales or drills. He teaches that music is a language you pick up one note at a time. To be a master musician, you must master the smallest set of notes or the smallest technique until it feels natural. Then you move on to the next piece, then the next, then the next.</p>

	      <p>I use a version of this technique when I learn to play a new song on the guitar. If there is a complicated series of notes, I take three or four notes and play them over and over again until they are easy to play. Then I take the next few notes and do the same thing. Once I have a few chunks down, I connect all of them and practice a larger section. Before I know it, I have the whole song down.</p>

	      <p>This approach lines up with a well-known concept in psychology called chunking—a term coined by Harvard psychologist George A. Miller in the 1950s. Chunking is how we turn small, manageable bits of information into larger patterns we can actually use. Whether you’re learning music, a new language, or a complex skill at work, the same principle holds: mastery comes three notes at a time.</p>

	      <p>What are you trying to master? Can you break it up into small, manageable chunks, master them, then string them together to build something real and usable?</p>

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
useArticleSeo(articleInfo)
</script>