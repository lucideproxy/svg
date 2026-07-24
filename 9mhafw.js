importScripts("0ct36/w8lvux.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_h688fmc.shouldRoute(event)) {
    event.respondWith(_h688fmc.route(event));
  }
});
