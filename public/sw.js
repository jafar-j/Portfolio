const cacheName = self.location.pathname
const pages = [

  "/hugo-book/docs/advanced/development/",
    "/hugo-book/docs/required/development/",
    "/hugo-book/docs/advanced/development/domain-architecture/",
    "/hugo-book/docs/required/engineering/infrastructure/",
    "/hugo-book/docs/required/development/abstraction/",
    "/hugo-book/docs/required/design/needfinding/",
    "/hugo-book/docs/required/",
    "/hugo-book/docs/required/verification/testing-strategies/",
    "/hugo-book/docs/advanced/",
    "/hugo-book/docs/required/design/ideation/",
    "/hugo-book/docs/required/development/architecture/",
    "/hugo-book/docs/advanced/development/security/",
    "/hugo-book/docs/required/engineering/self-learning/",
    "/hugo-book/docs/required/verification/testing-infrastructure/",
    "/hugo-book/docs/advanced/verification/",
    "/hugo-book/docs/required/verification/",
    "/hugo-book/docs/advanced/design/",
    "/hugo-book/docs/required/design/",
    "/hugo-book/docs/required/engineering/process/",
    "/hugo-book/docs/required/design/prototyping/",
    "/hugo-book/docs/advanced/verification/testing-technologies/",
    "/hugo-book/docs/required/engineering/collaboration/",
    "/hugo-book/docs/advanced/engineering/",
    "/hugo-book/docs/required/engineering/",
    "/hugo-book/docs/required/design/evaluation/",
    "/hugo-book/docs/advanced/design/ui-design/",
    "/hugo-book/docs/advanced/design/accessible-design/",
    "/hugo-book/docs/advanced/engineering/quality/",
    "/hugo-book/categories/",
    "/hugo-book/",
    "/hugo-book/docs/",
    "/hugo-book/tags/",
    "/hugo-book/book.min.765d21810b9b2cd2a1694752026da1f9282c504e7ae862b8c2eca7063f8349ba.css",
  
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
