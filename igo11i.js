importScripts("kvqv9/wcm4pj.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_31xu34o.shouldRoute(event)) {
    event.respondWith(_31xu34o.route(event));
  }
});
