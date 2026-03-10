<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>Stephen King has written dozens of bestsellers, sold over 350 million books, and built a net worth north of $500 million. While impressive, these are metrics he pays little attention to. As an author, there is only one metric that King pays attention to—words written per day.</p>

	      <p>Write 2,000 words a day. That’s the system. That’s the metric. Because King directly controls how many words he writes a day, he has built a system around that metric. Many of those words never end up being used in a book or a short story, but that isn’t the point. Stephen King doesn’t directly control the number of books he sells, which stories turn into movies and series, or even the number of books he writes. There are external factors that influence those things—popular trends, publishing strikes, pure luck. One thing that he can do every day, come hell or high water, is write 2,000 words. Tracking and meeting that metric has made him one of the most successful writers in the world.</p>

	      <h2>Lagging Indicators</h2>
	      <p>Book sales, awards, accolades, and reviews all fall under the category of lagging indicators—results that show up weeks, months, or years after the work is done. The term comes from <em>The 4 Disciplines of Execution</em>—a book and goal-setting framework developed by Chris McChesney, Sean Covey, and Jim Huling. Lagging indicators (also called lag measures) are outcomes we want, but aren’t helpful metrics to track day-to-day. Grades, Instagram followers, points scored, and book sales lag behind the efforts that produced them.</p>

	      <p>Obsessing over lag measures doesn’t change them. Ironically, the more you focus on them, the more likely you are to drift from the work that improves them in the first place. Take a musician who checks album sales, Spotify streams, and followers every morning. That’s time and energy not spent in the studio. Tracking those numbers doesn’t make new music—it pulls effort away from the work that does. And it’s the new music that drives those numbers in the first place.</p>

	      <h2>Lead Measures</h2>
	      <p>Lead measures are the opposite of lagging indicators. They’re the daily, controllable inputs that directly influence results. You can’t control whether you’ll get cavities at your next dentist visit, but you can control whether you floss tonight. Flossing is a lead measure. Cavities are a lagging indicator.</p>

	      <p><em>The 4 Disciplines of Execution</em> defines lead measures as actions you can influence right now—and ones that predict success. It’s like tracking the cause instead of the effect.</p>

	      <p>Musicians can track time spent writing or hours in the studio. Athletes can track training sessions or reps completed. Students can track focused study time instead of fretting endlessly about their GPAs. Lead measures are immediate and directly impact future outcomes. They give you something you can measure today.</p>

	      <p>The trick is to build a system around lead measures. This is precisely what Stephen King did with his personally enforced 2,000-words-a-day writing quota. He doesn’t directly control published novels, movie deals, or sales, but he directly controls the thing that drives those results.</p>

	      <p>Paul Rabil, a transformative figure in the professional lacrosse world, talks about getting his shots in every day. Early in his career, he committed to taking 100 shots a day—not to impress anyone, but to build consistency and sharpen his skills. He wasn’t tracking goals or wins—he was tracking reps. That mindset—focusing on lead over lag—is what separates pros from amateurs.</p>

	      <h2>500 Hours of Guitar</h2>
	      <p>I got my first guitar for my eleventh birthday. I played a lot—enough to learn chords and stumble through songs—but I never felt like I was ever that good. I’d pick it up for a few months, then drift away when something else caught my attention. I liked playing, but I wasn’t improving.</p>

	      <p>When I left for college, I decided to leave my guitar behind. I wouldn’t have the space to play in the dorms, and I didn’t want the distraction anyway. By my second year, the stress of school and life started to build. Over Thanksgiving break, I picked up my guitar from home and brought it back with me. I started playing a little bit every day, just to clear my head, and it worked.</p>

	      <p>While playing helped to ease the tension, I still wasn’t very good. So I set a goal: play 500 hours of guitar over the next year. I didn’t track scales or songs or progress. Just time. It seemed like an outlandish goal at first, but I dedicated myself to it.</p>

	      <p>I ended the year just shy of the goal—something like 450 hours—but I had never improved so much in my whole life. I was confident playing for other people, had written several of my own songs, and even started singing. Since that year, I have performed at open mics, recorded original music, and played live shows.</p>

	      <p>That’s the power of tracking what you can control. I didn’t try to track how many songs I could play or new techniques I learned. I focused on the metric: how many hours have I played?</p>

	      <p>When setting out to measure your performance, look for lead measures. Track words written, miles on the track, doors knocked, shots taken, and hours played. You will build a foundation to support the outcomes you are aiming for. The lagging indicators will catch up.</p>

	      <p>Measure things within your control.</p>

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
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.description}`
let metaKeywords = `Stefan, Stefan Auvache Bradley, Bradley, ${articleInfo.categories.join(', ')}, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/articles/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>