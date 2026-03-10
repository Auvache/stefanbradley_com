<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p class="quote">“It’s only a mistake if you don’t learn from it.” —Cary Elwes</p>
	      <p>After more than a decade of success, executives at Pixar worried that the company was becoming too formulaic and dogmatic. Were there too many rules? Were there unnecessary hurdles in the creative process? Pixar was founded on innovative storytelling and wanted to continue to reimagine the way that stories were created.</p>
	      <p>To shake things up, Pixar launched the Incubator Project. The point was to give a first-time director the chance to lead a project without constant company oversight. The director would have access to a seasoned production team and a workspace two blocks away from the main campus to minimize executive influence.</p>
	      <p>The concept for the new film overflowed with quirky, Pixar-typical potential. What happens when the last two blue-footed newts left on Earth are forced together by scientists to repopulate and save their species—but they can't stand each other? Almost everyone agreed that, while challenging, the concept could make for an excellent film.</p>
	      <p>Unfortunately for the production team, separation from Pixar culture meant separation from the lessons that Pixar had learned over the years—lessons that had turned Pixar into a storytelling powerhouse. While the concept for the film was promising, the team couldn't push through plot holes and barriers. The storyline was never fully vetted or refined enough to meet Pixar's high standards. By the time executives decided to intervene, the project was losing money and momentum.</p>
	      <p>Team morale was low, and the film had become creatively unsalvageable. To free up resources for other projects, the film was shelved and never made it to production. The tadpole movie, as it came to be called, cost the studio time and resources without anything coming to fruition.</p>
	      <p>The project was a failure.</p>
	      <h2>How to Fail Well</h2>
	      <p>Everybody fails.</p>
	      <p>Massive, seasoned companies like Pixar fail. Parents fail. Politicians fail. Entrepreneurs fail. Elementary school teachers fail. Failure is a part of life, and an important one at that. Failure is one of the most powerful teaching tools in the world, provided that it is done properly.</p>
	      <p>Here are three ideas to help make failing a more useful experience.</p>
	      <h3>1) Remove Ego from the Equation</h3>
	      <p>Ego prevents objective analysis. It prevents us from acknowledging failure, pushes us to hold onto floundering projects, and makes it difficult to accurately diagnose why things aren't going well. If you can't put your ego to the side, you likely won't even acknowledge your failures, let alone learn from them.</p>
	      <p>To keep ego out of the way, frame your actions as experiments. When a scientist makes a hypothesis and proves herself wrong, she celebrates because she has learned something new.</p>
	      <p>Separate ego from outcome. Don't get defensive. Do your best to look at failures objectively.</p>
	      <h3>2) Identify the Type of Failure</h3>
	      <p><a href="https://www.hbs.edu/faculty/Pages/profile.aspx?facId=6451" target="_blank">Amy Edmondson</a> defines three kinds of failure in her book <em>Right Kind of Wrong: The Science of Failing Well</em>. Identifying which kind of failure you are experiencing will help you fix the problem in the future.</p>
	      <p><em>Basic failures</em> are preventable mistakes like typos, missing deadlines, or not saving our work. These happen because we are human, and we are imperfect creatures. Basic failures usually have fairly simple solutions, though they can be hard to overcome.</p>
	      <p><em>Complex failures</em> come from unforeseen and/or external variables. These are harder to avoid because we can't plan all of the time for all of the things that can go wrong. This is the dog eating your homework and the fender bender on the way to the airport. <NuxtLink to="/articles/keep-your-failures-in-scope">Things happen</NuxtLink> and you do your best to make do.</p>
	      <p>Be careful not to use this category as a crutch. Ego can push other kinds of failure into this bucket to avoid accountability.</p>
	      <p><em>Intelligent failures</em> occur when we try something new and have good reason to believe that it will work. The Pixar tadpole movie is a great example of an intelligent failure. The concept was sound, but execution revealed big process issues.</p>
	      <p>Properly diagnosing your failure gives you insight into how to best respond.</p>
	      <h3>3) Respond to Failure Properly</h3>
	      <p>Different failures require different responses.</p>
	      <p>Repeated basic failures require better systems or attention. If your phone dies every day before noon because you forgot to charge it overnight, that's a basic failure. Plug it in before bed or keep a charger in your backpack. To overcome basic failures, build habits and systems that prevent you from making the same mistakes over and over again.</p>
	      <p>Complex failures aren't totally avoidable, but you can still take steps to prevent them. In business, there is a concept called a <em>premortem</em>. A premortem is a failure-centric meeting at the beginning of a project. The goal is to think of all the ways that something could go wrong and mitigate the associated risk. You can't control traffic, but you can leave early enough that it doesn't matter. When you experience a complex failure, focus on what you can control.</p>
	      <p>Intelligent failures require reflection and iteration. If you launch a business and it doesn't gain traction, ask yourself what happened. Was the market smaller than you thought? Was your product or service useful, or did it miss the mark? Once you have some insight, you can refine your strategy. You can change your product, find a new market, or shift to a different business model entirely. Take what you learned and <NuxtLink to="/articles/agile-development-a-pattern-for-improvement">apply it on the next round of planning and action</NuxtLink>.</p>
	      <h2>It's Only a Mistake if You Don't Learn from It</h2>
	      <p>When Pixar decided to shelve the tadpole movie, they learned valuable lessons. The whole project had been an experiment to see if they were too formula-focused and rigid in their creative thinking. As it turns out, they weren't. Their formulas and rules were essential to their creative success. Armed with that knowledge, they channeled resources from the failed project into a new film, Inside Out, which became a smash hit.</p>
	      <p>Failure is not only an option—it is an imperative. It is a key component of the learning process. As you and I go about trying to do new things, we will fail. But success is not the absence of failure—it is a byproduct of failing well. No one is immune to failure. Ironically, the projects and people who fail in the long run are often those who try to avoid failure in the first place.</p>
	      <p>Don't shy away from projects or pathways that may end in failure. Don't let your ego get in the way. Try new things. Learn from your mistakes. Figure out what went wrong and improve your processes.</p>
	      <p>Learn to fail well.</p>
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