self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open('static-v1').then((cache) => {
            return cache.addAll(['./', './aiClinic.html', './aiClinic.css', './aiClinic.js', './aiHelthCare.jpg', './Visual_Library_ Photo.gif','./aiHelthCare192x192.png','./aiHelthCare152x152.png','./aiHelthCare96x96.png','./desktop-screenshot.png','./mobile-screenshot.png']);
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