<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>Imagine you are a rookie in the NBA and are watching footage of yourself airballing shot after shot. You see your body position, how the defender follows you, and how you release the ball. You watch it over and over, trying to figure out what went wrong so you can work to fix the problem and stop missing so many shots. This is analysis—the process of turning data into useful, actionable insight. When done properly, analysis leads to a plan of action informed by data.</p>

	      <p>Here are some things to think about when analyzing feedback:</p>

	      <h2>Look for patterns</h2>
	      <p>One air ball doesn’t tell the whole story. Everybody makes mistakes, but if you find yourself making the same mistake over and over, you’ve discovered a pattern that needs your attention. These patterns reveal consistent weaknesses, not isolated mistakes. When analyzing feedback, avoid obsessing over anecdotes. Look for patterns.</p>

	      <h2>Symptoms are not the cause</h2>
	      <p>Consistently missing shots is a symptom of a deeper problem. The real issue might be fatigue or poor shot selection. If you try to remedy symptoms and not the root cause of your problem, you will spend time and effort on improving without fixing your problem. Don’t stop with visible symptoms—dig to find the root of the problem and fix it. Otherwise, you risk solving the wrong problem.</p>

	      <h2>Turn insights into action</h2>
	      <p>Insight without application turns feedback into trivia. Once you know the source of your problem, fix it. The insights you gain from the process of capturing and analyzing feedback should directly inform your plan of attack. Turn insights into action.</p>

	      <h2>Avoid analysis paralysis</h2>
	      <p>There’s a fine line between useful reflection and getting stuck in your own head. Diagnose the problem, make a plan to fix it, and get to work. Overanalyzing leads to hesitation and self-doubt. Feedback is fuel for improvement. Use it to propel you forward. Don’t drown in it. Make decisions based on what you’ve learned and follow through on them. Don’t get tied up in too much analysis.</p>

	      <p>During the 1997 NBA playoffs, 18-year-old Kobe Bryant shot four airballs in a row during an overtime loss to the Utah Jazz. The next day, he hit the gym to figure out exactly why he had performed so poorly. After recreating those shots, he realized his body was spent. He had played 30 or so games against high-school-level athletes the year before, and his NBA-rookie legs weren’t strong enough to play an 80-game season against professionals and perform well in the playoffs. So he adjusted his training for the coming season. He focused on strengthening and conditioning his body to endure the demands put on a professional basketball player. He went on to win five NBA championships and is the 4th-highest-scoring player ever in the NBA.</p>

	      <p>Look for patterns, find the root cause of your problems, and fix it.</p>

	      <p>Analyze and apply lessons logically.</p>

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