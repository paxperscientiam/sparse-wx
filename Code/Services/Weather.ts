//     Copyright (C) 2018 Christopher David Ramos

function weatherPrimeService(coordinates: string) {
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
    const ICONS = dictionary.ICONS
    const PROPS = dictionary.PROPS

    weatherServicePrime(userProperties.getProperty(PROPS.USER.COORDINATE))
}

function WeatherService(coord, period) {
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
    this.timeZone = wxRaw.properties.timeZone

    this.cwa = wxRaw.properties.cwa

    this.cwaUrl = `https://www.weather.gov/${this.cwa}`

    userProperties.setProperty(WX.WX_UPDATE_TIME, this.updateTime)
    userProperties.setProperty(WX.WX_TZ, this.timeZone)
    userProperties.setProperty(WX.CWA, this.cwaUrl)

}

function weatherSearch(mode, segment) {
    const WX_INTERFACE = dictionary.INTERFACE.NationalWeatherServiceInterface
    const url = WX_INTERFACE.API._[0] +  WX_INTERFACE.API._[1].POINTS + "/" + segment
    switch (mode) {
        case "coord"
            return `${url}`
    }
}

function WeatherIconService(WxCondition, isDaytime) {
    // https://www.weather.gov/bgm/forecast_terms
    // POP Percent 	Expression of Uncertainty 	Equivalent Areal Qualifier
    // 10 percent 	(none used) 	Isolated/ Few
    // 20 percent 	Slight Chance 	Widely Scattered
    // 30, 40, & 50 percent 	Chance 	Scattered
    // 60 & 70 percent 	Likely 	Numerous (or none used)
    // 80, 90, & 100 percent 	(None used) 	Occasional, periods of, or none used

    const TIME = isDaytime ? "DAY" : "NIGHT"
    const ICONS = dictionary.ICONS.WX

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
        return ICONS.PARTLYSUNNY[TIME]
        //
    } else if (/(partly.*cloudy|mostly.*sunny)/i.test(WxCondition)) {
        return ICONS.PARTLYCLOUDY[TIME]
        //
    } else if (/sunny/i.test(WxCondition) ) {
        return ICONS.SUNNY[TIME]
        //
    } else if (/cloudy/i.test(WxCondition) ) {
        return ICONS.CLOUDY[TIME]
        //
    } else if (/clear/i.test(WxCondition) ) {
        return ICONS.CLEAR[TIME]
    }

    const isChance = popTerms.some((term) => {
        return (WxCondition.toLowerCase()).indexOf(term) > -1
    })

    if (isChance) {
        if (WxCondition.toLowerCase().indexOf("rain") > -1) {
            return ICONS.CHANCERAIN[TIME]
            //
        } else if (WxCondition.toLowerCase().indexOf("sleet") > -1) {
            return ICONS.CHANCESLEET[TIME]
            //
        } else if (WxCondition.toLowerCase().indexOf("snow") > -1) {
            return ICONS.CHANCESNOW[TIME]
            //
        } else if (WxCondition.toLowerCase().indexOf("storm") > -1) {
            return ICONS.CHANCETSTORMS[TIME]
            //
        } else if (WxCondition.toLowerCase().indexOf("flurries") > -1) {
            return ICONS.CHANCEFLURRIES[TIME]
        }
    }

    if (/rain/i.test(WxCondition)) {
        return ICONS.RAINY[TIME]
        //
    } else if (/flurries/i.test(WxCondition) ) {
        return ICONS.FLURRIES[TIME]
        //
    } else if (/fog/i.test(WxCondition) ) {
        return ICONS.FOG[TIME]
        //
    } else if (/haze/i.test(WxCondition) ) {
        return ICONS.HAZY[TIME]
        //
    } else if (/snow/i.test(WxCondition) ) {
        return ICONS.SNOW[TIME]
    } else if (/sleet/i.test(WxCondition)) {
        return ICONS.SLEET[TIME]
    } else {
        return ICONS.UNKNOWN
    }
    return ICONS.UNKNOWN
}
//

function checkWeatherServiceStatus() {
    const url = (new NWSUrlService()).URL_BASE
    const params = dictionary.HTTP.WX_SERVICE.PARAMS
    let result
    try {
        result = (new JsonResponseHandler(url, {}, params))
    } catch (e) {
        return "ERR"
    }
    return result.data.status
}

function getWeatherMeta() {
    const url = new NWSUrlService()
    const params = dictionary.HTTP.WX_SERVICE.PARAMS

    const url = "https://api.weather.gov/points/37.5407,-77.4360"

    const result = (new JsonResponseHandler(url, {}, params, "wxMeta"))
    Logger.log(result)
    const radarStationId = result.properties.radarStation
    Logger.log(radarStationId)

}

function getForecastStalenessService() {
    const PROPS = dictionary.PROPS
    const lastUpdateTime = userProperties.getProperty(PROPS.WX.WX_UPDATE_TIME)
    let diff

    if (isSet(lastUpdateTime)) {
        diff = Date.now() - (new Date(lastUpdateTime)).getTime()
        diff = timeConversion(diff)
        return [true, diff]
    }

    return [false, "ERR"]
}

function getAlertsByStateService() {
    const PROPS = dictionary.PROPS
    const params = dictionary.HTTP.WX_SERVICE.PARAMS
    const userstate = userProperties.getProperty(PROPS.USER.STATE)

    const url = `https://api.weather.gov/alerts/active/count`

    let response
    let count

    if (isSet(userstate)) {
        response = (new JsonResponseHandler(url, {}, params)).data
        count = (response.areas[userstate])
        if (isSet(count)) {
            count = count.toFixed(0)
            return [true, count]
        }
        return [false, "0 alerts"]
    }
    return [false, "ERR"]
}

// function getAlertsByArea() {
//     // 'area' is two letter state code, capital letters
//     const UPK = dictionary.PROPS
//     Logger.log(

// }
