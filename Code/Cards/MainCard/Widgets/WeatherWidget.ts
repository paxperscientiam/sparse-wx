//     Copyright (C) 2018 Christopher David Ramos

function WeatherWidget(period = 0) {

    const dictionary = new Dictionary()
    const ICONS = dictionary.ICONS

    const UI_ICONS = ICONS.UI
    const WX_ICONS = ICONS.WX

    const PROPS = dictionary.props
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

    const message  = `${Weather.temp}°${Weather.unit}, ${Weather.condition}`
    Logger.log(`wx message: ${message}`)

    const ws2ws = dictionary.CARDINAL_DIRECTIONS

    const windDirection = ws2ws[Weather.windDirection]
    if (isUndefined(windDirection)) {
        windDirection = Weather.windDirection
    }
    Logger.log("WX object ..")
    Logger.log(Weather)

    const windPhrase = WindSpeedHandler(Weather.windSpeed)
    const windMessage = `${windPhrase} to the ${windDirection}`
    const name = Weather.name

    const icon = WeatherIconService(Weather.condition, Weather.isDaytime)

    return CardService.newKeyValue()
        .setIconUrl(icon)
        .setContent(doGet("Templates/weatherToday", {message, windMessage, name}))
        .setMultiline(true)

    //   } catch (e) {
    //         userProperties.setProperty(STATE.WX_SERVICE, "ERR")
    //         return CardService.newKeyValue()
    //             .setIconUrl(WX_ERROR)
    //             .setContent("Wx service error")
    //         throw new Error("stop the fucking loop!!!1")
    //     }
}
