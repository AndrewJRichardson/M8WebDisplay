const cacheName="3a8989a0ad7796d7a281d1a41b2a5650";self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheName).then((e=>e.addAll([".","icon.png","app.webmanifest"]))))})),self.addEventListener("activate",(e=>e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>e!==cacheName)).map((e=>caches.delete(e))))))))),self.addEventListener("fetch",(e=>e.respondWith(caches.match(e.request).then((a=>a||fetch(e.request)))))),self.addEventListener("message",(e=>{"skipWaiting"===e.data.action&&self.skipWaiting()}));
