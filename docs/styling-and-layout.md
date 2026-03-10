# Styling And Layout

## Visual System Summary

The site uses a restrained editorial style:

- high-contrast black/white layout
- generous vertical spacing
- narrow readable content widths
- Bootstrap utility classes for quick layout
- custom SCSS for typography, spacing, buttons, cards, and animation

The visual tone is clean, direct, and content-first rather than decorative.

## Style Entry Points

- `app.vue`
  imports the global stylesheet.
- `scss/_global.scss`
  global imports plus element defaults and utility classes.
- `scss/toolbox/_variables.scss`
  colors, fonts, widths, spacing, shadows, and other design tokens.
- `scss/comps/_posts.scss`
  article and card-related styling.
- `scss/comps/_buttons.scss`
  button styles.
- `scss/comps/_animations.scss`
  shared animation classes.

## Typography

- Sans body font: `Lexend Deca`
- Display/title font: `Montserrat`
- Body copy is optimized for article readability with narrow containers and generous line height.

Useful width helpers from global styles:

- `.thinnest-content`
- `.thin-content`
- `.medium-content`
- `.large-content`

These are used heavily to control reading width and page rhythm.

## Color And Brand Direction

The dominant colors come from `scss/toolbox/_variables.scss`:

- black/off-black for headers, nav, and major CTA sections
- white backgrounds for article reading areas
- muted blue link color via `$steel-blue`

`bg-black-denim` is a recurring dark surface treatment used in the navbar, subscribe blocks, contact page, and footer/about areas.

## Layout Behavior

- The navbar is fixed visually at the top of the experience and paired with a `nav-buffer`.
- Long-form content usually lives inside `container thinnest-content`.
- Hub/index pages often widen slightly to `thin-content`.
- Dark sections are used for transitions into subscription or author-bio modules.

## Component-Level Styling Reality

Most styling is driven by global SCSS plus Bootstrap utility classes, not large scoped style blocks.

Implication:

- Small visual changes are often best handled in SCSS partials or global utility patterns.
- Page-local styles are used sparingly for one-off layout tweaks like hero height or heading spacing.

## When Making Visual Changes

- Preserve narrow reading widths for article pages unless there is a strong reason not to.
- Keep CTA sections visually distinct from reading sections.
- Avoid introducing a new design language on a single page unless you are intentionally redesigning the site.
- Reuse existing classes and token variables before inventing new ones.
- Check dark-section readability carefully because many CTAs and footer areas use white text on dark backgrounds.

## Files With High Blast Radius

- `scss/_global.scss`
  affects nearly every page.
- `scss/toolbox/_variables.scss`
  changes tokens used across the site.
- `components/Navbar.vue`
  visible on almost every route.
- `components/SubscribeBar.vue`
  present across many non-home pages.
- `components/About.vue`
  shared footer/bio region.

## Safe Styling Strategy For AI Agents

- Prefer targeted updates in the component you are changing first.
- Move shared styling into SCSS partials only when the pattern is clearly reused.
- Avoid changing font families, container widths, or primary dark-section treatments casually because those define the site's identity more than any one component does.
