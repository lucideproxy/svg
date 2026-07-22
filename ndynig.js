importScripts("nt16o/3dkqbq.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_susn1ew.shouldRoute(event)) {
    event.respondWith(_susn1ew.route(event));
  }
});
