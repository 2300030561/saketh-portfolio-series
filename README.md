# SAKETH â€” THE SERIES

A cinematic, streaming-inspired portfolio for **Pulugutha Saketh**: Full-Stack Developer and B.Tech AI & ML student.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It was generated from the resume, and every component reads from it.

| To changeâ€¦ | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` (add an object; it appears in Originals, the overlay, the resume sheet and the counts) |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| â–¶ Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** replace `public/assets/resume.pdf`.

**Photo:** replace `pic1.jpeg` (high-res photo) and `pic.png` (background-removed cutout with the same framing), then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## What's inside

```
src/
  data/portfolio.ts        â† single source of truth (from the resume)
  App.tsx                  â† stages: opening â†’ profile select â†’ home; overlays
  components/
    OpeningSequence        â† black â†’ studio card â†’ SAKETH â†’ THE SERIES â†’ portrait â†’ â–¶ PLAY
    ProfileSelector        â† "Who's watching?" (changes section order only)
    Navbar                 â† hide-on-scroll nav, profile switcher, mobile menu
    Hero                   â† billboard: parallax portrait, particles, light streaks, floating chips
    PlayIntro              â† â–¶ Play Intro: zoom into portrait â†’ highlight reel (pause, â† â†’, tap zones)
    ContinueWatching       â† cards with real "watched" progress bars
    About                  â† The Pilot
    Seasons / EpisodeCard  â† My Journey as seasons and episodes
    Originals / ProjectCardâ† pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           â† full-screen project overlay with a shared-element transition
    TopPicks               â† Top 10-style row
    Skills                 â† skill genres; each card shows where the skill appears
    Achievements           â† award-poster cards + certification rail (links to credentials)
    ResumeViewer/ResumeModal â† designed resume sheet, PDF viewer, download
    FinalCTA               â† TO BE CONTINUEDâ€¦ + contact links
    CustomCursor, fx.tsx   â† cursor states, magnetic buttons, 3D tilt, text reveals, particles
  hooks/                   â† Lenis smooth scroll + scroll lock, media queries, watch progress
scripts/build-images.mjs   â† portrait/share-image pipeline (sharp)
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll, the custom cursor, tilt, particles, grain and the pinned horizontal scroll turn off, and the opening jumps straight to its final frame.
- Hover effects only run on devices with a precise pointer. Touch devices get tap interactions and native swipe rails.
- The custom cursor appears only with a mouse or trackpad.
- Overlays close with Esc, and the highlight reel supports Space and the â† â†’ keys.
- Portraits are responsive WebP files (25â€“90 KB). Overlays are code-split, and particles pause when they're off screen.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, â† and â†’ change slides, Esc closes.
- **Project and resume overlays:** Esc closes.

