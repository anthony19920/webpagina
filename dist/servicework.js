const CACHE_NAME = 'mi-cambio-seguro-v1';

const ARCHIVOS_CACHE = [
  '/',
  '/index.html',
  '/css/styles.css',
   '/img/icon-192.png',
  '/img/startup.png',
  '/img/logo.webp',
  '/img/Facebook.png',
  '/img/instagram.jpg',
  '/img/whatsapp.jpg',
  '/img/money.jpg',
  '/videos/monetizador.mp4',
  '/dist/app.js',
  '/dist/formularios.js',
  '/dist/validacion.js',
  '/manifest.json'
];

// Pre-cache inicial
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const archivo of ARCHIVOS_CACHE) {
        try {
          await cache.add(archivo);
        } catch (err) {
          console.error('❌ Falló el archivo:', archivo, err);
        }
      }
    })
  );
});

// Activación con limpieza de caché viejo
self.addEventListener('activate', event => {
  async function deleteOldCaches() {
    const names = await caches.keys();
    await Promise.all(
      names.map(name => {
        if (name !== CACHE_NAME) {
          return caches.delete(name);
        }
      })
    );
  }

  event.waitUntil(deleteOldCaches());
  self.clients.claim();
});

// Estrategia de caché dinámico
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(r => {
      return r || fetch(event.request).then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
