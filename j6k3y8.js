importScripts("ct1tl/jmqwjq.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_19vij0x.shouldRoute(event)) {
    event.respondWith(_19vij0x.route(event));
  }
});
