importScripts("c0lnf/jbica3.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_oir1wfy.shouldRoute(event)) {
    event.respondWith(_oir1wfy.route(event));
  }
});
