//     Copyright (C) 2018 Christopher David Ramos
import { _Card, _CardSection, _Paragraph } from "Cards/Aux"
import { ResetWidget } from "Cards/Main/Widgets/Reset"

export function WeatherServiceFallbackCard(): CardBuilder {
  const data = {
    name: "fallback",
    subtitle: "National Weather Service API is down.",
    title: "Out of service.",
  }

  const BRAND = dictionary.BRAND

  return _Card(data)
    .addSection(_CardSection()
                .addWidgets([
                  _Paragraph({
                    // tslint:disable-next-line:max-line-length
                    text: `Sorry about the inconvenience. If you have any questions or believe you've encountered a bug, don't hesitate to contact me at <b>${BRAND.EMAILS.BUGS[0]}</b>.`,
                  }),
                  ResetWidget(),
                ])
                .build(),
               )
}
