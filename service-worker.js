/**
 * ── Service Worker – Computop Paygate Payment Tester ──
 *
 * [DE]
 * Diese Datei ist der Service Worker für die Progressive Web App (PWA).
 * Sie ermöglicht es, die App als eigenständige Webapp auf dem Gerät zu installieren
 * und sorgt dafür, dass die App auch offline funktioniert.
 * Strategie: Network-First – es wird immer zuerst versucht, die aktuelle Version
 * vom Server zu laden. Nur wenn keine Internetverbindung besteht, wird die
 * zwischengespeicherte (gecachte) Version verwendet.
 *
 * [EN]
 * This file is the service worker for the Progressive Web App (PWA).
 * It allows the app to be installed as a standalone webapp on the device
 * and ensures the app works offline as well.
 * Strategy: Network-First – it always tries to fetch the latest version
 * from the server first. Only when there is no internet connection,
 * the cached version is used as a fallback.
 */

const CACHE_NAME = 'computop-tester-v2.2.2';
const ASSETS = [
  './',
  './index.html',
  './favicon.svg',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
