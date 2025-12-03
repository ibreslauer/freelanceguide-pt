// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES
    ? "https://freelanceguide-pt.ivan-breslauer.workers.dev"
    : "https://ibreslauer.github.io/freelanceguide-pt/",
  base: process.env.CF_PAGES ? undefined : "/freelanceguide-pt",
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
