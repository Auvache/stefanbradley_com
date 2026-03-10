<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p>Sometimes, a writer can change your life. Scott Adams changed mine.</p>
        <p>Adams is the mastermind behind
          <a target="_blank" href="https://dilbert.com/">
            the Dilbert comic strip
          </a>. He also has a blog.
          <a target="_blank" href="https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html">
            One of the articles on that blog
          </a>
          is about becoming a better writer.</p>
        <p>Adam's says, in a nutshell:</p>
        <ul>
          <li>Keep it simple</li>
          <li>Get rid of extra words</li>
          <li>The first sentence should grab the reader</li>
          <li>Avoid multiple thoughts in a single sentence</li>
        </ul>
        <p>Basically, writing should be as easy to understand as possible. Make your work entertaining, but not at the expense of simplicity. Scott Adams' 263-word post gave me the confidence to start writing daily (you're the man Scott).</p>
        <p>The last line of the article says:</p>
        <p>
          <em>"That's it. You just learned 80% of the rules of good writing. You're welcome.</em>"</p>
        <p>I first assumed that the remaining 20% would include granular, complex stuff like, "know your target audience" or "use contractions sparingly."</p>
        <p>Then I read <a target="_blank" :href="affiliateLinks.books.theWarOfArt"><em>The War of Art</em></a> by Steven Pressfield.</p>
	      <p>If books were people, The War of Art would have 3% body fat. His sentences are concise. His "chapters" are often a single paragraph. The War of Art itself barely breaks 150 pages. Anyone would be hard-pressed to cut a phrase from that book without making it worse.</p>

	      <p>But the thing that makes Steven Pressfield a great writer isn't the leanness of his writing. Every portion of The War of Art is meaningful. His singular focus on what he calls Resistance captivates and inspires the reader.</p>

	      <p>The main characteristic of great writing isn’t style—it’s substance. The best writers write about things worth writing about.</p>

	      <h2>Do Meaningful Things</h2>

	      <p>The same is true in life.</p>

	      <p>There are strategies for skill acquisition, personal growth, financial freedom, and career success. You can use as many productivity tools as you want. All of the tools in the world won’t help you feel fulfilled if they don’t help you do worthwhile things.</p>

	      <p>When setting goals or making life plans, follow a simple rule: focus first on meaning. Choose projects, habits, and pursuits that matter to you and make a positive impact on the people around you. Intentionally creating meaningful goals will make your days feel more purposeful and help you feel more fulfilled in life.</p>

	      <p>If I could append a sentence to Scott Adams' near-perfect blog post, it would be this:<br>
		      "That's it. You just learned 80% of the rules of good writing. You’re welcome. Now find something worth writing about."</p>

	      <p>Great writers focus on the substance of their writing.</p>

	      <p>Great people focus on the substance of their lives.</p>

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