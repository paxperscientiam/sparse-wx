//     Copyright (C) 2018 Christopher David Ramos
function JsonResponseHandler(url: string, query = {}, params = {muteHttpExceptions: true}, cacheName: string) {
    const cache = CacheService.getUserCache()
    const cachedResults = cache.get(cacheName)
    if (cachedResults != null) {
        Logger.log("JsonResponeHandler: using cache")
        this.json = cachedResults
        this.data = JSON.parse(this.json)
        return this
    }
    Logger.log("JsonResponeHandler: NOT using cache")

    //   constructor() {
    //         this.name = "JsonResponseHandler"
    //     }

    if (Object.keys(query).length > 0) {
        // tslint:disable-next-line:max-line-length
        const strQuery = "?" + Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&")
        url = url + strQuery
    }
    const response = UrlFetchApp.fetch(url, params)
    const json = response.getContentText()

    cache.put(cacheName, json, 3600) // cache result for 3600 seconds

    const data = JSON.parse(json)
    //
    this.json = json
    this.data = data
    // try {
    //         const response = UrlFetchApp.fetch(url, params)
    //         const json = response.getContentText()
    //         const data = JSON.parse(json)
    //         //
    //         this.json = json
    //         this.data = data
    //         (Content.cache).put(cacheName, json, 1500)
    //     } catch (e) {
    //         let cache = CacheService.getUserCache()
    //         cache.remove(cacheName)
    //         this.data = {}
    //     }
}

function JsonResponseHandlerTest() {
    result = (new JsonResponseHandler("https://ipinfo.io/geo", {}, {}, "location")).data
}

function CacheRemoveTest() {
    const cache = CacheService.getUserCache()
    cache.remove("location")
}

function cacheFetchTest() {
    const cache = CacheService.getUserCache()
    content = cache.get("location")
    data = JSON.parse(content)
    Logger.log(data.country)
}
