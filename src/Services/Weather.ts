//     Copyright (C) 2018 Christopher David Ramos

import {fetch, push as pushy} from "~Data/PushPull"

import {
  HTTP,
} from "~Data/Dictionary"

import {_Cache} from "~Handlers/Aux"

import dlv from "@paxperscientiam/dlv.ts"

import { JsonResponseHandler } from "~Handlers/JsonResponse"

import { NWSUrlService } from "~Handlers/nwsUrlHandlers"

import { timeConversion, timeStamp } from "~Utilities/Date"

function nwsMetaLocationData() {
  //  const WX = PROPS.WX

  const lat = Number(fetch("user", "lat")).toFixed(4)
  const lon = Number(fetch("user", "lon")).toFixed(4)
  const coord = `${lat},${lon}`

  Logger.log(`[${timeStamp()}][coord] ${coord}`)

  const urlForMeta = NWSUrlService.getMetaLink(coord)

  Logger.log(`[${timeStamp()}][urlForMeta] ${urlForMeta}`)

  const params = HTTP.WX_SERVICE.PARAMS
  const preWxRaw = JsonResponseHandler(urlForMeta, {}, params)
  const wxRaw = _Cache(preWxRaw.fetch.bind(preWxRaw), [""], "wxRaw", 0)
  return wxRaw.getResult()
}

export function getWeatherServiceDataService() {
  const obj = Object.create({})
  const wxResponse = nwsMetaLocationData()

  obj.status = []

  // obj.push(wxResponse.cacheStatus)

  if (wxResponse.cacheData != null) {
    pushy(["state", "cache.wx.meta"], "not found")
    obj.status.push([true, "metadata result found in cache"])
  } else {
    pushy(["state", "cache.wx.meta"], "found")
    obj.status.push([false, "metadata not found in cache!"])
    return obj
  }

  if (dlv(wxResponse, "cacheData.data.properties") == null) {
    pushy(["state", "cache.wx.meta.properties"], "meta")
    Logger.log("wxResponse does not contain wx properties")
    obj.status.push([false, "wxUrl fail"])
    return obj
  }

  const timeZone = dlv(wxResponse, ".data.properties.timeZone")
  pushy(["wx", "timeZone"], timeZone)

  const wxUrl = dlv(wxResponse, "cacheData.data.properties.forecast")

  if (wxUrl != null) {
    pushy(["state", "service.wx.meta.forecastUrl"], wxUrl)
    obj.status.push([true, `wxUrl: ${wxUrl}`])
  } else {
    pushy(["state", "service.wx.meta.forecastUrl"], undefined)
    obj.status.push([false, "wxUrl is undefined!"])
    return obj
  }

  const params = HTTP.WX_SERVICE.PARAMS
  const preWxRaw = JsonResponseHandler(wxUrl, {}, params)

  const fetchResponse = _Cache(preWxRaw.fetch.bind(preWxRaw), [""], "wxRawForecast", 0).getResult()

  if (fetchResponse.cacheStatus != null) {
    pushy(["state", "cache.wx"], "cached")
    Logger.log(`wx dump response found in cache`)
    obj.status.push([true, `wx dump response found in cache`])
  } else {
    pushy(["state", "cache.wx"], "not cached")
    Logger.log( "wx dump NOT found in cache!")
    obj.status.push([false, "wx dump NOT found in cache!"])
    return obj
  }

  obj.wx = dlv(fetchResponse, "cacheData.data")

  //  obj.timeZone = wx.properties.timeZone

  if (dlv(obj, "wx.properties") == null) {
    obj.status.push([false, "mo wx data from site!"])
    return obj
  }

  obj.updateTime = dlv(obj.wx, "properties.updateTime")
  pushy(["wx", "updateTime"], obj.updateTime)

  obj.elevation = dlv(obj.wx, "properties.elevation")
  pushy(["wx", "elevation"], obj.elevation)

  const wxPeriodCounts = dlv(obj.wx, "properties.periods")

  if (!!wxPeriodCounts) {
    obj.wxPeriodCount = wxPeriodCounts.length
  }

  obj.getPeriod = (period: string): InputObject => {
    const periodic: IData = obj.wx.properties.periods[period]
    pushy(["state", "display.wx.data.period"], period)
    const response = {
      condition: periodic.shortForecast.toLowerCase(),
      status: [true, "wx is good"],

      iconUrl: periodic.icon,

      isDaytime: periodic.isDaytime,
      name: periodic.name,
      temp: periodic.temperature,
      unit: periodic.temperatureUnit,
      windDirection: periodic.windDirection,
      windSpeed: periodic.windSpeed,

      cwa: obj.wx.properties.cwa,
      cwaUrl: "https://www.weather.gov/",
      updateTime: obj.wx.properties.updateTime,
    }
    return response
  }
  return obj
}

export function checkWeatherServiceStatus() {
  const urlWxServiceCheck = NWSUrlService.uri.base

  const params = HTTP.WX_SERVICE.PARAMS
  let result: any
  try {
    result = JsonResponseHandler(urlWxServiceCheck, {}, params).fetch()
  } catch (e) {
    pushy(["state", "status.wx"], "ERR")
    Logger.log(`checkWeatherServiceStatus: ${e}`)
    return "ERR"
  }

  Logger.log(`[${timeStamp()}][wxServiceStatus] ${result.data.status}`)
  const status = dlv(result, "data.status")
  pushy(["state", "status.wx"], status)
  return status
}

export function getForecastStalenessService() {
  const lastUpdateTime = fetch("wx", "updateTime")
  let diff: any
  if (!!lastUpdateTime) {
    diff = Date.now() - (new Date(lastUpdateTime)).getTime()
    diff = timeConversion(diff)
    pushy(["wx", "forecastAge"], diff)
    return [true, diff]
  }
  return [false, "unknown"]
}

export function getAlertsByStateService() {
  const params = HTTP.WX_SERVICE.PARAMS
  const userstate = fetch("user", "state")

  const urlWxAlerts = `https://api.weather.gov/alerts/active/count`

  let response: any
  let count: any

  if (!!userstate) {
    response = JsonResponseHandler(urlWxAlerts, {}, params).fetch().data
    count = (response.areas[userstate])
    if (count != null) {
      count = count.toFixed(0)
      pushy(["state", "service.wx.alerts"], true)
      return [true, count]
    }
    pushy(["state", "service.wx.alerts"], false)
    return [false, "0 alerts"]
  }
  pushy(["state", "service.wx.alerts"], "ERR")
  return [false, "ERR"]
}
