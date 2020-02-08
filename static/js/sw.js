// NOTE
// Even though this service worker is not on the root of this web application
// It has been configured, through swing_main.py to make it look like it is.

const filesToPreCache = [
    // Web pages
    { url: '/', revision: '2019-08-15-1' },
    { url: '/acercade/', revision: '2019-08-31-1' },
    { url: '/politicaprivacidad/', revision: '2019-08-15-1' },
    { url: '/terminosdelservicio/', revision: '2019-08-15-1' },
    // Images
    { url: '/static/images/manifest/bid_slogan.png', revision: '2019-08-15-1' },
    // Media
    { url: '/static/media/audio/tourvr/es/intro.mp3', revision: '2019-08-15-1' }
];

// Importing Google's Workbox library for ServiceWorker implementation
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// Workbox Force Set Development/Production Builds 
// Development = debug: true 
// Production = debug: false
workbox.setConfig({ debug: false });

// Configuring Workbox
workbox.core.setCacheNameDetails({
    prefix: 'cmsv-tourvr',
    suffix: 'v2019-08-15-1',
    precache: 'pre-cache',
    runtime: 'run-time',
    googleAnalytics: 'ga',
});

// Install Event and Pre-Cache
workbox.precaching.precacheAndRoute(filesToPreCache);

// Enable Google Analytics Offline
workbox.googleAnalytics.initialize();

// Cache for Web Fonts.
workbox.routing.registerRoute(
    new RegExp(/.*(?:fonts\.googleapis|fonts\.gstatic|cloudflare)\.com/),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cmsv-pwa-webfonts'
    }),
);

// Cache for CSS and JS
workbox.routing.registerRoute(
    new RegExp(/\.(?:js|css)$/),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cmsv-pwa-css_js',
    })
);

// Cache for Images
workbox.routing.registerRoute(
    new RegExp('\.(?:png|gif|webp|jpg|jpeg|svg)$'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cmsv-pwa-img',
        plugins: [
            new workbox.expiration.Plugin({
                // Keep at most 60 entries.
                maxEntries: 60,
                // Don't keep any entries for more than 30 days.
                maxAgeSeconds: 30 * 24 * 60 * 60,
                // Automatically cleanup if quota is exceeded.
                purgeOnQuotaError: true,
            }),
        ],
    }),
);

// // Push Messages
// self.addEventListener('push', event => {
//     var title = 'Yay a message.';
//     var body = 'We have received a push message.';
//     var icon = '/images/smiley.svg';
//     var tag = 'request';
//     event.waitUntil(
//         self.registration.showNotification(title, {
//             body: body,
//             icon: icon,
//             tag: tag
//         })
//     );
// });
