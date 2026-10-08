let activationCheck = null;

self.__requestWorkerActivation = () => {
  if (activationCheck) return activationCheck;
  activationCheck = (async () => {
    const scope = self.registration.scope;
    const base = new URL(scope).pathname;
    const clients = (await self.clients.matchAll({ includeUncontrolled: true, type: "window" }))
      .filter((client) => client.url.startsWith(scope))
      .filter((client) => !/^[a-z0-9]{6}\/[a-z0-9]+\/[a-z0-9]+\//.test(new URL(client.url).pathname.slice(base.length)));
    const ready = await Promise.all(clients.map((client) => new Promise((resolve) => {
      const channel = new MessageChannel();
      const finish = (value) => {
        clearTimeout(timer);
        channel.port1.close();
        resolve(value);
      };
      const timer = setTimeout(() => finish(false), 500);
      channel.port1.onmessage = (event) => finish(event.data === true);
      try { client.postMessage({ type: "runtime-handover-ready" }, [channel.port2]); }
      catch { finish(false); }
    })));
    if (ready.every(Boolean)) await self.skipWaiting();
  })().finally(() => { activationCheck = null; });
  return activationCheck;
};

importScripts("1k320/net10m.js");

self.addEventListener("install", (event) => event.waitUntil(self.__requestWorkerActivation()));
self.addEventListener("message", (event) => {
  if (event.data?.type === "runtime-activate-compatible") event.waitUntil(self.__requestWorkerActivation());
});
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

function skipProxy(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname;
    if (parsed.origin !== self.location.origin && (host === "cdn.jsdelivr.net" || host.endsWith(".jsdelivr.net") || host === "luminsdk.com" || host.endsWith(".luminsdk.com"))) {
      return true;
    }
    return /^\/(?:stores|covers|cdn)\//.test(parsed.pathname);
  } catch {
    return false;
  }
}

self.addEventListener("fetch", (event) => {
  if (skipProxy(event.request.url)) return;
  if (_sm6en2l.shouldRoute(event)) {
    event.respondWith(_sm6en2l.route(event));
  }
});
