importScripts("t688o/fd5p0p.js");

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

function skipProxy(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname;
    if (host === "cdn.jsdelivr.net" || host.endsWith(".jsdelivr.net") || host === "luminsdk.com" || host.endsWith(".luminsdk.com")) {
      return true;
    }
    return /^\/(?:stores|covers|cdn)\//.test(parsed.pathname);
  } catch {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  if (skipProxy(event.request.url)) return;
  if (_9mlazct.shouldRoute(event)) {
    event.respondWith(_9mlazct.route(event));
  }
});
