<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p>We often overestimate what we can do in a day and underestimate what we can do in a decade. On the day-to-day, progress can seem painstakingly slow, and it can be incredibly disheartening to compare ourselves to the people we wish we were. Whether you’ve been writing a book, working on a bachelor’s degree, or learning to play an instrument, it is easy to feel like the task at hand is insurmountable. Widen your lens, lengthen your timeline. Stick with it. All experts in the world were once beginners. Provided you are open to feedback and are doing your work, you will improve, and improvement is compounded over time.</p>

        <p>No one becomes successful overnight. Stephen King wrote for almost ten years before publishing his first book. For Steven Pressfield, it was closer to thirty. Samuel L. Jackson was an actor for twenty years before his breakout role in Pulp Fiction. Usain Bolt missed his first Olympic Games due to injury. People find success when they do their work and keep doing it. They work on the good days and they work on the bad days. They work when things are going right and they work when things are going horribly wrong.</p>

        <p>“How many pages have I produced?” asks Steven Pressfield of himself. “I don’t care. Are they any good? I don’t even think about it. All that matters is I’ve put in my time and hit it with all I’ve got… The most important thing about art is to work. Nothing else matters except sitting down every day and trying.”</p>

        <p>In 2011, after contributing to several successful films (Ratatouille, WALL-E, Up, and Toy Story 3 to name a few), Pixar animator Austin Madison wrote the following letter to fellow creators going through hard times.</p>

        <div class="quote mb-3">
          <p>To Whom it May Inspire,</p>

          <p>I, like many of you artists out there, constantly shift between two states. The first (and far more preferable of the two) is white-hot, “in the zone” seat-of-the-pants, firing on all cylinders creative mode. This is when you lay your pen down and the ideas pour out like wine from a royal chalice! This happens about 3% of the time.</p>

          <p>The other 97% of the time I am in the frustrated, struggling, office-corner-full-of-crumpled-up-paper mode. The important thing is to slog diligently through this quagmire of discouragement and despair. Put on some audio commentary and listen to the stories of professionals who have been making films for decades going through the same slings and arrows of outrageous production problems.</p>

          <p>In a word: PERSIST.</p>

          <p>PERSIST on telling your story. PERSIST on reaching your audience. PERSIST on staying true to your vision. Remember what Peter Jackson said, “Pain is temporary. Film is forever.” And he of all people should know.</p>

          <p>So next time you hit writer’s block, or your computer crashes and you lose an entire night’s work because you didn’t hit save (always hit save), just remember: you’re never far from that next burst of divine creativity. Work through that 97% of murky abysmal mediocrity to get to that 3% which everyone will remember you for!</p>

          <p>I guarantee you, the art will be well worth the work!</p>

          <p>Your friend and mine,</p>

          <p>Austin Madison</p>

          <p>“ADVENTURE IS OUT THERE!”</p>
        </div>

        <p>Persist. Things will not always be easy. Things will not always be so hard. Do your work and keep doing it. On a long enough timeline, anyone can do almost anything.</p>
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