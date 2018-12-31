//     Copyright (C) 2018 Christopher David Ramos
function JsonResponseHandler(url: string, query = {},
                             params = {muteHttpExceptions: true},
                             cacheName: string, cacheTime = 3600) {

    if (!isUndefined(cacheName)) {
        const cache = CacheService.getUserCache()
        const cachedResults = cache.get(cacheName)
        if (cachedResults != null) {
            Logger.log("JsonResponeHandler: using cache")
            this.json = cachedResults
            this.data = JSON.parse(this.json)
            return this
        }
        Logger.log("JsonResponeHandler: NOT using cache")
    }
    if (Object.keys(query).length > 0) {
        // tslint:disable-next-line:max-line-length
        const strQuery = "?" + Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&")
        url = url + strQuery
    }
    const response = UrlFetchApp.fetch(url, params)
    const json = response.getContentText()

    if (!isUndefined(cacheName)) {
        cache.put(cacheName, json, cacheTime) // cache result for 3600 seconds
    }

    const data = JSON.parse(json)
    //
    this.json = json
    this.data = data
}

function JsonResponseHandlerTest() {
    result = (new JsonResponseHandler("https://api.weather.gov", {}, {}, "location")).data
    Logger.log((CacheService.getUserCache()).get("location"))
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
