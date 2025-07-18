// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      hmr: {
        timeout: 120000
      }
    }
  },
  devToolbar: {
    apps: {
      audit: {
        enabled: false
      }
    }
  }
});
