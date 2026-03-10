<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p class="quote">“Premature optimization is the root of all evil.” - Donald Knuth</p>

	      <p>In software engineering, <em>premature optimization</em> is the practice of trying to make something perfect before making it work.</p>

	      <p>It happens all the time. Engineers can take all day writing a fancy script to generate and organize a report that they’ve only ever had to create once. We can spend hours refactoring code to make things faster or more elegant, even when we have far more important work to do. We get excited about granular, relatively unimportant details and push off more impactful work.</p>

	      <p>While pride in craftsmanship should be celebrated, unnecessary or premature fine-tuning leads to serious waste. Fawning over the minutiae of a project that is still undeveloped can prevent that project from ever getting off the ground. Optimization itself isn’t a poor use of time, but when you try to perfect things before you understand the bigger picture of what you are working on, you spend time solving problems that may be irrelevant in the end.</p>

	      <h2>Perfectionism</h2>

	      <p>Premature optimization is a form of perfectionism.</p>

	      <p>Personal projects, routines, and goals all suffer from an early effort to make things perfect. Excitement over details and the fear of making mistakes (or making progress) push us to waste time doing work that isn’t all that important.</p>

	      <p>One great danger of perfectionism is <em>opportunity cost</em>. Time spent optimizing one thing is time not spent working on something else. Perfectionism and optimization can feel productive at the beginning of a project, but they rarely are. The returns on effort spent on optimization diminish as a project becomes more polished.</p>

	      <p>Think about a content creator caught in the trap of premature optimization. He spends hours researching cameras, lighting, microphones, and editing techniques. He writes and rewrites scripts again and again. All of that time takes away from creating and publishing content. By focusing on secondary details, the quality of his actual content suffers.</p>

	      <p>This pattern is repeated everywhere—by entrepreneurs, musicians, comedians, students, etc. Instead of getting things done, they worry about perfecting things too early and don’t finish what they set out to do.</p>

	      <h2>The Solution: Make It Work, Then Make It Right, Then Make It Fast</h2>

	      <p>Kent Beck is one of the most influential engineers in modern software development. He is known for his work on <a href="https://en.wikipedia.org/wiki/Extreme_programming" target="_blank">Extreme Programming</a> and <NuxtLink to="/articles/agile-development-a-pattern-for-improvement">Agile Development</NuxtLink>.</p>

	      <p>Beck emphasizes iterative, sustainable improvement with the following mantra: “Make it work, then make it right, then make it fast.”</p>

	      <p>Practically speaking, Beck’s mantra means that you should focus first on finishing a first draft of your project, then on fixing major issues. Only then is optimization work worthwhile.</p>

	      <p>If you are writing an essay, work out your thesis and main ideas before worrying about word choice or sentence flow. Instead of looking for the perfect workout and diet plan, start by eating less junk and getting some exercise. You earn the right to tweak and optimize once you have a first version up and running.</p>

	      <h2>In Practice</h2>

	      <p>Back in 2012, Jimmy Donaldson was an aspiring YouTuber.</p>

	      <p>Jimmy started a YouTube channel at age 13, mostly posting videos of himself playing video games. Over the next five years, he would post over 400 videos on his channel without seeing much growth in his fanbase.</p>

	      <p>What did grow was his knowledge of the craft of creating captivating content. His strategy slowly shifted from making simple gaming and commentary videos to coming up with original, crazy challenges and doing them on camera. In 2017, he posted a video of himself counting to 100,000 (which took 40 hours). The video went viral, and his fanbase exploded.</p>

	      <p>As his channel grew and started generating ad revenue, Jimmy’s strategy evolved again. His videos grew more elaborate and outlandish, including giving large sums of money to total strangers. He then started to optimize. He studied his most popular videos and applied what he learned to his new content. Today, Jimmy Donaldson’s channel—MrBeast—is the largest on YouTube. Hundreds of millions of people subscribe to his channel and watch his videos. He has an estimated net worth of over $1 billion.</p>

	      <p>In the beginning, Jimmy wasn’t worried about making the perfect video. He didn’t wait on a great script or professional-grade equipment to make and post videos. He “made it work” by consistently creating and publishing content, then “made it right” by using what he learned to create progressively more engaging videos.</p>

	      <p>Once he had established a sustainable process for creating viral content, Jimmy was free to optimize and expand. The videos he makes now are far more elaborate and professional than his original content. They are massive productions with full crews, sets, and budgets that rival small films. None of his current work would be possible had he tried to optimize or perfect his content from the beginning.</p>

	      <h2>Don’t Fall for Premature Optimization</h2>

	      <p>Premature optimization and perfectionism kill momentum. They can kill your productivity and can prevent you from ever accomplishing anything meaningful.</p>

	      <p>Making something great is an iterative process. It is easier to improve a fully-formed product than to make something perfect the first time around. The tenth version is better than the first.</p>

	      <p>Don’t let perfectionism keep you from doing meaningful work. Don’t let them stunt your capacity for great craftsmanship. Finish the first version. Work out the major problems. Then focus on optimization.</p>

	      <p>Make it work, then make it right, then make it fast.</p>


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
