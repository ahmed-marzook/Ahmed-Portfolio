// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ahmed-marzook.github.io',
  base: '/Ahmed-Portfolio',
  integrations: [react()],
});
