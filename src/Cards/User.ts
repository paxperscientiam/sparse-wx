//     Copyright (C) 2018 Christopher David Ramos
import { CardFactory } from "~Cards/Aux"
import { DisclaimerSection } from "~Cards/Main/Sections/Disclaimer"

import { DictionaryIcons } from "~Data/Dictionary/Icons"
const ICONS = new DictionaryIcons()

import { UserSection } from "~Cards/User/Sections/User"
import { UserInfoSection } from "~Cards/User/Sections/UserInfo"

export function UserCard(args = {}, computed = {}): CardBuilder {
  const cardData = {
    image: ICONS.UI.IMG_LOGO,
    name: "userCard",
    subtitle: " ",
    title: "Settings",
    ...args,
  }

  const widget = CardService.newImage().setAltText("A nice image").setImageUrl("https://raw.githubusercontent.com/paxperscientiam/sparse-wx/test-flag/Img/out/us-flag-large.png")

  return new CardFactory(cardData).addSections([
    UserSection(),
    // @ts-ignore
    UserInfoSection(),
    DisclaimerSection({widget}),
  ])
}
