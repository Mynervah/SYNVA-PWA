self.addEventListener('install', evt => {
    console.info(evt);
    evt.waitUntil(
        caches.open('Synva-PWA-Lilysa').then((cache) => {
            return cache.addAll([
                'index.html',
                'styles.css',
                'PWA.png',
                'sw.js'
            ]);
        })
    );
});

self.addEventListener('activate', evt => {
    console.info(evt);
});

self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(function(response) {
            return response || fetch(evt.request);
        })
    );
});
