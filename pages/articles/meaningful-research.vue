<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p>In December 2009, a dozen Pixar employees flew from San Francisco to Boston to spend time with students and faculty on the Harvard and MIT campuses. They visited everything from research labs to frat houses, taking detailed notes about how the students interacted with each other, how the teachers inspired and intimidated the new students, and what it feels like to eat cheap pizza in front of a 350-year-old library.</p>

        <p>Three years later, Monsters University hit theaters. The experience of young monsters navigating the social and academic issues that accompany attendance at a prestigious university felt authentic. Everything from the letterman’s jackets to graffiti on desks was spot on (except the flying monster professors).</p>

        <p>Pixar, as a company, understands meaningful research. When writing Ratatouille, the team went to Paris to visit both Michelin-starred restaurant kitchens and the sewers running beneath them. When Finding Nemo was in production, a team visited the San Francisco sewage treatment plant to see if a small fish could make it from a dentist office drain to the ocean in one piece. A live ostrich lived on the Pixar campus during production on <a href="https://www.pixar.com/feature-films/up" target="_blank">Up</a> to inspire the animators working on Kevin, the giant bird character. Pixar employees have traveled to Venezuela, gone dumpster diving, and been scuba certified all in the name of research.</p>

        <p>The benefits of asking useful questions are realized by doing meaningful research. For research to be meaningful, it must have a specific context. Imagine how different Monsters University would feel if the Pixar team had simply relied on their own college experiences to create the on-screen campus. Mike and Sulley would have attended a piecemeal university with conflicting details from the ivy league and community colleges. The filmmakers needed to create Harvard University for the monster world. All of their research needed to fit that context.</p>

        <p>A good context for research is dictated by useful questions. Useful questions are specific.</p>

        <p>Are you trying to get better at your job? Get better grades in school? Manage the schedule and stress of being a parent?</p>

        <p>What questions are you asking to bring yourself closer to those goals? Those questions establish the context, direction, and quality of your research. That research informs your plans and goals, which shape your future.</p>

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