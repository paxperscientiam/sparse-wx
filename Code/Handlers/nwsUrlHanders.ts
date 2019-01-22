//     Copyright (C) 2018 Christopher David Ramos
function NWSUrlService() {
    constructor () {
        this.NWS_INTERFACE = dictionary.INTERFACE.NationalWeatherServiceInterface
        this.API = this.NWS_INTERFACE.API

        this.URL_BASE = this.API._
    }

    this.meta = (coordinates) => {
        /// points/{point}
        return `${this.URL_BASE}${this.API.POINTS._}/${coordinates}`
    }

    this.alerts = `${this.URL_BASE}${this.API.ALERTS._}`

    this.activeAlerts = `${this.URL_BASE}${this.API.ALERTS.ACTIVE}`

    this.forecast = (wfo, gridpoints) => {
        let url = `${this.URL_BASE}${this.API.GRID_POINTS.FORECAST._}`
        url = url.replace(/@wfo/i, wfo)
        url = url.replace(/@xy/i, gridpoints)
        return url
    }

    this.zoneAlerts = (zoneid) => {
        // note that zone is county id which comes from meta.properties.county
        // eg https://api.weather.gov/alerts/active/zone/VTC007
        return `${this.URL_BASE}${this.API.ALERTS.ACTIVE}/zone/${zoneid}`
    }
}
//
//
function _nwsUrlHandlerTest_metaUrlFromCoord() {
    const coordinates = "44.4759,-73.2121"
    a = new NWSUrlService()
    b = a.meta
    c = b(coordinates); Logger.log(c)
    return c
}
//
function _nwsUrlHandlerTest__forecastUrlFromCoord() {
    const coordinates = "44.4759,-73.2121"
    a = new NWSUrlService()
    b = a.meta
    metaUrl = b(coordinates)

    forecastUrl = a._forecastUrlFromCoord(metaUrl); Logger.log(forecastUrl)
    return forecastUrl
}
//
function _nwsUrlHandlerTest_forecastUrlFromCoord() {
    const coordinates = "44.4759,-73.2121"
    a = new NWSUrlService(); Logger.log(a)
    b = a.forecastUrlFromCoord; Logger.log(b)
    c = b(coordinates); Logger.log(c)
}
