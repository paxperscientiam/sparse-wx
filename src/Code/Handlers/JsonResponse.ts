//     Copyright (C) 2018 Christopher David Ramos
export function JsonResponseHandler(url: string,
                                    query = {},
                                    params: object = {muteHttpExceptions: true}) {

  const obj = Object.create(objJsonHandlerMethods)

  const data = {
    "@context": [ "JsonResponseHandler" ],
    params,
    query,
    url,
  }

  obj.data = data
  return obj
}

const objJsonHandlerMethods = {
  fetch() {
    const response = UrlFetchApp.fetch(this.data.url , this.data.params)
    const json = response.getContentText()
    const responseData = JSON.parse(json)
    return {
      "@context": [ "JsonResponseHandler" ,
                    {
        method: "fetch",
      }],
      "data": responseData,
      "status": [ true, "Things are OK." ],
    }
  },
}

// @ts-ignore
global.JsonResponseHandlerTest = () => {
  // suggested fix
  // `blah(obj.fetch.bind(obj))` or `blah((...args) => obj.fetch(...args))`
  const result = JsonResponseHandler(
    "https://api.weather.gov/gridpoints/BTV/88,56/forecast",
    {},
    { muteHttpExceptions: true},
  )

  const x = _Cache(result.fetch.bind(result), [], "balls", 0)

  return x

  //  return _Cache(() => result.fetch(), [], "jsooon", 1)

  //  return result
  //  return _Cache(ssss, [], "jsonCache", 50)

  //  return _Cache(
  //   return result.properties

  // return _Cache(JsonResponseHandler, [
  //     "https://api.weather.gov/gridpoints/BTV/88,56/forecast",
  //     {},
  //     { muteHttpExceptions: true},
  //   ],
  //                 "JSON",
  //                 32131,
  //                )
}

// export class JsonResponseHandler {
//   url: string
//   query: object
//   params: object
//   cacheName: string
//   cacheTime: number
//   json
//   data

//   constructor(url: string, query = {},
//               params: object = {muteHttpExceptions: true},
//               cacheName?: string, cacheTime: number = 3600) {

//     const cache: Cache = CacheService.getUserCache()
//     if (cacheName != null) {
//       const cachedResults = cache.get(cacheName)
//       if (cachedResults != null) {
//         Logger.log("JsonResponeHandler: using cache")
//         this.json = cachedResults
//         this.data = JSON.parse(this.json)
//       }
//       Logger.log("JsonResponeHandler: NOT using cache")
//     }
//     if (Object.keys(query).length > 0) {
//       // tslint:disable-next-line:max-line-length
//       let strQuery = Object.keys(query).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(query[key])).join("&")
//       //      strQuery = URI(strQuery).normalizeQuery()

//       //    url = URI(url).query(strQuery)
//       url = url + strQuery
//     }

//     if (url != null) {
//       return this
//     }
//     const response = UrlFetchApp.fetch(url, params)
//     const json = response.getContentText()

//     if (cacheName != null) {
//       cache.put(cacheName, json, cacheTime) // cache result for 3600 seconds
//     }

//     const data = JSON.parse(json)
//     //
//     this.json = json
//     this.data = data
//   }
// }

// // @ts-ignore
// global.JsonResponseHandlerTest = () => {
//       tslint:disable-next-line:max-line-length
//   const  result = (new JsonResponseHandler("https://api.weather.gov", {}, { muteHttpExceptions: true}, "location")).data

//   const cachedLocation = (CacheService.getUserCache()).get("location")
//   return cachedLocation
// }

// function CacheRemoveTest() {
//   const cache: Cache = CacheService.getUserCache()
//   cache.remove("location")
// }

// function cacheFetchTest() {
//   const cache: Cache = CacheService.getUserCache()
//   const content = cache.get("location")
//   const data = JSON.parse(content)
//   Logger.log(data.country)
// }

// function fak(a = 3, b = 6) {
//   Logger.log( a * b)
// }
