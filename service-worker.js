const CACHE_NAME = 'radio-coran-v1';
const urlsToCache = [
  '/',
  '/radio_du_Coran_Arabie_Saoudite.html',
  '/favicon.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
  // Vous pourriez vouloir mettre en cache le flux audio s'il s'agit d'un fichier statique, mais les flux en direct sont complexes
  // 'https://stream.radiojar.com/4wqre23fytzuv' // La mise en cache des flux en direct est complexe et souvent peu pratique
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
