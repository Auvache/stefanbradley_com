<template>
	<div>
		<hr class="mt-5">
		<p>Enjoy this article? Share it and <NuxtLink to="/subscribe">subscribe for weekly insights</NuxtLink>.</p>
		<ul class="list-unstyled d-flex flex-wrap gap-2">
			<li>
				<a :href="`https://twitter.com/intent/tweet?url=https://www.stefanauvachebradley.com/articles/${slug}&text=Check%20out%20this%20article:`" target="_blank" rel="noopener noreferrer">
					<img style="max-width: 40px" src="/assets/img/x-logo.jpg" alt="Share on X" class="h-6 w-6" />
				</a>
			</li>
			<li>
				<a :href="`https://www.linkedin.com/sharing/share-offsite/?url=https://www.stefanauvachebradley.com/articles/${slug}`" target="_blank" rel="noopener noreferrer">
					<img style="max-width: 40px" src="/assets/img/linkedin.jpg" alt="Share on LinkedIn" class="h-6 w-6" />
				</a>
			</li>
			<li>
				<a :href="`https://www.facebook.com/sharer/sharer.php?u=https://www.stefanauvachebradley.com/articles/${slug}`" target="_blank" rel="noopener noreferrer">
					<img style="max-width: 40px" src="/assets/img/facebook.png" alt="Share on Facebook" class="h-6 w-6" />
				</a>
			</li>
			<li>
				<a :href="`https://www.reddit.com/submit?url=https://www.stefanauvachebradley.com/articles/${slug}&title=Check%20out%20this%20article`" target="_blank" rel="noopener noreferrer">
					<img style="max-width: 40px" src="/assets/img/reddit.webp" alt="Share on Reddit" class="h-6 w-6" />
				</a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	slug: string
}>()
</script>
