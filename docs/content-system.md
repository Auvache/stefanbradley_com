# Content System

## Content Architecture

The site splits article content into two parts:

- Metadata in `assets/articlesList.json`
- Body copy in `pages/articles/<slug>.vue`

Both parts are required. If one changes without the other, the site becomes inconsistent.

## Article Metadata Schema

Each metadata object in `assets/articlesList.json` currently uses these fields:

- `slug`
  Route key and filename match target.
- `title`
  Article title shown across cards, hubs, archive, sitemap, and SEO.
- `datePublished`
  Stored as `YYYY/MM/DD`.
- `categories`
  Array of exact category labels used by hub pages.
- `featured`
  Boolean used by homepage and some promotional components.
- `rank`
  Numeric ordering used by `components/importantArticles.vue`. `0` is effectively "not in ranked promo list."
- `image`
  Filename from `public/img/articles/` or a fallback like `title.jpg`.
- `keywords`
  SEO keywords string.
- `description`
  SEO description.
- `summary`
  Card/archive summary copy.

## Supported Categories

The current editorial taxonomy is:

- `agile`
- `iteration`
- `destination dilemma`
- `systems`
- `failure`

Use these exact strings in metadata.

## Route and Slug Rules

- The article file path must be `pages/articles/<slug>.vue`.
- The metadata `slug` must be exactly `<slug>`.
- Internal links usually point to `/articles/<slug>`.
- If you rename a slug, update:
  `assets/articlesList.json`
  the Vue filename
  any hardcoded related-article slug lists
  any manual internal links to the old article

## How Article Pages Work

Most article files follow the same pattern:

1. Render a standard article shell:
   title, author line, optional hero image, article body, share links.
2. Import `articlesList`.
3. Read the current route.
4. Find the matching metadata object by slug.
5. Build SEO fields from that metadata.

This pattern is repeated manually across article files rather than centralized in a single shared component.

## How Listing Pages Work

- Homepage:
  loops over metadata entries where `featured === true`.
- `pages/articles/index.vue`:
  shows editorial framing, hardcoded topic hub descriptions, and the latest featured articles.
- Topic hub pages:
  filter metadata by category, but "Start Here" cards are curated with hardcoded slug arrays.
- `pages/sitemap.vue`:
  sorts articles alphabetically.

## Images

- Article card and hero images are served from `public/img/articles/`.
- Book images are served from `public/img/books/`.
- Some general UI images live under `assets/img/`.

If you add a new article image, place it in `public/img/articles/` and reference the filename in metadata.

## Books and Affiliate Content

- `assets/books.json` supplies the structured data for the books article.
- `assets/affiliateLinks.json` stores outbound affiliate URLs referenced in some article pages.

Not every article imports these files, but several older articles do.

## Known Content-System Gotchas

- Topic hub route slug and metadata category do not always match. The main case is:
  route `destination-dilemma`
  metadata category `destination dilemma`
- Many article files still contain unused imports such as `affiliateLinks` or `formatDate`.
- Article SEO logic is duplicated, so changing the article shell or SEO implementation site-wide will require a broad refactor.
- Article canonical URLs are assembled manually inside each page.

## New Article Checklist

1. Create `pages/articles/<slug>.vue`.
2. Copy a clean existing article page as the base.
3. Add the metadata entry to `assets/articlesList.json`.
4. Add a hero image to `public/img/articles/` if needed.
5. Decide whether the article should be:
   featured on the homepage
   included in ranked promo cards
   manually featured in a topic hub `featuredArticles` array
6. Add internal links to related essays where they improve the reading experience.
7. Confirm the title, description, summary, and on-page thesis all align.

## Best Opportunities for Future Refactoring

- Centralize the repeated article shell and SEO logic.
- Replace hardcoded hub curation with a metadata-driven strategy.
- Move article bodies to markdown or structured content if non-developers need easier authoring.
- Add schema validation for `assets/articlesList.json`.
