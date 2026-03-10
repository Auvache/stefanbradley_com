<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>

        <p>Frans Rosén is not your average bounty hunter. By day he is a software-engineering, child-rearing, rides-his-bike-to-work tech entrepreneur. But in the quiet of night, he sits alone at home on his laptop or his phone and tries to break the internet. In 2014, Frans was ranked the number one bug bounty hunter in the world. A bug bounty is a reward for finding and reporting some security vulnerability in a company’s website or app. Frans has reported as many as 40 bugs in a single month. In 2015, his largest payout for reporting a bug was $30,000.</p>

        <p>One of the things that has made him so successful is reading. When Frans finds something that seems a little funky with an app or website, he digs and digs until he finds some data he shouldn’t be able to see or maneuvers his way into someplace he shouldn’t be able to get to. He is able to keep digging and problem solving because of his extensive knowledge in the field of IT security.</p>

        <p>A big distraction for me when trying to get work done is the frustration that accompanies not knowing where to go with a problem. I call this <i>frustration distraction</i>. When I don’t understand how to do something and the proverbial wheels are spinning, my mind rebels and kicks me out of the groove. When that happens, the best course of action is to take a step back and try to understand more about the problem I am trying to solve. I will ask for help or clarification and will read about the issue until I understand enough to pursue more potential solutions. Frans Rosén spends most of his “hacking” time reading blog posts and forums and articles about software security vulnerabilities and the latest data breaches because the more you know, the more power you have to solve problems.</p>

        <p>A senior software engineer at work once told me that his life changed when he realized that 80% of his development time should be spent reading and 20% of his time should be spent changing code. Having an extreme understanding of your field makes work less frustrating and more enjoyable, which increases your ability to focus and overcome <i>frustration distraction</i>.</p>

        <p>When you get stuck, read. Go back to the basics. Fill the gaps in your knowledge and use your newfound wisdom to better solve problems.</p>

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