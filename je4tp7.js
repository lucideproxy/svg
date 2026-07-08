importScripts("ksirb/l6dnu6.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_og12ucr.shouldRoute(event)) {
    event.respondWith(_og12ucr.route(event));
  }
});
