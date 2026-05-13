const cacheName = self.location.pathname
const pages = [

  "/hugo-book/categories/",
    "/hugo-book/",
    "/hugo-book/tags/",
    "/hugo-book/zh/categories/",
    "/hugo-book/zh/",
    "/hugo-book/zh/tags/",
    "/hugo-book/he/categories/",
    "/hugo-book/he/",
    "/hugo-book/he/tags/",
    "/hugo-book/book.min.4d6d5ad3b0ae85d2a15b20ab217863f70db543e46314629e239ced759e674898.css",
  "/hugo-book/en.search-data.min.4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945.json",
  "/hugo-book/en.search.min.45d6c34e076f55ebb2cd0d6018eb83f3d2bfcc3a24f739e6a2dbab8ebfc7eef1.js",
  
];

self.addEventListener("install", function (event) {
  self.skipWaiting();

  caches.open(cacheName).then((cache) => {
    return cache.addAll(pages);
  });
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  /**
   * @param {Response} response
   * @returns {Promise<Response>}
   */
  function saveToCache(response) {
    if (cacheable(response)) {
      return caches
        .open(cacheName)
        .then((cache) => cache.put(request, response.clone()))
        .then(() => response);
    } else {
      return response;
    }
  }

  /**
   * @param {Error} error
   */
  function serveFromCache(error) {
    return caches.open(cacheName).then((cache) => cache.match(request.url));
  }

  /**
   * @param {Response} response
   * @returns {Boolean}
   */
  function cacheable(response) {
    return response.type === "basic" && response.ok && !response.headers.has("Content-Disposition")
  }

  event.respondWith(fetch(request).then(saveToCache).catch(serveFromCache));
});
