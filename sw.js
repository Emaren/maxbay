self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('maxbay-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/logo.webp',
          '/manifest.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  