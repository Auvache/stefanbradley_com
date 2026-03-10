<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>In the early 1900s, building a car was a slow, arduous process. Skilled craftsmen and small teams of workers would assemble each vehicle piece by piece. It took twelve hours or more to complete the assembly for a single car. This made cars extremely expensive. They were luxury items. The average person couldn’t afford to own a car.</p>
	      <p>Henry Ford didn’t like that at all. He grew up on a farm in Michigan and knew firsthand how machines could change people’s lives. His goal was to make cars available to farmers, factory workers, and families.</p>
	      <p>Ford looked for a way to bring the cost of production down. He saw other industries employing assembly-line style methods to speed up production. He took that idea, experimented with it, and tailored it to the automobile manufacturing process.</p>
	      <p>The Ford Motor Company assembly line reduced the time it took to build a car from twelve hours to roughly 90 minutes. That is almost a 90% cut in production time—an 8x improvement in efficiency. The assembly line reduced the cost of production so much that Ford was able to sell cars at a fraction of the cost, pay employees twice the standard rate for their work, and still turn a large profit.</p>

	      <h2>ROI</h2>

	      <p><em>Return on investment</em> (ROI) is a measure of how much you put into something compared to how much you get back.</p>
	      <p>The Ford Motor Company invested money, time, and resources into researching, building, and implementing effective assembly lines for automobile manufacturing. The return on their investment was a dramatic increase in productivity, which saved the company substantial time and money in the long run. The return on their investment was certainly worth the cost.</p>
	      <p>Even though the ROI of improvement can be astronomical, most organizations don’t invest all that much in becoming better. Improvement takes planning, experimentation, resources, and effort. It pulls time away from other important work, which can seem ineffective and wasteful in the short term.</p>
	      <p>The best companies recognize that getting better at what they do is worth the cost. A short-term, upfront investment in improvement can pay significant dividends down the road.</p>

	      <h2>The ROI of Self Improvement</h2>

	      <p>This concept—the positive ROI of improvement—applies to individuals just as much as it does to organizations.</p>
	      <p>Spending time to become a more capable, well-rounded person has a positive ROI. Working to <NuxtLink to="/articles/improve-focus-actionable-ways">increase your attention span</NuxtLink> makes future work easier and more fulfilling. Taking time to <NuxtLink to="/articles/eliminate-automate-delegate-do">automate repeated tasks</NuxtLink> frees up time in the future to do more important, impactful work. Intentional, <NuxtLink to="/articles/how-to-change-your-life-by-reading">improvement-focused reading can change the course of your life</NuxtLink>.</p>
	      <p>As a new software engineer, I focused solely on getting my work done. I looked at my list of work to do each day and spent all of my time grinding through it.</p>
	      <p>There were two problems with my approach:</p>
	      <p>I wasn’t very efficient. If I ran into a problem I couldn’t solve, I would just try different things until it worked. I would brute-force my way forward until I found a solution that worked, even if I didn’t really understand it.</p>
	      <p>I didn’t think about the consequences of my actions. Most of the time, my main focus was making things work. I didn’t take time to write code that was easy to understand, which made making changes in the future much more difficult.</p>
	      <p>These amateur qualities made my job way harder than it needed to be. I always felt behind on my work and never felt like I knew what was going on.</p>
	      <p>Eventually, enough was enough. I saw the experienced engineers around me and how capable they were. I wanted to be more like them. I decided to dedicate time every day to getting better at doing my work.</p>
	      <p>I read several <em>books</em> on software development principles. I asked questions when I got stuck and tried my best to understand the underlying principles of what I was doing. I worked on improving soft skills like focus and time management.</p>
	      <p>As time went on, my work got easier. I knew more about what I was doing, could fix issues much faster, and made fewer mistakes. Today, I am more efficient, less stressed, and really enjoy my day-to-day work.</p>

	      <h2>Improvement Work is Necessary</h2>

	      <p>Improvement work is necessary work. It is not something extra to do if you have time left over after finishing everything on your plate. It is vital work that makes you better at doing more things in the future.</p>
	      <p>Getting better at doing things is worth the effort. Take time for self-improvement.</p>

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
