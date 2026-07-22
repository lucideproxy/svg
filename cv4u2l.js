importScripts("b8yjq/p1oqlx.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_f1xp8nq.shouldRoute(event)) {
    event.respondWith(_f1xp8nq.route(event));
  }
});
