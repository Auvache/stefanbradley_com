<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1>{{article.title}}</h1>
        <p>{{article.datePublished}}</p>

        <p>Sometimes, a writer can change your life. Scott Adams changed mine.</p>
        <p>Adams is the mastermind behind
          <a target="_blank" href="https://dilbert.com/">
            <span style="color:rgb(17, 85, 204);">the Dilbert comic strip</span>
          </a>. He also has a blog.
          <a target="_blank" href="https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html">
            <span style="color:rgb(17, 85, 204);">One of the articles on that blog</span>
          </a>
          is about becoming a better writer.</p>
        <p>Adam’s says, in a nutshell:</p>
        <ul>
          <li>Keep it simple</li>
          <li>Get rid of extra words</li>
          <li>The first sentence should grab the reader</li>
          <li>Avoid multiple thoughts in a single sentence</li>
        </ul>
        <p>Basically, writing should be as easy to understand as possible. Make your work entertaining, but not at the expense of simplicity. Scott Adams’ 263-word post gave me the confidence to start writing daily (you’re the man Scott).</p>
        <p>The last line of the article says:</p>
        <p>
          <em>“That’s it. You just learned 80% of the rules of good writing. You’re welcome.</em>”</p>
        <p>I first assumed that the remaining 20% would include granular, complex stuff like, “know your target audience” or “have an editor run through your work.”</p>
        <p>Then I read
          <a target="_blank" href="https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026/ref=sr_1_1?dib=eyJ2IjoiMSJ9.W_0pCVG1Cxh31wjGmGLw54QT5U3VPM1qIdukXPZUN_IZgXW5oXjOJ84l23Wxft6abqQT15l7f-TkP_m1dS9x7PN1sBgkVtsnHLrmkHya7qgCGrMrc3KAsVAHBl8d043r5XGsUESwNDJUCXwLMnm8yO-BIHgCcGbav2nSaxUkP4Tm-dey10Ynf-BLwDwHbiX41dCfXuj-nkEvppBl8R8c4okf39hVN2kRVaM6kNdEKDc.6iaTszJwXLg-DTXNQp9emZB8BQUbnH83EZB4sYK1EMg&amp;dib_tag=se&amp;hvadid=616931716525&amp;hvdev=c&amp;hvlocphy=9033614&amp;hvnetw=g&amp;hvqmt=e&amp;hvrand=7221299162307047327&amp;hvtargid=kwd-342894155&amp;hydadcr=24661_13611822&amp;keywords=the+war+of+art&amp;qid=1708530935&amp;sr=8-1">
    <span style="color:rgb(17, 85, 204);">
      <em>The War of Art</em>
    </span>
          </a>
          by Steven Pressfield.</p>
        <p>Pressfield’s writing embodies many of the principles from Adams’ post. His sentences are concise. His “chapters” are often a single paragraph.
          <em>The War of Art</em>
          itself barely breaks 150 pages. Anyone would be hard pressed to cut a phrase from that book without making it worse. If books were people,
          <em>The War of Art
          </em>would have 3% body fat.</p>
        <p>But the thing that makes Steven Pressfield a great writer isn’t the leanness of his writing. Every portion of
          <em>The War of Art</em>
          is meaningful. His singular focus on what he calls
          <em>Resistance
          </em>captivates and inspires the reader.</p>
        <p>The main characteristic of great writing is something great to write about.</p>
        <p>If I could append a sentence to Scott Adams’ nigh perfect blog post, it would be this:</p>
        <p>“<em>That’s it. You just learned 80% or the rules of good writing. Now find something worth writing about.”</em>
        </p>
        <p>Write simply. Keep it lean. Convey ideas to your audience as clearly as possible. And, for the love of Scott and Steven, write about something meaningful.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import getArticleData from "@/functions/getArticleData";
let article = getArticleData()
</script>