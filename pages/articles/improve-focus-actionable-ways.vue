<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>Cal Newport is a prime example of sustained productivity. He published multiple books while working on a PhD in computer science at MIT. As a tenured professor at Georgetown University, he has continued to publish best-selling books—including <i>Deep Work</i>, <i>Digital Minimalism</i>, <i>A World Without Email</i>, and <i>Slow Productivity</i>.</p>

	      <p>He also writes a widely read blog, hosts a popular podcast, and publishes essays in <i>The New Yorker</i> and <i>The New York Times</i>. On top of his career achievements, he is a husband and father with a normal family life.</p>

	      <p>One of the keys to Newport’s incredible productivity is a carefully cultivated practice called <a href="https://www.stefanauvache.com/articles/work-deeply" target="_blank">deep work</a>. He defines <i>deep work</i> as:</p>

	      <p>"Professional activities performed in a state of distraction-free concentration that push our cognitive capabilities to their limit."</p>

	      <p>Newport gives every bit of focus he has to the task at hand. No multitasking, no distractions.</p>

	      <h2>Principles for Protecting and Improving Focus</h2>

	      <p>Focus isn’t a trait like hair color or height. It is more like a muscle that can be trained and strengthened. Using proper strategies, everyone is capable of improving their ability to focus and do deep work.</p>

	      <p>Here are some principles I have learned on deepening and improving focus.</p>

	      <h3>Find a Time and a Place to Do Focused Work</h3>

	      <p>Find a setting that is focus-conducive. If you are surrounded by distraction and interruption, you will have a great deal of difficulty working deeply on anything. Find a place where it is quiet—both physically and digitally—to do your work. Choose a place where you are essentially alone, if not totally alone.</p>

	      <p>Once you have a place to do work, set aside a chunk of time and protect it. It can be 45 minutes or three hours, but it needs to be long enough for you to get some work done without anyone coming to interrupt you.</p>

	      <p>At the extreme, people like Bill Gates, Carl Jung, and Haruki Murakami <NuxtLink to="/articles/monk-week-solitude-intentional-living">spend weeks or months at a time in isolation</NuxtLink> to better focus on their work.</p>

	      <h3>Avoid Context Switching and Attention Residue</h3>

	      <p>Focusing on a single task puts your brain in a specific context. If you are writing, your brain gets into the groove of writing. If you are coding, your brain optimizes for coding. However, when you move from writing to coding, your brain doesn’t instantly reset and give all of its resources to the new context.</p>

	      <p>This is called <i>attention residue</i>. Residual thoughts and attention from the previous task linger, which makes you less effective at working on the new task. If you constantly switch the context of your work—like multitasking—you fragment your focus, build attention residue, and prevent yourself from working efficiently.</p>

	      <p>Instead of constantly switching between tasks, pick one thing and give it your full attention. If you have several similar tasks, batch them together to minimize context switches and preserve your focus.</p>

	      <h3>Know What To Work On</h3>

	      <p>The overwhelming feeling that accompanies a large workload can be just as detrimental to focus as sitting in a crowded room. Important, impactful work can get lost when it is lumped together with uninspiring busy work. If the amount of work on your plate is overwhelming or you aren’t sure where to start, use <NuxtLink to="/articles/eliminate-automate-delegate-do">task management techniques and frameworks</NuxtLink> to organize and reduce your workload. Once your list is narrowed down, pick one thing and work on it.</p>

	      <h3>Deliberately Train Your Focus</h3>

	      <p>You wouldn’t expect a person who never runs to complete a whole marathon. To run that distance, you need to rigorously train your legs, your lungs, and your heart. The mind, just like the body, requires intentional training to perform at a high level.</p>

	      <p>The following exercise—called the <i>Roosevelt Dash</i>—comes from Cal Newport’s book <a :href="affiliateLinks.books.deepWork" target="_blank">Deep Work</a>. It is based on a training method used by President Theodore Roosevelt.</p>

	      <ul>
		      <li>Pick a task.</li>
		      <li>Estimate the time it will take to complete the task.</li>
		      <li>Set a time limit for completing the task that is shorter than your estimation.</li>
		      <li>Start a timer and try as hard as you can to get your task done within the time limit.</li>
	      </ul>

	      <p>Though you sometimes won’t finish your task in the allotted time, the artificial limit will naturally engage your focus. Intentionally training your focus over time will improve both the intensity with which you focus and the duration of that intensity. It can strengthen both your <NuxtLink to="/articles/improve-attention-span-inhibitory-control">attention span and inhibitory control</NuxtLink>.</p>

	      <h3>Embrace Boredom</h3>

	      <p>Cal Newport writes in his book <i>Deep Work</i>:</p>

	      <p>"You'll struggle to achieve the deepest levels of concentration if you spend the rest of your time fleeing the slightest hint of boredom."</p>

	      <p>Boredom, in this case, means having nothing for your brain to do. Our brains are constantly bombarded with stimuli. Even when we take breaks from work, we scroll on our phones, check messages, or watch videos. These things make us feel like we are resting, but they don’t actually give our brains a break.</p>

	      <p>If you don’t take time to disengage, engagement and focus become a burden. When you need a break from focusing on a task, let yourself be bored. Don’t immediately fill the space with something else.</p>

	      <h2>Set Yourself Up for Success</h2>

	      <p>Cal Newport isn’t successful because he was born with a superhuman ability to focus. He is successful because he has carefully cultivated a focus-centric lifestyle—a way of working and living that protects his attention and channels it toward meaningful work.</p>

	      <p>You can do the same. Dedicate time and space for focused work. Practice doing one thing at a time. Get organized, deliberately train your focus muscle, and rest your brain by embracing periods of relaxation and boredom.</p>

	      <p>Learn to focus with greater intensity and less stress. It will make your work more enjoyable. The productivity that follows can be life-changing.</p>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks";
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
