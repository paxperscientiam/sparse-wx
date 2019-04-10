//     Copyright (C) 2018 Christopher David Ramos

export function NWSUrlService() {
  const objNWSUrlBuilder = Object.create(objNWSUrlMethods)

  const uri = {
    base: "https://api.weather.gov/",

    alerts: {
      active: "alerts/active",
    },
  }

  objNWSUrlBuilder.uri = uri

  return objNWSUrlBuilder
}

const objNWSUrlMethods = {
  getMetaLink(coordinates: string) {
    return `${this.uri.base}points/${coordinates}`
  },
}

// interface INWSUrlService {
// }

// export class NWSUrlService {
//   NWS_INTERFACE
//   API: any
//   URL_BASE: string
//   alerts: string
//   activeAlerts: string

//   constructor() {
//     this.NWS_INTERFACE = dictionary.INTERFACE.NationalWeatherServiceInterface
//     this.API = this.NWS_INTERFACE.API

//     this.URL_BASE = this.API._

//     this.alerts = `${this.URL_BASE}${this.API.ALERTS._}`

//     this.activeAlerts = `${this.URL_BASE}${this.API.ALERTS.ACTIVE}`

//   }

//   meta(coordinates: string) {
//     /// points/{point}
//     return `${this.URL_BASE}${this.API.POINTS._}/${coordinates}`
//   }

//   forecast(wfo: string, gridpoints: string) {
//     let url = `${this.URL_BASE}${this.API.GRID_POINTS.FORECAST._}`
//     url = url.replace(/@wfo/i, wfo)
//     url = url.replace(/@xy/i, gridpoints)
//     return url
//   }

//   zoneAlerts(zoneid: string) {
//     // note that zone is county id which comes from meta.properties.county
//     // eg https://api.weather.gov/alerts/active/zone/VTC007
//     return `${this.URL_BASE}${this.API.ALERTS.ACTIVE}/zone/${zoneid}`
//   }
// }
// //
// //
// // function _nwsUrlHandlerTest_metaUrlFromCoord() {
// //   const coordinates = "44.4759,-73.2121"
// //   const a = new NWSUrlService()
// //   const b = a.meta
// //   const c = b(coordinates); Logger.log(c)
// //   return c
// // }
// //
// // function _nwsUrlHandlerTest__forecastUrlFromCoord() {
// //   const coordinates = "44.4759,-73.2121"
// //   const a = new NWSUrlService()
// //   const b = a.meta
// //   const metaUrl = b(coordinates)

// //   const forecastUrl = a._forecastUrlFromCoord(metaUrl); Logger.log(forecastUrl)
// //   return forecastUrl
// // }
// // //
// // function _nwsUrlHandlerTest_forecastUrlFromCoord() {
// //   const coordinates = "44.4759,-73.2121"
// //   const a = new NWSUrlService(); Logger.log(a)
// //   const b = a.forecastUrlFromCoord; Logger.log(b)
// //   const c = b(coordinates); Logger.log(c)
// // }
