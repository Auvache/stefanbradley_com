<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>Ultracrepidarianism is the habit of giving opinions or advice on matters outside of one’s knowledge or competence. An ultracrepidarian is someone who practices ultracrepidarianism.</p>

	      <p>Everyone knows an ultracrepidarian—someone who has seen it all and done it all and knows exactly what you should do and is quick to tell you how to live your life. Their advice is mediocre at best and they are often unpleasant to be around. Ultracrepidarians miss out on opportunities to learn because they either pretend to know everything or actually believe that they know everything.</p>

	      <p>There are, in my mind, two major categories of ultracrepidarian:</p>
	      <ol>
		      <li>Those who pretend to know everything</li>
		      <li>Those who actually think they know everything</li>
	      </ol>

	      <h2>For those who pretend to know everything</h2>
	      <p>In <em>Freakonomics</em>, Levitt and Dubner write that, “Every time we pretend to know something, we are doing the same thing: protecting our own reputation rather than promoting the collective good.” At some point, nearly everyone encounters imposter syndrome—the nagging belief that you lack the skills, intelligence, or right to be where you are. Imposter syndrome tells us that everyone else knows what is going on and that we will look stupid and inferior if we ask questions. It causes people to pretend. Ironically, pretending to know something prevents you from actually learning about what you pretend to understand. Don’t give in to imposter syndrome. If you don’t understand something, ask clarifying questions. The more vulnerable you are about the gaps in your knowledge, the more quickly you can fill those gaps. Don’t pretend to know things you don’t.</p>

	      <h2>For those who think they know everything</h2>
	      <p>Steven Pressfield writes, “It’s one thing to lie to ourselves. It’s another thing to believe it.” If you aren’t pretending and you actually think you know everything, stop it. You do not know everything and you will rob yourself of the ability to learn new things if you continue in your belief.</p>

	      <p>Don't be an ultracrepidarian. Don't fall into the trap of imposter syndrome.</p>

	      <p>Instead of falling into these traps, fight to be humble. Humility tells us to shamelessly admit what we don’t know in the name of improving our understanding. It tells us to be honest about our limitations, stay open to learning, and to be open minded. Don’t prioritize ego over understanding. Don’t avoid challenges that might expose your weaknesses. Growth requires the recognition that you don’t know everything. Fight to be humble.</p>

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