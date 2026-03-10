<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>In 1995, Pixar broke ground by releasing <em>Toy Story</em>, the first-ever feature-length film created entirely with CGI. It made almost $30 million on its first weekend in theaters and grossed $358 million worldwide. For Ed Catmull, the president of Pixar, <em>Toy Story</em> was more than just a smashing financial success. Everyone raved about the story and the characters, but almost no one mentioned the cutting-edge computer animation used to tell that story and bring those characters to life. Pixar, though piloted by computer scientists and tech investors, had managed to make the telling of the tale more memorable than the medium.</p>

	      <p>The story outshined the technology thanks to a critical group of candid, want-to-make-something-great creatives—John Lasseter, Andrew Stanton, Pete Docter, Lee Unkrich, and Joe Ranft. During production, they convened to change and tweak the story over and over again until every scene pushed the plot forward and every character fit perfectly in its place. Later, while working to save a floundering <em>Toy Story 2</em> project, Pixar decided to turn that group of candid creators (and others who had jumped on the Pixar train) into an official team, and the Pixar Braintrust was born.</p>

	      <p>The Braintrust had one mission: improve the project at hand. They didn’t dictate what should be done or try to take creative control away from the directors and producers working on the film—the Braintrust gave candid feedback. For nine months, they worked to fix problems with <em>Toy Story 2</em>. Character arcs, critical scenes, plot holes, dialogue—the group dissected every aspect of the project and slowly refined the story into a polished gem. When <em>Toy Story 2</em> finally hit theaters, it received critical acclaim and eventually grossed over $500 million.</p>

	      <p>From then on, the Braintrust began consulting directors and heads of story for every major film created by Pixar. <em>Monsters, Inc.</em>, <em>Finding Nemo</em>, <em>WALL-E</em>, <em>Inside Out</em>—every one of these films succeeded largely thanks to the candor, openness, and honesty of the Braintrust. While the list of Braintrust team members has grown and changed over the years to account for the increasing number of ongoing projects at Pixar, the purpose of the group has always remained the same—give honest feedback.</p>

	      <p>Pixar discovered something that countless others have stumbled upon in their careers—that candid feedback is the key to improvement. A young Staff Sergeant in the U.S. Air Force named Johnny Cash would record himself singing to gauge his improvement as he practiced. Eric Clapton recorded himself playing along to his favorite records to see if he was mastering the techniques of his guitar heroes. Kobe Bryant watched videos of his games over and over to understand where he was making mistakes. Jerry Seinfeld used to record his standup sets on tape and listen to how the crowd reacted to his punchlines. In the world of improvement, the capacity to measure your performance is king.</p>

	      <p>What are you trying to improve? Are you measuring it? How can you get honest feedback from a reliable source and apply it to improve your work?</p>

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