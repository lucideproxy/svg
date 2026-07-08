importScripts("6jz9b/72pt76.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_6kt1yev.shouldRoute(event)) {
    event.respondWith(_6kt1yev.route(event));
  }
});
