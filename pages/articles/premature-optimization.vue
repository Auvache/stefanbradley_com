<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p class="quote">"Premature optimization is the root of all evil" - Donald Knuth</p>
        <p>Shaun White has dedicated his life to snowboarding. As a result, he is the most well known professional snowboarder of all time. He is less known as the guitarist of his band,
          <a href="https://www.google.com/search?q=bad+things+band&rlz=1C1GCEU_enUS983US983&oq=bad+things+band&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDI4OTZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank">Bad Things</a>.
          Shaun won a guitar in a snowboarding competition, and figured that it would be pretty cool if he could learn to play a song or two with it. Then he started a band with some friends. They were then invited to play at Lollapalooza, to which he said, "man, this is heavy."</p>
        <p>The invitation was to play on the kids’ stage. After rocking out for the kids, some wild stuff went down. One of the bands playing the festival decided to pull out of their performance. Their fans went crazy, destroying equipment and verging on starting a riot. The organizers were freaking out and needed a band to fill the slot. So Shaun said, "we’re a band." They then found themselves on a main stage at one of the biggest music festivals in the country rocking out for tens of thousands of people. They even got an encore.</p>
        <p>You will never be perfectly prepared to do something great. You can spend all of the time in the world practicing, rehearsing, and studying. You will never feel totally prepared to take opportunities that are truly worthwhile. Over preparation is the death of productivity and success. Premature optimization - making things better than they need to be before moving on - prevents you and me from producing our best work.</p>
        <p class="quote">"How many pages have I produced? I don’t care. Are they any good? I don’t even think about it. All that matters is I’ve put in my time and hit it with all I’ve got. All that counts is that, for this day, for this session, I have overcome Resistance."<br> - Steven Pressfield</p>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks";
import articlesList from "@/assets/articlesList";
import formatDate from "~/functions/formatDate";

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