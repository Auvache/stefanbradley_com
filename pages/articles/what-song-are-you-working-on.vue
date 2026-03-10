<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p class="quote">“How is an idea created? Maybe sometimes it strikes like lightning, but mostly it will develop slowly through intensive search under numerous mistakes.” - Rudolph Diesel</p>

        <p>Sir Paul McCartney has written over a thousand songs. His song Yesterday, which he wrote during his time with The Beatles, has been covered more than any other song in the history of recorded music. Over 2,200 versions of his song have been recorded or performed by various artists. A year before the song was released, Paul played a working version of Yesterday for fellow musician Eric Clapton. The lyrics went like this:</p>

        <p>“Scrambled eggs... Everybody calls me scrambled eggs.”</p>

        <p>The most covered song of all time - scrambled eggs.</p>

        <p>Paul McCartney is a prolific songwriter for several reasons. Here are two.</p>

        <p>First, he writes a lot of songs.</p>

        <p>Volume is key in finding ideas with potential. Whether it be personal pride or fear of wasting effort, people refuse to "kill their darlings" (William Faulkner). They stick to the songs they’ve written like their lives depend on it. To create something great, generate a lot of ideas. Then learn to discern which of those ideas have potential and which do not.</p>

        <p>Second, he works to refine his ideas with potential into great songs.</p>

        <p>Companies fail to gain traction because founders don’t spend enough time working on the core idea of their product. Books fail to entertain because authors build stories on foundations that haven’t been properly refined. Great products are built on great ideas, and great ideas are sculpted out of unrefined ideas that hold potential. When you have a good idea, take the time to make it great.</p>

        <p>Paul McCartney found an idea on the guitar that had great potential. To work out the music and melody, he used the first lyrics that came to his mind. Once the music was ready, he worked on lyrics until the song was complete.</p>

        <p>What song are you working on? What problems are you trying to solve? Generate ideas. Find the ones with potential. Then refine those until you have something great.</p>
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
useArticleSeo(articleInfo)
</script>