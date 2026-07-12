importScripts("9flm8/5jez42.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_c1gmlgo.shouldRoute(event)) {
    event.respondWith(_c1gmlgo.route(event));
  }
});
