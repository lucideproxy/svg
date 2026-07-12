importScripts("1um6o/e2yonh.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_gpwfq5s.shouldRoute(event)) {
    event.respondWith(_gpwfq5s.route(event));
  }
});
