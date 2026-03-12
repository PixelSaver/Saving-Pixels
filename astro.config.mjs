// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// 
export default defineConfig({
  site: 'https://PixelSaver.github.io',
  base: '/Saving-Pixels/',
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
    ],
  },

  vite: {
    plugins: [tailwindcss()]
  }
});