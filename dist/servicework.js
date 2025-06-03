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
