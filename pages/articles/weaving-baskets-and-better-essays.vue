<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

        <p>I once took an anthropology class. Three times a week, my classmates and I were assigned to read a hundred or so pages about stuff that people around the world do. We talked about polyandry in Nepal, genital mutilation in various African tribes, Hmong spirit healings, and Mexican basket weaving.</p>
        <p>In writing a book’s worth of reports on why people do the things they do, I stumbled upon a method for making my writing more cohesive. I would make some threads out of main ideas and weave them together to create something useful and easy on the eye, kind of like Mexican basket weaving.</p>
        <p>The metaphor doesn’t really hold up, but who cares.</p>
        <p>Here is my method.</p>
        <ol>
          <li>
            <p>Write down the main points of your argument and assign a color to each of them.</p>
          </li>
          <li>
            <p>Write the paper like it is due in 20 minutes and you will be executed if you don’t finish it.</p>
          </li>
          <li>
            <p>Go through your first draft and highlight each idea with its assigned color. Each idea is now a colorful "thread" in your paper.</p>
          </li>
          <li>
            <p>Look to see which colors are the most prevalent, which are lacking, which ones are out of order, etc. Edit and rewrite with the original draft as a reference. Write it well this time.</p>
          </li>
          <li>
            <p>Repeat steps 3 and 4 until the paper is good enough to turn in. You decide what that means.</p>
          </li>
        </ol>
        <p>This process kind of makes me feel like I am plagiarizing some moron who wrote a crappy paper. The good news is that the moron is me, so the plagiarism is okay.</p>
        <p>Let’s write an essay about Legos.</p>
        <h2><strong>Step 1</strong></h2>
        <p>What do we want to say about Legos? Good question.</p>
        <ul>
          <li>
            <p>Legos are the best toy ever</p>
          </li>
          <li>
            <p>They are fairly cheap and accessible</p>
          </li>
          <li>
            <p>They are super durable</p>
          </li>
          <li>
            <p>You can build anything with Legos</p>
          </li>
        </ul>
        <br>
        <p>Cool. Now, let’s give them some color.</p>
        <ul>
          <li>
            <p><span class="fw-bold" style="color: rgb(56, 118, 29)">Legos are the best toy ever</span>
            </p>
          </li>
          <li>
            <p><span class="fw-bold" style="color: rgb(17, 85, 204)">They are fairly cheap and accessible</span>
            </p>
          </li>
          <li>
            <p><span class="fw-bold" style="color: rgb(153, 0, 0)">They are super durable</span>
            </p>
          </li>
          <li>
            <p><span class="fw-bold" style="color: rgb(230, 145, 56)">They inspire you to create and build stuff</span>
            </p>
          </li>
        </ul>
        <br>
        <p>Excellent, we now have colorful things to say about Legos.</p>
        <h2><strong>Step 2</strong></h2>
        <p>Now, we write an essay about Legos based on my list of ideas.</p>
        <p><em>Legos are the best toy in the world because anyone can play with them, they last forever, and they inspire creativity.</em>
        </p>
        <p><em>Anyone can play with legos because they are available to everyone and are pretty cheap.</em>
        </p>
        <p><em>Legos last forever because they are small pieces of plastic that can be swallowed, pooped out, and still used. Those little bastards are indestructible.</em>
        </p>
        <p><em>Legos inspire creativity because they can be used to build almost anything you can imagine (provided you have enough of them). The person provides the creative limitations, not the toy.</em>
        </p>
        <p><em>As you can see, anyone can be inspired by legos forever, making them the best toy of all time.</em>
        </p>
        <p>And that, my friends, is a 2-minute essay about Legos.</p>
        <h2><strong>Step 3</strong></h2>
        <p>Now, I reread the essay and assign a color to each main idea.</p>
        <p>Remember our colorful list of topics?</p>
        <ul>
          <li>
            <p><span class="fw-bold" style="color: rgb(56, 118, 29)">Legos are the best toy ever</span>
            </p>
          </li>
          <li>
            <p><span class="fw-bold" style="color: rgb(17, 85, 204)">They are fairly cheap and accessible</span>
            </p>
          </li>
          <li>
            <p><span class="fw-bold" style="color: rgb(153, 0, 0)">They are super durable</span>
            </p>
          </li>
          <li>
            <p><span class="fw-bold" style="color: rgb(230, 145, 56)">They inspire you to create and build stuff</span>
            </p>
          </li>
        </ul>
        <p>Now, we read through the paper and highlight what we wrote based on the topic that it supports. Here is the result.</p>
        <p><span class="fw-bold" style="color: rgb(56, 118, 29)"><em>Legos are the best toy in the world</em></span><em> because </em><span class="fw-bold" style="color: rgb(17, 85, 204)"><em>anyone can play with them</em></span><em>, </em><span class="fw-bold" style="color: rgb(204, 0, 0)"><em>they last forever</em></span><em>, and </em><span class="fw-bold" style="color: rgb(230, 145, 56)"><em>they inspire creativity</em></span><em>.</em>
        </p>
        <p><span class="fw-bold" style="color: rgb(17, 85, 204)"><em>Anyone can play with legos because they are available to everyone and are pretty cheap.</em></span>
        </p>
        <p><span class="fw-bold" style="color: rgb(204, 0, 0)"><em>Legos last forever because they are small pieces of plastic that can be swallowed, pooped out, and still used.</em></span><em> Those little bastards are indestructible.</em>
        </p>
        <p><span class="fw-bold" style="color: rgb(230, 145, 56)"><em>Legos inspire creativity because they can be used to build almost anything you can imagine</em></span><em> (provided you have enough of them). </em><span class="fw-bold" style="color: rgb(230, 145, 56)"><em>The person provides the creative limitations, not the toy</em></span><em>.</em>
        </p>
        <p><em>As you can see, </em><span class="fw-bold" style="color: rgb(17, 85, 204)"><em>anyone</em></span> <span class="fw-bold" style="color: rgb(230, 145, 56)"><em>can be inspired</em></span><em> by legos </em><span class="fw-bold" style="color: rgb(204, 0, 0)"><em>forever</em></span><em>, </em><span class="fw-bold" style="color: rgb(56, 118, 29)"><em>making them the best toy of all time.</em></span>
        </p>
        <p>Pretty easy, right? You can clearly see all of our original ideas accounted for in the paper.</p>
        <h2><strong>Steps 4 and 5</strong></h2>
        <p>Let the weaving begin.</p>
        <p>There is a bit more orange than blue in our essay. The <span class="fw-bold" style="color: rgb(230, 145, 56)">inspire creativity</span> point has more words behind it than <span class="fw-bold" style="color: rgb(17, 85, 204)">availability </span>or <span class="fw-bold" style="color: rgb(204, 0, 0)">durability</span>. Maybe that is an issue, maybe not. If the creativity-inspiring quality of Legos is the strongest thread, then extra support may be a good thing. If you think Lego availability is more impactful, you probably need to make some changes.</p>
        <p>You now have an organized, transparent rough draft to work with. Rewrite the essay, move stuff around, add new points, remove old ones, whatever you need to improve upon what you’ve written. Weave until the paper is where you want it to be.</p>
        <p>This process greatly reduced the amount of time I spent writing essays in college.</p>
        <p>Give it a shot.</p>

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
useArticleSeo(articleInfo)
</script>