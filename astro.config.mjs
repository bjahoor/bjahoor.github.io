// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// No `base` is set on purpose: the repo is named `bjahoor.github.io`, which
// GitHub serves from the domain root. Adding a base would break every link.
export default defineConfig({
  site: 'https://bjahoor.github.io',
  // No UI framework: the one interactive piece (the /projects tag filter) is a
  // few lines of vanilla script, so nothing needs hydrating. Re-add
  // `@astrojs/react` the day a component actually earns the runtime.
  integrations: [sitemap()],

  // Astro downloads and self-hosts these at build time — no runtime request to
  // Google, and no flash of unstyled text.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Instrument Sans',
      cssVariable: '--font-sans',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
