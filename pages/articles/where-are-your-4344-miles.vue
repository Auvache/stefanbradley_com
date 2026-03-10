<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p>In 1937, the University of Washington men’s rowing crew won their second consecutive national championship. The previous year, they had won not only the national championship, but Olympic Gold in Berlin. Jim Ten Eyck, a storied collegiate rowing coach, said of the Washington varsity crew at the time, “it’s the greatest eight I ever saw, and I never expect to see another like it.”</p>

        <p>Of those eight rowers, three of them had started together as freshmen and learned to row in the same boat. It is estimated that those boys, Roger Morris, Shorty Hunt, and Joe Rantz, rowed some 4,344 miles together during their four-year tenure at the University of Washington. That is far enough to have rowed from their campus in Seattle all the way to Japan. Most of that rowing happened on Lake Washington in the frigid darkness of winter. Those 4,344 miles prepared the boys for a grand total of 28 miles of actual rowing competition. In those 28 miles, Roger, Shorty, and Joe were undefeated.</p>

        <p>We rarely see all of the work that goes into greatness. Stephen King wrote five novels before publishing his first book. Mozart composed over 600 pieces of music before becoming famous. Simone Biles logged over 15,000 hours in the gym before winning her first Gymnastics World Championship at age 16.</p>

        <p>You can’t expect to become great at something if you don’t put in consistent effort over a long period of time. This is as true in athletics and academics as it is in living a fulfilling life. If you want to get better at something, find your “4,344 miles.” Maybe it is a number of words, pages or books written. Maybe it is a number of shots taken, or the conversations you have with your kids.</p>

        <p>Where are your 4,344 miles?</p>
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