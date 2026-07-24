importScripts("ypucy/aoqo4t.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_ugo9itd.shouldRoute(event)) {
    event.respondWith(_ugo9itd.route(event));
  }
});
