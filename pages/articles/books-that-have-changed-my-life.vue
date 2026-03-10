<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" :alt="articleInfo.title" class="mb-3">

	      <p>No habit or hobby has changed my life more than reading.</p>

	      <p>Reading can teach you about how agriculture and economics shape modern borders, how to be a better public speaker, or how to find comforting humor in difficult times. It will endlessly educate, entertain, and fascinate you if you let it.</p>

	      <p>In my office, I keep a shelf of books that have changed my life in some way. I universally recommend them to everyone.</p>

	      <p>Here are the books on my shelf and the life-changing lessons they have taught me:</p>
	      <hr>

	      <ul id="books" class="list-unstyled">
		      <li v-for="book in books" :id="book.image.replace('.jpg','')" :key="book.title" class="d-flex flex-column flex-sm-row align-items-center gap-4 pb-5">
			      <a :href="affiliateLinks.books[book.linkKey]" class="text-decoration-none" style="flex-shrink: 0" target="_blank" :aria-label="`Find ${book.title} online`">
				      <img
						      style="width: 150px; height: auto; max-width: 100%;"
						      :src="`/img/books/${book.image}`"
						      :alt="`Cover of ${book.title} by ${book.author}`"
				      >
			      </a>
			      <div>
				      <h2 class="mt-0">
					      {{ book.title }}<br><span class="t3">{{ book.author }}</span>
				      </h2>
				      <p>{{ book.description }}</p>
				      <a :href="affiliateLinks.books[book.linkKey]" class="text-decoration-none" target="_blank" :aria-label="`Find ${book.title} online`">
					      Find your own copy
				      </a>
			      </div>
		      </li>
        </ul>
      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks";
import articlesList from "@/assets/articlesList";
import books from "@/assets/books.json"

const router = useRouter()
const { currentRoute } = router
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/articles/',''))
// meta tags
useArticleSeo(articleInfo)
</script>

<style lang="scss" scoped>

</style>