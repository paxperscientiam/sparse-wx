//     Copyright (C) 2018 Christopher David Ramos
function CacheHandler(name) {
    const cache = CacheService.getUserCache()
    const content = cache.get(name)
    if (content !== null) {
        return {
            content,
            status: true,
        }
    }
    return {
        cache,
        status: false,
    }
}

function CacheInvalidate(name) {
    const cache = CacheService.getUserCache()
    cache.remove(name)
}
