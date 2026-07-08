importScripts("667f7/hd6xoz.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_e0s4tgo.shouldRoute(event)) {
    event.respondWith(_e0s4tgo.route(event));
  }
});
