importScripts("smqbj/fofore.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_l8dbpfs.shouldRoute(event)) {
    event.respondWith(_l8dbpfs.route(event));
  }
});
