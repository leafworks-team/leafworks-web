// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs and og:url. Update if the domain changes.
  site: 'https://leafworks.dev',

  // Static output. Cloudflare serves ./dist as plain files — no adapter, no
  // server runtime. React is only hydrated where a component asks for it
  // (the app folder); everything else ships as HTML.
  output: 'static',

  integrations: [react()],

  i18n: {
    // Korean at the root, English under /en/, Japanese under /ja/. The company
    // is Korean and the footer carries Korean business registration details.
    // Keep in step with src/i18n/config.ts.
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  build: {
    // Emit /brand/index.html rather than /brand.html, so trailing-slash
    // behaviour matches what Cloudflare serves by default.
    format: 'directory',
  },

  server: {
    // 7788, not leafyrics-web's 7777, so both sites can run side by side.
    // 7000 is unusable on macOS: AirPlay Receiver answers it with a bare 403.
    port: 7788,
  },

  vite: {
    // Bind the configured port or fail — landing silently on 7789 means
    // checking the wrong address.
    server: { strictPort: true },
  },
});
