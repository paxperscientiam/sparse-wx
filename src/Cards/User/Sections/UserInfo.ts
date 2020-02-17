//     Copyright (C) 2018 Christopher David Ramos
import { View } from "@/Controllers/ViewsController"

import { CardSectionFactory, WidgetFactory } from "@/Cards/Aux"

import {UserModel} from "@/Models/UserModel"

export function UserInfoSection(): CardSection {
  const model = new UserModel()
  const useraddress = model.address
  const username = model.name
  Logger.log(`username: ${username == ""}`)
  Logger.log(`username: ${username == null}`)
  Logger.log(`address: ${useraddress == ""}`)
  Logger.log(`address: ${useraddress == null}`)

  const textContent = View.render("userInfo", {
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
