import * as Utilities from "~Utilities/Utilities"

import { UserCard } from "~Cards/User"

import { push as pushy } from "~Data/PushPull"

import {UI} from "~Data/Dictionary"

export function ResetWidget(): TextButton {
  const COLORS = UI.COLORS.SCHEME

  const resetAddonAction = CardService.newAction()
    .setFunctionName("resetAddonCallback")

  return CardService.newTextButton()
    .setText(`<font color="${COLORS.SECONDARY}">[ Reset SparseWx ]</font>`)
    .setOnClickAction(resetAddonAction)
}

// @ts-ignore
Application.resetAddonCallback = (): ActionResponse => {
  Utilities.clearUserProperties()
  pushy(["state", "mint"], true)
  return CardService.newActionResponseBuilder()
    .setNavigation(
      CardService.newNavigation().updateCard(UserCard({subtitle: "let's get started"}).build()),
    )
    .setStateChanged(true)
    .build()
}
