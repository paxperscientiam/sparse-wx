//     Copyright (C) 2018 Christopher David Ramos
import {
  getAlertsByStateService,
  getForecastStalenessService,
  getWeatherServiceDataService,
} from "~Services"

import dlv from "@paxperscientiam/dlv.ts/dist/dlv.umd"

import { timeStamp } from "~Utilities/Date"

import { commaThousDotDec } from "~Utilities/Number"

import { render } from "~Handlers/Templates"

import {
  objectPath,
} from "~Vendor"

import * as Truthy from "~Utilities/Math"

import { _CardSection, _Paragraph } from "~Cards/Aux"

import { formatDateService } from "~Utilities/Date"

import { _KeyValue } from "~Cards/Aux"

import {
  AuxWeatherWidget,
  WeatherErrorWidget,
  WeatherWidget,
} from "~Cards/Main/Widgets/Weather"

export function WeatherSection(): CardSection {
  const wxSectionData = {}

  const address = fetch("user", "address")
  if (!address) {
    throw new Error("Unable to determine your location")
  }

  let header
  let widgetTextUpdateTime

  const alertUrl = dictionary.HTTP.WX_SERVICE.URL.STATE_ALERTS

  const objForecastStaleness = getForecastStalenessService()

  const weatherData = getWeatherServiceDataService()

  const locality = fetch("user", "city")
  const userstate = fetch("user", "state")

  const elevation = fetch("wx", "elevation") // {"value":0,"unitCode":"unit:m"}

  const elevationM = dlv(elevation, "value")

  let location
  if (!!locality) {
    location = locality
  }
  if (!!userstate) {
    location += ", " + userstate
  }

  const objgetAlertsByStateService = getAlertsByStateService()

  let alertsCount = 0
  let alertsLink = "#"

  if (objgetAlertsByStateService[0]) {
    alertsCount = objgetAlertsByStateService[1]
    alertsLink = `${alertUrl}${userstate}.php?x=1`
  }

  if (elevationM != null) {
    // @ts-ignore
    wxSectionData.elevationM = commaThousDotDec(
      parseInt(elevationM, 10),
    )
    // @ts-ignore
    wxSectionData.elevationFt = commaThousDotDec(
      // @ts-ignore
      parseInt(elevationM * 3.281, 10),
    )
  }

  header = render("localityInfo", {
    alertsCount,
    alertsLink,
    location,
    ...wxSectionData,
  })

  widgetTextUpdateTime = " "

  const strUpdateDate = fetch("wx", "updateTime")

  let  dateUpdateDate

  if (!strUpdateDate) {
    widgetTextUpdateTime = " "
  }

  dateUpdateDate = new Date(strUpdateDate)

  if (Truthy.isDate(dateUpdateDate)) {
    if (objForecastStaleness[0]) {
      widgetTextUpdateTime = `Last updated ${objForecastStaleness[1].toLowerCase()} ago
${formatDateService(dateUpdateDate)}`
    }
  }

  const data = {
    header: "SparseWx 🇺🇸",
  }

  push(["state", "card.Main.section.Weather.header"], widgetTextUpdateTime)

  const wxSection = _CardSection(data)
    .addWidget(_Paragraph({
      text: header,
    }))

  const wxPN =  weatherData

  let wxPNResult

  const wxPnStatus = wxPN.status[wxPN.status.length - 1 ]

  try {
    if (!wxPnStatus[0]) {
      throw new Error(wxPnStatus[1])
    }
    let i = 0
    do {
      wxPNResult = wxPN.getPeriod(i)
      wxSection.addWidget(WeatherWidget(wxPNResult))
      i++
    } while (i < wxPN.wxPeriodCount)
    Logger.log(`[${timeStamp()}][isWxFetchSuccessful]: TRUE`)
    wxSection.addWidget(_KeyValue({
      content: `<p><font color="#AAAAAA">${widgetTextUpdateTime}</font></p>`,
      multiline: true,
    }))
  } catch (e) {
    Logger.log(`[${timeStamp()}] ${e.message}`)
    wxSection.addWidget(WeatherErrorWidget(e.message))
  } finally {
    wxSection.addWidget(AuxWeatherWidget())
  }

  return wxSection.build()
}
