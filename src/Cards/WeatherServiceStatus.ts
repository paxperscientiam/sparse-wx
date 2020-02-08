//     Copyright (C) 2018 Christopher David Ramos
import { CardFactory, CardSectionFactory, WidgetFactory } from "@/Cards/Aux"
import { ResetWidget } from "@/Cards/Main/Widgets/Reset"

import {BRAND} from "@/Data/Dictionary"

export function WeatherServiceFallbackCard(): CardBuilder {
  const data = {
    name: "fallback",
    subtitle: "National Weather Service API is down.",
    title: "Out of service.",
  }

  const cardFactory = new CardFactory(data)
  const cardSectionFactory = new CardSectionFactory()
  const widgetFactory = new WidgetFactory()

  const widget = widgetFactory._Paragraph({
    // tslint:disable-next-line:max-line-length
    text: `Sorry about the inconvenience. If you have any questions or believe you've encountered a bug, don't hesitate to contact me at <b>${BRAND.EMAILS.BUGS[0]}</b>.`,
  })
  const section = cardSectionFactory.addWidgets([
    widget,
    ResetWidget(),
  ]).build()

  cardFactory.addSection(section)

  return cardFactory
}
