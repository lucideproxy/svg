importScripts("ze1cr/wd2w8g.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_0iqr11j.shouldRoute(event)) {
    event.respondWith(_0iqr11j.route(event));
  }
});
