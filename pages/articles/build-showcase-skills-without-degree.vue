<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>Capable people are often overlooked because they don’t have proper credentials.</p>
	      <p>People looking for jobs, promotions, or other opportunities for advancement run into this problem all of the time. Because it is difficult for employers to gauge how well applicants will perform without seeing them work, they use credentials as a measuring stick for comparing candidates.</p>
	      <p>However, a college-educated person isn’t necessarily more competent than someone without a degree. Credentials indicate potential ability, but they don’t prove it.</p>

	      <h2>Credentialism</h2>
	      <p>Society falls constantly into the trap of credentialism—treating degrees and certificates as the main measure of one’s ability. Companies won’t hire people without college degrees and universities won’t admit students without high GPAs and test scores. Credentialism pushes people to prioritize developing their credentials more than the competence that those credentials are meant to indicate.</p>
	      <p>This leads to a string of issues.</p>

	      <h3>Misaligned Incentives</h3>
	      <p>Credentialism rewards appearance over ability.</p>
	      <p>Think about a high-school student who is so hell-bent on getting straight As that they avoid taking challenging classes. In prioritizing GPA first, they miss out on potential learning. They choose a metric—a 4.0 GPA—over becoming more competent.</p>
	      <p>This is an example of Goodhart’s Law in action—when a measure becomes the target, it stops being a good measure. People start to optimize for the metric instead of the underlying goal. Because credentials have become so important, people are incentivized to prioritize degrees, certificates, and other measurements over their actual abilities.</p>

	      <h3>The Experience Paradox</h3>
	      <p>As more people focus on earning degrees and certificates, the power those credentials carry decreases.</p>
	      <p>A bachelor’s degree that used to guarantee secure employment has become a baseline requirement to even apply for many jobs. New hires are regularly expected to have prior job experience, even though they are looking for their first job. This is called the experience paradox—they need experience to land a job, but they need a job to gain experience. Bright, competent people are unable to find jobs because they don’t have a way to stand out from the crowd.</p>
	      <p>The experience paradox further incentivizes people to find ways to stand out from the crowd. It pushes them to cut corners, pad their resumes, and chase other credentials that don’t actually lead to competence.</p>

	      <h3>Hiring the Wrong People</h3>
	      <p>As people build themselves up to look more capable than they actually are, they set themselves up to fail.</p>
	      <p>People who oversell their abilities with inflated credentials are, unfortunately, often rewarded with jobs. Once hired, they underperform, feel chronically overwhelmed, and struggle to meet expectations for job performance.</p>
	      <p>On the flip side, those who focus on building their competence instead of chasing credentials go unnoticed. Because they don’t have a specific degree or certificate, they are overlooked during the hiring process. They end up underemployed, pushed into fields unrelated to their strengths or interests, and are left largely unsatisfied with their jobs.</p>

	      <h2>The Solution: Build Your Skills Through Building Artifacts</h2>
	      <p>In college, I took a research course that allowed me to pick a topic from the tech world and study it on my own for a semester. The professor in charge had one requirement to pass the course—I needed artifacts. By artifacts, he meant physical evidence that I had done some work. Without evidence, how could he know if I had actually spent three months doing research?</p>
	      <p>To overcome the problems that accompany credentialism:</p>
	      <p><i>Focus on building artifacts that directly build and display your skills.</i></p>
	      <p>Take a web developer struggling to land their first real job. Instead of cramming for interviews and polishing their resume, they could build their own website, learn a bunch of practical skills in the process, and have a project that showcases what they are capable of.</p>
	      <p>Building artifacts that directly improve your skills will help you display your competence without overselling yourself. This strategy works for aspiring engineers, writers, advertisers, and project managers.</p>
	      <p>Create your own portfolio, blog, or side business. Work on it over time to develop your skills. Even if it isn’t perfect, it will make you more competent and more credible.</p>
	      <p>If you are struggling to find open doors because of inexperience or lack of credentials, build your skills by building artifacts.</p>

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