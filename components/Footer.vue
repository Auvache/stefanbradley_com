<template>
  <div>
	  <SubscribeBar />
	  <ImportantArticles v-if="!hideFooterArticlesList.includes(route.path)" />
    <footer>
      <About v-if="!hideFooterAboutList.includes(route.path)" />
    </footer>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const hideFooterArticlesList = ['/', '/about']
const hideFooterAboutList = ['/about']
</script>