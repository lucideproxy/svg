importScripts("zths7/qcik4k.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_8pyabd0.shouldRoute(event)) {
    event.respondWith(_8pyabd0.route(event));
  }
});
