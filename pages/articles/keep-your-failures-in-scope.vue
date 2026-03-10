<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>In their book <em>The Self-Driven Child</em>, William Stixrud and Ned Johnson say the following about success and failure:</p>

	      <p>“We have the tendency in our society to think that ‘with enough hard work, anything is possible.’ Well if you didn’t make it, the dangerous corollary goes, you must not have worked hard enough… you can work hard and still not get what you want. The real question is, what do you make of that setback? Do you take it as a verdict on your worth? Do you decide to come up with a different strategy? Or do you take the hit and try for a different goal?”</p>

	      <p>Sometimes we work our hardest, play a great game, or execute perfectly on well-laid plans and still fail. We lose the game and don’t reach our goals. When failure comes knocking, you have options. Sometimes (most of the time), you can try again. Learn from your mistakes, make an adjustment, and give it another shot. You can also take what you’ve learned, cut your losses, and try for another target. Both are viable options, depending on the situation.</p>

	      <p>What you shouldn’t do is allow your failures to negatively impact your self-worth. Failure happens for a lot of reasons. Different people have different circumstances, come from different places, have different aptitudes, and catch different breaks. Failing today doesn’t make you a failure. Nobody is perfect. Do your best to be objective, figure out what went wrong, and move forward with what you have learned.</p>

	      <p>Keep your failure in scope. Don’t let it bleed into other areas of your life—especially your future.</p>

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