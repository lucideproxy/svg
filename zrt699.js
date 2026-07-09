importScripts("davyg/4hcs5h.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_jzpttiy.shouldRoute(event)) {
    event.respondWith(_jzpttiy.route(event));
  }
});
