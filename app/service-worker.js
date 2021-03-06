var cacheName = 'beercalc-cache',
    cacheFiles = [
        '/',
        '/index.html',
        '/views/bills-view.html',
        '/views/home-view.html',
        '/views/help-view.html',
        '/views/options-view.html',
        '/views/profile-view.html',
        '/views/social-view.html',
        '/manifest.json',
        '/main.js',
        '/main.css'
    ];
// NOTE: Event that'll run when a push msg is received
self.addEventListener('push', function(event) {
    var title = 'BeerCalc';
    var options = {
        body: event.data.text(),
        icon: 'res/logo.png',
        badge: 'res/logo.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('install', function(event) {
    event.waitUntil(caches.open(cacheName).then(
        function(cache) {
            return cache.addAll(cacheFiles);
        }).then(function() {
        return self.skipWaiting();
    }));
});

// self.addEventListener('activate', function(event) {
//     event.waitUntil(caches.keys().then(
//         function(keyList) {
//             return Promise.all(keyList.map(
//                 function(key) {
//                     if (key !== cacheName) {
//                         return caches.delete(key);
//                     }
//                 }));
//         }));
//     return self.clients.claim();
// });

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(
        function(response) {
            return response || fetch(event.request);
        }));
});
