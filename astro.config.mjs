// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ibreslauer.github.io/freelanceguide-pt/",
  base:
    process.env.NODE_ENV === "production" ? "/freelanceguide-pt" : undefined,
  integrations: [mdx(), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
