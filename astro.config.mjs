import { defineConfig } from "astro/config";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

export default defineConfig({
  integrations: [icon(), mdx(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })],
});