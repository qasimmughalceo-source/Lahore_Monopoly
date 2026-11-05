// Offline support for Pak Poly.
// Pages are fetched from the network first so players always get the latest
// version; the cached copy is only used when the phone is offline.
// Other files (scripts, fonts, images) are served from cache and refreshed in the background.

const CACHE = "pakpoly-offline-v2";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Take over straight away and remove caches left by older versions.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

workbox.routing.registerRoute(
  ({ request }) => request.mode === "navigate",
  new workbox.strategies.NetworkFirst({
    cacheName: CACHE,
    networkTimeoutSeconds: 4
  })
);

workbox.routing.registerRoute(
  ({ request, url }) => request.method === "GET" && url.protocol.startsWith("http"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);
