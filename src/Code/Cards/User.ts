//     Copyright (C) 2018 Christopher David Ramos
import { _Card } from "Cards/Aux"
import { DisclaimerSection } from "Cards/Main/Sections/Disclaimer"

import { UserSection } from "Cards/User/Sections/User"
import { UserInfoSection } from "Cards/User/Sections/UserInfo"

export function UserCard(args = {}, computed = {}): CardBuilder {
  const cardData = {
    image: ICONS.UI.IMG_LOGO,
    name: "userCard",
    subtitle: " ",
    title: "Settings",
    ...args,
  }

  return _Card(cardData).addSections([
    UserSection(),
    UserInfoSection(),
    DisclaimerSection(),
  ])
}
