importScripts("4lrug/v3jmr8.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_zfp7c4e.shouldRoute(event)) {
    event.respondWith(_zfp7c4e.route(event));
  }
});
