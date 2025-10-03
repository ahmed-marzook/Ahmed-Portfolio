// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    integrations: [react()],
    vite: {
      ...(isBuild ? { base: './' } : {}),
    },
    build: {
      ...(isBuild ? { assetsPrefix: '.' } : {}),
    },
  };
});
