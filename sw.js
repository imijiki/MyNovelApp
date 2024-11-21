self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-novel-app-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});