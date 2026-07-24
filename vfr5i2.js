importScripts("gvk8w/3gz3c2.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_4fkctrk.shouldRoute(event)) {
    event.respondWith(_4fkctrk.route(event));
  }
});
