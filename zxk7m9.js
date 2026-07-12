importScripts("qgate/qfu1f4.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_us01uq6.shouldRoute(event)) {
    event.respondWith(_us01uq6.route(event));
  }
});
