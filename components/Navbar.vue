<template>
  <nav class="bg-black-denim">
    <div class="container medium-content py-2">
      <div class="d-flex justify-content-between align-items-center">
        <NuxtLink class="logo" to="/">
          STEFAN AUVACHE BRADLEY
        </NuxtLink>
        <div class="menu-links">
          <div>
            <button class="hamburger-icon" type="button" @click="toggleMenu" aria-label="Toggle menu">
                <span class="bar1 mb-1"></span>
                <span class="bar2 mb-1"></span>
                <span class="bar3"></span>
            </button>
            <ul id="dropdown" class="hamburger-menu d-none">
              <li><NuxtLink class="text-decoration-none text-black text-alternate" @click="toggleMenu" to="/subscribe">Subscribe</NuxtLink></li>
              <li><NuxtLink class="text-decoration-none text-black text-alternate" @click="toggleMenu" to="/articles">Read articles</NuxtLink></li>
              <li><NuxtLink class="text-decoration-none text-black text-alternate" @click="toggleMenu" to="/contact">Contact</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="nav-buffer"></div>
  <div v-if="showSubscribeBanner" id="subscribeBanner" class="bg-black-denim border-white border-bottom">
    <div class="position-relative">
      <NuxtLink class="white text-decoration-none text-alternate" to="/subscribe"><span class="text-decoration-underline">Subscribe</span> for weekly insights</NuxtLink>
      <button @click="closeSubscribeBanner" type="button" class="btn-close btn-close-white" aria-label="Close subscribe banner"></button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const { currentRoute } = router
const hideBannerPageList = ['/', '/subscribe', '/music', '/thank-you']
const showSubscribeBanner = ref(!hideBannerPageList.includes(currentRoute.value.path))
const toggleMenu = () => {
  let menu = document.getElementById("dropdown");
  menu.classList.toggle("d-none");
}

const closeSubscribeBanner = () => {
  let banner = document.getElementById("subscribeBanner");
  banner.classList.add("d-none");
}
</script>