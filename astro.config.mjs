// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://freelanceguide-pt.ivan-breslauer.workers.dev",
  // Remove base path for Cloudflare Workers deployment
  // For GitHub Pages, set: base: "/freelanceguide-pt"
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
