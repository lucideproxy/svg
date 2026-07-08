importScripts("90c7y/so7job.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_9x8zkky.shouldRoute(event)) {
    event.respondWith(_9x8zkky.route(event));
  }
});
