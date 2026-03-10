<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p class="quote">
          "Few people think more than two or three times a year. I have made an international reputation for myself by thinking once or twice a week." - George Bernard Shaw
        </p>

        <p>Few books have practically impacted my life as profoundly as <a :href="affiliateLinks.books.deepWork" target="_blank">Cal Newport’s Deep Work</a>.</p>

        <p>Check this out.</p>

        <p>Woody Allen wrote 44 film scripts in 44 years, winning 23 academy awards. He did all of his writing alone, and on a typewriter. Stephen King has written so many books that it is hard to count all of them (the number is somewhere north of 65). He doesn’t focus on marketing, social media exposure, or consulting other writers. He sits every day at a small desk with as few distractions as possible and writes.</p>

        <p>Those who focus solely on a single task do great work.</p>

        <p>In his book, <a href="https://calnewport.com/" target="_blank">Cal Newport</a> defines deep work as "professional activities performed in a state of distraction-free concentration that push our cognitive capabilities to their limit."</p>

        <p>The quality and quantity of your work increase when you focus. Deep work is the key to doing great work. Remove distractions, zone in, and do your work.</p>

        <h2>You are capable of working deeply</h2>

        <p>You may be thinking, "well, that’s great for Woody, Steve, and Cal, but I have ADHD, or I have too much to do, or [insert excuse here]. Deep work isn’t something I can do."</p>

        <p>Turns out, the validity of an excuse has very little impact on outcomes. Regardless of the reasoning behind inaction or failure, the result remains the same; you don’t act. When I run into this, the following line helps to center me:</p>

        <p>Someone else has done more with less.</p>

        <p>Maybe your excuses are valid. Maybe you are just afraid to fail, so you tell yourself that you can’t do it. Maybe you do have severe ADHD and reading is really hard. Maybe you have a fulltime job and eight kids and never have a moment’s peace.</p>

        <p>Someone else has had it worse, and they have done more.</p>

        <p>That shouldn’t be an offending statement; it should empower you.</p>

        <p>If you are reading this, you are capable of working deeply. All it takes is a bit of strategy and effort.</p>

        <h2>How to work deeply</h2>

        <p>Focus is not a trait like eye color; it is a skill to be mastered.</p>

        <p>If you are skeptical of your deep-work capacity, my recommendation is to give it a try. Here is my deep-work process.</p>

        <h3>Gather all tasks to be done</h3>

        <p>What do you need to get done?</p>

        <p>There are things to do. I have various responsibilities with work, family life, and personal projects. Capturing tasks in an organized way is the first big challenge in productivity. I gather tasks from email, notes on my phone, and various other places into a single, handwritten list.</p>

        <h3>Organize tasks into two categories: deep and shallow</h3>

        <p>Thanks to Cal Newport, I organize my work into lists of deep and shallow tasks.</p>

        <p>Deep tasks require singular focus. Writing, coding, editing, and reading are often on my list of deep tasks.</p>

        <p>Shallow tasks are repetitive and don’t require a lot of brain power. These look a lot like chores; things that just need to get done.</p>

        <p>Unfortunately, most working people attend a lot of meetings. Sometimes, meetings count as deep work. Sometimes, they count as shallow work. If work is being accomplished in a meeting, be focused on the task at hand. If the meeting doesn’t require work, isn’t for a team morale boost, or generally feels like a waste of time, do what you can to shorten/eliminate it. Entrepreneur Naval Ravikant says it best: "Meetings should really be phone calls, phone calls should be emails, and emails should just be texts."</p>

        <p>Organize your work to find deep tasks.</p>

        <h3>Do deep work</h3>

        <p>I set a timer for 60-90 minutes, depending on how much time I can spare without responding to messages, and assign deep work tasks to that block of time.</p>

        <p>During this time, I put my phone away, turn off all notifications, and focus on the task at hand. I often listen to the same instrumental song over and over to block out noises and other distractions. I work until my timer goes off, at which point I will turn notifications back on, respond to work messages, and move on with my day. The longer I can make these sessions, the more satisfied I am with both my work and my life.</p>

        <h3>Drain the shallows</h3>

        <p>Unfortunately, not all work is engaging and meaningful. We have tasks to complete that are boring and repetitive. Luckily, shallow tasks can be handled effectively.</p>

        <p>Can the task be delegated, automated, or entirely ignored? If so, do that. If not, batch process - find time to do tasks that are similar to each other and do them. Fill out reports, clean out your email inbox, and clean your room. Stuff shallow stuff into a chunk of boring, yet productive time. Just get it done.</p>

        <h3>When the work is done, be done with work</h3>

        <p>Getting things done efficiently during work hours kicks the door to work-life balance wide open. When the work is done, I am free to put everything away, turn off my computer, put away my phone, turn off my work brain, and spend time doing things I love.</p>

        <br>

        <p>Even if my deep work process is not be a good fit for your working life, there is one principle that applies to you no matter who you are:</p>

        <p>Focus on what you are doing.</p>

        <p>That is pretty much it. This article should probably be one line long. Oh well.</p>

        <p>If you are writing, write.</p>

        <p>If you are doing homework, do your homework.</p>

        <p>If you are spending time with your family, just spend time with your family.</p>

        <p>Don’t suffocate your productive potential by splitting your focus. Focus on the task at hand. It may be hard, but it gets easier.</p>

        <p>And, it is worth it.</p>

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