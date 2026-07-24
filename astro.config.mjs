// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // 开发服务器监听所有网卡，便于同一局域网内的设备访问
  server: {
    host: true,
  },

  // 旧的产品占位页并入新版资源库
  redirects: {
    '/our-products': '/resources'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});
