<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>Scoreboard syndrome, co-comparison, keeping up with the Joneses—these all fall under the umbrella of <em>Social Comparison Theory</em>.</p>
	      <p>Social comparison was first conceptualized in the 1950s by Dr. Leon Festinger, a pioneer in the field of social psychology. He observed the natural tendency that people have to evaluate their abilities, opinions, and progress by comparing themselves to others. This is especially true when objective benchmarks are unavailable.</p>
	      <p>Social comparison misaligns priorities and wastes resources. It kills motivation and undermines progress.</p>
	      <p>Social comparison is especially pernicious online. Anybody can pretend to be anything they want to be, and most people pretend to be better off than they actually are. Loving relationships, financial success, and inner peace can all be easily staged on the internet (#WokeUpLikeThis).</p>
	      <p>The danger here is that people compare their real, imperfect, messy lives to carefully-curated performances and impractical ideals. Social comparison is a major driver of the Destination Dilemma. We assume we want something because others have it. It pushes us to waste time and resources chasing a life that we don't actually want.</p>
	      <h2>The Solution</h2>
	      <p>To avoid the pitfalls of social comparison, think about the following things:</p>
	      <h3>1) Question Goals Before Pursuing Them</h3>
	      <p>Social comparison thrives on autopilot.</p>
	      <p>Just because someone else reads 50 books a year or runs a five-minute mile or lives in South Africa for six months of the year doesn't mean that you want those things too.</p>
	      <p><a href="https://misq.umn.edu/a-longitudinal-study-of-herd-behavior-in-the-adoption-and-continued-use-of-technology.html" target="_blank">A study published in MIS Quarterly</a> showed that when people observe others adopting goals or behaviors, they tend to imitate what they see rather than rely on their own judgement or values. This is called <em>herd behavior</em>. When we don't have a strong sense of direction, it is easier to follow the crowd than to figure out what it is we really want to do.</p>
	      <p>To make matters worse, <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3005626/" target="_blank">goals can be activated and pursued entirely outside of conscious awareness</a>. Once you see someone else's goal, you can actually pursue it without ever consciously choosing to do so.</p>
	      <p>Before committing to a goal, ask where it came from. Does it come from you or someone else? Why do you want that thing?</p>
	      <h3>2) Experiment with Small Versions of Success</h3>
	      <p>You don't need to achieve something in its entirety to experience what it would be like. You can run small-scale experiments to learn more about what you want.</p>
	      <p>The point here is to try to get a feel for what succeeding at your goals will feel like. Don't set out to write a bestselling novel if you don't enjoy writing short stories and sharing them with your friends. We often forget that success involves doing the same thing over and over again. If you can't stand doing the work, then don't pursue the goal.</p>
	      <p>When you identify a goal that you want to achieve, find a small-scale experiment that will give you a taste of success. Once you have a feel for the process, you can make an informed decision whether or not to pursue that goal on a larger scale.</p>
	      <h3>3) Reflect Often (Iterate)</h3>
	      <p>Life is busy. Our values shift as we discover what is important to us. It is easy to escape the trap of social comparison one day and fall back into it the next.</p>
	      <p>The antidote is reflection.</p>
	      <p>Be it in the evening, on Saturday mornings, or on New Year's Eve, you need to stop and think about why you want what you want and why you do the things that you do. Regular reflection will help you avoid repeatedly falling in line with the herd.</p>
	      <p>It also empowers iteration. Iteration is about learning from our actions and using what we learn to inform our future actions. The more often you reflect, the more intentional your actions will be, and intention is the enemy of autopilot.</p>
	      <h2>Only You Can Prevent Social Comparison</h2>
	      <p>Let's say that you have caught the entrepreneurship bug. You have seen online business gurus posting about how amazing their lives are because they have turned their passion into a million-dollar business, and you want in.</p>
	      <p>Instead of quitting your job, taking out a loan, and diving headfirst into building a business, stop and think about what you really want. Where did your goal come from? Did it emerge from your own values and interests, or did it come from watching someone else's carefully curated success story?</p>
	      <p>If you choose to pursue the goal, start small. You don't need to quit your job to test whether you'd actually enjoy entrepreneurship. Start a side project. Write an article. Set up a landing page. The important thing is to do some of the work that it will take to achieve the larger goal.</p>
	      <p>After running your experiment, reflect. Was the work exciting? Fulfilling? Was it worth the result? You now have real data to support your decisions. You can choose to push forward, adjust your course, or abandon the goal entirely based on your own experience.</p>
	      <p>If you don't take care, social comparison can push you to chase other people's goals. Question your motives. Test the waters. Reflect and iterate with confidence. Set goals with intention.</p>

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