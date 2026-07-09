importScripts("cefe1/sq5hzf.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_t0218s8.shouldRoute(event)) {
    event.respondWith(_t0218s8.route(event));
  }
});
