<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>John Mayer is one of the best guitarists alive today. His passion for his craft has brought him incredible success in the music industry. He has played the blues, written pop and rock hits, played with everyone from Keith Urban to Jay-Z and Eric Clapton to Alicia Keys, won Grammys and accolades, sold tens of millions of records, and cemented his place as a perennial guitar hero.</p>

	      <p>At a turning point in his career, John became famous not just for his music and talent, but for a media frenzy surrounding his personal life. He thought people cared as much about who he was dating and how he carried himself as they did about his music, so he indulged the media with antics and controversy. His public fall came when a pair of inflammatory interviews sparked backlash from the public. He had allowed his public persona to eclipse his dedication to his craft. His reputation took a major blow, and he took an extended, self-imposed hiatus from the public eye.</p>

	      <p>Setting goals, making plans, working hard, and achieving success can lead to recognition. Recognition can lead to distraction and perceived public expectation. Those distractions and expectations can shift your priorities away from doing meaningful, fulfilling work. It is easy to let ego-boosting success bleed into and damage other parts of our lives. John Mayer said that, “the biggest mistake I made that cost me a lot of enjoyment in my life is assuming that everybody cared. They don’t.” He thought that people would be disappointed if he didn’t live the rockstar lifestyle, and it cost him dearly.</p>

	      <p>After a few years living off the Hollywood radar, John Mayer reemerged with a much different, more introspective lifestyle. He released an album, then another the following year. He talked about the music and the personal struggles that had led him to write the songs. The focus was music, not stardom. Fulfillment came not from chasing attention or standing in the spotlight, but from refining his craft and sharing his music.</p>

	      <p>If you want to be successful AND live a fulfilling life, save the performance for the stage. Focus on doing your work, not what other people think about you while you are doing your work. You can’t control what other people think and you can’t eliminate the notoriety that accompanies success, but you don’t have to indulge either of them. Let your results speak for themselves. Practice humility. Practice your craft. Don’t foster a persona that sucks the peace out of your life. Be yourself. Do your work.</p>

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