importScripts("5cta5/wwikdb.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_5vl0d7n.shouldRoute(event)) {
    event.respondWith(_5vl0d7n.route(event));
  }
});
