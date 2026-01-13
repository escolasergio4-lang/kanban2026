var CACHE_NAME = 'nullboard-educacional-v1';
var urlsToCache = [
  './',
  './nullboard.html',
  './manifest.json',
  './icon.png',
  './extras/Barlow-Regular.woff',
  './extras/Barlow-Medium.woff',
  './extras/IBMPlexSans-Regular.woff',
  './extras/IBMPlexSans-Medium.woff',
  './extras/OpenSans-Regular.woff',
  './extras/OpenSans-600.woff',
  './extras/MavenPro-Regular.woff',
  './extras/MavenPro-500.woff',
  './extras/favicon-16.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
