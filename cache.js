self.addEventListener('fetch', function (event) {
    // Кешируем статику, но не картинки
    if (event.request.url.indexOf(staticHost) !== -1
        && event.request.url.search(/\.(svg|png|jpeg|jpg|gif)/) === -1) {
        return event.respondWith(
            // проверяем наличие данных в кеше
            caches.match(event.request).then(function (response) {
                if (response) {
                    return response;
                }
                // Если данных в кеше нет, делаем запрос и сохраняем данные в кеш, который наызываем cacheStatic
                return fetch(event.request).then(function (response) {
                    caches.open(cacheStatic).then(function (cache) {
                        cache.add(event.request.url);
                    });

                    return response;
                });
            })
        );
    }
});