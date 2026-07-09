importScripts("y2gim/an0tkf.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_vukerh2.shouldRoute(event)) {
    event.respondWith(_vukerh2.route(event));
  }
});
