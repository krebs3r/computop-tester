/**
 * ── Service Worker – Paygate Payment Tester ──
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

const CACHE_BASE_NAME = 'computop-tester';
let cacheNamePromise = getCacheName();

const ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './CHANGELOG.md',
  './VERSION',
  './og-image.png',
  './js/bootstrap.js',
  './js/i18n.js',
  './js/changelog-data.js',
  './js/help-data.js',
  './js/app.js',
  './THIRD_PARTY_NOTICES.md',
  './assets/fonts/dm-mono-light-latin-ext.woff2',
  './assets/fonts/dm-mono-light-latin.woff2',
  './assets/fonts/dm-mono-regular-latin-ext.woff2',
  './assets/fonts/dm-mono-regular-latin.woff2',
  './assets/fonts/dm-mono-medium-latin-ext.woff2',
  './assets/fonts/dm-mono-medium-latin.woff2',
  './assets/fonts/dm-sans-latin-ext.woff2',
  './assets/fonts/dm-sans-latin.woff2',
  './assets/fonts/dm-sans-italic-latin-ext.woff2',
  './assets/fonts/dm-sans-italic-latin.woff2',
  './assets/fonts/syne-greek.woff2',
  './assets/fonts/syne-latin-ext.woff2',
  './assets/fonts/syne-latin.woff2',
  './assets/nexi/fonts/NexiSansPro-Regular.woff2',
  './assets/nexi/fonts/NexiSansPro-SemiBold.woff2',
  './assets/nexi/logos/nexi-color.png',
  './assets/nexi/logos/nexi-white.png',
  './assets/nexi/README.md',
  './assets/payment-page/merchant-logo-original.png',
  './assets/payment-page/merchant-logo-nexi.png',
  './icons/app-icon.svg',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg',
  './icons/maskable-icon-192.png',
  './icons/maskable-icon-512.png',
  './icons/maskable-icon.svg',
  './manifest.json'
];

function getCacheName() {
  return fetch('./VERSION', { cache: 'no-store' })
    .then(r => r.ok ? r.text() : null)
    .then(v => v ? `${CACHE_BASE_NAME}-${v.trim()}` : CACHE_BASE_NAME)
    .catch(() => CACHE_BASE_NAME);
}

self.addEventListener('install', e => {
  e.waitUntil(
    cacheNamePromise
      .then(cacheName => {
        return caches.open(cacheName)
          .then(cache => cache.addAll(ASSETS))
          .then(() => self.skipWaiting());
      })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    cacheNamePromise
      .then(cacheName =>
        caches.keys().then(keys =>
          Promise.all(keys.filter(k => k !== cacheName).map(k => caches.delete(k)))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const requestUrl = new URL(e.request.url);

  if (e.request.method !== 'GET' || requestUrl.origin !== self.location.origin) {
    e.respondWith(fetch(e.request));
    return;
  }

  e.respondWith(
    cacheNamePromise.then(cacheName =>
      fetch(e.request)
        .then(response => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(cacheName)
              .then(cache => cache.put(e.request, clone))
              .catch(() => {});
          }
          return response;
        })
        .catch(() => caches.match(e.request))
    )
  );
});
