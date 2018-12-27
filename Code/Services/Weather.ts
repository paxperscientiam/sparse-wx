//     Copyright (C) 2018 Christopher David Ramos

function weatherPrimeService(coordinates: string) {
    const dictionary = new Dictionary()
    const UPK = dictionary.props

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
    const props = dictionary.props

    weatherServicePrime(userProperties.getProperty(props.USER.COORDINATE))
}

function WeatherService(coord, period) {
    const dictionary = new Dictionary()
    const nwsUrlService = new NWSUrlService()
    //
    const UPK = dictionary.props
    const WX = UPK.WX

    const url = nwsUrlService.metaData(coord)

    //    curl https://api.weather.gov/stations/KBTV/observations/current

    //const params = getUserObjectProperty(WX.WX_API_PARAMS)
    const params = dictionary.HTTP.WX_SERVICE.PARAMS

    wxMetaRaw = (new JsonResponseHandler(urlForMeta, {}, params, "wxMetaRaw")).data

    wxRaw = (new JsonResponseHandler(url, {}, params, "wxRaw")).data
    wxUrl = wxRaw.properties.forecast
    Logger.log(`Forecast url: ${wxUrl}`)

    wx = (new JsonResponseHandler(wxUrl, {}, params, "wx")).data

    Logger.log(`wx server response: ${wx}`)
    // const wx = JSON.parse(props.getProperty("WX"))

    // if (Object.keys(wx).length === 0 ) {
    //     props.setProperty("WX", JSON.stringify(wx))
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
    const time = isDaytime ? "DAY" : "NIGHT"
    const ICONS = (new DictionaryIcons()).WX

    if (/^part.*sunny/i.test(WxCondition)) {
        return ICONS.PARTLYSUNNY[time]
    } else if (/^sunny/i.test(WxCondition) ) {
        return ICONS.SUNNY[time]
    } else if (/^part.*cloudy/i.test(WxCondition)) {
        return ICONS.PARTLYCLOUDY[time]
    } else if (/^cloudy/i.test(WxCondition) ) {
        return ICONS.CLOUDY[time]
    } else if (/^(light|heavy) rain|rain/i.test(WxCondition) ) {
        return ICONS.RAINY[time]
    } else if (/flurries/i.test(WxCondition) ) {
        return ICONS.FLURRIES[time]
    } else if (/fog/i.test(WxCondition) ) {
        return ICONS.FOG[time]
    } else if (/haze/i.test(WxCondition) ) {
        return ICONS.HAZY[time]
    } else if (/chance.*rain/i.test(WxCondition) ) {
        return ICONS.CHANCERAIN[time]
    } else if (/chance.*sleet/i.test(WxCondition) ) {
        return ICONS.CHANCESLEET
    } else if (/chance.*snow/i.test(WxCondition) ) {
        return ICONS.CHANCESNOW[time]
    } else if (/chance.*storm/i.test(WxCondition) ) {
        return ICONS.CHANCETSTORMS[time]
    } else if (/mostly sunny/i.test(WxCondition) ) {
        return ICONS.MOSTLYCLOUDY[time]
    } else if (/mostly cloudy/i.test(WxCondition) ) {
        return ICONS.MOSTLYCLOUDY[time]
    } else if (/clear/i.test(WxCondition) ) {
        return ICONS.CLEAR[time]
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
//     const UPK = dictionary.props
//     Logger.log(

// }
