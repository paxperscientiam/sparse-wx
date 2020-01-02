import * as Utilities from "~Utilities/Utilities"

import { UserCard } from "~Cards/User"

export function ResetWidget(): TextButton {
  const UI = dictionary.UI

  const COLORS = UI.COLORS.SCHEME

  const resetAddonAction = CardService.newAction()
    .setFunctionName("resetAddonCallback")

  return CardService.newTextButton()
    .setText(`<font color="${COLORS.SECONDARY}">[ Reset SparseWx ]</font>`)
    .setOnClickAction(resetAddonAction)
}

// @ts-ignore
global.resetAddonCallback = (): ActionResponse => {
  Utilities.clearUserProperties()
  push(["state", "mint"], true)
  return CardService.newActionResponseBuilder()
    .setNavigation(
      CardService.newNavigation().updateCard(UserCard({subtitle: "let's get started"}).build()),
    )
    .setStateChanged(true)
    .build()
}
