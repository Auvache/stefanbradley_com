<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>Working as a full-time software engineer has taught me a lot about life.</p>
	      <p>I spend a great deal of time using logic to understand and debug code. I think about how to manage my workload efficiently, when and how to properly say no to requests, and how to be more productive and useful. I am constantly problem-solving, project-managing, and communicating concepts to people with various levels of technical understanding.</p>
	      <p>The lessons that I have learned as a software engineer directly influence the way I live. They help me to be more productive, patient, present, and flexible. The daily practice of engineering has made me more capable, curious, and fulfilled in all the aspects of my life.</p>
	      <p>Here are some of the most important lessons I have learned as an engineer and how they apply to everyday living:</p>
	      <h2>1) Improvement Work is Necessary Work</h2>
	      <p>The <NuxtLink to="/articles/roi-of-self-improvement">return on investment (ROI)</NuxtLink> for improvement can be astronomical.</p>
	      <p>One of my jobs is to get better at being an engineer. I spend time learning about security, design patterns, new technology, and how to write more maintainable code. This can sometimes feel like extra work that pulls time away from more important tasks. But taking time to improve pays off in the long run.</p>
	      <p>As my skills have improved, I have become far more productive. The hours that I have invested in improvement have paid for themselves over and over again by saving me time and frustration in the future. Trading that investment for short-term productivity would have been more expensive in the long term.</p>
	      <p>Taking time to get better, be it in software engineering, communication skills, or physical fitness, pays dividends down the road. Improvement work is not something extra to do if you have time left at the end of the day. It is necessary work that can and should be prioritized.</p>
	      <h2>2) Be Intentional With Your Time</h2>
	      <p>I have roughly 40 hours per week to keep up with my responsibilities as a software engineer. This includes building and managing projects, fixing issues as they arise, organizing and planning future projects, and other work (learning, admin stuff, etc.).</p>
	      <p>If I am not intentional with how I use my time, I cannot get everything done.</p>
	      <p>I have a physical to-do list on my desk every day. I do the most important work first. I constantly use timers to keep myself from getting distracted with unimportant details or other tasks that pop up during the day. My goal is to know what I am doing and why I am doing it.</p>
	      <p>That same habit of intentionality has helped me spend more meaningful time with my family and friends, replace busyness with purpose, and make deliberate progress in my hobbies and skills. Life is better when you think and act with intention.</p>
	      <h2>3) Do One Thing at a Time</h2>
	      <p>When I constantly switch between tasks, I get confused, make mistakes, and end up burning out quickly.</p>
	      <p>Doing one thing at a time empowers greater <NuxtLink to="/articles/improve-focus-actionable-ways">focus</NuxtLink>, productivity, and satisfaction. When I block out distractions and give all of my focus to a single task, I find depth of focus. I do <NuxtLink to="/articles/work-deeply">deep work</NuxtLink>. I am more efficient and better able to solve problems.</p>
	      <p>Once you have decided to give your time to something, do that thing and only that thing. If you are coding, code. If you are writing, write. If you are eating dinner with your family, friends, or someone new, keep your mind in the present. Do one thing at a time.</p>
	      <h2>4) Plan for Unplanned Work</h2>
	      <p>One of the greatest stressors in life is having too much to do.</p>
	      <p>There is a joke in software engineering that, once you have coded the first 90% of a project, you need to code the <NuxtLink to="/articles/ninety-ninety-rule-overcoming-unplanned-work">second 90%</NuxtLink>. The phrase comes from the unexpected issues that always arise during development. Projects can take 2-3 times longer to complete than you initially think.</p>
	      <p>One of the keys to effective project management is to plan for unplanned work.</p>
	      <p>Whether you are on an engineering team, running a business, or raising kids, don't fill your schedule to max capacity. Set time and resources aside to handle the unplanned work that will inevitably arise in your life. When things pop up, you will have the bandwidth to handle them.</p>
	      <h2>5) Measure What is in Your Control</h2>
	      <p>Software engineers set goals all of the time. We set deadlines on completing projects, make lists of the work we need to do each day, and constantly balance what we want to achieve with how we plan to achieve it.</p>
	      <p>There are two main types of goals that people set—<em>product goals</em> and <em>process goals</em>.</p>
	      <p>Product goals lie outside of your immediate control. Process goals, on the other hand, are immediately doable. An author doesn't directly control how many books they publish, but they do control how many words they write per day.</p>
	      <p>Setting process goals is the secret to achieving product goals. If my product goal is to be more effective at doing my work, my process goal is to work on improving myself for 30 minutes every day. A daily study habit is <NuxtLink to="/articles/measure-what-is-in-your-control">easy to measure</NuxtLink> (did I study for 30 minutes or not?) and entirely in my power to achieve.</p>
	      <h2>6) Avoid Premature Optimization</h2>
	      <p>Writing software can be an endless pit of perfectionism. You can always make something a little easier to read, a little more efficient, and a little bit better. Some developers waste a lot of time improving things that are probably good enough as they are.</p>
	      <p>In software, this is called <em><NuxtLink to="/articles/overcome-perfectionism-premature-optimization">premature optimization</NuxtLink></em>—the practice of perfecting things before they ought to be perfected.</p>
	      <p>Just because something can be better doesn't mean that it needs to be, at least not right now. Premature optimization can be the death of productivity. You cannot make everything in your life perfect. Attempting to do so will prevent you from finishing all of the work on your plate.</p>
	      <p>This does not mean that you should be lazy or sacrifice craftsmanship. You can do great work without wasting time making unnecessary improvements. Don't be a perfectionist. Make things as good as they need to be and move on.</p>
	      <h2>7) Cultivate a Growth Mindset</h2>
	      <p>In the 1970s, Carol Dweck began a career-defining study of how kids respond to failure. She found that kids either had what she called a <em>fixed mindset</em>—the belief that their abilities were innate and inflexible—or a <em>growth mindset</em>—the belief that they could learn and improve with effort.</p>
	      <p>Thinking you have all of the answers is a recipe for disaster, especially as an engineer. There is too much to know for anyone to understand it all. The best engineers I know are the ones who are still humble and willing to learn after decades in the field.</p>
	      <p>Cultivate a growth mindset. Be more curious than you are opinionated. Don't let your ego get in the way of learning new things. You will become more capable, knowledgeable, understanding, and pleasant to be around.</p>
	      <h2>8) Think Agile</h2>
	      <p>In the early days of software development, projects often failed the same way: engineers were given a list of requirements for a new project. Months later, they would present a finished product that—though technically correct—didn't match the original vision.</p>
	      <p>In 2001, a group of engineers and business leaders got together and created <em><NuxtLink to="/articles/agile-development-a-pattern-for-improvement">Agile Development</NuxtLink></em>. Agile is a flexible, iterative approach for building software. It focuses on delivering small, usable pieces of a project quickly, gathering feedback, and improving iteratively through collaboration and adaptation.</p>
	      <p>Outside of engineering, Agile is a powerful framework for self improvement. Instead of setting a rigid five-year plan, create a vision for the future that leaves room for iterative improvement. Make short-term plans, take action, and get feedback on how things went. Then, use what you learned to improve your processes and better understand where you want to end up.</p>
	      <p>Being a software engineer is about learning how to think more clearly and plan more effectively. It is about building things that work well and becoming a more capable person.</p>
	      <p>You are the engineer in charge of developing your life. Work to improve yourself. Be intentional with your time. Give all of your focus and energy to the task at hand. To prevent overwhelm and burnout, plan on doing unexpected work. Measure things that are in your direct control, avoid perfectionism, and strive to learn as much as you can. As you learn new things and become a more capable person, adjust your plans accordingly.</p>

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
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.description}`
let metaKeywords = `Stefan, Stefan Auvache Bradley, Bradley, ${articleInfo.categories.join(', ')}, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/articles/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>
