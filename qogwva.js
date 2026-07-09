importScripts("vzbg5/243nab.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_0vr87p5.shouldRoute(event)) {
    event.respondWith(_0vr87p5.route(event));
  }
});
