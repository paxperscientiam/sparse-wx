//     Copyright (C) 2018 Christopher David Ramos

import {
  objectPath,
} from "Vendor"

import { JsonResponseHandler } from "Handlers/JsonResponse"

import { NWSUrlService } from "Handlers/nwsUrlHandlers"

import { timeConversion } from "Utilities/Date"

function nwsMetaLocationData() {
  //  const WX = PROPS.WX

  const lat = Number(fetch("user", "lat")).toFixed(4)
  const lon = Number(fetch("user", "lon")).toFixed(4)
  const coord = `${lat},${lon}`

  Logger.log(`[${timeStamp()}][coord] ${coord}`)

  const nwsUrlService = NWSUrlService()
  //
  const urlForMeta = nwsUrlService.getMetaLink(coord)

  Logger.log(`[${timeStamp()}][urlForMeta] ${urlForMeta}`)

  const params = dictionary.HTTP.WX_SERVICE.PARAMS
  const preWxRaw = JsonResponseHandler(urlForMeta, {}, params)
  const wxRaw = _Cache(preWxRaw.fetch.bind(preWxRaw), [], "wxRaw", 0)
  return wxRaw.getResult()
}

export function getWeatherServiceDataService() {
  const obj = Object.create(prepWeatherDataMethods)

  const wxResponse = nwsMetaLocationData()

  obj.status = []

  obj.status.push(wxResponse.cacheStatus)

  if (wxResponse.cacheData != null) {
    push(["state", "cache.wx.meta"], "not found")
    obj.status.push([true, "metadata result found in cache"])
  } else {
    push(["state", "cache.wx.meta"], "found")
    obj.status.push([false, "metadata not found in cache!"])
    return obj
  }

  if (objectPath.get(wxResponse, "cacheData.data.properties") == null) {
    push(["state", "cache.wx.meta.properties"], "meta")
    Logger.log("wxResponse does not contain wx properties")
    obj.status.push([false, "wxUrl fail"])
    return obj
  }

  const timeZone = objectPath.get(wxResponse, ".data.properties.timeZone")
  push(["wx", "timeZone"], timeZone)

  const wxUrl = objectPath.get(wxResponse,
                               "cacheData.data.properties.forecast")

  if (wxUrl != null) {
    push(["state", "service.wx.meta.forecastUrl"], wxUrl)
    obj.status.push([true, `wxUrl: ${wxUrl}`])
  } else {
    push(["state", "service.wx.meta.forecastUrl"], undefined)
    obj.status.push([false, "wxUrl is undefined!"])
    return obj
  }

  const params = dictionary.HTTP.WX_SERVICE.PARAMS
  const preWxRaw = JsonResponseHandler(wxUrl, {}, params)

  const fetchResponse = _Cache(preWxRaw.fetch.bind(preWxRaw), [], "wxRawForecast", 0).getResult()

  if (fetchResponse.cacheStatus != null) {
    push(["state", "cache.wx"], "cached")
    Logger.log(`wx dump response found in cache`)
    obj.status.push([true, `wx dump response found in cache`])
  } else {
    push(["state", "cache.wx"], "not cached")
    Logger.log( "wx dump NOT found in cache!")
    obj.status.push([false, "wx dump NOT found in cache!"])
    return obj
  }

  obj.wx = objectPath.get(fetchResponse, "cacheData.data")

  //  obj.timeZone = wx.properties.timeZone

  if (objectPath.get(obj, "wx.properties") == null) {
    obj.status.push([false, "mo wx data from site!"])
    return obj
  }

  obj.updateTime = objectPath.get(obj.wx, "properties.updateTime")
  push(["wx", "updateTime"], obj.updateTime)

  obj.elevation = objectPath.get(obj.wx, "properties.elevation")
  push(["wx", "elevation"], obj.elevation)

  const wxPeriodCounts = objectPath.get(obj.wx, "properties.periods")

  if (!!wxPeriodCounts) {
    obj.wxPeriodCount = wxPeriodCounts.length
  }

  return obj
}

// export function weatherPrimeService(coordinates: string) {
//   if (coordinates === undefined) {
//     coordinates = user.coordinate
//   }

