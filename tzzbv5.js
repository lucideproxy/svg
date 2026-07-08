importScripts("3jeu2/9lczko.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_qw1bgnq.shouldRoute(event)) {
    event.respondWith(_qw1bgnq.route(event));
  }
});
