importScripts("37e64/nwvblm.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_vyvoh0g.shouldRoute(event)) {
    event.respondWith(_vyvoh0g.route(event));
  }
});
