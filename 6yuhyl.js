importScripts("etiqs/3e87b0.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_53wvhqe.shouldRoute(event)) {
    event.respondWith(_53wvhqe.route(event));
  }
});
