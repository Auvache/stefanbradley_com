<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>Think about the following scenario:</p>

	      <p>A computer science student sits at his desk and works on a programming assignment.
		      Every time he runs the code, it crashes, and he can’t figure out what’s going on. He tries changing a bunch of things that may or may not be related to the problem. The more he struggles, the more frustrated he becomes. That frustration kicks him out of his focused state and prevents him from getting back in the zone, which only makes fixing the problem harder. His mind drifts away, and he ends up wasting a whole evening getting nothing done.</p>

	      <p>I have often fallen victim to this situation. I call it <em>frustration distraction</em>—the mental disengagement that accompanies not knowing how to move past a particular problem. The more your mind spins without progress, the harder it is to stay in a focused flow state and be productive.</p>

	      <h2>The Immediate Solution: Incubation</h2>

	      <p>If you are stuck on a problem and aren’t making any headway, take a break and do something else. <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01076/full" target="_blank">Research on creative problem-solving</a> shows that taking a break from conscious problem-solving doesn’t mean that your brain stops looking for a solution.</p>

	      <p>In psychology, this is called <em>incubation</em>—setting a problem aside and allowing unconscious processes to work on it. Incubation leads to moments of insight and epiphany. Your unconscious brain can do significant work for you if you give it a chance.</p>

	      <p>The idea of incubation in problem-solving has been around since the early 20th century. French mathematician and engineer Henri Poincaré first noted unconscious work as a step in mathematical problem-solving in 1910. The British psychologist Graham Wallas coined incubation as a psychological term for disengaged, unconscious problem-solving in his book <em>The Art of Thought</em> in 1926.</p>

	      <p>Modern research shows that <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01076/full#h3" target="_blank">incubation occurs while still working on other tasks</a>. It doesn’t just happen while you are resting or asleep. You can use your conscious brain and unconscious brain for different tasks at the same time. Once you have spent mental effort on a task, you can switch to something else, make progress on that thing, and return to the original problem after having given your subconscious a chance to work alone.</p>

	      <p>This powers productivity in a big way. If you hit a wall that you can’t seem to get through, do something else productive and come back later.</p>

	      <h2>The Long-Term Solution: Build the Habit of Building Understanding</h2>

	      <p>Incubation is a powerful tool for overcoming <em>frustration distraction</em> in the moment, but it relies on your current knowledge of a topic. No amount of incubation or creative problem-solving can overcome a fundamental lack of understanding.</p>

	      <p>To avoid chronic frustration distraction, build a habit of seeking understanding.</p>

	      <p>When confronted with a problem that you don’t understand, take time to figure out what it is you don’t understand and fill that gap in your knowledge. Learn fundamentals before diving into shortcuts. <NuxtLink to="/articles/how-to-change-your-life-by-reading">Read</NuxtLink>. Ask questions. Take time to understand the various concepts surrounding the problem you are working on.</p>

	      <p>A senior software engineer once told me that his life changed when he realized that 80% of his development time should be spent reading and 20% of his time should be spent actually changing code. Having an extreme understanding of what you are doing makes work less frustrating and more enjoyable.</p>

	      <p>Building a habit of constantly improving your knowledge will help to prevent frustration distraction in the future.</p>

	      <h2>How to Overcome Frustration Distraction</h2>

	      <p>When you find yourself spinning your mental wheels on a problem, figure out why you are struggling. If you know what you are doing and are looking for a creative solution, let the problem simmer in your subconscious. Switch to a different task. Take a break. Come back later with a fresh perspective.</p>

	      <p>If you can’t fix the problem because you don’t understand the context, focus on learning. Look up terms and ideas you don’t know. Ask questions to help you identify and fill gaps in your knowledge. Consistently work to build understanding in your field.</p>

	      <p>With these tools, you can overcome both immediate and chronic <em>frustration distraction</em>, more easily find solutions to the problems you face, and be more productive in the long term.</p>


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
