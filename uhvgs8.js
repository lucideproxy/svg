importScripts("y65fy/m7b4bw.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_1cfxep6.shouldRoute(event)) {
    event.respondWith(_1cfxep6.route(event));
  }
});
