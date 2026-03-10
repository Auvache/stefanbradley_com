<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p>In 2009, US Airways Flight 1549, piloted by Captain Chesley "Sully" Sullenberger and First Officer Jeffrey Skiles, struck a flock of geese shortly after takeoff from LaGuardia Airport in New York City, causing both engines to fail. Realizing they couldn't reach the airport in time, Sullenberger decided to land the plane in the Hudson River. All 155 passengers and crew survived the water landing.</p>

        <p>One of the passengers on the plane was Ric Elias, the CEO and co-founder of Red Ventures. After the crash, he said that he learned three things from the incident:</p>

        <p>First, you should only collect bad wines. If the bottle is ready and the person is there, drink it. Don’t save the good things in life for later. Enjoy life now.</p>

        <p>Second, don’t spend time focusing on negative things that don’t matter. Don’t try to be right - choose to be happy.</p>

        <p>Third, focus on being a good parent. In his life, that is the only thing that truly matters. Find what matters most to you and make that your first priority. Everything else is secondary.</p>

        <p>Miraculously, though many people were injured during the crash, no one died. Ric is still around to watch his kids grow up. In conversation with his friend Dr. Peter Attia, a physician focused on longevity, lifespan, and healthspan, Ric shared this about growing old:</p>

        <p>"I think people get old when they stop thinking about the future. If you want to find someone’s true age, listen to them. If they talk about the past and they talk about all the things that happened that they did, they’ve gotten old. If they think about their dreams, their aspirations, what they’re still looking forward to - they’re young.”</p>

        <p>If you want to live a fulfilling life, do your best to enjoy the present while looking to the future. Make plans to improve and enrich your life, regardless of your age. Take care of yourself, don’t worry about things that are outside of your control, and focus your efforts on things that will pay future dividends in the form of joy.</p>

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