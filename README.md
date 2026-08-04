# Cedriss — Software Developer Portfolio

A minimal, premium developer portfolio for Cedriss (Software Developer specializing in Shopify & Web Development). Built with React, Vite, and Framer Motion, kept intentionally scoped to four things: who I am, my projects, my technical skills, and how to reach me.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

The site is a single scrollable homepage (Hero → Projects → About) plus two dedicated case study pages, rather than a multi-page site with a nav for every section:

```
src/
  components/
    Nav.jsx / Footer.jsx        Site chrome. Nav links to Home / #projects / #about / #contact (footer)
    ProjectCard.jsx             Reusable project card, reads from data/projects.js
    ProjectVisual.jsx           Line-drawn SVG placeholder used on project cards
    PlaceholderMedia.jsx        Reusable image/video placeholder block (case studies)
    ProjectHighlightCard.jsx    Reusable "key implementation" card (functionality highlights, e.g. Two Clothes' Key Implementations)
    GalleryCard.jsx             Reusable showcase card: image + title + short description (Two Clothes' Storefront Showcase)
    BeforeAfterCard.jsx         Reusable before/after customization card (Slate Coffee page)
    SectionHeading.jsx, ScrollReveal.jsx, Seo.jsx, ScrollToTop.jsx   Shared utilities
  data/
    projects.js                 Add a new project by adding one object here
    skills.js                   Flat list of skills shown in the About section
    customizations.js           Slate Coffee's before/after items; add more the same way
    twoClothesShowcase.js       Two Clothes' "Storefront Showcase" gallery items (image, alt, description, featured flag)
  pages/
    Home.jsx                    Hero, Projects, About sections
    ProjectTwoClothes.jsx        Case study template #1: video walkthrough, overview, features, gallery, challenge/solution
    ProjectSlateCoffee.jsx       Case study template #2: before/after customization cards
    NotFound.jsx
  styles/
    tokens.css                   Design tokens (colors, type, spacing, motion) — unchanged from the original design
```

## Adding a new project

1. Add an entry to `src/data/projects.js`:

```js
{
  title: "New Project",
  type: "Shopify Store Development",
  description: "Short one-line description.",
  technologies: ["Shopify", "Liquid", "CSS"],
  caseStudy: "/projects/new-project",
  image: 0, // 0 or 1, just varies the placeholder accent color
}
```

2. It will automatically appear as a card in the Projects section, no layout changes needed.
3. Create a page for the route in `caseStudy` (e.g. `src/pages/ProjectNewProject.jsx`), using `ProjectTwoClothes.jsx` or `ProjectSlateCoffee.jsx` as a starting template depending on whether it's a full storefront build or a set of targeted customizations, and register the route in `src/App.jsx`.

## Before launch, replace:

- The placeholder avatar: pass a `src` to `<Avatar src="/images/cedriss.jpg" />` in `src/pages/Home.jsx` (used for both the hero and About photos) — add the image to `/public/images`
- Project screenshots: set `screenshot: "/images/two-clothes.jpg"` (etc.) in `src/data/projects.js` — `ProjectCard` picks it up automatically, no layout changes needed
- The Loom video placeholder in `ProjectTwoClothes.jsx` with a real embed
- Screenshot placeholders (`PlaceholderMedia`) throughout both case study pages with real images
- Two Clothes gallery images: add `homepage.png`, `collection-page.png`, and `product-page.png` to `/public/images/two-clothes/` (paths already referenced in `src/data/twoClothesShowcase.js`)
- Social links and email in `src/components/Footer.jsx` and `src/pages/Home.jsx`
- URLs in `public/sitemap.xml` and `public/robots.txt` with your real domain

## Design system

Unchanged from the original design. Tokens live in `src/styles/tokens.css`:

- **Ink** (`#0B0E14`) background with **parchment** (`#EDEAE3`) text
- **Brass** (`#C9A227`) as the primary accent, **teal** (`#4C9C97`) as the secondary/interactive accent
- **Fraunces** for display type, **Inter** for body copy, **JetBrains Mono** for labels and utility text

## Accessibility

- Semantic landmarks, skip-to-content link, visible focus states
- `prefers-reduced-motion` respected (motion disabled via `useReducedMotion`)
- Anchor navigation (`/#projects`, `/#about`, `/#contact`) accounts for the sticky nav via `scroll-margin-top`

## Add your profile photo

Place a square photo at:

```text
public/images/profile/cedriss-profile.jpg
```

The About section will display it automatically. If no image is present, the neutral profile icon remains visible. To use another filename or format, update `src/data/profile.js`.
