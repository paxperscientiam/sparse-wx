export function _Cache(fn,
                       fnArgs: [],
                       cacheName: string,
                       cacheTime = 1500): ICacheWrapper {
  const objCacheMethodsBuilder = Object.create(objCacheMethods)
  objCacheMethodsBuilder.data = {}
  //
  const cache = CacheService.getUserCache()
  const cached = cache.get(cacheName)

  let result
  let message
  let hits = fetch("state", "cache.hits")

  if (!!cached) {
    result = cached
    message = "Cache found"
    ++hits
    push(["state", "cache.hits"], hits)
  } else {
    if (fnArgs != null) {
      result = fn(...fnArgs)
    } else {
      result = fn()
    }
    cache.put(cacheName, result, cacheTime)
    message = "Not found. Cached."
  }

  push(["state", `cache.${cacheName}`], message)

  objCacheMethodsBuilder.data = {
    "@context": [ "cacheHandler" ],
    cache,
    cacheName,
    cached,
    message,
    result,
  }

  return objCacheMethodsBuilder
}

const objCacheMethods = {
  invalidate() {
    if (this.data.cached != null) {
      this.data.cache.remove(this.cacheName)
      return true
    }
    return false
  },
  getResult() {
    return {
      "@context": [ "cacheHandler", {
        method: "getResult",
      }],
      "cacheData": this.data.result,
      "cacheName": this.data.cacheName,
      "cacheStatus": [true, this.data.message],
    }
  },
}
