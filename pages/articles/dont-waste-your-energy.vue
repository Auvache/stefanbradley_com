<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p>Joe Rantz came home from school one day to find his family packed up and headed out on the road.</p>

        <p>“What’s up pop? Where are we going?”</p>

        <p>“I’m not sure. Seattle, for now, then California maybe. But, Son, the thing is, Thula wants you to stay here. I would stay with you, but I can’t. The little kids are going to need a father more than you are. You’re pretty much all grown up now anyway.”</p>

        <p>The Great Depression was in full swing, and Joe’s family had decided to leave their homestead in Sequim, Washington, along with their oldest son, and head for greener pastures. Joe was only 15 years old. He went and laid in his bed for a long time, feeling sorry for himself. Eventually, hunger overcame self pity. He made some coffee, fried up some bacon, and did an inventory of the food left in the house by his family. He resolved that day to never rely on anybody else for his meals or his happiness.</p>

        <p>Over the next several years, Joe poached fish, bootlegged booze across the Canadian border, and worked on farms to make his way. He became an Olympic Champion, rowing for the United States in the 1936 Olympic Games in Berlin, Germany. He married his childhood sweetheart, Joyce, graduated from the University of Washington with a degree in chemical engineering, and worked as an engineer for Boeing for 35 years.</p>

        <p>He also forgave his father and step-mother for abandoning him.</p>

        <p>One day, after a rocky encounter with Joe's family, Joyce was fuming. She asked Joe why he wasn’t angry with his family after everything they had put him through. He told her this.</p>

        <p>“It takes energy to get angry. It eats you up inside. I can’t waste my energy like that and expect to get ahead.”</p>

        <p>We can’t control what happens to us. We can control how we respond to the things that happen to us. Joe could have chosen to be angry and bitter, that would have only made his situation worse. He chose instead to have the focus and peace that forgiveness provides.</p>

        <p>It takes energy to get angry. Don’t waste your energy.</p>
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