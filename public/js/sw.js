var files = [
	"/index.html",
	"/css/materialize.min.css",
  "/manifest.json",
  "/js/bundle.js",
	"/images/icon-72x72.png",
	"/images/icon-96x96.png",
	"/images/icon-128x128.png",
	"/images/icon-144x144.png",
	"/images/icon-152x152.png",
	"/images/icon-192x192.png",
	"/images/icon-384x384.png",
	"/images/icon-512x512.png",
	"/fonts/roboto/Roboto-Bold.woff",
	"/fonts/roboto/Roboto-Bold.woff2",
	"/fonts/roboto/Roboto-Light.woff",
	"/fonts/roboto/Roboto-Light.woff2",
	"/fonts/roboto/Roboto-Medium.woff",
	"/fonts/roboto/Roboto-Medium.woff2",
	"/fonts/roboto/Roboto-Regular.woff",
	"/fonts/roboto/Roboto-Regular.woff2",
	"/fonts/roboto/Roboto-Thin.woff",
	"/fonts/roboto/Roboto-Thin.woff2"
];

var CACHE_NAME = 'sw-cache';

self.addEventListener('activate', function(event) {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME.indexOf(cacheName) == -1) {
            console.log('[SW] Delete cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('install', function(event){
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(
      	files.map(function(file){
      		return cache.add(file);
      	})
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[SW] fetch ' + event.request.url)
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request.clone());
    })
  );
});