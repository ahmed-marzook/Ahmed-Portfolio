// @ts-check
import react from '@astrojs/react';
<<<<<<< Updated upstream
=======
import sitemap from '@astrojs/sitemap';
>>>>>>> Stashed changes
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ahmed-marzook.github.io',
  base: '/Ahmed-Portfolio',
<<<<<<< Updated upstream
  integrations: [react()],
=======
  integrations: [react(), sitemap()],
>>>>>>> Stashed changes
});
