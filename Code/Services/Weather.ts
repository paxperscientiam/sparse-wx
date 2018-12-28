//     Copyright (C) 2018 Christopher David Ramos

function weatherPrimeService(coordinates: string) {
    const dictionary = new Dictionary()
    const UPK = dictionary.PROPS

    if (coordinates === undefined) {
        coordinates = userProperties.getProperty(UPK.USER.COORDINATE)
    }

    const nwsUrlService = new NWSUrlService()

    const metaDataUrl = nwsUrlService.meta(coordinates)

    const params = dictionary.HTTP.WX_SERVICE.PARAMS

    const rawResponse = (new JsonResponseHandler(metaDataUrl, {}, params, "wxMetaRaw")).data
    Logger.log(rawResponse)
    //    forecastUrl = nwsUrlService.forecastUrlFromCoord(coordinates)
}

function weatherServicePrimeTest() {
    const dictionary = new Dictionary()
    const ICONS = dictionary.ICONS
    const PROPS = dictionary.PROPS

    weatherServicePrime(userProperties.getProperty(PROPS.USER.COORDINATE))
}

function WeatherService(coord, period) {
    const dictionary = new Dictionary()
    const nwsUrlService = new NWSUrlService()
    //
    const UPK = dictionary.PROPS
    const WX = UPK.WX

    const urlForMeta = nwsUrlService.meta(coord)

    //    curl https://api.weather.gov/stations/KBTV/observations/current

    const params = dictionary.HTTP.WX_SERVICE.PARAMS

    wxRaw = (new JsonResponseHandler(urlForMeta, {}, params, "wxRaw")).data
    wxUrl = wxRaw.properties.forecast
    Logger.log(`Forecast url: ${wxUrl}`)

    // FIX21313
    wx = (new JsonResponseHandler(wxUrl, {}, params, "wx")).data

    Logger.log(`wx server response: ${wx}`)
    // const wx = JSON.parse(PROPS.getProperty("WX"))

    // if (Object.keys(wx).length === 0 ) {
    //     PROPS.setProperty("WX", JSON.stringify(wx))
    // }

    this.temp = wx.properties.periods[period].temperature
    this.unit = wx.properties.periods[period].temperatureUnit
    this.condition = (wx.properties.periods[period].shortForecast).toLowerCase()
    this.name = wx.properties.periods[period].name
    this.windDirection = wx.properties.periods[period].windDirection
    this.windSpeed = wx.properties.periods[period].windSpeed
    this.isDaytime = wx.properties.periods[period].isDaytime
    //

    this.updateTime = wx.properties.updateTime

    userProperties.setProperty(WX.WX_UPDATE_TIME, this.updateTime)
}

function weatherSearch(mode, segment) {
    const dictionary = new Dictionary()
    const WX_INTERFACE = dictionary.INTERFACE.NationalWeatherServiceInterface
    const url = WX_INTERFACE.API._[0] +  WX_INTERFACE.API._[1].POINTS + "/" + segment
    switch (mode) {
        case "coord"
            return `${url}`
    }
}

function WeatherIconService(WxCondition, isDaytime) {
    const TIME = isDaytime ? "DAY" : "NIGHT"
    const ICONS = (new DictionaryIcons()).WX

    if (/^part.*sunny/i.test(WxCondition)) {
        return ICONS.PARTLYSUNNY[TIME]
    } else if (/^sunny/i.test(WxCondition) ) {
        return ICONS.SUNNY[TIME]
    } else if (/^part.*cloudy/i.test(WxCondition)) {
        return ICONS.PARTLYCLOUDY[TIME]
    } else if (/^cloudy/i.test(WxCondition) ) {
        return ICONS.CLOUDY[TIME]
    } else if (/^(light|heavy) rain|rain/i.test(WxCondition) ) {
        return ICONS.RAINY[TIME]
    } else if (/flurries/i.test(WxCondition) ) {
        return ICONS.FLURRIES[TIME]
    } else if (/fog/i.test(WxCondition) ) {
        return ICONS.FOG[TIME]
    } else if (/haze/i.test(WxCondition) ) {
        return ICONS.HAZY[TIME]
    } else if (/chance.*rain/i.test(WxCondition) ) {
        return ICONS.CHANCERAIN[TIME]
    } else if (/chance.*sleet/i.test(WxCondition) ) {
        return ICONS.CHANCESLEET
    } else if (/chance.*snow/i.test(WxCondition) ) {
        return ICONS.CHANCESNOW[TIME]
    } else if (/chance.*storm/i.test(WxCondition) ) {
        return ICONS.CHANCETSTORMS[TIME]
    } else if (/mostly sunny/i.test(WxCondition) ) {
        return ICONS.MOSTLYCLOUDY[TIME]
    } else if (/mostly cloudy/i.test(WxCondition) ) {
        return ICONS.MOSTLYCLOUDY[TIME]
    } else if (/clear/i.test(WxCondition) ) {
        return ICONS.CLEAR[TIME]
    } else {
        return ICONS.UNKNOWN
    }
}
//

function checkWeatherServiceStatus() {
    const url = (new NWSUrlService()).URL_BASE
    const dictionary = new Dictionary()
    const params = dictionary.HTTP.WX_SERVICE.PARAMS
    const result = (new JsonResponseHandler(url, {}, params, "weatherServiceStatus"))
    return result.data.status
}

function getWeatherMeta() {
    const url = new NWSUrlService()
    const dictionary = new Dictionary()
    const params = dictionary.HTTP.WX_SERVICE.PARAMS

    const url = "https://api.weather.gov/points/37.5407,-77.4360"

    const result = (new JsonResponseHandler(url, {}, params, "wxMeta"))
    Logger.log(result)
    const radarStationId = result.properties.radarStation
    Logger.log(radarStationId)

}

// function getAlertsByArea() {
//     // 'area' is two letter state code, capital letters
//     const dictionary = new Dictionary()
//     const UPK = dictionary.PROPS
//     Logger.log(

// }
