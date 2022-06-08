// custom service worker
console.log('sw loaded');

import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('installed');
});

registerRoute(
  '/demo/a.txt',
  new NetworkFirst({
    cacheName: 'roberts-cache',
  }),
);
