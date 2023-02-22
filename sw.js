const precache = ['/portal/', '/portal', '/index.js', '/index.html', '/portal/index.js', '/portal/styles.css', '/portal/psiphon3.exe', '/portal/README.md', '/portal/blooket', '/portal/blooket/index.js', '/sound', '/sound/' '/sound/README.md', '/sound/styles.css', "/sound/sounds/airhorn.mp3",
"/sound/sounds/aughhh.mp3",
"/sound/sounds/bruh.mp3",
"/sound/sounds/dog-doing.mp3",
"/sound/sounds/emotional-damage.mp3",
"/sound/sounds/error.mp3",
"/sound/sounds/fail.mp3",
"/sound/sounds/fart.mp3",
"/sound/sounds/finals.mp3",
"/sound/sounds/fortnite-death.mp3",
"/sound/sounds/goofy-ahh.mp3",
"/sound/sounds/hello-there.mp3",
"/sound/sounds/mario-jump.mp3",
"/sound/sounds/oof.mp3",
"/sound/sounds/ping.mp3",
"/sound/sounds/sad-violin.mp3",
"/sound/sounds/send-to-jesus.mp3",
"/sound/sounds/taco-bell.mp3",
"/sound/sounds/vine-boom.mp3",
"/sound/sounds/virus.mp3",
"/sound/sounds/we-do-not-care.mp3",
"/sound/sounds/wow.mp3",
"/sound/sounds/yeet.mp3"];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll(precache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('my-cache').then(cache => {
      return fetch(event.request)
        .then(response => {
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(() => {
          return cache.match(event.request);
        });
    })
  );
});