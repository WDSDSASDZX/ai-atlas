// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import { ViteToml } from "vite-plugin-toml";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://wdsdsasdzx.github.io",
  base: "/ai-atlas",
  trailingSlash: "always",
  integrations: [mdx(), icon(), sitemap()],
  vite: { plugins: [tailwindcss(), ViteToml()] },
});
