//     Copyright (C) 2018 Christopher David Ramos
import { render } from "~Handlers/Templates"

import { CardSectionFactory, WidgetFactory } from "~Cards/Aux"

import {fetch} from "~Data/PushPull"

export function UserInfoSection(): CardSection | undefined {

  const useraddress = fetch("user", "address")
  if (!useraddress) {
    return void 0
  }

  const username = fetch("user", "name")
  if (!username) {
    return void 0
  }

  const textContent = render("userInfo", {
    useraddress,
    username,
  })

  const widgetFactory = new WidgetFactory()

  return new CardSectionFactory()
    .addWidget(widgetFactory._Paragraph({
      text: textContent,
    }))
    .build()
}
