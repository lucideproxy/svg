importScripts("wqxc6/2dof67.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
  if (_tc35r68.shouldRoute(event)) {
    event.respondWith(_tc35r68.route(event));
  }
});
