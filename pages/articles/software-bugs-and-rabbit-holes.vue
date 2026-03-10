<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p>Say you’re filling out a form and have to put the date. Instead of writing "2025" you just write "25" to save space. No problem, right? That’s what most programmers thought when working with early computers. Two digits take up less space than four, and back when computers had very little storage, every bit (and byte) of memory was precious. Storing “69” instead of “1969” was a no-brainer.</p>

        <p>So, what happens to those computers when midnight strikes on December 31, 1999 and the calendar rolls to 2000? Well, the two-digit “00” could be recognized as either 2000 or 1900. What if your credit card’s expiration date is “1/02.” Is that 2002 or 1902? Yikes. This is what programmers call a bug, and this one had some potentially heavy side effects.</p>

        <p>The fix seems relatively straightforward—just update from two-digit dates to four-digit dates in the software. Well, the two-digit date bug (infamously known as Y2K) was buried in millions of programs and machines and no one was sure which systems would fail when the time came. Banks and hospitals and airlines and power grids all needed to be updated or risk going haywire on New Year’s Day, year 2000. Fixing the bug would take the combined effort of software engineers and IT professionals across the globe. The United States government passed the Year 2000 <i>Information and Readiness Disclosure Act</i> to protect businesses from liability issues. President Bill Clinton publicly urged companies to self-assess and prepare themselves for the new millennium.</p>

        <p>As programmers worked hard to prepare for Y2K, concerned citizens started to theorize about everything that could go wrong. What if trains stopped chugging and stop lights all went green? People stocked up on toilet paper, canned beans, and propane generators. What if the bug caused all prison cells to open and criminals flooded the streets? What if nuclear launch codes bugged out and started firing missiles all over the place? Full-blown panic ensued. What started as a date formatting issue turned into a global crisis.</p>

        <p>Bugs in the system are a form of unplanned work. They are broken windows in need of repair and unforeseen issues that need to be dealt with. You clean the gutters and find a hornet’s nest. You patch a hole in the drywall and find black mold. You take action and find unexpected challenges. It is impossible to account for all potential bugs during the planning phase of a project—we find them only when we stumble across them. Sometimes bugs are a quick fix. Other times they are <i>rabbit holes</i>—they seem small or straightforward, but turn out to be much more complex and time-consuming than originally thought. They are riddled with uncertainty and can totally derail the task you are trying to get done.</p>

        <p>When you encounter a small issue, fix it. A crack in the paint today could be a hole in the wall tomorrow. When small problems are allowed to fester, they grow. Unaddressed issues also add up over time. A pile of small issues building up on your plate can be just as overwhelming as a single large task.</p>

        <p>When you encounter a rabbit hole, think about scope. Remember scope creep? As requirements and features expand and become more complex, the time and effort required to complete the project increases. When a rabbit hole appears, ask yourself if the problem is a part of your project or a side quest. Is the issue mission critical or mostly tangential? If it is mission critical, you need to take care of it (refer to <NuxtLink to="/articles/ninety-ninety-rule-overcoming-unplanned-work">The Ninety-Ninety Rule and Overcoming Unplanned Work</NuxtLink>). If it is tangential, don’t get sucked down the rabbit hole. Unless it is an emergency, make a note to do the newly-discovered work later and continue on your current course.</p>

        <p>Every action you take has a price associated with it. This is called <i>opportunity cost</i>—when you choose to do one thing, you are choosing to not do other things. We have limited time, money, and energy to spend in a world of infinite possibilities. We can do anything, but we cannot do everything. When you go down a rabbit hole (be it mission critical or tangential), it is at the cost of whatever you are currently doing. When faced with the decision to go down a rabbit hole, ask yourself: is this worth me not getting my current work done? Programmers across the world undoubtedly encounter bugs, tangential issues, and rabbit holes while working on the Y2K problem. Some of those issues needed to be addressed immediately. Some of them did not. Had programmers stopped to fix every issue they found, they wouldn’t have fixed the Y2K problem in time, and January 1, 2000 could have been the doomsday everyone feared. But they didn’t stop to fix everything, and they did largely fix the issue.</p>

        <p>When the turn of the millennium came, there were some localized problems. There were some issues with bus tickets in Australia and train tickets in Japan. Roughly 10% of receipts in Greece showed purchases for 1900. No prisoners flooded the streets. No nuclear fallout. Life continued as normal.</p>

        <p>Every trip down a rabbit hole comes at a cost. Don’t derail the focus train every time some new issue comes up. Address the problem, decide whether or not it needs to be pursued immediately (or at all), and move on. Remember opportunity cost. Don’t get sucked down the rabbit hole.</p>

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