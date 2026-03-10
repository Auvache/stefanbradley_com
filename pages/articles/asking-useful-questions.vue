<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p>When Cal Newport started his PhD in computer science at MIT, he had just submitted the manuscript for his first book. He wanted to be an established author by the time he graduated, but getting a PhD was no joke. The time commitment would undoubtedly hinder his writing progress over the next five years. Undaunted, Cal made a long-term vision. He would find a way to keep writing while attending MIT and graduate as an established author.</p>

        <p>With his long-term vision set, he was free to set short-term goals to close the gap between where he was and where he wanted to be. The big question was this: how could he make time for writing when he was going to be so busy with school? His answer: learn to be okay with long periods of little visible progress. There would be times when progress would be painstakingly slow because of his rigorous schedule. There would also be times when he was free to work on his own projects. He needed to learn to work on something periodically without giving up on it.</p>

        <p>When school work ramped up, his goals centered around MIT more than his writing. When life was less hectic, he worked on his writing career. By graduation, Cal had published two books with a third on the way.</p>

        <p>Asking the right questions means asking useful questions. Useful questions are questions that a) you don’t already have the answer to, and b) are relevant to the task at hand. Cal Newport wasn’t sure how he was going to be productive and consistent enough to work on multiple long-term projects. Investigating that question led him to a functional answer; learn to be productive while working on a project inconsistently.</p>

        <p>Useful questions point research in the right direction, inform better goals, and lead to more useful actions.</p>

        <p>Here are some questions I have found that, when applied to specific circumstances, can be useful.</p>

        <p>When setting goals generally:</p>
        <ol start="1">
          <li>What are you hoping to achieve?</li>
          <li>Have you considered alternatives?</li>
          <li>How will you know if it is working?</li>
          <li>“If you have a 10-year plan of how to get there, you should ask: why can’t you do this in 6 months?” - Peter Thiel</li>
        </ol>

        <p>When working on creative projects:</p>
        <ol start="1">
          <li>What does this teach?</li>
          <li>What does this solve?</li>
          <li>How am I entertaining others with this?</li>
          <li>What am I giving?</li>
          <li>What am I sharing?</li>
        </ol>

        <p>When trying to find a career you will be successful in:</p>
        <ol start="1">
          <li>What feels like fun to me, but work to other people?</li>
          <li>What makes me lose track of time?</li>
          <li>Where do I get greater returns than the average person?</li>
          <li>What comes naturally to me?</li>
        </ol>

        <p>When creating a product:</p>
        <ol start="1">
          <li>What is it?</li>
          <li>Who is it for?</li>
          <li>How would I pitch this product in 15 seconds? What about two minutes?</li>
        </ol>

        <p>These questions can be used as a base for generating more questions. As you focus on asking useful questions, you will find useful answers. Those answers inform planning, spur more useful questions, and lead to more directed, useful action.</p>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks";
import articlesList from "@/assets/articlesList";
import formatDate from "~/functions/formatDate";

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