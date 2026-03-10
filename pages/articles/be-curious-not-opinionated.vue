<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p class="quote">
          "When you are consumed with the rightness or wrongness of a given issue, it’s easy to lose track of what the issue actually is."<br> - Steven Levitt and Stephen Dubner
        </p>

        <p class="quote">
          "It is the mark of an educated mind to be able to entertain a thought without accepting it."<br> - Lowell Benion
        </p>

        <p>I have a mantra to remind me that I don’t know everything, and that I have a lot to learn:</p>

        <p>Be curious, not opinionated.</p>

        <p>Opinions are judgments based on personal perspective. They span the gap between knowledge, personal values, and the objective truth. Being overly opinionated blurs the line between what one believes and what is actually true. Simply put, our opinions can distance us from facts. And the more passionate the opinion, the farther we can be pushed from the truth.</p>

        <p>We see this far too much in the world. Politicians take stances on issues they know nothing about. Parents disagree with doctors on medicine and treatments for their children. Everyone has an opinion about everything, regardless of expertise.</p>

        <p>An ultracrepidarian is someone who offers opinions or advice beyond their knowledge or expertise. When you catch yourself being an ultracrepidarian (and it will happen), don’t worry too much about it. There is hope. The cure to over-enthusiastic opinion is curiosity.</p>

        <p>Curiosity, as opposed to opinion, is an admission of one’s own lack of understanding. It is humility. It is the desire to strengthen one’s understanding and align oneself with the objective truth. Curiosity is the driving mechanism behind innovation. Leonardo Da Vinci’s curiosity about human anatomy and the natural world allowed him to paint masterpieces with settings and figures that properly pushed the boundaries of reality. Jennifer Doudna’s curiosity about how plants and animals work led her to study RNA, invent modern genome editing, pioneer at-home testing systems for the coronavirus, and win the Nobel Prize for Chemistry.</p>

        <p>A focus on opinion is a focus on rightness and wrongness. A focus on curiosity is a focus on finding the truth.</p>

        <p>Next time you find yourself in a controversial conversation or a heated debate, slow down. Do not ask questions to trap people or prove your point. Ask questions to clarify viewpoints and facts. Do your very best to listen and learn from others.</p>

        <p>The more curious you are, the more you will learn. As you try to learn from others, they will learn to trust you. And those are both excellent things to strive for.</p>

        <p>Be curious, not opinionated.</p>

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