const CACHE_NAME = 'radio-coran-v1';
const urlsToCache = [
  '/holy-quran-radio-pwa/', // Ajout de la racine du dépôt
  '/holy-quran-radio-pwa/radio_du_Coran_Arabie_Saoudite.html', // Chemin complet
  '/holy-quran-radio-pwa/favicon.png', // Chemin complet
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
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
