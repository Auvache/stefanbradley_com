// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { property: 'og:site_name', content: 'Stefan Auvache Bradley' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'author', content: 'Stefan Auvache Bradley' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @import "@/scss/toolbox/_variables.scss";
            @import "@/scss/mixins/_responsive-breakpoints.scss";
            @import "@/scss/mixins/_prefixes.scss";
            @import "@/scss/mixins/_fluid-props.scss";
            @import "@/scss/mixins/_flex-props.scss";
            @import "@/scss/mixins/_font-sizes.scss";
            @import "@/scss/mixins/_layout.scss";
          `
        }
      }
    }
  },

  compatibilityDate: '2025-02-11'
})