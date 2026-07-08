importScripts("atq3b/zfbmav.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_hizm8m7.shouldRoute(event)) {
    event.respondWith(_hizm8m7.route(event));
  }
});
