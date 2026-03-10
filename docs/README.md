# Stefan Auvache Bradley Docs

This folder is a working map of the site for AI agents and future contributors.

## Read This First

- Start with [site-overview.md](./site-overview.md) for the high-level structure.
- Read [content-system.md](./content-system.md) before editing articles, hubs, SEO metadata, or archives.
- Read [styling-and-layout.md](./styling-and-layout.md) before changing visuals or shared UI.
- Read [writing-style-guide.md](./writing-style-guide.md) before writing or revising article copy.
- Use [change-playbook.md](./change-playbook.md) for common tasks.

## Core Facts

- This is a Nuxt 3 personal site with mostly static content.
- The site currently has 55 article pages in `pages/articles/*.vue`.
- Article metadata is centralized in `assets/articlesList.json`.
- Article bodies are not markdown. They are hand-authored Vue page components.
- The main editorial theme is "Agile Personal Development": using software engineering ideas like iteration, feedback, systems, and experimentation to build a more fulfilling life.
- The five topic hubs are `agile`, `iteration`, `destination-dilemma`, `systems`, and `failure`.

## Highest-Value Invariants

- Each article needs both a Vue file in `pages/articles/` and a matching metadata entry in `assets/articlesList.json`.
- The article filename slug and the JSON `slug` must stay in sync.
- Homepage cards, article archives, the sitemap, and footer/article promos all depend on `assets/articlesList.json`.
- Topic hub pages use exact category strings from metadata. One important mismatch exists by design:
  `destination-dilemma` is the route slug, but the article metadata category is `destination dilemma`.
- Shared article chrome is mostly copy-pasted into article files instead of abstracted into one reusable article shell.

## Generated or Low-Value Directories

- Do not hand-edit `.nuxt`, `.output`, `dist`, or `node_modules`.
- `content/` is currently empty.
- `server/` currently contains only `tsconfig.json`.

## Why These Docs Exist

The site is small enough to change quickly, but it has enough repeated patterns that careless edits can break metadata sync, hub pages, or tone. These docs are meant to reduce that risk and help future changes stay structurally and editorially consistent.
