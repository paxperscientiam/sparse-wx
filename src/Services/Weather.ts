//     Copyright (C) 2018 Christopher David Ramos

import {
  objectPath,
} from "~Vendor"

import dlv from "@paxperscientiam/dlv.ts/dist/dlv.umd"

import { JsonResponseHandler } from "~Handlers/JsonResponse"

import { NWSUrlService } from "~Handlers/nwsUrlHandlers"

import { timeConversion, timeStamp } from "~Utilities/Date"

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

  if (dlv(wxResponse, "cacheData.data.properties") == null) {
    push(["state", "cache.wx.meta.properties"], "meta")
    Logger.log("wxResponse does not contain wx properties")
    obj.status.push([false, "wxUrl fail"])
    return obj
  }

  const timeZone = dlv(wxResponse, ".data.properties.timeZone")
  push(["wx", "timeZone"], timeZone)

  const wxUrl = dlv(wxResponse, "cacheData.data.properties.forecast")

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

  obj.wx = dlv(fetchResponse, "cacheData.data")

  //  obj.timeZone = wx.properties.timeZone

  if (dlv(obj, "wx.properties") == null) {
    obj.status.push([false, "mo wx data from site!"])
    return obj
  }

  obj.updateTime = dlv(obj.wx, "properties.updateTime")
  push(["wx", "updateTime"], obj.updateTime)

  obj.elevation = dlv(obj.wx, "properties.elevation")
  push(["wx", "elevation"], obj.elevation)

  const wxPeriodCounts = dlv(obj.wx, "properties.periods")

  if (!!wxPeriodCounts) {
    obj.wxPeriodCount = wxPeriodCounts.length
  }

  return obj
}

export function checkWeatherServiceStatus() {
  const urlWxServiceCheck = NWSUrlService().uri.base

  const params = dictionary.HTTP.WX_SERVICE.PARAMS
  let result: any
  try {
    result = JsonResponseHandler(urlWxServiceCheck, {}, params).fetch()
  } catch (e) {
    push(["state", "status.wx"], "ERR")
    Logger.log(`checkWeatherServiceStatus: ${e}`)
    return "ERR"
  }

  Logger.log(`[${timeStamp()}][wxServiceStatus] ${result.data.status}`)
  const status = dlv(result, "data.status")
  push(["state", "status.wx"], status)
  return status
}

export function getForecastStalenessService() {
  const lastUpdateTime = fetch("wx", "updateTime")
  let diff: any
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

  let response: any
  let count: any

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
      iconUrl: periodic.icon,
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
