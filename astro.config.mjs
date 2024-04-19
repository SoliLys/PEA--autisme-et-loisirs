import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import favicons from "astro-favicons";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  compressHTML: import.meta.env.PROD,
  integrations: [tailwind({
    // Example: Allow writing nested CSS declarations
    // alongside Tailwind's syntax
    nesting: true
  }), sitemap(), robotsTxt(), icon(), favicons({
    // masterPicture: "./src/favicon.svg",
    // emitAssets: true,

    // You should adjust the following options accordingly
    appName: "",
    appShortName: "",
    appDescription: "",
    // dir:"auto",
    lang: "fr-FR",
    // display: "standalone",
    // orientation: "any",
    // start_url: "/?homescreen=1",
    background: "#fff",
    theme_color: "#fff",
    faviconsDarkMode: false // default `true`, Make favicon compatible with light and dark modes

    // appleStatusBarStyle: "black-translucent",

    //....
  }), mdx()],
  site: 'https://autismeetloisirs-pea.altergi.fr'
});