export default function useArticleSeo(articleInfo) {
  if (!articleInfo) return

  const title = articleInfo.title
  const description = articleInfo.description
  const keywords = `Stefan Auvache Bradley, ${articleInfo.categories.join(', ')}, ${articleInfo.keywords}`
  const canonical = `https://www.stefanauvachebradley.com/articles/${articleInfo.slug}`
  const imageUrl = articleInfo.image
    ? `https://www.stefanauvachebradley.com/img/articles/${articleInfo.image}`
    : 'https://www.stefanauvachebradley.com/img/profile.jpg'

  useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    keywords,
    canonical,
    robots: 'index, follow',
    ogUrl: canonical,
    ogType: 'article',
    ogImage: imageUrl,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
  })

  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": imageUrl,
        "datePublished": articleInfo.datePublished ? new Date(articleInfo.datePublished).toISOString() : undefined,
        "author": {
          "@type": "Person",
          "@id": "https://www.stefanauvachebradley.com/#person",
          "name": "Stefan Auvache Bradley"
        },
        "publisher": {
          "@type": "Person",
          "@id": "https://www.stefanauvachebradley.com/#person",
          "name": "Stefan Auvache Bradley"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        },
        "keywords": articleInfo.keywords
      })
    }]
  })
}
