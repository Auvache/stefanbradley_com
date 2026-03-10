# Change Playbook

## If You Need To Add A New Article

1. Duplicate a recent clean article file in `pages/articles/`.
2. Rename it to the target slug.
3. Replace the body copy.
4. Update the metadata lookup to match the new route slug convention.
5. Add the entry to `assets/articlesList.json`.
6. Add an image to `public/img/articles/` if the article needs one.
7. Decide whether to add it to:
   homepage featured content
   ranked footer promos
   a topic hub's hardcoded `featuredArticles` list

## If You Need To Change Homepage Featured Articles

- Edit `assets/articlesList.json`.
- The homepage uses `featured: true`.
- Ordering is effectively the JSON order, not an explicit homepage rank.
- Footer/article promo cards are different and use `featured === true && rank !== 0`.

## If You Need To Change A Topic Hub

- Edit the relevant file in `pages/articles/`:
  `agile.vue`
  `iteration.vue`
  `destination-dilemma.vue`
  `systems.vue`
  `failure.vue`
- Update the descriptive copy at the top.
- Update the hardcoded `featuredArticles` slug list if the "Start Here" cards should change.
- Keep the metadata category strings exact.

## If You Need To Change Shared Article UI

Expect a broad edit.

Why:

- Most article pages repeat their shell manually.
- Changing author line, hero treatment, SEO assembly, or share block placement may require touching many article files unless you refactor first.

Best strategy:

- If the change is cosmetic and small, update the repeated pattern carefully.
- If the change is structural, consider introducing a shared article layout or component before editing dozens of files.

## If You Need To Improve SEO

- Listing pages each define their own `useSeoMeta` block.
- Article pages also define SEO locally from `articleInfo`.
- The highest-leverage improvement would be centralizing article SEO generation.

## If You Need To Change Newsletter UX

Check:

- `components/SubscribeBarHero.vue`
- `components/SubscribeBar.vue`
- `pages/subscribe.vue`
- `pages/thank-you.vue`
- `components/Navbar.vue`

The newsletter embed is currently a hardcoded external script include.

## If You Need To Restyle The Site

Start in:

- `scss/toolbox/_variables.scss`
- `scss/_global.scss`
- `scss/comps/_posts.scss`
- `scss/comps/_buttons.scss`

Then check affected components for local exceptions.

## If You Need To Reduce Maintenance Cost

These refactors would pay off quickly:

- create a shared article shell component
- create a single article SEO helper/composable
- validate article metadata schema
- derive topic hub content from shared configuration
- remove unused imports from article files

## Pre-Edit Safety Checks

- Confirm whether the change affects one page, all articles, or all routes.
- Check whether the source of truth is metadata, page code, or shared components.
- Search for hardcoded slug references before renaming anything.

## Post-Edit Safety Checks

- Verify the route still resolves.
- Verify title, description, summary, and category stayed consistent.
- Verify cards, hubs, and archive links still point to the correct slug.
- Verify dark sections remain readable.
