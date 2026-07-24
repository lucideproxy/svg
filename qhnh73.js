importScripts("973u1/7n3jo7.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_q3zahpv.shouldRoute(event)) {
    event.respondWith(_q3zahpv.route(event));
  }
});
