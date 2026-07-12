importScripts("th5t4/udzkpk.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_210crh8.shouldRoute(event)) {
    event.respondWith(_210crh8.route(event));
  }
});
