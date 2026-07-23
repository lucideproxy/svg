importScripts("kd7zc/jdkamu.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_eaqq1gd.shouldRoute(event)) {
    event.respondWith(_eaqq1gd.route(event));
  }
});
