<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p class="quote">"Powerful people judge everything by what it costs, not just in money but in time, dignity, and peace of mind."<br /> - Robert Greene</p>
        <p>In Christopher Nolan’s <em>The Prestige</em>, Mr. Angier (played by Hugh Jackman) wants to buy a mystical machine with the power to clone its subjects from the inventor Nikola Tesla (played by David Bowie). The following conversation occurs, starting with Tesla:</p>
        <p>"Mr. Angier, have you considered the cost of such a machine?"</p>
        <p>"Price is not an object."</p>
        <p>"Perhaps not, but have you considered the cost?"</p>
        <p>Cost is more than money. In fact, money is one of the least "costly" things out there. You can always make more of it. In the case of Angier and Tesla, the machine possesses a terrible power to create and destroy, the effects of which ruin the rest of Angier’s life. Owning the machine costs far more than just money.</p>
        <p>If you are dreaming of buying an expensive sports car or starting a new company, the cost stretches far beyond the price tag. How will you feel when somebody scratches that new car? Will you overextend yourself to make sure that never happens? How will your spouse or your children feel when you spend time on a business venture that could have been spent with them?</p>
        <p>My point is not to demonize desire or ambition; it is to encourage you to ask yourself what matters most. Robert Greene says it best:</p>
        <p>"Powerful people judge everything by what it costs, not just in money but in time, dignity, and peace of mind."</p>
        <p>What do you want most? What sacrifices are you willing to make for the things you want? Have you considered the cost?</p>

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