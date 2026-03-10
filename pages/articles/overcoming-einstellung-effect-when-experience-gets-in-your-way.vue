<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>In 1942, psychologists Abraham and Edith Luchins designed an experiment to test how experience and success shape decision-making.</p>
	      <p>The experiment gave participants the challenge of measuring out a specific amount of water using three jars of various sizes. Participants were divided into two groups: a practice-problem group and a go-for-it group (my words, not theirs). The practice-problem group did five practice problems before doing four test problems. The go-for-it group skipped the practice problems and went straight for the test.</p>
	      <p>All of the practice problems required lengthy, complicated solutions (fill jar B, subtract jar A once, subtract jar C twice, etc.). The test problems could be solved using the same complicated formula but also had much simpler solutions (like A minus C or A plus C).</p>
	      <p>The results of the experiment were eye-opening. Participants in the practice-problem group overwhelmingly used overly-complicated methods to solve the test problems, while virtually all of the go-for-it group participants found simpler solutions.</p>
	      <p>Abraham and Edith Luchins dubbed this phenomenon the <em>Einstellung Effect</em>—the tendency to rely on familiar strategies, even when easier or better alternatives exist.</p>
	      <p>The word einstellung comes from German. It means "setting" or "attitude." The Einstellung Effect means that relying on our prior experience can actually prevent us from making the best strategic choices or using the best tools.</p>
	      <h2>The Einstellung Effect in Action</h2>
	      <p>Think about a high school math teacher who drills algebra into his students' heads with hundreds of problems every week.</p>
	      <p>Repetition is a time-tested method for learning, but it is hardly the most efficient method out there. There is a lot of rigorous research out there supporting inquiry-based learning, conceptual understanding approaches, and spaced repetition as effective tools for building understanding and reducing student anxiety. Thanks to the Einstellung Effect, however, that math teacher is likely to resist these strategies. Change is tough, especially when you have had success and don't see a need to change your approach.</p>
	      <p>To be clear, experience itself is not the problem. We all learn, find what works for us, build confidence, and develop competence through gaining experience. The Einstellung Effect happens when we rely on familiar methods because they are familiar. It is the antithesis of intentionality. If we never question why we do what we do, we miss out on more straightforward, effective ways of doing things.</p>
	      <h2>How to Overcome the Einstellung Effect</h2>
	      <p>Overcoming the Einstellung Effect requires two things: reflection and experimentation.</p>
	      <h3>1) Ask Why You Do What You Do</h3>
	      <p>Periodically question your methods. It doesn't need to be constant, just consistent. Ask why you approach problems in a certain way, or why you use specific tools or methods. Why does your schedule look the way that it does? How do you handle your to-do list, and why?</p>
	      <p>Even if you don't change anything, understanding why you do what you do is important. That high school math teacher doesn't need to abandon algebra drills. He should, however, know why he uses them and whether they're still the best tool for the job. Questioning and reflecting takes you off of autopilot. It forces you to be intentional.</p>
	      <p>If you find that you can't defend your decisions, then it is likely time for a change.</p>
	      <h3>2) Test Small Changes</h3>
	      <p>You don't need to throw everything out and start over. You can run small experiments by making simple adjustments and analyzing the results.</p>
	      <p>In college, I studied information systems management. Almost all of my professors were either software engineers or data analysts, and all of them loved to experiment.</p>
	      <p>Before starting the program, every student took a personality evaluation test. We were then grouped into different teams based on various personality groupings. One semester, we were grouped by probable camaraderie (personalities that get along together really well). The next semester, we were grouped based on complementary personality traits that balance each other out. The professors ran all sorts of other experiments. They varied workloads during different parts of the year, played with the class schedule, and gave us varying levels of autonomy throughout the program, all in the name of optimizing the learning experience for future students.</p>
	      <p>By running your own experiments, you can carefully, intentionally change the way that you live your life.</p>
	      <h2>Stay Intentional Through Iteration</h2>
	      <p>If you aren't careful, the Einstellung Effect can turn you into a zombie of sorts. When you do things because you have always done them a certain way, you miss opportunities for growth. Past success doesn't mean that you are optimized. It means that you found a solution, and not necessarily the best one.</p>
	      <p><NuxtLink to="/articles/agile-development-a-pattern-for-improvement">Iterative development</NuxtLink> keeps you intentional. It is all about making plans, taking action, and learning from the outcomes. Reflect on the decisions you make and the tools you use. Ask yourself why you do the things that you do. Run experiments. Test different ways of doing things. Learn new things and apply what you learn.</p>
	      <p>Don't let the Einstellung Effect pull you down. Stay intentional.</p>

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
