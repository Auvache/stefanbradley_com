# Site Overview

## What This Site Is

This repository powers `stefanauvachebradley.com`, a personal development site centered on long-form essays plus a small newsletter funnel and a separate music landing page.

The implementation is best understood as a content site built with Nuxt 3, Bootstrap utilities, and custom SCSS. There is no meaningful backend application logic in the repo right now.

## Primary User Flows

- Homepage: featured article cards plus a newsletter signup hero.
- Articles landing page: explains the editorial thesis and routes readers into topic hubs or recent posts.
- Topic hubs: curated category pages for the site's five main themes.
- Individual article pages: long-form essays with metadata-driven SEO and share links.
- Archive and sitemap pages: browse all content.
- Subscribe flow: ConvertKit embed plus thank-you page.
- Contact page: direct email CTA.
- Music page: isolated promotional page for an album.

## Directory Map

- `pages/`
  Route files for the site.
- `pages/articles/`
  All article pages plus the topic hubs and the article index page.
- `components/`
  Shared UI pieces such as navbar, footer modules, article cards, and newsletter bars.
- `layouts/`
  Layout wrappers used to vary footer/subscription behavior.
- `assets/`
  Structured data plus bundled images.
- `public/`
  Publicly served images and static assets like `robots.txt` and `sitemap.xml`.
- `scss/`
  Global styles, variables, mixins, and component-level SCSS partials.
- `functions/`
  Small utility helpers used by pages/components.

## Route Structure

- `/`
  Homepage with newsletter hero and featured articles.
- `/articles`
  Main article hub.
- `/articles/agile`
- `/articles/iteration`
- `/articles/destination-dilemma`
- `/articles/systems`
- `/articles/failure`
- `/articles/<slug>`
  Individual article pages.
- `/sitemap`
  Link-based site index.
- `/subscribe`
- `/thank-you`
- `/contact`
- `/music`

## Layout Model

- `layouts/default.vue`
  Navbar + page + footer.
- `layouts/hub.vue`
  Navbar + page + subscribe bar + about/footer block.
- `layouts/no-footer.vue`
  Navbar + page only.
- `layouts/main.vue`
  Bare wrapper used by the music page.

## Shared Components With Outsize Impact

- `components/Navbar.vue`
  Controls top navigation, mobile menu, and the dismissible subscribe banner.
- `components/SubscribeBarHero.vue`
  Homepage newsletter hero.
- `components/SubscribeBar.vue`
  Newsletter CTA used lower in the site.
- `components/ArticleCardsList.vue`
  Renders article cards for hub pages from hardcoded slug lists.
- `components/importantArticles.vue`
  Footer-style article promo block driven by metadata `featured` + `rank`.
- `components/articleShareLinks.vue`
  Social share links for article pages.
- `components/About.vue`
  Bio/footer content.

## Data Flow

The main content flow looks like this:

1. `assets/articlesList.json` defines article metadata.
2. Listing pages and promo components read that JSON directly.
3. Each article page reads the current route, finds its metadata record, and uses it for title, description, keywords, and canonical URL.
4. The article body itself lives in the Vue file, not in the JSON.

## Important Realities

- The site uses Nuxt routing, but the article system is manually maintained.
- There is no CMS, no markdown pipeline, and no shared article schema enforcement beyond convention.
- Topic pages are curated by code, not derived automatically from configuration.
- Several patterns are duplicated across many files, especially in article pages.
