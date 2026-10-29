import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://apps.250tr.com',
  integrations: [tailwind()],
});

