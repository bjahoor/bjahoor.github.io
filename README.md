# bjahoor.github.io

Portfolio for Brandon Jahoor — robotics projects, co-op experience, and resume.
Live at **[bjahoor.github.io](https://bjahoor.github.io)**.

Built with [Astro](https://astro.build) + Tailwind, deployed to GitHub Pages by
GitHub Actions. Ships no JavaScript except one React island for the project
filter.

## Colour

The palette is the University of Waterloo **Faculty of Engineering purple**, per the
official [Waterloo brand guidelines](https://uwaterloo.ca/brand/how-express-our-brand/colour).
Tokens live in [`src/styles/global.css`](src/styles/global.css).

| Level | Hex | Used for | Contrast on `#08090b` |
|---|---|---|---|
| 1 | `#C2A8F0` | links, accent text, focus rings | 9.63 |
| 2 | `#A05DCB` | hover states | 4.67 |
| 3 | `#865DA4` | borders, muted accents | 3.90 |
| 4 | `#5D0096` | solid button fills, **white text only** | 1.81 |

Waterloo designates level 4 the digital primary, and it is — as a *fill*. Against this
near-black background it fails as text at 1.81:1, so it is only ever used behind white
(11.02:1). Level 1 carries every piece of accent text instead.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run check    # type-check
```

Requires Node 22.12+ (even-numbered releases only).

## Adding a project

Create one Markdown file in `src/content/projects/`. The filename becomes the
URL. Frontmatter is schema-validated — a typo fails the build instead of
rendering an empty page.

```markdown
---
title: "Project Name"
blurb: "One line. What it does, not what it is."
tags: ["Perception", "Hardware"]
stack: ["ROS 2", "NVIDIA Jetson"]
year: "2026"
cover: "/images/project-name.jpg"   # optional
repo: "https://github.com/..."      # optional
demo: "/demos/slug"                 # optional
featured: false                     # promotes to the homepage
weight: 50                          # higher sorts first
---

The write-up goes here.
```

Experience entries work the same way in `src/content/experience/`. Set
`robotics: false` to place a role in the "Earlier engineering" group.

## Resume

The resume is LaTeX, not a Word export. Source of truth is
[`resume/resume.tex`](resume/resume.tex).

```bash
cd resume && latexmk -pdf resume.tex
```

CI compiles it on every deploy and copies the result to `/brandon_jahoor_resume.pdf`, so the
published PDF can never drift from the source. `resume.yml` additionally fails
the build if the resume stops being exactly one page.

## Layout

```
src/
  content/projects/     one markdown file per project
  content/experience/   one markdown file per role
  content.config.ts     collection schemas
  layouts/Base.astro    shell: nav, footer, fonts, view transitions
  components/           ProjectCard.astro, ProjectFilter.tsx (the one island)
  pages/                routes
public/images/          media
resume/resume.tex       resume source
```
