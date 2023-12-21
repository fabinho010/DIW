let cacheName = "Nombre_Cache";
let urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/imatges/angular.png",
  "/imatges/fotofrontal.jpg",
  "/imatges/html5.png",
  "/imatges/icons.png",
  "/imatges/javascript.png",
  "/imatges/logo.png",
  "/imatges/pattern.jpg",
  "/imatges/php.png",
  "/imatges/pwa.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(urlsToCache))
  ); //Creamos la cache
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activado");
});

self.addEventListener("fetch", (event) => {
  console.log("fetch");
  const url = new URL(event.request.url);
  const isPrecachedRequest = urlsToCache.includes(url.pathname);

  if (isPrecachedRequest) {
    // Grab the precached asset from the cache
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request.url);
      })
    );
  } else {
    // Go to the network
    return;
  }
});

caches.open("computerStyleV3").then((cache) => {
  cache.add("style.css");
  cache.addAll(["style.css", "./imatges/angular.png"]);
});
