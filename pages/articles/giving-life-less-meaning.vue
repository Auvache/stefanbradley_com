<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p class="quote">“Work consists of whatever a body is obliged to do. Play consists of whatever a body is not obliged to do.” - Mark Twain</p>

        <p>In 2000, Uri Gneezy and Aldo Rustichini decided to study the effects of fines on tardiness. They focused their study on a group of child care facilities in Haifa, Israel. For the first month of the experiment, they simply observed how many of the parents were late to pick up their children at the end of the day. After that first month, they posted a sign warning the parents that anyone picking up a child late would be fined 10 Israeli shekels (about $3 at the time) per child.</p>

        <p>Gneezy and Rustichini are economists. Economics, at its core, is the study of why people make the decisions they make and use the resources they use. The economic theory they were testing was this:</p>

        <p>“When negative consequences are imposed on a behavior, they will produce a reduction of that particular response.”</p>

        <p>Basically, punishing bad behavior will reduce the behavior.</p>

        <p>What they found in the study was the opposite. When the fine was imposed, the number of tardy parents grew. The economists increased the fine until, after doubling the initial amount, the increase in parental tardiness stopped.</p>

        <p>Gneezy and Rustichini discovered something about human motivation. In the long run, intrinsic motivation is more powerful than transactional motivation. When the parents were late without any fine, they were punished by the awkwardness of intruding on another person’s schedule. When the fine was introduced, the punishment became transactional. They could now pay a little bit extra to pick up their children without feeling bashful about their tardiness.</p>

        <p>Attaching punishments to a behavior can exacerbate the behavior. The opposite can be true of rewards. Mark Twain says the following in The Adventures of Tom Sawyer.</p>

        <p>“There are wealthy gentlemen in England who drive four-horse passenger-coaches twenty or thirty miles on a daily line, in the summer, because the privilege costs them considerable money; but if they were offered wages for the service, that would turn it into work and then they would resign.”</p>

        <p>Attaching a reward to a behavior can turn intrinsic motivation into transactional motivation. It can take the fun out of whatever you are doing.</p>

        <p>Punishments can absolve you of your guilt when you do something wrong and rewards can take the fun out of whatever you are doing. People rarely learn from paying speeding tickets, and grades in school make learning less fun for children. Be careful with how you structure the incentives in your life. You can rip passion and motivation from your career, free time, and relationships if you focus too much on transactional rewards and punishments.</p>

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