//   const nwsUrlService = new NWSUrlService()

//   const metaDataUrl = nwsUrlService.meta(coordinates)

//   const params = dictionary.HTTP.WX_SERVICE.PARAMS

//   const preResponse = JsonResponseHandler(metaDataUrl, {}, params)

//   // need to invalidate if data is bad
//   const rawResponse = _Cache(preResponse.fetch, [], "wxRaw", 100)
//   //    forecastUrl = nwsUrlService.forecastUrlFromCoord(coordinates)
// }

// export function WeatherService(coord: string) {

//   const nwsUrlService = NWSUrlService()
//   //
//   const urlForMeta = nwsUrlService.getMetaLink(coord)

//   //    curl https://api.weather.gov/stations/KBTV/observations/current

//   const params = dictionary.HTTP.WX_SERVICE.PARAMS
//   const preWxRaw = JsonResponseHandler(urlForMeta, {}, params)
//   const wxRaw = _Cache(preWxRaw.fetch.bind(preWxRaw), [], "wxRaw", 10)
//   const wxResponse = wxRaw.getResult()

//   if (!wxResponse.status[0]) {
//     return {
//       status: wxResponse.status[1],
//     }
//   }

//   if (wxResponse.data.properties === undefined) {
//     return {
//       status: ["ERR", "wxRaw.properties is undefined"],
//     }
//   }

//   const wxUrl = wxResponse.data.properties.forecast

//   // FIX21313
//   const preFetch = JsonResponseHandler(wxUrl, {}, params)
//   const fetchResponse = _Cache(preWxRaw.fetch.bind(preWxRaw), [], "wxRawForecast", 500).getResult()

//   if (!fetchResponse.status[0]) {
//     return {
//       status: [false, fetchResponse.status[1]],
//     }
//   }

//   if (fetchResponse.data.properties === undefined) {
//     return {
//       status: [false, "fetchResponse.data.properties is undefined"],
//     }
//   }

//   fetchResponse.timeZone = fetchResponse.data.properties.timeZone
//   fetchResponse.cwa = fetchResponse.data.properties.cwa

//   return [true, fetchResponse]
// }

export function WeatherIconService(WxCondition: string, isDaytime: boolean) {
  // https://www.weather.gov/bgm/forecast_terms
  // POP Percent 	Expression of Uncertainty 	Equivalent Areal Qualifier
  // 10 percent 	(none used) 	Isolated/ Few
  // 20 percent 	Slight Chance 	Widely Scattered
  // 30, 40, & 50 percent 	Chance 	Scattered
  // 60 & 70 percent 	Likely 	Numerous (or none used)
  // 80, 90, & 100 percent 	(None used) 	Occasional, periods of, or none used

  const TIME = isDaytime ? "DAY" : "NIGHT"
  const ICONS_WX = ICONS.WX

  Logger.log(`WX CONDITION: ${WxCondition}`)

  const popTerms = [
    "few",
    "isolated",
    "slight chance",
    "widely scattered",
    "chance",
    "scattered",
    "likely",
    "numerous",
  ]

  if (/(partly.*sunny|mostly.*cloudy)/i.test(WxCondition)) {
    return ICONS_WX.PARTLYSUNNY[TIME]
    //
  } else if (/(partly.*cloudy|mostly.*sunny)/i.test(WxCondition)) {
    return ICONS_WX.PARTLYCLOUDY[TIME]
    //
  } else if (/sunny/i.test(WxCondition) ) {
    return ICONS_WX.SUNNY[TIME]
    //
  } else if (/cloudy/i.test(WxCondition) ) {
    return ICONS_WX.CLOUDY[TIME]
    //
  } else if (/clear/i.test(WxCondition) ) {
    return ICONS_WX.CLEAR[TIME]
  }

  const isChance = popTerms.some((term) => {
    return (WxCondition.toLowerCase()).indexOf(term) > -1
  })

  if (isChance) {
    if (WxCondition.toLowerCase().indexOf("rain") > -1) {
      return ICONS_WX.CHANCERAIN[TIME]
      //
    } else if (WxCondition.toLowerCase().indexOf("sleet") > -1) {
      return ICONS_WX.CHANCESLEET[TIME]
      //
    } else if (WxCondition.toLowerCase().indexOf("snow") > -1) {
      return ICONS_WX.CHANCESNOW[TIME]
      //
    } else if (WxCondition.toLowerCase().indexOf("storm") > -1) {
      return ICONS_WX.CHANCETSTORMS[TIME]
      //
    } else if (WxCondition.toLowerCase().indexOf("flurries") > -1) {
      return ICONS_WX.CHANCEFLURRIES[TIME]
    }
  }

  if (/rain/i.test(WxCondition)) {
    return ICONS_WX.RAINY[TIME]
    //
  } else if (/flurries/i.test(WxCondition) ) {
    return ICONS_WX.FLURRIES[TIME]
    //
  } else if (/fog/i.test(WxCondition) ) {
    return ICONS_WX.FOG[TIME]
    //
  } else if (/haze/i.test(WxCondition) ) {
    return ICONS_WX.HAZY[TIME]
    //
  } else if (/snow/i.test(WxCondition) ) {
    return ICONS_WX.SNOW[TIME]
  } else if (/sleet/i.test(WxCondition)) {
    return ICONS_WX.SLEET[TIME]
  } else {
    return ICONS_WX.UNKNOWN
  }
  return ICONS_WX.UNKNOWN
}
//

