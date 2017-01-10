/** yay **/
self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'BeerCalc test';
  const options = {
    body: event.data.text(),
    icon: 'res/logo.png',
    badge: 'res/logo.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
