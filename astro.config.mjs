import { defineConfig } from "astro/config";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";


export default defineConfig({
  integrations: [icon(), mdx()],
  site: 'https://astronaut.github.io',
  base: 'https://github.com/codingsluv.github.io.',
  output: 'dist',
  routes: [
    { src: '/blog', dest: '/home/codingsluv/myProject/js-dev/myBlog/dist/blog' },
    { src: '/', dest: '/home/codingsluv/myProject/js-dev/myBlog/dist' },
  ],
  devOptions: {
    port: 3000,
  },
});