export function checkWeatherServiceStatus() {
  const urlWxServiceCheck = NWSUrlService().uri.base

  const params = dictionary.HTTP.WX_SERVICE.PARAMS
  let result
  try {
    result = JsonResponseHandler(urlWxServiceCheck, {}, params).fetch()
  } catch (e) {
    push(["state", "status.wx"], "ERR")
    Logger.log(`checkWeatherServiceStatus: ${e}`)
    return "ERR"
  }

  Logger.log(`[${timeStamp()}][wxServiceStatus] ${result.data.status}`)
  const status = objectPath.get(result, "data.status")
  push(["state", "status.wx"], status)
  return status
}

// function getWeatherMeta() {
//   const urlWxGetMetaData = new NWSUrlService()
//   const params = dictionary.HTTP.WX_SERVICE.PARAMS

//   const urlWxGetMetaData = "https://api.weather.gov/points/37.5407,-77.4360"

//   const result = (new JsonResponseHandler(urlWxGetMetaData, {}, params))
//   Logger.log(result)
//   const radarStationId = result.properties.radarStation
//   Logger.log(radarStationId)

// }

export function getForecastStalenessService() {
  const lastUpdateTime = fetch("wx", "updateTime")
  let diff
  if (!!lastUpdateTime) {
    diff = Date.now() - (new Date(lastUpdateTime)).getTime()
    diff = timeConversion(diff)
    push(["wx", "forecastAge"], diff)
    return [true, diff]
  }
  return [false, "unknown"]
}

export function getAlertsByStateService() {
  const params = dictionary.HTTP.WX_SERVICE.PARAMS
  const userstate = fetch("user", "state")

  const urlWxAlerts = `https://api.weather.gov/alerts/active/count`

  let response
  let count

  if (!!userstate) {
    response = JsonResponseHandler(urlWxAlerts, {}, params).fetch().data
    count = (response.areas[userstate])
    if (count != null) {
      count = count.toFixed(0)
      push(["state", "service.wx.alerts"], true)
      return [true, count]
    }
    push(["state", "service.wx.alerts"], false)
    return [false, "0 alerts"]
  }
  push(["state", "service.wx.alerts"], "ERR")
  return [false, "ERR"]
}

const prepWeatherDataMethods = {
  getPeriod(period) {
    const periodic = this.wx.properties.periods[period]
    push(["state", "display.wx.data.period"], period)
    const response = {
      status: [true, "wx is good"],

      condition: periodic.shortForecast.toLowerCase(),
      isDaytime: periodic.isDaytime,
      name: periodic.name,
      temp: periodic.temperature,
      unit: periodic.temperatureUnit,
      windDirection: periodic.windDirection,
      windSpeed: periodic.windSpeed,

      cwa: this.wx.properties.cwa,
      cwaUrl: "https://www.weather.gov/",
      updateTime: this.wx.properties.updateTime,
    }
    return response
  },
}
