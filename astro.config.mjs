import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yannhallouard.com',
  base: '/portfolio',
  integrations: [tailwind()],
  output: 'static'
});