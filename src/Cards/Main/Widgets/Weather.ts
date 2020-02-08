//     Copyright (C) 2018 Christopher David Ramos
declare const Application: ISparseWx

import { render } from "~Handlers/Templates"

import {fetch, push as pushy} from "~Data/PushPull"

import {
  CARDINAL_DIRECTIONS,
  PROPS,
  UI,
} from "~Data/Dictionary"

import { DictionaryIcons } from "~Data/Dictionary/Icons"
const ICONS = new DictionaryIcons()

import { WindSpeedHandler } from "~Handlers/WindSpeed"

import {
  apparentTemperatureService as serveAppartentTemperature,
  textColorTemperatureService as serveTextColorTemperature,
} from "~Services"

import { convertF2C } from "~Utilities/Date"

import { WidgetFactory } from "~Cards/Aux"
const widgetFactory = new WidgetFactory()
//

export function WeatherWidget(data: IData): KeyValue {
  const widgetData = {}

  const COLORS = UI.PALETTE

  let temperature = data.temp
  let tempUnit = "F"
  const selectedTemperatureUnit = fetch("user", "temp_unit")

  const COLORTEMP = serveTextColorTemperature(temperature)

  // @ts-ignore
  COLORS.TEMP = COLORTEMP

  pushy(["wx", "forecast.temperature"], `${temperature}°${tempUnit}`)

  const windspeedForApparentTemperatureService = ((data.windSpeed).replace(" mph", "")).split(" to ")

  if (selectedTemperatureUnit === "dropdown_item_c") {
    tempUnit = "C"
    temperature = convertF2C(temperature)
  }

  const apparentTemperature = serveAppartentTemperature({
    temperature: Number(temperature),
    windspeed: windspeedForApparentTemperatureService[0],
  })

  // const message  = `${temperature}°${tempUnit}, ${data.condition}`

  const precipitationMessage = `${data.condition}.`

  const temperatureDisplay = `${temperature}°${tempUnit}`

  const ws2ws = CARDINAL_DIRECTIONS

  // @ts-ignore
  let windDirection = ws2ws[(data.windDirection as string)]
  if (windDirection == null) {
    windDirection = data.windDirection
  }

  const windPhrase = WindSpeedHandler(data.windSpeed)
  const windMessage = `${windPhrase} to the ${windDirection}.`
  const name = data.name

  // const iconUrl = serveWeatherIcon(data.condition, data.isDaytime)
  const iconUrl = data.iconUrl

  if (apparentTemperature != null) {
    // @ts-ignore
    widgetData.apparentTemperature = apparentTemperature
  }

  return widgetFactory._KeyValue({
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

  const cwaUrl = Application.userProperties.getProperty(WX.CWA)

  const lat = fetch("user", "lat")
  const lon = fetch("user", "lon")

  const forecastUrl = `https://forecast.weather.gov/MapClick.php?lat=${lat}&lon=${lon}`

  return widgetFactory._KeyValue({
    content: `Go to <a title="loool" href="${forecastUrl}">weather.gov</a> for more detail.`,
    iconUrl: ICONS.UI.IMG_INFO,
    multiline: true,
  })
}

export function WeatherErrorWidget(noWXcomment: string) {
  const data = {
    content: noWXcomment,
    iconUrl: ICONS.UI.IMG_ERROR,
    multiline: true,
  }
  return widgetFactory._KeyValue(data)
}
