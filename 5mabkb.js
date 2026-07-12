importScripts("7qc0s/978xch.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_ilok9l2.shouldRoute(event)) {
    event.respondWith(_ilok9l2.route(event));
  }
});
