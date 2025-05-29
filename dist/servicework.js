const CACHE_NAME = 'pwa-v1';
const URLS_TO_CACHE = [
  '/',
  '/pages/index.html',
  '/css/styles.css',
  '/dist/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
