<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p>Happiness doesn’t come from achieving goals. It comes from overcoming the problems that stand in the way of us achieving our goals.</p>

        <p>Investor Ray Dalio says this about his life’s work.</p>

        <p>“In my early years, I looked up to extraordinarily successful people, thinking that they were successful because they were extraordinary. After I got to know such people personally, I realized that all of them - like me, like everyone - make mistakes, struggle with their weaknesses, and don’t feel that they are particularly special or great. They are no happier than the rest of us, and they struggle just as much or more than average folks. Even after they surpass their wildest dreams, they still experience more struggle than glory. This has certainly been true for me. While I surpassed my wildest dreams decades ago, I am still struggling today. In time, I realized that the satisfaction of success doesn’t come from achieving your goals, but from struggling well.”</p>

        <p>Aiming high, creating a plan of action, and attacking our problems head-on feels good because solving problems is fulfilling. Ryan Holiday talks about how solving problems pushes us forward in <i>The Obstacle is the Way</i>. Paul Rabil and Steven Pressfield talk about the daily fulfillment of putting in work, regardless of the outcome (<i>The Way of the Champion</i> and <i>The War of Art</i>). Dr. Viktor Frankl talks about finding meaning by fighting for survival in <i>Man’s Search for Meaning</i>.</p>

        <p>If you are looking for a source of meaning in your life, find an obstacle and work to overcome it. It doesn’t matter if you find the struggle in self-betterment, making an impact in your community, or mastering a new skill. The key is to find something to overcome and to struggle well on your way to overcoming it.</p>

        <p>Tommy Emmanuel has been playing the guitar for over 65 years. He finds joy in playing the guitar not because of his talent or performance or the money or the fame or the lifestyle. Those things are secondary. He finds joy in the struggle of deepening his craft through practice.</p>

        <p>“You work out the skill of playing it, and with enough playing and enough dedication, that skill turns to music. And, girls and boys, that’s a great reason to get out of bed.”</p>

        <p>To find joy, struggle well.</p>

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