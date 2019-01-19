//     Copyright (C) 2018 Christopher David Ramos

function WeatherWidget(period = 0) {
    const ICONS = dictionary.ICONS

    const COLORS = dictionary.UI.PALETTE

    const UI_ICONS = ICONS.UI
    const WX_ICONS = ICONS.WX

    const UI_WIDGET = dictionary.UI.WIDGETS.WEATHER_TODAY

    const PROPS = dictionary.PROPS
    const STATE = PROPS.STATE

    const lat = Number(userProperties.getProperty(PROPS.USER.LAT)).toFixed(4)
    const lon = Number(userProperties.getProperty(PROPS.USER.LON)).toFixed(4)
    Logger.log(`lat: ${lat}, lon: ${lon}`)
    Logger.log(`Running WeatherWidget for period ${period} ... `)

    const WX_ERROR = WX_ICONS.ERROR
    if (!isSet(lat) || !isSet(lon) || Number(lon) === 0 || Number(lat) === 0) {
        throw new Error("Unable to determine your location")
    }

    //   try {
    const coord = `${lat},${lon}`
    Logger.log("coords for WeatherService function: " + coord)
    const Weather = new WeatherService(coord, period)

    let temperature = Weather.temp
    let temperatureUnit = Weather.unit

    if (userProperties.getProperty(PROPS.USER.TEMP_UNIT) === "dropdown_item_c") {
        temperature = convertFahrenheit(temperature)
        temperatureUnit = "C"
    }

    const message  = `${temperature}°${temperatureUnit}, ${Weather.condition}`
    Logger.log(`wx message: ${message}`)

    const ws2ws = dictionary.CARDINAL_DIRECTIONS

    const windDirection = ws2ws[Weather.windDirection]
    if (isUndefined(windDirection)) {
        windDirection = Weather.windDirection
    }

    const windPhrase = WindSpeedHandler(Weather.windSpeed)
    const windMessage = `${windPhrase} to the ${windDirection}`
    const name = Weather.name
    let headlineColor = "black"

    const icon = WeatherIconService(Weather.condition, Weather.isDaytime)

    if (isHoldayService(name)) {
        headlineColor = COLORS.SCHEME.HIGHLIGHT
    }

    return CardService.newKeyValue()
        .setIconUrl(icon)
        .setContent(doGet("Templates/weatherToday", {message, windMessage, name, UI_WIDGET, COLORS, headlineColor }))
        .setMultiline(true)

    //   } catch (e) {
    //         userProperties.setProperty(STATE.WX_SERVICE, "ERR")
    //         return CardService.newKeyValue()
    //             .setIconUrl(WX_ERROR)
    //             .setContent("Wx service error")
    //         throw new Error("stop the fucking loop!!!1")
    //     }
}
