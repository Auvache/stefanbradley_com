<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>Some tasks engage and energize us. Others give our work meaning. Unfortunately, these tasks are often buried under a stack of less important stuff. They crowd our to-do list and demand our attention.</p>
	      <p>When I start to feel like I have too much work on my plate, I use a simple task-management framework—Eliminate, Automate, Delegate, Do—to get organized and to be productive.</p>
	      <p>It can do the same for you.</p>
	      <h2>Eliminate</h2>
	      <p>What tasks can simply not be done?</p>
	      <p>What would happen if you didn't attend a meeting? What if you stopped managing your social media for a week, let a few tasks go unfinished, or ignored metrics? What if you stopped treating every email like it was urgent?</p>
	      <p>We waste an incredible amount of time doing things that don't matter. Most people aren't overwhelmed because they're doing too many difficult or challenging things—they're overwhelmed because they're doing too many unnecessary things.</p>
	      <p>If something doesn't need to be done, don't do it.</p>
	      <h2>Automate</h2>
	      <p>If it has to be done, can it be automated?</p>
	      <p>We tolerate a lot of repetitive tasks because they don't seem worth fixing. Manually paying bills, copying data between spreadsheets, transcribing meeting notes, sending reminder emails—these are all low-leverage tasks that take up our time and energy.</p>
	      <p>If a task happens more than once, it deserves a system. That system might be as simple as an email filter, a calendar reminder, a template, or a script. It doesn't need to be technical or complicated. Something as simple as auto-pay can help to automate easy, repeatable tasks.</p>
	      <p>Take time to automate tasks that you do over and over again.</p>
	      <h2>Delegate</h2>
	      <p>If a task can't be automated, can someone else handle it?</p>
	      <p>Sometimes, other people are more efficient, better equipped, or have greater bandwidth to handle certain tasks. Delegation means giving a task to someone else and trusting them to get it done without you being directly involved. If you can't let other people work without your input, then it isn't delegation.</p>
	      <p>Delegation isn't about dumping work on others—it's about recognizing when someone else is better positioned to handle something so you can focus on what only you can do. If you need help, ask for it. Play to people's strengths, and let them play to yours. Don't delegate out of laziness.</p>
	      <p>If there is something that needs to be done, but not necessarily by you, look for opportunities to delegate.</p>
	      <h2>Do</h2>
	      <p>You should now have a clear list of things to do.</p>
	      <p>Set aside dedicated blocks of time, eliminate distractions, and <NuxtLink to="/articles/improve-focus-actionable-ways">focus on one thing at a time</NuxtLink>. Group similar tasks together—answering all your emails in one session, for example—to minimize context switching. When you're working on something that requires deep concentration, resist the urge to respond to messages or switch tasks.</p>
	      <h2>Why This System Works</h2>
	      <p>When I'm not buried in busy work, I gain clarity. I can take time to step back, look at the big picture, and make adjustments to my plans. This system helps me to do that.</p>
	      <p>Spend less time doing unimportant tasks and more time on the good stuff. Eliminate unnecessary work. Automate repetitive tasks. Delegate what doesn't require your direct involvement. Free yourself up to focus on what matters most.</p>
	      <p>Eliminate. Automate. Delegate. Do.</p>

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