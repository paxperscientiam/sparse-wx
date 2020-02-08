//     Copyright (C) 2018 Christopher David Ramos
import { DateArray } from "~Utilities/Date"

import {fetch} from "~Data/PushPull"

import { DictionaryIcons } from "~Data/Dictionary/Icons"
const ICONS = new DictionaryIcons()

import { WeatherServiceFallbackCard } from "~Cards/WeatherServiceStatus"

import { DisclaimerSection } from "~Cards/Main/Sections/Disclaimer"
import { NavSection } from "~Cards/Main/Sections/Nav"
import { WeatherSection } from "~Cards/Main/Sections/Weather"

import { CardFactory } from "~Cards/Aux"
//
import { UserCard } from "~Cards/User"

import {
  checkUserServiceStatus,
  checkWeatherServiceStatus,
} from "~Services"
//
export function MainCard(): CardBuilder {
  // Check if NWS API is working
  if (checkWeatherServiceStatus() !== "OK") {
    return WeatherServiceFallbackCard()
  }

  // Check if user address is defined
  if (checkUserServiceStatus() !== "OK") {
    return UserCard({subtitle: "let's get started"})
  }

  const date = new DateArray()

  const userName = fetch("user", "name")

  const greeting = (() => {
    if (!!userName) {
      return `${date.GREETING}, ${userName}!`
    } else {
      return `${date.GREETING}!`
    }
  })()

  const data = {
    image: ICONS.UI.IMG_LOGO,
    name: "mainCard",
    subtitle: `Today is ${date.WEEKDAY}.`,
    title: greeting,
  }

  return new CardFactory(data).addSections([
    WeatherSection(),
    NavSection(),
    DisclaimerSection(),
  ])
}
