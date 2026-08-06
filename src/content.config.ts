import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Projects. Ordered on the site by `weight` (descending), so the strongest
 * work leads regardless of filename. `featured` promotes an entry to the
 * homepage.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  // Function form so the schema can use `image()`, which resolves a path
  // relative to the entry file and hands the component real ImageMetadata
  // (dimensions included) instead of an unverified string.
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // One line, shown on cards. Say what it does, not what it is.
      blurb: z.string(),
      // Chips on the card and the filter facets on /projects
      tags: z.array(z.string()).min(1),
      stack: z.array(z.string()).default([]),
      year: z.string(),
      cover: image().optional(),
      repo: z.url().optional(),
      demo: z.string().optional(),
      // Third-party reference for the hardware a project is built on — not
      // Brandon's own writing, so it gets its own button rather than sharing
      // the `repo` one.
      docs: z.url().optional(),
      featured: z.boolean().default(false),
      weight: z.number().default(0),
    }),
});

/**
 * Experience. `robotics: false` marks the earlier non-robotics co-ops — they
 * render in a separate, quieter group on /experience and are deliberately
 * absent from the resume.
 */
const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    location: z.string().optional(),
    start: z.string(),
    end: z.string(),
    // Sorts the timeline. Higher is more recent.
    order: z.number(),
    robotics: z.boolean().default(true),
    // Employer's own site, linked from the org name.
    url: z.url().optional(),
    bullets: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience };
