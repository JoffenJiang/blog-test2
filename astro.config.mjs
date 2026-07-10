// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // 旧的产品占位页并入新版资源库
  redirects: {
    '/our-products': '/resources'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});