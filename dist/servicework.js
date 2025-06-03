const CACHE_NAME = 'mi-cambio-seguro-v1';

const ARCHIVOS_CACHE = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/img/logo.webp',
  '/img/money.jpg',
  '/img/Facebook.png',
  '/img/instagram.jpg',
  '/img/whatsapp.jpg',
  '/videos/monetizador.mp4',
  '/dist/app.js',
  '/dist/formularios.js',
  '/dist/validacion.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ARCHIVOS_CACHE);
    }).catch(err => {
      console.error('Error cacheando archivos:', err);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
             .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
