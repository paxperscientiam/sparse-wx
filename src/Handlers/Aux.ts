import {fetch, push as pushy} from "@/Data/PushPull"

export function _Cache(fn: (args?: any) => any,
                       fnArgs: [""],
                       cacheName: string,
                       cacheTime = 1500): ICacheWrapper {
    const objCacheMethodsBuilder = Object.create({
      data: {},
    }) as ICacheWrapper

    const cache = CacheService.getUserCache()
    objCacheMethodsBuilder.data.cache = cache
    const cached = objCacheMethodsBuilder.data.cache.get(cacheName)
    objCacheMethodsBuilder.data.cached = cached

    let result
    let message
    let hits = fetch("state", "cache.hits")

    if (!!cached) {
        result = cached
        message = "Cache found"
        ++hits
        pushy(["state", "cache.hits"], hits)
    } else {
        if (fnArgs != null) {
            result = fn(...fnArgs)
        } else {
            result = fn()
        }
        cache.put(cacheName, result, cacheTime)
        message = "Not found. Cached."
    }

    pushy(["state", `cache.${cacheName}`], message)

    objCacheMethodsBuilder.data = {
      // @ts-ignore
        "@context": [ "cacheHandler" ],
        cache,
        cacheName,
        cached,
        message,
        result,
    }

    objCacheMethodsBuilder.invalidate = () => {
        if (cached != null) {
            objCacheMethodsBuilder.data.cachedName = null
            return true
        }
        return false
    }

    objCacheMethodsBuilder.getResult = () => {
        return {
            "@context": [ "cacheHandler", {
                method: "getResult",
            }],
            "cacheData": objCacheMethodsBuilder.data.result,
            "cacheName": objCacheMethodsBuilder.data.cachedName,
            "cacheStatus": [true, objCacheMethodsBuilder.data.message],
        }
    }

    return objCacheMethodsBuilder
}
