self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open('static-v1').then((cache) => {
            return cache.addAll(['./', './index.html', './aiClinic.css', './aiClinic.js', './images/aiHelthCare.jpg', './images/Visual_Library_ Photo.gif','./images/aiHelthCare192x192.png','./images/aiHelthCare152x152.png','./images/aiHelthCare96x96.png','./images/desktop-screenshot.png','./images/mobile-screenshot.png']);
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