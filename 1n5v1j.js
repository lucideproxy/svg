importScripts("wfwdh/jst602.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_6vn86gk.shouldRoute(event)) {
    event.respondWith(_6vn86gk.route(event));
  }
});
