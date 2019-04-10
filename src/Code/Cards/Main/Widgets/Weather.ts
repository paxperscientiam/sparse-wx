//     Copyright (C) 2018 Christopher David Ramos
import { render } from "Handlers/Templates"

import { WindSpeedHandler } from "Handlers/WindSpeed"

import {
  apparentTemperatureService as serveAppartentTemperature,
  isHoldayService,
  textColorTemperatureService as serveTextColorTemperature,
  WeatherIconService as serveWeatherIcon,
} from "Services"

import { convertF2C } from "Utilities/Date"

import { _KeyValue } from "Cards/Aux"
//

export function WeatherWidget(data): KeyValue {
  const widgetData = {}

  const COLORS = UI.PALETTE

  const WX_ICONS = ICONS.WX

  let temperature = data.temp
  let tempUnit = "F"
  const selectedTemperatureUnit = fetch("user", "temp_unit")

  const COLORTEMP = serveTextColorTemperature(temperature)
  COLORS.TEMP = COLORTEMP

  push(["wx", "forecast.temperature"], `${temperature}°${tempUnit}`)

  const windspeedForApparentTemperatureService = ((data.windSpeed).replace(" mph", "")).split(" to ")

  if (selectedTemperatureUnit === "dropdown_item_c") {
    tempUnit = "C"
    temperature = convertF2C(temperature)
  }

  const apparentTemperature = serveAppartentTemperature({
    temperature: Number(temperature),
    windspeed: windspeedForApparentTemperatureService[0],
  })

  const message  = `${temperature}°${tempUnit}, ${data.condition}`

  const precipitationMessage = `${data.condition}.`

  const temperatureDisplay = `${temperature}°${tempUnit}`

  const ws2ws = dictionary.CARDINAL_DIRECTIONS

  let windDirection = ws2ws[data.windDirection]
  if (windDirection == null) {
    windDirection = data.windDirection
  }

  const windPhrase = WindSpeedHandler(data.windSpeed)
  const windMessage = `${windPhrase} to the ${windDirection}.`
  const name = data.name

  const iconUrl = serveWeatherIcon(data.condition, data.isDaytime)

  if (apparentTemperature != null) {
    // @ts-ignore
    widgetData.apparentTemperature = apparentTemperature
  }

  return _KeyValue({
    content: render("weatherToday", {
      COLORS,
      day: name,
      precipitationMessage,
      tempUnit,
      temperatureDisplay,
      windMessage,
      ...widgetData,
    }),
    iconUrl,
    multiline: true,
  })
}

export function AuxWeatherWidget() {
  const WX = PROPS.WX

  const cwaUrl = userProperties.getProperty(WX.CWA)

  const lat = fetch("user", "lat")
  const lon = fetch("user", "lon")

  const forecastUrl = `https://forecast.weather.gov/MapClick.php?lat=${lat}&lon=${lon}`

  return _KeyValue({
    content: `Go to <a title="loool" href="${forecastUrl}">weather.gov</a> for more detail.`,
    iconUrl: ICONS.UI.IMG_INFO,
    multiline: true,
  })
}

export function WeatherErrorWidget(noWXcomment: string) {
  const data = {
    content: noWXcomment,
    iconUrl: ICONS.WX.ERROR,
    multiline: true,
  }
  return _KeyValue(data)
}
