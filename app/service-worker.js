self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');

    const title = 'BeerCalc';
    const options = {
        body: event.data.text(),
        icon: 'res/logo.png',
        badge: 'res/logo.png'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('install', function(event) {
    event.waitUntil(caches.open('beercalc-cache').then(
        function(cache) {
            return cache.addAll([
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
            ]);
        }));
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then(
        function(response) {
            return response || fetch(event.request);
        }));
});
