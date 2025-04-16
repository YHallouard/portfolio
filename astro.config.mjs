import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yannhallouard.com',
  base: '/',
  integrations: [tailwind()],
  output: 'static'
});