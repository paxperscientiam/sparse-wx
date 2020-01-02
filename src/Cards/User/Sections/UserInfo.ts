//     Copyright (C) 2018 Christopher David Ramos
import { render } from "~Handlers/Templates"

import { _CardSection, _Paragraph } from "~Cards/Aux"

export function UserInfoSection(): CardSection {

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

  return _CardSection()
    .addWidget(_Paragraph({
      text: textContent,
    }))
    .build()
}
