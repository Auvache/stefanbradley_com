<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>Most people never do truly great work because they never give their full attention to anything.</p>

	      <p>We skim. We jump between tasks. We keep a dozen tabs open and call it “multitasking,” but deep down we know better. The brain isn’t built for constant context switching—it’s built to lock in, to go deep, and to do hard things one at a time.</p>

	      <p>Cal Newport calls this deep work:</p>

	      <p class="quote">“Deep work is the ability to focus without distraction on a cognitively demanding task. It’s a skill that allows you to quickly master complicated information and produce better results in less time.”</p>

	      <p>This isn’t productivity theater. It’s not “inbox zero” or time-blocked calendars. It’s depth. Real, focused effort aimed at something that actually matters.</p>

	      <p>It’s also hard. It takes practice to shut out noise and sit with a single task long enough to push through the slow, quiet parts—where real breakthroughs tend to happen. But this kind of effort pays off. It separates the people who just stay busy from the ones who build things that last.</p>

	      <p>Focusing on one thing at a time isn’t trendy. It doesn’t generate dopamine the way jumping between tasks does. But it works. It’s how meaningful work gets done.</p>

	      <p>By embracing the discipline of deep work—undistracted focus on one cognitively demanding task—we unlock a level of clarity, performance, and personal momentum that scattered effort will never touch. We can do truly great work.</p>

	      <p>Do you give your full attention to the task at hand?</p>

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