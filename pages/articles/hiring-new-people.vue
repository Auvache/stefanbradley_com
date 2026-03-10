<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p>Ray Dalio is the founder of <a href="https://www.bridgewater.com" target="_blank">Bridgewater</a>, one of the most successful investment firms on the planet. His life has largely been a quest to systematize and optimize decision making by learning the principles and laws that govern how things work. His book <a :href="affiliateLinks.books.principles" target="_blank">Principles</a> is broken up into three major sections; a biography of his career, his systems for life, and his systems for work. In the section about his work systems, he talks about his principles for hiring new people.</p>

        <p>Hiring someone to work for you (or looking for a job yourself) is all about “fit.” Is the candidate capable of performing job responsibilities competently? Will the candidate work well with and balance out the attributes of others in the company? Will they enjoy the job down the road?</p>

        <p>Gauging whether or not someone will be a good “fit” is tricky because most everyone in an interview situation is putting their best foot forward. It is hard to know how a candidate will deal with the day-to-day monotony of a job or how it will feel to work for a company in the long run without first-hand experience.</p>

        <p>Here is what I've learned from Ray Dalio’s <a :href="affiliateLinks.books.principles" target="_blank">Principles</a> about hiring new people:</p>

        <p>1) “You know that there are a lot of incompetent people in the world trying to do things they’re not good at, so the chances are good that you are one of them.”</p>

        <p>Nobody is perfect at their job, yourself included. What matters is that you recognize your faults and do your best to be productive in spite of them.</p>

        <p>2) “Think through which values, abilities, and skills you are looking for (in that order).”</p>

        <p>Values are a person's beliefs. When properly aligned, they make teammates compatible with each other in a working environment. Abilities are qualities that are difficult to train, like being a quick learner or problem solver. Skills are learnable things, like speaking Spanish or writing code. If a person’s values don’t align with the company’s mission or culture, no amount of ability or skill will make them a good fit for your organization in the long run.</p>

        <p>3) “Your goal is to put the right people in the right design. First understand the responsibilities of the role and the qualities needed to fulfill them, then ascertain whether an individual has them. When you’re doing this well, there should almost be an audible ‘click’ as the person you’re hiring fits into his or her role.”</p>

        <p>You can’t hire well if you don’t understand what you are looking for. You need to focus on understanding the position you are trying to fill. Without that, you can’t know if a candidate is a good fit.</p>

        <p>4) “If you’re less than excited to hire someone for a particular job, don’t do it. The two of you will probably make each other miserable.”</p>

        <p>Don’t hire someone because they are the best candidate out of everyone who applied. Hire someone because they are the right person for the job. If you don’t find the right person (if you don’t hear the “click”), keep looking.</p>

        <p>The most important lesson I’ve learned from Ray Dalio and hiring new people is this:</p>

        <p>Be intentional and systematic in your decision making.</p>

        <p>You have “hired” and will continue to “hire” people for all sorts of positions in your life. You will spend your evenings, weekends, holiday seasons, and years on friends, family, and various other relationships. Unlike money spent on paying employees, the time you spend with people is time that you cannot earn back.</p>

        <p>How do you choose who you give your time to? What does your interview process look like? Do you focus on values, abilities, and skills in that order? Do you know what you are looking for? Do you spend your time on people because they are who you want to spend time with, or because they were the best people around when you were hiring?</p>
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
useArticleSeo(articleInfo)
</script>