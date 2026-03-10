<template>
	<section class="section-padding bg-black-denim">
		<div class="container thin-content">
			<h2 class="text-white">Stefan Auvache Bradley</h2>
			<hr class="white">
			<div class="d-flex flex-column flex-sm-row align-items-center gap-4">
				<img src="@/assets/img/profile.jpg" alt="Stefan Auvache Bradley" style="width: 250px; border: 1px solid rgba(255,255,255,0.25)" class="rounded-circle">
				<div class="text-white">
					<p>Hello. My name is Stefan.</p>
					<p>I'm a software engineer with a Master's degree in Information Systems Management from BYU. I live in Vancouver, Washington with my family.</p>
					<p>I write about how to iteratively build a life you actually want instead of chasing goals that ultimately leave you feeling unfulfilled. Every week, I share one idea about building your life the way you build great software—through small experiments and thoughtful iteration.</p>
				</div>
			</div>
			<hr class="white">
			<ul class="list-unstyled text-white">
				<li><NuxtLink class="link" to="/subscribe">Subscribe to the email list</NuxtLink></li>
				<li><NuxtLink to="/articles">Read articles</NuxtLink></li>
				<li><NuxtLink to="/contact">Contact Information</NuxtLink></li>
			</ul>
		</div>
	</section>
</template>
<script setup lang="ts">
</script>