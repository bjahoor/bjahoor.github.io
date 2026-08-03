import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Projects. Ordered on the site by `weight` (descending), so the strongest
 * work leads regardless of filename. `featured` promotes an entry to the
 * homepage.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    // One line, shown on cards. Say what it does, not what it is.
    blurb: z.string(),
    // Chips on the card and the filter facets on /projects
    tags: z.array(z.string()).min(1),
    stack: z.array(z.string()).default([]),
    year: z.string(),
    cover: z.string().optional(),
    repo: z.url().optional(),
    demo: z.string().optional(),
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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    location: z.string().optional(),
    start: z.string(),
    end: z.string(),
    // Sorts the timeline. Higher is more recent.
    order: z.number(),
    robotics: z.boolean().default(true),
    bullets: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience };
