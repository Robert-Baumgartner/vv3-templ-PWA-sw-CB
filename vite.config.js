import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

const getCache = ({ name, pattern }) => ({
  urlPattern: pattern,
  handler: 'CacheFirst',
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2, // 2 years
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    VitePWA({
      strategies: 'injectManifest',
      workbox: {
        runtimeCaching: [
          getCache({
            pattern: new RegExp('/.*(.jpg|.ico)'),
            name: 'roberts-images',
          }),
          getCache({
            pattern: new RegExp('/webfonts/.*'),
            name: 'roberts-webfonts',
          }),
        ],
      },
      manifest: {
        name: 'My PWA Project',
        short_name: 'myPWA',
        theme_color: '#ffffff',
        start_url: '/',
        id: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
